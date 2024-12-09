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
    const [p, setP] = useState("Know Yourself")
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
    const [item, setItem] = useState([ "Do you clearly understand your core values and strengths in the job market?",
                                        "Do your passions and interests align with the type of job you are seeking?",
                                        "Have you identified and started to challenge any limiting beliefs hindering your job search?"])
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
            setP("Do Research");
       
            setItem([
                "Have you developed effective strategies to gather insights about potential employers?",
                "Do you evaluate a company’s culture and values to determine if it’s a good fit for you?",
                "Have you found valuable resources to stay informed about industry trends and job market demands?"
            ])
            
          
        } 
       if(counter > 2 && counter <= 4){ 
            setMoney([...money, ans]);

        }
        
        
         if (counter ===4 && counter < 6) {
            setSty({ backgroundColor: "#FFC74E" });
            setP("Perfecting Your Resume and LinkedIn Profile");
            setItem([
                "Does your resume and LinkedIn profile clearly reflect your skills and personal brand?",
                "Have you tailored your resume and LinkedIn profile to match the roles you’re targeting?",
                "Have you received feedback on your resume and LinkedIn profile, and implemented changes based on it?"
            ])
            
        } 
        
        if(counter > 4 && counter <= 6){ 
            setHealth([...health, ans]);

        }
        
        if (counter === 6 && counter < 8) {
            setSty({ backgroundColor: "#A0B470" });
            setP("Networking Like a Pro");
            setItem([
                "Do you actively build and nurture relationships within your industry?",
                "Have you identified specific networking strategies that have been effective for you?",
                "Do you successfully leverage social media to expand your professional network?"
            ])
        }
        
        if(counter > 6 && counter <= 8){ 
            setRel([...rel, ans]);

        }
        
        if (counter === 8 && counter < 10) {
            setSty({ backgroundColor: "#6E9E75" });
            setP("Personal Branding & Thought Leadership");
            setItem([
                "Do you showcase your unique expertise or perspective through your personal brand?",
                "Are you engaging with your audience to establish yourself as a thought leader in your field?",
                "Does your online presence accurately reflect your personal and professional values?"
            ])
        } 
        if(counter > 8 && counter <= 10){ 
            setPer((e) => [...e, ans]);
        }
        if (counter === 10 && counter < 12) {
            setSty({ backgroundColor: "#73CCE4" });
            setP("Upskilling & Certification");
            setItem([
                "Have you identified the skills necessary for your desired role and pursued them?",
                "Do you prioritize certifications or courses based on your career goals?",
                "Have you overcome challenges in upskilling, such as time constraints or access to resources?"
            ])
        } 
        if(counter > 10 && counter <= 12){ 
            setFun((p) => [...p, ans]);
        }
        
         if (counter === 12 && counter < 14) {
            setSty({ backgroundColor: "#869ACF" });
            setP("Active Job Applications");
            setItem([
                "Do you use specific criteria to decide which job opportunities to apply for?",
                "Do you track metrics to evaluate the effectiveness of your job applications?",
                "Do your applications clearly reflect your enthusiasm and fit for each role?"
            ])

        } 

        if(counter > 12 && counter <= 14){ 
            setPhysical((res) => [...res, ans]);
        }

        if (counter === 14 && counter < 16) {
            setSty({ backgroundColor: "#895881" });
            setP("Tracking & Organization");
            setItem([
                "Do you have systems in place to keep your job search organized?",
                "Do you regularly evaluate your progress in the job search and make necessary adjustments?",
                "Have you found useful tools or resources to track your applications and networking efforts?"
            ])


        } 

        if(counter > 14 && counter <= 16){ 
            setSpirit((re) => [...re, ans]);
        }

         if (counter === 16 && counter < 18) {
            setSty({ backgroundColor: "#ff5733" });
            setP("Staying Energized, Persistent & Mentally Strong");
            setItem([
                "Do you have practices in place to maintain motivation and resilience during your job search?",
                "Have you found effective techniques to manage stress and uncertainty during the process?",
                "Do you prioritize self-care while balancing your job search with other responsibilities?"
            ])
        } 

        if(counter > 16 && counter <= 18){ 
            setPur((v) => [...v, ans]);
        }

         if (counter === 18 && counter < 20) {
            setSty({ backgroundColor: "#58261b" });
            setP("Mastery of Interview Preparation & Negotiation");
            setItem([
                "Do you prepare effectively for interviews to convey your value to potential employers?",
                'Have you practiced negotiation skills and feel comfortable negotiating your worth?',
                "Have you learned valuable lessons from past interview experiences that shape your current approach?"
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
                <Career question="How well do you understand your strengths, values, and career goals?" />

            )}
           
                {counter === 2 && (
                <Career question="How well do you want to understand your strengths, values, and career goals in the next" select={selected}/>
            )}

        {counter === 3 && (
                <Career question=  "How effectively do you research companies, roles, and industry trends relevant to your career?" />
            )}
        {counter === 4 && (
                <Career question= "How effectively do you want to research companies, roles, and industry trends relevant to your career in the next" select={selected}/>
            )}
        {counter === 5 && (
                <Career question="How confident are you in the quality and impact of your resume and LinkedIn profile?" />
            )}
        {counter === 6 && (
                <Career question={`How confidential do you want to be in the quality and impact of your resume and LinkedIn profile in the next`} select={selected}/>
            )}
        {counter === 7 && (
                <Career question= "How strong and effective is your professional network in supporting your job search?" />
            )}
        {counter === 8 && (
                <Career question= "How strong and effective do you want your professional network to be in supporting your job search in the next" select={selected}/>
            )}
        {counter === 9 && (
                <Career question= "How well do you showcase your expertise and build your personal brand in your field?" />
            )}
        {counter === 10 && (
                <Career question={`How well do you want to showcase your expertise and build your personal brand in your field in the next`} select={selected} />
            )}
         {counter === 11 && (
                <Career question="How proactive are you in acquiring new skills and certifications that align with your career objectives?" />
            )}
        {counter === 12 && (
                <Career question="How proactive do you want to be in acquiring new skills and certifications that align with your career objectives in the next" select={selected} />
            )}
        {counter === 13 && (
                <Career question="How consistent and strategic are you in submitting job applications for roles you are qualified for?" />
            )}
        {counter === 14 && (
                <Career question="How consistent and strategic do you want to be in submitting job applications for roles you are qualified for in the next" select={selected} />
            )}
        {counter === 15 && (
                <Career question= "How organized and efficient are you in managing and tracking your job search activities?" />
            )}
        {counter === 16 && (
                <Career question= "How organized and efficient do you want to be in managing and tracking your job search activities in the next" select={selected} />
            )}
        {counter === 17 && (
                <Career question="How well do you maintain your energy, persistence, and mental resilience during your job search?" />
            )}
         {counter === 18 && (
                <Career question="How well do you maintain your energy, persistence, and mental resilience during your job search in the next" select={selected}/>
            )}
         {counter === 19 && (
                <Career question= "How prepared and confident are you in your interview performance and negotiation skills?" />
            )}
         {counter === 20 && (
                <Career question= "How prepared and confident do you want to be in your interview performance and negotiation skills in the next" select={selected}/>
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