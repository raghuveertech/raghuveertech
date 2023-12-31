import Layout from "./components/Layout";
import MainContent from "./components/MainContent";
import MainNav from "./components/MainNav";
import "./scss/global.scss";

function App() {
  return (
    <>
      <Layout>
        <MainNav />
        <MainContent></MainContent>
      </Layout>
    </>
  );
}

export default App;
