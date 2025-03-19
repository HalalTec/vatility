import { useState } from "react";

import next from '../next-bt.png';
import back from '../previous-bt.png'

const Vision = ({close, msg, submit, quest}) => {
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [
        {
          score: 1,
          indication: [
            'No clear vision for the business.',
            'Strategy is non-existent or completely reactive.',
            'No clarity on long-term goals or purpose.'
          ],
          reflectiveQuestions: [
            'Do you have a written vision for your business?',
            'Can you articulate your long-term direction in one sentence?',
            'Are you constantly unsure about what to do next?'
          ],
          aspiIndication: [
            'No clear vision for the business.', 
            "Strategy is non-existent or purely reactive.", 
            "Uncertainty about the founder's role and long-term commitment."
          ],
          futureQuestions: [
                'Do I lack a defined vision for my business?', 
                'Am I unclear on the steps to achieve business sustainability?', 
                'Is my strategy mostly reactive rather than planned?'
            ]
        },
        {
            score: 2,
          indication: [
                    'Some loose ideas about vision, but no structured plan.',
                    'Strategy is inconsistent and changes often.',
                    'Struggle to define core business purpose'
          ],
          reflectiveQuestions: [
            'Can you define your core mission and purpose clearly?',
            'Do you find yourself changing directions frequently without clear reasoning?',
            'Are you struggling to explain your business direction to others?',
          ],
          aspiIndication: [
                'Some vague ideas about the business direction but no structured strategy.', 
                'Struggling to align daily actions with long-term goals.', 
                "Limited clarity on the founder's role and leadership impact."
          ],
          futureQuestions: [
                                'Do I have only a rough idea of my business direction?', 
                                'Are my daily actions disconnected from long-term growth? ',
                                'Do I struggle to define my leadership role in the business?'
          ]
        },  

        {
            score: 3,
            indication: [
                'Vision exists but lacks clarity and depth.',
                'Strategy is mostly reactive, with minimal long-term planning.',
                'Struggle to define key milestones.'
            ],
            reflectiveQuestions: [
                'Do you have a long-term goal but lack a structured plan to achieve it?',
                'Do short-term pressures constantly derail your business vision?',
                'Are you making decisions based on gut feeling rather than strategy?'
            ],
            aspiIndication: [
                    'A broad vision exists but lacks structure and execution plan.', 
                    'Unclear on differentiation or unique value proposition.', 
                    'Founder struggles with self-doubt and role clarity.'
            ],
            futureQuestions: [
                'Is my vision broad but lacking actionable structure?', 
                'Do I struggle to clearly define what makes my business unique? ',
                'Do I question my role or effectiveness as a founder?'

            ]
        },

        {
            score: 4,
            indication: [
                'Some vision elements are clear, but others are still vague.',
                'Strategy exists but is incomplete or inconsistently applied.',
                'Business goals are broad but lack measurable milestones.'
            ],
            reflectiveQuestions: [
                'Can you confidently explain your business vision to someone in 30 seconds?',
                'Do you have written goals with timelines?',
                'Are your daily actions aligned with your long-term strategy?'
            ],
            aspiIndication: [
                ' Some strategic planning efforts but inconsistent execution.', 
                'Awareness of industry trends but difficulty adapting.', 
                'Founder is working on clarity but still hesitant in decision-making.'
            ],
            futureQuestions: [
                'Do I have a strategy but struggle with consistent execution?', 
                'Am I aware of trends but unsure how to leverage them?', 
                'Do I find myself hesitating in key decisions about the business?'
            ]
        },
        {
            score: 5,
            indication: [
                'Vision is defined but not fully operationalized.',
                'Strategy is present but not consistently executed.',
                'Founder has some clarity but still faces doubt.'
            ],
            reflectiveQuestions: [
                'Do you have a clear vision but struggle with execution consistency?',
                'Are your decisions sometimes misaligned with your long-term goals?',
                'Is your business progressing, but without a structured roadmap?'
            ],
            aspiIndication: [
                'A written vision and some strategic initiatives in place.', 
                'Business direction is clearer, but execution remains a challenge.', 
                'Founder is gaining confidence but still seeks external validation.'                
            ],
            futureQuestions: [
                'Do I have a written vision but struggle with full execution?', 
                'Do I know where my business is going but lack a solid roadmap?', 
                'Do I feel more confident but still rely too much on external opinions?'
            ]
        },
        {
            score: 6,
            indication: [
                'Vision is clear and well-articulated.',
                'Strategy exists but needs refinement and better alignment.',
                'Some key milestones are achieved, but others are unclear.'
            ],
            reflectiveQuestions: [
                'Is your vision documented and shared with your team (if applicable)?',
                'Are your strategic priorities clear for the next 12 months?',
                'Are you making consistent progress, but feel there’s room for improvement?'
            ],
            aspiIndication: [
                ' Vision is clearly defined with a structured strategy.', 
                'Execution is improving but still facing bottlenecks.', 
                'Founder has better self-awareness and decision-making confidence.'
            ],
            futureQuestions: [
                'Do I have a structured strategy, even if execution has challenges?',
                "Am I addressing bottlenecks proactively? ",
                "Am I making decisions with growing confidence in my role?"
            ]
        },
        {
            score: 7,
            indication: [
                'Clear vision and strong strategic framework in place.',
                'Founder makes decisions aligned with long-term goals.',
                'Business growth is happening, but not at the optimal pace.'
            ],
            reflectiveQuestions: [
                'Do you have a documented strategy that you actively follow?',
                'Are most of your business decisions clearly linked to your vision?',
                'Are you achieving goals, but not as efficiently as you’d like?'
            ],
            aspiIndication: [
                    'A strong vision and well-articulated strategy exist.', 
                    'Execution is largely effective with minor inefficiencies.', 
                    'Founder is confident in leadership but still refining approach.', 
            ],
            futureQuestions: [
                'Do I have a strong vision and structured strategy that I actively use?', 
                'Is my execution effective, with only minor challenges?', 
                'Do I feel confident but recognize areas to refine my leadership?'
            ]
        }, {
            score: 8,
            indication: [
                'Vision is clear, inspiring, and consistently followed.',
                'Strategy is solid, with minor areas for improvement.',
                'Business is scaling or growing steadily.'
            ],
            reflectiveQuestions: [
                'Are you confident in your vision and its execution?',
                'Do you have a detailed, actionable roadmap guiding your business?',
                'Are most of your business goals being met as planned?'
            ],
            aspiIndication: [
                'Vision and strategy are fully aligned, guiding decision-making effectively.', 
                'Execution is smooth with only occasional adjustments needed.', 
                'Founder is confident, proactive, and inspiring to the team.',
            ],
            futureQuestions: [
                'Is my vision guiding my business decisions effectively?', 
                'Is execution running smoothly with only small tweaks required?', 
                'Do I lead with confidence and inspire others in my business?'
            ]
        },
        {
            score: 9,
            indication: [
                'Vision and strategy are well-aligned and actively guiding business.',
                'Growth is sustainable, and goals are being met consistently.',
                'Business operates with purpose and strategic intent.'
            ],
            reflectiveQuestions: [
                'Are you seeing predictable, sustainable business growth?',
                'Do you feel fully in control of your business direction?',
                'Are you refining rather than redefining your strategy?'
            ],
            aspiIndication: [
                'Vision, strategy, and execution are seamlessly integrated.', 
                'Founder is fully clear on their role and impact.', 
                'Business is positioned for sustainable scaling and growth.',
            ],
            futureQuestions: [
                'Have I fully aligned my vision, strategy, and execution?', 
                'Do I have complete clarity on my role and long-term impact?', 
                'Is my business structured to scale and grow sustainably?'
            ]
        },
        {
            score: 10,
            indication: [
                'Vision is crystal clear and inspiring to others.',
                'Strategy is well-defined, executed, and continuously refined.',
                'Business is thriving with clear strategic foresight'
            ],
            reflectiveQuestions: [
                'Do you feel like your business is operating at peak efficiency and alignment?',
                'Do others look to you for vision and strategic guidance?',
                'Is your long-term vision not just clear, but actively shaping industry trends?'
            ],
            aspiIndication: [
                'Vision and strategy are executed flawlessly, driving continuous innovation.',
                'Founder is fully in control, making high-impact decisions effortlessly.', 
                'The business operates with a clear purpose and competitive edge.' 
            ],
            futureQuestions: [
                'Do I feel completely in control of my business’s strategic direction?',
                'Am I making high-impact decisions with confidence and precision?', 
                'Is my business operating with purpose and maintaining a strong market position?'
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



 
export default Vision;