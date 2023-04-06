import { rest } from "msw";
import postListMock from "./posts/postListMock";

const apiUrl = process.env.REACT_APP_API_URL!;

export const handlers = [
  rest.get(apiUrl, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(postListMock));
  }),
];

export const errorHandlers = [
  rest.get(apiUrl, async (req, res, ctx) => {
    return res(ctx.status(404));
  }),
];
