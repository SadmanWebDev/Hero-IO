import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useLoaderData } from "react-router";
import InstalledApp from "../InstalledApp/InstalledApp";
import {
  getInstallApp,
  removeFromInstallation,
} from "../utility/handleInstall";

const Installation = () => {
  const [install, setInstall] = useState([]);

  const apps = useLoaderData();
  useEffect(() => {
    const installAppData = getInstallApp();
    const convertedInstalledApp = installAppData.map((id) => parseInt(id));
    const installedApp = apps.filter((app) =>
      convertedInstalledApp.includes(app.id)
    );
    setInstall(installedApp);
  }, []);

  const handleRemove = (id) => {
    // Remove from localStorage
    removeFromInstallation(id);
    // Update state
    const updatedItems = install.filter((app) => app.id !== id);
    setInstall(updatedItems);
  };

  const [sort, setSort] = useState("none");
  const sortedItem = (() => {
    if (sort === "LToH") {
      return [...install].sort((a, b) => a.size - b.size);
    } else if (sort === "HToL") {
      return [...install].sort((a, b) => b.size - a.size);
    } else {
      return install;
    }
  })();

  return (
    <div className=" bg-base-200 py-20">
      <div className="max-w-11/12 m-auto text-center">
        <h1 className="text-5xl font-semibold mb-4">Your Installed Apps</h1>
        <p className="text-gray-500 mb-10">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="flex justify-between mb-4">
          <h3 className="text-2xl font-semibold">
            {sortedItem.length} Apps Installed
          </h3>
          {/* <div className="dropdown"> */}
          {/* <div tabIndex={0} role="button" className="btn m-1">
              Sort By Size
              <FontAwesomeIcon icon={faCaretDown} />
            </div> */}
          {/* <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a value="LToH">Low to High</a>
              </li>
              <li>
                <a value="HToL">High to Low</a>
              </li>
            </ul> */}
          <label className="form-control w-full max-w-xs">
            <select
              className="select select-bordered"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="none">Sort by price</option>
              <option value="LToH">Low-&gt;High</option>
              <option value="HToL">High-&gt;Low</option>
            </select>
          </label>
        </div>
        <div>
          {sortedItem.map((app) => (
            <InstalledApp
              key={app.id}
              handleRemove={handleRemove}
              app={app}
            ></InstalledApp>
          ))}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Installation;
