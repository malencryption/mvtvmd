import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'

const MeetingMinutes = () => {
  const pdfFiles = [
    {title: "May 3, 2023", url: "http://wpmvtvmd.zappitalstudio.com/wp-content/uploads/2023/06/5-May-3-2023.doc.pdf"},
    {title: "June 6, 2023", url: "http://wpmvtvmd.zappitalstudio.com/wp-content/uploads/2023/06/6-june-6-2023.pdf"},
    {title: "April 4, 2023", url: "http://wpmvtvmd.zappitalstudio.com/wp-content/uploads/2023/06/4-April-4-2023.doc.pdf"},
    {title: "March 7, 2023", url: "http://wpmvtvmd.zappitalstudio.com/wp-content/uploads/2023/06/3-March-7-2023-1.pdf"},
    {title: "February 7, 2023", url: "http://wpmvtvmd.zappitalstudio.com/wp-content/uploads/2023/06/2-February-7-2023.pdf"},
    {title: "January 3, 2023", url: "http://wpmvtvmd.zappitalstudio.com/wp-content/uploads/2023/06/1-january-3-2023.doc.pdf"},
    {title: "Annual Budget Meeting - January 3, 2023", url: "http://wpmvtvmd.zappitalstudio.com/wp-content/uploads/2023/06/annual-budget-meeting-minutes-3-january-2023.doc.pdf"},
    {title: "May 17, 2023", url: "http://wpmvtvmd.zappitalstudio.com/wp-content/uploads/2023/06/5-May-17-2023.pdf"},
    {title: "Annual Budget Agenda 2023", url: "http://wpmvtvmd.zappitalstudio.com/wp-content/uploads/2023/06/Annual-Budget-Agenda-2023.pdf"},
    {title: "March 7, 2023", url: "http://wpmvtvmd.zappitalstudio.com/wp-content/uploads/2023/06/3-March-7-2023.pdf"}
  ]
    return (
    //    Start of 'Ready To Get Started' Section
        <section id="minutes"
          className="flex flex-col items-center pt-14 pb-16 lg:pt-18 lg:pb-20 bg-gray-50"
        >
          <h2 className="thick_underline text-center font-bold px-4 lg:px-0 text-3xl lg:text-4xl uppercase text-gray-700">
            Meeting Minutes
          </h2>
          <ul className="mt-16 flex flex-wrap justify-center max-w-screen-xl">
            {pdfFiles.map(file => {
              return (
                <li>
                  <a className="link_underline inline-block m-3 text-gray-600 text-center px-5 py-3 lg:px-5 lg:py-3 border border-blue-900 mx-2 lg:mx-3 hover:text-blue-300 hover:border-blue-300 focus:ring-2 focus:ring-blue-300" href={file.url} download>
                    {file.title} <FontAwesomeIcon icon={faDownload} />
                  </a>
                </li>
              )
            })}
          </ul>
        </section>
    )
}

export default MeetingMinutes