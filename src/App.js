import React from 'react';
import logo from './logo.svg';
import './App.css';

import Index from './pages/index.js'

export const ConfigContext = React.createContext();

const configValue = {
	showSignMeUp: true,
	showSpeakerSpeakingDays: true
}

function App() {
  return (
  	<ConfigContext.Provider value={configValue}>
	    <div className="App">
	      <Index />
	    </div>
    </ConfigContext.Provider>
  );
}

export default App;
