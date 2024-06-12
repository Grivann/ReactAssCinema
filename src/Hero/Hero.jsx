import Header from "./Header";
import HeroText from "./HeroText";

export default function Hero({heroimg, logoimg}){
    return(
        <div className="flex flex-col">        
            <Header logoimg={logoimg}></Header>
            <HeroText heroimg={heroimg}></HeroText>
        </div>

    )

}