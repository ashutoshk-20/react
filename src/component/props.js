// properties that we pass from parent to child

export function Props(props) {
    return (
        <>
            <h1>-------------Props Example-------------------</h1>
            <h3>Hello {props.dataattr.fname} {props.dataattr.lname}</h3>
            <h4>From {props.dataattr.city}</h4>
        </>
    )
}