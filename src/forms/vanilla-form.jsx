import { useState } from "react";

export default function VanillaForm() {
  // handle form state changes
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    title: "",
    message: ""
  });

  // handle form field changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // form submission
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="form-container">
      <form id="contact-form" action="#" method="post">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" minlength="3" maxlength="20" required onChange={handleChange} />

        <label htmlFor="title">Title:</label>
        <select id="title" name="title">
          <option value="">Please choose a title</option>
          <option value="sir">Sir</option>
          <option value="madam">Madam</option>
        </select>

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" pattern="/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="5"></textarea>

        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
