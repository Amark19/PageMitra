const {client, getAsync, setAsync} = require('../db');

class User {
    constructor(username, userId, pages = []) {
        this.username = username;
        this.userId = userId;
        this.pages = pages;
    }

    static async get(userId) {
        const userData = await getAsync(`user:${userId}`);
        return userData ? JSON.parse(userData) : null;
    }

    async save() {
        const userData = JSON.stringify(this);
        await setAsync(`user:${this.userId}`, userData);
    }
}

module.exports = User;