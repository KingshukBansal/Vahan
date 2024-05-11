import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateData = () => {
  const { entityName, id } = useParams();
  const [entry, setEntry] = useState({});

  const getSingleData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/data/get-single-data/${entityName}/${id}`
      );
      console.log(data);
      setEntry(data.queryResult[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleData();
  }, []);

  const handleChange = (key, value) => {
    setEntry((prevEntry) => ({ ...prevEntry, [key]: value }));
  };
  const handleUpdateData = async () => {
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/data/update-data/${entityName}/${id}`,
        { updateData: entry }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="grid grid-cols-2 w-1/3 h-fit items-center  gap-2">
        {Object.keys(entry).map((key) => (
          <>
            <label htmlFor={key} className="text-2xl uppercase">
              {key}
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              id={key}
              value={entry[key]}
              onChange={(e) => handleChange(key, e.target.value)}
            />
          </>
        ))}
        <button
          className="btn btn-success btn-sm w-4/5"
          onClick={handleUpdateData}
        >
          Update Data
        </button>
      </div>
    </>
  );
};

export default UpdateData;
