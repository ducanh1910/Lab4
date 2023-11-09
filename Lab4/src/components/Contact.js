import React from 'react'
import { Container, TextInput, Button, Textarea, Section, Icon, Checkbox, Row, Col } from 'react-materialize'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export default function Contact() {

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
      phone: Yup.number().integer("Required").typeError("Please enter a valid number"),
      email: Yup.string().required("Required.").email("Invalid email"),
      message: Yup.string().required("Required.").min(10, "Must be 10 characters or more"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(formik.values));
      formik.resetForm();
    },
  });


  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Section>
      <Container>
        <h3>Contact us</h3>
        <form onSubmit={formik.handleSubmit}>
          <TextInput icon={<Icon>people</Icon>} id="TextInput-38" label="Your Name" name='name' value={formik.values.name} onChange={formik.handleChange} />
          {formik.errors.name && formik.touched.name && (<p>{formik.errors.name}</p>)}
          <TextInput icon={<Icon>phone</Icon>} id="TextInput-39" label="Your Phone" name='phone' value={formik.values.phone} onChange={formik.handleChange} />
          {formik.errors.phone && formik.touched.phone && (<p>{formik.errors.phone}</p>)}
          <TextInput icon={<Icon>email</Icon>} email id="TextInput-41" label="Email" validate name='email' value={formik.values.email} onChange={formik.handleChange} />
          {formik.errors.email && formik.touched.email && (<p>{formik.errors.email}</p>)}
          <Textarea icon={<Icon>mode_edit</Icon>} id="Textarea-28" label="Your message" name='message' value={formik.values.message} onChange={formik.handleChange} />
          {formik.errors.message && formik.touched.message && (<p>{formik.errors.message}</p>)}
          <Button type='submit'>Submit</Button>
        </form>
      </Container>
    </Section>
  )
}