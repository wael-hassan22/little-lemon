import logo from "../assests/Logo .svg"
const Nav = () => {
    return (
        <nav>
            <div className="nav-logo">
                <img src={logo} alt=""/>
            </div>
            <ul className="nav-list">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Reservations</a></li>
                <li><a href="#">Order Online</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </nav>
    )
}
export default Nav