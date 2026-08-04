import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createThoughtThunk } from "../../features/thought/thoughtThunk";

const ThoughtForm = () => {
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.thought);

  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!content.trim()) return;

    const resultAction = await dispatch(
      createThoughtThunk({ content })
    );

    if (createThoughtThunk.fulfilled.match(resultAction)) {
      setContent("");
    }
  };

  return (
    <div>
      <h2>Create Thought</h2>

      <form onSubmit={handleSubmit}>
        <textarea
          rows="5"
          cols="50"
          placeholder="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <br />
        <br />

        <button type="submit" disabled={loading}>
          {loading ? "Posting..." : "Post"}
        </button>

        {error && (
          <p style={{ color: "red" }}>{error}</p>
        )}
      </form>
    </div>
  );
};

export default ThoughtForm;