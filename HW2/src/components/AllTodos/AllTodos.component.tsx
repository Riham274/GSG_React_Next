import React from "react"
import Todoitem from "../Todoitem/Todoitem.component";
import './AllTodos.css'
import { ITodoitem } from "../type";

interface IProps{
    items: ITodoitem[];
    onToggle: (e : React.ChangeEvent<HTMLInputElement>) => void;
    onDelete: (index : number) => void;
}

const AllTodos = (props : IProps) =>{
    return(
        <div className="AllToDo-wrapper">
            {
              props.items.map((item, index) => (
              <Todoitem 
              key={item.id} 
              data={item}
              onToggle={props.onToggle}
              onDelete={() => props.onDelete(index)} 
              />
             ))

            }  
        </div>
    )
}
export default AllTodos;