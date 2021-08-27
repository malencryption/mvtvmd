import * as React from 'react'
import memberImage1 from '../images/smiling_man.png';
import memberImage2 from '../images/smiling_man_2.jpg';
import memberImage3 from '../images/smiling_woman.jpg';

const BoardMembers = () => {
    return (
        // Start of Cards Section
        <section className="flex flex-col items-center pt-16 md:pt-20 lg:pt-20">
          <h3 className="thick_underline uppercase tracking-wider text-3xl lg:text-4xl text-gray-700">Board Members</h3>
          <div className="flex flex-row flex-wrap justify-center pt-20 max-w-screen-2xl">
    
            {/* Start of Card */}
            <div className="w-64 sm:w-72 mx-10 shadow-md bg-white mb-10 md:mb-16">
              <p className="px-6 pt-8 pb-20 text-center text-gray-500">“Nec gravida tempus, lobortis elit augue tellus. Dolor, et ipsum porta pharetra. Risus nunc turpis vehicula sed. Volutpat mollis quam volutpat nulla pellentesque.”</p>
              <div className="flex flex-col items-center pb-6 bg-gray-100">
                <img className="rounded-full w-24 border-4 -mt-12 border-white shadow-inner" src={memberImage2} alt="" />
                <span className="text-sm font-bold mt-2 tracking-wider text-gray-600">Thom Yorke</span>
                <span className="text-sm text-gray-400">Founder, Radiohead</span>
              </div>
            </div>
            {/* End of Card */}
    
            {/* Start of Card */}
            <div className="w-64 sm:w-72 mx-10 shadow-md bg-white mb-10 md:mb-16">
              <p className="px-6 pt-8 pb-20 text-center text-gray-500">“Nec gravida tempus, lobortis elit augue tellus. Dolor, et ipsum porta pharetra. Risus nunc turpis vehicula sed. Volutpat mollis quam volutpat nulla pellentesque.”</p>
              <div className="flex flex-col items-center pb-6 bg-gray-100">
                <img className="rounded-full w-24 border-4 -mt-12 border-white shadow-inner" src={memberImage3} alt="" />
                <span className="text-sm font-bold mt-2 tracking-wider text-gray-600">Alfa Mist</span>
                <span className="text-sm text-gray-400">Creative Director, Antiphon</span>
              </div>
            </div>
            {/* End of Card */}
    
            {/* Start of Card */}
            <div className="w-64 sm:w-72 mx-10 shadow-md bg-white mb-10 md:mb-16">
              <p className="px-6 pt-8 pb-20 text-center text-gray-500">“Nec gravida tempus, lobortis elit augue tellus. Dolor, et ipsum porta pharetra. Risus nunc turpis vehicula sed. Volutpat mollis quam volutpat nulla pellentesque.”</p>
              <div className="flex flex-col items-center pb-6 bg-gray-100">
                <img className="rounded-full w-24 border-4 -mt-12 border-white shadow-inner" src={memberImage1} alt="" />
                <span className="text-sm font-bold mt-2 tracking-wider text-gray-600">Rory Ferreira</span>
                <span className="text-sm text-gray-400">Artist, Milo</span>
              </div>
            </div>
            {/* End of Card */}

            {/* Start of Card */}
            <div className="w-64 sm:w-72 mx-10 shadow-md bg-white mb-10 md:mb-16">
              <p className="px-6 pt-8 pb-20 text-center text-gray-500">“Nec gravida tempus, lobortis elit augue tellus. Dolor, et ipsum porta pharetra. Risus nunc turpis vehicula sed. Volutpat mollis quam volutpat nulla pellentesque.”</p>
              <div className="flex flex-col items-center pb-6 bg-gray-100">
                <img className="rounded-full w-24 border-4 -mt-12 border-white shadow-inner" src={memberImage2} alt="" />
                <span className="text-sm font-bold mt-2 tracking-wider text-gray-600">Thom Yorke</span>
                <span className="text-sm text-gray-400">Founder, Radiohead</span>
              </div>
            </div>
            {/* End of Card */}
    
            {/* Start of Card */}
            <div className="w-64 sm:w-72 mx-10 shadow-md bg-white mb-10 md:mb-16">
              <p className="px-6 pt-8 pb-20 text-center text-gray-500">“Nec gravida tempus, lobortis elit augue tellus. Dolor, et ipsum porta pharetra. Risus nunc turpis vehicula sed. Volutpat mollis quam volutpat nulla pellentesque.”</p>
              <div className="flex flex-col items-center pb-6 bg-gray-100">
                <img className="rounded-full w-24 border-4 -mt-12 border-white shadow-inner" src={memberImage3} alt="" />
                <span className="text-sm font-bold mt-2 tracking-wider text-gray-600">Alfa Mist</span>
                <span className="text-sm text-gray-400">Creative Director, Antiphon</span>
              </div>
            </div>
            {/* End of Card */}
    
            {/* Start of Card */}
            <div className="w-64 sm:w-72 mx-10 shadow-md bg-white mb-10 md:mb-16">
              <p className="px-6 pt-8 pb-20 text-center text-gray-500">“Nec gravida tempus, lobortis elit augue tellus. Dolor, et ipsum porta pharetra. Risus nunc turpis vehicula sed. Volutpat mollis quam volutpat nulla pellentesque.”</p>
              <div className="flex flex-col items-center pb-6 bg-gray-100">
                <img className="rounded-full w-24 border-4 -mt-12 border-white shadow-inner" src={memberImage1} alt="" />
                <span className="text-sm font-bold mt-2 tracking-wider text-gray-600">Rory Ferreira</span>
                <span className="text-sm text-gray-400">Artist, Milo</span>
              </div>
            </div>
            {/* End of Card */}
          </div>
          {/* <a className="inline-block py-2 px-3 uppercase border  border-blue-500 text-blue-500 hover:bg-blue-400 hover:border-blue-400 hover:text-blue-50 focus:ring-2 focus:ring-blue-300" href="/testimonials">Read More</a> */}
        </section>
    )
}

export default BoardMembers