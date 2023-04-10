import { rest } from "msw";
import postListMock from "./posts/postListMock";
import postMock from "./posts/postMock";

const apiUrl = process.env.REACT_APP_API_URL!;
const post = postMock;

export const handlers = [
  rest.get(apiUrl, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(postListMock));
  }),

  rest.get(`${apiUrl}/${post.id}`, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(post));
  }),
];

export const errorHandlers = [
  rest.get(apiUrl, async (req, res, ctx) => {
    return res(ctx.status(404));
  }),

  rest.get(`${apiUrl}/${post.id}`, async (req, res, ctx) => {
    return res(ctx.status(404));
  }),
];
