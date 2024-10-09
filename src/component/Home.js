import img from './Capture.PNG'

const Home = () => {
    const access = () => {
        window.location.href = '/wheel';
    }
    return (
        <>
        <div className="super-container">
                <div className="main-upper">
                    <div className="sect-1">
                        <img src={img} alt="wheel" srcset="" />
                    </div>
                    <div className="sect2">
                        <h1><b>Wheel of Life</b></h1>
                        <p className='sub-title'><b>Explore where you are <br /> 
                        and where you want to be.</b></p>
                    <div className="min">
                        <button onClick={access}>Take The Accessment</button>
                    <div className="anchor">
                        <a href="" > Customize</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="container">
                <ul className="">
					<li className='career'><span></span>Career</li>
					<li className='money'>Money</li>
					<li className='health'>Health</li>
					<li className='rel'>Relationships</li>
					<li className='per'>Personal Growth</li>
					<li className='fun'>Fun &amp; Recreation</li>
					<li className='phy'>Physical Environment</li>
					<li className='sp'>Spirituality</li>
				</ul>

                <div className="side-note">
					<p><b>What is the Wheel of Life?</b></p>
					<p>The Wheel of Life is a tool to help you explore where you are in your life right now and where you would like to be in the future. </p>
					<p>This free assessment provides you a complete view of your life across the most common domains of living. Use this opportunity to reflect on where you are doing well, where you have opportunities for growth, and how you move forward to achieve your goals in life.</p>
				
                </div>
                </div>
                <footer>	Made with ❤ by <a href="https://www.discoveryourvalues.com/">Discover Your Values</a></footer>
                </div>
        </>
    );
};
export default Home;