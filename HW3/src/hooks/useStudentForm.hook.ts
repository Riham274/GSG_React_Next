import { useState} from 'react';
import { IStudent } from '../components/types';
import { validateStudent } from '../utils/validation';

const INITIAL_STUDENT = { age: 0, CoursesList: [], isGraduated: false, name: '', id: '', absents: 0 };


const useStudentForm = (onSubmit: (std: IStudent) => void) => {
  const [student, setStudent] = useState<IStudent>(INITIAL_STUDENT);
  const [isOpen, setIsOpen] = useState(false);
  const [errorsList, setErrorsList] = useState<string[]>([]);

  
  const handleChange = (field: string, value: any) => {
    setStudent(({ ...student, [field]: value }));
  };


  const handleCoursesChange = (list: string[]) => {
    setStudent((prev) => ({ ...prev, coursesList: list }));
  };

  const handleSubmit = () => {
    const newStudent: IStudent = { ...student, id: Date.now().toString() };
    const errors = validateStudent(newStudent);
    if (errors.length > 0) {
      setErrorsList(errors);
    } else {
      setErrorsList([]);
      onSubmit(newStudent);
      handleClear();
    }
  };

  const handleClear = () => {
    setStudent(INITIAL_STUDENT);
  };

  return {
    student,
    isOpen,
    errorsList,
    setIsOpen,
    handleChange,
    handleCoursesChange,
    handleSubmit,
    handleClear,
  };
}
export default useStudentForm;
