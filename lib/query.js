
/**
 * 
 * @param {object} obj 
 * @returns {string}
 */
export default function(obj){
    return Object.keys(obj).map((v,i,a) => `${i == 0 ? "?" : "&"}${v}=${encodeURI(obj[v])}`).join("")
}