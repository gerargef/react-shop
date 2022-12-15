import React from "react";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Main from "./Layouts/Main";
import { ContextProvider } from "./context";
function App() {
  return (
    <>
      <Header />
      <ContextProvider>
      <Main />
      </ContextProvider>
      <Footer />
    </>
  );
}

export default App;
