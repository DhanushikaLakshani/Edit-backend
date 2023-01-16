module.exports = function(app) {


    const EprofileController = require("../controllers/EprofileController");

    app.post('/register', EprofileController.registerProfile);
    
};