import React from "react"
import { graphql } from "gatsby"
import { Styled } from "theme-ui"
import Layout from "../components/layout"
import TalkList from "../components/talk-list"

export const query = graphql`
  query($today: Date!) {
    pastTalks: allTalk(
      filter: { date: { lt: $today } }
      sort: { fields: date, order: DESC }
    ) {
      ...TalksFragment
    }
    futureTalks: allTalk(
      filter: { date: { gte: $today } }
      sort: { fields: date, order: DESC }
    ) {
      ...TalksFragment
    }
  }

  fragment TalksFragment on TalkConnection {
    nodes {
      id
      name
      eventName
      eventUrl
      date
      location
      slidesUrl
      slug
    }
  }
`

const TalksTemplate = ({ data: { pastTalks, futureTalks } }) => {
  return (
    <Layout>
      <section>
        <Styled.h2>Future talks</Styled.h2>
        <TalkList talks={futureTalks.nodes} />
      </section>
      <section>
        <Styled.h2>Past talks</Styled.h2>
        <TalkList talks={pastTalks.nodes} />
      </section>
    </Layout>
  )
}

export default TalksTemplate
