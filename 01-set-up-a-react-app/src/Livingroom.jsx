

export default function Livingroom(props) {

    return (
        <section>
            <h1> This is going to be a test</h1>

            <h1> {`This is the livingrooom ${props.wallcolor}`}
            <p> {`the living room has ${props.couch} couches`} </p>
            </h1>
        </section>
    )
}