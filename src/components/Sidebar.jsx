
export default function SideBar({title,projects,onAddProject,onSelectProject,active}){
    

    return(
        <aside className="bg-stone-950 w-1/4 px-2 mt-14 rounded-tr-3xl md:px-7 lg:px-14">

            <h1 className=" text-sm text-white uppercase font-semibold mt-12 md:text-xl lg:text-4xl lg:mt-32">
                {title}
            </h1>
            <button className="bg-stone-700 text-neutral-400 text-[9px] my-6 px-[3px] py-1 mx-auto rounded-md md:text-base md:px-2 lg:text-xl lg:my-12 lg:px-8 lg:py-3 hover:bg-neutral-600 hover:text-white duration-200"
                    onClick={()=>onAddProject() }>
                + Add Project
            </button>
            {projects.length > 0 &&
                <ul>
                    {projects.map((pr)=>
                        <li key={pr.id}>
                            <button className={
                                active.id === pr.id
                                    ?'bg-stone-900 text-neutral-300 text-xs text-start rounded-sm my-1 py-1 px-1 w-full md:text-base md:px-2 lg:text-xl lg:py-3 lg:px-2 ' 
                                    : 'text-neutral-400 text-xs text-start rounded-sm my-1 py-1 px-1 w-full md:text-base md:px-2 lg:text-xl lg:py-3 lg:px-2 hover:bg-stone-900 hover:text-neutral-300 duration-300'
                                } 
                                onClick={()=>{onSelectProject({...pr});}}
                            >
                            {pr.title}
                            </button>
                        </li>
                        )
                    }
                </ul>
            }
            
        </aside>
    )
}