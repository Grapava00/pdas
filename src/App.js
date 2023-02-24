import React from "react";
import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./assets/alexa.png";
import CortanaImage from "./assets/cortana.png";
import SiriImage from "./assets/siri.png";

function App() {
  return (
    <div>
      <section class='hero is-primary'>
        <div class='hero-body'>
          <p class='title'>Personal Digital Assistants</p>
        </div>
      </section>

      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column is-4 '>
              <ProfileCard
                title='Alexa'
                handle='@alexa99'
                image={AlexaImage}
                alt='alexa logo'
                desctiption=' Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.'
              />
            </div>
            <div className='column is-4 '>
              <ProfileCard
                title='Cortana'
                handle='@cortana32'
                image={CortanaImage}
                alt='cortana logo'
                desctiption=' Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.'
              />
            </div>
            <div className='column is-4 '>
              <ProfileCard
                title='Siri'
                handle='@siri01'
                image={SiriImage}
                alt='siri logo'
                desctiption=' Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.'
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
