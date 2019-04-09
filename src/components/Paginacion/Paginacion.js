import React, {Component} from 'react';

class Paginacion extends Component {

  mostrarAnterior = () => {
    const {pagina} = this.props;

    if(pagina === 1) return null;


    return(
      <button onClick={this.props.paginaAnterior} className="btn btn-info mr-1">Atras &larr;</button>
    )
  }

  mostrarSiguiente = () => {
    const {pagina, totalPaginas} = this.props;

    if(pagina === totalPaginas) return null;

    return(
      <button onClick={this.props.paginaSiguiente} className="btn btn-info">Siguiente &rarr;</button>
    )
  }

  render() {

    return (
      <div className="row py-5">
      {this.mostrarAnterior()}
      {this.mostrarSiguiente()}
      </div>
    );
  }
}

export default Paginacion;
