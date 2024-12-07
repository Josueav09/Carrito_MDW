// import { useForm } from "react-hook-form";
// import { useAuth } from "../context/AuthContext";
// import { Link, useNavigate } from "react-router-dom";
// import { useEffect } from "react";


// function LoginPage() {
//   const {register, handleSubmit, formState: {errors}} = useForm()
//   const {signin, errors: signErrors, isAuthenticated} = useAuth()
//   const navigate = useNavigate()

//   const onSubmit = handleSubmit((data)=>{
//     signin(data)
//   })

//   useEffect(()=>{
//     if(isAuthenticated){
//       navigate('/carrito')
//       }
//   }, [isAuthenticated])

//   return (
//     <div className="flex h-[calc(100vh-100px)] items-center justify-center">
//       <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
//       {signErrors.map((error, i)=>(
//         <div className="bg-red-500 p-2 text-white" key={i}>
//           {error}
//         </div>
//       ))}
//         <h1 className="text-2xl font-bold text-white">Login</h1>
        
//         <form onSubmit={onSubmit}>
//           <input type="email" 
//           {...register ("email", {required: true})} 
//           className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder="Email"/>
//           {errors.email && <p className="text-red-500">email es requerido</p>}
          
//           <input type="password" 
//           {...register ("password", {required: true})} 
//           className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder="Password"/>
//           {errors.password && <p className="text-red-500">Password es requerido</p>}
          
//           <button type="submit" className="text-white">Iniciar Sesion</button>
//         </form>
//         <p className="text-white justify-end">
//           No tienes cuenta? 
//           <Link to="/register">Registrate</Link>
//         </p>
//       </div>
//     </div>
//   )
// }

// export default LoginPage

import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signin, errors: signErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/carrito');
    }
  }, [isAuthenticated]);

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center bg-[#ffe4e1]">
      <div className="bg-[#ff69b4] max-w-md w-full p-10 rounded-md shadow-lg">
        {signErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white" key={i}>
            {error}
          </div>
        ))}
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Login</h1>

        <form onSubmit={onSubmit}>
          <input 
            type="email" 
            {...register("email", { required: true })} 
            className="w-full bg-white text-[#333] px-4 py-2 rounded-md my-2 focus:outline-none focus:ring-2 focus:ring-[#ff1493]" 
            placeholder="Email" 
          />
          {errors.email && <p className="text-red-500">El email es requerido</p>}

          <input 
            type="password" 
            {...register("password", { required: true })} 
            className="w-full bg-white text-[#333] px-4 py-2 rounded-md my-2 focus:outline-none focus:ring-2 focus:ring-[#ff1493]" 
            placeholder="Password" 
          />
          {errors.password && <p className="text-red-500">La contraseña es requerida</p>}

          <button 
            type="submit" 
            className="w-full bg-[#ff69b4] text-white py-2 rounded-md my-4 hover:bg-[#ff1493] transition-colors"
          >
            Iniciar sesión
          </button>
        </form>

        <p className="text-center text-white">
          ¿No tienes cuenta? 
          <Link to="/register" className="text-[#ffb6c1] hover:underline">Regístrate</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
