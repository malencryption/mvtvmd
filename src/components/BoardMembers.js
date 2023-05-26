import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as React from "react"

const MemberCard = boardMember => {
  return (
    <div className="w-full mx-10 shadow-md bg-white mb-10 md:mb-16 border-t border-gray-100">
      <div className="flex flex-col items-center py-6 bg-gray-100">
        {/* <img
          className="rounded-full w-48 border-4 -mt-12 border-white shadow-inner"
          src={boardMember.boardMember.featuredImage.node.mediaItemUrl}
          alt=""
        /> */}
        <span className="text-sm font-bold tracking-wider text-gray-600">
          {boardMember.boardMember.title}
        </span>
        <span className="text-sm text-gray-400">
          {boardMember.boardMember.boardMembers.memberTitle}
        </span>
      </div>
      <div className="px-6 pt-8 pb-10 text-center text-gray-500 whitespace-pre-wrap flex flex-col md:flex-row items-center">
        <img
          className="h-80 w-60 object-cover mb-4 md:mr-5"
          src={boardMember.boardMember.featuredImage.node.mediaItemUrl}
          alt=""
        />
        <p>“{boardMember.boardMember.boardMembers.memberBio}”</p>
      </div>
    </div>
  )
}

const BoardMembers = props => {
  // console.log(props.boardMembers)

  const [currentBoardMemberId, setCurrentMemberId] = React.useState(
    props.boardMembers[0].node.id
  )

  const [nextBoardMemberId, setNextMemberId] = React.useState(
    props.boardMembers[1].node.id
  )

  const [prevBoardMemberId, setPrevMemberId] = React.useState(
    props.boardMembers[props.boardMembers.length - 1].node.id
  )

  // console.log(
  //   `currentBoardMemberId, nextBoardMemberId, prevBoardMemberId: ${currentBoardMemberId}, ${nextBoardMemberId}, ${prevBoardMemberId}`
  // )

  const getBoardMember = memberId => {
    return props.boardMembers.filter(member => member.node.id === memberId)
  }

  const getNextBoardMemberId = newCurrentMemberId => {
    // console.log("new member id: " + newCurrentMemberId)
    // find the index of the new current member
    const newMemberIndex = props.boardMembers.findIndex(
      member => member.node.id === newCurrentMemberId
    )

    // console.log("new member index: " + newMemberIndex)
    // return next member id
    if (newMemberIndex === props.boardMembers.length - 1) {
      // new member is the last, set next to the first member
      return props.boardMembers[0].node.id
    } else {
      // add one to get the next member
      return props.boardMembers[newMemberIndex + 1].node.id
    }
  }

  const getPrevBoardMemberId = newCurrentMemberId => {
    // find the index of the new current member
    const newMemberIndex = props.boardMembers.findIndex(
      member => member.node.id === newCurrentMemberId
    )

    // return prev member id
    if (newMemberIndex === 0) {
      // new member is the first, set prev to the last member
      return props.boardMembers[props.boardMembers.length - 1].node.id
    } else {
      // subtract one to get the prev member
      return props.boardMembers[newMemberIndex - 1].node.id
    }
  }

  const updateMemberIds = newCurrentMemberId => {
    // console.log(newCurrentMemberId)
    setCurrentMemberId(newCurrentMemberId)
    setNextMemberId(getNextBoardMemberId(newCurrentMemberId))
    setPrevMemberId(getPrevBoardMemberId(newCurrentMemberId))

    // console.log(
    //   `2: currentBoardMemberId, nextBoardMemberId, prevBoardMemberId: ${currentBoardMemberId}, ${nextBoardMemberId}, ${prevBoardMemberId}`
    // )
  }

  const currentBoardMember = getBoardMember(currentBoardMemberId)

  const BoardMemberDisplay = props.boardMembers.map(member => {
    return (
      <div key={member.node.id}>
        <img
          className={
            "cursor-pointer rounded-full m-2 w-20 h-20 md:w-28 md:h-28 object-cover border-4 hover:border-gray-200" +
            (currentBoardMemberId === member.node.id
              ? " border-gray-200"
              : " border-white")
          }
          src={member.node.featuredImage.node.mediaItemUrl}
          alt=""
          onClick={() => updateMemberIds(member.node.id)}
        />
      </div>
    )
  })

  // console.log("current: " + currentBoardMember);

  return (
    // Start of Cards Section
    <section className="flex flex-col items-center pt-16 md:pt-20 lg:pt-20">
      <h3 className="thick_underline uppercase tracking-wider text-3xl lg:text-4xl text-gray-700">
        Board Members
      </h3>
      <p className="max-w-prose pt-20 pb-0 px-8 lg:pt-24 lg:px-0 text-gray-700 text-center whitespace-pre-wrap">
        {props.boardMemberDescription}
      </p>
      <div className="flex flex-row items-center align-center py-10">
        <div
          className="text-gray-500 cursor-pointer hover:text-gray-200 mr-2 ml-5"
          onClick={() => updateMemberIds(prevBoardMemberId)}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div className="flex flex-row flex-wrap justify-center max-w-screen-2xl">
          {BoardMemberDisplay}
        </div>
        <div
          className="text-gray-500 cursor-pointer hover:text-gray-200 ml-2 mr-5"
          onClick={() => updateMemberIds(nextBoardMemberId)}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
      <MemberCard boardMember={currentBoardMember[0].node} />
      {/* <a className="inline-block py-2 px-3 uppercase border  border-blue-500 text-blue-500 hover:bg-blue-400 hover:border-blue-400 hover:text-blue-50 focus:ring-2 focus:ring-blue-300" href="/testimonials">Read More</a> */}
    </section>
  )
}

export default BoardMembers
