import { toast } from "react-toastify";

const getInstallApp = () => {
  const existingData = localStorage.getItem("install");
  return existingData ? JSON.parse(existingData) : [];
};

const addInInstallation = (id) => {
  const installAppData = getInstallApp();
  const numericId = parseInt(id); 

  if (installAppData.includes(numericId)) {
    alert("Already installed!");
  } else {
    installAppData.push(numericId);
    localStorage.setItem("install", JSON.stringify(installAppData));
  }
};

const removeFromInstallation = (id) => {
  const numericId = parseInt(id); 
  const existingData = getInstallApp();
  const updatedData = existingData.filter((appId) => appId !== numericId);
  localStorage.setItem("install", JSON.stringify(updatedData));
  toast.success("App Uninstalled")
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
