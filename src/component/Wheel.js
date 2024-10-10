import { useState } from "react";
import Career from "./Career";
import Result from "./Result";

const Wheel = () => {
    const [counter, setCounter] = useState(1);
    const [style, setSty] = useState({backgroundColor: "#ED6A56"})
    const [p, setP] = useState("Create")
    const [career, setCareer] = useState([])
    const [health, setHealth] = useState([])
    const [money, setMoney] = useState([])
    const [per, setPer] = useState([])
    const [rel, setRel] = useState([])
    const [fun, setFun] = useState([])
    const [physical, setPhysical] = useState([])
    const [spirit, setSpirit] = useState([])

    const submit = (e) => {
        e.preventDefault();
        let ans= e.target.textContent
        setCounter(counter + 1);
        console.log(career)

        if (counter <= 2) {
            setCareer((prev) =>  [...prev, ans])
                

        }
            if (counter >= 2) {
                setSty({backgroundColor: "#F09B36"})
                setP("Money")
                setMoney((prev) =>  [...prev, ans])
            
                    

            }
            if (counter >= 4) {
                setSty({backgroundColor: "#FFC74E"})
                setP("Health")
                setHealth((prev) =>  [...prev, ans])

            }
            if (counter >= 6) {
                setSty({backgroundColor: "#A0B470"})
                setP("Relationships")
                setRel((prev) =>  [...prev, ans])
            }
            if (counter >= 8) {
                setSty({backgroundColor: "#6E9E75"})
                setP("Personal Growth")
                setPer((prev) =>  [...prev, ans])
            }
            if (counter >= 10) {
                setSty({backgroundColor: "#73CCE4"})
                setP("Fun and Recreation")
                setFun((prev) =>  [...prev, ans])
            }
            if (counter >= 12) {
                setSty({backgroundColor: "#869ACF"})
                setP("Physical Environment")
                setPhysical((prev) =>  [...prev, ans])
            }
            if (counter >= 14) {
                setSty({backgroundColor: "895881"})
                setP("Spirituality")
                setSpirit((prev) =>  [...prev, ans])

            }

            

    }

    return ( 
       
       <div>
                     {counter <= 15 && (   <header style={style}> {p}  </header> )}
                <div className="section">
                {counter === 1 && (
                <Career question="How do you feel about your career right now?"/>
            )}
                {counter === 2 && (
                <Career question=" How would you like to feel about your career in the future?" style={{textAlign:"right"}} />
            )}

        {counter === 3 && (
                <Career question=" How do you feel about your money right now?" />
            )}
        {counter === 4 && (
                <Career question="How would you like to feel about your money in the future?" style={{textAlign:"right"}}/>
            )}
        {counter === 5 && (
                <Career question="How do you feel about your health right now?" />
            )}
        {counter === 6 && (
                <Career question="How would you like to feel about your health in the future?" style={{textAlign:"right"}}/>
            )}
        {counter === 7 && (
                <Career question="How do you feel about your relationships right now?" />
            )}
        {counter === 8 && (
                <Career question="How would you like to feel about your relationships in the future?" style={{textAlign:"right"}}/>
            )}
        {counter === 9 && (
                <Career question="How do you feel about your personal growth right now?" />
            )}
        {counter === 10 && (
                <Career question="How would you like to feel about your personal growth in the future?" style={{textAlign:"right"}}/>
            )}
         {counter === 11 && (
                <Career question="How do you feel about your fun and recreation right now?" />
            )}
        {counter === 12 && (
                <Career question="How would you like to feel about your fun and recreation in the future?" style={{textAlign:"right"}}/>
            )}
        {counter === 13 && (
                <Career question="How do you feel about your physical environment right now?" />
            )}
        {counter === 14 && (
                <Career question="How would you like to feel about your physical environment in the future?" style={{textAlign:"right"}} />
            )}
        {counter === 15 && (
                <Career question="How do you feel about your spirituality right now?" />
            )}
        {counter === 16 && (
                <Career question="How would you like to feel about your spirituality in the future?" style={{textAlign:"right"}}/>
            )}
           

            {counter <= 16 && ( 
                    <ol>
                <span onClick={submit}> 1 </span>
                <span onClick={submit}>2</span>
                <span onClick={submit}>3</span>
                <span onClick={submit}>4</span>
                <span onClick={submit}>5</span>
                <span onClick={submit}>6</span>
                <span onClick={submit}>7</span>
                <span onClick={submit}> 8</span>
                <span onClick={submit}>9</span>
                <span onClick={submit}>10</span>
                </ol>
                   )}
                </div>
                {counter <= 16 && ( 
                    <footer style={style} className="foot"> </footer>
                )}
                    {counter > 16 && (
                <Result career={career}  
                        money={money}
                        per= {per}
                        rel= {rel}
                        fun = {fun}
                    physical = {physical} 
                    spirit = {spirit}
                    health = {health}


                />
            )}
             
                </div>
            )
            
}
 
export default Wheel;