const allowedOrigins = require("./allowedOrigins");

const corsOptions = {
  origin: (origin, callback) => {
<<<<<<< HEAD
    if (allowedOrigins.includes(origin) || !origin) {
=======
    console.log("origin", origin);
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      console.log("call back true");
>>>>>>> fc67cc2 (some change)
      callback(null, true);
    } else {
      callback(new Error("Not allowd by CORS"));
    }
  },
  credential: true,
  optionSuccessStatus: 200,
};

module.exports = corsOptions;
