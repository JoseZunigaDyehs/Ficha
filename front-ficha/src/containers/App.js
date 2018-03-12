import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Ficha from './Ficha'
import Home from './Home'
import '../style.css'


const Header = () => (
  <header>
  </header>
)

const App = (props) => {

  return (
    <Router>
      <div>
        <Header />
        <Route exact path='/' component={Home} />
        <Route exact path='/ficha/:id' component={Ficha} />
      </div>
    </Router>
  )


}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
