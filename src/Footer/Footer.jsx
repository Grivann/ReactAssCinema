import Links from "./Links"
import Copy from "./Copy"
import Logo from "./Logo"


export default function Footer({logoimg}){
    return(
        <div className="flex lg:flex-row flex-col lg:justify-evenly items-center justify-center">
            <Logo logoimg={logoimg}></Logo>
            <Links></Links>
            <Copy></Copy>
        </div>
    )
}