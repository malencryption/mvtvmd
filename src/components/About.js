import * as React from 'react'
import BoardMembers from './BoardMembers'

const About = (props) => {
    return (
        <section id="about" className="lg:w-5/6 xl:w-2/3 2xl:w-1/2 mx-auto flex flex-col items-center pt-16 md:pt-20 pb-12 md:pb-16">
            <h2 className="thick_underline uppercase tracking-wider text-4xl lg:text-5xl text-gray-700">About Us</h2>
            <p className="max-w-prose pt-20 pb-0 px-8 lg:pt-24 lg:px-0 text-gray-700 text-center">{props.description}</p>

            <BoardMembers boardMembers={props.boardMembers} />
        </section>
    )
}

export default About