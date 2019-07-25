/** @jsx jsx */

import React from "react"
import { Link } from "gatsby"
import { Styled, jsx } from "theme-ui"

const TalkList = ({ talks }) => {
  return (
    <>
      <Styled.ul>
        {talks.map(talk => (
          <Styled.li
            key={talk.id}
            sx={{
              bg: "muted",
              borderRadius: "0.5rem",
              boxShadow:
                "0 1px 3px 0 rgba(107,15,26,0.4),0 1px 2px 0 rgba(107,15,26,0.1)",
              padding: "1rem",
              margin: "1rem 0",
            }}
          >
            <strong>
              <Styled.a as={Link} to={talk.slug}>
                {talk.name}
              </Styled.a>
            </strong>
            <br />
            {new Date(talk.date).toLocaleDateString("en-GB", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}{" "}
            at <Styled.a href={talk.eventUrl}>{talk.eventName}</Styled.a>
            <br />
            <small>{talk.location}</small>
          </Styled.li>
        ))}
      </Styled.ul>
    </>
  )
}

export default TalkList
