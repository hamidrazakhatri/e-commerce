import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarS from "./Componenet/Navber";
import Section1 from "./Componenet/Section1";
import Fotter from "./Componenet/Fotter";
import { useState } from "react";
import axios from "axios";
function App() {
  const [module, setModule] = useState();
  // console.log(module ? module :"notfound")
  const render = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setModule([...res.data]);
        // console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(module);
  return (
    <>
      <div className="main__background">
        <NavbarS />
        <Section1 />
      </div>
      <button className="d-flex justify-content-center text-white" onClick={render}>products</button>
      <div className="container my-5">
        <div className="row">
          {module?.map((e, i) => {
            return (
              <>
                <div className="col-md-3 size ">
                  <div class="card" >
                    <img src={e.image}  class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">{e.title}</h5>
                      {/* <p class="card-text">
                       {e.description
}
                      </p> */}
                      <a href="#" class="btn btn-primary">
                        {e.price
} buy now
                      </a>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <Fotter />
    </>
  );
}

export default App;
