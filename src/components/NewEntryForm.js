import React from 'react'
import { Form } from "semantic-ui-react"
import ButtonSaveOrCancel from './ButtonSaveOrCancel'


function NewEntryForm() {
  return (
    <>
    <Form unstackble>
    <Form.Group>
      <Form.Input icon='tags' width={12} label='Description' placeholder="New Shinny thing" />
      <Form.Input width={4} label='Value' placeholder="100.00" icon='dollar' iconPosition='left' />
    </Form.Group>
  </Form>
  <ButtonSaveOrCancel />
  </>
  )
}

export default NewEntryForm