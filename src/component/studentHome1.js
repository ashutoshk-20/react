import { useContext } from "react"
import studentContext from "./useContextHooks"

export function StudentHome1(){
    const studentData = useContext(studentContext)

    return(
        <div>
            <h3>I'm {studentData.age} years old</h3>
        </div>
    )
}