import axios from "axios";
import React, { useEffect, useState } from "react";

const DeleteEntity = () => {
  const [entities, setEntities] = useState([]);
  const getEntities = async () => {
    try {
      console.log(process.env.REACT_APP_BASE_URL);
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/entity/get-all-entities`
      );
      setEntities(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteEntity = async (entityName) => {
    try {
      const { data } = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/entity/delete-entity/${entityName}`
      );
      getEntities();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getEntities();
  }, []);
  return (
    <div className="grid grid-cols-3 w-1/2 gap-2 content-start place-content-center ">
      {entities.map((entity, i) => {
        return (
          <div
            className="border-[0.5px] grid grid-cols-2 text-center items-center rounded-2xl p-2"
            key={i}
          >
            {entity.Tables_in_vahan}
            <button
              className="btn btn-error btn-sm mx-2"
              onClick={() => handleDeleteEntity(entity.Tables_in_vahan)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default DeleteEntity;
