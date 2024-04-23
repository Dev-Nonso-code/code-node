import React from 'react'
import { Nav } from '../Navbar component/Nav'
import {  useFormik } from "formik";
import * as yup from "yup"

const Formikform = () => {
  var formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values)
      alert("account loading pleasse wait")

    },
    validationSchema:yup.object({
    firstname:yup.string().required("Firstname is required")
    .min(5, "min 5 characters").max(10, "max of 10 characters"),

    lastname:yup.string().required("lastname is required")
    .min(5, "min 5 characters").max(10, "max of 10 characters"),

    email:yup.string().email("put vaild email addres"),

    password:yup.string().required("password is required")
    .min(6, "min 6 characters").max(10, "max of 10 characters")
    .uppercase( 1, "musst have upercase").lowercase(1, "must have lowercase")

    })
    // validate: (values) => {
    //   let errors = {}
    //   // condtion statement

    //   if (values.firstname === "") {
    //     errors.firstname = "This field is requird"
    //   }
    //   else if (values.firstname.length < 3) {
    //     errors.firstname = "Must be greater  than  3 alph"
    //   }
    //   if (values.password === "") {
    //     errors.password = "This passord is requird"
    //   }
    //   else if (values.password.length < 6) {
    //     errors.password = "Must be greater  than  6 alph"
    //   }

    //   if (values.email === "") {
    //     errors.email = "This email is requird"
    //   }
    //   else if (values.email.length < 10) {
    //     errors.email = "Must be greater  than  10 alph"
    //   }


    //   // return errors666666666666666666666666

    //   if (values.lastname === "") {
    //     errors.lastname = "This lastname is requird"
    //   }
    //   else if (values.lastname.length < 3) {
    //     errors.lastname = "Must be greater  than  3 alph"
    //   }
    //   return errors
    //   // console.log(errors);

    // }
  });
  // console.log(formik.touched)
  // console.log(errors);
  return (
    <>
      <Nav />
      <div className='container-fluid'>
        <div className=''>
          <div className='col-9 shadow-bg mx-auto '>
            <form onSubmit={formik.handleSubmit}>
              <h1>Signh Up Here</h1>
              <input
                placeholder='email'
                type='text'
                className={formik.touched.email && formik.errors.email ?
                   "my-2 form-control border-warning is-invalid" : "my-2 form-control"}
                 autoComplete="email"
                // required
                name='email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && <small>{formik.errors.email}
              </small> }

              <input
                placeholder='firstname'
                type="text"
                className={formik.touched.firstname && formik.errors.firstname ?
                  "my-2 form-control border-danger is-invalid" : "my-2 form-control"}

                name='firstname'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.firstname && <small>{formik.errors.firstname}</small>
                }
              <input
                placeholder='lastname'
                type="text"
                className={formik.touched.lastname && formik.errors.lastname ?
                  "my-2 form-control border-info is-invalid" : "my-2 form-control"}
                 autoComplete="lastname"
                // required
                name='lastname'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.lastname && <small>{formik.errors.lastname}</small>}
              <input
                placeholder='password'
                type="password"
                className={formik.touched.password && formik.errors.password ?
                  "my-2 form-control is-invalid border-warning" : "my-2 form-control"}
                // autoComplete="current-password"
                // required
                name='password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && <small>{formik.errors.password}</small> }
              <div>
                <button type='submit' className="btn btn-warning w-50 p-3 my-2">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Formikform