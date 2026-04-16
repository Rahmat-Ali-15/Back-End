import http from "http";
import fs from "fs";

const PORT = 7080;

const server = http.createServer((req, res) => {
  // eventEmmiter

  if (req.url === "/notes") {
    req.on("data", (chunk) => {
      // const buf = Buffer.from(chunk);
      // console.log("🚀 ~ buf:", buf.toString('utf-8'));

      fs.writeFile("note.txt", chunk, (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
    res.end("note created...");
  } else if (req.url === "/allData") {
    fs.readFile("./note.txt", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      }
      res.end(data);
    });
  } else {
    res.end("Please select this routes [notes, allData]");
  }
});

server.listen(PORT, () => {
  console.log(`Port has been start on ${PORT}`);
});
