import { useState } from "react";

import next from '../next-bt.png';
import back from '../previous-bt.png'

const Tracking = ({close, msg, submit, quest}) => {
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [
        {
          score: 1,
          indication: [
            'No organized job search plan.',
            'Frequently miss deadlines for applications.',
            'Feel overwhelmed by the job search process.'
          ],
          reflectiveQuestions: [
            'How often do you feel lost or confused about your job search?',
            'Are you able to keep track of jobs you’ve applied for?',
            ' Do you have a clear strategy for your job search?'
          ],
          aspiIndication: [
            'No system in place for tracking or organizing job search activities.',
            ' Entirely reactive in the job search process', 
            'Job search feels overwhelming and chaotic'
          ],
          futureQuestions: [
                'Do I have a clear structure to track my job search tasks?',
                'How can I establish an initial system to stay organized?',
                'Am I feeling overwhelmed by the number of jobs and tasks I need to manage?'
            ]
        },
        {
            score: 2,
          indication: [
                    ' Rarely update your resume or LinkedIn profile.',
                    'Occasionally forget to follow up on applications.',
                    'Lack of a dedicated workspace for job searching.'
          ],
          reflectiveQuestions: [
            ' How often do you review your job search progress?',
            'Do you have reminders set for application deadlines?',
            'Is your job search environment conducive to focus?',
          ],
          aspiIndication: [
                'A basic list of jobs applied to but no clear method of organization.', 
                'Lack of prioritization or categorization of job search activities.',
                'Rarely track progress on application status.'
          ],
          futureQuestions: [
                                'Can I Do I have a simple list of jobs but lack clear categorization or deadlines for tasks?',
                                'Do I struggle to prioritize and categorize tasks, making it harder to focus?',
                                'How often do I track my job applications and their statuses?'
          ]
        },  

        {
            score: 3,
            indication: [
                ' Have a basic list of jobs to apply for, but it’s not comprehensive.',
                'Sometimes track applications, but inconsistently.',
                'Feel some pressure from the job search, but manageable.'
            ],
            reflectiveQuestions: [
                'How organized is your list of potential employers?',
                'Are you keeping track of responses from employers?',
                'Do you feel that your job search is somewhat under control?'
            ],
            aspiIndication: [
                    'Have started using some form of tracking (e.g., spreadsheet or notes).',
                    'Some organization but still missing key elements like deadlines or priorities', 
                    'Struggling to keep track of deadlines or job interviews.'
            ],
            futureQuestions: [
                'Do I have a tracking method, but it’s still a bit disorganized or inconsistent?',
                ' Am I neglecting important aspects of tracking, such as deadlines or application follow-ups?',
                'How often do I miss deadlines or forget to follow up with employers?'
            ]
        },

        {
            score: 4,
            indication: [
                ' Use a spreadsheet or notes app to track applications.',
                'Follow up on some applications, but not all.',
                'Experience occasional stress related to organization.'
            ],
            reflectiveQuestions: [
                'How effective is your current tracking system?',
                'Are you following up on most applications in a timely manner?',
                'Do you feel that organization helps reduce your stress levels?'
            ],
            aspiIndication: [
                'Tracking in place, but lacks full categorization of job applications and tasks.',
                'Some categories for job search activities, but inconsistencies exist.',
                'Still lacks some structure for prioritization or follow-up reminders'
            ],
            futureQuestions: [
                'Is my tracking method fully categorizing all aspects of my job search, or are some areas still vague?',
                'Are there inconsistencies in how I organize or prioritize my job search efforts?',
                'Do I have a reminder system in place to ensure I don’t forget key follow-up actions?'
            ]
        },
        {
            score: 5,
            indication: [
                ' Maintain a detailed list of jobs applied to and their statuses.',
                    'Follow up on most applications within a week.',
                    'Have a designated space for job searching.'
            ],
            reflectiveQuestions: [
                'How satisfied are you with your application tracking method?',
                'Do you regularly assess your job search strategy?',
                'Is your workspace helping or hindering your productivity?'
            ],
            aspiIndication: [
                'Clear tracking system in place, but still some areas lack full consistency.', 
                'Categorization exists but could be more specific or detailed.', 
                'Can follow through on most applications, but some things fall through the cracks.'                
            ],
            futureQuestions: [
                'Have I fully implemented a tracking system, but find myself forgetting some steps in the process?',
                ' How detailed is my job search categorization—am I tracking all the necessary details?',
                'How consistently do I follow through on applications and deadlines without missing critical elements?'
            ]
        },
        {
            score: 6,
            indication: [
                'Use tools like Trello or Asana for tracking tasks and deadlines.',
                'Follow up consistently with employers after applications.',
                'Feel confident in managing multiple applications simultaneously.'
            ],
            reflectiveQuestions: [
                'How well does your tracking system work for you?',
                'Are you able to prioritize which jobs to apply for effectively?',
                'Do you feel in control of your job search process?'
            ],
            aspiIndication: [
                ' Well-organized tracking system that covers jobs, deadlines, and follow-ups.',
                'Some prioritization and clear understanding of what needs to be done next.',
                'The process feels more manageable, but occasional moments of confusion remain'
            ],
            futureQuestions: [
                'Do I have a complete and functional tracking system that includes jobs, deadlines, and follow-ups?',
                'Do I have a solid grasp of my priorities and know exactly what to focus on next in my job search?',
                'How often do I feel confused or overwhelmed despite my organized system?'
            ]
        },
        {
            score: 7,
            indication: [
                'Have a clear, organized plan with specific goals and timelines.',
                'Regularly update resumes and cover letters tailored to each application.',
                'Utilize networking effectively to enhance job prospects.'
            ],
            reflectiveQuestions: [
                'How often do you review and adjust your job search plan?',
                'Are you leveraging networking opportunities effectively?',
                'Do you feel confident in the organization of your job search efforts?'
            ],
            aspiIndication: [
                    'Comprehensive tracking system that is both organized and flexible.',
                    'Clearly defined categories, priorities, and follow-up reminders are in place.',
                    'Able to track job search tasks with little effort, but occasional tasks slip through.', 
            ],
            futureQuestions: [
                'Is my system flexible enough to accommodate changes in my job search but still well-structured?', 
                'Are my categories clearly defined, and do I have regular reminders for follow-ups?',
                'Do I find it easy to track most tasks, yet occasionally miss something despite the system in place?'
            ]
        }, {
            score: 8,
            indication: [
                'Track progress towards specific career goals with measurable outcomes.',
                'Maintain strong relationships with contacts in your field.',
                'Use analytics to assess the effectiveness of different application strategies'
            ],
            reflectiveQuestions: [
                'How do you measure success in your job search?',
                'Are you actively seeking feedback from peers or mentors about your approach?',
                'Do you feel empowered by the organization of your job search?'
            ],
            aspiIndication: [
                'Tracking system is fully integrated into the daily routine, with frequent updates.', 
                'All aspects of the job search (e.g., networking, interviews, applications) are covered.',
                'Very few forgotten or missed actions; mostly proactive in tracking.',
            ],
            futureQuestions: [
                'Do I actively update and follow my tracking system every day, ensuring nothing is overlooked?', 
                'Is my tracking system comprehensive enough to include every element of my job search, including networking?',
                'How proactive am I in managing and updating my job search activities without missing anything critical?'
            ]
        },
        {
            score: 9,
            indication: [
                ' Have a robust system that includes reminders, follow-ups, and networking outreach.',
                'Consistently receive interviews from applications submitted.',
                'Actively refine strategies based on feedback and results.'
            ],
            reflectiveQuestions: [
                ' What aspects of your organization contribute most to your success?',
                'How do you adapt when faced with setbacks in the job search process?',
                'Do you feel that your organizational skills are leading to tangible results?'
            ],
            aspiIndication: [
                'Highly structured system with clear prioritization and follow-ups, even for complex tasks.',
                'Able to track multiple applications and follow-ups without stress.', 
                'Most tasks and follow-ups are completed ahead of time.',
            ],
            futureQuestions: [
                'Is my tracking system so structured and detailed that even the most complex tasks are prioritized and clear?',
                'How comfortable and stress-free do I feel when managing multiple applications and follow-up tasks?',
                'How often do I complete job search-related tasks and follow-ups ahead of their deadlines?'
            ]
        },
        {
            score: 10,
            indication: [
                'Achieve goals consistently through an efficient and effective system.',
                'Network proactively leading to multiple opportunities.',
                'Regularly mentor others in their job search strategies based on personal success'
            ],
            reflectiveQuestions: [
                ' What best practices have led to this level of success in your organization?',
                'How do you maintain motivation and clarity in your approach?',
                'Are there areas where even greater efficiency can be achieved despite high satisfaction?'
            ],
            aspiIndication: [
                                'Near-perfect tracking and organization, with a system that runs seamlessly and without gaps.',
                                'Complete transparency and clarity about the job search status and next steps.',
                                'All actions are preemptively planned and executed well in advance.'
            ],
            futureQuestions: [
                'Is my tracking system flawless, requiring little adjustment, and can I confidently say I rarely miss a task?', 
                'Do I have complete clarity on my current status in the job search and a clear roadmap for next steps?', 
                'How often do I proactively plan my next job search moves and execute them ahead of time, rather than reactively?', 
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



 
export default Tracking;