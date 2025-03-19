import { useState } from "react";

import next from '../next-bt.png';
import back from '../previous-bt.png'

const Product = ({close, msg, submit, quest}) => {
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [
        {
          score: 1,
          indication: [
            'No clarity on product-market fit.',
            'Struggling to define the problem being solved.',
            'No customers or sales.'
          ],
          reflectiveQuestions: [
            'Do you have a well-defined problem your product/service solves?',
            'Have you validated that customers actually need your product?'
          ],
          aspiIndication: [
            'No clear understanding of target customers.', 
            'Product/service lacks differentiation.', 
            'No validation or traction.'
          ],
          futureQuestions: [
                'Do I clearly understand the problem my product/service solves in the defined timeframe?', 
                'Have I identified who my ideal customer is?'
            ]
        },
        {
            score: 2,
          indication: [
                    'Some idea of the problem but no market validation.',
                    'No clear differentiation from competitors.',
                    'Few or no customers willing to pay.'
          ],
          reflectiveQuestions: [
            'Have you conducted any market research or validation?', 
            'Do you know who your ideal customers are and why they would choose you?',
          ],
          aspiIndication: [
                'Some idea of customer pain points, but weak articulation.', 
                'Little to no market feedback.', 
                'No defined value proposition.'
          ],
          futureQuestions: [
                                'Have I engaged with potential customers to confirm their pain points?', 
                                'Can I describe how my product differs from existing solutions?'
          ]
        },  

        {
            score: 3,
            indication: [
                'Early-stage validation but inconsistent sales. ',
                'Customers show mild interest but don’t commit. ',
                'Struggling with pricing or positioning.'
            ],
            reflectiveQuestions: [
                'Do you have a repeatable process to acquire customers?',
                'Do potential customers find your offer compelling enough to pay for?'
            ],
            aspiIndication: [
                    'A preliminary value proposition exists but is not tested.', 
                    'Initial market research conducted.', 
                    'Few customer interactions.'
            ],
            futureQuestions: [
                'Have I validated my value proposition through real conversations?', 
                'Have I observed any interest from potential users?'

            ]
        },

        {
            score: 4,
            indication: [
                'Some early adopters but weak traction.', 
                'Feedback is unclear or mixed.', 
                'Struggling with customer retention.'
            ],
            reflectiveQuestions: [
                'Are customers coming back or recommending your product?',
                'Are you able to clearly articulate your unique value proposition?'
            ],
            aspiIndication: [
                'Basic customer segmentation is in place.', 
                'Some early adopters expressing interest.', 
                'Initial iterations on value proposition based on feedback.'
            ],
            futureQuestions: [
                ' Have I collected feedback from real users to refine my offering?', 
                'Have I tested different messaging to see what resonates?'
            ]
        },
        {
            score: 5,
            indication: [
                'Steady but slow customer growth.',
                'Some recurring revenue, but not enough to sustain long-term.',
                'Mixed feedback on pricing and value.'
            ],
            reflectiveQuestions: [
                'Are customers willing to pay what you need to be profitable?', 
                'Do you have data on what aspects of your offering customers value most?'
            ],
            aspiIndication: [
                'Clear articulation of value proposition. - Initial paying customers or committed users.', 
                'Market demand signs are emerging..'                
            ],
            futureQuestions: [
                ' Have I successfully converted interest into early sales or commitments?', 
                'Are customers engaging with and using the product/service?'
            ]
        },
        {
            score: 6,
            indication: [
                'Growing customer base with positive feedback.', 
                'Signs of repeat business and referrals. ',
                'Some differentiation in the market.'
            ],
            reflectiveQuestions: [
                'Do you have clear product-market fit indicators (e.g., high retention, referrals)?', 
                'Are you beginning to generate predictable revenue?'
            ],
            aspiIndication: [
                'Positive early user feedback.', 
                'Refinement of value proposition based on real usage.',
                'Product/service is gaining traction.'
            ],
            futureQuestions: [
                'Are users recommending my product/service to others?',
                "Do I have data showing my solution effectively solves a real problem?"
            ]
        },
        {
            score: 7,
            indication: [
                'Clear demand for the product with organic growth.', 
                'Customers express strong need and willingness to pay.',
                'Competitive advantage is becoming clear.'
            ],
            reflectiveQuestions: [
                'Are customers advocating for your product?', 
                'Can you confidently say why your solution is better than alternatives?'
            ],
            aspiIndication: [
                    'Clear demand from a specific customer segment.', 
                    'Evidence of repeat purchases or recurring engagement.', 
                    'Stronger brand positioning.', 
            ],
            futureQuestions: [
                'Have I identified and optimized my best acquisition channels?', 
                'Are users willing to pay for my product/service repeatedly?'
            ]
        }, {
            score: 8,
            indication: [
                'Strong revenue growth with clear customer loyalty.', 
                'Market demand is well understood. ',
                'Well-defined competitive positioning.'
            ],
            reflectiveQuestions: [
                'Are your sales increasing without excessive marketing spend?',
                'Do you have data to support that your value proposition is working?'
            ],
            aspiIndication: [
                'Strong customer retention and referrals.', 
                'Differentiation is well understood in the market.', 
                'Value proposition is consistently delivering results.',
            ],
            futureQuestions: [
                'Is my business consistently acquiring new users while retaining existing ones?', 
                'Do customers describe my product/service in the way I intend?'
            ]
        },
        {
            score: 9,
            indication: [
                'Strong brand presence and industry recognition.', 
                'Customers see your product as the go-to solution.', 
                'High retention and word-of-mouth referrals.'
            ],
            reflectiveQuestions: [
                'Is your brand becoming synonymous with solving a key problem?',
                'Do customers trust and rely on your product consistently?'
            ],
            aspiIndication: [
                'Market pull is evident (customers are coming proactively).', 
                'Sustainable revenue model validated. - Recognized as a leader in the niche.'
            ],
            futureQuestions: [
                'Am I experiencing consistent growth without excessive marketing push?', 
                'Have I built a reliable system for scaling demand?'
            ]
        },
        {
            score: 10,
            indication: [
                'Industry leader with dominant market position', 
                'Customer demand exceeds supply. ',
                'Clear, well-articulated value proposition that consistently converts.'
            ],
            reflectiveQuestions: [
                'Are you setting the industry standard for your niche?', 
                'Are customers willing to pay premium prices because of your reputation?'
            ],
            aspiIndication: [
                'Strong market dominance in the niche.', 
                'Clear product-market fit with a validated, profitable model.', 
                'High customer loyalty and advocacy.'
            ],
            futureQuestions: [
                'Have I built a self-sustaining business model where demand exceeds supply?', 
                'Are my customers consistently advocating for my product/service on their own?'
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



 
export default Product;