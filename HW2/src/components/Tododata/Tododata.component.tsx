//import React from "react"
import './Tododata.css'
import { ITodoitem } from "../type"

interface IProps{
    items : ITodoitem[];
}

const TodoData = (props : IProps) => {
    const urgentCount = props.items.filter(item => item.isUrgent).length;
    const completedCount = props.items.filter(item => item.isDone).length;
    return(
        <div className="Tododata-wrapper">
            <div>
                <b>{props.items.length}</b>
                <span> Created tasks</span>
                
            </div>
            <div>
                <b>{urgentCount}</b>
                <span> Urgent tasks</span>
            </div>
            <div>
                <b>{completedCount}</b>
                <span> Completed tasks</span>
            </div>

        </div>
    )
}
export default TodoData;