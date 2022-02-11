import React from "react";

const Home = () => {
  return (
    <div className="container-fluid col-sm-10 ">
      <div className="row mt-5">
        <div className="col-10 col-sm-5 mx-auto order-1">
          <h1 className="text-capitalize display-5  ">
            <span className="text-primary">hello,guys</span>
            <p> my name is &lt;Nevil/&gt;</p>
          </h1>
          <h3 className="display-6 mt-4">SYBCA sem-4 student </h3>
          <h5 className="mt-4">19 year old.</h5>
          <p className="mt-4">Currently Learn</p>
          <ul>
            <li>React</li>
            <li>Git & Github</li>
            <li>Java</li>
          </ul>
        </div>
        <div className="col-10 col-sm-5 mx-auto order-2">
          <img
            src="./images/laptop.png"
            alt="Laptop image"
            class="img-fluid mt-3 "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
