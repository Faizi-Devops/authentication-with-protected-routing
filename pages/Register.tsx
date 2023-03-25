import styles from '../styles/Register.module.css'
const Register = () => {
    return (
        <div className={styles.backgroundimage}>
            <div style={{
                display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh"
            }}>
                <div className="card" style={{ width: "30rem" }}>

                    <div className="card-body">
                        <h5 className="card-title text-center">Register</h5>

                        <div className="row">
                            <div className="col-lg-6"><div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div></div>

                        </div>

                    </div>
                </div>

            </div>


        </div>
    )
}
export default Register;