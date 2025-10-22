import { useEffect, useState } from "react";
import InstalledApp from "../InstalledApp/InstalledApp";
import {
  getInstallApp,
  removeFromInstallation,
} from "../../utility/handleInstall";
import useApps from "../../hooks/useApps";
import Loading from "../../components/Loading/Loading";

const Installation = () => {
  const [install, setInstall] = useState([]);
  const [sort, setSort] = useState("");
  const { apps, loading } = useApps();

  useEffect(() => {
    if (!loading) {
      const installAppData = getInstallApp();
      let installedApp = [];
      for (const item of installAppData) {
        const findApp = apps.find((itm) => itm.id == item);
        if (findApp) {
          installedApp.push(findApp);
        }
      }
      setInstall(installedApp);
    }
  }, [apps, loading]);

  const handleRemove = (id) => {
    removeFromInstallation(id);
    const updatedItems = install.filter((app) => app.id !== id);
    setInstall(updatedItems);
  };

  useEffect(() => {
    if (sort === "LToH") {
      const sorted = [...install].sort((a, b) => a.size - b.size);
      setInstall(sorted);
    } else if (sort === "HToL") {
      const sorted = [...install].sort((a, b) => b.size - a.size);
      setInstall(sorted);
    }
  }, [sort]);

  return (
    <div className="bg-base-200 py-20 min-h-screen">
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <Loading />
        </div>
      ) : (
        <div className="max-w-11/12 m-auto text-center">
          <h1 className="text-5xl font-semibold mb-4">Your Installed Apps</h1>
          <p className="text-gray-500 mb-10">
            Explore All Trending Apps on the Market developed by us
          </p>
          <div className="flex justify-between mb-4">
            <h3 className="text-2xl font-semibold">
              {install?.length} Apps Installed
            </h3>

            <label className="form-control w-full max-w-xs">
              <select
                className="select select-bordered"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="none">Sort by size</option>
                <option value="LToH">Low to High</option>
                <option value="HToL">High to Low</option>
              </select>
            </label>
          </div>

          <div>
            {install?.map((app) => (
              <InstalledApp
                key={app.id}
                handleRemove={handleRemove}
                app={app}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Installation;
