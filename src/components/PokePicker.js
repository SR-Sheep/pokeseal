import {createContext, useState } from "react";
import "../css/pokePicker.css"
import Button from "./Button";
import PokeImg from "./PokeImg";
import PokeInfo from "./PokeInfo";


export const PokeNumberContext = createContext();

function PokePicker(){

    const [pokeNumber , setPokeNumber]=useState(0);

    return(
        <PokeNumberContext.Provider value={pokeNumber}>
            <div id="picker">
                <PokeImg></PokeImg>
                {pokeNumber!==0&&<PokeInfo></PokeInfo>}
                <Button setPokeNumber={setPokeNumber}></Button>
            </div>
        </PokeNumberContext.Provider>
    )
}

export default PokePicker;