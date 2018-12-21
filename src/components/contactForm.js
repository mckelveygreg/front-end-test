import React from 'react'

const ContactForm = () => {
  return (


<div>
      <form>
        {/* Update with formik instead! */}
        <label>
          Email:
          <input type="Email" required />
        </label>
        <label>
          Phone Number
          <input type="Phone" />
        </label>
        <div>
          <label>Message:</label>
          <br />
          <textarea />
        </div>
        <label>
          Upload Resume =>
          <input type="file" required/>
        </label>
        <label>
          Upload Cover Letter =>
          <input type="file" required/>
        </label>
      </form>
</div>
  )
}

export default ContactForm
