import React from 'react'
import Linear from './Linear'
// import contentBg from './contentBg/png'

const Content = () => {
  return <main>
    <h1>Fun facts about React</h1>
      <div className="unbox">
        <Linear title={"Was first released in 2013"}></Linear>
        <Linear title={"Was originally created by Jordan Walke"}></Linear>
        <Linear title={"Has well over 100K stars on GitHub"}></Linear>
        <Linear title={"Is maintained by Facebook"}></Linear>
        <Linear title={"Powers thousands of enterprise apps, including mobile apps"}></Linear>
      </div>
  </main>
}

export default Content