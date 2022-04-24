import React from 'react'
import {Segment, Grid, Icon} from "semantic-ui-react"

function EntryLine({description, value, isExpenses}) {
  return (
    <Segment color={isExpenses ? "red" : "green"}>
    <Grid Column={3} textAlign="right">
      <Grid.Row>
        <Grid.Column textAlign="left" width={8}>{description}</Grid.Column>
        <Grid.Column textAlign="right" width={3}>${value}</Grid.Column>
        <Grid.Column width={5}>
          <Icon name='edit' color='yellow' bordered />
          <Icon name='trash' color='red'  bordered />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
  )
}

export default EntryLine