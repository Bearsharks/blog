import * as React from "react"
import { Link } from "gatsby"
import Footer from "../components/common/Footer"
import Header from "../components/common/Header"
const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath


  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Header>{title}</Header>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}

export default Layout
