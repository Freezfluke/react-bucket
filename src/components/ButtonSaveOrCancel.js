import React from 'react'
import { Button } from "semantic-ui-react"

function ButtonSaveOrCancel() {
  return  <Button.Group style={{marginTop : 20}}>
  <Button color='red'>Cancel</Button>
  <Button.Or />
  <Button positive>Ok</Button>
</Button.Group>
}

export default ButtonSaveOrCancel