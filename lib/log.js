const logError = (ob)=>{
    console.error(ob);
}
const logWarning = (ob) =>{
    console.warn(ob);
}
const logDebug = (ob) =>{
    console.debug(ob);
}
const logCritical = (ob) =>{
    console.error(ob);
}
const logInfo = (ob) =>{
    console.info(ob);
}
module.exports = {
    logError,
    logWarning,
    logDebug,
    logInfo,
    logCritical
}
