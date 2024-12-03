import { useState} from "react";

import SideBar from "./components/Sidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import SavedProject from "./components/SavedProject.jsx";

//const projectsList=[];

function App() {
  const [projectsList, setProjectsList] = useState([]); 
  const [selected,setSelected]=useState(null);
  const [create,setCreate]=useState(false);

  function handleData(data){
    setCreate(prev=>prev=false);
    setProjectsList((prevList) => [...prevList, data]);
    //projectsList.push(data)
    
  }
  
  function handleCreateProject(){
    setCreate(prev=>prev=true);
    setSelected(false);
  }

  function handleDeleteProject(list,selected){
    setSelected(prev=>prev={...selected});
    setProjectsList((prevList) => prevList=list);
  }

  function handleSelectProject(data){
    setSelected(prev=>prev={...data});
    setCreate(prev=>prev=false);
  }

  function handleTaskUpdate(updatedData){
    setProjectsList((prevList) =>
      prevList.map((project) =>
        //if the ID matches udate its data , if not the original is returned
        project.id === updatedData.id ? { ...project, ...updatedData } : project  
      )
    );
    handleSelectProject(updatedData);
    
  }

  let content=(
    <NoProjectSelected 
      title="No Project Selected" 
      subtitle="Select a project or start with a new one" 
      onCreateNewProject={handleCreateProject}
    />
  );

  if(create){
    content=(
      <NewProject 
        onCancel={()=>setCreate(prev=>prev=false)} 
        onSave={handleData}
      />
    );

  }else if(selected===null){
    content=(
      <NoProjectSelected 
        title="No Project Selected" 
        subtitle="Select a project or start with a new one" 
        onCreateNewProject={handleCreateProject}
      />
    );

  }else if(selected.id){
    content= (
      <SavedProject 
        data={selected} 
        projects={projectsList} 
        onDelete={handleDeleteProject}
        onTaskUpdate={handleTaskUpdate}
      />
    );
  }


  return (
      <main className="h-screen flex gap-3 md:gap-12">
        <SideBar title="Your Projects" projects={projectsList} onAddProject={handleCreateProject} onSelectProject={handleSelectProject} active={selected}/>
        {content}
      </main>
  );
}

export default App;
