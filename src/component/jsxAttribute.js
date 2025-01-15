export function JsxAttribute() {
    var googlelink = "https://www.google.com";
    var colour = "red";

    return(
        <>
            <h1>---------------------JSX Attribute Example------------------------</h1>
            <a href={googlelink}>Google</a>
            <font style={{color:colour}}>This is a red color text</font>
        </>
    )
}