import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App"
// import { BrowserRouter, Route, Routes } from "react-router-dom";


// function Home() {
//   return (
//     <div>
//       <h1>Home!</h1>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h1>This is my about component!</h1>
//     </div>
//   );
// }

// function Login() {
//   return (
//     <div>
//       <h1>Login</h1>
//       <form>
//         <div>
//           <input type="text" name="username" placeholder="Username" />
//         </div>
//         <div>
//           <input type="password" name="password" placeholder="Password" />
//         </div>
//         <input type="submit" value="Submit" />
//       </form>
//     </div>
//   );
// }
// function App ()
// {
//   //the home component will always render when using routes, no matter which route is followed
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />}></Route>
//         <Route path="/about" element={<About />}></Route>
//         <Route path="/login" element={<Login />}></Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

//to change the behaviour above ,use switch instead of routes

// function App() {
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route path="/about" element={<About />}></Route>
//         <Route path="/login" element={<Login />}></Route>
//         <Route path="/Home" element={<Home />}></Route>
//       </Switch>
//     </BrowserRouter>
//   );
// }
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);