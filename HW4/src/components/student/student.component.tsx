import { useEffect, useRef, useState } from 'react';
import CoursesList from '../courses-list/courses-list.component';
import './student.css'
import { IStudent } from '../types';
/*
interface IProps {
    id : string;
    age  : number;
    isGraduated : boolean;
    CoursesList: string[];
    onAbsentChange : (id :string ,absent : number) => void; 

}
*/
interface IProps extends IStudent {
    onAbsentChange: (id: string, change: number) => void;
  }



const Student = ( props : IProps) => {
    const [absents,setAbsent] = useState(props.absents);
    const [absentColor, setAbsentColor] = useState('#213547');
    const prevAbsents = useRef<number>(props.absents);

    // useEffect (() => {
    //    prevAbsents.current = absents;
    //  },[absents])

   /* useEffect(() => {
        if (absent > 10)
            setAbsent(0);
    }, [absent])
*/

    useEffect(() => {
        if(absents >= 10)
            setAbsentColor('#ff0000');

        else if (absents >= 7 )
            setAbsentColor('#fd9c0e');

        else if (absents >= 5 )
            setAbsentColor('#d6c728');
        else
            setAbsentColor('#213547');

    },[absents]);

    useEffect( () => {
        console.log("hello from student")

        // the unmount (cleanup)
        return () => {
            console.log( `student : ${props.name} , has been deleted `);
        };
    },[]);

    const addAbsent = () => {
        //absent +=1;
        prevAbsents.current = absents;
        setAbsent(absents + 1);
        props.onAbsentChange(props.id , +1);
        //setAbsent(oldvalue => oldvalue + 1);
        //setAbsent(oldvalue => oldvalue + 1);
        //setAbsent(oldvalue => oldvalue + 1);
        //console.log(absent);
    }
    const removeAbsent = () => {
        if (absents - 1 >= 0 ){
            prevAbsents.current = absents;
           setAbsent(absents - 1);
           props.onAbsentChange( props.id , -1);
        }
    }
    const resetAbsent = () => {
        prevAbsents.current = absents;
        setAbsent(0);
        props.onAbsentChange(props.id , - absents);
    }
       
    return (
        <div className='std-wrapper'>
            <div className='data-field'>
            <b> Student: </b> {props.name.toUpperCase() +'!'}  
            </div>
            <div className='data-field'>
            <b> Age: </b> {props.age}
            </div>
            <div className='data-field' style={{color : props.isGraduated ? 'green' : 'orange'}}>
                <b>Is graduated: </b>  {props.isGraduated ? 'Yes' : 'No'}
            </div>
            <div className='data-field'>
            <b>Courses List: </b>
            <CoursesList list = {props.CoursesList} />
            </div>
            
            <div className='absents'>
                <b style={{color: absentColor }}> Prev Absents : </b> {prevAbsents.current}
                <b style={{color: absentColor }}>Absents : </b> {absents}
                <button onClick={addAbsent}> + </button> 
                <button onClick={removeAbsent}> - </button> 
                <button onClick={resetAbsent}>Reset</button> 
            </div>
        </div>
    )
}

  export default Student;