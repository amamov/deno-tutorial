import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { v4 } from "https://deno.land/std@0.93.0/uuid/mod.ts";

const app = new Application();
const router = new Router();

app.use(router.routes());
app.use(router.allowedMethods());

const datas = [
  {
    id: v4.generate(),
    title: "Data 1",
    author: "amamov",
  },
  {
    id: v4.generate(),
    title: "Data 2",
    author: "amamov",
  },
  {
    id: v4.generate(),
    title: "Data 3",
    author: "amamov",
  },
];

router
  .get("/", (context) => {
    console.log(context);
    context.response.body = "Hello Deno";
  })
  .get("/datas", (context) => {
    context.response.body = datas;
  })
  .post("/data", async ({ request, response }) => {
    const body = await request.body();
    if (!request.hasBody) {
      response.status = 400;
      response.body = "Noy Found Page";
    } else {
      const data = body.value;
      // data.id = v4.generate();
      // datas.push(data);
      response.status = 201;
      response.body = data;
    }
  });

console.log("http://localhost:8000");

await app.listen({ port: 8000 });
