// apiUtils.js
const axios = require("axios").default;

async function makeRequest(apiKey, endpoint, params = {}) {
    const url = `https://vidhide.com/api/${endpoint}`;
    const response = await axios.get(url, {
        params: {
            key: apiKey, // Use the API key provided by the user
            ...params,
        },
    });
    return response.data;
};

module.exports = {
    makeRequest
};
