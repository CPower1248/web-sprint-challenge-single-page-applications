import React, {useState, useEffect} from "react";
// import Axios from "axios"
import * as yup from "yup"
import schema from "./FormSchema"
import Order from "./Order"
import Pizza from "./Pizza"

const initialFormValues = {
  name: "",
  size: "",
  pepperoni: false,
  sausage: false,
  pineapple: false,
  special: "",
}

const initialFormErrors = {
  name: "",
  size: "",
}

const initialPizzas = []
const initialDisabled = true



const App = () => {
  const [pizzas, setPizzas] = useState(initialPizzas)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    let newPizza = {
      name: formValues.name.trim(),
      size: formValues.size,
      toppings: ["pepperoni", "sausage", "pineapple"].filter((item => formValues[item])),
      special: formValues.special.trim(),
    }
    if (!newPizza.name || !newPizza.size) return;
    setPizzas(pizzas.concat(newPizza))
    setFormValues(initialFormValues)
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])

  return (
    <>
      <h1>Lambda Eats</h1>
      <p>Order a great pizza!</p>
      <Order
        values={formValues}
        disabled={disabled}
        change={inputChange}
        submit={formSubmit}
        errors={formErrors}
      />

      {pizzas.map(item => {
        return <Pizza key={item.id} details={item} />
      })}
    </>
  );
};
export default App;
