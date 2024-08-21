import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SideBar from "./components/SideBar";

function App() {
  const [projectState,setProjectState] = useState({
    selectedProjectId:undefined,
    projects:[]
  })
  function handleCreateNewProject() {
    setProjectState((prevState)=>{
      return {
        ...prevState,
        selectedProjectId:null,
      }
    })
  }
  let content;
  if(projectState.selectedProjectId===null) { 
    content = <NewProject/>
  } else if(projectState.selectedProjectId===undefined) {
    content = <NoProjectSelected onStartAddProject={handleCreateNewProject}/>
   

  }
  return (
    <>
   <main className="h-screen my-8 flex gap-8">
    <SideBar onStartAddProject={handleCreateNewProject}/>
    {content}
    </main> 
    </>
  );
}

export default App;
