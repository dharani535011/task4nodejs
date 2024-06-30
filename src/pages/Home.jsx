import { Link, Outlet } from "react-router-dom"
import axios from 'axios'

const Home = () => {

const handlelogout=async()=>{
      const rees=  await axios.post("http://localhost:3500/user/logout",{},{
        withCredentials: true
      })
}
  return (
    <div><nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <Link class="navbar-brand" to="/">Home</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/">login</Link>
          </li> <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/registeration">Registeration</Link>
          </li>
          <li class="nav-item" onClick={handlelogout}>
          <Link class="nav-link active" aria-current="page">logout</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
        <Outlet/>
    </div>
  )
}

export default Home