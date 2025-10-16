import React,{useState} from 'react'


export default function TextForm(params) {
    const[text,setText]=useState("Enter your text");
    const handleUpClick = ()=>{
        console.log("Clicked the button")
        let newText=text.toUpperCase()
        setText(newText)
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
                    <div id="myBox" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <button type="button" className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
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
