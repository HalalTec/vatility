import { useState } from "react";

import next from '../next-bt.png';
import back from '../previous-bt.png'

const Revenue = ({close, msg, submit, quest}) => {
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [


        {
          "score": 1,
          "indication": [
            "Severe cash flow struggles; unable to cover basic expenses.",
            "Revenue is inconsistent or near zero.",
            "Heavy reliance on personal funds or debt to keep the business running."
          ],
          "reflectiveQuestions": [
            "Are you frequently behind on paying rent, salaries, or suppliers?",
            "Do you struggle to generate any significant sales or revenue?",
            "Is your business at risk of shutting down due to financial distress?"
          ],
          "aspiIndication": [
            "Barely covering basic operating costs.",
            "Irregular revenue streams.",
            "No clear financial strategy."
          ],
          "futureQuestions": [
            "Am I struggling to meet my basic expenses in the defined timeframe?",
            "Do I lack a stable, predictable revenue source?",
          ]
        },
        {
          "score": 2,
          "indication": [
            "Revenue is extremely low and unpredictable.",
            "Struggles to meet financial obligations on time.",
            "No financial buffer or reserves."
          ],
          "reflectiveQuestions": [
            "Do you have difficulty forecasting income for the next month?",
            "Are you constantly worried about how to cover upcoming expenses?",
            "Do you frequently need emergency loans or personal funds to survive?"
          ],
          "aspiIndication": [
            "Revenue covers essential expenses but little else.",
            "Cash flow is highly unpredictable.",
            "Some clients/customers, but insufficient volume."
          ],
          "futureQuestions": [
            "Will I still be in survival mode financially in the defined timeframe?",
            "Is my cash flow unstable with no backup plan?",
          ]
        },
        {
          "score": 3,
          "indication": [
            "Revenue is inconsistent, but some sales are coming in.",
            "Frequent cash shortages make growth difficult.",
            "Unable to reinvest into the business."
          ],
          "reflectiveQuestions": [
            "Do you find it hard to sustain operations without external help?",
            "Are you unable to pay yourself a regular salary?",
            "Do you often delay payments to suppliers or employees?"
          ],
          "aspiIndication": [
            "Slightly positive cash flow but fragile.",
            "Still dependent on personal funds or external support.",
            "Basic invoicing and expense tracking in place."
          ],
          "futureQuestions": [
            "Will I still be relying on external support to stay afloat in the defined timeframe?",
            "Am I just breaking even without much reinvestment ability?",
          ]
        },
        {
          "score": 4,
          "indication": [
            "Revenue is growing slowly but still unpredictable.",
            "Cash flow problems limit business operations.",
            "Some months are profitable, but others are difficult."
          ],
          "reflectiveQuestions": [
            "Do you have occasional good sales periods but struggle with downturns?",
            "Is your business reliant on one or two key clients for income?",
            "Are you forced to sacrifice long-term growth for short-term survival?"
          ],
          "aspiIndication": [
            "Revenue sustains operations but limits growth.",
            "More consistent client base but still experiencing cash flow gaps.",
            "Basic budgeting and forecasting efforts."
          ],
          "futureQuestions": [
            "Will I still be facing periods of cash shortages in the defined timeframe?",
            "Do I have difficulty setting aside reserves for growth?",
          ]
        },
        {
          "score": 5,
          "indication": [
            "Breaking even most months, but no consistent profit.",
            "Able to pay expenses but with little extra cash.",
            "Minor investments in growth, but financial pressure remains."
          ],
          "reflectiveQuestions": [
            "Can you cover all business expenses but have little left for growth?",
            "Are you generating revenue but still unable to save for emergencies?",
            "Do you have a basic cash flow management system in place?"
          ],
          "aspiIndication": [
            "Sustainable revenue covers business costs and a small buffer.",
            "Regular clients/customers providing some stability.",
            "Cash flow managed with minimal disruptions."
          ],
          "futureQuestions": [
            "Will I be financially stable but not yet in a strong growth phase in the defined timeframe?",
            "Do I still feel like I need to hustle every month just to maintain?",
          ]
        },
        {
          "score": 6,
          "indication": [
            "Revenue is stable, covering expenses with occasional profits.",
            "Able to make small but consistent investments in business growth.",
            "Moderate cash reserves for short-term emergencies."
          ],
          "reflectiveQuestions": [
            "Do you have a financial cushion to survive minor downturns?",
            "Are you able to invest in marketing or operations without financial strain?",
            "Is your revenue steadily increasing?"
          ],
          "aspiIndication": [
            "Predictable and growing revenue stream.",
            "Can afford to invest in business development.",
            "Cash reserves starting to build."
          ],
          "futureQuestions": [
            "Will I have enough recurring income to reinvest in my business confidently in the defined timeframe?",
            "Do I have a clear plan for scaling my revenue?",
          ]
        },
        {
          "score": 7,
          "indication": [
            "Consistent and growing revenue.",
            "Positive cash flow with strategic reinvestments.",
            "Can handle minor financial shocks without major disruptions."
          ],
          "reflectiveQuestions": [
            "Can you confidently project your income for the next 6 months?",
            "Are you reinvesting profits back into the business for sustainable growth?",
            "Do you have structured cash flow management and forecasting?"
          ],
          "aspiIndication": [
            "Profitable with multiple revenue streams.",
            "Cash flow projections are reliable.",
            "No longer concerned about monthly survival."
          ],
          "futureQuestions": [
            "Will my business generate revenue that allows for consistent reinvestment and innovation in the defined timeframe?",
            "Can I sustain operations without worrying about every expense?",
          ]
        },
        {
          "score": 8,
          "indication": [
            "Strong revenue streams with consistent profits.",
            "Business has financial stability and growth potential.",
            "Can fund new opportunities without risking core operations."
          ],
          "reflectiveQuestions": [
            "Do you have a clear growth strategy supported by healthy revenue?",
            "Are you building financial reserves for expansion and security?",
            "Can you invest in your business without worrying about cash shortages?"
          ],
          "aspiIndication": [
            "Strong profitability and reinvestment capability.",
            "Growing financial reserves and emergency funds.",
            "Scaling with automation or team expansion."
          ],
          "futureQuestions": [
            "Will I have financial security for my business to expand confidently in the defined timeframe?",
            "Do I have the ability to take strategic risks?",
          ]
        },
        {
          "score": 9,
          "indication": [
            "Excellent revenue with strong cash reserves.",
            "Can confidently scale business operations.",
            "No dependency on emergency funding."
          ],
          "reflectiveQuestions": [
            "Do you have multiple income streams reducing financial risk?",
            "Can your business withstand unexpected market downturns?",
            "Do you have excess funds to invest in future opportunities?"
          ],
          "aspiIndication": [
            "Business is generating surplus revenue beyond operational needs.",
            "Financially prepared for major investments.",
            "Cash flow stability allows focus on innovation."
          ],
          "futureQuestions": [
            "Will my revenue and cash flow position allow me to take bold expansion steps in the defined timeframe?",
            "Can I make large financial decisions without significant stress?",
          ]
        },
        {
          "score": 10,
          "indication": [
            "Highly profitable business with abundant cash reserves.",
            "Business can operate independently of the owner’s direct involvement.",
            "Clear financial strategy for long-term sustainability."
          ],
          "reflectiveQuestions": [
            "Can your business sustain operations for months without new income?",
            "Are you financially prepared for both expansion and downturns?",
            "Is your cash flow predictable, and do you have long-term financial security?"
          ],
          "aspiIndication": [
            "Revenue and cash flow provide complete financial freedom.",
            "Business is fully self-sustaining and wealth-generating.",
            "Strategic decisions are driven by vision, not financial constraints."
          ],
          "futureQuestions": [
            "Will my business be financially independent, allowing me to focus purely on vision and growth in the defined timeframe?",
            "Do I have long-term financial sustainability secured?"
          ]
        },
      
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



 
export default Revenue;