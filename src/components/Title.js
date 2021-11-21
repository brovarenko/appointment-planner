import React from "react"

export const Title = ({data}) => {
  return (
    <div className="tile-container">
      {Object.values(data).map((e,i) => <p key={i} className="title">{e}</p>)}
    </div>
  )
}