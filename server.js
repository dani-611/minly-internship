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
  const parsedUrl = new URL(url, `http://${hostname}:${port}`);
  const pathName = parsedUrl.pathname;
  const segments = pathName.split("/");
  const jsonResponseHeader = { "Content-Type": "application/json" };
  const htmlResponseHeader = { "Content-Type": "text/html; charset=utf-8" };
  switch (method) {
    case "GET":
      switch (segments[1]) {
        case "":
          let htmlContent = `<html><p>[`;
          movies.forEach(
            (movie) =>
              (htmlContent += `{id:${movie.id}, title:${movie.title}, release_year:${movie.release_year}},`),
          );
          htmlContent += `]</p></html>`;
          response.writeHead(200, htmlResponseHeader);
          response.end(htmlContent);
          break;
        case "movies":
          if (segments[2]) {
            const parsedId = parseInt(segments[2]);
            if (isNaN(parsedId)) {
              response.writeHead(400, jsonResponseHeader);
              response.end(JSON.stringify({ error: "Invalid Movie Id!" }));
            } else {
              const movie = movies.find((m) => m.id === parsedId);
              if (!movie) {
                response.writeHead(404, jsonResponseHeader);
                response.end(JSON.stringify({ error: "Not Found!" }));
              } else {
                response.writeHead(200, jsonResponseHeader);
                response.end(JSON.stringify(movie));
              }
            }
          } else {
            const searchParams = parsedUrl.searchParams;
            switch (searchParams.size) {
              case 0:
                response.writeHead(200, jsonResponseHeader);
                response.end(JSON.stringify(movies));
                break;
              case 1:
                const year = parseInt(searchParams.get("year"));
                const filtered = movies.find((m) => m.release_year == year);
                if (!filtered) {
                  response.writeHead(404, jsonResponseHeader);
                  response.end(JSON.stringify({ error: "Not Found!" }));
                } else {
                  response.writeHead(200, jsonResponseHeader);
                  response.end(JSON.stringify(filtered));
                }
                break;
              default:
                let body = [];
                searchParams.forEach((value, key) => {
                  const filtered = movies.find(
                    (m) => m.release_year === parseInt(value),
                  );
                  filtered
                    ? body.push(filtered)
                    : body.push({ error: "Not Found!" });
                });
                if (body.length == 0) {
                  response.writeHead(404, jsonResponseHeader);
                  response.end(JSON.stringify({ error: "Not Found!" }));
                } else {
                  response.writeHead(200, jsonResponseHeader);
                  response.end(JSON.stringify(body));
                }
                break;
            }
          }
          break;
        default:
          response.writeHead(404, jsonResponseHeader);
          response.end(JSON.stringify({ error: "Not Found!" }));
          break;
      }
      break;
    case "POST":
      response.writeHead(405, jsonResponseHeader);
      response.end(JSON.stringify({ error: "Method Not Allowed!" }));
      break;
    default:
      response.writeHead(405, jsonResponseHeader);
      response.end(JSON.stringify({ error: "Method Not Allowed!" }));
      break;
  }
});

server.listen(port, hostname, () => {
  console.log(`Server at ${hostname}:${port} is up and running...`);
});
