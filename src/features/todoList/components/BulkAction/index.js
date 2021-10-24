import React from "react";
import { useDispatch } from "react-redux";

import { toggleAllCompleted } from "../../todoListSlice";

export const BulkAction = () => {
  const dispatch = useDispatch();

  const handleClickRemove = () => {
    dispatch(toggleAllCompleted());
  };

  return (
    <div className="bg-[#E0E0E0] flex justify-between items-center p-5">
      <div>Bulk Action:</div>
      <div className="space-x-2">
        <button className="btn btn-blue bg-[#2196F3]">Done</button>
        <button className="btn btn-danger" onClick={handleClickRemove}>
          Remove
        </button>
      </div>
    </div>
  );
};
