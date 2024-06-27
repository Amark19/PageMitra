const PageController = require('../models/page');
const User = require('../models/user');

exports.createTestPage = async (req, res) => {
    const { pageId, pageTitle, readAccess, editAccess, pageData, userId } = req.body;
    const page = new PageController(pageId, pageTitle, readAccess, editAccess, pageData);
    await page.save();

    // Update user model with the new page
    const user = await User.get(userId);
    if (user) {
        user.pages.push(pageId);
        await user.save();
    }

    res.send('PageController created');
};

exports.getTestPage = async (req, res) => {
    const { userName, pageTitle } = req.params;

    // Fetch the page by title (you might want to change this to fetch by ID instead)
    const page = await PageController.get(pageTitle); // Assuming title is unique, adjust as necessary
    if (page) {
        const userId = req.query.userId; // Assuming userId is sent as a query parameter
        if (page.readAccess.includes(userId)) {
            res.render('testPage', { userName, pageTitle });
        } else {
            res.status(403).send('Unauthorized');
        }
    } else {
        res.status(404).send('PageController not found');
    }
};