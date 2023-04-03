import { Outlet } from 'react-router-dom';
import './App.css'

export default function App() {

  return  (

    <div className="app_container">

      <div className='example'>
        <h1 id="neckflix_label">NECKFLIX</h1>
      </div>
      
      <Outlet/>
      <hr />
      <footer className='center'><div>Copyright© 2023 Neckflix</div></footer>
    </div>


  )

}
