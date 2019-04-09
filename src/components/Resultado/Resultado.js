import React, { Component } from 'react';
import Imagen from '../Imagen/Imagen'
import Paginacion from '../Paginacion/Paginacion'

class Resultado extends Component {

  mostrarImagenes = () => {
    const imagenes = this.props.stock;

    if(imagenes.length === 0) return null

    return (

    <React.Fragment>
      <div className="col-12 p-5 row" id="resultado">
        {this.props.stock.map(imagen => (
          <Imagen imagen={imagen} key={imagen.id} />
        ))}
      </div>
      <Paginacion paginaAnterior={this.props.paginaAnterior} pagina={this.props.pagina} paginaSiguiente={this.props.paginaSiguiente} totalPaginas={this.props.totalPaginas} />
    </React.Fragment>
    )
  }

  render() {
    return (
      <React.Fragment>

        {this.mostrarImagenes()}

      </React.Fragment>
    );
  }
}

export default Resultado;
