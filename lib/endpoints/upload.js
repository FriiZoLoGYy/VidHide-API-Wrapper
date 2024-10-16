// blacklists.js
const { makeRequest } = require("../utils/request");
const axios = require("axios");
const FormData = require("form-data");

class Upload {
    constructor(api_key) {
        this.api_key = api_key;
    }

    /**
     * Retrieves the upload server.
     * @returns {Promise<string>} The upload server URL.
     */
    async getUploadServer() {
        try {
            const endpoint  = `upload/server`;
            return await makeRequest(this.api_key, endpoint);
        } catch (error) {
            throw error;
        }
    }

    /**
     * Uploads a video file to the server.
     * @param {File} videoFile - The video file to upload.
     * @param {string} fileTitle - Title of the video.
     * @param {string} fileDescr - Description of the video.
     * @param {File} [snapshot] - Optional custom video snapshot (up to 500KB).
     * @param {number} [fldId] - Optional folder ID.
     * @param {number} [catId] - Optional category ID.
     * @param {string} [tags] - Optional tags list.
     * @param {number} [filePublic=1] - Optional public flag (default 1).
     * @param {number} [fileAdult=0] - Optional adult flag (default 0).
     * @returns {Promise<object>} The response from the upload server.
     */
    async uploadFile(videoFile, fileTitle, fileDescr, snapshot, fldId, catId, tags, filePublic = 1, fileAdult = 0) {
        try {
            // Step 1: Get the upload server URL
            const uploadServerUrl = await this.getUploadServer();

            // Step 2: Prepare the form data
            const formData = new FormData();
            formData.append('key', this.api_key);
            formData.append('file', videoFile);
            formData.append('file_title', fileTitle);
            formData.append('file_descr', fileDescr);
            if (snapshot) {
                formData.append('snapshot', snapshot);
            }
            if (fldId) {
                formData.append('fld_id', fldId);
            }
            if (catId) {
                formData.append('cat_id', catId);
            }
            if (tags) {
                formData.append('tags', tags);
            }
            formData.append('file_public', filePublic);
            formData.append('file_adult', fileAdult);

            // Step 3: Upload the file to the server
            const response = await axios.post(uploadServerUrl, formData, {
                headers: {
                    ...formData.getHeaders(), // Set the correct headers for form data
                },
            });

            return response.data; // Return the server response
        } catch (error) {
            throw error;
        }
    }


    /**
     * Uploads a video from a URL to the server.
     * @param {string} url - The URL to the video file.
     * @param {number} [fldId] - Optional folder ID.
     * @param {number} [catId] - Optional category ID.
     * @param {number} [filePublic=1] - Optional public flag (default 1).
     * @param {number} [fileAdult=0] - Optional adult flag (default 0).
     * @param {string} [tags] - Optional tags list.
     * @returns {Promise<object>} The response from the upload server.
     */
    async uploadByUrl(url, fldId, catId, filePublic = 1, fileAdult = 0, tags) {
        try {
            // Step 1: Construct the endpoint and parameters
            const endpoint = 'upload/url';
            const params = {
                key: this.api_key,
                url: url,
                fld_id: fldId,
                cat_id: catId,
                file_public: filePublic,
                file_adult: fileAdult,
                tags: tags,
            };

            // Step 2: Make the request to upload the video URL
            const response = await makeRequest(this.api_key, endpoint, params);

            return response; // Return the server response
        } catch (error) {
            throw error;
        }
    }

}

module.exports = Upload;
