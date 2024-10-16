// blacklists.js
const { makeRequest } = require("../utils/request");

class Folder {
    constructor(api_key) {
        this.api_key = api_key;
    }

    /**
     * Retrieves a list of folders.
     * @param {number} [fldId=0] - The parent folder ID (default is 0).
     * @param {number} [files=1] - If set to 1, includes files in the response.
     * @returns {Promise<object>} The response containing the folder list.
     */
    async getFolderList(fldId = 0, files = 1) {
        try {
            const endpoint = `folder/list`;
            const params = { fld_id: fldId, files }; // Parameters to be included in the request

            return await makeRequest(this.api_key, endpoint, params);
        } catch (error) {
            throw error;
        }
    }

    /**
     * Creates a new folder.
     * @param {string} name - The name of the folder to create.
     * @param {number} [parentId=0] - The parent folder ID (default is 0).
     * @param {string} [descr] - Optional description for the folder.
     * @returns {Promise<object>} The response from the API after creating the folder.
     */
    async createFolder(name, parentId = 0, descr) {
        try {
            const endpoint = `folder/create`;
            const params = { name, parent_id: parentId }; // Required parameters

            // Include optional description if provided
            if (descr) {
                params.descr = descr;
            }

            return await makeRequest(this.api_key, endpoint, params);
        } catch (error) {
            throw error;
        }
    }

    /**
     * Edits an existing folder.
     * @param {number} fldId - The ID of the folder to edit.
     * @param {string} name - The new name for the folder.
     * @param {number} [parentId] - Optional parent folder ID.
     * @param {string} [descr] - Optional description for the folder.
     * @returns {Promise<object>} The response from the API after editing the folder.
     */
    async editFolder(fldId, name, parentId, descr) {
        try {
            const endpoint = `folder/edit`;
            const params = { fld_id: fldId, name }; // Required parameters

            // Include optional parameters if provided
            if (parentId !== undefined) {
                params.parent_id = parentId;
            }
            if (descr) {
                params.descr = descr;
            }

            return await makeRequest(this.api_key, endpoint, params);
        } catch (error) {
            throw error;
        }
    }

}

module.exports = Folder;
