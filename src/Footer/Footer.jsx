import Links from "./Links"
import Copy from "./Copy"
import Logo from "./Logo"


export default function Footer(){
    return(
        <div className="flex lg:flex-row flex-col lg:justify-evenly items-center justify-center">
            <Logo></Logo>
            <Links></Links>
            <Copy></Copy>
        </div>
    )
}