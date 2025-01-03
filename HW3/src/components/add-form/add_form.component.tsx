import './add-form.css'
import { IStudent } from '../types';
import CoursesListForm from '../courses-list-form/courses-list-form.component';
import useStudentForm from '../../hooks/useStudentForm.hook';

/*
const Addform = () => {
    const [name ,setName] = useState<string>("");
    const [age ,setAge] = useState<number>(0);
    const [isGraduated ,setisGraduated] = useState<boolean>(false);
  

    const HandleNameChange =(e : React.ChangeEvent<HTMLInputElement>) =>{
        setName(e.target.value)

    }
    return (
        <div>
            <h3>{name}</h3>
            <h3>{age}</h3>
            <h3>{isGraduated.toString()}</h3>
            <div>
                <label htmlFor="name">Student Name : </label>
                <input 
                id='name' 
                type="text" 
                onChange={HandleNameChange} />
            </div>
            <div>
                <label htmlFor="age">Student Age : </label>
                <input 
                id='age' 
                type="number"  
                min={17} 
                max={40}
                onChange={e => setAge(Number(e.target.value))}
                />
            </div>
            <div>
            <label htmlFor="isGraduated">Is Student Graduated : </label>
                <input 
                id='isGraduated' 
                type="checkbox"  
                onChange={e => setisGraduated(e.target.checked)}
                />
            </div>
        </div>
    )
}
*/  

//const INITIAL_STUDENT = {age:0 , CoursesList : [] , isGraduated: false , name : '' , id:'' , absents : 0 };

interface IProps
 {
    className ?: string;
    onSubmit : (std : IStudent) => void;
} 

const Addform = (props : IProps) => {
    const {
        student,
        isOpen,
        errorsList,
        setIsOpen,
        handleChange,
        handleCoursesChange,
        handleSubmit,
        handleClear,
      } = useStudentForm(props.onSubmit);
    /*
    const [student,setStudent] = useState<IStudent>(INITIAL_STUDENT);
    const [isOpen,setIsOpen] = useState(false);
    const [errorsList,setErrorsList] = useState<string[]>([]);

    useEffect( () => {
        console.log("hello from add form")
    },[]);

    const handleChange = (field :string , value : any) => {
        setStudent({...student, [field] :value})

     /*if (field === 'name') {
        setStudent({...student, name : value});
        else if (field === 'age') {
            setStudent({...student, age : value});
        else if (field === 'isGraduated') {
            setStudent({...student, isGraduated : value});    
    } ==>same with [field] : value 
    */ 
    //}
/*
   const handleSubmit = () => {
    const newStudent : IStudent = {...student ,id : Date.now().toString() };
    
    const errors = validateStudent(newStudent);
    if (errors.length > 0) 
      {
       setErrorsList(errors);
       }

    else
    {  setErrorsList([]);
       props.onSubmit(newStudent);
       handleClear();
    }
   } 
   
   const handleClear = () => {
    setStudent( INITIAL_STUDENT) ;
   }

   const handleCoursesChange = (list : string[]) => {
    setStudent({...student,CoursesList : list});

   }
*/
    

    return (
        <div className= {` wrapper ${props.className} ${isOpen ? 'open' : 'closed'}`}>
             <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <span>&and; </span> : <span>&or; </span>} 
                {isOpen ? 'Hide ' : 'Show '} 
                Add Form
                </button>
            <div className='input'>
                <label htmlFor="name">Student Name : </label>
                <input
                value={student.name}
                id='name' 
                type="text" 
                onChange={ e => handleChange( 'name', e.target.value)}
                 />
            </div>
            <div className='input'>
                <label htmlFor="age">Student Age : </label>
                <input 
                id='age' 
                type="number"  
                min={17} 
                max={40}
                value={student.age}
                onChange={e => handleChange('age',e.target.value )}
                />
            </div>
            <div className='input'>
            <label htmlFor="isGraduated">Is Student Graduated : </label>
                <input 
                id='isGraduated' 
                type="checkbox"  
                checked={student.isGraduated}
                onChange={e => handleChange('isGraduated',e.target.checked )}
                />
            </div>
            <CoursesListForm value={student.CoursesList} onSubmit={handleCoursesChange}/>
            <div className="Actions">
                <button onClick={handleSubmit} style={{color:errorsList.length ? 'red' : 'initial'}}>Submit</button>
                <button onClick={handleClear}>Clear</button>
            </div>
         {
            errorsList.length > 0 ? (
            <div>
                <h4>You have the following error/s </h4>
                {
                    errorsList.map(error => <p key={error}>{error}</p>)
                }

            </div>
            )
            : null
          }
        </div>
    )
}



export default Addform;



