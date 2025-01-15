/*
Hook APIs provide an alternative to writing 
-only by used in functional component
-cannot be conditional
-only be called at the top level of coompopnent

useContext Hook
context is a way to manage state globally
*/

import { createContext } from "react";
const studentContext = createContext();

export default studentContext;