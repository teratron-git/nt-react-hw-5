import React from "react"

interface IProps {
  img?: string
  children: React.ReactElement
}

const Card = ({ img = "", children }: IProps) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt="" />
      {children}
    </div>
  )
}

export default Card
