/**
 * Converts a table to a query string.
 * @param {object} obj 
 */
var encode = (obj) => {
    return Object.keys(obj).map((v,i,a) => `${i == 0 ? "?" : "&"}${v}=${encodeURI(obj[v])}`).join("")
}

/**
 * Converts a query string to a table.
 * @param {string} query 
 */
var decode = (query) => {
    return query.split(/\b((\?|&))((?!\&)\w*=\w*)/gmd).filter(s => s.match(/\w*=\w/dg))?.map(e => {
        let object = e.split("=")
        return {[object[0]]: object[1]}
    })
}

export {encode, decode}