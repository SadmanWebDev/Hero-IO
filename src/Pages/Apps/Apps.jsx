import React, { useState } from "react";
import { useLoaderData } from "react-router";
import AppCard from "../AppCard/AppCard";

const Apps = () => {
  const [search, setSearch] = useState("");
  const apps = useLoaderData();
  const term = search.trim().toLocaleLowerCase();
  const searchedApps = term
    ? apps.filter((app) => app.name.toLocaleLowerCase().includes(term))
    : apps;
  console.log(apps);
  return (
    <div className="py-[80px] bg-base-200">
      <div className="max-w-11/12 mx-auto text-center">
        <h1 className="font-bold text-5xl">Our All Applications</h1>
        <p className="mt-4 mb-9">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
        <div className="flex justify-between mb-4">
          <h3 className="font-semibold text-2xl">
            All Apps{" "}
            <span className="text-sm text-gray-500">
              ({searchedApps.length}) Apps Found.
            </span>
          </h3>
          <label className="input input-ghost bg-white">
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
              required
              placeholder="Search"
            />
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {searchedApps.map((app) => (
            <AppCard key={app.id} appCard={app}></AppCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apps;
