import { Link } from 'react-router-dom';
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()


    return (
        <>

            <ul className="main-menu__list">
                <li>
                    <Link to='/'>Home </Link>
                </li>
                <li>
                    <Link to='/about'>About Us</Link>
                </li>
                {/* <li className="dropdown">
                    <Link href="#">Pages</Link>
                    <ul>
                        <li><Link href="team">Team</Link></li>
                        <li><Link href="team-details">Team Details</Link></li>
                        <li className="dropdown">
                            <Link href="#">Projects</Link>
                            <ul>
                                <li><Link href="projects">Projects</Link></li>
                                <li><Link href="project-details">Project Details</Link></li>
                            </ul>
                        </li>
                        <li><Link href="testimonials">Testimonials</Link></li>
                        <li><Link href="pricing">Pricing</Link></li>
                        <li><Link href="faq">Faq</Link></li>
                        <li><Link href="404">404 Error</Link></li>
                    </ul>
                </li> */}
                <li className="dropdown">
                    <Link to='/services'>Services</Link>
                    <ul>
                        <li><Link href="electric-panel-repair">Electric Panel Repair</Link></li>
                        <li><Link href="short-circuit-repair">Short Circuit Repair</Link>
                        </li>
                        <li><Link href="commercial-services">Commercial Services</Link>
                        </li>
                        <li><Link href="installing-ceiling-fan">Installing A Ceiling Fan</Link>
                        </li>
                        <li><Link href="lighting-fixtures">Lighting A Fixtures</Link>
                        </li>
                        <li><Link href="maintenance-service">Maintenance Service</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link to='/products'>Products</Link>
                    <ul>
                        <li><Link href="electric-panel-repair">Electric Panel Repair</Link></li>
                        <li><Link href="short-circuit-repair">Short Circuit Repair</Link>
                        </li>
                        <li><Link href="commercial-services">Commercial Services</Link>
                        </li>
                        <li><Link href="installing-ceiling-fan">Installing A Ceiling Fan</Link>
                        </li>
                        <li><Link href="lighting-fixtures">Lighting A Fixtures</Link>
                        </li>
                        <li><Link href="maintenance-service">Maintenance Service</Link></li>
                    </ul>
                </li>
                <li>
                    <Link to='/blogs'>Blog</Link>
                </li>
                <li>
                    <Link to='/contact-us'>Contact</Link>
                </li>
            </ul>
        </>
    )
}
