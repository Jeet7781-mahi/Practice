import React,{useState} from 'react'


export default function TextForm(params) {
    const[text,setText]=useState("Enter your text");
    const[background,setBackground]=useState("white");
    const bgColor =()=>{
        //let cs=document.getElementById("root").css(background,'darkcyan')
        setBackground("darkcyan")
    }
    const handleUpClick = ()=>{
        console.log("Clicked the button")
        let newText=text.toUpperCase()
        setText(newText)
    }
    const handleDownClick=()=>{
        const lowKey=text.toLowerCase()
        setText(lowKey)
    }
    const clearOnClick=()=>{
        const clearText=""
        setText(clearText)
    }
    const copyClipBoard = () =>{
        const newText1 =navigator.clipboard.writeText(text)
        setText(newText1)
    }
    const handleOnChange = (event) =>{
        console.log("Now the text-area is writtable")
       
        setText(event.target.value)
        

    }

    return (
        <>
        <div className='container'>
            <form style={{background: params.background}}>
                <div className="mb-3">
                    <h1>{params.heading}</h1>
                    <label htmlFor="myBox" className="form-label">See the difference</label>
                    <textarea type="email" rows={8} value={text} onChange={handleOnChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <p>{200-text.length}/{200}</p>
                    <div id="myBox" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <button type="button" className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
                <button type="button" className="btn btn-primary mx-3" onClick={handleDownClick}>Convert to LowerCase</button>
                <button type="button" className="btn btn-primary mx-3" onClick={clearOnClick}>Clear Text</button>
                <button type="button" className="btn btn-primary mx-3" onClick={copyClipBoard}>Copy Text</button>
                <button type="button" className="btn btn-primary mx-3" onClick={bgColor}>Change Background</button>
            </form>
        </div>
        <div className="container">
            <h1>My Text Summary</h1>
            <p>My paragraph have {text.split(" ").filter(word=> word.trim() !== "").length} words and {text.length} characters</p>
            <h2>time needed</h2>
            <p>{0.008*text.split(/\s+/).filter(word=> word.trim() !== "").length} minutes to read</p>
            <h2>Review</h2>
            {text}
        </div>
        </>
    )
}
