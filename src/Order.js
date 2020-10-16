import React from "react"

export default function OrderForm(props) {
    const { values, change, submit, disabled, errors } = props

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === "checkbox" ? checked : value
        change(name, valueToUse)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
        <form className="form-container" onSubmit={onSubmit}>
            <div className="form-group inputs">
                <h2>Create Your Pizza</h2>
                <div>
                    <label>Name
                        <input 
                            name="name"
                            type="text"
                            onChange={onChange}
                            value={values.name}
                            placeholder="Your Name"
                            minLength="2"
                        />
                    </label>
                </div>
                <div>
                    <label>Size
                        <select
                            name="size"
                            type="dropdown"
                            value={values.size}
                            onChange={onChange}
                        >
                            <option value="">--select an option--</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>Pepperoni
                        <input 
                            name="pepperoni"
                            type="checkbox"
                            checked={values.pepperoni}
                            onChange={onChange}
                        />
                    </label>
                    <label>Sausage
                        <input 
                            name="sausage"
                            type="checkbox"
                            checked={values.sausage}
                            onChange={onChange}
                        />
                    </label>
                    <label>Pineapple
                        <input 
                            name="pineapple"
                            type="checkbox"
                            checked={values.pineapple}
                            onChange={onChange}
                        />
                    </label>
                </div>
                <div>
                    <label>Special Instructions
                        <input 
                            name="special"
                            type="text"
                            value={values.special}
                            onChange={onChange}
                        />
                    </label>
                </div>
            </div>
            <div className="form-group submit">
                <button disabled={disabled}>Add to Order</button>
                <div className="errors">
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                </div>
            </div>
        </form>
    )
}