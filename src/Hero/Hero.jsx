import Header from "./Header";
import HeroText from "./HeroText";

export default function Hero({heroimg}){
    return(
        <div className="flex flex-col">        
            <Header ></Header>
            <HeroText heroimg={heroimg}></HeroText>
        </div>

    )

}