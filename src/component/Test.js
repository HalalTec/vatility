import {  useState } from "react";
import Career from "./Career";
import Result from "./Result";
import Carousel from "./Carousel";
import Message from "./Message";
import Warning from "./Warning";

const Test = ({selected}) => {
    const [warning, setWarning] = useState(false)
    const [val, setVal] = useState()
    const [counter, setCounter] = useState(1);
    const [style, setSty] = useState({backgroundColor: "#ED6A56"})
    const [p, setP] = useState("Vision, Strategy & Founder Clarity")
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
    const [item, setItem] = useState([ "Do you have a clear long-term vision and strategic direction for your business?",
                                        "Have you defined measurable goals that align with your vision and market opportunities?",
                                        "Do you regularly reassess and refine your strategy based on industry trends and internal progress?"])
    const tip =["Tip 1", "Tip 2", "Tip 3"]
    const [message, setMessage] = useState(false)
    const [msg, setMsg] = useState(0)
    const [check, setChecker] = useState(false)



    const confirm = (e) => {
        setMsg(e.target.textContent)
        setMessage(true)
   }
const confirmFuture = (e) => {
        setMsg(e.target.textContent)
        setChecker(true)
    }
   
    const submit = (e) => {
        e.preventDefault();
        let ans= e.target.textContent
        setCounter(counter + 1);
        setVal(ans)

        if (counter <= 2) {
            setCareer([...career, ans]);
            
        }

       
        if (counter === 2 && counter < 4) {
            setSty({ backgroundColor: "#F09B36" });
            setP("Product-Market Fit & Value Proposition");
       
            setItem([
                "Have you validated that your product or service solves a real problem for your target market?",
                "Does your value proposition clearly differentiate you from competitors in the industry?",
                "Do you have a process for gathering and implementing customer feedback to improve your offering?"
            ])
            
          
        } 
       if(counter > 2 && counter <= 4){ 
            setMoney([...money, ans]);

        }
        
        
         if (counter ===4 && counter < 6) {
            setSty({ backgroundColor: "#FFC74E" });
            setP("Revenue & Cash Flow");
            setItem([
                "Do you have a predictable and sustainable revenue model in place?",
                "Are you tracking key financial metrics to ensure positive cash flow and profitability?",
                "Have you identified opportunities to increase revenue through pricing, upselling, or new offerings?"
            ])
            
        } 
        
        if(counter > 4 && counter <= 6){ 
            setHealth([...health, ans]);

        }
        
        if (counter === 6 && counter < 8) {
            setSty({ backgroundColor: "#A0B470" });
            setP("Lead Generation & Sales Process");
            setItem([
                "Do you have a consistent system for attracting and converting leads into paying customers?",
                "Have you identified the most effective sales channels for your business?",
                "Are you optimizing your sales process based on data and customer feedback?"
            ])
        }
        
        if(counter > 6 && counter <= 8){ 
            setRel([...rel, ans]);

        }
        
        if (counter === 8 && counter < 10) {
            setSty({ backgroundColor: "#6E9E75" });
            setP("Brand Positioning & Differentiation");
            setItem([
                "Does your brand clearly communicate what makes you unique in the marketplace?",
                "Have you crafted a compelling brand story that resonates with your ideal customers?",
                "Are you consistently reinforcing your brand message across all touchpoints?"
            ])
        } 
        if(counter > 8 && counter <= 10){ 
            setPer((e) => [...e, ans]);
        }
        if (counter === 10 && counter < 12) {
            setSty({ backgroundColor: "#73CCE4" });
            setP("Execution, Productivity & Founder's Time Management");
            setItem([
                "Do you prioritize high-impact tasks that drive business growth?",
                "Have you developed productivity systems to manage your workload effectively?",
                "Are you delegating or automating tasks to free up time for strategic decisions?"
            ])
        } 
        if(counter > 10 && counter <= 12){ 
            setFun((p) => [...p, ans]);
        }
        
         if (counter === 12 && counter < 14) {
            setSty({ backgroundColor: "#869ACF" });
            setP("Network, Partnerships & Growth Leverage");
            setItem([
                "Are you actively building relationships with key stakeholders who can help your business grow?",
                "Do you have a strategy for leveraging partnerships to scale your reach and impact?",
                "Have you nurtured a strong support network of mentors, advisors, or peers?"
            ])

        } 

        if(counter > 12 && counter <= 14){ 
            setPhysical((res) => [...res, ans]);
        }

        if (counter === 14 && counter < 16) {
            setSty({ backgroundColor: "#895881" });
            setP("Business Model & Scalability");
            setItem([
                "Is your business model designed for long-term scalability and growth?",
                "Have you identified operational bottlenecks that may hinder scaling?",
                "Do you regularly evaluate and refine your business model based on market changes?"
            ])


        } 

        if(counter > 14 && counter <= 16){ 
            setSpirit((re) => [...re, ans]);
        }

         if (counter === 16 && counter < 18) {
            setSty({ backgroundColor: "#ff5733" });
            setP("Customer Experience & Retention");
            setItem([
                "Do you have a structured process for gathering and acting on customer feedback?",
                "Are you actively nurturing relationships with existing customers to increase retention?",
                "Have you identified ways to turn satisfied customers into brand advocates?"
            ])
        } 

        if(counter > 16 && counter <= 18){ 
            setPur((v) => [...v, ans]);
        }

         if (counter === 18 && counter < 20) {
            setSty({ backgroundColor: "#58261b" });
            setP("Mental Resilience & Founder Burnout Risk");
            setItem([
                "Do you have habits or routines that help you manage stress and prevent burnout?",
                "Are you balancing work demands with personal well-being and recovery time?",
                "Have you built a support system to navigate the emotional challenges of entrepreneurship?"
            ])
        }
        
        if(counter > 18 && counter <= 20){ 
            setCont((pr) => [...pr, ans]);
        }

       
            close()
    }

    const close = () => {
        setMessage(false)
        setWarning(false)
        setChecker(false)
    }
    
    


 
       
   
    

   

    

      
   

    return ( 
       
       <div>
                     {counter <= 20 && (   <header style={style}> {p}  </header> )}
                <div className="section">
                {counter === 1 && (
                <Career question="How clear and strategic is your vision for the business, and do you have a solid plan for execution?" />

            )}
           
                {counter === 2 && (
                <Career question="How clear and strategic do you want your vision to be for the business, and do you have a solid plan for execution in the next" select={selected}/>
            )}

        {counter === 3 && (
                <Career question=  "How well does your product or service solve a real, urgent problem for a defined audience, with strong validation from paying customers?" />
            )}
        {counter === 4 && (
                <Career question= "How well do you want your product or service solve a real, urgent problem for a defined audience, with strong validation from paying customersin the next" select={selected}/>
            )}
        {counter === 5 && (
                <Career question="How stable and sustainable is your revenue, ensuring your business runs without relying on personal savings?" />
            )}
        {counter === 6 && (
                <Career question={`How stable and sustainable do you want your revenue, ensuring your business runs without relying on personal savings in the next`} select={selected}/>
            )}
        {counter === 7 && (
                <Career question= "“How predictable and effective is your system for generating leads and converting them into paying customers?" />
            )}
        {counter === 8 && (
                <Career question= "“How predictable and effective do you want your system for generating leads and converting them into paying customers in the next" select={selected}/>
            )}
        {counter === 9 && (
                <Career question= "How well does your brand stand out, making it the obvious choice in your market rather than just another option?" />
            )}
        {counter === 10 && (
                <Career question={`How well do you want your brand stand out, making it the obvious choice in your market rather than just another option in the next`} select={selected} />
            )}
         {counter === 11 && (
                <Career question="How efficiently are you balancing strategic growth activities versus being stuck in daily operational tasks?" />
            )}
        {counter === 12 && (
                <Career question="How efficiently do you want your balancing strategic growth activities versus being stuck in daily operational tasks in the next" select={selected} />
            )}
        {counter === 13 && (
                <Career question="How well are you leveraging mentors, collaborators, and industry connections to accelerate business growth?" />
            )}
        {counter === 14 && (
                <Career question="How well do you want your leveraging mentors, collaborators, and industry connections to accelerate business growth in the next" select={selected} />
            )}
        {counter === 15 && (
                <Career question= "How sustainable and scalable is your business model, ensuring growth leads to more profits rather than more problems?" />
            )}
        {counter === 16 && (
                <Career question= "How sustainable and scalable do you want your business model, ensuring growth leads to more profits rather than more problems in the next" select={selected} />
            )}
        {counter === 17 && (
                <Career question="How strong is your ability to retain customers, generate repeat sales, and benefit from word-of-mouth referrals?" />
            )}
         {counter === 18 && (
                <Career question="How strong do you want your ability to retain customers, generate repeat sales, and benefit from word-of-mouth referrals in the next" select={selected}/>
            )}
         {counter === 19 && (
                <Career question= "How resilient are you in managing stress, maintaining motivation, and avoiding burnout while leading your business?" />
            )}
         {counter === 20 && (
                <Career question= "How resilient do you want to be in managing stress, maintaining motivation, and avoiding burnout while leading your business in the next" select={selected}/>
            )}
          
 
          {message === true && (< Message msg= {msg-1} close={close} p={p} submit={submit} quest={0} />)}
         {check === true && (< Message msg= {msg-1} close={close} p={p} submit={submit} quest={1} />)}
         {warning === true && (<Warning close={close}/>)}
            {counter <= 20 && ( 
                <>
                    {counter % 2 === 1 && (<Carousel items={item} tips = {tip}/>)}
                    <ol>
                    {counter % 2 === 1 &&( <>    
                <span onClick={confirm}> 1 </span>
                <span onClick={confirm}>2</span>
                <span onClick={confirm}>3</span>
                <span onClick={confirm}>4</span>
                <span onClick={confirm}>5</span>
                <span onClick={confirm}>6</span>
                <span onClick={confirm}>7</span>
                <span onClick={confirm}> 8</span>
                <span onClick={confirm}>9</span>
                <span onClick={confirm}>10</span>
                </>
                 )}
                 {counter % 2 != 1 &&( <>     
                    <span onClick={confirmFuture} style={{filter: 1 < val ? 'blur(2px)' : 'none',
                                        cursor: 1 < val ? 'not-allowed' : 'pointer',
                                        pointerEvents: 1 < val ? 'none' : 'auto'}}> 1 </span>
                <span onClick={confirmFuture} style={{filter: 2 < val ? 'blur(2px)' : 'none',
                                        cursor: 2 < val ? 'not-allowed' : 'pointer',
                                        pointerEvents: 2 < val ? 'none' : 'auto'}}>2</span>
                <span onClick={confirmFuture} style={{filter: 3 < val ? 'blur(2px)' : 'none',
                                        cursor: 3 < val ? 'not-allowed' : 'pointer',
                                        pointerEvents: 3 < val ? 'none' : 'auto'}}>3</span>
                <span onClick={confirmFuture} style={{filter: 4 < val ? 'blur(2px)' : 'none',
                                        cursor: 4 < val ? 'not-allowed' : 'pointer',
                                        pointerEvents: 4 < val ? 'none' : 'auto'}}>4</span>
                <span onClick={confirmFuture} style={{filter: 5 < val ? 'blur(2px)' : 'none',
                                        cursor: 5 < val ? 'not-allowed' : 'pointer',
                                        pointerEvents: 5 < val ? 'none' : 'auto'}}>5</span>
                <span onClick={confirmFuture} style={{filter: 6 < val ? 'blur(2px)' : 'none',
                                        cursor: 6 < val ? 'not-allowed' : 'pointer',
                                        pointerEvents: 6 < val ? 'none' : 'auto'}}>6</span>
                <span onClick={confirmFuture} style={{filter: 7 < val ? 'blur(2px)' : 'none',
                                        cursor: 7 < val ? 'not-allowed' : 'pointer',
                                        pointerEvents: 7 < val ? 'none' : 'auto'}}>7</span>
                <span onClick={confirmFuture} style={{filter: 8 < val ? 'blur(2px)' : 'none',
                                        cursor: 8 < val ? 'not-allowed' : 'pointer',
                                        pointerEvents: 8 < val ? 'none' : 'auto'}}> 8</span>
                <span onClick={confirmFuture} style={{filter: 9 < val ? 'blur(2px)' : 'none',
                                        cursor: 9 < val ? 'not-allowed' : 'pointer',
                                        pointerEvents: 9 < val ? 'none' : 'auto'}}>9</span>
                <span onClick={confirmFuture} style={{filter: 10 < val ? 'blur(2px)' : 'none',
                                        cursor: 10 < val ? 'not-allowed' : 'pointer',
                                        pointerEvents: 10 < val ? 'none' : 'auto'}}>10</span>
                </>
                 )}
                </ol>
                </>
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
                    selected = {selected}
                

                />
            )}
             
                </div>
            )
            
}
 
export default Test;