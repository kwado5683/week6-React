



export default function Lessbutton ({count,setcount}) {

    function decreaseCookie () {
        setcount(count-1);
    }

    return(
        <>
            <button onClick={decreaseCookie}>reduce cookies</button>
        </>
    )
}