import React, { useContext, useState } from "react"
import styled from "styled-components"
import { OrderContext } from "../../../../../../../context/OrderContext"
import { FiCheck } from "react-icons/fi"
import { FaHamburger } from "react-icons/fa"
import { BsFillCameraFill } from "react-icons/bs"
import { MdOutlineEuro } from "react-icons/md"

import { theme } from "./../../../../../../../theme/index"
import TextInput from "../../../../../../reusable-ui/TextInput"
import Button from "../../../../../../reusable-ui/Button"
import ImagePreview from "./ImagePreview"
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
  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <ImagePreview
        imageSource={newProduct.imageSource}
        title={newProduct.title}
      />
      <InputFields>
        <TextInput
          name="title"
          value={newProduct.title}
          type="text"
          placeholder="Nom du produit (ex: Super Burger)"
          onChange={handleChange}
          Icon={<FaHamburger />}
          version="minimalist"
        />

        <TextInput
          name="imageSource"
          value={newProduct.imageSource}
          type="text"
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          onChange={handleChange}
          Icon={<BsFillCameraFill />}
          version="minimalist"
        />

        <TextInput
          name="price"
          value={newProduct.price ? newProduct.price : ""}
          type="text"
          placeholder="Prix"
          onChange={handleChange}
          Icon={<MdOutlineEuro />}
          version="minimalist"
        />
      </InputFields>
      <SubmitButton>
        <Button
          className="submit-button"
          version="success"
          label="Ajouter un nouveaux produit au menu"
        />

        {isSubmited && (
          <div className="submit-message">
            <FiCheck className="icon" />
            <span className="message">Ajouté avec Succès</span>
          </div>
        )}
      </SubmitButton>
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
`

const InputFields = styled.div`
  grid-area: 1 / 2 / -2 / 3;
  display: grid;
  grid-row-gap: 8px;
`
const SubmitButton = styled.div`
  grid-area: 4 / -2 / -1 / -1;
  display: flex;
  align-items: center;
  .submit-button {
    width: 50%;
  }
  .submit-message {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    .icon {
      color: ${theme.colors.success};
      margin-left: 10px;
      width: 1em;
      height: 1em;
      border: 1px solid ${theme.colors.success};
      border-radius: 50%;
      vertical-align: middle;
    }
    .message {
      margin-left: 5px;
      font-size: ${theme.fonts.size.SM};
      color: ${theme.colors.success};
    }
  }
`
