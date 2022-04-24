import React from 'react'
import {Segment, Grid} from "semantic-ui-react"
import DisplayBalance from "./DisplayBalance"

function DisplayBalances() {
  return (
    <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalance title="INCOME:" value="1253.54" color="green" />
            </Grid.Column>
            <Grid.Column>
              <DisplayBalance title="EXPENSES:" value="625" color="red"  />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
  )
}

export default DisplayBalances