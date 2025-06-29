

// const Button =(props)=>{
//     console.log(props)
//     return(
//         <button>{props.buttonVitraKoContent}</button>
//     )
// }

//Alternative

// const Button =(props)=>{
//     const {buttonVitraKoContent} = props
    
//     return(
//     <button>{buttonVitraKoContent}</button>
//     )
// }

import propTypes from 'prop-types'

const Button = ({buttonVitraKoContent,arkoContent})=>{
    

    return(
        <>
        <button>{buttonVitraKoContent}</button>
        <button>{arkoContent}</button>
        </>
    )

  

}
  Button.defaultProps = {
        buttonVitraKoContent : "Yomerodefaultpropsbataaakoho"
    }

    Button.propTypes = {
        arkoContent : propTypes.string.isRequired
    }

export default Button;