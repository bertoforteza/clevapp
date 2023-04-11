import { useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { useNavigate } from "react-router-dom";
import useApi from "../../hooks/useApi/useApi";
import EditPostFormStyled from "./EditPostFormStyled";
import Button from "../Button/Button";
import { PostStructure } from "../../types";

interface PostFormData {
  title: string;
  body: string;
}

const EditPostForm = (): JSX.Element => {
  const { posts } = useAppSelector(({ posts }) => posts);
  const post: PostStructure = posts[0];
  const initialFormData: PostFormData = {
    title: post.title,
    body: post.body,
  };
  const [formData, setFormData] = useState(initialFormData);
  const { updatePost } = useApi();
  const navigate = useNavigate();

  const handleFormChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const formDataToSubmit: PostFormData = {
      title: formData.title,
      body: formData.body,
    };

    navigate(`/${post.id}`);
    await updatePost({ ...formDataToSubmit, id: post.id, userId: post.userId });
  };

  return (
    <EditPostFormStyled className="edit-form" onSubmit={handleSubmit}>
      <h2 className="edit-form__title">Edit Post</h2>
      <div className="edit-form__group">
        <label className="edit-form__label" htmlFor="title">
          Title
        </label>
        <input
          className="edit-form__field title-field"
          type="text"
          id="title"
          value={formData.title}
          onChange={handleFormChange}
        />
      </div>
      <div className="edit-form__group">
        <label className="edit-form__label" htmlFor="body">
          Post
        </label>
        <textarea
          className="edit-form__field body-field"
          id="body"
          value={formData.body}
          onChange={handleFormChange}
        />
      </div>
      <Button action={() => {}} text="edit" />
    </EditPostFormStyled>
  );
};

export default EditPostForm;
