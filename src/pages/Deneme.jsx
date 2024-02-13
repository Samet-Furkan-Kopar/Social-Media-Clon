import { useEffect } from "react"
import {logout} from "../firebase"
const Deneme = () => {
  useEffect(() => {
    logout()
  }
  , [])
  return null
}

export default Deneme
