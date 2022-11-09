import React from 'react'

const newMessage = {
    message: "Hola Mundo"
}

const description = () => "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam optio eaque in sapiente quibusdam quia placeat iste unde harum, aspernatur culpa nesciunt officiis excepturi omnis perferendis quae aperiam. Quibusdam, facilis!"

export const FirstApp = () => {
  return (
    <>
        <h1>{ newMessage.message }</h1>
        <p>{ description() }</p>
    </>
  )
}
