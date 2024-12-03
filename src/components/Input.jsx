import { forwardRef } from "react"

const Input = forwardRef( function Input({label,textarea,...props},ref) {

    const classes='text-xl text-stone-600 mb-5 bg-stone-200 border-b-4 border-b-stone-300 rounded-sm focus:outline-0 focus:border-b-stone-500 duration-200'

    return(
        <>
            <label className="uppercase font-bold text-xl text-stone-500 mb-2">{label}</label>
            
            {textarea ? <textarea ref={ref} className={classes} {...props}/> 
              : <input ref={ref} className={classes+' lg:h-12'} {...props}/>
            }
        </>
        
    )
})
export default Input;