module.exports = {
  getUser: (req, res, next) => {
    const dbInstance = req.app.get('db')

    dbInstance.get_userdata()
      .then(() => res.status(200).send()) // userid
      .catch(() => res.status(200).send())
  // },
  //
  // getAllfamily: (req, res, next) => {
  //   const dbInstance = req.app.get('db')
  //
  //   dbInstance.get_familytime()
  //     .then(() => res.status(200).send())
  //     .catch(() => res.status(200).send())
  // },
  //
  // getAllself: (req, res, next) => {
  //   const dbInstance = req.app.get('db')
  //
  //   dbInstance.get_selftime()
  //     .then(() => res.status(200).send())
  //     .catch(() => res.status(200).send())
  // },
  //
  // getself: (req, res, next) => {
  //   const dbInstance = req.app.get('db')
  //
  //   dbInstance.get_work()
  //     .then(() => res.status(200).send())
  //     .catch(() => res.status(200).send())
  }
}
