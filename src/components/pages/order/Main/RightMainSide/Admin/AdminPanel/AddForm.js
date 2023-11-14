import React from "react"
import styled from "styled-components"

export default function AddForm() {
  return (
    <AddFormStyled>
      <ImagePreview>ImagePreview</ImagePreview>
      <InputFields>
        <input type="text" placeholder="Nom" />
        <input type="text" placeholder="Image URL" />
        <input type="text" placeholder="Prix" />
      </InputFields>
      <SubmitButton>SubmitButton</SubmitButton>
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
