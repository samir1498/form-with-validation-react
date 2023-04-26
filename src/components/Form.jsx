import React from "react"

import Input from "./Input"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import inputFields from "../input-fields/inputFields.json"

import schema from "../yup-schema/yupSchema"

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  })

  const onSubmit = async (data) => {
    console.log(data)
  }

  return (
    <>
      <form className="container__form" onSubmit={handleSubmit(onSubmit)}>
        {/* container--span class allows a column to span for 2 columns */}
        <h2 className="container__form-title container--span">
          FORMULAIRE D'INSCREPTION
        </h2>
        {/* rendering input fields from input fields json */}
        {inputFields.map((input, index) => (
          <div key={index} className={input["form-group"]}>
            <Input {...input} register={register} />
            {/* display errors for each input field */}
            {errors != null && errors[input.name] && (
              <p className={"error"}>{errors[input.name].message}</p>
            )}
          </div>
        ))}

        <input
          type="submit"
          name="signup"
          // container--max-width to resize the button to fit-content
          className="btn btn--primary container--center container--span"
          value="S'inscrire"
        />
      </form>
    </>
  )
}
