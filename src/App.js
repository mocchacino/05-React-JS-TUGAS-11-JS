import React, {Component} from "react";
import 'semantic-ui-css/semantic.min.css'
import {
  List,
  Loader,
  Dimmer,
  Placeholder,
  Segment,
  Grid,
  Icon,
  Input,
  Divider,
  Image, 
  Container,
  Button,
} from 'semantic-ui-react' 

class App extends Component{
  render(){
    return(
      <Grid columns='equal'>
        <Grid.Row></Grid.Row>
        <Grid.Row>
          <Segment placeholder style={{width: "100%"}}>
            <Grid columns={2}>
              <Grid.Column verticalAlign='middle'>
                <Container textAlign='center'>
                  <Icon name="search" size="huge"/>
                  <h3>Cari Dokumen</h3>
                  <Input icon='search' placeholder='Search..' style={{borderRadius:"100px"}}/>
                </Container>
              </Grid.Column>

              <Grid.Column verticalAlign='middle'>
                <Container textAlign='center'>
                  <Icon name="file pdf outline" size="huge"/>
                  <h3>Tambah Dokumen Baru</h3>
                  <Button primary>Create Document</Button>
                </Container>
              </Grid.Column>
            </Grid>

              <Divider vertical>
                OR
              </Divider>
          </Segment>
        </Grid.Row>

        <Grid.Row>
          <Segment style={{width: "100%"}}>
            <Dimmer active>
              <Loader>Loading</Loader>
            </Dimmer>
              <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
          </Segment>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length='medium'/>
                <Placeholder.Line length='short'/>
              </Placeholder.Paragraph>
            </Placeholder>
          </Grid.Column>

          <Grid.Column>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length='medium'/>
                <Placeholder.Line length='short'/>
              </Placeholder.Paragraph>
            </Placeholder>
          </Grid.Column>

          <Grid.Column>
            <List>
              <h5>Website Terkait</h5>
              <List.Item>
                <List.Icon name='linkify'/>
                <List.Content>
                  <a href='https://google.com/'>Google</a>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Icon name='linkify'/>
                <List.Content>
                  <a href='https://www.facebook.com/'>Facebook</a>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Icon name='linkify'/>
                <List.Content>
                  <a href='http://www.semantic-ui.com'>Semantic UI</a>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Icon name='linkify'/>
                <List.Content>
                  <a href='https://niomic.com/'>Niomic</a>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Icon name='linkify'/>
                <List.Content>
                  <a href='https://reactjs.org/'>React</a>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default App;
