import app from "./app";
const port = 3000;
app.listen(port, function () {
  console.log("We've now got a server!");
  console.log("Your routes will be running on http://localhost:" + port);
});
