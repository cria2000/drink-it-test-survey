import React, {useEffect} from 'react';
import './Styles/css/App.css';
import {MainFrame} from "./MainFrame";

function App() {

    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
        script.async = true

        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, [])

  return (
    <div className="App">
       <MainFrame/>
    </div>
  );
}

export default App;
