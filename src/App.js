import "./App.css";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import Home from "./component/Home";
import { data } from "./data";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Home data={data} />

      <Footer />
    </div>
  );
}

export default App;
