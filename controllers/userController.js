module.exports = {
  getUsers: async (req, res, next) => {
    res.json({
      message: "Hello from controllers"
    });
  }
};
