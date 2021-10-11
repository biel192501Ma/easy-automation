import React from "react";
import logo from "../../assets/2mulhers-vermelho.svg";
import mulher from "../../assets/mulher.svg";
import loja from "../../assets/loja.svg";
import roxa from "../../assets/roxa.svg";
import lroxa from "../../assets/lroxa.svg";
import lapis from "../../assets/lapis.svg";
import mroxa from "../../assets/2mroxa.svg";
import portifolio from "../../assets/lroxa.svg";
import Footer from "../../components/Footer";
const Home = () => {
  return <div className="container-fluid">
      <div className="container">
        <h1>EASY-AUTOMATION</h1>
      </div>

      <div className="container-fluid row align-items-center ">
        <div className="col-5 border-box ml-5">
          <h1 className="font-weight-bold"> Think it.We Automate it. </h1>
          <span>
            {" "}Born in 2020. Developed for our times.We specialize in
            automating your internal business processes.{" "}
          </span>
          <br />
          <br />
          <span className="mt-5 ">
            We specialize in automating your internal business processes.
          </span>
          <br />
          <br />
          <button className="btn btn-block btn-lg bg-danger">
            {" "}Learn More
          </button>
        </div>

        <div className="  col-6 w-100">
          <div className="d-flex align-items-end">
            <img src={logo} className="img-fluid  " />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />

      <div className="container-fluid mt-5 ">
        <div className="container d-flex justify-content-center ">
          <div className="col-5">
            <span className="text-danger d-flex justify-content-center font-weight-bold">
              OFFERING
            </span>
            <h1 className="font-weight-bold text-center ">
              Why Should You Focus On Business Automation Improvements?
            </h1>
            <span className="ml-5 mt-3">
              Let's work together and discover your internal business
              processes that are slowing down your business
            </span>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />

      <div className="container  row aling-items-center">
        <div className="col-5 ml-5 ">
          <div className="  col  ml-5">
            <div>
              <img src={loja} />
            </div>
            <div>
              <h1 className="font-weight-bold">Problem</h1>
              <span>
                explain the problem when one does not utilize automation in
                their business. Bring up sunk cost and data that displays
                negative revenue, when one ignores automation.
              </span>
            </div>
          </div>
        </div>

        <div className="col-5 mx-5 pl-5 ">
          <img src={mulher} className="img-fluid" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="container-fluid">
        <div className="container row text-center">
          <div className="col-6 ml-5">
            <img src={roxa} className="figure-img img-fluid rounded" />
          </div>
          <div className="col-5">
            <div className="d-flex flex-row-reverse">
              <img src={lroxa} />
            </div>
            <div className=" d-flex flex-row-reverse">
              <h2 className="font-weight-bold">Agitate</h2>
            </div>

            <div className=" d-flex flex-row-reverse">
              <span className="text-right">
                {" "}Reiterate the problem. Bring up how their staff is
                fighting mundane tasks, because no automations are in place.
                Their actions are bringing down the business, as they are
                spending a lot of time in non revenue increasing tasks.
              </span>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />

      <div className="container-fluid">
        <div className="container row">
          <div className="col ml-5">
            <div className="img-fluid ">
              <img src={lapis} />
            </div>
            <div className="">
              <h1 className="font-weight-bold">Solve</h1>
              <span>
                Once they partner with us. They will see exponential work
                getting done. As our automations are taking care of the
                mundane in the backend, while the staff is working
                effectively.
              </span>
            </div>
          </div>
          <div className="col-5">
            <img src={mroxa} className="img-fluid" />
          </div>
        </div>
<>
        <Footer />

        </>
      </div>
    </div>;
};

export default Home;
