import React from 'react'
import ProfileCard from './ProfileCard';
import Alexa from './images/alexa.png'
import Cortana from './images/cortana.png'
import Siri from './images/siri.png'
import 'bulma/css/bulma.css'

const App = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-body">
          <p className="title">
            Primary Cards Info
          </p>
          <p className="subtitle">
            Let's check our cards
          </p>
        </div>
      </section>
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard 
                title='This is the first Title' 
                handle='@sergio23' 
                image={Alexa}
                description="Ipsum has been the industry's standard dummy text ever since the 1500's, when an unknown printer took a galley of type and scrambled it to make a type."
              />
            </div>
            <div className="column is-4">
              <ProfileCard 
                title='This is the Second Title' 
                handle='@juanC4' 
                image={Cortana}
                description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
              />
            </div>
            <div className="column is-4">
              <ProfileCard 
                title='This is the Third Title' 
                handle='@maricel12' 
                image={Siri}
                description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
              />
            </div>
          </div>
        </div>

    </div>
    </div>
  )
}

export default App