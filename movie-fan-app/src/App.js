import React from 'react'
import { Route } from 'react-router-dom'
import NavBar from './components/Navigation/NavBar'
import Discover from './views/Discover'
import NowPlaying from './views/NowPlaying'
import Popular from './views/Popular'
import TopRated from './views/TopRated'
import TVShows from './views/TVShows'
import Upcoming from './views/Upcoming'
import Home from './views/Home'


export default function App() {
  return (
    <div>
      <NavBar/>
    <Route path="/" exact component={Home}/>
    <Route path="/discover" component={Discover}/>
    <Route path="/popular" component={Popular}/>
    <Route path="/top-rated" component={TopRated}/>
    <Route path="/upcoming" component={Upcoming}/>
    <Route path="/now-playing" component={NowPlaying}/>
    <Route path="/tv-shows" component={TVShows}/>
    <Route path="/details/movie/:id" component={Home}/>
    <Route path="/details/tv/:id" component={Home}/>
    </div>
  )
}
