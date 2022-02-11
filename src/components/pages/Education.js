import React from "react";
import Education2 from "./Education2";

const Education = (props) => {
  return (
    <div className="container-fluid  mt-3 ">
      <div className="row ">
        <div className="col-12 col-sm-10 mx-auto">
          <h1 className="display-5 text-center">Education</h1>
          {props.val.map((value, i) => (
            <Education2 key={i} detail={value} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
