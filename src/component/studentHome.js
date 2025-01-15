import { useContext } from "react";
import studentContext from "./useContextHooks";

export function StudentHome(){
    const studentData = useContext(studentContext)

    return(
        <div>
            <h2>Student Information</h2>
            <h3>This is {studentData.firstname} {studentData.lastname} .</h3>
        </div>
    )
}