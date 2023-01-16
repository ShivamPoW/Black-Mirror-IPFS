import { createDatabase,openDatabase } from "./databse.js";


// let news = await createDatabase("news");
// console.log('DB created with address', news.address.toString())
// /orbitdb/zdpuAuy2kVEAv36z3buwj8z8cpKFZG9KGfYgbLHJFdQUWKMPF/news


// createDatabase("docstore","news").then((news) => {
//   console.log(news.address.toString());
// })

// @get ID
// async function news() {
//   const news = await createDatabase("docstore", "news");
//   console.log(await news.address.toString());
// }
// await news();
/* 
@address
/orbitdb/zdpuAujHwQS5bwoe5ZdkiQwaWt8v5KrAixBjy43wpqbraT9BV/news
// */

const news = await openDatabase(
  "/orbitdb/zdpuAmsTQ1cWMjX8gmpSxyh5g3Q9HbsHqPzq7XxsJWSMNE25o/news",
);

// console.log(news.address.toString())
export { news };
