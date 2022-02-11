import React from "react";

function Education2(props) {
  console.log(props.detail.dgree);
  return (
    <div>
      <div className="container-fluid ">
        <div className="row">
          <div className="mt-5 mx-auto">
            <h3 className="text-primary ">
              {props.detail.dgree} <br />
              {props.detail.short}
            </h3>
            <h6>Year : {props.detail.year}</h6>
            <h6>School/collage : {props.detail.sname}</h6>
            <h6>P.R : {props.detail.pr}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education2;
