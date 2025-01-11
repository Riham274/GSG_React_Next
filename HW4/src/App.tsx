
import { useEffect, useReducer, useRef } from 'react';
import './App.css'
import Student from './components/student/student.component'
import { IStudent } from './components/types';
import Addform from './components/add-form/add_form.component';
import useLocalStorage from './hooks/local-storage.hook';
import studentsReducer from './state/reducer';


function App() {
 
  const INITIAL_STATE = {
    studentsList: [] as IStudent[],
    totalAbsents: 0
  }

  const [state, dispatch] = useReducer(studentsReducer, INITIAL_STATE);
  const { studentsList, totalAbsents } = state;
  const lastStdRef = useRef<HTMLDivElement>(null);

  const { storedData } = useLocalStorage(studentsList, 'student-list');

  
  useEffect (() => {
     const stdList: IStudent[] = storedData || [];
     dispatch({ type: 'INITIALIZE', payload: stdList });
  }, [storedData]);


  const removeFirst = () => {
    dispatch({ type: 'REMOVE_FIRST' });
  }

  const handleAbsentChange = ( id : string , change : number) => {
    dispatch({ type: 'UPDATE_ABSENT', payload: { id, change } });
  }

  const handleAddStudent = (newStudent : IStudent) => {
    dispatch({ type: 'ADD_STUDENT', payload: newStudent });
  }

  const scrollToLast= () => {
    if (lastStdRef.current) {
      lastStdRef.current.scrollIntoView( {behavior : 'smooth'})
    }

  }

  return (
   
  <div className='main wrapper'>
     <h1 style = {{color : '#69247C' , fontSize : '24px' }}>Welcome to GSG React\next.js </h1>
     <Addform className="addForm" onSubmit={handleAddStudent}/>
    <div className='stats'>
     <button onClick={removeFirst}>Remove First Student </button>
     <button onClick={scrollToLast}>Go To Last Student </button>
     <b style={{fontSize : '12px' , fontWeight : 100 , color : 'gray'}}>Total Absents : </b> {totalAbsents} 
    </div>
    {
         studentsList.map(student => (
            <Student 
             key={student.id}
             id={student.id}
             name = {student.name} 
             age = {student.age}
             absents={student.absents}
             isGraduated ={student.isGraduated}
             CoursesList = {student.CoursesList}
             onAbsentChange = {handleAbsentChange} 
            />
        )
     )
    }
    <div ref={lastStdRef}></div>
   </div>
  )
}

export default App
