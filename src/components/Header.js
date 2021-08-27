import * as React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTv } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby";

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className="fixed w-full bg-gray-50 z-50 shadow-md">
            <nav className="lg:max-w-screen-2xl flex flex-row flex-wrap justify-between my-3 ml-auto mr-auto " role="navigation">
                {/* COMPANY LOGO (SVG) */}
                <div className="flex items-center ml-3 text-blue-900">
                    <Link to="/" className="text-2xl font-semibold">
                        <FontAwesomeIcon icon={faTv} />
                    </Link>
                    <Link to="/" className="ml-3">
                        <h1 className="text-2xl font-semibold"><span className="md:hidden">MVTVMD</span><span className="hidden md:block">Moapa Valley TV Maintenance District</span></h1>
                    </Link>
                </div>
                <div className="inline-block h-8 mr-3 xl:hidden">
                    <button id="nav_toggle" className="h-full w-full" onClick={toggleMenu}>
                        <svg className="h-full w-auto" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#3b82f6" viewBox="0 0 256 256">
                            <rect width="256" height="256" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" stroke="#3b82f6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><line x1="40" y1="64" x2="216" y2="64" stroke="#3b82f6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><line x1="40" y1="192" x2="216" y2="192" stroke="#3b82f6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                        </svg>
                    </button>
                </div>
                <div id="nav_content" className={"w-full pt-8 pb-1 mr-3 xl:flex xl:w-auto xl:py-0 xl:items-center" + (isMenuOpen ? '' : ' hidden')}>
                    <ul className="flex flex-col ml-auto font-medium text-sm text-gray-600 xl:flex-row uppercase">
                        <li className="mx-6 hover:text-gray-700 mb-4 xl:mb-0">
                            <AnchorLink to="#service">Service Information</AnchorLink>
                        </li>
            
                        <li className="mx-6 w-mc hover:text-blue-500 mb-4 xl:mb-0">
                            <AnchorLink to="#minutes">MEETING MINUTES</AnchorLink>
                        </li>
            
                        {/* <li className="mx-6 w-mc hover:text-blue-500 mb-4 lg:mb-0"><a href="/blog.html">BLOG</a></li> */}
                        
                        <li className="mx-6 w-mc hover:text-blue-500 mb-4 xl:mb-0"><AnchorLink to="#about">ABOUT US</AnchorLink></li>
                        
                        <li className="mx-6 w-mc hover:text-blue-500 mb-4 xl:mb-0"><AnchorLink to="#contact">CONTACT US</AnchorLink></li>
                    </ul>
                    {/* <a className="inline-block p-2 font-medium text-sm border mt-2 lg:mt-0 text-blue-500 border-blue-500 ml-6 hover:bg-blue-500 hover:text-blue-50" href="/contact.html">GET IN TOUCH</a> */}
                </div>
            </nav>
        </header>
    )
}

export default Header