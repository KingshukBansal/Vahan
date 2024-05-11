import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UpdateSingleEntity = () => {
  const [entity, setEntity] = useState({ entityName: "", attributes: [] });
  const [oldEntity, setOldEntity] = useState({
    entityName: "",
    attributes: [],
  });
  const { entityName } = useParams();

  const getEntity = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/entity/get-entity/${entityName}`
      );
      setEntity({ entityName: entityName, attributes: data });
      setOldEntity({ entityName: entityName, attributes: data });
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdateName = async () => {
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/entity/update-entity-name/${entityName}`,
        { newEntityName: entity.entityName }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getEntity();
  }, []);

  useEffect(() => {
    if (entity) {
      setOldEntity(entity);
    }
  }, [entity]);

  return (
    <div className="grid grid-cols-1 w-1/2 items-center">
      <div className="grid grid-cols-3 gap-2 w-full items-center">
        <div className="text-2xl">Entity Name:</div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          value={entity.entityName}
          onChange={(e) => setEntity({ ...entity, entityName: e.target.value })}
        />
        <button className="btn  btn-primary" onClick={handleUpdateName}>
          Update Name
        </button>
      </div>
    </div>
  );
};

export default UpdateSingleEntity;
