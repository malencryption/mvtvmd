import * as React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTv } from "@fortawesome/free-solid-svg-icons"
import { faBroadcastTower } from "@fortawesome/free-solid-svg-icons"
import { faSignal } from "@fortawesome/free-solid-svg-icons"
import { faCommentDollar } from "@fortawesome/free-solid-svg-icons"
import fox3 from '../images/3news.jpg'
import kvvu from '../images/kvvu.jpg'
import wn from '../images/weathernation.jpg'
import pbs from '../images/vegaspbs.jpg'
import metv from '../images/metv.jpg'
import uni from '../images/univision.jpg'
import estrella from '../images/estrellatv.jpg'
import createtv from '../images/create_tv.jpg'
import bnet from '../images/broadcast_network.jpg'

const Services = () => {
    return (
        // Start of Services Section
        <section id="service" className="flex flex-col items-center pt-20 lg:pt-30 pb-10 md:pb-20 bg-gray-50">
          <h2 className="thick_underline uppercase tracking-wider text-4xl lg:text-5xl text-gray-7000 text-center">Service Information</h2>
          <div className="flex flex-row flex-wrap justify-center pt-12 md:pt-20 max-w-screen-xl">
            <div className="flex flex-wrap justify-center lg:text-left">
              <div className="flex flex-col text-center items-center w-72 md:w-1/4 lg:w-89 m-6 md:m-9">
                <div>
                  <div className="flex justify-center items-center h-12 w-12 rounded-full p-3 text-blue-700 bg-blue-100 mb-2">
                    <FontAwesomeIcon icon={faTv} />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-700" >Channel List</h3>
                <p className="text-gray-600 py-4">Click to see a full list of channels</p>
                <a className="inline-block py-2 px-3 uppercase border border-blue-500 text-blue-500 hover:bg-blue-400 hover:border-blue-400 hover:text-blue-50 focus:ring-2 focus:ring-blue-300" href="">Full Channel List</a>
              </div>

              <div className="flex flex-wrap max-w-sm lg:max-w-lg md:w-2/5 m-6 md:m-9">
                <div className="w-1/3 flex items-center"><img className="object-contain w-full h-28 p-1 sm:p-2" src={fox3} alt="Fox 3" /></div>
                <div className="w-1/3 flex items-center"><img className="object-contain w-full h-28 p-1 sm:p-2" src={kvvu} alt="KVVU" /></div>
                <div className="w-1/3 flex items-center"><img className="object-contain w-full h-28 p-1 sm:p-2" src={wn} alt="Weather Nation" /></div>
                <div className="w-1/3 flex items-center"><img className="object-contain w-full h-28 p-1 sm:p-2" src={pbs} alt="Vegas PBS" /></div>
                <div className="w-1/3 flex items-center"><img className="object-contain w-full h-28 p-1 sm:p-2" src={metv} alt="MeTV" /></div>
                <div className="w-1/3 flex items-center"><img className="object-contain w-full h-28 p-1 sm:p-2" src={uni} alt="Univision" /></div>
                <div className="w-1/3 flex items-center"><img className="object-contain w-full h-28 p-1 sm:p-2" src={estrella} alt="Estrella TV" /></div>
                <div className="w-1/3 flex items-center"><img className="object-contain w-full h-28 p-1 sm:p-2" src={createtv} alt="Create" /></div>
                <div className="w-1/3 flex items-center"><img className="object-contain w-full h-28 p-1 sm:p-2" src={bnet} alt="Broadcast Network" /></div>
              </div>
            </div>

          </div>
          <div className="flex flex-row flex-wrap justify-center max-w-screen-2xl">
            <div className="flex flex-col text-center items-center w-72 lg:w-89 m-6 md:m-9 lg:block lg:text-left">
              <div>
                <div className="flex justify-center items-center h-12 w-12 rounded-full p-3 text-blue-700 bg-blue-100 mb-2">
                  <FontAwesomeIcon icon={faSignal} />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-700" >What Do I Need?</h3>
              <p className="text-gray-600 py-4">To pick up the signal, you will need a digital antenna, coaxial cable to connect to your TV, and the appropriate connectors for your set.</p>

            </div>
            <div className="flex flex-col text-center items-center w-72 lg:w-89 m-6 md:m-9 lg:block lg:text-left">
              <div>
                <div className="flex justify-center items-center h-12 w-12 rounded-full p-3 text-blue-700 bg-blue-100 mb-2">
                  <FontAwesomeIcon icon={faBroadcastTower} />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-700">Where Do I Get My Signal From?</h3>
              <p className="text-gray-600 py-4">All Moapa TV Maintenance District signals originate via providers in Utah or Las Vegas from various TV stations. They are transmitted to residents of Moapa Valley from Beacon Hill.</p>
            </div>
            <div className="flex flex-col text-center items-center w-72 lg:w-89 m-6 md:m-9 lg:block lg:text-left">
              <div>
                <div className="flex justify-center items-center h-12 w-12 rounded-full p-3 text-xl text-blue-700 bg-blue-100 mb-2">
                  <FontAwesomeIcon icon={faCommentDollar} />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-700 capitalize" >Does this cost me anything?</h3>
              <p className="text-gray-600 py-4">No! Well that's not entirely true. This service is provided through a "Service Charge" of $24 on all real property in the Service Area. NRS 318.201</p>
            </div>
          </div>
        </section>
    )
}

export default Services