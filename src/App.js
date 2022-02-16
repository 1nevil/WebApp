import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/pages/Navbar";
import Home from "./components/pages/Home";
import Education from "./components/pages/Education";
import Social from "./components/pages/Social";
import Error from "./components/pages/Error";
import React from "react";
import Footer from "./components/pages/Footer";
import insta from "./components/pages/images/insta.png";
import linkin from "./components/pages/images/linkin.png";
import tweet from "./components/pages/images/tweet.png";
import gamil from "./components/pages/images/Gmail.png";

function App() {
  const data = [
    {
      dgree: "Bachelor's Computer Application ",
      short: "(B.C.A)",
      year: "2020 - 2023",
      sname: "C.B.Patel Computer collage",
      pr: "SYBCA Sem-3 - 8.74",
    },
    {
      dgree: "12th, Commerce",
      short: "(Guajrat board)",
      year: "2018 - 2020",
      sname: "Samithi Gujarati Medium School",
      pr: 94.88,
    },
    {
      dgree: "10th",
      short: "(Guajrat board)",
      year: "2005 - 2018",
      sname: "Samithi Gujarati Medium School",
      pr: 91.67,
    },
  ];
  const sData = [
    {
      src: insta,
      title: "Instagram",
      disc: "If you want to follow me on instagram click the given button",
      link: "https://www.instagram.com/_nevil_mistry_/",
    },
    {
      src: linkin,
      title: "Linkin",
      disc: "If you want to follow me on Linkin click the given button",
      link: "https://www.linkedin.com/in/nevil-mistry",
    },
    {
      src: tweet,
      title: "Tweeter",
      disc: "If you want to follow me on Twitter click the given button",
      link: "https://twitter.com/N3vilMistry?t=Jsux8j305BiOrN1ktgk7lA&s=09",
    },
    {
      src: gamil,
      title: "Github",
      disc: "If you want to Github me  click the given button",
      link: "https://github.com/1nevil",
    },
  ];
  return (
    <div>
      <React.Fragment>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/social" element={<Social data={sData} />} />
            <Route path="/education" element={<Education val={data} />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </React.Fragment>
    </div>
  );
}

export default App;
