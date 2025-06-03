//ToDo: i want to have a button when the user clicks the button, a message appears.

export default function Button() {

    //event logic
    function handleClick () {
        console.log("I clicked");
    }

    return (
        <>
            <button onClick={() => {
                handleClick();
            }}
            > click me for a message

            </button>
        </>
    )

}