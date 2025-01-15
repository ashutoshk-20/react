// properties that we pass from parent to child

export function Props(props) {
    return (
        <>
            <h1>Props Example</h1>
            <h1>Hello {props.dataattr.fname} {props.dataattr.lname}</h1>
            <h2>From {props.dataattr.city}</h2>
        </>
    )
}