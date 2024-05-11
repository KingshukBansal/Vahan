import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const AddEntries = ({ attributesLength, dataLength, setDataLength }) => {
  const { entityName } = useParams();
  const [values, setValues] = useState(Array(attributesLength).fill("")); 

  const handleChange = (e, index) => {
    const newValues = [...values]; 
    newValues[index] = e.target.value; 
    setValues(newValues); 
  };
  const handleAddData = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/data/add-data/${entityName}`,
        { values }
      );
      console.log(data);
      setDataLength(dataLength + 1);
      setValues(Array(attributesLength).fill(""));
    } catch (error) {
      console.log(error);
    }
  };

  const entries = [];
  for (let i = 0; i < attributesLength; i++) {
    entries.push(
      <div key={i}>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-4/5 max-w-xs"
          value={values[i]}
          onChange={(e) => handleChange(e, i)} 
        />
      </div>
    );
  }

  return (
    <>
      {entries}
      <button className="btn btn-success btn-sm w-4/5" onClick={handleAddData}>
        Add Data
      </button>
    </>
  );
};

export default AddEntries;
