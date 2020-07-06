import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Accueil, Club, Evenements, Gallery, Contact, Boutique, Categories } from './components/index';
// import { medias as mediasss } from './components/utils/request';


class App extends Component{
  constructor(props){
    super(props)

    this.state ={
      events:[],
      medias: [],
      scores:[],
      clubs:[],
      products:[],
      gyms:[],
      members:[],
      teams:[]
    }
  }


  componentDidMount(){
		axios.all([
			axios.get('/api/events'),
			axios.get('/api/scores'),
			axios.get('/api/medias'),
			axios.get('/api/clubs'),
			axios.get('/api/products'),
			axios.get('/api/gyms'),
			axios.get('/api/members'),
			axios.get('/api/teams')
		])

		.then(axios.spread((events, scores, medias, clubs, products, gyms, members, teams) => {
      
      // console.log(medias)
			const event = events.data.map(element => ({
        id : element._id,
				title: element.title,
				content: element.content,
				picture : element.picture,
				date : element.date
      }))

			const score = scores.data.map(element => ({
				homeTeamScore: element.homeTeamScore,
				opponentScore: element.opponentScore,
				homeTeam : element.homeTeam,
				opponent : element.opponent,
				result : element.result
      }))
      
      const media = medias.data.map(element => ({
        id: element._id,
        name : element.name,
        mediaType : element.mediaType,
        team : element.team,
        description : element.description,
        picture : element.picture,
      }))


      const club = clubs.data.map(element => ({
        id: element._id,
        name : element.name,
        introduction : element.introduction,
        picture : element.picture
      }))

      const product = products.data.map(element => ({
        id: element._id,
        name : element.name,
        description : element.description,
        picture : element.picture
      }))

      const gym = gyms.data.map(element => ({
        id: element._id,
        name : element.name,
        adress : element.adress,
        introduction : element.introduction,
        picture : element.picture
      }))

      const member = members.data.map(element => ({
        id: element._id,
        firstName : element.firstName,
        lastName : element.lastName,
        role : element.role,
        picture : element.picture
      }))

      const team = teams.data.map(element => ({
        id: element._id,
        name : element.name,
        memberList : element.memberList,
        schedule : element.schedule,
        price : element.price,
        picture : element.picture,
        games : element.games,
      }))

      { if( media && event && score && club && product && gym && member && team){
          this.setState({
            events: event,
            scores: score,
            medias:  media,
            clubs : club,
            products : product,
            gyms : gym,
            members : member,
            teams : team,
            loaded:true,
            selectedFiltreTeam : scores
          })
      }
      else {console.error('une des requetes est null')}
      }
    }))
    .catch((err)=>{
      console.error('un requete n\'est pas etablie')
    })
  }
  

  render(){
    // console.log(medias)
    console.log(this.state.members)
    console.log(this.state.teams, 'atate team app.js')
    // console.log(medias, 'requete media')
    return (
      <Router>
        <div>
          <div className='header'>
            <Header />
          </div>
          <div>
          <Switch>
              <Route exact path="/" render={(props) => <Accueil {...props} events={ this.state.events } scores={ this.state.scores } medias={ this.state.medias }/>} />
              <Route exact path="/club" render={(props) => <Club {...props} clubs={ this.state.clubs } members={ this.state.members }  gyms={ this.state.gyms } />} />
              <Route exact path="/categories" render={(props) => <Categories {...props}  teams={ this.state.teams } scores={ this.state.scores }/>} />
              <Route exact path="/evenements" render={(props) => <Evenements {...props} events={ this.state.events }/>} />
              <Route exact path="/gallery" render={(props) => <Gallery {...props} medias={ this.state.medias }/>} />
              <Route exact path="/contact" render={(props) => <Contact {...props} />} />
              <Route exact path="/boutique" render={(props) => <Boutique {...props} products={ this.state.products } />} />
          </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
