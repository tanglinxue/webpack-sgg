import React,{Suspense,lazy} from 'react'
import { Link,Routes,Route } from 'react-router-dom'
import {Button} from 'antd'


const Home = lazy(()=>import(/* webpackChunkName: 'Home' */'./pages/Home'))
const About = lazy(()=>import(/* webpackChunkName: 'About' */'./pages/About'))

function App(){
  return <div>
    <h1>APP</h1>
    <Button type='primary'>按钮</Button>
    <ul>
      <li><Link to='/home'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
    </ul>
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
    </Suspense>
   
  </div>
}

export default App
