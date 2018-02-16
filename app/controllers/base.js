module.exports = {
  index: (req, res) => res.send({
    status: 200,
    message: 'Welcome, I will be here soon..!'
  }),

  read: (req, res) => res.send({
    status: 200,
    message: `Welcome, asset ${req.params.id} will be here soon..!`
  })
};
