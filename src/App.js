import logo from './logo.svg';
import './App.css';
import Header from './components/navigations/Header.js'
import Dropzone from './components/uploads/Dropzone.js'


function App() {
  return (
    <div>
      <Header/>
      <Dropzone />
    </div>
  );
}

export default App;
