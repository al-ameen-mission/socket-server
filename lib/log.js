let Rollbar = require('rollbar')
let rollbar = new Rollbar({
    accessToken: '524d78f0a8fb43f2b5a48ac1c7843985',
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
