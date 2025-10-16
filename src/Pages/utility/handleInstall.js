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

const removeFromInstallation = (id) => {
  const existingData = localStorage.getItem("install");
  if (existingData) {
    const installAppData = JSON.parse(existingData);
    const updatedData = installAppData.filter((appId) => appId !== id);
    localStorage.setItem("install", JSON.stringify(updatedData));
    console.log(installAppData);
  }
};

/*   const handleResolved = (customer) => {
    const NewResolvedTask = [...resolvedTask, customer];
    setResolvedTask(NewResolvedTask);
    toast.success("Task Resolved!");
    const remaining = taskStatus.filter((task) => task.id !== customer.id);
    setTaskStatus(remaining);

    const remainingTask = tasks.filter((task) => task.id !== customer.id);
    setTasks(remainingTask);
  }; */

export { addInInstallation, getInstallApp, removeFromInstallation };
