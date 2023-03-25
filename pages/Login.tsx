import styles from '../styles/Login.module.css';
import { useFormik } from "formik";
import Link from 'next/link'
import * as Yup from "yup";

const Login = () => {
    const formik = useFormik({
        initialValues: {
            
            email: "",
            password: "",
           

        },
        validationSchema: Yup.object({
          
          
            email: Yup.string()
                .label("Email")
                .required()
                .email("Invalid email address"),
            password: Yup.string()
                .label("Password")
                .required()
                .min(5, "Password must be at least 5 characters long")
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{}[\]|;:'",.<>/?\\]).*$/,
                    "Password must include at least one lowercase letter, one uppercase letter, one digit, and one special character"
                ),

        }),

        onSubmit: (values:any) => {
            console.log('====================================');
            console.log(values);
            alert(values)
            console.log('====================================');

        }

    });

    return (
        <div className={styles.backgroundImage}>
            <div style={{
                display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh"
            }}>
                <form onSubmit={formik.handleSubmit}>
                <div className="card" style={{ width: "24rem" }}>

                    <div className="card-body">
                        <h5 className="card-title text-center">Login</h5>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="*********"/>
                        </div>
                        <div>
                            <p>Don't have account. <span className={styles.blinking}><Link href="/Register" className={styles.texttra}>Register!</Link></span></p>

                        </div>
                        <div>
                        <p><span ><Link href="/Reset" className={styles.texttra}>Reset Password</Link></span></p>
                        </div>
                        <div className="mb-3 mt-2">


<button type="submit" className="btn btn-primary w-100 ">Register</button>

</div>

                    </div>
                </div>
                </form>


            </div>

        </div>
    )
}
export default Login;