import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddEntries from "../components/AddEntries";
import DeleteEntries from "../components/DeleteEntries";
import UpdateEntries from "../components/UpdateEntries";

const Data = () => {
  const [entity, setEntity] = useState({ entityName: "", attributes: [] });
  const [datas, setDatas] = useState([]);
  const [dataLength, setDataLength] = useState(0);
  const { entityName } = useParams();

  const getEntity = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/entity/get-entity/${entityName}`
      );
      setEntity({ entityName: entityName, attributes: data });
    } catch (error) {
      console.log(error);
    }
  };
  const getData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/data/get-data/${entityName}`
      );
      console.log(data);
      setDatas(data.rows);
      setDataLength(data.rows.length);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getEntity();
    getData();
  }, [dataLength]);
  return (
    <div className=" grid grid-cols-1 w-full content-start ">
      <div className="flex flex-row justify-end items-end">
        <DeleteEntries dataLength={dataLength} setDataLength={setDataLength} />
        <UpdateEntries />
      </div>
      <div className="text-2xl text-center w-full uppercase my-4">
        {entity.entityName}
      </div>
      <div className="table w-full">
        <div
          className={`grid grid-cols-${entity.attributes.length} w-full gap-3`}
        >
          {entity.attributes.map((attribute, i) => {
            return (
              <div className="text-lg font-bold uppercase">
                {attribute.Field}
              </div>
            );
          })}
          {datas.map((d, i) => {
            return (
              <>
                {Object.keys(d).map((key) => (
                  <div className="text-md" key={key}>
                    {d[key]}
                  </div>
                ))}
              </>
            );
          })}
          <AddEntries
            attributesLength={entity.attributes.length}
            dataLength={dataLength}
            setDataLength={setDataLength}
          />
        </div>
      </div>
    </div>
  );
};

export default Data;
