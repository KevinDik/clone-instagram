import Rotas from "./rotas";
import { BrowserRouter as Router} from 'react-router-dom';
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Rotas />
    </Router>
  );
}

export default App;
