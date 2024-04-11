import "./styles.css";
import VanillaForm from "./forms/vanilla-form";
import ReactHookForm from "./forms/react-hook-form";
import FormikForm from "./forms/formik-form";

export default function App() {
  return (
    <div>
      <h1>Crafting Forms in React</h1>
      <div>
        <h2>1. Crafting Forms in React: The Vanilla Way</h2>
        <VanillaForm />
      </div>
      <div>
        <h2>2. Crafting Forms in React: Hook It Up</h2>
        <ReactHookForm />
      </div>
      <div>
        <h2>3. Crafting Forms in React: Formik Your Way</h2>
        <FormikForm />
      </div>
    </div>
  );
}
