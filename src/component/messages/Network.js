import { useState } from "react";

import next from '../next-bt.png';
import back from '../previous-bt.png'

const Network = ({close, msg, submit, quest}) => {
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [
        {
          score: 1,
          indication: [
            'No active network or partnerships.',
            'No strategic alliances in place.',
            'No access to mentors or advisors.'
          ],
          reflectiveQuestions: [
            'Do I lack business connections that could help me grow?',
            'Am I struggling to find partners or collaborators?',
            'Do I feel isolated in my entrepreneurial journey?'
          ],
          aspiIndication: [
            'You have little to no business connections outside your immediate contacts.',
            'You do not actively engage in networking, collaborations, or partnerships.',
            'Your business growth is mostly dependent on personal effort, with no external leverage.'
          ],
          futureQuestions: [
                'Have you taken any steps to connect with potential partners or mentors in the defined timeframe?',
                'Do you rely solely on personal effort with no outside collaborations?',
                'Have you attended any networking events or reached out to business communities?'
            ]
        },
        {
            score: 2,
          indication: [
                    'Few connections but no meaningful collaboration.',
                    'No partnerships yielding tangible results.'
          ],
          reflectiveQuestions: [
            'Do I know a few people, but they don’t contribute to my growth?',
            'Have I failed to leverage any of my contacts for business success?',
          ],
          aspiIndication: [
                'You have a few connections but they are not strategically beneficial.',
                'There is little to no collaboration or active efforts to build leverage through partnerships.',
                'Business growth still largely depends on you alone.'
          ],
          futureQuestions: [
                                'Have you identified potential networking opportunities that could support your business?',
                                'Are your current business relationships helping you grow in any meaningful way?',
                                'Have you actively tried to form partnerships in the defined timeframe?'
          ]
        },  

        {
            score: 3,
            indication: [
                'Some networking efforts but inconsistent.',
                'No structured approach to leveraging connections.'
            ],
            reflectiveQuestions: [
                'Do I attend events or interact occasionally but without strategic intent?',
                'Am I failing to follow up or build deeper relationships?'
            ],
            aspiIndication: [
                    'You have some networking connections but rarely engage them.',
                    'You may have one or two small partnerships, but they are not significantly contributing to growth.',
                    'You sometimes attend networking events but do not follow up on connections.'
            ],
            futureQuestions: [
                'Have you built at least one meaningful partnership that is adding value to your business?',
                'Do you regularly interact with your business network for opportunities?',
                'Have you made a habit of following up with potential partners after networking?'

            ]
        },

        {
            score: 4,
            indication: [
                'Building relationships but limited impact.',
                'Partnerships exist but don’t contribute significantly to business success.'
            ],
            reflectiveQuestions: [
                'Have I connected with potential partners but seen little growth?',
                'Are my collaborations more about networking than tangible benefits?'
            ],
            aspiIndication: [
                'You have started forming strategic connections but they are not yet deeply impactful.',
                'You have tested a few partnerships, but they are still in early stages.',
                'Your network is growing, but you are not fully leveraging it for business expansion.'
            ],
            futureQuestions: [
                'Have you taken action to strengthen relationships with key business contacts?',
                'Are you exploring at least one new partnership that could help scale your business?',
                'Are you getting referrals or opportunities from your network in the defined timeframe?'
            ]
        },
        {
            score: 5,
            indication: [
                'A basic network with some strategic connections.',
                'Some partnerships generating early benefits.'
            ],
            reflectiveQuestions: [
                'Do I have some industry contacts that provide occasional value?',
                'Have any of my collaborations started yielding results?'
            ],
            aspiIndication: [
                'You have a growing professional network and engage with it occasionally.',
                'You have a few partnerships that contribute to growth, though not at scale.',
                'You are starting to experience benefits from networking efforts but still have room for improvement.'                
            ],
            futureQuestions: [
                'Are at least some of your partnerships yielding measurable results for your business?',
                'Have you reached out to at least three new potential collaborators or mentors?',
                'Do you feel your network is providing valuable insights and opportunities?'
            ]
        },
        {
            score: 6,
            indication: [
                'Growing network with valuable business relationships.',
                'At least one strong partnership leading to measurable progress.'
            ],
            reflectiveQuestions: [
                'Am I actively engaging with professionals who contribute to my growth?',
                'Do I have partnerships that generate new business or knowledge?'
            ],
            aspiIndication: [
                ' You have a strong network and engage with it regularly.',
                'You have formed strategic partnerships that are actively contributing to business growth.',
                'Your network recognizes your business and provides opportunities.'
            ],
            futureQuestions: [
                'Are you seeing tangible revenue or growth benefits from your partnerships?',
                'Are people in your network introducing you to valuable opportunities?',
                'Do you proactively maintain and deepen relationships with key connections?'
            ]
        },
        {
            score: 7,
            indication: [
                'Multiple strong partnerships delivering consistent value.',
                'Good engagement in networking communities and industry groups.'
            ],
            reflectiveQuestions: [
                'Do my business relationships help me gain clients, knowledge, or growth?',
                'Am I part of any groups where I contribute and gain insights?'
            ],
            aspiIndication: [
                    'Your network includes industry influencers and decision-makers.',
                    'You have multiple active partnerships that significantly contribute to your business growth.',
                    'Your business is benefiting from referrals, collaborations, and joint ventures.', 
            ],
            futureQuestions: [
                'Are you leveraging your partnerships to unlock new markets or opportunities?',
                'Are you being invited to exclusive business circles, masterminds, or events?',
                'Are people actively seeking to partner with you due to your reputation?'
            ]
        }, {
            score: 8,
            indication: [
                'Strong ecosystem of mentors, partners, and collaborators.',
                'Strategic partnerships fueling growth opportunities.'
            ],
            reflectiveQuestions: [
                'Do I have a network that supports my business regularly?',
                'Are my partnerships aligned with my business objectives?'
            ],
            aspiIndication: [
                'You are known as a valuable connection within your industry.',
                'Your partnerships bring in significant business, helping you scale.',
                'Your network regularly provides high-quality opportunities.',
            ],
            futureQuestions: [
                'Are you in high-demand as a partner or collaborator?',
                'Are your existing partnerships contributing significantly to your bottom line?',
                'Have you built a system to continuously expand and maintain your network?'
            ]
        },
        {
            score: 9,
            indication: [
                'Well-established partnerships driving exponential growth.',
                'Consistently leveraging networks for scaling opportunities.'
            ],
            reflectiveQuestions: [
                'Are my partnerships a key reason for my business success?',
                'Do I have a systematic way of expanding my network and partnerships?'
            ],
            aspiIndication: [
                'Your network is a major competitive advantage.',
                'You have multiple high-impact partnerships that fuel exponential growth.',
                'People and businesses seek you out for strategic collaborations.',
            ],
            futureQuestions: [
                'Are your partnerships creating significant, measurable business growth?',
                'Do you have strong, ongoing collaborations with industry leaders?',
                'Do you feel that your network and partnerships give you leverage in business decisions?'
            ]
        },
        {
            score: 10,
            indication: [
                'A thriving network with high-impact collaborations.',
                'Strategic alliances consistently unlocking new opportunities.'
            ],
            reflectiveQuestions: [
                'Do I have an influential presence in my industry because of my network?',
                'Are my partnerships a competitive advantage in my business?'
            ],
            aspiIndication: [
                'You are a go-to person in your industry for partnerships and connections.',
                'Your business thrives on strategic collaborations, referrals, and exclusive opportunities.',
                'You have built an ecosystem where partnerships drive continuous success.', 
            ],
            futureQuestions: [
                'Are you considered an authority or connector in your industry?',
                'Are your strategic relationships consistently generating massive growth and expansion?',
                'Have you built a self-sustaining network that fuels ongoing success?'
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



 
export default Network;
