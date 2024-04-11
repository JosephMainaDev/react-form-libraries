import { Formik, Form, Field, ErrorMessage } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Name is required";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (values.message.length > 100) {
    errors.message = "Message is too long";
  }

  return errors;
};

export default function FormikForm() {
  return (
    <div className="form-container">
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validate={validate}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="name">Name:</label>
            <Field type="text" id="name" name="name" placeholder="Jane Doe" />
            <ErrorMessage name="name" component="div" className="error" />

            <label htmlFor="title">Title:</label>
            <Field as="select" id="title" name="title">
              <option value="">Please choose a title</option>
              <option value="sir">Sir</option>
              <option value="madam">Madam</option>
            </Field>
            <ErrorMessage name="title" component="div" className="error" />

            <label htmlFor="email">Email:</label>
            <Field type="email" name="email" placeholder="jane@example.com" />
            <ErrorMessage name="email" component="div" className="error" />

            <label htmlFor="message">Message:</label>
            <Field
              id="message"
              name="message"
              as="textarea"
              rows="5"
              placeholder="Hello 👋"
            />
            <ErrorMessage name="message" component="div" className="error" />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
