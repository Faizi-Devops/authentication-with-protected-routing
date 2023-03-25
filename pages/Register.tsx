import styles from '../styles/Register.module.css';
import { useFormik } from "formik";
import * as Yup from "yup";
const Register = () => {

    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            age: "",
            email: "",
            password: "",
            gender:""

        },
        validationSchema: Yup.object({
            firstname: Yup.string()
                .label("First Name")
                .required()
                .matches(/^[a-zA-Z]+$/, "Name must only contain letters"),
            lastname: Yup.string()
                .label("Last Name")
                .required()
                .matches(/^[a-zA-Z]+$/, "Name must only contain letters"),
            age: Yup.number()
                .label("Age")
                .required()
                .positive("Age must be a positive number")
                .integer("Age must be a whole number")
                .min(5, "You must be at least 5 years old")
                .max(80, "Age must be less than or equal to 80"),
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
        <div className={styles.backgroundimage}>
            <div style={{
                display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh"
            }}>
                <form onSubmit={formik.handleSubmit}>
                <div className="card" style={{ width: "30rem" }}>

                    <div className="card-body">
                        <h5 className="card-title text-center">Register</h5>

                        <div className="row mt-4">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"><div className="mb-3"><label htmlFor="firstname" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="firstname" name='firstname' placeholder="firstname" value={formik.values.firstname} onChange={formik.handleChange} />
                                <div style={{fontSize:"13px",color:"red"}}>{formik.touched.firstname && formik.errors.firstname && formik.errors.firstname }</div>
                            </div>

                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"><div className="mb-3"><label htmlFor="lastname" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="lastname" name='lastname' placeholder="lastname" value={formik.values.lastname} onChange={formik.handleChange}/>
                                <div style={{fontSize:"13px",color:"red"}}>{formik.touched.lastname && formik.errors.lastname && formik.errors.lastname }</div>
                            </div>

                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"><div className="mb-3"><label htmlFor="age" className="form-label">Age</label>
                                <input type="number" className="form-control" id="age" name='age' placeholder="18" value={formik.values.age} onChange={formik.handleChange} />
                                <div style={{fontSize:"13px",color:"red"}}>{formik.touched.age && formik.errors.age && formik.errors.age }</div>
                            </div>

                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="mb-3">
                                    <label htmlFor="gender-select" className="form-label">Gender</label>
                                    <select className="form-select" id="gender-select" name="gender" value={formik.values.gender} onChange={formik.handleChange}>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Others</option>
                                    </select>


                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"><div className="mb-3"><label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" name='email' placeholder="abc@gmail.com" value={formik.values.email} onChange={formik.handleChange}/>
                                <div style={{fontSize:"13px",color:"red"}}>{formik.touched.email && formik.errors.email && formik.errors.email }</div>
                            </div>

                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"><div className="mb-3"><label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" name='password' placeholder="**********" value={formik.values.password} onChange={formik.handleChange} />
                                <div style={{fontSize:"13px",color:"red"}}>{formik.touched.password && formik.errors.password && formik.errors.password }</div>
                            </div>

                            </div>
                            <div className="mb-3 mt-2">


                                <button type="submit" className="btn btn-primary w-100 ">Register</button>

                            </div>


                        </div>

                    </div>
                </div>
                </form>

            </div>


        </div>
    )
}
export default Register;