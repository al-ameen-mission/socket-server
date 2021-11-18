const fs = require("fs");
const {logError, logDebug, logInfo} = require("../lib/log");

module.exports = () =>{

    try {
        let file = process.env.PORTAL_PATH + "/portal-map.json";
        let _PORTAL_CONFIG = JSON.parse(fs.readFileSync(file, 'utf-8'));
        return {
            getConfig : (domain) =>{
                domain = domain.replace("www.", "");
                let config = null;
                if(_PORTAL_CONFIG && _PORTAL_CONFIG[domain]){
                    config = _PORTAL_CONFIG[domain];
                    config["answer_path"] = config["answer_path"]?.replace("__PORTAL__", process.env.PORTAL_PATH).replace("__DOMAIN__",domain)
                    return {
                        config,
                        getAnswerFilePath : () =>{
                            return config["answer_path"];
                        }
                    }
                } else{
                    logError(new Error("No configuration found"));
                    return null;
                }
            }
        }
    } catch (e){
        throw e;
    }
}
