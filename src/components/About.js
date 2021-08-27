import * as React from 'react'
import BoardMembers from './BoardMembers'

const About = () => {
    return (
        <section id="about" className="flex flex-col items-center pt-16 md:pt-20 pb-12 md:pb-16">
            <h2 className="thick_underline uppercase tracking-wider text-4xl lg:text-5xl text-gray-700">About Us</h2>
            <p className="max-w-prose pt-20 pb-0 px-8 lg:pt-24 lg:px-0 text-gray-700 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius integer odio vulputate ac pharetra eget nascetur. Ac turpis enim condimentum tortor sagittis.</p>

            <BoardMembers />
        </section>
    )
}

export default About