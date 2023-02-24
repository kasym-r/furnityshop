import React from "react"
import "./Header.scss"
import Head from "./Head"
import Search from "./Search"
import Navbar from "./Navbar"

const Header = ({ CartItem }) => {
  return (
    <>
      <Head />
      <Search CartItem={CartItem} />
      <Navbar />
    </>
  )
}

export default Header
