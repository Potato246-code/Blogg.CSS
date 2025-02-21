import React from "react"

const BlogSnippet = ({ title, author, date, content }) => (

  <div className="card">
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6"> {author} </p>
        </div>
      </div>

      <div className="content">
        {content}
        <br />
        <time dateTime="2016-1-1">{date}</time>
      </div>
    </div>
  </div>

)

export default BlogSnippet
