import { IStudent } from "../components/types";

  export const validateStudent = (newStudent : IStudent) => {
    
    const errors : string[] = [];
    // validation 
    if (newStudent.name.length < 3){
        errors.push("The name must be more than 3 letters")
    }
    if(newStudent.age < 17 || newStudent.age > 40 ){
        errors.push("the age must be between 17 and 40")

    }
    if (newStudent.CoursesList.length <= 0){
        errors.push("you must add at least one course")
    }
    return errors;

};