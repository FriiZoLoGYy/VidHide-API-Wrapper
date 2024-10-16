// blacklists.js
const { makeRequest } = require("../utils/request");

class File {
    constructor(api_key) {
        this.api_key = api_key;
    }

    /**
	 * @param {string} file_code Retrieves a file by the entered ID.
	 */
    async getFileInfo(file_code) {
        try {
            const endpoint  = `file/info`;
            const params = { file_code };
            return await makeRequest(this.api_key, endpoint, params);
        } catch (error) {
            throw error;
        }
    }

    /**
     * Edits the information of a file.
     * @param {string} file_code - The code of the file to edit (or comma-separated list).
     * @param {string} file_title - The new title for the file.
     * @param {string} [file_descr] - Optional new description for the file.
     * @param {number} [cat_id] - Optional category ID.
     * @param {number} [file_fld_id] - Optional folder ID.
     * @param {number} [file_public=1] - Optional public flag (default is 1).
     * @param {number} [file_adult=0] - Optional adult flag (default is 0).
     * @param {string} [tags] - Optional tags list.
     * @returns {Promise<object>} The response from the server after editing the file.
     */
    async editFile(file_code, file_title, file_descr, cat_id, file_fld_id, file_public = 1, file_adult = 0, tags) {
        try {
            const endpoint = `file/edit`;
            const params = {
                file_code,
                file_title,
                file_descr,
                cat_id,
                file_fld_id,
                file_public,
                file_adult,
                tags,
            };

            return await makeRequest(this.api_key, endpoint, params);
        } catch (error) {
            throw error;
        }
    }

    /**
     * Retrieves a list of files from the server.
     * @param {number} [fld_id] - Optional folder ID to filter the list by.
     * @param {string} [title] - Optional filter to search by video title.
     * @param {string} [created] - Optional timestamp to show only videos uploaded after the specified time.
     * @param {number} [public] - Optional flag to show public (1) or private (0) videos only. Leave empty to show all.
     * @param {number} [adult] - Optional flag to show adult (1) or safe (0) videos only. Leave empty to show all.
     * @param {number} [per_page=50] - Optional number of results per page (default is 50).
     * @param {number} [page=1] - Optional page number to retrieve (default is 1).
     * @returns {Promise<object>} The response from the server containing the file list.
     */
    async getFileList(fld_id, title, created, public, adult, per_page = 50, page = 1) {
        try {
            const endpoint = `file/list`;
            const params = {
                fld_id,
                title,
                created,
                public,
                adult,
                per_page,
                page,
            };

            return await makeRequest(this.api_key, endpoint, params);
        } catch (error) {
            throw error;
        }
    }

    /**
     * Retrieves the direct link for a specified file.
     * @param {string} file_code - The code of the file to retrieve the direct link for.
     * @param {string} [q] - Optional video quality if available (possible values: n, h, l, o).
     * @param {boolean} [hls=false] - Optional flag to specify if HLS is needed (true for HLS).
     * @returns {Promise<object>} The response from the server containing the direct link.
     */
    async getDirectLink(file_code, q, hls = false) {
        try {
            const endpoint = `file/direct_link`;
            const params = {
                file_code,
                q,
                hls: hls ? 1 : 0,
            };

            return await makeRequest(this.api_key, endpoint, params);
        } catch (error) {
            throw error;
        }
    }

    /**
     * Clones a file to create a new file with an optional new title.
     * @param {string} file_code - The source file code to clone.
     * @param {string} [fileTitle] - Optional new title for the cloned file.
     * @param {number} [fldId] - Optional folder ID for the cloned file.
     * @returns {Promise<object>} The response from the server containing the cloned file information.
     */
    async cloneFile(file_code, fileTitle, fldId) {
        try {
            const endpoint = `file/clone`;
            const params = {
                file_code,
                file_title: fileTitle,
                fld_id: fldId,
            };

            return await makeRequest(this.api_key, endpoint, params);
        } catch (error) {
            throw error;
        }
    }

    /**
     * Deletes a file using its file code.
     * @param {string} file_code - The file code of the file to be deleted.
     * @returns {Promise<object>} The response from the server confirming the deletion.
     */
    async fileDelete(file_code) {
        try {
            const endpoint = `file/delete`;
            const params = { file_code };

            return await makeRequest(this.api_key, endpoint, params);
        } catch (error) {
            throw error;
        }
    }

    /**
     * Retrieves a list of deleted files.
     * @param {number} [last=24] - Optional. Number of hours to show deleted files from (default is 24 hours).
     * @returns {Promise<object>} The response from the server containing deleted files.
     */
    async getDeletedFiles(last = 24) {
        try {
            const endpoint = `file/deleted`;
            const params = { last };

            return await makeRequest(this.api_key, endpoint, params);
        } catch (error) {
            throw error;
        }
    }

    /**
         * Retrieves a list of deleted files.
         * @param {number} [last=24] - Optional. Number of hours to show files reported from (default is 24 hours).
         * @returns {Promise<object>} The response from the server containing DMCA files.
         */
    async getDMCAFiles(last = 24) {
        try {
            const endpoint = `file/dmca`;
            const params = { last };

            return await makeRequest(this.api_key, endpoint, params);
        } catch (error) {
            throw error;
        }
    }

    /**
     * Retrieves encoding information for a specified file.
     * @param {string} file_code - The code of the file for which to retrieve encoding information.
     * @returns {Promise<object>} The response from the server containing encoding information.
     */
    async getFileEncodings(file_code) {
        try {
            const endpoint = `file/encodings`;
            const params = { file_code }; // Required: API key, Required: file_code

            return await makeRequest(this.api_key, endpoint, params);
        } catch (error) {
            throw error;
        }
    }

    /**
     * Retrieves the URL uploads for a specified file.
     * @param {string} file_code - The code of the file for which to retrieve URL uploads.
     * @returns {Promise<object>} The response from the server containing URL uploads information.
     */
    async getUrlUploads(file_code) {
        try {
            const endpoint = `file/url_uploads`;
            const params = { file_code }; // Required: API key, Required: file_code

            return await makeRequest(this.api_key, endpoint, params);
        } catch (error) {
            throw error;
        }
    }

    /**
     * Performs actions on URL uploads.
     * @param {number} [restartErrors] - Set to 1 to restart all failed uploads.
     * @param {number} [deleteErrors] - Set to 1 to delete all failed uploads.
     * @param {number} [deleteAll] - Set to 1 to delete all current uploads.
     * @param {string} [deleteCode] - The code of the upload to delete (if applicable).
     * @returns {Promise<object>} The response from the server after performing the action.
     */
    async urlUploadActions(restartErrors, deleteErrors, deleteAll, deleteCode) {
        try {
            const endpoint = `file/url_actions`;
            const params = {};

            // Optional parameters based on user input
            if (restartErrors) {
                params.restart_errors = restartErrors;
            }
            if (deleteErrors) {
                params.delete_errors = deleteErrors;
            }
            if (deleteAll) {
                params.delete_all = deleteAll;
            }
            if (deleteCode) {
                params.delete_code = deleteCode;
            }

            return await makeRequest(this.api_key, endpoint, params);
        } catch (error) {
            throw error;
        }
    }


}

module.exports = File;
