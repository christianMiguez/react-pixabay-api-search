import React, { Component } from 'react';

class Formulario extends Component {

  buscarRef = React.createRef();

  obtenerDatos = (e) => {
    e.preventDefault();

    const termino = this.buscarRef.current.value;

    this.props.datosBusqueda(termino)
  }

  render() {
    return (
      <form onSubmit={this.obtenerDatos}>
        <div className="row">
          <div className="form-group col-md-8">
            <input ref={this.buscarRef} type="text" className="form-control form-control-lg" placeholder="Busca tu imagen"/>
          </div>
          <div className="form-group col-md-4">
            <input type="submit" value="Buscar!" className="btn btn-lg btn-danger btn-block"/>
          </div>
        </div>
      </form>
    );
  }
}

export default Formulario;
