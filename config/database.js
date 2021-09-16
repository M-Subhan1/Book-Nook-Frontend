module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        uri: env("DATABASE_URI"),
        // uri: "mongodb+srv://Subhan:b11ysOaEOk1SJEWi@natours.t69zc.mongodb.net/CreativeBooks?retryWrites=true&w=majority",
      },
      options: {
        ssl: true,
      },
    },
  },
});
