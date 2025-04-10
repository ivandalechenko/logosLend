import { useState } from "react";
import Header from "./components/Header/Header"
import Welcome from "./pages/Welcome/Welcome"
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Forgot from "./pages/Forgot/Forgot";
import Verify from "./pages/Verify/Verify";
import PasswordReset from "./pages/PasswordReset/PasswordReset";
import Protocols from "./pages/Protocols/Protocols";
import Cards from "./pages/Cards/Cards";
import { observer } from "mobx-react-lite";
import Wallet from "./pages/Wallet/Wallet";
import PitchDeck from "./pages/PitchDeck/PitchDeck";
import More from "./pages/More/More";
import Introduction from "./pages/Introduction/Introduction";
import Roadmap from "./pages/Roadmap/Roadmap";
import Loader from "./components/Loader/Loader";

import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import WhyExchange from "./pages/WhyExchange/WhyExchange";
import { Slide, ToastContainer } from "react-toastify";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);


export default observer(() => {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
      <div className="App">
        <Loader />
        <Router>
          <Header />
          <div className='App_content'>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/Welcome" element={<Welcome />} />

              <Route path="/Login" element={<Login />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/Forgot" element={<Forgot />} />
              <Route path="/Verify" element={<Verify />} />
              <Route path="/PasswordReset" element={<PasswordReset />} />

              <Route path="/Protocols" element={<Protocols />} />
              <Route path="/Cards" element={<Cards />} />
              {/* <Route path="/Wallet" element={<Wallet />} /> */}
              <Route path="/PitchDeck" element={<PitchDeck />} />
              {/* <Route path="/Advantages" element={<WhyExchange />} /> */}
              {/* <Route path="/More" element={<More />} /> */}
              <Route path="/Roadmap" element={<Roadmap />} />
              <Route path="/Introduction" element={<Introduction />} />

            </Routes>
          </div>
        </Router>
      </div>
    </>
  )
})
