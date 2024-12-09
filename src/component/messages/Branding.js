import { useState } from "react";

import next from '../next-bt.png';
import back from '../previous-bt.png'

const Branding = ({close, msg, submit, quest}) => {
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [
        {
          score: 1,
          indication: [
            'No clear personal brand or online presence.',
            'Lack of engagement with professional networks or communities.',
            'Uncertainty about your unique value proposition.'
          ],
          reflectiveQuestions: [
            'How do you feel about your current visibility in your industry?',
            'What barriers are preventing you from developing your personal brand?',
            'What would it take for you to begin sharing your ideas or expertise?'
          ],
          aspiIndication: [
            'No personal brand established.',
            'Not visible on any professional platforms (e.g., LinkedIn).',
            'No thought leadership contributions.'
          ],
          futureQuestions: [
                'Am I actively avoiding sharing my knowledge or expertise online or in professional settings?',
                'Do I lack clarity on how to present myself professionally?'
            ]
        },
        {
            score: 2,
          indication: [
                    'Minimal effort in branding efforts, such as social media profiles.',
                    'Limited recognition or feedback from peers about your expertise.',
                    'Rarely contributing to discussions in professional forums or groups.'
          ],
          reflectiveQuestions: [
            'What specific actions have you taken to enhance your personal brand?',
            'How do you perceive the impact of your current branding on your job search?',
            'What steps can you take to increase your visibility and engagement?',
          ],
          aspiIndication: [
                'Minimal visibility or presence in professional circles.',
                'Rarely shares content or ideas.',
                'Unclear about how to communicate value.'
          ],
          futureQuestions: [
                                'Have I shared a professional insight or idea online or with a group recently?',
                                'Is my professional brand inconsistent or hard to define?'
          ]
        },  

        {
            score: 3,
            indication: [
                'Some presence on social media but inconsistent messaging.',
                'Occasional participation in networking events but not actively engaging.',
                'Limited thought leadership activities, such as writing articles or blogs.'
            ],
            reflectiveQuestions: [
                'How do you currently communicate your skills and experiences to others?',
                'What feedback have you received from others regarding your personal brand?',
                'What would it look like to increase your involvement in thought leadership?'
            ],
            aspiIndication: [
                    'Occasional engagement with professional content, but lack of consistency.',
                    'No content creation or publishing.',
                    'Limited network in thought leadership.'
            ],
            futureQuestions: [
                "Do I regularly engage with other professionals' content but struggle to create my own?",
                'Do I feel disconnected from a clear professional purpose or message?'
            ]
        },

        {
            score: 4,
            indication: [
                'A defined personal brand but lacking clarity and consistency.',
                'Moderate engagement with professional networks, but not fully utilized.',
                'Some contributions to discussions but not a regular contributor.'
            ],
            reflectiveQuestions: [
                'How well do you think your personal brand aligns with your career goals?',
                'What aspects of your branding do you feel need improvement or refinement?',
                'How can you leverage existing connections to enhance your thought leadership?'
            ],
            aspiIndication: [
                ' Starting to share some personal insights online (e.g., LinkedIn posts).',
                'Participates occasionally in discussions but without strong visibility'
            ],
            futureQuestions: [
                'Have I shared my expertise at least once a month?',
                'Is my professional message still unclear, or is my visibility low within my industry?'
            ]
        },
        {
            score: 5,
            indication: [
                'Clear personal brand with some visibility in industry circles.',
                'Regular participation in networking and professional events.',
                ' Occasional sharing of insights through articles or social media posts.'
            ],
            reflectiveQuestions: [
                'What are the strengths of your current personal brand that you can build upon?',
                'How do others perceive your expertise and contributions in your field?',
                'What new platforms or methods can you explore to amplify your voice?'
            ],
            aspiIndication: [
                'Building a personal brand but lack of clarity on niche.',
                'Occasionally shares professional insights and engages with a few thought leaders.'                
            ],
            futureQuestions: [
                'Do I share content regularly but without much strategic focus?',
                'Do I struggle to identify my niche or specific area of expertise?'
            ]
        },
        {
            score: 6,
            indication: [
                '1. Strong online presence with consistent messaging across platforms.',
                'Active engagement in professional communities and discussions.',
                'Regular contributions to thought leadership through writing or speaking engagements.'
            ],
            reflectiveQuestions: [
                'In what ways does your personal brand differentiate you from others in your field?',
                'How often do you seek feedback on your branding efforts from peers or mentors?',
                'What are the next steps for enhancing your thought leadership visibility further?'
            ],
            aspiIndication: [
                'Building a niche and regularly sharing content.',
                'Gaining small audience but still developing thought leadership.',
                'Participation in discussions.'
            ],
            futureQuestions: [
                'Am I consistently creating content or engaging in discussions about my expertise?',
                'Do I have an emerging niche, but still need to refine it?'
            ]
        },
        {
            score: 7,
            indication: [
                'Well-recognized personal brand with a loyal following or network base.',
                'Frequent participation as a speaker or panelist at industry events.',
                'Consistent sharing of valuable insights that resonate with others in the industry.'
            ],
            reflectiveQuestions: [
                'How has building a strong personal brand impacted your career opportunities so far?',
                'What strategies have worked best for you in engaging with your audience effectively?',
                'How can you further leverage your platform for greater influence and reach?'
            ],
            aspiIndication: [
                    'Regular contributor to thought leadership, e.g., blogs, podcasts, webinars.',
                    'Building a niche and growing a following.',
                    'Recognized by some peers.'
            ],
            futureQuestions: [
                'Have I established a specific niche and consistently share valuable insights?',
                'Am I getting recognition from a small group of professionals in my field?'
            ]
        }, {
            score: 8,
            indication: [
                '1. Established thought leader recognized for expertise and insights in the field.',
                'Strong network of connections actively engaging with and promoting your work.',
                'Regularly sought after for collaboration opportunities and partnerships.'
            ],
            reflectiveQuestions: [
                '1. What unique perspectives do you bring that could further enhance your thought leadership?',
                'How do you maintain authenticity while expanding your reach and influence?',
                'What legacy do you want to create through your personal brand and thought leadership efforts?'
            ],
            aspiIndication: [
                'Considered a rising voice in the industry.',
                'Regularly invited to contribute to professional events or panels.',
                'Have a strong, established brand.'
            ],
            futureQuestions: [
                'Do I regularly get invited to share insights or speak at professional events?',
                'Have I built a brand that clearly communicates my unique expertise?'
            ]
        },
        {
            score: 9,
            indication: [
                'Highly respected figure within the industry, often consulted for advice.',
                'Significant influence on industry trends and discussions through various platforms.',
                'Actively mentoring others to develop their own brands and leadership skills.'
            ],
            reflectiveQuestions: [
                '1. In what ways can you continue to innovate and evolve as a thought leader?',
                'How do you measure the impact of your contributions on others in the field?',
                'What are some emerging trends that could affect how you approach personal branding moving forward?'
            ],
            aspiIndication: [
                'Widely recognized within industry circles.',
                'Invited to major panels and conferences.',
                'Thought leader with a solid following and loyal audience.'
            ],
            futureQuestions: [
                'Am I regularly sought after to share my expertise at prominent events?',
                'Do I have a consistent and well-established personal brand that resonates widely?'
            ]
        },
        {
            score: 10,
            indication: [
                'The go-to authority recognized globally for expertise and innovation',
                'Consistently leading initiatives that shape industry standards and practices.',
                'Actively shaping the future of the industry through groundbreaking ideas.'
            ],
            reflectiveQuestions: [
                'How do you plan to sustain this level of influence over time while adapting to changes in the industry?',
                'What new challenges excite you, and how will they contribute to furthering your legacy as a thought leader?'
            ],
            aspiIndication: [
                'Highly influential thought leader with a significant following.',
                'Regularly asked to speak at major industry events, conferences, and forums.'
            ],
            futureQuestions: [
                'Am I considered one of the top thought leaders in my field?',
                'Do I have a vast, engaged audience and frequently speak at major professional events?'
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



 
export default Branding;