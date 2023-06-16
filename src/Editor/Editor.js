import React from 'react'
import InputControl from '../InputControl/InputControl'
import styles from "./Editor.module.css"

const Editor = (props) => {
  const sections = props.sections
  return (
    <div className="container d-flex flex-column mb-3 mt-4 ">
      <div className="row shadow p-3">
        <div className="col-md-12 d-flex justify-content-between ">
        {Object.keys(sections)?.map((key) => (
          <div className="d-flex  mb-3" key={key}>
            {sections[key]}
            
          </div>
        )) }
        
        </div>
        <hr class="border border-danger border-2 opacity-50"></hr>
      </div>
   
    </div>


  )
}

export default Editor