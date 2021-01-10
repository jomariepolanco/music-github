import React from 'react';
import Sidebar from './containers/Sidebar';
import 'fontsource-roboto'
import Navbar from './components/Navbar';
import BodyContainer from './containers/BodyContainer';


const App: React.FC = () => {
  
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <BodyContainer />
    </div>
  );
}



export default App;
