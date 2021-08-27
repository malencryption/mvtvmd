import * as React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone, faMapSigns } from "@fortawesome/free-solid-svg-icons"
import letter from '../images/letter.jpg';

const Contact = () => {
    return (
        <section id="contact" className="flex flex-col items-center pt-14 pb-16 lg:pt-18 lg:pb-20">
            <h2 className="thick_underline uppercase tracking-wider text-4xl lg:text-5xl text-gray-700">Contact Us</h2>

            {/* Contact Info + Form Container */}
            <div className="flex justify-center pt-10 md:pt-20 pb-0 px-8 lg:pt-24 lg:px-0 max-w-full">
                <div className="flex flex-col lg:flex-row rounded-md overflow-hidden lg:shadow-lg border-t border-gray-50 order-last md:order-first">
                    <div className="bg-gray-100 px-10 lg:px-20 py-12 flex items-center">
                        {/* Contact Info */}
                        <div>
                            <h2 className="font-medium mb-5 text-gray-700">Get in Touch</h2>
                            <div>
                                <div className="flex items-center mb-10">
                                    <div className="p-2 rounded-full h-12 w-12 flex justify-center items-center bg-blue-100 mr-6 bg-blue-100 text-blue-500">
                                        <FontAwesomeIcon icon={faPhone} />
                                    </div>
                                    <div>
                                        <span className="block text-xs font-medium text-gray-600">Telephone Number</span>
                                        <span className="block font-medium text-gray-600">(702)397-6888</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center mb-10">
                                <div className="p-2 rounded-full h-12 w-12 flex justify-center items-center bg-blue-100 mr-6 bg-blue-100 text-blue-500">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                                <div>
                                  <span className="block text-xs font-medium text-gray-600">Email Address</span>
                                  <span className="block font-medium text-gray-600">info@mvtvmd.com</span>
                                </div>
                            </div>
                            <div className="flex items-center md:mb-10">
                                <div className="p-2 rounded-full h-12 w-12 flex justify-center items-center bg-blue-100 mr-6 text-blue-500">
                                    <FontAwesomeIcon icon={faMapSigns} />           
                                </div>
                                <div className="w-2/3 sm:w-auto">
                                    <span className="block text-xs font-medium text-gray-600">Mailing Address</span>
                                    <span className="block font-medium text-gray-600">Moapa Valley TV Maintenance District<br />
                                    P.O. Box 553, Overton, NV 89040</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Contact Form */}
                    <div className="bg-white px-5 md:px-10 lg:px-20 pt-6 md:pt-12 pb-6 md:pb-20 order-first md:order-last text-center md:text-left">
                        <div className="flex items-center">
                            <div className="max-w-full">
                                <h2 className="text-xl lg:text-xl font-medium mb-1 text-gray-700">Have a Question?</h2>
                                <span className="text-sm mb-4 text-gray-400">Contact us by phone, email, or send us a note, and we'll get in touch.</span>
                                {/* Form */}
                                {/* <form name="contact" data-netlify="true" autocomplete="off" netlify-honeypot="bot-field">
                                  <p className="hidden">
                                    <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
                                  </p>
                                  <div className="input-animated">
                                    <input type="text" id="name" name="name" required pattern="\S+.*" placeholder="the placeholder"/>
                                    <label htmlFor="name" className="label-name"><span      className="content-name">Name</span></label>  
                                  </div>
                                  <div className="input-animated">
                                    <input type="email" id="email" name="email" required placeholder="the placeholder"/>
                                    <label htmlFor="email" className="label-email"><span      className="content-email">Email</span></label>  
                                  </div>
                                  <div>
                                    <textarea
                                    name="question"
                                    placeholder="Your Question"
                                    id="question"
                                    cols="30"
                                    rows="5"
                                    minLength="10"
                                    maxLength="100"
                                      required></textarea>
                                  </div>
                                  <button type="submit" id="submit-button" className="w-full uppercase text-center px-5 py-3 shadow-md my-4 lg:mb-0 bg-blue-500 border border-blue-500 text-gray-50 hover:bg-blue-400 hover:border-blue-400 focus:ring-4 focus:ring-blue-300">Send Message</button>
                                  <span id="success" className="hidden absolute mt-2 px-4 py-2 font-medium border rounded-sm border-green-500 bg-green-100 text-green-600">Thanks! We'll be in touch soon.</span>
                                  <span id="error" className="hidden absolute mt-2 px-4 py-2 font-medium border rounded-sm border-red-500 bg-red-100 text-red-600">Whoops... Something went wrong.</span>
                                </form> */}
                                <img className="mt-5 max-w-full md:max-w-sm hidden md:block" src={letter} alt="letter" />
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact