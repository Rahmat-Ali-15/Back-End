const path = require("path");
const pathObj = {
  root: "/",
  dir: "/user/rahmat",
  base: "resume.pdf"
};
// const pathObj = {
//   root: "/",
//   dir: "/user/rahmat",
//   name: "resume",
//   ext: ".pdf",
// };
const result = path.format(pathObj);
console.log(result);
