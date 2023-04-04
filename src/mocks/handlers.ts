import { rest } from "msw";
import postListMock from "./postListMock";

const apiUrl = process.env.REACT_APP_API_URL!;

const handlers = [
  rest.get(apiUrl, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(postListMock));
  }),
];

export default handlers;
