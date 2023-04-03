const allowedOrigins = require("./allowedOrigins");

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.find(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowd by CORS"));
    }
  },
  credential: true,
  optionSuccessStatus: 200,
};

module.exports = corsOptions;