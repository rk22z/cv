import React from "react";

import { AppContainer } from "AppStyled";

import Home from "view/Home/Home";
import Layout from "components/Layout/Layout";

function App() {
  return (
    <Layout>
      <AppContainer>
        <Home />
      </AppContainer>
    </Layout>
  );
}

export default App;
