let Rollbar = require('rollbar')
var rollbar = new Rollbar({
    accessToken: '24ff85b2b64f491ca9f1463c0918ee02',
    captureUncaught: true,
    captureUnhandledRejections: true,
})

const logError = (ob)=>{
    console.error(ob);
    rollbar.error(ob);
}
const logWarning = (ob) =>{
    console.warn(ob);
    rollbar.warn(ob);
}
const logDebug = (ob) =>{
    console.debug(ob);
    rollbar.debug(ob);
}
const logCritical = (ob) =>{
    console.error(ob);
    rollbar.critical(ob);
}
const logInfo = (ob) =>{
    console.info(ob);
    rollbar.info(ob);
}
module.exports = {
    logError,
    logWarning,
    logDebug,
    logInfo,
    logCritical, rollbar
}
