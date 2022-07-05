import * as React from "react"
import {useState} from 'react'

import Layout from "../components/layout/layout"
import { ThemeContext } from "../context/indexContext"

import "antd/dist/antd.css"

const IndexPage = () => {
  return (
  <Layout>
    <div>
      <h1>
        This is the content of the website
      </h1>
    </div>
  </Layout>
  )
}

export default IndexPage
