import React from "react";

function Card(props) {
  return (
    <div className="col-sm-6  mt-3 ml-3 ">
      <div className="card col-12 col-sm-6">
        <img
          src={props.data1.src}
          className="card-img-top"
          className="img-fluid "
        />
        <div className="card-body">
          <h5 className="card-title">{props.data1.title}</h5>
          <p className="card-text">{props.data1.disc}</p>
          <a href={props.data1.link} className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
