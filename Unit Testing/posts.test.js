const { deleted, postUpdate, post, posts, postSaved } = require('../routes/posts');
const mongoose = require("mongoose");

const userModel = {
    name: "Test Name",
    storeName: "Store Name Test"
};

// Create And Save
describe("Schema Model", () => {
    it("Create and save a new user", () => {
        const correctUser = new User(userModel);
        const saveUser = correctUser.save();
    })
// Return Object Name, storeName and ID
expect(saveUser._id).toBeDefined();
expect(saveUser.name).toBe(userModel.name);
expect(saveUser.storeName).toBe(user.Save.storeName);
})
