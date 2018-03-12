import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = () => (
  <div className="col-md-12 pt-5 d-flex justify-content-between">
    <h1>Listado de Organismos Compradores</h1>
    <form className="form-inline my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Nombre organismo" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
    </form>
  </div>
)

const Linea = () => (
  <div className="col-md-12">
    <hr style={{ height: '10px' }} />
  </div>
)

const Listado = () => (
  <div className="col-md-12 d-flex">
    <div className="list-group w-50">
      <Link to='ficha/1' className="list-group-item list-group-item-action">Ejército de Chile</Link>
      <Link to='ficha/2' className="list-group-item list-group-item-action">ARMADA DE CHILE</Link>
      <Link to='ficha/3' className="list-group-item list-group-item-action">Policía de Investigaciones de Chile</Link>
    </div>
  </div>
)

const Home = (props) => {

  return (
    <main>
      <section className="container pb-5">
        <div className='row'>
          <Header />
          <Linea />
          <Listado />
        </div>
      </section>
    </main>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
