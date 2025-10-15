import React,{useState} from 'react'

const[text,setText]=useState("Enter your text");
export default function TextForm(params) {
    return (
        <div>
            <form style={{background: params.background}}>
                <div className="mb-3">
                    <h1>{params.heading}</h1>
                    <label htmlFor="myBox" className="form-label">See the difference</label>
                    <textarea type="email" rows={8} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="myBox" className="form-text">We'll never share your email with anyone else.</div>
                </div>
               
                <button type="submit" className="btn btn-primary">Convert</button>
            </form>
        </div>
    )
}
