import { useContext } from "react";
import { PokeNumberContext } from "./PokePicker";
import "../css/pokeInfo.css"


const PokeInfo=()=>{
    //포켓몬 번호
    const pokeNumber = useContext(PokeNumberContext);

    //포켓몬 제이슨 파일 불러오기
    const json = require("../assets/json/pokemon.json");
    console.log(json);
    //포켓몬 번호와 일치하는 포켓몬 정보
    const pokemon = json.filter((ele)=>{
        return ele.no===pokeNumber;
    })[0];
    //포켓몬 번호 3자리로 변경
    let number = pokemon.number.toString();
    while(number.length<3){
        number="0"+number;
    }

    return(
        <>
        <div className="poke_info">
            <span>{number} </span>
            <span>{pokemon.name}</span>
        </div>
        </>
    );
};


export default PokeInfo;