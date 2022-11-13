
class NASA {
    
    /**
     *
     * @param {object} options 
     * @param {string} options.apiKey
     */
    constructor(options){
        this.options = options
    }

    test = () => {
        return this.options | "null"
    }
}

export default NASA