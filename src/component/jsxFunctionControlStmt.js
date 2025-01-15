export function JsxFunctionControlStmt() {
    const user = {
        firstname : 'John',
        lastname : 'Doe',
    }

    function formatName(user){
        return (user.firstname + ' ' + user.lastname + '!');
    }

    function Getgreeting(user){
        if(user){
            return formatName(user);
        }
        return <h1>Hello, Stranger</h1>
    }

    return (
        <>
            <h1>JSX Function Control</h1>
            <h1>Hello, {Getgreeting(user)}</h1>
        </>
    )
}