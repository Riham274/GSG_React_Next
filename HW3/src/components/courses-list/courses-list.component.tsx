

interface IProps{
    list : string[];
}

const CoursesList = (props : IProps) => {
    //console.log(props)
    return(
     <div>
       
        <ul className="courses-list">
         {
            props.list.map((item,index) => <li key = {index + item } > {item} </li> )
         }
        </ul>
     </div>

    )
}
export default CoursesList