import { useState } from "react";

import next from '../next-bt.png';
import back from '../previous-bt.png'

const Mental = ({close, msg, submit, quest}) => {
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [

            {
              "score": 1,
              "indicator": [
                "Severe exhaustion, mental fog, and constant overwhelm.",
                "Regular thoughts of quitting.",
                "Persistent anxiety or depression symptoms."
              ],
              "reflectiveQuestions": [
                "Have I received complaints but not acted on them?",
                "Do I struggle to retain any customers beyond their first purchase?",
                "Is my customer service reactive rather than proactive?"
              ],
              "aspiIndication": [
                "I frequently feel overwhelmed and mentally exhausted.",
                "I have little to no strategies for managing stress.",
                "Burnout feels inevitable or has already set in.",
                "My emotional state often impacts my ability to make sound business decisions."
              ],
              "futureQuestions": [
                "Do I often feel like quitting my business due to mental exhaustion?",
                "Have I struggled to find ways to manage stress effectively?",
                "In the defined timeframe, do I expect my resilience to remain low despite my efforts?"
              ]
            },
            {
              "score": 2,
              "indicator": [
                "Near-constant stress with little to no relief.",
                "Struggling to make even basic decisions.",
                "Frequent emotional outbursts or detachment."
              ],
              "reflectiveQuestions": [
                "Do I rarely engage with customers beyond the initial sale?",
                "Are most of my reviews or feedback neutral or negative?",
                "Do customers leave without giving a reason?"
              ],
              "aspiIndication": [
                "I acknowledge my high burnout risk but don’t yet have a plan to address it.",
                "Stress frequently disrupts my focus and decision-making.",
                "I lack a consistent recovery strategy when overwhelmed."
              ],
              "futureQuestions": [
                " Am I aware of my burnout risk but unsure of how to reduce it?",
                "Have I tried stress management techniques but struggled with consistency?",
                "Do I expect my ability to handle setbacks to remain weak in the defined timeframe?"
              ]
            },
            {
              "score": 3,
              "indicator": [
                "High stress most of the time, with occasional relief.",
                "Struggling to sustain motivation and focus.",
                "Increased irritability or frustration."
              ],
              "reflectiveQuestions": [
                "Do I respond to customers only when they reach out?",
                "Is my customer service inconsistent or slow?",
                "Do I lack a structured way to track customer satisfaction?"
              ],
              "aspiIndication": [
                "I am beginning to explore ways to improve my mental resilience.",
                "I occasionally manage stress well but still experience frequent dips in energy and motivation.",
                "I recognize burnout triggers but struggle to prevent them."
              ],
              "futureQuestions": [
                "Have I started learning about mental resilience but not fully applied what I know?",
                "In the defined timeframe, do I expect to make only minor improvements in handling stress?",
                "Do I still struggle to detach emotionally from business challenges?"
              ]
            },
            {
              "score": 4,
              "indicator": [
                "Feeling overworked but managing to push through.",
                "Some signs of burnout, such as frequent exhaustion or lack of enthusiasm.",
                "Difficulty unplugging from work, even during rest periods."
              ],
              "reflectiveQuestions": [
                "Do I occasionally reach out to past customers but without a clear system?",
                "Is my customer retention more by chance than strategy?",
                "Do I have a small but growing number of repeat customers?"
              ],
              "aspiIndication": [
                "I have identified stress management techniques but don’t use them consistently.",
                "I sometimes detach from work, but guilt or urgency often pulls me back.",
                "I am aware of my mental limits but occasionally push beyond them unsustainably."
              ],
              "futureQuestions": [
                "Have I started setting boundaries but find it hard to stick to them?",
                "In the defined timeframe, do I expect to implement stress management strategies inconsistently?",
                "Can I identify my early burnout signs but still struggle to act on them?"
              ]
            },
            {
              "score": 5,
              "indicator": [
                "Work stress is frequent but manageable.",
                "Occasional feelings of burnout but able to recover.",
                "Has some support systems but does not use them effectively."
              ],
              "reflectiveQuestions": [
                "Do I make an effort to acknowledge and appreciate loyal customers?",
                "Do I have a process for handling customer feedback?",
                "Do I collect and act on customer feedback regularly?"
              ],
              "aspiIndication": [
                "I have basic routines that support mental resilience but haven’t optimized them.",
                "I am developing awareness of my work-life balance needs.",
                "Burnout risk is moderate, but I sometimes ignore early warning signs."
              ],
              "futureQuestions": [
                "Have I made some progress in managing stress but still feel at risk of burnout?",
                "In the defined timeframe, do I expect my mental resilience to be stronger but not fully reliable?",
                "Can I maintain focus under stress but only for short periods?"
              ]
            },
            {
              "score": 6,
              "indicator": [
                "Stress levels fluctuate but generally remain under control.",
                "Takes intentional breaks to reset when needed.",
                "Has some healthy boundaries but struggles to enforce them."
              ],
              "reflectiveQuestions": [
                "Do I offer some form of incentive for repeat business?",
                "Is my customer experience predictable but not yet exceptional?",
                "Do customers praise my business for excellent service?"
              ],
              "aspiIndication": [
                " I consistently use at least one effective stress management technique.",
                "I have a support system (mentors, peers, or professionals) to help when I feel overwhelmed.",
                "My resilience is improving, but setbacks still shake me more than I’d like."
              ],
              "futureQuestions": [
                "Have I developed at least one reliable method for managing stress?",
                "In the defined timeframe, do I expect to be able to bounce back from setbacks faster?",
                "Can I separate my identity from my business more effectively than before?"
              ]
            },
            {
              "score": 7,
              "indicator": [
                "Generally resilient but has occasional periods of high stress.",
                "Maintains a reasonable work-life balance.",
                "Has a support system and uses it when needed."
              ],
              "reflectiveQuestions": [
                "Do I actively engage customers beyond transactions?",
                "Is my customer service team (or myself) responsive and effective?",
                "Do I have a structured system that encourages repeat business?"
              ],
              "aspiIndication": [
                " I have multiple strategies to prevent burnout and use them regularly.",
                "I handle stress better than before, and my recovery time from setbacks is shorter.",
                "I have built a strong personal resilience routine that includes rest, reflection, and recharging."
              ],
              "futureQuestions": [
                "Can I handle business pressures without feeling constantly drained?",
                "In the defined timeframe, do I expect to have solid resilience routines that prevent burnout?",
                "Can I confidently balance my personal well-being with business demands?"
              ]
            },
            {
              "score": 8,
              "indicator": [
                "Strong mental resilience with rare instances of overwhelm.",
                "Can manage stress effectively through established habits.",
                "Regularly disconnects from work to recharge."
              ],
              "reflectiveQuestions": [
                "Do customers refer others to my business?",
                "Do I have a strong base of loyal advocates?",
                "Do customers enthusiastically promote my business?"
              ],
              "aspiIndication": [
                "Can I handle business pressures without feeling constantly drained?",
                "In the defined timeframe, do I expect to have solid resilience routines that prevent burnout?",
                "Can I confidently balance my personal well-being with business demands?"
              ],
              "futureQuestions": [
                "Do I proactively manage my energy levels and emotional state?",
                "In the defined timeframe, do I expect to remain mentally strong in the face of business challenges?",
                "Can I detach from work without feeling guilty or anxious?"
              ]
            },
            {
              "score": 9,
              "indicator": [
                "Excellent mental resilience with minimal burnout risk.",
                "Effectively manages stress and adapts to challenges.",
                "Work-life balance is well-structured."
              ],
              "reflectiveQuestions": [
                "Do I rarely deal with customer complaints?",
                "Do I have an efficient, seamless experience at every touchpoint?",
                "Is my business known for an outstanding customer experience?"
              ],
              "aspiIndication": [
                " I have mastered the ability to maintain balance, resilience, and emotional stability.",
                "I view challenges as opportunities for growth rather than stressors.",
                "My burnout risk is minimal because I have deeply ingrained resilience habits."
              ],
              "futureQuestions": [
                "Have I developed an unshakable mindset that allows me to thrive under pressure?",
                "In the defined timeframe, do I expect to have near-total control over my emotional and mental resilience?",
                "Can I perform at a high level consistently without burnout concerns?"
              ]
            },
            {
              "score": 10,
              "indicator": [
                "Mastery of mental resilience with no significant burnout risk.",
                "Thrives under pressure and quickly recovers from stress.",
                "Has a well-balanced, fulfilling life beyond work."
              ],
              "reflectiveQuestions": [
                "Are customers deeply loyal and willing to pay a premium for my service?",
                "Is my retention strategy so effective that it runs with minimal effort?",
                "If I step away completely, will my business continue thriving?"
              ],
              "aspiIndication": [
                "I have achieved peak mental resilience and burnout prevention.",
                "Stress is a tool I use strategically rather than something that controls me.",
                "My emotional and mental stability are unwavering regardless of external circumstances."
              ],
              "futureQuestions": [
                "Have I reached a point where burnout is no longer a threat to my business success?",
                "In the defined timeframe, do I expect to maintain full mental clarity and resilience under all conditions?",
                "Can I teach others how to master mental resilience based on my own experience?"
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



 
export default Mental;