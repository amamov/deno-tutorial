const encoder = new TextEncoder();

const helloText = encoder.encode("hello deno!!");

// Create, Write
await Deno.writeFile("test.txt", helloText); // 파일 쓰기

// Read
const file = await Deno.open("test.txt");
await Deno.copy(file, Deno.stdout);
file.close;

/*
deno run --allow-write --allow-read helloDeno.ts
*/
