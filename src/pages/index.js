import * as React from "react"
import {graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import Services from "../components/Services"
import MeetingMinutes from "../components/MeetingMinutes"
import Contact from "../components/Contact"
import About from "../components/About"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  // console.log(data);

  const heroTitle = data.allWpPage.edges[0].node.hero?.heroTitle || `Title`;
  const heroDescription = data.allWpPage.edges[0].node.hero?.heroDescription || `Description`;

  const aboutDescription = data.allWpPage.edges[0].node.aboutUs?.aboutUsDescription || `Description`;
  const channelListInfo = data.allWpPage.edges[0].node.channelList;
  const serviceInfo = data.allWpPage.edges[0].node.serviceInfo;

  const boardMemberDescription = data.allWpPage.edges[0].node.boardMemberSection?.boardMemberDescription || `Description`;

  const boardMembers = data.allWpBoardMember.edges;

  return (
    <Layout location={location} title={siteTitle}>
    {/* <Layout location={location}> */}
      <Seo title="Home" />
      <Hero heroTitle={heroTitle} heroDescription={heroDescription} />
      <Services channelListInfo={channelListInfo} serviceInfo={serviceInfo} />
      <About description={aboutDescription} boardMembers={boardMembers} boardMemberDescription={boardMemberDescription} />
      <MeetingMinutes />
      <Contact />
    </Layout>
  )
}

export default Index

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allWpPage {
      edges {
        node {
          id
          title
          date
          hero {
            heroDescription
            heroTitle
          }
          aboutUs {
            aboutUsDescription
          }
          boardMemberSection {
            boardMemberDescription
          }
          contactUs {
            phoneNumber
            emailAddress
            mailingAddress
          }
          channelList {
            title
            description
            buttonText
            listFile {
              mediaItemUrl
            }
          }
          serviceInfo {
            topic1Title
            topic1Description
            topic2Title
            topic2Description
            topic3Title
            topic3Description
          }
        }
      }
    }
    allWpBoardMember {
      edges {
        node {
          id
          title
          date
          boardMembers {
            memberBio
            memberTitle
          }
          featuredImage {
            node {
              mediaItemUrl
            }
          }
        }
      }
    }
  }
`