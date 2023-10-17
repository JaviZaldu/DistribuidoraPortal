const server = require("./src/app.js");

const port = process.env.PORT || 3001;

// Syncing all the models at once.
server.listen(port, () => {
  console.log(`%s listening at ${port}`); // eslint-disable-line no-console
});
