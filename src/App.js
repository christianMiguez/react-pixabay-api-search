import React, { Component } from 'react';
import Formulario from './components/Formulario/Formulario'
import Resultado from './components/Resultado/Resultado'
import Spinner from './components/Spinner/Spinner'

class App extends Component {

  state = {
    termino: '',
    stock: [],
    pagina: '',
    cargando: false,
    totalPaginas: ''
  }

  consultarAPI = async () => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;

    const url = `https://pixabay.com/api/?key=12142965-8a88c06da0d758018f3322469&q=${termino}&per?page=30&page=${pagina}`
    await fetch(url).then(res => {
      this.setState({
        cargando: true
      })
      return res.json()}).then(res => {
        const totalPaginacion = Math.ceil(res.totalHits / 30);
        setTimeout(() => {
          this.setState({stock: res.hits, cargando: false, totalPaginas: totalPaginacion })
        }, 2000)
      })
  }

  datosBusqueda = (termino) => {
    this.setState({
      termino,
      pagina: 1
    }, () => {
      this.consultarAPI()
    })
  }

  paginaSiguiente = () => {
    let pagina = this.state.pagina;

    if(pagina === this.state.totalPaginas) return null

    pagina += 1;
    this.setState({
      pagina
    }, () => {this.consultarAPI(); this.scroll()})
  }
  paginaAnterior = () => {
    let pagina = this.state.pagina;
    if(pagina === 0) return null;
    pagina -= 1;
    this.setState({
      pagina
    }, () => {this.consultarAPI(); this.scroll()})
  }

  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'start');
  }


  render() {
    const cargando = this.state.cargando;
    let resultado;
    if(cargando) {
      resultado = <Spinner />
    } else {
      resultado =  <Resultado stock={this.state.stock} paginaAnterior={this.paginaAnterior} paginaSiguiente={this.paginaSiguiente} totalPaginas={this.state.totalPaginas} pagina={this.state.pagina} />
    }
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de imagenes</p>
          <Formulario datosBusqueda={this.datosBusqueda} />
        </div>
        <div className="row">
         {resultado}
        </div>
      </div>
    );
  }
}

export default App;
