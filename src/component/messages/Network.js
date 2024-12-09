import { useState } from "react";

import next from '../next-bt.png';
import back from '../previous-bt.png'

const Network = ({close, msg, submit, quest}) => {
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [
        {
          score: 1,
          indication: [
            'No current networking contacts.',
            'Avoids networking events and opportunities.',
            'Feels anxious or uncomfortable in social settings.'
          ],
          reflectiveQuestions: [
            'How often do you reach out to others in your industry?',
            'What fears hold you back from networking?',
            'Do you feel isolated in your job search?'
          ],
          aspiIndication: [
            ' I have very little to no network within my field.',
            'I have minimal to no understanding of how to approach networking.',
            'I rarely attend networking events.'
          ],
          futureQuestions: [
                'Do I feel disconnected from others in my industry or job field?',
                'Have I taken steps to reach out to people in my network?'
            ]
        },
        {
            score: 2,
          indication: [
                    ' Limited connections; few people to reach out to.',
                        'Occasionally attends events but does not engage.',
                        'Networking feels forced or unnatural.'
          ],
          reflectiveQuestions: [
            'How many new contacts have you made in the last month?',
            'What specific barriers prevent you from networking more effectively?',
            'Do you feel prepared when attending networking events?',
          ],
          aspiIndication: [
                "I have a few industry contacts, but I don't consistently engage with them.",
                'I rarely initiate networking opportunities.',
                'I struggle to communicate my value.'
          ],
          futureQuestions: [
                                'Do I only network when absolutely necessary?',
                                'Am I hesitant to make new professional connections?'
          ]
        },  

        {
            score: 3,
            indication: [
                'Some contacts but lack depth in relationships.',
                'Attends events but rarely follows up with connections.',
                'Networking efforts yield minimal results.'
            ],
            reflectiveQuestions: [
                'How often do you follow up with new contacts?',
                'What strategies do you use to maintain relationships?',
                'Are you clear on what you want from your networking efforts?'
            ],
            aspiIndication: [
                    'I occasionally attend networking events or online groups.',
                    "My network consists of some acquaintances, but it's not diverse or strong.",
                    'I sometimes reach out to people.'
            ],
            futureQuestions: [
                'Do I have a small circle of contacts in my industry, but struggle to expand it?',
                'How confident do I feel when making professional connections?'
            ]
        },

        {
            score: 4,
            indication: [
                'A few meaningful connections but limited engagement.',
                'Participates in some networking activities but lacks consistency.',
                'Networking feels somewhat beneficial but not impactful.'
            ],
            reflectiveQuestions: [
                'How do you prioritize your networking activities?',
                'What do you hope to achieve through networking?',
                'Are there specific groups or events that resonate with you?'
            ],
            aspiIndication: [
                "I have a basic network, but it's often limited to past colleagues or old acquaintances.",
                "I don't actively nurture relationships."
            ],
            futureQuestions: [
                'Have I attended at least one networking event in the past few months?',
                "How often do I reach out to strengthen my current professional network?"
            ]
        },
        {
            score: 5,
            indication: [
                'Moderate number of contacts; some are useful.',
                'Attends events regularly but feels unsure about effectiveness.',
                'Networking is a mixed experience, neither positive nor negative.'
            ],
            reflectiveQuestions: [
                ' How satisfied are you with your current network?',
                'What would improve your networking experience?',
                'Do you actively seek out new opportunities to connect?'
            ],
            aspiIndication: [
                ' I maintain a moderate network, with occasional interactions.',
                'I reach out for advice or referrals sporadically.',
                'I engage in a few relevant groups.'                
            ],
            futureQuestions: [
                'How often do I make an effort to connect with people outside of my immediate circle?',
                'Do I actively seek opportunities to collaborate?'
            ]
        },
        {
            score: 6,
            indication: [
                ' Good number of contacts; some relationships are developing.',
                'Engages in follow-ups after events, though inconsistently.',
                'Feels more comfortable in networking situations than before.'
            ],
            reflectiveQuestions: [
                'How often do you initiate conversations with your contacts?',
                'What types of events do you find most valuable?',
                'Are there areas where you can improve your networking skills?'
            ],
            aspiIndication: [
                'My network is more established, with people I engage with regularly.',
                'I attend networking events and follow up with connections.'
            ],
            futureQuestions: [
                'Am I able to connect with new people with ease during events?',
                'How often do I follow up after meeting new professional contacts?'
            ]
        },
        {
            score: 7,
            indication: [
                'Stronger network with several active relationships.',
                'Regularly attends and participates in networking events.',
                'Feels confident in initiating conversations and following up.'
            ],
            reflectiveQuestions: [
                'What strategies have worked best for building connections?',
                'How do you leverage your network for job opportunities?',
                "Are there specific skills you'd like to develop further?"
            ],
            aspiIndication: [
                    ' I regularly interact with my network through social media, events, and email.',
                    'I can approach others confidently for collaborations or advice.',
                    'I stay visible in my field.'
            ],
            futureQuestions: [
                'Do I consistently engage with both new and existing contacts in a meaningful way?',
                'Am I proactive in growing my professional relationships?'
            ]
        }, {
            score: 8,
            indication: [
                'Well-established network; many meaningful connections.',
                'Proactively engages and supports others in their networks.',
                ' Networking is a key part of job search strategy and success.'
            ],
            reflectiveQuestions: [
                'How do you maintain and nurture your relationships over time?',
                'What role does reciprocity play in your networking efforts?',
                "Are there new areas of growth you're exploring through your network?"
            ],
            aspiIndication: [
                'I have a well-established network and regularly contribute to it.',
                'I proactively support others in their career paths.',
                "I'm known for offering value."
            ],
            futureQuestions: [
                'How often do I offer help, guidance, or advice to those in my network?',
                'Do I feel that my network is diverse and strong across industries?'
            ]
        },
        {
            score: 9,
            indication: [
                'Extensive network with strong, reciprocal relationships.',
                'Actively mentors others and shares opportunities within the network.',
                'Networking leads to significant job search benefits and insights.'
            ],
            reflectiveQuestions: [
                'How do you contribute to the success of others in your network?',
                "What are the most valuable lessons you've learned from networking?",
                'Are there ways to expand or deepen your current connections further?'
            ],
            aspiIndication: [
                'I actively expand my network by attending multiple industry events and connecting with top professionals.',
                'I can leverage my network to gain job opportunities.'
            ],
            futureQuestions: [
                'Do I continuously seek new ways to expand my network with key industry influencers?',
                'How comfortable am I reaching out to senior professionals in my field?'
            ]
        },
        {
            score: 10,
            indication: [
                'Highly influential network; many advocates and supporters.',
                'Regularly invited to exclusive events and opportunities due to reputation.',
                'Networking is second nature, integrated into daily life and career strategy.'
            ],
            reflectiveQuestions: [
                'What practices have led to such a successful network for you?',
                'How do you continually add value to your connections?',
                'What future goals do you have for expanding or enhancing your network even further?'
            ],
            aspiIndication: [
                'I am a highly visible, well-connected professional in my field.',
                'My network is vast, and I actively engage with influential individuals to create opportunities.',
                'I am considered a connector within my industry.'
            ],
            futureQuestions: [
                'Am I ready to fully commit to living a life where every action and decision is deeply connected to my inner growth in the defined timeframe?',
                'Do I believe that I can reach a state of profound inner peace and fulfillment and sustain it?'
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



 
export default Network;