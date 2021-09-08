import React from 'react';
import './App.css';


function App() {
    function send() {
        window?.ReactNativeWebView?.postMessage('From Webview to RN');
    }
    React.useEffect(() => {
        window.addEventListener("message",(e) => {
            alert(e.data)
        })
    }, [])
  return (
    <div className="App">
      <header className="App-header">
        Test
          <button onClick={send}>Send</button>
      </header>
    </div>
  );
}

export default App;
