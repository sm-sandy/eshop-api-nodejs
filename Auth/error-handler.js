function errorHandeler(err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    return res.status(401).json({message: err.message});
  }
  if (err.name === "ValidationError") {
    return res.status(401).json({ message: err });
  }
  //default 500 server error
  return res.status(500).json(err)
}
module.exports = errorHandeler;
