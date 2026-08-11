import { createServer } from "node:http";
import path from "node:path";
import { URL } from "node:url";

const port = 3000;
const hostname = "127.0.0.1";
const movies = [
  { id: 1, title: "Arrival", release_year: 2016 },
  { id: 2, title: "Whiplash", release_year: 2014 },
  { id: 3, title: "Parasite", release_year: 2019 },
  { id: 4, title: "Mad Max: Fury Road", release_year: 2015 },
  { id: 5, title: "Get Out", release_year: 2017 },
  { id: 6, title: "Blade Runner 2049", release_year: 2017 },
  { id: 7, title: "The Grand Budapest Hotel", release_year: 2014 },
  { id: 8, title: "Spirited Away", release_year: 2001 },
  { id: 9, title: "Portrait of a Lady on Fire", release_year: 2019 },
  { id: 10, title: "Everything Everywhere All at Once", release_year: 2022 },
];

const server = createServer((request, response) => {
  const { url, method } = request;
  const pathName = new URL(url, `http://${hostname}:${port}`);
  const segments = pathName.split("/");
  const responseHeader = { "Content-Type": "application/json" };
  switch (method) {
    case "GET":
      if (segments[1] === "movies") {
        if (segments[2]) {
          const parsedId = parseInt(segments[2]);
          if (isNaN(parsedId)) {
            response.writeHead(400, responseHeader);
            response.end(JSON.stringify({ error: "Not Found!" }));
          } else {
            response.writeHead(200, responseHeader);
            response.end(JSON.stringify(movies[id]));
          }
        } else {
          response.writeHead(200, responseHeader);
          response.end(Array.toString(movies));
        }
      } else {
        response.writeHead(404, responseHeader);
        response.end(JSON.stringify({ error: "Not Found!" }));
      }
      break;
    case "POST":
      response.writeHead(405, responseHeader);
      response.end(JSON.stringify({ error: "Method Not Allowed!" }));
      break;
    default:
      return;
  }
});

server.listen(port, hostname, () => {
  console.log(`Server at ${hostname}:${port} is up and running...`);
});
