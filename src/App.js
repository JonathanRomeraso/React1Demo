import './App.css';
import  Testimonio from  './components/testimonio';

function App() {
  return (
    <div className="App">
    <div className='contenedor-principal'>
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
      <Testimonio
        nombre='Jonathan Rodriguez'
        pais='Mexico'
        imagen='jon'
        cargo='Ingeniero de Software'
        empresa='Amazon'
        testimonio='Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae officia dignissimos ducimus voluptates dolorem, laudantium necessitatibus. Repellendus odio ratione, cumque, aut nemo quis quisquam doloremque culpa fugiat, optio reiciendis soluta!'
      />
      <Testimonio
        nombre='Jose Vazquez'
        pais='Mexico'
        imagen='pepe'
        cargo='Ingeniera de Software'
        empresa='ChatDesk'
        testimonio='Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae officia dignissimos ducimus voluptates dolorem, laudantium necessitatibus. Repellendus odio ratione, cumque, aut nemo quis quisquam doloremque culpa fugiat, optio reiciendis soluta!'

      />
      <Testimonio 
        nombre='Eduardo Moya'
        pais='Mexico'
        imagen='lalo'
        cargo='Ingeniera de Software'
        empresa='Spotify'
        testimonio='Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae officia dignissimos ducimus voluptates dolorem, laudantium necessitatibus. Repellendus odio ratione, cumque, aut nemo quis quisquam doloremque culpa fugiat, optio reiciendis soluta!'
        />
     </div> 
    </div>
  );
}

export default App;
