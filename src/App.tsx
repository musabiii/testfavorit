import styled from "styled-components";
import "./App.css";
import Filter from "./components/filter";
import Header from "./components/header";
import MainContent from "./components/main-content";
import Menu from "./components/menu";

const AppBlock = styled.div`
background-color: #D3E4CD;
  transition: all 0.02s linear;
  text-align: center;
  color: #696969;
  width: 1000px;
  height: 600px;
  border: #eee 1px solid;
  margin: 0 auto;
  display: flex;
  outline: none;
  input {
    border: none;
    border-bottom: black 1px solid;
    :focus {
      outline: none;
    }
  }
`;

const ContentBlock = styled.div`
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <AppBlock className="App">
      <Menu />
      <ContentBlock>
        <Header />
        <Filter />
        <MainContent />
      </ContentBlock>
    </AppBlock>
  );
}

export default App;
