import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = () => (
  <div class="row pt-5 justify-content-between">
    <div>
      <h2 class="font-weight-bold mb-0">Servicio Nacional de Capacitación y Empleo</h2>
      <p class="font-italic c-gris">PERIODO : 01 ENERO A 31 DE DICIEMBRE DE 2017</p>
    </div>
    <div id="idDatosComprador" class="pt-2">
      <h3 class="text-uppercase"> Dirección: Huérfanos 1273 - Piso 11, Santiago</h3>
      <h3 class="text-uppercase"> RUT: 61.531.000-K</h3>
    </div>
  </div>
)

const Ranking = () => (
  <section class="row dvBloqueEncabezado pb-4 pt-2 border-top">
    <div class="dvRankingLeyenda pl-3">
      <strong>105°</strong>
      <p class="w-75">EN EL RANKING DE PAGADORES</p>
    </div>
    <div>
      <h1>¿Cómo paga este organismo?</h1>
      <h2>Este organismo se encuentra en el
      <br /> Ranking de pagadores de un total de
      <strong>858 organismos públicos</strong>
      </h2>
    </div>
  </section>
)

const Reclamos = () => (
  <section class="row dvBloque border-top pb-4 ">
    <h1 class="pb-3">¿Cuántos reclamos ha recibido en este periodo? </h1>
    <div class="dvBloqueDato w-50 d-flex flex-column justify-content-between">
      <h5 class="font-weight-300">Reclamos recibidos por
      <strong class="font-underline font-weight-bold">pago fuera de plazo</strong>
      </h5>
      <div class="d-flex">
        <div class="dvReclamosTotales">
          <span id="idLugarRanking">80</span>
          <strong>/10</strong>
          <p>RECLAMOS INGRESADOS POR PROVEEDORES</p>
        </div>
        <div class="dvReclamoOrganismo">
          <span>210</span>
          <p>RECLAMOS HAN RECIBIDO ORGANISMOS SIMILARES*</p>
        </div>
      </div>
    </div>
    <div class="dvBloqueDato w-50 border-left pl-4 d-flex flex-column justify-content-between">
      <h5 class="font-weight-300">Reclamos recibidos por
      <strong class="font-underline font-weight-bold">irregularidades en sus procesos de compra</strong>
      </h5>
      <div class="d-flex">
        <div>
          <span>42</span>
          <p>RECLAMOS INGRESADOS POR PROVEEDORES</p>
        </div>
        <div class="dvReclamoOrganismo">
          <span>236</span>
          <p>RECLAMOS HAN RECIBIDO ORGANISMOS SIMILARES*</p>
        </div>
      </div>
    </div>
  </section>
)

const OfertarTransado = () => (
  <section class="row dvBloque border-top pb-4 pt-3">

    <div class="dvBloqueDato w-50 d-flex flex-column ">
      <div>
        <h1>¿Cuántos documentos solicita para ofertar?</h1>
        <h3 class="m-0 pl-0">Documentos solicitados en las licitaciones publicadas</h3>
      </div>
      <div class="d-flex">
        <div class="dvReclamosTotales pr-3">
          <span id="idLugarRanking">16</span>
          <p>DOCUMENTOS EN PROMEDIO SOLICITA POR LICITACIÓN</p>
        </div>
        <div class="dvDocumentosTotales border-left pl-3">
          <span>5</span>
          <strong>/10</strong>
          <p>LICITACIONES SOLICITA GARANTIAS DE OFERTA</p>
        </div>
      </div>
      <h6 class="backGreen w-50 p-2 mt-3">
        Este organismo suele solicitar muchos adjuntos para ofertar.
    </h6>
    </div>

    <div class="dvBloqueDato w-50 d-flex flex-column border-left pl-3">
      <div>
        <h1>¿Cuántos proveedores han transado con él?</h1>
        <h3 class="m-0 pl-0">Proveedores que se adjudicaron negocios con este comprador según tamaño de empresa.</h3>
      </div>
      <div class="d-flex justify-content-end">
        <div class="dvReclamosTotales pr-3">
          <span>180</span>
          <p>PROVEEDORES HAN TRANSADO CON ESTE ORGANISMO</p>
        </div>
      </div>
    </div>

  </section>
)

const SaberMas = () => (
  <section class="row dvBloque justify-content-center border-top">
    <div class="d-flex flex-column mb-4">
      <h1>¿Quieres saber más de este organismo?</h1>
      <a type="button" href="http://datosabiertos.chilecompra.cl/Home/OrganismoComprador" class="btn btn-dark btn-lg mt-2">Ir a Datos Abiertos</a>
    </div>
  </section>
)

const Footer = () => (
  <section>
    <hr style={{ height: '10px' }} />
    <div class="d-flex justify-content-end mb-4">
      <Link to='/'>Ver todos los organismos</Link>
    </div>
  </section>
)

const Ficha = (props) => {

  return (
    <main class='container'>
      <Header />
      <Ranking />
      <Reclamos />
      <OfertarTransado />
      <SaberMas />
      <Footer />
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

export default connect(mapStateToProps, mapDispatchToProps)(Ficha)
