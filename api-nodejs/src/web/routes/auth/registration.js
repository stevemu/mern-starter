let Membership = require('../../../lib/membership').Membership;

let RegistrationRoute = function (app, db) {

  let membership = new Membership(db);

  app.post('/auth/registration', async (req, res) => {
    let result = await membership.register(req.body);
    if (result.success) {
      res.status(200).json({success: true});
    } else {
      res.status(400).json({error: result.message});
    }

  });



};

module.exports = RegistrationRoute;
