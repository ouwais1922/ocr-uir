import React from "react";
import Table from "./Table";
import { Outlet, Link } from "react-router-dom";
import SideBar from "./SideBar";

const Dashboard = () => {
  return (
    <>
      <SideBar></SideBar>

      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200  rounded-lg dark:border-gray-700">
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 ">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                Add the description here
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div className="flex items-center justify-end h-24 rounded bg-gray-50 ">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                Add the "Add button here"
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 ">
            <Table></Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
