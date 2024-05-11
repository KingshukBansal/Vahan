import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const UpdateEntries = () => {
  const [id, setId] = useState();
  return (
    <>
      <div className="grid grid-cols-3 gap-2 w-1/6">
        <input
          type="number"
          placeholder="Enter Id to Delete"
          className="input input-bordered w-full max-w-xs col-span-2"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <Link to={`${id}`}>
          {" "}
          <button className="btn btn-warning">Update</button>
        </Link>
      </div>
    </>
  );
};

export default UpdateEntries;
