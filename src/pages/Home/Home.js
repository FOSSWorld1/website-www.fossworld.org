/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Banner from '../../components/Banner/Banner'
import WhyCodeuino from '../../components/WhyCodeuino/WhyCodeuino'


import "./Home.css";
const Layout = () => {

  return (
    <div>
    {/* <Layout> */}
    <Banner/>
    <WhyCodeuino/>
  {/* </Layout> */}
    </div>
  )
}

Layout.propTypes = {
}

export default Layout
