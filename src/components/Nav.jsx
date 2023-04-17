import { useState } from "react"
import logo from "../assests/Logo .svg"
import "../components/styles/NavStyle.css"
import { NavLink } from "react-router-dom"
const Nav = () => {
    const [open, setOpen] = useState("true")
    const [close, setClose] = useState("false")
    const handleClick = () => {
        setOpen(!open)
        setClose(!close)
    } 
    return (
        <nav>
            <div className="ham">
                <span className="hamopen" style={open ? {display :"none"} : {display :"block"}} onClick={handleClick}>=</span>
                <span className="hamclose" style={close ? {display :"block"} : {display :"none"}} onClick={handleClick}>X</span>
            </div>
           <div className="open-nav" style={close ? {display :"block"} : {display :"none"}}>
                <div className="nav-logo ">
                        <img src={logo} alt=""/>
                </div>
                <ul className="nav-list">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="#">About</NavLink></li>
                    <li><NavLink to="#">Menu</NavLink></li>
                    <li><NavLink to="/reservations">Reservations</NavLink></li>
                    <li><NavLink to="#">Order Online</NavLink></li>
                    <li><NavLink to="#">Login</NavLink></li>
                </ul>
           </div>
        </nav>
    )
}
export default Nav