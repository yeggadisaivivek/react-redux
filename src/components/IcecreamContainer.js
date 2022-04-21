import React from 'react'
import { buyCake } from '../redux/cake/cakeActions'
import {connect} from 'react-redux'
import { buyIceCream } from '../redux/icecream/icecreamActions'

function IcecreamContainer(props) {
  return (
    <div>
        <h2>No of Icecreams:{props.noOfIcecreams}</h2>
        <button onClick={props.buyIceCream}>Buy icecream</button>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        noOfIcecreams:state.icecream.noOfIcecreams
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IcecreamContainer)