import './App.css';
import Hero from './components/Hero';
import Programs from './components/Programs/Programs.jsx';
import Reasons from './components/Reasons/Reasons.jsx'
import Plans from './components/Plans/Plans.jsx';
import Join from './components/Join/Join.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
        <Hero/>
        <Programs/>
        <Reasons/>
        <Plans/>
        <Join/>
        <Footer/>
    </div>
  );
}

export default App;
