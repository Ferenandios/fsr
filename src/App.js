import { useSelector } from "react-redux";
import Button from "./components/Button/Button";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Items from "./components/Items/Items";
import Reject from "./components/Reject/Reject";

function App() {
  const isReject = useSelector(state => state.photos.isReject)
  return (
    <main>
      <Header />
      <Items />
      {isReject ? <Reject /> : <Button />}
      {!isReject && <Footer />}
    </main>
  );
}

export default App;
