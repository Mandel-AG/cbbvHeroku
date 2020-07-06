import React, { Component } from 'react';
import { Loader, Rss, Partners } from '../index';
import './accueil.css';
// import victory from '../../../public/victory.png'
// import victory from require('../../../public');

class Accueil extends Component{
	constructor(props){
		super(props)

		this.state ={
				selectedTeam : [],
				loaded:false,
				toggle:false
		}
	}


	filterResults = (type) => {
		const results = this.props.scores;
		const newFilter = [ ...results];
		const filtered = newFilter.filter( element => element.homeTeam.toLowerCase().trim() === type)
		this.setState({
			selectedTeam : filtered
		})
	}
    
	allresults = () =>{
		const selectedTeam = [...this.props.scores];
		this.setState({
			selectedTeam 
		})
	}

	toggle = (e) =>{
		// this.setState({
		// 	toggle:!this.state.toggle
		// })
		// const base = true
		// e.target.active = !e.target.active
		console.log(e.getAttribute('class'))
	}


	componentDidMount(){
		let selectedTeam = [...this.props.scores];
		this.setState({
			selectedTeam,
			loaded:true
		})
	}


	render(){
		// const event = document.querySelector('.containerAccueilEvenements');
		const events = 
		this.props.events.map(event => (
			// if(event.typeevent.toLowerCase() === 'prochainmatch' ){
			// 	 <li key={Math.random()} > { event.title } </li>
			// }
			<li key={Math.random()} > { event.title } </li>

		))

		console.log(this.state.selectedTeam)
		console.log(this.props.scores)

		const filteredScore = this.state.selectedTeam.map(score => (
			<li key={Math.random()}  className='d-flex justify-content-around' >
				{/* <img id='result' style={{width : '25px'}}  src='/victory.png' alt='victoire' /> */}
				{ (score.result.toLowerCase().trim() === 'victoire') ? (<img id='result'  src='/victory.png' alt='victoire' />) : (<img id='result'  src='/defeat.png' alt='victoire' />)}
				{`${ score.result } des 
				${ score.homeTeam }  contre 
				${ score.opponent }  - 
				${ score.homeTeamScore } - 
				${ score.opponentScore }`}
			</li>
		))
		

		return(
			<div className='containeBlockAccueil'>
				{(this.state.loaded) ? (
					<>

						<div active={true} className='containerAccueilEvenements'>
							<div>
								<h3> Evenements </h3>
							</div>
							<div className='divAccueilEvenements'>
									<ul className='ulAccueilEvenements'>
										{events}
									</ul>
							</div>
						</div>



						<div className={(this.state.toggle) ? ('hidden') : ('containerProchainMatchs show')}>
							<div>
								<h3> Prochain Matchs </h3>
							</div>
							<div className='divProchainMatch'>
									<ul className='ulAccueilProchainMatchs'>
										{events}
									</ul>
							</div>
						</div>

						<div className='containerResultats'>
							<div>
								<h3> Resultats </h3>
							</div>
							<div className='divResultats'>
									<ul className='ulAccueilResultats'>
										{filteredScore}
									</ul>
									<div className='blockDroitResultats'>
										<p>Equipes</p>
										<div className='AccueilfiltreEquipe'>
											<ul>
												<li onClick={this.allresults} >Tout</li>
												<li onClick={()=>this.filterResults('sm1')} >SM1</li>
												<li onClick={()=>this.filterResults('u20')} >U20</li>
												<li onClick={()=>this.filterResults('u17')} >U17</li>
												<li onClick={()=>this.filterResults('u15')} >U15</li>
												<li onClick={()=>this.filterResults('u13')} >U13</li>
												<li onClick={()=>this.filterResults('u11')} >U11</li>
												<li onClick={()=>this.filterResults('u9')} >U9</li>
												<li onClick={()=>this.filterResults('u7')} >U7</li>												
											</ul>
										</div>
									</div>
							</div>
						</div>
					<Rss/>
					<Partners medias={ this.props.medias }/>
					</>
					)
					:
					(<div className='loadingCenter'><Loader /></div>)
				}
			</div>
		)
	}
}


export default Accueil;