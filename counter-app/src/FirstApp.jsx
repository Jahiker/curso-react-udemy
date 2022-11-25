import React from 'react'
import PropTypes from 'prop-types'

export const FirstApp = ({ title, subtitle, number }) => {

  return (
    <>
        <h1>{ title }</h1>
        <p>{ subtitle }</p>
        <p>{ number }</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  number: PropTypes.number
}

FirstApp.defaultProps = {
  title: "Esto es el titulo",
  subtitle: "Esto es el subtitulo",
  number: 123
}