import {  useState } from "react";
import Career from "./Career";
import Result from "./Result";

const Wheel = () => {
    const [counter, setCounter] = useState(1);
    const [style, setSty] = useState({backgroundColor: "#ED6A56"})
    const [p, setP] = useState("Career and Professional Growth")
    const [career, setCareer] = useState([])
    const [health, setHealth] = useState([])
    const [money, setMoney] = useState([])
    const [per, setPer] = useState([])
    const [rel, setRel] = useState([])
    const [fun, setFun] = useState([])
    const [physical, setPhysical] = useState([])
    const [spirit, setSpirit] = useState([])
    const [cont, setCont] = useState([])
    const [pur, setPur] = useState([])

   
    const submit = (e) => {
        e.preventDefault();
        let ans= e.target.textContent
        setCounter(counter + 1);

        if (counter <= 2) {
            setCareer([...career, ans]);
            // console.log(counter)
            // console.log(career)
        }

       
        if (counter ===2 && counter < 4) {
            setSty({ backgroundColor: "#F09B36" });
            setP("Financial Health");
          
        } 
       if(counter > 2 && counter <= 4){ 
            setMoney([...money, ans]);
            console.log(counter)
            console.log(money)
        }
        
        
         if (counter ===4 && counter < 6) {
            setSty({ backgroundColor: "#FFC74E" });
            setP("Physical & Emotional Health");
            
        } 
        
        if(counter > 4 && counter <= 6){ 
            setHealth([...health, ans]);
            console.log(health);
            console.log(counter);
        }
        
        if (counter === 6 && counter < 8) {
            setSty({ backgroundColor: "#A0B470" });
            setP("Relationships and Social Life");
        }
        
        if(counter > 6 && counter <= 8){ 
            setRel([...rel, ans]);
            console.log(rel);
            console.log(counter);
        }
        
        if (counter === 8 && counter < 10) {
            setSty({ backgroundColor: "#6E9E75" });
            setP("Personal Growth");
        } 
        if(counter > 8 && counter <= 10){ 
            setPer((e) => [...e, ans]);
            console.log(counter);
        }
        if (counter === 10 && counter < 12) {
            setSty({ backgroundColor: "#73CCE4" });
            setP("Fun and Recreation");
        } 
        if(counter > 10 && counter <= 12){ 
            setFun((p) => [...p, ans]);
            console.log(counter);
        }
        
         if (counter === 12 && counter < 14) {
            setSty({ backgroundColor: "#869ACF" });
            setP("Living & Working Environment");
        } 

        if(counter > 12 && counter <= 14){ 
            setPhysical((res) => [...res, ans]);
            console.log(counter);
        }

        if (counter === 14 && counter < 16) {
            setSty({ backgroundColor: "#895881" });
            setP("Spirituality & Inner Growth");

        } 

        if(counter > 14 && counter <= 16){ 
            setSpirit((re) => [...re, ans]);
            console.log(counter);
        }

         if (counter === 16 && counter < 18) {
            setSty({ backgroundColor: "#895681" });
            setP("Purpose and Fulfillment");
        } 

        if(counter > 16 && counter <= 18){ 
            setPur((v) => [...v, ans]);
            console.log(counter);
        }

         if (counter === 18 && counter < 20) {
            setSty({ backgroundColor: "#895981" });
            setP("Contribution and Legacy");
        }
        
        if(counter > 18 && counter <= 20){ 
            setCont((pr) => [...pr, ans]);
            console.log(counter);
        }



    }

    return ( 
       
       <div>
                     {counter <= 20 && (   <header style={style}> {p}  </header> )}
                <div className="section">
                {counter === 1 && (
                <Career question="How do you feel about your career and professional growth right now?"/>
            )}
                {counter === 2 && (
                <Career question=" How would you like to feel about your career and professional growth in the future?" />
            )}

        {counter === 3 && (
                <Career question=" How do you feel about your financial health right now?" />
            )}
        {counter === 4 && (
                <Career question="How would you like to feel about your financial health in the future?" />
            )}
        {counter === 5 && (
                <Career question="How do you feel about your physical & emotional health right now?" />
            )}
        {counter === 6 && (
                <Career question="How would you like to feel about your Physical & Emotional Health in the future?" />
            )}
        {counter === 7 && (
                <Career question="How do you feel about your relationships and social life right now?" />
            )}
        {counter === 8 && (
                <Career question="How would you like to feel about your relationships and social life in the future?" />
            )}
        {counter === 9 && (
                <Career question="How do you feel about your personal growth right now?" />
            )}
        {counter === 10 && (
                <Career question="How would you like to feel about your personal growth in the future?" />
            )}
         {counter === 11 && (
                <Career question="How do you feel about your fun and recreation right now?" />
            )}
        {counter === 12 && (
                <Career question="How would you like to feel about your fun and recreation in the future?" />
            )}
        {counter === 13 && (
                <Career question="How do you feel about your living & working environment right now?" />
            )}
        {counter === 14 && (
                <Career question="How would you like to feel about your living & working wnvironment in the future?" />
            )}
        {counter === 15 && (
                <Career question="How do you feel about your spirituality & inner growth right now?" />
            )}
        {counter === 16 && (
                <Career question="How would you like to feel about your spirituality & inner growth in the future?" />
            )}
        {counter === 17 && (
                <Career question="How do you feel about your purpose and fullfillment right now?" />
            )}
         {counter === 18 && (
                <Career question="How would you like to feel about your purpose and fullfillment in the future?" />
            )}
         {counter === 19 && (
                <Career question="How do you feel about your contribution and legacy right now?" />
            )}
         {counter === 20 && (
                <Career question="How would you like to feel about your contribution and legacy in the future?" />
            )}
           

            {counter <= 20 && ( 
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
                    {counter > 20 && (
                <Result career={career}  
                        money={money}
                        per= {per}
                        rel= {rel}
                        fun = {fun}
                    physical = {physical} 
                    spirit = {spirit}
                    health = {health}
                    contribution = {cont}
                    purpose = {pur}
                

                />
            )}
             
                </div>
            )
            
}
 
export default Wheel;