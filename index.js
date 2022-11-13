
export default {

    /**
     * Includes various functions to interact with the NASA API.
     * @see {@link https://api.nasa.gov/} for more information.
     */
    NASA: (await import("./lib/nasa.js")).default,

    /**
     * Constructs a string in a nice url query format.
     */
    queryBuilder: (await import("./lib/query.js")).default
}