import React from 'react'
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className="row d-flex align-items-center  justify-content-between">
          <div className="col-md-6 ">
            <div className={styles.heading}>
            Online Resume Builder
            <br />
            Make a Professional Resume for Free.
            </div>
            <p className={styles.para}>Build beautiful, recruiter-tested resumes in a few clicks! Our resume builder is powerful and easy to use, with a range of amazing functions. .</p>
          
           
          </div>
          <div className="col-md-5">
            <div className={styles.right}>
              <img src="./resume-4.avif" alt="resume" className='img-fluid rounded ' />
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Header