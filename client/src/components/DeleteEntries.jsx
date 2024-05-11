import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const DeleteEntries = ({ dataLength, setDataLength }) => {
  const [id, setId] = useState();
  const { entityName } = useParams();
  const handleDeleteData = async () => {
    try {
      const { data } = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/data/delete-data/${entityName}/${id}`
      );
      setDataLength(dataLength - 1);
    } catch (error) {
      console.log(error);
    }
  };
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
        <button className="btn btn-error " onClick={handleDeleteData}>
          Delete
        </button>
      </div>
    </>
  );
};

export default DeleteEntries;
