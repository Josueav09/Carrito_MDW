// import { useForm } from "react-hook-form";
// import { useAuth } from "../context/AuthContext";
// import { useEffect } from "react";
// import { useNavigate, Link } from "react-router-dom";

// function RegisterPage() {

//   const {register, handleSubmit, formState: {errors}} = useForm()
//   const {signup, isAuthenticated, errors: registerErrors} = useAuth()
//   const navigate = useNavigate()

//   useEffect(()=>{
//     if(isAuthenticated)
//       navigate("/profile")
//   }, [isAuthenticated])

//   const onSubmit = handleSubmit(async(values)=>{
//     signup(values)
//   })

//   return (
//     <div className="bg-zinc-800 max-w-dm p-10 rounded-md">
//       {registerErrors.map((error, i)=>(
//         <div className="bg-red-500 p-2 text-white" key={i}>
//           {error}
//         </div>
//       ))}
//       <form onSubmit={onSubmit}>
//         <input type="text"
//         {...register ("username", {required: true})} 
//         className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder="Username"/>
//         {errors.username && <p className="text-red-500">Username es requerido</p>}
        
//         <input type="text"
//         {...register ("dni", {required: true})} 
//         className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder="DNI"/>
//         {errors.dni && <p className="text-red-500">DNI es requerido</p>}
        
//         <input type="email" 
//         {...register ("email", {required: true})} 
//         className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder="Email"/>
//         {errors.email && <p className="text-red-500">email es requerido</p>}
        
//         <input type="password" 
//         {...register ("password", {required: true})} 
//         className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder="Password"/>
//         {errors.password && <p className="text-red-500">Password es requerido</p>}

//         <input type="text" 
//         {...register ("age", {required: true})} 
//         className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder="Ingrese su edad"/>
//         {errors.age && <p className="text-red-500">Edad es requerido</p>}

//         <input type="text" 
//         {...register ("phoneNumber", {required: true})} 
//         className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder="PhoneNumber"/>
//         {errors.phoneNumber && <p className="text-red-500">Phone Number es requerido</p>}

//         <input type="text" 
//         {...register ("address", {required: true})} 
//         className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder="direccion"/>
//         {errors.address && <p className="text-red-500">Direccion es requerido</p>}

//         <input type="text" 
//         {...register ("city", {required: true})} 
//         className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder="Ciudad"/>
//         {errors.city && <p className="text-red-500">Ciudad es requerido</p>}


        
//         <button type="submit" className="text-white">Registrar</button>
//       </form>
//       <p className="text-white">
//           Ya tienes cuenta? 
//           <Link to="/login">Login</Link>
//         </p>
//     </div>
//   )
// }

// export default RegisterPage

import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function RegisterPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/profile");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="bg-[#ffe4e1] flex justify-center items-center h-[calc(100vh-100px)] mt-[80px]">
      {/* Usamos mt-[80px] para crear un margen superior que se ajuste al navbar */}
      <div className="bg-[#ff69b4] max-w-md w-full p-10 rounded-md shadow-lg">
        {registerErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white" key={i}>
            {error}
          </div>
        ))}
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Registrar</h1>

        <form onSubmit={onSubmit}>
          <input
            type="text"
            {...register("username", { required: true })}
            className="w-full bg-white text-[#333] px-4 py-2 rounded-md my-2 focus:outline-none focus:ring-2 focus:ring-[#ff1493]"
            placeholder="Username"
          />
          {errors.username && <p className="text-red-500">El nombre de usuario es requerido</p>}

          <input
            type="text"
            {...register("dni", { required: true })}
            className="w-full bg-white text-[#333] px-4 py-2 rounded-md my-2 focus:outline-none focus:ring-2 focus:ring-[#ff1493]"
            placeholder="DNI"
          />
          {errors.dni && <p className="text-red-500">El DNI es requerido</p>}

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

          <input
            type="text"
            {...register("age", { required: true })}
            className="w-full bg-white text-[#333] px-4 py-2 rounded-md my-2 focus:outline-none focus:ring-2 focus:ring-[#ff1493]"
            placeholder="Edad"
          />
          {errors.age && <p className="text-red-500">La edad es requerida</p>}

          <input
            type="text"
            {...register("phoneNumber", { required: true })}
            className="w-full bg-white text-[#333] px-4 py-2 rounded-md my-2 focus:outline-none focus:ring-2 focus:ring-[#ff1493]"
            placeholder="Número de teléfono"
          />
          {errors.phoneNumber && <p className="text-red-500">El número de teléfono es requerido</p>}

          <input
            type="text"
            {...register("address", { required: true })}
            className="w-full bg-white text-[#333] px-4 py-2 rounded-md my-2 focus:outline-none focus:ring-2 focus:ring-[#ff1493]"
            placeholder="Dirección"
          />
          {errors.address && <p className="text-red-500">La dirección es requerida</p>}

          <input
            type="text"
            {...register("city", { required: true })}
            className="w-full bg-white text-[#333] px-4 py-2 rounded-md my-2 focus:outline-none focus:ring-2 focus:ring-[#ff1493]"
            placeholder="Ciudad"
          />
          {errors.city && <p className="text-red-500">La ciudad es requerida</p>}

          <button
            type="submit"
            className="w-full bg-[#ff69b4] text-white py-2 rounded-md my-4 hover:bg-[#ff1493] transition-colors"
          >
            Registrar
          </button>
        </form>

        <p className="text-center text-white">
          ¿Ya tienes cuenta? 
          <Link to="/login" className="text-[#ffb6c1] hover:underline">Inicia sesión</Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
