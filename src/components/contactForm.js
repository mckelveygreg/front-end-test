import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import styled from 'styled-components'

// const Error = styled.div`
//   color: red;
// `
const StyledForm = styled(Form)`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 10px;
  padding: 2rem;

  textarea {
    height: 100px;
    border-radius: 5px;
    font-family: inherit;
    font-weight: bold;
  }
  label {
    text-align: right;
  }
  input {
    width: 250px;
    border-radius: 5px;
  }
  button {
    margin: 0 auto;
    width: 250px;
    grid-column: 1 / 3;
    background: #2b2b2b;
    border: none;
    height: 3rem;
    border-radius: 5px;
    box-shadow: 0px 1px 5px #333;
    color: white;
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
              required
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
