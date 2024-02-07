/* eslint-disable react/prop-types */
import { Navigate, useLocation, useOutlet } from "react-router-dom";
import { useSelector } from "react-redux";
export default function PrivateRoutes() {
    const user = useSelector((state) => state.auth.user);
    console.log("user", user); 
    const location = useLocation(); 
    const outlet = useOutlet();
 
    if (!user) {
        console.log("user is logged out");
        return (
            <Navigate
                to="/auth/login"
                replace={true}
                state={{
                    return_url: location.pathname,
                }}
            />
        );
    }
    return [outlet];
}
// export const logoutFromSystem = () => {
//     authServices.logout().then(res => {
//       Swal.fire({ title: 'Oturumunuzun Süresi Doldu Lütfen Giriş Yapınız!', text: '', icon: 'error', customClass: 'sweet-alerts' });
//       localStorage.removeItem("persist:root");
//       localStorage.removeItem("userToken");
//       location.replace('/login')
//     })
//   };
