import React, { useState, useEffect } from "react";
import AppCard from "../AppCard/AppCard";
import ErrorAppPage from "../ErrorAppPage/ErrorAppPage";
import useApps from "../../hooks/useApps";
import Loading from "../../components/Loading/Loading";

const Apps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchedApps, setSearchedApps] = useState([]);

  useEffect(() => {
    setSearchLoading(true);
    const delay = setTimeout(() => {
      const term = search.trim().toLowerCase();
      const filtered = term
        ? apps.filter((app) => app.title.toLowerCase().includes(term))
        : apps;
      setSearchedApps(filtered);
      setSearchLoading(false);
    }, 500);

    return () => clearTimeout(delay);
  }, [search, apps]);

  useEffect(() => {
    if (apps.length) setSearchedApps(apps);
  }, [apps]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loading />
      </div>
    );
  }

  return (
    <div className="py-[80px] bg-base-200">
      <div className="max-w-11/12 mx-auto text-center">
        <h1 className="font-bold text-5xl">Our All Applications</h1>
        <p className="mt-4 mb-9">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
        <div className="flex justify-between mb-4 flex-col md:flex-row items-center gap-3">
          <h3 className="font-semibold text-2xl">
            All Apps{" "}
            <span className=" text-sm font-normal text-gray-500">
              ({searchedApps.length}) Apps Found.
            </span>
          </h3>
          <label className="input input-ghost bg-white w-full md:w-[300px] flex items-center gap-2">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
            />
          </label>
        </div>
        {searchLoading ? (
          <div className="flex justify-center items-center min-h-[40vh]">
            <Loading />
          </div>
        ) : searchedApps.length === 0 ? (
          <ErrorAppPage />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {searchedApps.map((app) => (
              <AppCard key={app.id} appCard={app} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Apps;
