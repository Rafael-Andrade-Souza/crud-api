const mongoose = require("mongoose");
const User = require("../data/Post")
const mockingoose = require('mockingoose');



describe('mockingoose', () => {
    beforeEach(() => {
      mockingoose.resetAll();
      jest.clearAllMocks();
    });

const userModel = {
    name: "Test Name",
    storeName: "Store Name Test"
};

// Create And Save

test ("Create and save a new user", async () => {
        const correctUser = new User(userModel);
        const saveUser = await correctUser.save();

// Return Object Name, storeName and ID
    expect(saveUser.name).toBe(userModel.name);
    expect(saveUser.storeName).toBe(saveUser.storeName);
})
})

