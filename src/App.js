import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import AboutMain from "./components/AboutMain";
import ContactMain from "./components/ContactMain";
import Footer from "./components/Footer";
import React, { useState } from "react";

function App() {
  const [page, setPage] = useState("home"); 

  let content;

  if (page === "home") {
    content = (
      <>
        <Main
          title="my portfolio"
          description="Designing with purpose, developing with passion."
          skills={[
            { name: "HTML", description: "Structure & Semantics" },
            { name: "CSS", description: "Styling & Layout" },
            { name: "JavaScript", description: "Interactivity & Logic" },
          ]}
          projects={[
            {
              name: "E-Commerce Site",
              description: "Modern online shopping platform",
            },
            {
              name: "Landing Page",
              description: "Creative landing page for startup",
            },
          ]}
          email="batool@gmail.com"
          phone="0799977733"
        />
      </>
    );
  } else if (page === "about") {
    content = (
      <>
        <AboutMain />
      </>
    );
  } else if (page === "contact") {
    content = (
      <>
        <ContactMain />
      </>
    );
  }

  return (
    <div>
      <Header
        name="Batool Jaber"
        title="Web Developer & UI/UX Designer"
        color="pink-950"
      />
      <Nav color="pink-900" setPage={setPage} />
      {content}
      <Footer
        color="pink-950"
        text="© 2025 Batool Jaber. All rights reserved."
      />
    </div>
  );
}

export default App;
