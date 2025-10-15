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
        <div>
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
    )
}
