import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import styled from 'styled-components'

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
  .invalid {
    background: #ff000055;
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
    cursor: pointer;

    :disabled {
      background-color: #aaa;
    }
  }
`

class ContactForm extends Component {
  state = {
    formSubmitted: false,
  }

  render() {
    function validateFile(value) {
      let error
      if (value === undefined) {
        error = 'No file!'
      }
      return error
    }
    return (
      <div>
        {!this.state.formSubmitted ? (
          <Formik
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
              message: yup
                .string()
                .required("Don't you have anything to tell us?"),
              // resume: yup.object().isValid(),
              // coverLetter: yup.object().nullable(),
            })}
            onSubmit={(values, actions) => {
              console.log('Form submitted')
              console.log(values)
              console.log(actions)
              this.setState({ formSubmitted: true })
            }}
            render={({
              values,
              touched,
              errors,
              dirty,
              isSubmitting,
              handleSubmit,
              isValid,
              setFieldValue,
              validate,
            }) => (
              <StyledForm
                onSubmit={handleSubmit}
                onSubmitCapture={handleSubmit}
              >
                <label htmlFor="name">Full Name:</label>
                <Field
                  className={touched.name && errors.name ? 'invalid' : ''}
                  id="name"
                  type="text"
                  name="name"
                  required
                />
                <label htmlFor="email">Email:</label>
                <Field
                  className={touched.email && errors.email ? 'invalid' : ''}
                  id="email"
                  type="email"
                  name="email"
                  label="Email"
                  required
                />
                {/* <ErrorMessage className="error" name="email" component={Error} /> */}
                <label htmlFor="phone">Phone Number:</label>
                <Field id="phone" type="phone" name="phone" />
                {/* <ErrorMessage name="phone" component="div" /> */}
                <label htmlFor="message">
                  Anything you would like us to know?
                </label>
                <Field
                  className={touched.message && errors.message ? 'invalid' : ''}
                  id="message"
                  component="textarea"
                  name="message"
                  placeholder="I love learning! ;)"
                  required
                />

                <label htmlFor="resume">Upload Resume</label>
                <input
                  id="resume"
                  type="file"
                  name="resume"
                  required
                  onChange={event => {
                    setFieldValue('resume', event.currentTarget.files[0])
                  }}
                  validate={validateFile}
                />
                <label htmlFor="coverLetter">Upload Cover Letter</label>
                <input
                  id="coverLetter"
                  name="coverLetter"
                  type="file"
                  required
                  onChange={event => {
                    setFieldValue('coverLetter', event.currentTarget.files[0])
                  }}
                  validate={validateFile}
                />
                {/* <ErrorMessage name="message" component="div" /> */}
                <button type="submit" disabled={isSubmitting || !isValid}>
                  Submit
                </button>
              </StyledForm>
            )}
          />
        ) : (
          <h2 style={{ textAlign: 'center' }}>Thanks for your submission!</h2>
        )}
      </div>
    )
  }
}

export default ContactForm
