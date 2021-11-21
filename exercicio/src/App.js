import './App.css';
import React, { useEffect, useState } from "react";
import apiAtividade from './service/apiTutorial';

function App() {
  const [usuario, setUsuario] = useState();

  useEffect(()=>{
    apiAtividade.get("Geliel1")
    .then(
      (response) => setUsuario(response.data)
    ).catch((error) =>{
      console.error("erro" + error);
    });
  },[])

  return (
    <div className="App">
      <div id='retorno'>
        < img src={usuario?.avatar_url} className="avatar"/>
        <p>{usuario?.name}</p>
        <p>{usuario?.bio}</p>
      </div>
    </div>
  );
}

export default App;
