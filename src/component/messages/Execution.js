import { useState } from "react";

import next from '../next-bt.png';
import back from '../previous-bt.png'

const Execution = ({close, msg, submit, quest}) => {
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [

        {
            "score": 1,
            "indication": [
            "Constant overwhelm, lack of structured planning, tasks frequently missed or forgotten. ",
            "No clear prioritization, urgent matters dictate daily activities.", 
            "Workdays feel chaotic, and there’s little progress toward long-term goals." 
            ],
            "reflectiveQuestions": [
              "Do you frequently feel like there are too many tasks and not enough time?", 
                "Are you constantly firefighting with no time to plan ahead?", 
                "Do you frequently miss deadlines or forget important tasks?"
            ],
            "aspiIndication": [
              "Constant overwhelm and reactive decision-making.",
            "No structured planning or prioritization.",
            "Workdays feel chaotic with little meaningful progress."
            ],
            "futureQuestions": [
              "Do I frequently feel that my business runs me rather than me running my business?",
            "Do I struggle to identify what tasks are truly important?",
            "Is my time mostly spent firefighting rather than executing a clear plan?"
            ]
          },
          {
            "score": 2,
            "indication": [
              "Poor time management; frequent procrastination or distractions.", 
            "No system for tracking tasks or progress.", 
            "Often working long hours but not making meaningful progress"
            ],
            "reflectiveQuestions": [
              "Do you often work extra hours but still feel unproductive?", 
            "Do you lack a structured approach for managing tasks and priorities? ",
            "Are you constantly rescheduling tasks due to inefficiency?"
            ],
            "aspiIndication": [
              "Some awareness of productivity gaps but no clear system to fix them.",
            "Struggles with procrastination and distractions.",
            "Often runs out of time for high-value tasks."
            ],
            "futureQuestions": [
              "Do I find myself busy but not making real progress?",
            "Do I end most days feeling like I accomplished less than I intended?",
            "Do I have trouble focusing on one task for an extended period?"
            ]
          },
          {
            "score": 3,
            "indication": [
              "Some tasks get done, but mostly reactive rather than strategic. ",
                "Lack of delegation or automation, leading to founder burnout. ",
                "Business growth hindered by inefficiencies in execution."
            ],
            "reflectiveQuestions": [
              "Are you mostly reacting to urgent tasks instead of following a clear plan?", 
            "Do you struggle with delegation or automating repetitive tasks? ",
            "Does your business suffer from inefficiencies that could be improved?"
            ],
            "aspiIndication": [
              "Some attempts at scheduling but lacks consistency.",
            "Often sidetracked by non-essential tasks.",
            "Deadlines are frequently missed or rushed."
            ],
            "futureQuestions": [
              "Do I attempt to plan my time but often fail to follow through?",
            "Do I struggle to differentiate urgent tasks from important ones?",
            "Do I frequently underestimate how long tasks will take?"
            ]
          },
          {
            "score": 4,
            "indication": [
              "Some productivity habits exist, but execution is inconsistent.", 
            "Some planning is done, but often falls apart under pressure.", 
            "Occasional effective work sprints, but frequently disrupted by distractions."
            ],
            "reflectiveQuestions": [
              "Do you find that some days are productive, but others are completely unstructured?", 
            "Do you have a rough idea of your priorities but struggle to stick to them?", 
            "Are you making progress in managing your time, but it’s not yet sustainable?"
            ],
            "aspiIndication": [
              " Uses a to-do list or some form of planning but still struggles with execution.",
            "Some days feel productive, but many are still chaotic.",
            "Often feels drained due to lack of structured focus."
            ],
            "futureQuestions": [
              "Do I start each day with an idea of what to do but often get off track?",
            "Do I sometimes have productive days, but not consistently?",
            "Do I still find myself frequently handling avoidable emergencies?"
            ]
          },
          {
            "score": 5,
            "indication": [
              "Some structure in place, but execution fluctuates due to distractions. ",
            "Some prioritization of tasks, but not always followed through effectively.", 
            "Delegation and automation are improving but still underutilized."
            ],
            "reflectiveQuestions": [
              "Do you have a basic planning system but find yourself not always following it?", 
            "Do you sometimes work efficiently but struggle with maintaining consistency?", 
            "Do you feel like you’re making progress, but execution isn’t fully reliable yet?"
            ],
            "aspiIndication": [
              " Uses basic time-blocking or productivity methods but inconsistently.",
            "Has started setting priorities but execution is not yet optimized.",
            "Occasionally feels in control but still gets caught in unplanned work."
            ],
            "futureQuestions": [
              "Do I have some level of structure but still feel inefficient?",
            "Do I sometimes execute well but fall back into old habits?",
            "Do I find it hard to delegate or say no to low-value tasks?"
            ]
          },
          {
            "score": 6,
            "indication": [
              "Decent time management but still room for improvement.", 
            "Prioritization is improving, but urgent tasks still interrupt plans.", 
            "Some automation and delegation, but founder still doing more than necessary."
            ],
            "reflectiveQuestions": [
              "Do you feel in control of your time most of the time, but still get overwhelmed occasionally?", 
            "Are you delegating some tasks, but still handling too much yourself?", 
            "Do you have a time management system that works but isn’t fully optimized yet?"
            ],
            "aspiIndication": [
              "Consistently plans work using a system (e.g., calendar, task management).",
            "Knows the difference between urgent and important tasks.",
            "Productivity is improving, but there are still bottlenecks."
            ],
            "futureQuestions": [
              " Do I mostly stick to my planned schedule, though some tasks still slip?",
            "Am I getting better at avoiding distractions but not yet fully in control?",
            "Do I sometimes struggle to transition between deep work and urgent tasks?"
            ]
          },
          {
            "score": 7,
            "indication": [
              "Effective planning and prioritization, minimal distractions.", 
            "Strong execution, tasks are completed as planned most of the time. ",
            "Delegation and automation are used effectively."
            ],
            "reflectiveQuestions": [
              "  Do you rarely find yourself overwhelmed by your workload?", 
            "Are you executing your plans consistently with minimal disruptions?", 
            "Have you effectively delegated or automated a significant portion of non-critical tasks?"
            ],
            "aspiIndication": [
              "Has a structured system for prioritization and execution.",
                "Productivity habits (e.g., deep work, batching) are becoming natural",
                "Delegation is improving, freeing up time for high-impact work."
            ],
            "futureQuestions": [
              "Do I manage my time with a system that mostly works?",
            "Do I successfully protect time for strategic thinking and execution?",
            "Am I becoming proactive rather than reactive in managing my business?"
            ]
          },
          {
            "score": 8,
            "indication": [
              " Strong personal productivity system in place, well-structured execution.", 
            "Clear focus on high-value tasks, with distractions minimized.", 
            "Most operational tasks are automated or delegated."
            ],
            "reflectiveQuestions": [
              "Do you have a highly structured approach to execution and time management?", 
                "Are you consistently able to focus on strategic, high-impact tasks?", 
                "Do you feel in control of your schedule, rather than being controlled by it?"
            ],
            "aspiIndication": [
              "Highly disciplined in time management, balancing execution and strategy.",
            "Has automation, delegation, or assistants handling lower-value tasks.",
            "Rarely gets distracted by low-priority work."
            ],
            "futureQuestions": [
              "Do I rarely feel overwhelmed due to my structured approach?",
            "Am I focusing most of my time on work that moves my business forward?",
            "Do I have systems in place to ensure productivity continues even in my absence?"
            ]
          },
          {
            "score": 9,
            "indication": [
              "Near-flawless execution, extremely strong prioritization, and efficiency.",
            "Time management is proactive rather than reactive.", 
            "Almost all repetitive work is automated or delegated."
            ],
            "reflectiveQuestions": [
              "Do you rarely, if ever, get derailed by urgent but unimportant tasks?", 
            "Are you fully in control of your time, focusing on only the highest-value tasks?", 
            "Is your execution system nearly bulletproof, requiring little adjustment?"
            ],
            "aspiIndication": [
              "Mastery of productivity systems, ensuring optimal execution.",
            "Founder works mostly on high-leverage activities.",
            "Business can function efficiently without constant micromanagement."
            ],
            "futureQuestions": [
              "Do I spend most of my time on high-value activities?",
            "Do I have a reliable system that ensures execution happens with minimal stress?",
            "Can my team or systems execute well even when I step away?"
            ]
          },
          {
            "score": 10,
            "indication": [
              " Execution and time management operate at elite efficiency. ",
            "Founder has a full systemized approach that allows for continuous growth.", 
            "Business operations run smoothly without constant founder involvement."
            ],
            "reflectiveQuestions": [
              "Have you reached a point where your business runs smoothly even when you step away?", 
            "Is your productivity system so effective that you rarely feel overwhelmed?", 
            "Do you have the time and freedom to focus on long-term vision and innovation?"
            ],
            "aspiIndication": [
              " Time is used almost exclusively for strategic and visionary work.",
            "Execution is optimized through automation, delegation, and systems.",
            "Business thrives due to exceptional time and productivity management."
            ],
            "futureQuestions": [
              "Have I completely mastered my time and energy to maximize impact?",
            "Do I feel in control, working almost entirely on high-level strategy?",
            "Does my business run efficiently, even without my direct involvement?"
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



 
export default Execution;