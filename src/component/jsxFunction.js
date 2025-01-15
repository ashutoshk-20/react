export function JsxFunction() {
    const user = {
        firstname : 'John',
        lastname : 'Doe',
    }

    function formatName(user){
        return (user.firstname + ' ' + user.lastname + '!');
    }

    return (
        <>
            <h1>-----------------JSX Function----------------</h1>
            <h1>Hello, {formatName(user)}</h1>
        </>
    )
}