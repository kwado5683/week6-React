//mutation function is what helps to track the changes in the state.
//we can not update the vlaue of our state without the mutation function




export default function Button({count,setcount}){


    function increaseCounter () {
        setcount(count + 1);
    }

    return (
        <>
            <button onClick={increaseCounter}>click to add cookie</button>
            {/* <p>{count} cookies.</p> */}
        </>
    )

}