import React from 'react'
import styles from '../styles/ContactUs.module.scss'
export default function ContactUs() {
    return (
        <section>
            <div className="container">
                <form className={`row g-3 ${styles.form}`}>
                    <div className="col-md-4 my-3">
                        <label  className="form-label">First name</label>
                        <input type="text" className="form-control" id="validationDefault01" placeholder="Your Name" required />
                    </div>
                    <div className="col-md-4 my-3">
                        <label  className="form-label">Last name</label>
                        <input type="text" className="form-control" id="validationDefault02" placeholder='Last Name' required />
                    </div>
                    <div className="col-md-4 my-3">
                        <label  className="form-label">Username</label>
                        <div className="input-group">
                            <span className="input-group-text" id="inputGroupPrepend2">@</span>
                            <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
                        </div>
                    </div>
                    <div className="col-md-6 my-3">
                        <label  className="form-label">City</label>
                        <input type="text" className="form-control" id="validationDefault03" required />
                    </div>
                    <div className="col-md-3 my-3">
                        <label  className="form-label">State</label>
                        <select className="form-select text-uppercase" id="validationDefault04" required >
                            <option  disabled value="">Choose...</option>
                            <option>egypt</option>
                            <option>holland</option>
                            <option>germany</option>
                        </select>
                    </div>
                    <div className="col-md-3 my-3">
                        <label  className="form-label">Zip</label>
                        <input type="text" className="form-control" id="validationDefault05" required />
                    </div>
                    <div className="col-12 my-3">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                            <label className="form-check-label">
                                Agree to terms and conditions
                            </label>
                        </div>
                    </div>
                    <div className={`col-12 my-3 ${styles.btn}`}>
                        <button type="submit">send massege</button>
                    </div>
                </form>
            </div>
        </section >
    )
}
