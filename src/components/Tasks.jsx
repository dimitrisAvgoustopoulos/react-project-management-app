import {useRef} from "react";
import Modal from "./Modal.jsx";

export default function Tasks({selectedData,onUpdate}){
    
        const taskValue=useRef();
        const modal=useRef();

        let inputClass="w-3/4 text-xl text-black py-3 px-2 bg-stone-200 rounded-sm focus:outline-4 outline-blue-700 focus:border-b-stone-500 duration-200"
        
        function taskAdding(){
            const updatedData = {
                ...selectedData,
                tasks: [...(selectedData.tasks || []), taskValue.current.value]
            };
        
            if(taskValue.current.value === ''){
                modal.current.open();
                return;
            }
            onUpdate(updatedData);
            
            taskValue.current.value='';
        }

        function deleteTask(taskToDelete){
            const updatedData = {
                ...selectedData,
                tasks: selectedData.tasks.filter((task) => task !== taskToDelete),
            };
            onUpdate(updatedData);
            
        }


        return (
            <>
                <div className="md:w-3/4">

                    <h1 className="text-stone-700 text-4xl font-bold my-7">
                        Tasks
                    </h1>
                    <div className="flex items-center">
                        <input className={inputClass} type="text" ref={taskValue}/> 

                        <button className="text-xl text-stone-600 mx-2 md:mx-5 w-fit hover:text-black"
                                onClick={()=>taskAdding()}
                        >
                            Add Task
                        </button>
                    </div>
                    <div className="mt-10 ">
                        {selectedData.tasks &&
                            <ul className={selectedData.tasks.length >0 ? 'bg-stone-100 rounded-md py-10' : 'rounded-md py-10'}>
                                {selectedData.tasks.map((data,index)=>(
                                    <li className='flex items-center justify-between mt-5' key={index}>
                                        <p className="text-xl text-black ms-5">{data}</p>
                                        <p className="cursor-pointer text-xl text-black me-5 hover:text-red-500"
                                            onClick={()=>deleteTask(data)}
                                        >
                                        Clear
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        }
                    </div>

                </div>
                <Modal ref={modal} buttonCaption='Close'>
                    <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                    <p className="text-stone-600 mb-4">
                        Oops ... looks like you forgot to enter a value.
                    </p>
                    <p className="text-stone-600 mb-4">
                        Please make sure you provide a valid value for every input field.
                    </p>
                </Modal>
            </>
        )
    
    }

