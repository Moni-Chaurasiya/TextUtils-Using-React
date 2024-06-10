import React, {useState} from 'react'


export default function TextForm(props) {
    const [text,setText] = useState("Enter text here");
    const handleUpperCaseClick=()=>{
        let newtext= text.toUpperCase()
        setText(newtext)
        props.showAlert("Converted to UpperCase", "success");
    }
    const handleLowerCaseClick=()=>{
      let newtext= text.toLowerCase()
      setText(newtext)
      props.showAlert("Converted to LowerCase", "success");
    }
    const handleOnChange=(event)=>{
      console.log("On Change")
      setText(event.target.value);
    }
    const clearText=()=>{
      let newText=" "
      setText(newText)
      props.showAlert("Text Cleared", "success");
    }
    const toggleText=()=>{
      var newText=" "
      for(let i=0;i<text.length;i++){
        
        if(text[i]===text[i].toLowerCase()){
           newText+= text[i].toUpperCase()
        
  
        }else{
           newText+= text[i].toLowerCase() 
          }
       }
        setText(newText);
        props.showAlert("Text toggled", "success");
    }
    const handleCopy =()=>{
      var text= document.getElementById("myBox")
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard", "success");
    }
    
    const handleExtraSpace =()=>{
     let  newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra Space is removed", "success");
    }
    return (
      <>
    <div className="container" style={{color:props.mode==='dark'? 'white' :'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
    
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'? 'grey' :'white',color:props.mode==='dark'? 'white' :'black'}}></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpperCaseClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-4" onClick={handleLowerCaseClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-4" onClick={clearText}>Clear Text</button>
      <button className="btn btn-primary mx-4" onClick={toggleText}>Toggle Text</button>
      <button className="btn btn-primary mx-4" onClick={handleCopy}>Handle Copy</button>
      <button className="btn btn-primary mx-4" onClick={handleExtraSpace}>Handle Extra Space</button>
    </div>
    <div className="container my-2"style={{color:props.mode==='dark'? 'white' :'black'}} >
         <h1>Your text summary</h1>
         <p>{text.split(" ").length} words, {text.length} characters</p>
         <p>{0.008*text.split(" ").length} minute to read</p>
         <h2>Preview</h2>
         <p>{text.length>0 ? text : "Enter something to preview text"}</p>
    </div>
    </>
  )
}
