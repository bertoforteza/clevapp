import { rest } from "msw";
import postListMock from "./posts/postListMock";
import postMock from "./posts/postMock";
import updatedPostMock from "./posts/updatedPostMock";

const apiUrl = process.env.REACT_APP_API_URL!;
const post = postMock;
const updatedPost = updatedPostMock;

export const handlers = [
  rest.get(apiUrl, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(postListMock));
  }),

  rest.get(`${apiUrl}/${post.id}`, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(post));
  }),

  rest.patch(`${apiUrl}/${post.id}`, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(updatedPost));
  }),
];

export const errorHandlers = [
  rest.get(apiUrl, async (req, res, ctx) => {
    return res(ctx.status(404));
  }),

  rest.get(`${apiUrl}/${post.id}`, async (req, res, ctx) => {
    return res(ctx.status(404));
  }),

  rest.patch(`${apiUrl}/${post.id}`, async (req, res, ctx) => {
    return res(ctx.status(404));
  }),
];
