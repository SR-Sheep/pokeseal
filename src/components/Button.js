import { useContext } from "react";
import { PokeNumberContext } from "./PokePicker";



function Button({setPokeNumber}){
    const no = useContext(PokeNumberContext);
    const getRandomNumber=(e)=>{
        //1~146번 추출
        const pokeNo = Math.floor(Math.random()*146)+1;
        setPokeNumber(pokeNo);
    }

    return (
        <div>
            <button onClick={getRandomNumber}>버튼</button>
        </div>
    );
}

export default Button;