import * as React from 'react'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTv } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'gatsby';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    return (
        // Footer links and social media
        <footer className="py-10 sm:py-16 border-t border-blue-50 bg-gray-50">
            <div className="flex flex-col lg:flex-row items-center justify-between mx-auto max-w-screen-2xl">
                <div className="flex items-center">
                    {/* Logo SVG */}
                    <div className="flex items-center ml-4 text-blue-900">
                        <Link to="/" className="font-semibold">
                            <FontAwesomeIcon icon={faTv} />
                        </Link>
                        <Link to="/" className="ml-3">
                            <h4 className="font-semibold">MVTVMD</h4>
                        </Link>
                    </div>
                </div>
                <ul className="flex flex-col lg:flex-row items-center text-sm font-medium text-gray-500 pt-8 pb-4 sm:py-12 lg:py-0 uppercase">
                    <li className="mx-7 hover:text-gray-700 mb-2 lg:mb-0">
                    <AnchorLink to="#service">Service Information</AnchorLink>
                    </li>
        
                    <li className="mx-7 hover:text-gray-700 mb-2 lg:mb-0">
                    <AnchorLink to="#minutes">MEETING MINUTES</AnchorLink>
                    </li>
        
                    <li className="mx-7 hover:text-gray-700 mb-2 lg:mb-0">
                    <AnchorLink to="#about">ABOUT US</AnchorLink>
                    </li>
        
                    <li className="mx-7 hover:text-gray-700 mb-2 lg:mb-0">
                    <AnchorLink to="#contact">CONTACT US</AnchorLink>
                    </li>
                </ul>
                <div className="flex text-blue-400">
                    {/* Twitter Logo  */}
                    {/* <a className="hover:text-blue-200" href="/">
                        <FontAwesomeIcon icon={faTwitter} /> 
                    </a> */}
                    {/* Facebook Logo  */}
                    <a className="hover:text-blue-200 text-2xl" href="https://www.facebook.com/MVTVD/">
                    <FontAwesomeIcon icon={faFacebook} /> 
                    </a>
                    {/* Instagram Logo  */}
                    {/* <a className="hover:text-blue-200" href="/">
                        <FontAwesomeIcon icon={faInsta} /> 
                    </a> */}
                </div>
            </div>
       
            {/* Fine Print */}
            <div className="flex flex-col items-center mt-6 sm:mt-24 text-xs text-gray-400">
                {/* <div className="mb-4">
                    <a className="mx-4 hover:text-gray-600" href="/" rel="nofollow">Privacy Policy</a>
                    <a className="mx-4 hover:text-gray-600" href="/" rel="nofollow">Terms &amp; Conditions</a>
                </div> */}
                <span>© MVTVMD {new Date().getFullYear()}</span>
            </div>
       </footer>
    )
}

export default Footer