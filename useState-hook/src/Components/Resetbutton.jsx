
export default function Resetbutton({count,setcount}){
    function toZero() {
        if(count !== 0) {
            setcount(0)
        }
    }


    return ( 
        <>
            <button onClick={toZero} > Reset to Zero</button>
        </>
    )

}