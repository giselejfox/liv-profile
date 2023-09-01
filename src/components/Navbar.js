import { Link } from "react-router-dom"

export default function Navbar() {

    // Make sure the tab is emphasized / crossed out when we're on thatpage

    return (
        <nav className="navbar navbar-expand-lg py-5 px-4">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold" to="/work">OLIVIA OOMEN</Link>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end align-middle" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active fw-bold" aria-current="page" to="/work">WORK</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active fw-bold"to="/about">ABOUT</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active fw-bold"to="/test">TEST</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}