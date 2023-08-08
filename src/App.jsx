import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png"
 
function App(){
    return(
        <div>
            <div className="font-sans text-green-400 bg-red-500 ">Personal Digital Assistants </div>
             <div className="container">
                <section className="section">
                    <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} alt="Alexa-image"/>
                    <ProfileCard title="Siri" handle="@siri01" image={SiriImage} alt="Siri-image"/>
                    <ProfileCard title="Cortana " handle="@cortana32" image={CortanaImage} alt="Cortana-image"/>
                </section>
             </div>
        </div>
    )
}

export default App;