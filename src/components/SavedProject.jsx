
import Tasks from "./Tasks.jsx";

export default function SavedProject({data,projects,onDelete,onTaskUpdate}){

    function deleteProject(){
        // projects.forEach((element,index) => {
        //   if(element.id === data.id){
        //     projects.splice(index,1);
        //   }
        // });
        const updatedList=projects.filter((project)=>project.id !== data.id)
        const removeSelected={};

        onDelete(updatedList,removeSelected);
    }
    //console.log('test',projects)
    return(
        <div className="flex flex-col w-2/3 mt-28 lg:mt-48">

          <div className="flex justify-between">
              <h1 className="text-stone-700 font-bold text-4xl md:text-5xl">
                {data.title}
              </h1>
              <button className="bg-white text-black rounded-xl text-lg px-2 py-2 mt-12
                      md:text-lg md:px-4 lg:text-xl lg:px-8 lg:py-4 hover:bg-neutral-200 hover:text-black duration-200"
                      onClick={()=>deleteProject()}
              >
                Delete
              </button>
          </div>
          <p className="text-stone-400 text-xl my-6">
            {data.date}
          </p>
          <p className="text-stone-600 text-xl whitespace-pre-wrap">
            {data.desc}
          </p>
          <hr className="h-1 bg-stone-300 mt-6"/>

          <Tasks selectedData={data} onUpdate={onTaskUpdate}/>
          
        </div>
    )
    
}