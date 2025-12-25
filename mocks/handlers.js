import { http, HttpResponse } from "msw";

export const handlers = [
  // Intercept GET requests to /blog posts
  http.get("https://api.vercel.app/blog", () => {
    return HttpResponse.json({
      firstName: "John",
      lastName: "Doe",
    });
  }),
];
