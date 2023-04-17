import headerImage from "../assests/restaurant.jpg"
import Button from "./Button"
import "../components/styles/HeaderStyle.css"
import {NavLink} from "react-router-dom"
const Header = () => {
    return (
        <header className="paddining">
            <div className="header-title">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
               <NavLink to="/reservations"><Button  text="Order a Table"/></NavLink>
            </div>
            <div className="header-image">
                <img src={headerImage} alt=""/>
            </div>
        </header>
    )
}
export default Header