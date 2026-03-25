



import React, {useState} from "react"


export default function TextFrom(props) {

    const HandleUpClick = ()=>{
       let Uppertext = text.toUpperCase();
        settext(Uppertext)
    }
    const HandleLClick = ()=>{
        let lowertext = text.toLowerCase();
        settext(lowertext)
    }
    const clearClick = () =>{
        let clear = "";
        settext(clear);
    }
    const gmailExtractClick = () =>{
        let extract = text.replace(/[@#$%]/g, "")
        settext(extract)
    }

const [text , settext] = useState("Enter your text")
    const handleUpperCase = (event)=>{
        settext(event.target.value)
        
    }

  return (
<>
<div>
<div className="mb-3">
    <h4>{props.heading}</h4>
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleUpperCase} value={text} rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={HandleUpClick}>Upper Case</button>
<button className="btn btn-primary" onClick={HandleLClick}>Lower Case</button>
<button className="btn btn-primary" onClick={clearClick}>Clear</button>
<button className="btn btn-primary" onClick={gmailExtractClick}>Remove[@$%]</button>




    </div>
    <div className="container">
        <h3>lenght of your Characters</h3>
        <p>{text.split(" ").length} words  character is {text.length}</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
    
  )
}
