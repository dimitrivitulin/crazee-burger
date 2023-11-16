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
const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
}
export default function AddForm() {
  const { handleAdd } = useContext(OrderContext)
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
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
      <ImagePreview>
        {newProduct.imageSource ? (
          <img src={newProduct.imageSource} alt={newProduct.title} />
        ) : (
          <div className="empty-image">Aucune Image</div>
        )}
      </ImagePreview>
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
          label={"Ajouter un nouveaux produit au menu"}
        />

        {isSubmited && (
          <div className="submit-message">
            <FiCheck />
            <span>Ajouté avec Succès</span>
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
const ImagePreview = styled.div`
  grid-area: 1 / 1 / 4 /2;
  display: flex;
  align-content: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
  .empty-image {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${theme.colors.greyLight};
    line-height: 1.5;
    color: ${theme.colors.greySemiDark};
    border-radius: ${theme.borderRadius.round};
  }
`
const InputFields = styled.div`
  grid-area: 1 / 2 / -2 / 3;
  display: grid;
  grid-row-gap: 8px;
`
const SubmitButton = styled.div`
  grid-area: 4 / -2 / -1 / -1;
  display: flex;
  .submit-button {
    width: 50%;
  }
  .submit-message {
    width: 50%;
    display: flex;
    align-items: center;
  }
`
