import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editSearch, selectSearch } from "../../todoListSlice";

export const Search = () => {
  const search = useSelector(selectSearch);
  const [text, setText] = useState(search);
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
