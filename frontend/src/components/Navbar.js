import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <img src='./favicon.ico' alt="To Home Page"/>
                </Link>
                <Link to="/about">
                    About
                </Link>
                <Link to="/">
                    Contact
                </Link>
                <Link to="/">
                    GitHub
                </Link>
                <Link to="/register">
                    Register
                </Link>
                <Link to="/">
                    Log In
                </Link>
            </div>
        </header>
    )
}

export default Navbar