import * as React from 'react'
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Hero = () => {
    return (
        // start of hero (landing) section
        <section className="hero__container min-h-screen flex items-center justify-center px-8">
          <div className="flex flex-col justify-center items-center pt-30 pb-10 lg:pt:20">
            <h1 className="text-center text-5xl lg:text-7xl text-gray-50">Access Your TV Channels</h1>
            <p className="text-lg lg:text-2xl text-gray-50 mt-12 mb-16 max-w-prose leading-relaxed text-center">MVTVMD rebroadcasts digital television signals to the Moapa Valley and Moapa Nevada. Local broadcasts from Las Vegas Nevada and Salt Lake City are part of the Districts line up.</p>
            <div className="flex flex-col md:block">
              <AnchorLink className="inline-block uppercase text-center px-5 py-3 lg:px-9 lg:py-5 shadow-md mx-2 mb-4 lg:mx-8 lg:mb-0 bg-blue-500 border border-blue-500 text-gray-50 hover:bg-blue-400 hover:border-blue-400 focus:ring-4 focus:ring-blue-300" to="#contact">Get In Touch</AnchorLink>
              <AnchorLink className="inline-block uppercase text-center px-5 py-3 lg:px-9 lg:py-5 border border-gray-50 text-gray-50 mx-2 lg:mx-8 hover:text-blue-300 hover:border-blue-300 focus:ring-2 focus:ring-blue-300" to="#service">Learn More</AnchorLink>
            </div>
          </div>
        </section>
        // end of hero (landing) section
    )
}

export default Hero