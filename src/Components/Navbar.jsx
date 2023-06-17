import { Link, useLoaderData } from "react-router-dom"
import { useLocation } from "react-router-dom"

const Navbar = () => {
    const location = useLocation().pathname.split('/')[1]
    return (
        <div className="navbar">
            <Link to={'/'} style={location === '' ? { background: 'black', color: 'white' } : { background: '#C4C4C4', color: 'initial' }}>Create SuperHero</Link>
            <Link to={'/interview'} style={location === 'interview' ? { background: 'black', color: 'white' } : { background: '#C4C4C4', color: 'initial' }}>Interview</Link>
        </div>
    )
}

export default Navbar