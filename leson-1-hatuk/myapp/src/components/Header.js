import React from 'react'

export default function Header(props) {
  return (
    <div>
      <h1>{props.barev}</h1>
      <h2>
      {props.list.map((num) => (
          <p key={num.id}>{num.name}</p>
      ))}
      </h2>
      <div onClick={props.func}>
        Name : {props.obj.name} <br/> Age : {props.obj.age}
      </div>
    </div>
  )
}
