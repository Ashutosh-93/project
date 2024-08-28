const bcrypt = require('bcryptjs');

// Function to hash the password
const hashPassword = async function(password) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        console.log(hashedPassword);
        return hashedPassword;
    } catch (error) {
        console.error("Error hashing password:", error);
        throw error; // Rethrow the error after logging it
    }
};

// Function to compare the password
const comparePassword = async (plainPassword, hashedPassword) => {
    try {
        return await bcrypt.compare(plainPassword, hashedPassword);
    } catch (error) {
        console.error("Error comparing passwords:", error);
        throw error; // Rethrow the error after logging it
    }
};

module.exports = { hashPassword, comparePassword };
