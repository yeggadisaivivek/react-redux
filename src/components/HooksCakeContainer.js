import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'


function HooksCakeContainer() {
  const noOfCakes =  useSelector(state => state.cake.noOfCakes)
  const dispatch =useDispatch()
  return (
    <div>
      <h2>Hooks No of cakes:{noOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy a Cake</button>
    </div>
  )
}

export default HooksCakeContainer
