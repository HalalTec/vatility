import { useState } from "react";

import next from '../next-bt.png';
import back from '../previous-bt.png'

const Business = ({close, msg, submit, quest}) => {
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [
            {
              "score": 1,
              "indication": [
                "No clear business model.",
                "Revenue is inconsistent or non-existent.",
                "No repeat customers or stable demand."
              ],
              "reflectiveQuestions": [
                "Do I have a structured way to generate revenue?",
                "Can I clearly explain how my business creates and captures value?",
                "Do I have any recurring customers?"
              ],
              "aspiIndication": [
                "No structured business model, struggling to generate consistent revenue, uncertain about customer demand"
              ],
              "futureQuestions": [
                "Will I still be testing whether my business idea is viable?", 
                "Am I unsure about how to generate consistent revenue?"
              ]
            },
            {
              "score": 2,
              "indication": [
                "Business model exists but is unclear or unproven.",
                "Heavy reliance on a few clients for survival.",
                "No clear pricing strategy."
              ],
              "reflectiveQuestions": [
                "If I lose my biggest client today, will my business survive?",
                "Is my revenue model sustainable for the long term?",
                "Have I thought about how to grow without burning out?"
              ],
              "aspiIndication": [
                "Basic revenue streams exist, but unpredictable cash flow. No clear plan for scaling."
              ],
              "futureQuestions": [
                "Will my business still heavily rely on one-time sales or a few clients for survival?", 
                "Am I lacking a clear strategy to grow my business beyond its current size?"
              ]
            },
            {
              "score": 3,
              "indication": [
                "Business has revenue but is unpredictable.",
                "Struggles to cover costs consistently.",
                "Lacks operational efficiency."
              ],
              "reflectiveQuestions": [
                "Is my revenue stable enough to pay myself and my team consistently?",
                "Do I have a process for acquiring new customers, or is it random?",
                "Do I spend most of my time fixing urgent problems?"
              ],
              "aspiIndication": [
                "Business model exists but is informal or unstructured, with inconsistent profitability. Limited scalability due to reliance on the founder."
              ],
              "futureQuestions": [
                "Will my business model still be unclear or dependent on me for most operations?", 
                "Will I struggle to consistently reinvest in growth due to financial instability?"
              ]
            },
            {
              "score": 4,
              "indication": [
                "Revenue is somewhat predictable but fluctuates heavily.",
                "Some repeat customers but no solid retention strategy.",
                "No clear path to expanding market reach."
              ],
              "reflectiveQuestions": [
                "If I step away for a month, will my business still generate revenue?",
                "Do I have a clear customer acquisition strategy that works consistently?",
                "Is my pricing structured or just based on what customers will pay?"
              ],
              "aspiIndication": [
                "Revenue streams are more stable, but business is still founder-driven with little automation or delegation."
              ],
              "futureQuestions": [
                "Will my business still depend on me for most critical operations?", 
                "Will I lack systems or processes that allow me to scale effectively?"
              ]
            },
            {
              "score": 5,
              "indication": [
                "Business model works but is not yet optimized.",
                "Some recurring revenue streams exist.",
                "Some systems are in place but scaling is still unclear."
              ],
              "reflectiveQuestions": [
                "Do I have processes that allow me to handle more clients without stress?",
                "Am I making money but feel stretched too thin to grow?",
                "Have I documented any standard procedures for my business?"
              ],
              "aspiIndication": [
                "Defined business model with repeatable revenue streams. Some delegation, but limited ability to scale beyond current size."
              ],
              "futureQuestions": [
                "Will my business be profitable but still face challenges in growing beyond my immediate market?", 
                "Will I have started delegating but still struggle to scale without my direct involvement?"
              ]
            },
            {
              "score": 6,
              "indication": [
                "Business is profitable but not highly efficient.",
                "Customer retention is improving.",
                "Some automation or delegation exists, but not fully optimized."
              ],
              "reflectiveQuestions": [
                "Do I have systems in place that allow me to serve more customers without proportional increases in effort?",
                "Can my business run for a few weeks without me handling everything?",
                "Do I see opportunities for growth, but I'm unsure how to execute them?"
              ],
              "aspiIndication": [
                "Business has repeatable and scalable revenue streams, with some automation and team involvement. Plans exist for expansion."
              ],
              "futureQuestions": [
                "Will I have a solid foundation but still need to optimize systems and processes to scale efficiently?", 
                "Will my business be moving beyond survival mode into a growth phase?"
              ]
            },
            {
              "score": 7,
              "indication": [
                "Business has a working, replicable model.",
                "Customers are regularly returning and referring others.",
                "Business is not dependent on a single person."
              ],
              "reflectiveQuestions": [
                "Do I have predictable revenue from multiple sources?",
                "Have I started implementing systems that allow me to scale?",
                "Am I attracting new customers without relying only on referrals?"
              ],
              "aspiIndication": [
                "Business model is well-documented and optimized for growth. Scaling strategies (new markets, automation, partnerships) are in motion."
              ],
              "futureQuestions": [
                "Will I be executing a clear, structured growth plan with increasing momentum?", 
                "Will my business operate effectively even if I step away for a short period?"
              ]
            },
            {
              "score": 8,
              "indication": [
                "Business is profitable and growing sustainably.",
                "Systems and automation reduce dependence on owner.",
                "Expansion efforts (new markets, more offerings) are working."
              ],
              "reflectiveQuestions": [
                "Can my business continue growing without me being involved in every decision?",
                "Are my customers highly engaged and helping me grow through referrals and repeat business?",
                "Have I successfully launched new products/services without struggling?"
              ],
              "aspiIndication": [
                "Business is expanding successfully with a proven and adaptable model. Revenue is predictable, and key operations run without founder dependence."
              ],
              "futureQuestions": [
                "Will I have a growing, scalable business with systems in place that allow me to focus on strategic growth instead of daily operations?",
                "Will I have successfully diversified revenue streams to mitigate risks?"
              ]
            },
            {
              "score": 9,
              "indication": [
                "The business is not just growing but scaling efficiently.",
                "Revenue and profits increase without proportional increases in effort/costs.",
                "The team operates well with clear leadership and minimal supervision."
              ],
              "reflectiveQuestions": [
                "Can I increase revenue significantly without a huge increase in costs?",
                "Do I have a leadership team that can run things without my daily input?",
                "Do I have strong brand positioning and market presence?"
              ],
              "aspiIndication": [
                "Business is highly scalable, with strong automation, leadership delegation, and potential for rapid expansion. Market positioning is strong."
              ],
              "futureQuestions": [
                "Will I have built a business that can grow exponentially without my direct involvement in daily operations?", 
                "Will I have a model that can be easily replicated or expanded into new markets?"
              ]
            },
            {
              "score": 10,
              "indication": [
                "The business is fully scalable and operates like a well-oiled machine.",
                "Revenue, team, and operations are growing independently of the owner.",
                "Strong market presence and industry authority."
              ],
              "reflectiveQuestions": [
                "If I step away completely, will my business continue thriving?",
                "Is my brand well-known and trusted in my industry?",
                "Have I built a business model that can scale internationally or across multiple industries?"
              ],
              "aspiIndication": [
                "Business is a self-sustaining, scalable entity with multiple revenue streams and a strong leadership team. It can grow independently and is potentially exit-ready."
              ],
              "futureQuestions": [
                "Will my business be thriving, with leadership and systems in place that allow it to scale without my direct involvement?", 
                "Will my business be positioned for high-value partnerships, acquisition, or significant market expansion?"
              ]
            }
          ,
      
        {
            score: 10,
            indication: 'Exceptional spiritual connection, profound inner peace, complete alignment with purpose, deeply fulfilling spiritual practices, strong sense of transcendence.',
            reflectiveQuestions: [
                'Do you feel a profound, unbreakable connection to your spirituality and purpose?',
                'Are you consistently at peace, with a deep sense of fulfillment and clarity?',
                'Does your spirituality define and elevate your daily life?'


            ]
        }

      ];

      const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
      };
    
      const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + categories.length) % categories.length);
      };
      

      
      if (quest < 1) {
        return ( 
            <>
                       <div className="message" >
                    <div className="card"> 
                    <div className="confirm">
                    <h2> Confirm Your Selection of: {categories[currentIndex].score} </h2>
                    <button onClick={close} style={{color:"red"}} className="close">X</button>
                    </div>  
                    <h5 style={{color:"red"}}>Go through the description below and confirm your selection, or use the page controls to make changes</h5>
                    <h3>Indicators for level {currentIndex+1}:</h3>
                    <p style={{fontSize:"15px"}}> {categories[currentIndex].indication} </p>
                    <h3> Reflective Questions:</h3>
                    <ul style={{textAlign:"left"}}>
                    <li style={{listStyle:"disc"}}> {categories[currentIndex].reflectiveQuestions[0]}</li>
                    <li style={{listStyle:"disc"}}> {categories[currentIndex].reflectiveQuestions[1]}</li>
                    <li style={{listStyle:"disc"}}> {categories[currentIndex].reflectiveQuestions[2]}</li>
                    </ul>
                    <div className="ref-button">
                    <button onClick={prevSlide} className=" prev" style={{marginTop:"0px"}}><img src={back}  /></button> <button  id="myButton" onClick={submit} >{currentIndex+1}</button>
                    
                    <label htmlFor="myButton" className="select"> Confirm {currentIndex+1}</label> <button onClick={nextSlide} className=" prev" style={{marginTop:"0px"}}><img src={next} /></button>
                    </div>
                    </div>
                </div>
                </>
        )
      }else {
        return (<> 
        
            {/* future */}
                  <div className="message" >
               <div className="card"> 
               <div className="confirm">
               <h2> Confirm Your Selection of: {categories[currentIndex].score} </h2>
               <button onClick={close} style={{color:"red"}} className="close">X</button>
               </div>
               <h5 style={{color:"red"}}>Go through the description below and confirm your selection, or use the page controls to make changes</h5>
               <h3>Aspirational Indicators {currentIndex+1}:</h3>
               <ul style={{textAlign:"left"}}>
               {categories[currentIndex].aspiIndication.map((indication, index) => (
                   <li key={index} style={{ listStyle: "disc" }}>
                   {indication}
                   </li>
               ))}
               </ul>
               <h3> Reflective Questions:</h3>
               <ul style={{textAlign:"left"}}>
               {categories[currentIndex].futureQuestions.map((indication, index) => (
                   <li key={index} style={{ listStyle: "disc" }}>
                   {indication}
                   </li>
               ))}
               </ul>                
               <div className="ref-button">
               <button onClick={prevSlide} className=" prev" style={{marginTop:"0px"}}><img src={back}  /></button> <button  id="myButton" onClick={submit} >{currentIndex+1}</button>
               
               <label htmlFor="myButton" className="select"> Confirm {currentIndex+1}</label> <button onClick={nextSlide} className=" prev" style={{marginTop:"0px"}}><img src={next} /></button>
               </div>
               </div>
           </div>
           </>
           
       
    );
     }
   

          
}



 
export default Business;