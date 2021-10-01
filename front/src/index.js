import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';


const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.msg));
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}



ReactDOM.render(<App /> ,document.getElementById('root'));
