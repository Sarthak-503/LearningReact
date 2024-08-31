import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SideBar from "./components/SideBar";
import SelectedProject from './components/SelectedProject';
function App() {
  const [projectState,setProjectState] = useState({
    selectedProjectId:undefined,
    projects:[]
  })
  function handleDeleteProject() {
    setProjectState((prevState)=>{
      return {
        ...prevState,
        selectedProjectId:undefined,
        projects:prevState.projects.filter((project)=>
           project.id!=prevState.selectedProjectId)
      }
    })
  }
  function handleSelectProject(id) {
    setProjectState((prevState)=>{
      return {
        ...prevState,
        selectedProjectId:id,
      }
    })
  }

  function handleStartAddProject() {
    setProjectState((prevState)=>{
      return {
        ...prevState,
        selectedProjectId:null,
      }
    })
  }
  function handleAddProject(projectData) {
    setProjectState(prevState =>{
      const newProject = {
        ...projectData,
        id:  Math.random(),
        }
      return {
        ...prevState,
        selectedProjectId:undefined,
        projects:[...prevState.projects, newProject]
      }
    })
  }
  function handleCancelAddProject() {
    setProjectState(prevState =>{
      return {
        ...prevState,
        selectedProjectId:undefined,
        projects:[...prevState.projects]
      }
    })
  }

  console.log(projectState);
  const selectedProject = projectState.projects.find(project=> project.id===projectState.selectedProjectId)
  let content = <SelectedProject  project={selectedProject} deleteProject = {handleDeleteProject}/>;

  if(projectState.selectedProjectId===null) { 
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  } else if(projectState.selectedProjectId===undefined ) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }

  return (
    <>
   <main className="h-screen my-8 flex gap-8">
    <SideBar 
    onStartAddProject={handleStartAddProject} 
    projects={projectState.projects}
    onSelectProject={handleSelectProject}
    selectedProjectId={projectState.selectedProjectId}
    />
    {content}
    </main>
    </>
  );
}

export default App;
