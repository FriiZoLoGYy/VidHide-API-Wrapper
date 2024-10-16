// blacklists.js
const { makeRequest } = require("../utils/request");

class Account {
    constructor(api_key) {
        this.api_key = api_key;
    }

    /**
	 * @returns Returns a list of all the blacklists created.
	 */
    async getAccountInfo() {
        try {
            const endpoint  = `account/info`;
            return await makeRequest(this.api_key, endpoint);
        } catch (error) {
            throw error;
        }
    }

    /**
	 * @param {string} id Retrieves a blacklist by the entered ID.
	 */
    async getAccountStats(last = 7) {
        try {
            const endpoint  = `account/stats`;
            const params = { last };
            return await makeRequest(this.api_key, endpoint, params);
        } catch (error) {
            throw error;
        }
    }

}

module.exports = Account;
