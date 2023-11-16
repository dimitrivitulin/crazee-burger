import React, { useContext, useState } from "react"
import styled from "styled-components"
import { OrderContext } from "../../../../../../../context/OrderContext"


import TextInput from "../../../../../../reusable-ui/TextInput"
import Button from "../../../../../../reusable-ui/Button"
import ImagePreview from "./ImagePreview"
import SubmitMessage from "./SubmitMessage"
import { getInputTextsConfig } from "./InputTextConfig"
export const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
}
export default function AddForm() {
  const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext)
  const [isSubmited, setIsSubmited] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const id = crypto.randomUUID()
    const newProductToAdd = {
      ...newProduct,
      id,
    }

    handleAdd(newProductToAdd)
    setNewProduct(EMPTY_PRODUCT)
    displaySuccessMessage()
  }

  const handleChange = (event) => {
    console.log("event.target", event.target)
    const newValue = event.target.value
    const name = event.target.name
    setNewProduct({ ...newProduct, [name]: newValue })
  }
  const displaySuccessMessage = () => {
    setIsSubmited(true)
    setTimeout(() => {
      setIsSubmited(false)
    }, 2000)
  }
  const inputTexts = getInputTextsConfig(newProduct)

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <ImagePreview
        imageSource={newProduct.imageSource}
        title={newProduct.title}
      />
      <div className="input-fields">
        {inputTexts.map((input) => (
          <TextInput
            key={input.id}
            {...input}
            onChange={handleChange}
            version="minimalist"
          />
        ))}
      </div>
      <div className="submit">
        <Button
          className="submit-button"
          version="success"
          label="Ajouter un nouveaux produit au menu"
        />

        {isSubmited && <SubmitMessage />}
      </div>
    </AddFormStyled>
  )
}
const AddFormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .input-fields {
    grid-area: 1 / 2 / -2 / 3;
    display: grid;
    grid-row-gap: 8px;
  }
  .submit {
    grid-area: 4 / -2 / -1 / -1;
    display: flex;
    align-items: center;
    .submit-button {
      width: 50%;
    }
  }
`
