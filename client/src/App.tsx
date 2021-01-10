import React from 'react';
import Sidebar from './containers/Sidebar';
import 'fontsource-roboto'
import Navbar from './components/Navbar';


const App: React.FC = () => {
  
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
    </div>
  );
}



export default App;
