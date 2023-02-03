import React from 'react'


function Alert(props) {
    const capitalize=(word)=>{ //This function is to make the 1st letter of the success in alert capital
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1) ;
    }
  return (
    props.alert && <div>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
  )
}
 
export default Alert