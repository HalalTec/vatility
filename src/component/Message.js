import Active from "./messages/Active";
import Branding from "./messages/Branding";
import Energized from "./messages/Energized";
import Interview from "./messages/Interview";
import Know from "./messages/Know";
import Linkedin from "./messages/Linkedin";
import Network from "./messages/Network";
import Research from "./messages/Research";
import Tracking from "./messages/Tracking";
import Upskill from "./messages/Upskill";



const Message = ({close, msg, p, submit, quest}) => {

    if (p === 'Know Yourself'){

        return ( 
            <Know close={close} msg={msg} submit={submit} quest={quest}/>
        );
    }

    if (p === 'Do Research'){

        return ( 
            <Research close={close} msg={msg} submit={submit} quest={quest}/>
        );
    }
      
    if (p === 'Perfecting Your Resume and LinkedIn Profile'){

        return ( 
            <Linkedin close={close} msg={msg} submit={submit} quest={quest}/>
        );
    }

    if (p === 'Networking Like a Pro'){

        return ( 
            <Network close={close} msg={msg} submit={submit} quest={quest}/>
        );
    }

    if (p === 'Personal Branding & Thought Leadership'){

        return ( 
            <Branding close={close} msg={msg} submit={submit} quest={quest}/>
        );
    }

    if (p === 'Upskilling & Certification'){

        return ( 
            <Upskill close={close} msg={msg} submit={submit} quest={quest}/>
        );
    }

    if (p === 'Active Job Applications'){

        return ( 
            <Active close={close} msg={msg} submit={submit} quest={quest}/>
        );
    }

    if (p === 'Tracking & Organization'){

        return ( 
            <Tracking close={close} msg={msg} submit={submit} quest={quest}/>
        );
    }

    if (p === 'Staying Energized, Persistent & Mentally Strong'){

        return ( 
            <Energized close={close} msg={msg} submit={submit} quest={quest}/>
        );
    }

    if (p === 'Mastery of Interview Preparation & Negotiation'){

        return ( 
            <Interview close={close} msg={msg} submit={submit} quest={quest}/>
        );
    }

      
}
 
export default Message;