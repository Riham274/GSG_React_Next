import { useState, useEffect } from "react";
import { IStudent } from "../components/types";
import useLocalStorage from "./local-storage.hook";
import { validateStudent } from "../utils/validation";

const INITIAL_STUDENT: IStudent = { age: 0, CoursesList: [],isGraduated: false, name:"", id: "", absents: 0 };

const useStudentForm = () => {
  const [students, setStudents] = useState<IStudent[]>([]);
  const [currentStudent, setCurrentStudent] = useState<IStudent>(INITIAL_STUDENT);

  const [errors, setErrors] = useState<string[]>([]);
  const [totalAbsents, setTotalAbsents] = useState<number>(0);

  const { storedData } = useLocalStorage(students, "students-list");



  useEffect (() => {
    const stdList: IStudent[] = storedData || [];
    const totalAbs = stdList.reduce((prev, cur) => prev + cur.absents ,0);
    setTotalAbsents(totalAbs);
    setStudents(stdList);
 },[storedData]);


  useEffect(() => {
    setErrors(validateStudent(currentStudent));
  },[currentStudent]);


  const handleChange = (field: string , value: any) => {
    setCurrentStudent({ ...currentStudent, [field]: value })
  }


  const handleSubmit = () => {
    const newStudent : IStudent = { ...currentStudent, id: Date.now().toString() };
    setStudents([newStudent, ...students]);
    handleClear();
  };

  
  const handleClear = () => {
    setCurrentStudent(INITIAL_STUDENT);
  }

  const deleteStudent = (id: string) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  
  const handleAbsents = (id: string, change: number) => {
    setStudents((prevStudents) => prevStudents.map((student) =>
                                  student.id === id ? { ...student, absents: student.absents + change } 
                                 : student
                                 )
    );
    setTotalAbsents((prevTotal) => prevTotal + change);
  };

  return {
    students,
    currentStudent,
    totalAbsents,
    errors,
    handleChange,
    handleSubmit,
    handleClear,
    deleteStudent,
    handleAbsents,
  };
};

export default useStudentForm;
