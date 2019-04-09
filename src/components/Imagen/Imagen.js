import React from 'react';

const Imagen = (props) => {
const {largeImageURL, likes, previewURL, tags, views} = props.imagen;

  return (
    <React.Fragment>
      <div className="col-6 col-sm-4 col-md-4 mb-4">
        <div className="card">
          <img className="card-img-top" src={previewURL} alt={tags}/>
          <div className="card-body">
            <p className="card-text">{likes} Me gusta</p>
            <p className="card-text">{views} Vistas</p>
            <a href={largeImageURL} target="_blank" className="btn btn-primary btn-block" rel="noopener noreferrer" >Ampliar Imagen</a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Imagen;
