import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import styled from 'styled-components'

// const Error = styled.div`
//   color: red;
// `
const StyledForm = styled(Form)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 10px;

  textarea {
    height: 100px;
  }
  label {
    text-align: right;
  }
  input {
    width: 250px;
  }
  button {
    justify-items: center;
    width: 100px
  }
`

const ContactForm = ({ className }) => {
  return (
    <div>
      <Formik
        className={className}
        initialValues={{
          name: '',
          email: '',
          phone: '',
          message: '',
        }}
        validationSchema={yup.object().shape({
          name: yup.string().required('IDENTIFY YOURSELF!'),
          email: yup
            .string()
            .email("We can't hire you without a proper email")
            .required("We can't hire you without a proper email"),
        })}
        onSubmit
        render={({ values, touched, errors, dirty, isSubmitting }) => (
          <StyledForm>
            <label htmlFor="name">Full Name:</label>
            <Field id="name" type="text" name="name" required />
            <label>Email:</label>
            <Field type="email" name="email" label="Email" required />
            {/* <ErrorMessage className="error" name="email" component={Error} /> */}
            <label>Phone Number:</label>
            <Field type="phone" name="phone" />
            {/* <ErrorMessage name="phone" component="div" /> */}
            <label>Anything you would like us to know?</label>
            <Field
              component="textarea"
              name="message"
              placeholder="I love learning! ;)"
            />

            <label>Upload Resume =></label>
            <input type="file" required />
            <label>Upload Cover Letter =></label>
            <input type="file" required />
            {/* <ErrorMessage name="message" component="div" /> */}

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </StyledForm>
        )}
      />
    </div>
  )
}

export default ContactForm
