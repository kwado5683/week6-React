

export default function Button2() {

    function handleClick(message) {
        console.log(`This is button ${message}`)
    }



    return (
        <>

            <button onClick={() => handleClick(2)}> button 2</button>
        </>
    )
}