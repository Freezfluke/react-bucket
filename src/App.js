import { Container , Header, Segment, Statistic, Grid, Icon, Form, Button} from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <Container>
    <Header style={{marginTop: 20}}as='h1'>Budget</Header>
      <Statistic size='small'>
        <Statistic.Label>Your Balance</Statistic.Label>
        <Statistic.Value>2,550.53</Statistic.Value>
      </Statistic>
      <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size="tiny" color="green">
                <Statistic.Label style={{textAlign :"left"}}>
                  Incomming:
                </Statistic.Label>
                <Statistic.Value>1,045.50</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic size="tiny" color="red">
                <Statistic.Label style={{textAlign : "left"}}>
                  Expenses:
                </Statistic.Label>
                <Statistic.Value>1,000</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as='h3'>History</Header>
      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column textAlign="left" width={8}>Something</Grid.Column>
            <Grid.Column textAlign="right" width={3}>$10,00</Grid.Column>
            <Grid.Column width={5}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color="green">
        <Grid Column={3} textAlign="right">
          <Grid.Row>
            <Grid.Column textAlign="left" width={8}>Somthing else</Grid.Column>
            <Grid.Column textAlign="right" width={3}>$100,00</Grid.Column>
            <Grid.Column width={5}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color="red">
        <Grid Column={3} textAlign="right">
          <Grid.Row>
            <Grid.Column textAlign="left" width={8}>Something</Grid.Column>
            <Grid.Column textAlign="right" width={3}>$20,00</Grid.Column>
            <Grid.Column width={5}>
              <Icon name='edit' bordered />
              <Icon name='trash' bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as="h3">
        Add new transaction
        <Form unstackble>
          <Form.Group>
            <Form.Input icon='tags' width={12} label='Description' placeholder="New Shinny thing" />
            <Form.Input width={4} label='Value' placeholder="100.00" icon='dollar' iconPosition='left' />
          </Form.Group>
        </Form>
        <Button.Group style={{marginTop : 20, marginBottom : 30}}>
          <Button color='red'>Cancel</Button>
          <Button.Or />
          <Button positive>Ok</Button>
        </Button.Group>
      </Header>
    </Container>
  );
}

export default App;
