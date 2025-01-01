
import { Trash } from '@phosphor-icons/react';
import './Todoitem.css'
import { ITodoitem } from '../type';

interface IProps{
    data : ITodoitem
    onToggle : (e : React.ChangeEvent<HTMLInputElement>) => void
    onDelete : () => void

}
const Todoitem = ({data, onToggle, onDelete } : IProps) => {
    return(
        <div className={`Todoitem-wrapper ${data.isDone ? 'done' : ''}
                                          ${data.isUrgent ? 'urgent' : ''}`
                        }>
          <span className="details">
                <div className="checkbox">
                     <input 
                     type="checkbox" 
                     checked={data.isDone} 
                     onChange={onToggle} 
                     data-item-id={data.id}
                     id={`checkbox-${data.id}`}
                     />
                     <label htmlFor={`checkbox-${data.id}`}></label>
                 </div>
              
          </span>
          <span>{data.title}</span>
          <Trash size={25} color="#d11515" weight="fill" onClick={onDelete} /> 
        </div> 
    )
}

export default Todoitem;