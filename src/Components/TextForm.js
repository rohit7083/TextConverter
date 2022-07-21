import React, { useState } from "react";

export default function TextForm(props) {

    const handleupclick = () => {
        // console.log("uppercase was clicked"+text);
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("convert to uppercase","sucess");
    }
    const handlelowclick = () => {
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("convert to lowercase","sucess");

    }
    const handleclrclick = () => {
        let newtext = '';
        setText(newtext)
        props.showAlert("cleard","sucess");

    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text =text;
        window.speechSynthesis.speak(msg);
        props.showAlert("speaking start..","sucess");

    }
    const Handlecopy = () => {
        let text = document.getElementById("mybox");
        text.select();
       navigator.clipboard.writeText(text.value);
       props.showAlert("copied","sucess");
    //    document.getSelection.removeAllRanges() ; //remove select word when u r copied


    }
    const extraspace = () => {
        let newtext=text.split(/[ ]+/);
       setText(newtext.join(" "))
       props.showAlert("remove extra space","sucess");

    }

    const capitalFirstLetter = () => {
        let words = text.split(" ")
        let uppercaseword = ' '
        words.forEach(element => {
            uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " "
        });
        setText(uppercaseword)
        props.showAlert("convert to capitalize","sucess");

    }


    const handleonchnage = (event) => {
        // console.log("on change ");
        setText(event.target.value)

    }
    const [text, setText] = useState("")

   

    // text="new text update"; //wrong way to update text 
    // setText=("new text update"); //correct way to update text 

    return (
        <>

            <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">

        <textarea className="form-control" value={text} onChange={handleonchnage} 
         style={{backgroundColor:props.mode==='dark'?'#02122e':'white',
         color:props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>

                </div>
                <button disabled={text.length===0} className="btn btn-dark mx-2 my-1" onClick={handleupclick}>uppercase</button>
                <button disabled={text.length===0} className="btn btn-dark mx-2 my-1" onClick={handlelowclick}>lowercase</button>
                <button disabled={text.length===0} className="btn btn-dark mx-2 my-1" onClick={speak} >speak</button>
                <button disabled={text.length===0} className="btn btn-dark mx-2 my-1" onClick={capitalFirstLetter} >First Capital</button>
                <button disabled={text.length===0} className="btn btn-dark mx-2 my-1" onClick={Handlecopy} >Copy</button>
                <button disabled={text.length===0} className="btn btn-dark mx-2 my-1" onClick={extraspace} >Remove space</button>
                <button disabled={text.length===0} className="btn btn-dark mx-2 my-1" onClick={handleclrclick}>Clear</button>

            </div>

            <div className="container my-4" style={{color:props.mode==='dark'?'white':'#042743'}}>
               <hr /> <h1> Your Text Summary</h1><hr />
                <p> {text.split(" ").filter((num)=>{return num.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((num)=>{return num.length!==0}).length} mineuts read</p>
                <hr /><h4>Preview</h4>
                <p>{text.length>0?text:" Enter Something In The Above Text Box...... "}</p>

            </div>
        </>
    );
}
