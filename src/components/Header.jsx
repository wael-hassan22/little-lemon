import headerImage from "../assests/restaurant.jpg"
import Button from "./Button"
const Header = () => {
    return (
        <header className="paddining">
            <div className="header-title">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Button  text="Order a Table"/>
            </div>
            <div className="header-image">
                <img src={headerImage} alt=""/>
            </div>
        </header>
    )
}
export default Header