// import { Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// function Navbar() {

//   const {isAuthenticated, logout, user}=useAuth()
//   return (
//     <nav className='bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg'>
//       <Link to={'/'}>
//         <h1 className='text-2xl font-bold'>Carrito de compras</h1>
//       </Link>
//       <ul  className='flex gap-x-2'> 
//        {isAuthenticated ? (
//         <>
//           <li>
//           Welcome {user.username}
//           </li>
//           <li >
//             <Link to={'/carrito'}>Carrito</Link>
//           </li>
//           <li >
//             <Link to={'/'} onClick={()=>{
//               logout()
//             }} className="bg-indigo-500 px-4 py-1 rounded-sm">Log out</Link>
//           </li>
          
//         </>
//        ) : (
//         <>
//           <li className="text-white">
//           <Link to={'/login'} className="bg-indigo-500 px-4 py-1 rounded-sm">Login</Link>
//           </li>
//           <li className="text-white">
//             <Link to={'/register'} className="bg-indigo-500 px-4 py-1 rounded-sm">Register</Link>
//           </li>
//         </>
//        )}
//       </ul>
//     </nav>
//   )
// }

// export default Navbar

import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className='bg-[#ff1493] my-3 flex justify-between py-5 px-10 rounded-lg'>
      <Link to={'/'}>
        <h1 className='text-2xl font-bold text-white'>Carrito de compras</h1>
      </Link>
      <ul className='flex gap-x-2'> 
        {isAuthenticated ? (
          <>
            <li className='text-white'>
              Welcome {user.username}
            </li>
            <li>
              <Link to={'/carrito'} className="text-white">Carrito</Link>
            </li>
            <li>
              <Link 
                to={'/'} 
                onClick={() => { logout() }} 
                className="bg-[#ff69b4] px-4 py-1 rounded-sm hover:bg-[#ff1493] transition-colors"
              >
                Log out
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link 
                to={'/login'} 
                className="bg-[#ff69b4] text-white px-4 py-1 rounded-sm hover:bg-[#ff1493] transition-colors"
              >
                Login
              </Link>
            </li>
            <li>
              <Link 
                to={'/register'} 
                className="bg-[#ff69b4] text-white px-4 py-1 rounded-sm hover:bg-[#ff1493] transition-colors"
              >
                Register
              </Link>
            </li>
            <li>
              <Link 
                to={'/'} 
                className="bg-[#ff69b4] text-white px-4 py-1 rounded-sm hover:bg-[#ff1493] transition-colors"
              >
                Administrador
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
