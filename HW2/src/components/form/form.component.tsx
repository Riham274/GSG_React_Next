import React from "react";
import './form.css'
import { ITodoitem } from "../type";


interface IProps {
    onSubmit : (item : ITodoitem) => void;
    }

const Form = (props : IProps) => {
    const handleSubmit =(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        const title :string = e.currentTarget["task"].value;
        const isUrgent :boolean = e.currentTarget["urgent"].checked;

        if (title.length > 3){
        const newTask : ITodoitem = {
            id :Date.now(),
            title,
            isUrgent,
            isDone : false
         }
    
        props.onSubmit(newTask);
      }
    }


    return(
        <form className="form-wrapper" onSubmit={handleSubmit}>
           <input type="text" name="task" placeholder="Type Todo here... "/> 
           
           <div className="urgent1">
            <label htmlFor="urgent">Urgent</label>
            <input type="checkbox" id="urgent" name="urgent"/>
           </div>
           <input type="submit" value="Add Todo" />
        </form>
    )
}

export default Form;
