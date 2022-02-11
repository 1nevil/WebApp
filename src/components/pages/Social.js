import React from "react";
import Card from "./Card";

const Social = (props) => {
  return (
    <div>
      <div className="container-fluid">
        <h1 className="text-center text-primary mt-3 gy-2">
          Social media app to connect me
        </h1>
        <div className="row justify-content-center d-flex">
          {props.data.map((one, i) => (
            <Card data1={one} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Social;
