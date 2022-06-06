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
            <button onClick={getRandomNumber}>
                {/* 시작시 포켓몬 뽑기, 이외 다시 뽑기 */}
                {no===0?"포켓몬 뽑기":"다시 뽑기"}
            </button>
        </div>
    );
}

export default Button;