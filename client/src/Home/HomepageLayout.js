/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component, useContext, useState } from 'react'
import { InView } from 'react-intersection-observer'
import 'semantic-ui-css/semantic.min.css';
import UncontrolledExample from './ UncontrolledExample';
import { MyContext } from "../MyContext";
import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})


/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
const HomepageHeading = ({ mobile }) => {

  const {setUser, setAnimals} = useContext(MyContext)

  function handleClick() {
    fetch('/me', {
      headers: {'Accept': 'application/json'}
    })
    .then(response => {
      if(response.ok){
        response.json().then(data => setUser(data))
      }
    })
    fetch('/animals', {
      headers: {'Accept': 'application/json'}
    })
    .then(response => response.json())
    .then(data => setAnimals(data))
  }

 return (
<>
    <Header
      as='h1'
      content='Formosan Clouded Leopard'
      inverted
      style={{
        fontSize: mobile ? '2.3em' : '4.6em',
        marginBottom: 0,
        marginTop: mobile ? '0em' : '0.9em',
        marginLeft: mobile ? '0em' : '0em',
        marginRight: mobile ? '0.2em' : '1em',
        textAlign: mobile ? '' : 'left',
        paddingLeft: mobile ? '0.4em' : '1.3em',
        fontFamily: 'Montserrat',
        fontWeight: 'bold',  
      }}
    />
    <Header
      as='h2'
      content='Declared extinct in 2013'
      inverted
      style={{
        fontSize: mobile ? '1.7em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '6.7em' : '1.5em',
        marginLeft: mobile ? '0em' : '0em',
        marginRight: mobile ? '0.2em' : '0em',
        textAlign: mobile ? '' : 'left',
        paddingLeft: mobile ? '0.2rem' : '3.6em',
        fontFamily: 'Montserrat',
        fontWeight: 'bold'
      }}
    />
    
    <Button 
      primary 
      size={mobile ? 'medium' : 'huge'}  
      floated={mobile ? undefined : 'left'}
      style={{ 
        marginLeft: mobile ? '0em' : '4.2em',
        marginRight: mobile ? '0em' : '0em',
        
      }} 
      href="https://en.wikipedia.org/wiki/Formosan_clouded_leopard" 
      onClick={handleClick}
    >
      Learn More
     <Icon name='right arrow' />
    </Button>
    </>
 )
}

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  toggleFixedMenu = (inView) => this.setState({ fixed: !inView })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Media greaterThan='mobile'>
        <InView onChange={this.toggleFixedMenu}>
          <Segment
            inverted
            textAlign='center'
            style={{ 
              minHeight: 700, 
              padding: '1em 0em',
              backgroundImage: 'url(https://mymodernmet.com/wp/wp-content/uploads/2019/03/clouded-leopard-thumbnail.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}
            vertical
          >
            <HomepageHeading />
          </Segment>
        </InView>

        {children}
      </Media>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Media as={Sidebar.Pushable} at='mobile'>
        <Sidebar.Pushable>
          
          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign='center'
              style={{ 
                minHeight: 350, 
                padding: '1em 0em',
                backgroundImage: 'url(https://mymodernmet.com/wp/wp-content/uploads/2019/03/clouded-leopard-thumbnail.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
              vertical
            >
              <HomepageHeading mobile />
            </Segment>
            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => {

  const {setUser, setAnimals, user} = useContext(MyContext)

  function handleClick() {
    fetch('/me', {
      headers: {'Accept': 'application/json'}
    })
    .then(response => {
      if(response.ok){
        response.json().then(data => setUser(data))
      }
    })
    fetch('/animals', {
      headers: {'Accept': 'application/json'}
    })
    .then(response => response.json())
    .then(data => setAnimals(data))
  }


  return (

  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
            Extinct parrots make a flying comeback in Brazil
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              The Spix macaw, a bird that had once vanished in the wild, 
              is now thriving in its South American homeland after a successful breeding programme.
              Twenty years ago, the future of the Spix's macaw could not have looked bleaker. 
              The last member of this distinctive parrot species disappeared from the wild,
              leaving only a few dozen birds in collectors' cages across the globe.
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Thanks to a remarkable international rescue project, 
              Spix's macaws - with their grey heads and vivid blue plumage - have made a stunning comeback.
            </Header>
            <p style={{ fontSize: '1.33em' }}>
               “The project is going extremely well,” said biologist Tom White, 
               of the US Fish and Wildlife Service and a technical adviser to the rescue project. 
               “It's almost a month since we released the birds and all of them have survived.
               “They are acting as a flock; they are staying in the vicinity of their release and 
               they are beginning to sample local vegetation. It's going as well as it possibly could.”
            </p>
            <p style={{fontStyle: 'italic'}}>
              McKie, Robin. "Extinct parrots make a flying comeback in Brazil." The Guardian, 10 Jul 2022
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src='https://www.science.org/do/10.1126/science.add3965/full/_20220610_nf_macaws.jpg' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button 
              size='huge' 
              href="https://www.theguardian.com/environment/2022/jul/10/extinct-parrots-make-a-flying-comeback-in-brazil" 
              onClick={handleClick}
              >
                See More
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "Fantastic Website"
            </Header>
            <p style={{ fontSize: '1.33em' }}>That is what everyone is saying about it</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
               "This website is exceptionally impressive and commendable."
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src='https://cdn2.iconfinder.com/data/icons/professional-avatar-13/140/professor__teacher__oldman__professional__avatar-512.png' />
              <b>Edward Horner</b> American paleontologist, Chapman University (age 77)
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Captivating the Imagination, Reviving Lost Wonders
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Rather than conforming to conventional content creation, 
          we have mastered the art of rekindling fascination by seamlessly merging vast
          whitespace with captivating narratives. Our mission is to transport 
          you to the awe-inspiring world of extinct animals, where their once 
          magnificent presence is revived through engaging stories and immersive experiences.
        </p>
        <Button 
          as='a' 
          size='large'   
          href="https://youtu.be/eRL7xTp2Zbc" 
          onClick={handleClick}
          >
          See More
        </Button>
        <br/>
        <br/>
        <Container text style={{display: 'flex'}}>
          <UncontrolledExample />
        </Container>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='#'>Exploring the Extinct</a>
        </Divider>

        <Header as='h3' style={{ fontSize: '2em' }}>
          Unveiling the Marvels of Extinct Species
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          We understand if our earlier claims seemed unrelated or trivial,
          but we assure you, our focus is solely on the captivating world of extinct animals. 
          Through meticulous research and scientific endeavors, 
          we have unearthed fascinating discoveries that will leave you in awe.
        </p>
        <Button as='a' size='large'>
          I'm Still Quite Interested
        </Button>
      </Container>
    </Segment>

    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <Link 
                  style={{textDecoration: 'none'}}
                  to={user ? '/sitemap' : '/'}>
                  <List.Item as='a'>Sitemap</List.Item>
                </Link>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Explore</List.Item>
                <List.Item as='a'>Discover</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Adopt an Extinct Species</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>Extinct Animal Secrets</List.Item>
                <List.Item as='a'>Preserve the Past</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Footer Header
              </Header>
              <p>
              Journey into the Depths of History: Explore the Enigmatic World of Extinct Animals.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
   
  </ResponsiveContainer>
  )
}

export default HomepageLayout



//!!!IMPORTANT!!!:
//BACK-UP HOME PAGE IMAGE! IN CASE ORGINAL IS ERASED BY THE WEBSITE HOSTING IT!
//https://extinct-bucket.s3.amazonaws.com/clouded-leopard-thumbnail.jpg