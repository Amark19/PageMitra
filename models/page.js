const { client, getAsync, setAsync } = require('../db');

class Page {
    constructor(pageId, pageTitle, readAccess = [], editAccess = [], pageData = '') {
        this.pageId = pageId;
        this.pageTitle = pageTitle;
        this.readAccess = readAccess;
        this.editAccess = editAccess;
        this.pageData = pageData;
    }

    static async get(pageId) {
        const pageData = await getAsync(`page:${pageId}`);
        return pageData ? JSON.parse(pageData) : null;
    }

    async save() {
        const pageData = JSON.stringify(this);
        await setAsync(`page:${this.pageId}`, pageData);
    }
}

module.exports = Page;