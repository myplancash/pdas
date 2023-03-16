import React from 'react'
import ProfileCard from './ProfileCard';
import Alexa from './images/alexa.png'
import Cortana from './images/cortana.png'
import Siri from './images/siri.png'
import 'bulma/css/bulma.css'

const App = () => {
  return (
    <div>
      <div>Cards info</div>
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard title='This is the first Title ' handle='@sergio23' image={Alexa}/>
            </div>
            <div className="column is-4">
              <ProfileCard title='This is the Second Title' handle='@juanC4' image={Cortana}/>
            </div>
            <div className="column is-4">
              <ProfileCard title='This is the Third Title ' handle='@maricel12' image={Siri}/>
            </div>
          </div>
        </div>

    </div>
    </div>
  )
}

export default App