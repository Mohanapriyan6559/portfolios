import './App.css';
import Head from '../src/components/Head';
import My from '../src/components/My';
import About from './components/About';
import Project from './components/project'
import Resume from './components/Resume';
import Contact from './components/Connection';
import Footers from './components/Footer';

function App() {
  return (
    <div className="App">
      <Head/>
      <My/>
      <About/>
      <Project/>
      <Resume/>
      <Contact/>
      <Footers/>

      

  
    </div>
  );
}

export default App;
