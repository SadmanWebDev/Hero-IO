const getInstallApp = () => {
  const existingData = localStorage.getItem("install");
  if (existingData) {
    const installAppData = JSON.parse(existingData);
    return installAppData;
  } else {
    return [];
  }
};

const addInInstallation = (id) => {
  const installAppData = getInstallApp();

  if (installAppData.includes(id)) {
    alert("khaesere dhora khaise!");
  } else {
    installAppData.push(id);
    const data = JSON.stringify(installAppData);
    localStorage.setItem("install", data);
  }
};

export { addInInstallation, getInstallApp };
