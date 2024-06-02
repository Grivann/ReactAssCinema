import Links from "./Links"
import Copy from "./Copy"
import Logo from "./Logo"


export default function Footer(){
    return(
        <div className="flex justify-evenly items-center">
            <Logo></Logo>
            <Links></Links>
            <Copy></Copy>
        </div>
    )
}