import React, { useContext, useState } from "react"
import styled from "styled-components"
import { OrderContext } from "../../../../../../../context/OrderContext"

const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
}
export default function AddForm() {
  const { handleAdd } = useContext(OrderContext)
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)

  const handleSubmit = (event) => {
    event.preventDefault()
    const id = crypto.randomUUID()
    console.log(id)
    const newProductToAdd = {
      ...newProduct,
      id,
    }

    handleAdd(newProductToAdd)
  }

  const handleChange = (event) => {
    console.log("event.target", event.target)
    const newValue = event.target.value
    const name = event.target.name
    setNewProduct({ ...newProduct, [name]: newValue })
  }
  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <ImagePreview>Aucune Image</ImagePreview>
      <InputFields>
        <input
          name="title"
          value={newProduct.title}
          type="text"
          placeholder="Nom"
          onChange={handleChange}
        />

        <input
          name="imageSource"
          value={newProduct.imageSource}
          type="text"
          placeholder="Image URL"
          onChange={handleChange}
        />

        <input
          name="price"
          value={newProduct.price ? newProduct.price : ""}
          type="text"
          placeholder="Prix"
          onChange={handleChange}
        />
      </InputFields>
      <SubmitButton>
        <button>Envoyer</button>
      </SubmitButton>
    </AddFormStyled>
  )
}
const AddFormStyled = styled.form`
  border: 1px solid black;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;
`
const ImagePreview = styled.div`
  background-color: blue;
  grid-area: 1 / 1 / 4 /2;
`
const InputFields = styled.div`
  background-color: red;
  grid-area: 1 / 2 / -2 / 3;
  display: grid;
`
const SubmitButton = styled.div`
  background-color: green;
  grid-area: 4 / -2 / -1 / -1;
  width: 50%;
`
