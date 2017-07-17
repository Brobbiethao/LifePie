module.exports = {

    //                              //Get START//                            //
    //This gets all users
    getAllUsers: (req, res, next) => {
      const dbInstance = req.app.get('db');

      dbInstance.users()
        .then((userdata) => {
          res.status(200).json(userdata)
        })
        .catch((err) => {
          res.status(200).json(err)
        })
    },
    //this gets specific user
    getUser: (req, res, next) => {
      const dbInstance = req.app.get('db');

      dbInstance.get_user(req.params.profilename)
        .then((profilename) => {
          res.status(200).json(profilename)
        })
        .catch((err) => {
          res.status(200).json(err)
        })
    },
    // This gets Allpiedata
    getPie: (req, res, next) => {
      const dbInstance = req.app.get('db');

      dbInstance.piedata()
        .then((piedata) => {
          res.status(200).json(piedata)
        })
        .catch((err) => {
          res.status(200).json(err)
        })
    },

    getAllPie: (req, res, next) => {
      const dbInstance = req.app.get('db');

      dbInstance.userpie()
        .then((piedata) => {
          console.log(piedata)
          res.status(200).json(piedata)
        })
        .catch((err) => {
          console.log(err)
          res.status(200).json(err)
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
      .then((userdata) => {
      res.status(200).json(userdata)
      })
      .catch(function(err) {
        res.status(200).json(err)
      })
    },
    // This creates a new life entry
    createLife: function(req, res, next) {
      console.log("Req.body", req.body);
      const dbInstance = req.app.get('db');
      const {social, work, sleep} = req.body;
      const inputs = [social, work, sleep];

      dbInstance.create_newlife(inputs)
      .then((piedata) => {
        res.status(200).json(piedata)
      })
      .catch((err) => {
        res.status(200).json(err)
      })
    }
  };
