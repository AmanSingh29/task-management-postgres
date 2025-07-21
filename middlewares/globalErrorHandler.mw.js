module.exports = (err, req, res, next) => {
  if (err.name === "SequelizeUniqueConstraintError") {
    err.message = err.errors?.[0]?.message;
  }
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  err.message = err.message || "Something went wrong!";
  console.error(`[${err.statusCode}] ${err.message}`);
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
};
