const Account = require('./endpoints/account');
const Upload = require('./endpoints/upload');
const File = require('./endpoints/file');
const Folder = require('./endpoints/folder');

class VidHide {
    constructor(api_key) {
        this.api_key = api_key;

        this.account = new Account(api_key);
        this.upload = new Upload(api_key);
        this.file = new File(api_key);
        this.folder = new Folder(api_key);
    }
}

module.exports = VidHide;