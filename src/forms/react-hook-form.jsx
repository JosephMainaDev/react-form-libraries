import { useForm } from "react-hook-form";

export default function ReactHookForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ initialValues: { name: "Kamau", email: "", message: "" } });
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <div className="form-container">
      <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name:</label>
        <input {...register("name", { required: true, maxLength: 20 })} />
        {errors.name && <p className="error">This field is required</p>}
        {errors.name?.type === "maxLength" && (
          <p className="error">Name cannot exceed 20 characters</p>
        )}

        <label htmlFor="title">Title:</label>
        <select {...register("title", { required: true })}>
          <option value="">Please choose a title</option>
          <option value="sir">Sir</option>
          <option value="madam">Madam</option>
        </select>
        {errors.title && <p className="error">This field is required</p>}

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        {errors.email && <p className="error">Invalid email address</p>}
        {errors.email?.type === "pattern" && (
          <p className="error">Invalid email address</p>
        )}

        <label htmlFor="message">Message:</label>
        <textarea rows="5" {...register("message", { required: true })} />
        {errors.message && <p className="error">This field is required</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
