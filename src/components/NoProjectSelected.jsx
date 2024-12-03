import image from '../assets/no-projects.png'

export default function NoProjectSelected({title,subtitle,onCreateNewProject}){

    return(
        <div className="flex flex-col w-2/3 mt-48">

            <img src={image} className="mx-auto w-1/5 lg:w-[10%]" alt='not_selected'/>
            <h3 className="text-stone-600 text-2xl font-bold text-center mt-6">
                {title}
            </h3>
            <p className="text-stone-400 text-lg text-center my-6">
                {subtitle}
            </p>
            <button className="bg-stone-800 text-neutral-400 text-xl px-8 py-3 mx-auto rounded-md hover:bg-neutral-700 hover:text-white duration-200"
                    onClick={()=>onCreateNewProject()} 
            >
                Create New Project
            </button>
            
        </div>
    )
}