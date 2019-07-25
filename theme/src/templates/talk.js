import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Talk from "../components/talk"

export const query = graphql`
  query($talkID: String!) {
    talk(id: { eq: $talkID }) {
      name
      eventName
      eventUrl
      date
      location
      slug
      slidesUrl
      youtubeUrl
    }
  }
`

const TalkTemplate = ({ data: { talk } }) => (
  <Layout>
    <Talk {...talk} />
  </Layout>
)

export default TalkTemplate
