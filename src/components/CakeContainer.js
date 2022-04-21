import React from 'react'
import { buyCake } from '../redux/cake/cakeActions'
import {connect} from 'react-redux'

function CakeContainer(props) {
  return (
    <div>
        <h2>No of Cakes:{props.numberOfCakes}</h2>
        <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        numberOfCakes:state.cake.noOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)