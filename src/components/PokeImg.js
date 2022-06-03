import { useContext, useState } from "react";
import { PokeNumberContext } from "./PokePicker";
import '../css/pokeImg.css'


function PokeImg(){
    //포켓몬 번호
    const pokeNumber = useContext(PokeNumberContext);
    //클래스 네임
    let pokeName;
    
    if(pokeNumber===0){
        pokeName="poke_img ball";
    }else{
        //이미지 파일 순서
        const page = Math.floor(pokeNumber/20)+1;
        //남은 순서
        const leftNumber = pokeNumber - (page-1)*20;
        //x순서
        const x = leftNumber%4+1;
        //y순서
        const y = Math.floor(leftNumber/4)+1;
        //클래스 네임
        pokeName = "poke_img poke_page"+page+" x"+x+" y"+y;
    }

    
    
    // console.log(pokeNumber +" "+page);

    return(
        <div className={pokeName}>
            {/* {pokeNumber} */}
        </div>
    );
}

export default PokeImg;