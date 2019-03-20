import React from 'react'
import { Route, Switch} from 'react-router-dom'
import NavBar from './components/Navigation/NavBar'
import Footer from './components/Footer/Footer'
import Home from './views/Home'
import Popular from './views/Popular'
import TopRated from './views/TopRated'
import Upcoming from './views/Upcoming'
import NowPlaying from './views/NowPlaying'
import TVShows from './views/TVShows'
import MovieDetailPage from './views/MovieDetailPage'


export default function App() {
  return (
    <div>
      <NavBar/>
    <Switch>
    <Route onUpdate={window.scrollTo(0, 0)} path="/" exact component={Home}/>
    <Route onUpdate={window.scrollTo(0, 0)} path="/popular" render={() => <Popular topic="popular" />}/>
    <Route onUpdate={window.scrollTo(0, 0)} path="/top-rated" render={() => <TopRated topic="top_rated" />}/>
    <Route onUpdate={window.scrollTo(0, 0)} path="/upcoming" render={() => <Upcoming topic="upcoming"/>}/> 
    <Route onUpdate={window.scrollTo(0, 0)} path="/now-playing" render={() => <NowPlaying topic="now_playing"/>}/> 
    <Route onUpdate={window.scrollTo(0, 0)} path="/tv-shows" component={TVShows}/>
    <Route onUpdate={window.scrollTo(0, 0)} path="/details/movie/:id" component={MovieDetailPage}/>
    <Route onUpdate={window.scrollTo(0, 0)} path="/details/tv/:id" component={Home}/>
    </Switch>
    <Footer />
    </div>
  )
}
