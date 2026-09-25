import "./Component.css"
import React from "react";

function Person1(){

    const [guess, setGuess] = React.useState(0);

    function handleChange(e){
        setGuess(e.target.value);
    }

    return(
        <>
            <div className = "person1">
                <p> ✦⟡✦ NOAH .O1</p>   

                <div className = "person1-info"> 
                    <ul>
                        <li> Sophomore in CS + Design</li>
                        <li> Web Design, UI/UX, Frontend</li>
                    </ul>   

                    <div className = "person1-guess-section">
                        <label for="guess">Guess my name:</label>
                        <input id="guess" type="text" value={guess} onChange={handleChange} />

                        {guess && (
                            <p className = "person1-guess-response">
                                {guess.toLowerCase() === "noah" ? "Correct! ✔" : "Try again :("}
                            </p> 
                        
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Person1;