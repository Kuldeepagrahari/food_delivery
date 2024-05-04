import React, { useState } from 'react'
import "./home.css"
import Header from '../../components/header/header'
import ExploreMenu from '../../components/exploreMenu/exploreMenu'
import Footer from '../../footer/footer'
import SignIn from '../../signIn/signIn'
import FoodDisplay from '../../foodDisplay/foodDisplay'

const Home = () => {

  const [category,setCategory] = useState("All")

  return (

 
    <div>
      <Header></Header>
      <ExploreMenu category={category} setCategory={setCategory}></ExploreMenu>
      <FoodDisplay category={category}></FoodDisplay>
      {/* <SignIn></SignIn> */}

      <Footer></Footer>
    </div>
  )
}

export default Home
