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
      document.getSelection().removeAllRanges();
    //  navigator.clipboard.writeText(text);   // Can include only this line
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
      <h1 className="mb-4">{props.heading}</h1>
      <div className="mb-3">
    
        <textarea  className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'? '#13466e' :'white',color:props.mode==='dark'? 'white' :'black'}}></textarea>
      </div>
      <button disabled={text.replace(/\s+/g, '').length===0}className="btn btn-primary mx-4 my-1" onClick={handleUpperCaseClick}>Convert to UpperCase</button>
      <button disabled={text.replace(/\s+/g, '').length===0} className="btn btn-primary mx-4 my-1" onClick={handleLowerCaseClick}>Convert to LowerCase</button>
      <button disabled={text.replace(/\s+/g, '').length===0} className="btn btn-primary mx-4 my-1" onClick={clearText}>Clear Text</button>
      <button disabled={text.replace(/\s+/g, '').length===0} className="btn btn-primary mx-4 my-1" onClick={toggleText}>Toggle Text</button>
      <button disabled={text.replace(/\s+/g, '').length===0} className="btn btn-primary mx-4 my-1" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.replace(/\s+/g, '').length===0} className="btn btn-primary mx-4 my-1" onClick={handleExtraSpace}>Handle Extra Space</button>
    </div>
    <div className="container my-2"style={{color:props.mode==='dark'? 'white' :'black'}} >
         <h1>Your text summary</h1>
         <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.replace(/\s+/g, '').length} characters</p>
         <p>{0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minute to read</p>
         <h2>Preview</h2>
         <p>{text.length>0 ? text : "Enter something to preview text"}</p>
    </div>
    </>
  )
}
