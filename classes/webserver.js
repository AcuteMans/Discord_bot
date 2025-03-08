import express from "express";

const PUBLIC_ENDPOINT =
  "https://privately-definite-sawfly.ngrok-free.app/api/youtube/notification";

const PORT = 5555;
// const REDIRECT_URL =

const app = express();

app.get("/api/youtube/notification", (req, res) => {
  // Do something with the data we get here
  if (req.query["hub.challenge"]) {
    return res.send(req.query["hub.challenge"]);
  }

  return res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`);
});

/*
Get
Post
Put
Push
Delete

https://www.google.com
*/

// https://youtu.be/QQSJGS2JR4w?si=LlQCM96TuSG080fc&t=435
// - [ ] Find Channel IDs for The Ones we Want Videos for
// - [ ] Create Post Route
// - [ ] Parse XML