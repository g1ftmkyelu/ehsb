module.exports = {
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  role: {
    type: String,
    default: "admin",
    required: true,
  },
  Image:{
    type: String,
    default: "https://www.seekpng.com/png/small/143-1435868_headshot-silhouette-person-placeholder.png",
    required: true,
  }
};
