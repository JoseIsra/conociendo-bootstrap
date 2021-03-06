
import './App.css';
import { Navbar} from './component/Navbar';
import { Hero} from './component/Hero';
import { Places} from './component/Places';
import { About} from './component/About';
import { Creator} from './component/Creator';

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Places />
    <Creator />
    </>
  );
}

export default App;
