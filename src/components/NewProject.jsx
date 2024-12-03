import { useRef } from "react";

import Input from "./Input.jsx"
import Modal from "./Modal.jsx"

export default function NewProject({onCancel,onSave}) {
    const title=useRef();
    const description=useRef();
    const date=useRef();

    const data=useRef();

    const modal=useRef();

    function saveData(){
        data.current={
            title:title.current.value,
            desc:description.current.value,
            date:date.current.value,
            id: Math.random()
        }

        if(data.current.title==='' || data.current.description==='' || data.current.date===''){
            modal.current.open();
            return;
        }
        onSave(data.current);
    }

    
    
    return(
        <>
            <div className="w-2/3 mt-14 lg:w-2/4">

                <div className="flex justify-end">
                    <button className="bg-white text-black mx-1 rounded-xl text-lg px-2 py-2 mt-12 
                            md:text-lg md:px-4 lg:text-xl lg:px-8 lg:py-4 lg:mt-32 hover:bg-neutral-200 hover:text-black duration-200"
                            onClick={onCancel}
                    >
                    Cancel
                    </button>
                    <button className="bg-neutral-800 text-neutral-500 rounded-xl text-lg px-2 py-2 mt-12 
                            md:text-lg md:px-4 md:mt-12 lg:text-xl lg:px-8 lg:py-4 lg:mt-32 hover:bg-neutral-950 hover:text-white duration-200"
                            onClick={()=>saveData()}
                    >
                    Save
                    </button>
                </div>
                <div className="flex flex-col mt-12  md:ms-0">
                    <Input ref={title} type='text' label='title' required/>
                    <Input ref={description} textarea rows="5" label='description' required/>
                    <Input ref={date} type='date' label='due date' required/>
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