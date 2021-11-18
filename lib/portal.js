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
    let config = null
    if(_PORTAL_CONFIG && _PORTAL_CONFIG[domain]){
        config = _PORTAL_CONFIG[domain];
        return new Config(config, domain);
    } else{
        logError(new Error("No configuration found"));
        return null;
    }
}

class Config{
    _config = null;
    _domain = null;
    constructor(config, domain) {
        this._config = config;
        this._domain = domain;
    }

    getAnswerFilePath(){
        return this._config["answer_path"]?.replace("__PORTAL__", process.env.PORTAL_PATH).replace("__DOMAIN__",this._domain);
    }


}

module.exports = {
    getConfig
}
