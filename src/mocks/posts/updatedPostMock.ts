import { PostStructure } from "../../store/features/posts/types";
import postMock from "./postMock";

const updatedPostMock: PostStructure = {
  ...postMock,
  title: "lorem ipsum post title",
};

export default updatedPostMock;
