import React ,{useState} from 'react'
  
export default function About() {
  const [myStyle,setMyStyle] = useState({

    color:"black",
    backgroundColor:"white",
   
  })

  const [btnText,setBtnText] =useState("Enable Dark Mode")
var toggleStyle=()=>{
    if(myStyle.color ==="white"){
      setMyStyle({
        color:"black",
        backgroundColor:"white",
        
      })
      setBtnText("Enable Dark Mode")
    }else{
      setMyStyle({
        color:"white",
        backgroundColor:"  rgb(127, 3, 13)",
         border:"1px solid white"
      })
      setBtnText("Enable Light Mode")
    }
 }
  
  // let myStyle1={
  //   color:"white",
  //   backgroundColor:" rgb(16, 16, 16)"
  // }
  return (
<div className=" container"style={myStyle} >
  <h2>About us</h2>
<div className="accordion" id="accordionExample" >
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
     <strong> What is the purpose of this textUtils conversion web app?</strong>

      </button>
    </h2>
    <div id="collapseOne" style={myStyle}  className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      At TextUtils, we believe in the power of words. Our intuitive tools are designed to help you manipulate text effortlessly, offering features such as text formatting, case conversion, word count, and much more. We strive to make text processing accessible and efficient, so you can focus on what matters most – your content.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
    <strong>    Everything about us.</strong>
      </button>
    </h2>
    <div id="collapseTwo"style={myStyle}   className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Welcome to TextUtils, your ultimate destination for all things text! Whether you're looking to transform, analyze, or simply play around with text, our web app has you covered. Our mission is to provide a seamless and powerful platform that caters to the diverse needs of writers, students, developers, and text enthusiasts.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong> About our team.</strong>
      </button>
    </h2>
    <div id="collapseThree" style={myStyle}  className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      We are a team of passionate developers and language lovers dedicated to bringing you the best text utility experience. With a commitment to innovation and user satisfaction, we continually update and enhance our tools to meet your evolving needs.
      </div>
    </div>
  </div>
</div>
<button type="button" onClick={toggleStyle} className="btn btn-primary mx-4 my-4" >{btnText}</button>
</div>

  )
}
