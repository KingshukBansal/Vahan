import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side rounded-r-lg">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content text-xl">
            <li className="hover:scale-105 transition-all ease-in-out duration-300 my-1">
              <Link to={"/get-all-entities"}>All Entities</Link>
            </li>
            <li className="hover:scale-105 transition-all ease-in-out duration-300 my-1">
              <Link to={"/create-entity"}>Create Entity</Link>
            </li>
            <li className="hover:scale-105 transition-all ease-in-out duration-300 my-1">
              <Link to={"/delete-entity"}>Delete Entity</Link>
            </li>
            <li className="hover:scale-105 transition-all ease-in-out duration-300 my-1">
              <Link to={"/Update-entity"}>Update Entity</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
