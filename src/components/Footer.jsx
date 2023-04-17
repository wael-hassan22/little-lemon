import logo from "../assests/Asset 20@4x.png"
import "../components/styles/FooterStyle.css"
import { NavLink } from "react-router-dom"
const Footer = () => {
    return (
        <footer className="Footer paddining">
            <div className="footer-logo">
                <img src={logo} />
            </div>
            <div className="doormat-navigation">
                <h3>Doormat Navigation</h3>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="#">About</NavLink></li>
                    <li><NavLink to="#">Menu</NavLink></li>
                    <li><NavLink to="/reservations">Reservations</NavLink></li>
                    <li><NavLink to="#">Order Online</NavLink></li>
                    <li><NavLink to="#">Login</NavLink></li>
                </ul>
            </div>
            <div className="contact">
                <h3>Contact</h3>
                <ul>
                    <li><a href="#">4925 Clinton Street , Litte Rock</a></li>
                    <li><a href="#">Tel : 501--221-9448</a></li>
                    <li><a href="#">info@littlelemon.com</a></li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer