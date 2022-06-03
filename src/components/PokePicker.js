import {createContext, useContext, useState } from "react";
import "../css/pokePicker.css"
import Button from "./Button";
import PokeImg from "./PokeImg";


export const PokeNumberContext = createContext();

function PokePicker(){

    const [pokeNumber , setPokeNumber]=useState(0);

    return(
        <PokeNumberContext.Provider value={pokeNumber}>
            <div id="picker">
                <PokeImg></PokeImg>
                <Button setPokeNumber={setPokeNumber}></Button>
            </div>
        </PokeNumberContext.Provider>
    )
}

export default PokePicker;