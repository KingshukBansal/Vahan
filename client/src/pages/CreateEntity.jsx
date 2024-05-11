import axios from "axios";
import React, { useEffect, useState } from "react";
const types = [
  "INT",
  "TINYINT",
  "SMALLINT",
  "MEDIUMINT",
  "BIGINT", // Numeric Types
  "CHAR(255)",
  "VARCHAR(255)",
  "TEXT",
  "ENUM",
  "SET", // String Types
  "DATE",
  "TIME",
  "DATETIME",
  "TIMESTAMP",
  "YEAR", // Date and Time Types
  "BINARY",
  "VARBINARY",
  "BLOB", // Binary Types
  "Other",
];

const CreateEntity = () => {
  const [attribute, setAttribute] = useState({ name: "", type: "" });
  const [entity, setEntity] = useState({
    entityName: "",
    attributes: [],
  });
  const [other, setOther] = useState(false);

  const handleDeleteAttribute = (index) => {
    const newAttributes = entity.attributes.filter((_, i) => i !== index);
    setEntity({ ...entity, attributes: newAttributes });
  };
  const handleAddEntity = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/entity/create-entity`,
        entity
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddAttribute = () => {
    setEntity({
      ...entity,
      attributes: [
        ...entity.attributes,
        { name: attribute.name, type: attribute.type },
      ],
    });
    setAttribute({ name: "", type: "" });
  };
  useEffect(() => {
    if (attribute.type === "Other") {
      setOther(true);
    } else {
      setOther(false);
    }
  }, [attribute.type]);

  return (
    <>
      <div className="grid grid-cols-1 w-full justify-items-center content-start">
        <div className="w-full flex flex-row justify-end">
          <button
            className="btn btn-xs sm:btn-sm md:btn-md  btn-success m-2"
            onClick={handleAddEntity}
          >
            Add Entity
          </button>
        </div>
        <table class="table-auto w-1/2">
          <tbody>
            <tr>
              <td>
                <div className="text-2xl">Entity Name : </div>
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs my-2"
                  value={entity.entityName}
                  onChange={(e) =>
                    setEntity({ ...entity, entityName: e.target.value })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>
                <div className="text-2xl">Attribute Name : </div>
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="input input-bordered w-full max-w-xs my-2"
                  value={attribute.name}
                  onChange={(e) =>
                    setAttribute({ ...attribute, name: e.target.value })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>
                <div className="text-2xl">Attribute Type : </div>
              </td>
              <td>
                <select
                  className="select select-bordered w-full max-w-xs my-2"
                  value={attribute.type}
                  onChange={(e) =>
                    setAttribute({ ...attribute, type: e.target.value })
                  }
                >
                  <option selected>Select Attribute Type</option>
                  {types.map((type, key) => {
                    return <option key={key}>{type}</option>;
                  })}
                </select>
              </td>

              {other ? (
                <td>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    placeholder="Or enter custom data type"
                    onChange={(e) =>
                      setAttribute({ ...attribute, type: e.target.value })
                    }
                    value={attribute.type}
                  />
                </td>
              ) : (
                ""
              )}
            </tr>
            <tr>
              <td colSpan="2">
                <button
                  className="btn btn-sm btn-primary my-2"
                  onClick={handleAddAttribute}
                >
                  Add Attribute
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <table class="table-auto w-1/2 text-left content-start items-center">
          <thead>
            <tr>
              <th>Attribute Name</th>
              <th>Attribute Type</th>
              <th>Remove Attribute</th>
            </tr>
          </thead>
          <tbody>
            {entity.attributes.map((attribute, i) => {
              return (
                <tr key={i}>
                  <td>{attribute.name}</td>
                  <td>{attribute.type}</td>
                  <td>
                    <button
                      className="btn btn-error btn-sm my-1"
                      onClick={() => handleDeleteAttribute(i)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CreateEntity;
