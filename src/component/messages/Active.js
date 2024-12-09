import { useState } from "react";

import next from '../next-bt.png';
import back from '../previous-bt.png'

const Active = ({close, msg, submit, quest}) => {
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [
        {
          score: 1,
          indication: [
            'No active applications submitted',
            'No networking or outreach efforts',
            'Feeling overwhelmed by the job search process'
          ],
          reflectiveQuestions: [
            'What specific barriers are preventing you from applying for jobs?',
            'How do you feel about your current job search strategy?',
            'What support do you need to start taking action?'
          ],
          aspiIndication: [
            'Little to no active job applications in progress.',
            'Uncertainty or lack of motivation to begin applying', 
            ' No clear plan or strategy for job applications.'
          ],
          futureQuestions: [
                'How many job applications have I submitted in the last month?',
                'What are the primary barriers preventing me from starting my job search?',
                'Do I feel overwhelmed by the job search process? Why or why not?'
            ]
        },
        {
            score: 2,
          indication: [
                    'Only a few applications submitted',
                    'Minimal engagement with job boards',
                    'Limited understanding of job market trends'
          ],
          reflectiveQuestions: [
            'What has stopped you from applying to more positions?',
            "Are there particular roles or companies you're avoiding? Why?",
            'How confident do you feel in your ability to secure interviews?',
          ],
          aspiIndication: [
                'Acknowledging the need to apply but struggling to start consistently.', 
                'Rarely submitting applications, but becoming more aware of the need. ',
                'Limited research or preparation before applying.'
          ],
          futureQuestions: [
                                'How often do I find myself ready to apply but then postpone or avoid it?',
                                'Have I made a list of companies or job roles I would like to apply to?',
                                'What can I do today to prepare for applying to at least one position?'
          ]
        },  

        {
            score: 3,
            indication: [
                ' Some applications submitted, but no responses',
                'Occasional networking attempts',
                'Limited feedback received on applications'
            ],
            reflectiveQuestions: [
                'How do you feel about the quality of your applications?',
                'What feedback have you received, and how can you use it to improve?',
                'Are there specific skills or experiences you think are lacking in your applications?'
            ],
            aspiIndication: [
                    'Sporadic job applications, without much organization.',
                    'Starting to apply but lacking consistency or follow-through.', 
                    'Developing a basic job search strategy but not yet fully active.'
            ],
            futureQuestions: [
                'How many job applications have I completed in the last month?',
                'What has made it hard for me to be more consistent in applying for jobs?',
                'What is one thing I can do to improve my application consistency?'

            ]
        },

        {
            score: 4,
            indication: [
                'A steady number of applications sent',
                'Some networking connections made',
                'A few interviews scheduled but no offers yet'
            ],
            reflectiveQuestions: [
                'What aspects of your applications do you believe are working well?',
                'How do your networking efforts align with your job search goals?',
                'What have you learned from the interview process so far?'
            ],
            aspiIndication: [
                'Applying to a few jobs regularly but still not reaching an ideal number.',
                'Gradually improving consistency but still limited in scope or targeting.',
                'Building a strategy but may not be fully committed or confident yet.'
            ],
            futureQuestions: [
                'How many applications have I submitted in the last week or two?',
                'How often do I find myself applying to jobs that match my skills and interests?',
                'What areas of my job search strategy need more development to become more focused?'
            ]
        },
        {
            score: 5,
            indication: [
                ' Regular applications sent, with some responses',
                'Networking is becoming more consistent',
                'A few interviews leading to constructive feedback'
            ],
            reflectiveQuestions: [
                'What strategies have improved your application success rate?',
                'How are you leveraging your network for job opportunities?',
                'What areas of your interview skills do you want to enhance?'
            ],
            aspiIndication: [
                'Regularly applying to jobs but may not be tailoring applications as well as possible.', 
                'Beginning to track applications and follow up on them.', 
                'Engaging in some job search-related activities (networking, refining CV, etc.).'                
            ],
            futureQuestions: [
                'How much time am I dedicating to researching and customizing my applications?',
                'What steps can I take to increase the quality of my job applications?',
                'How can I improve the follow-up process after submitting an application?'
            ]
        },
        {
            score: 6,
            indication: [
                ' Consistent applications leading to interviews',
                'Actively participating in networking events',
                'Positive feedback from peers and mentors'
            ],
            reflectiveQuestions: [
                'What factors contribute to your current level of satisfaction with the job search?',
                "How can you build on the positive feedback you've received?",
                'Are there additional resources or tools that could assist you further?'
            ],
            aspiIndication: [
                'Applying to several jobs weekly with a more targeted approach',
                'Tailoring resumes and cover letters for each job to increase chances of success.',
                'Actively seeking out job opportunities that match my skills and goals.'
            ],
            futureQuestions: [
                'How many applications have I submitted this week?',
                'How well do I feel my applications are reflecting the skills required by the roles I’m targeting?',
                "How can I ensure I'm focusing on roles that align with my career aspirations?"
            ]
        },
        {
            score: 7,
            indication: [
                ' Multiple interviews secured with some offers pending',
                'Strong networking relationships established',
                'Good understanding of personal branding and resume effectiveness'
            ],
            reflectiveQuestions: [
                'What strategies have been most effective in securing interviews?',
                "How do you feel about the offers you're receiving compared to your expectations?",
                'In what ways can you further strengthen your personal brand?'
            ],
            aspiIndication: [
                    'Consistently applying to jobs with a clear focus on quality over quantity.',
                    'Have a clear system for tracking applications and follow-ups.',
                    'Actively expanding the pool of companies and job roles being applied to.', 
            ],
            futureQuestions: [
                'What is the quality of the applications I’m sending out, and how can I improve them further?', 
                'How do I ensure that my application process remains organized and on track?',
                'Am I focusing on both large corporations and smaller companies or startups in my job search?'
            ]
        }, {
            score: 8,
            indication: [
                'Several job offers under consideration',
                'Active participation in industry groups and events',
                'High confidence in interview skills and professional presence'
            ],
            reflectiveQuestions: [
                'What factors are influencing your decision-making regarding job offers?',
                'How can you maintain momentum in your job search while evaluating offers?',
                'What additional skills or experiences could enhance your candidacy further?'
            ],
            aspiIndication: [
                'Submitting job applications regularly, with a high degree of tailoring and customization.', 
                'Following up on all applications and getting more interviews or feedback.',
                'Applying to a mix of roles that offer both short-term and long-term growth potential.',
            ],
            futureQuestions: [
                'How well do I feel my applications are differentiating me from other candidates?', 
                'What methods am I using to follow up with employers after applying?',
                'How am I making sure the jobs I apply for are aligned with both my current skills and future aspirations?'
            ]
        },
        {
            score: 9,
            indication: [
                'Strong alignment between personal values and potential job offers',
                'Robust professional network actively supporting job search',
                'Excellent feedback from interviews and networking efforts'
            ],
            reflectiveQuestions: [
                'How does each potential offer align with your long-term career goals?',
                'What strategies will help maintain and grow your network moving forward?',
                'In what ways can you give back to those who have supported you during this process?'
            ],
            aspiIndication: [
                'Applying to jobs regularly with a clear strategy for each stage of the process.',
                'Tracking progress carefully, including interviews, follow-ups, and feedback, making adjustments as needed.', 
                'Building a strong network to enhance the job application process. ',
            ],
            futureQuestions: [
                'How well-defined is my strategy for applying to jobs, from initial research to interview preparation?',
                'How do I adjust my application strategy based on feedback or previous experiences?',
                'How well am I leveraging my network to find and apply to job opportunities?'
            ]
        },
        {
            score: 10,
            indication: [
                ' Ideal job offers received that match career aspirations perfectly',
                'Extensive network providing continuous opportunities',
                'High satisfaction with personal branding and application processes'
            ],
            reflectiveQuestions: [
                ' What steps will you take to ensure continued growth in your career post-job acceptance?',
                "How can you sustain the positive momentum you've built during this search?",
                'In what ways can you mentor others who are just starting their job search journey?'
            ],
            aspiIndication: [
                'Fully immersed in a well-structured, strategic, and successful job application process.', 
                'Consistently applying to highly targeted roles, ensuring maximum alignment between skills, values, and opportunities.', 
                'Receiving frequent interview invitations, and moving forward in the application process with multiple opportunities.', 
            ],
            futureQuestions: [
                'How regularly am I applying to jobs that perfectly match my skill set and career aspirations?',
                'How do I ensure I stay consistent and proactive in applying to jobs without burning out?',
                'How am I maintaining a balance between applying, preparing for interviews, and managing rejections?'
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



 
export default Active;