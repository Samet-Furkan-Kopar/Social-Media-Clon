import { useEffect } from "react"
import {logout} from "../firebase"
const Deneme = () => {
  console.log("deneme");
  useEffect(() => {
    logout()
  }
  , [])
  return null
}

export default Deneme
