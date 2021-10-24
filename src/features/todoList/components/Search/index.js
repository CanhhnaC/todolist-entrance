import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editSearch } from "../../todoListSlice";

export const Search = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      dispatch(editSearch(text));
    }
  };

  return (
    <div className="p-5">
      <input
        className="form-control"
        placeholder="Search..."
        value={text}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      />
    </div>
  );
};
