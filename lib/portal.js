const fs = require("fs");
const {logError, logDebug, logInfo} = require("../lib/log");
let _PORTAL_CONFIG ;
try {
    let file = process.env.PORTAL_PATH + "/portal-map.json";
    _PORTAL_CONFIG = JSON.parse(fs.readFileSync(file, 'utf-8'));
    logInfo(`Portal Configuration Loaded successfully from \`${file}\``);
} catch (e){
    throw e;
}
const getConfig = (domain) =>{
    domain = domain.replace("www.", "");
    let config = null;
    if(_PORTAL_CONFIG && _PORTAL_CONFIG[domain]){
        config = _PORTAL_CONFIG[domain];
        return {
            config,
            getAnswerFilePath : () =>{
                return config["answer_path"]?.replace("__PORTAL__", process.env.PORTAL_PATH).replace("__DOMAIN__",this._domain);
            }
        }
    } else{
        logError(new Error("No configuration found"));
        return null;
    }
}
module.exports = {
    getConfig
}
