import React from "react"
import { Styled } from "theme-ui"

const getDate = (date, { day = true, month = true, year = true } = {}) =>
  date.toLocaleDateString("en-GB", {
    day: day ? "numeric" : undefined,
    month: month ? "long" : undefined,
    year: year ? "numeric" : undefined,
  })

const getTime = date =>
  date.toLocaleTimeString("en-GB", {
    timeZoneName: "short",
  })

const TalkDate = ({ date }) => {
  const talkDate = new Date(date)
  return (
    <>
      <time dateTime={talkDate.toISOString()} title={talkDate.toISOString()}>
        {getDate(talkDate, { year: true })} at {getTime(talkDate)}
      </time>
    </>
  )
}

const TalkVideo = ({ name, youtubeUrl }) => {
  if (youtubeUrl != null) {
    const embedYoutubeUrl = youtubeUrl
      .replace("youtube", "youtube-nocookie")
      .replace("watch?v=", "embed/")
    return (
      <>
        <p>
          Video: <Styled.a href={youtubeUrl}>{youtubeUrl}</Styled.a>
        </p>
        <iframe
          title={name}
          src={embedYoutubeUrl}
          frameborder="0"
          width="560"
          height="315"
          allowFullScreen
        />
      </>
    )
  }
  return null
}

const TalkEvent = ({ eventUrl, eventName, location }) => {
  if (eventUrl != null) {
    return (
      <>
        Event: <Styled.a href={eventUrl}>{eventName}</Styled.a> <br />
        <small>({location})</small>
      </>
    )
  }
  return (
    <>
      Event: {eventName} <br />
      <small>({location})</small>
    </>
  )
}

const TalkSlides = ({ name, slidesUrl }) => {
  const [shouldLoadSlides, loadSlides] = React.useState(false)
  function onLoadSlides() {
    loadSlides(true)
  }
  if (slidesUrl != null) {
    return (
      <>
        <p>
          Slides: <Styled.a href={slidesUrl}>{slidesUrl}</Styled.a>
        </p>
        {!shouldLoadSlides && (
          <button onClick={onLoadSlides}>Load slides</button>
        )}
        {shouldLoadSlides && (
          <iframe
            title={name}
            src={slidesUrl}
            frameborder="0"
            width="560"
            height="315"
            allowFullScreen
          />
        )}
      </>
    )
  }
  return null
}

const Talk = ({
  name,
  eventName,
  eventUrl,
  location,
  slidesUrl,
  date,
  youtubeUrl,
}) => (
  <div>
    <Styled.h1>{name}</Styled.h1>
    <p>
      <TalkDate date={date} />
    </p>
    <TalkEvent {...{ eventUrl, eventName, location }} />
    <TalkSlides {...{ name, slidesUrl }} />
    <TalkVideo {...{ name, youtubeUrl }} />
  </div>
)

export default Talk
