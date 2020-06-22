// Import controllers
const AuthenticationController = require('./controllers/AuthenticationController');
const SavedController = require('./controllers/SavedController');
const ProfileController = require('./controllers/ProfileController');

// Import policies
const authPolicy = require('./policies/reqAuthorized');

module.exports = (app) => {
    // Auth
    app.post('/register', AuthenticationController.register);
    app.post('/login', AuthenticationController.login);

    // Saved text
    app.post('/saved', authPolicy, SavedController.post);
    app.delete('/saved/:id', authPolicy, SavedController.delete);
    app.get('/saved/:email', authPolicy, SavedController.get);

    // Profile
    app.post('/changePassword', authPolicy, ProfileController.changePassword);
}