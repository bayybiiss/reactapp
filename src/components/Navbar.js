/* eslint-disable react/no-typos */
import React from 'react'
import PropTypes from 'prop-types'


 function Navbar(props) {
  return (
    <div>
      <h3>{props.title}</h3>
    </div>
  )
}

Navbar.PropTypes={
    title: PropTypes.string.isRequired
}
Navbar.defaultProps={
    title: "Bilgi Yok"
}

export default Navbar;