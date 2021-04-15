import { serve } from "https://deno.land/std/http/server.ts";

const server = serve({ port: 5000 });

console.log("http://localhost:5000/");

for await (const request of server) {
  request.respond({ body: "Hello, Deno World!!" });
}
