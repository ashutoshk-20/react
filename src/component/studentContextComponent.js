import studentContext from './useContextHooks';

export function StudentContextComponent(props){
    const firstname = "Vaishnav";
    const lastname = "Kokate";
    const age = "11";


    return(
        <studentContext.Provider value={{firstname,lastname,age}}>
            {props.children}
        </studentContext.Provider>
    );
}