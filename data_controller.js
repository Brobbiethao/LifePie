module.exports = {

    //                              //Get START//                            //

    getAllUsers: (req, res, next) => {
      const dbInstance = req.app.get('db');

      dbInstance.users()
        .then((userdata) => {
          res.send(userdata)
        })
        .catch((err) => {
          res.send(err)
        })
    },

    getUser: (req, res, next) => {
      const dbInstance = req.app.get('db');

      dbInstance.get_user(req.params.profilename)
        .then((profilename) => {
          res.send(profilename)
        })
        .catch(() => {
          res.send()
        })
    },

    getLife: (req, res, next) => {
      const dbInstance = req.app.get('db');

      dbInstance.qualityOfLife()
        .then((qualityoflife) => {
          res.send(qualityoflife)
        })
        .catch(() => {
          res.send()
        })
    },
    //                              //Post Start //
    // This creates a new user entry
    createUser: function(req, res, next) {
      console.log("Req.body", req.body);
      const dbInstance = req.app.get('db');
      const {profilename, age, gender, password, image} = req.body;
      const inputs = [profilename, age, gender, password, image];
      // console.log(inputs)
      dbInstance.create_user(inputs)
      .then(function(userdata)  {
      res.status(200).json(userdata)
      })
      .catch(function(err) {
        res.status(200).json("Hey")
      })
    },
    // This creates a new life entry
    createLife: function(req, res, next) {
      const dbInstance = req.app.get('db');
      const {social, work, sleep, development} = req.body;
      const inputs = [social, work, sleep, development];

      dbInstance.create_qualityOfLife(inputs)
      .then(function(qualityOfLife) {
        res.status(200).json(qualityOfLife)
      })
      .catch(function(err) {
        res.status(200).json("Mcgregor")
      })
    }
  }
