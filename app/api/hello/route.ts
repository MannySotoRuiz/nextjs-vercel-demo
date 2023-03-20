// export async function GET(request: Request) {
//   console.log("testing stuff");
//   try {
//     const query = "soccer stadium";
//     let endPoint = `https://api.unsplash.com/search/photos?page=1&per_page=3&query=${query}&client_id=D3JlHXUemNJy8AIoBejnopOYu4gbmvTsuoal9N4jZk`;
//     const response = await fetch(endPoint);
//     if (response.status !== 200) {
//       console.log("error fetching api data");
//       return new Response('ERROR fetching api', {
//         status: 500
//       });
//     } else {
//       console.log(response.status);
//       console.log("all good");
//       const data = await response.json();
//       console.log(data);
//       return new Response(data, {
//         status: 200
//       });
//     }
//   } catch (error) {
//     console.log(error);
//     return new Response('ERROR fetching api', {
//       status: 500
//     });
//   }
// }

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // return new Response('Hello, Next.js!')
  return NextResponse.json({ message: "Hello there" });
}