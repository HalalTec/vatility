import Brand from "./messages/Brand";
import Business from "./messages/Business";
import Customer from "./messages/Customer";
import Execution from "./messages/Execution";
import Lead from "./messages/Lead";
import Mental from "./messages/Mental";
import Network from "./messages/Network";
import Product from "./messages/Product";
import Revenue from "./messages/Revenue";
import Vision from "./messages/Vision";




const Message = ({close, msg, p, submit, quest}) => {

    if (p === 'Vision, Strategy & Founder Clarity'){

        return ( 
            <Vision close={close} msg={msg} submit={submit} quest={quest}/>
        );
    }

    if (p === 'Product-Market Fit & Value Proposition'){

        return ( 
            <Product close={close} msg={msg} submit={submit} quest={quest}/>
        );
    }
      
    if (p === 'Revenue & Cash Flow'){

        return ( 
            <Revenue close={close} msg={msg} submit={submit} quest={quest}/>
        );
    }

    if (p === 'Lead Generation & Sales Process'){

        return ( 
            <Lead close={close} msg={msg} submit={submit} quest={quest}/>
        );
    }

    if (p === 'Brand Positioning & Differentiation'){

        return ( 
            <Brand close={close} msg={msg} submit={submit} quest={quest}/>
        );
    }

    if (p === "Execution, Productivity & Founder's Time Management"){

        return ( 
            <Execution close={close} msg={msg} submit={submit} quest={quest}/>
        );
    }

    if (p === 'Network, Partnerships & Growth Leverage'){

        return ( 
            <Network close={close} msg={msg} submit={submit} quest={quest}/>
        );
    }

    if (p === 'Business Model & Scalability'){

        return ( 
            <Business close={close} msg={msg} submit={submit} quest={quest}/>
        );
    }

    if (p === 'Customer Experience & Retention'){

        return ( 
            <Customer close={close} msg={msg} submit={submit} quest={quest}/>
        );
    }

    if (p === 'Mental Resilience & Founder Burnout Risk'){

        return ( 
            <Mental close={close} msg={msg} submit={submit} quest={quest}/>
        );
    }

      
}
 
export default Message;