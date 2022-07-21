import React from "react";

export default function About(props) {
  // const [mystyle, setmystyle] = useState({
  //     color: 'black',
  //     backgroundColor: 'white'
  // })

  let mystyle = {
    color: props.mode === "dark" ? "white" : "#061a40",
    backgroundColor: props.mode === "dark" ? "#061a40" : "white",
  };

  // const [Btntext, setBtntext] = useState("Enable Dark Mode ")
  // const toggleStyle = () => {
  //     if (mystyle.color === 'black') {
  //         setmystyle({
  //             color: 'white',
  //             backgroundColor: 'black',
  //             border: '1px solid white'
  //         })
  //         setBtntext(" Enable Light Mode")
  //     }
  //     else {
  //         setmystyle({
  //             color: 'black',
  //             backgroundColor: 'white'
  //         })
  //         setBtntext(" Enable Dark Mode")
  //     }
  // }

  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "#061a40" }}
    >
      <h2>About us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Rohit Sonawane - Contact Us By
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <strong> Under maintenance...</strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Twitter
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <strong> Under maintenance....</strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Instagram
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <strong>Under maintenance....</strong>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
                <button type="button" onClick={toggleStyle} className="btn btn-info">{Btntext}</button>
            </div> */}
    </div>
  );
}
