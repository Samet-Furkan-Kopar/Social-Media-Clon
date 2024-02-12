import { useNavigate } from "react-router-dom"
import {Helmet} from "react-helmet";

const Home = () => {
  const navigate = useNavigate();
  const deneme = () => {
    navigate("/samet")
  }

  return (
    <>
  <Helmet>
    <title>Instagram</title>
  </Helmet>
      Home Page
      <button onClick={deneme}>Deneme</button>
      
    </>
  )
}

export default Home
