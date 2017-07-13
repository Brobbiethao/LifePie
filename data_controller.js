module.exports = {

//                              //Get START//                            //

    getAllUsers: (req, res, next)           => {
      const dbInstance = req.app.get('db');

      dbInstance.users(req.body)
        .then   ( (userdata)                => { res.send(userdata) } )
        .catch  ( ()                        => { res.send() } )
    },

    getUser: (req, res, next)               => {
      const dbInstance = req.app.get('db');

      dbInstance.get_user(req.params.username)
        .then   ( (username)                => { res.send(username) } )
        .catch  ( ()                        => { res.send() } )
    },

    getLife: (req, res, next)      => {
      const dbInstance = req.app.get('db');

      dbInstance.life(req.body)
        .then   ( (qualityoflife)           => { res.send(qualityoflife) } )
        .catch  ( ()                        => { res.send() } )
    }
//                              //Get END //                            //

  }
