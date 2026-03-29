import React from "react";

function Sidebar() {
  return (
    <div className="hidden md:block w-64 bg-blue-600 text-white min-h-screen p-5">

      <h2 className="text-2xl font-bold mb-6">Menu</h2>

      <ul className="space-y-4">
        <li className="hover:bg-blue-500 p-2 rounded cursor-pointer">
          Dashboard
        </li>

        <li className="hover:bg-blue-500 p-2 rounded cursor-pointer">
          Properties
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;