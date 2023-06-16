import React from 'react'
import Editor from '../../Editor/Editor'
// import Resume from '../../Resume/Resume'
import styles from "./Body.module.css";
import { BsArrowDown } from "react-icons/bs";

const Body = () => {

  const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];

  const sections = {
    basicInfo: "Basic Info",
    workExp: "Working Experience",
    project: "Project",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  }

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-12">
          <h3 className="text-center">Resume Builder</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="colors ">
            <div className={styles.colors}>
              {colors.map((item) => (
                <span
                  key={item}
                  style={{ backgroundColor: item }}
                  className={styles.color}

                />
              ))}
            </div>
            <div className=''>
              <button className="btn btn-primary float-end mt-3 py-2 px-4 align-items-center">Download <BsArrowDown className='h5 ' /></button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="">
        <Editor sections={sections} />
      </div>

      {/* <div className='d-flex flex-column mb-3'>
     <Editor sections={sections} />
     </div> */}

    </div>
  )
}

export default Body