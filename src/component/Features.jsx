import React from 'react'

export default function Features() {
  return (
    <>
    <div className='container feature-box'>
        <h2 className='f-head'>POWERFUL WAYS TO GROW</h2>
        <p className='f-para'>Intuitive features give any team the ability to quickly set up and customize workflows for just about anything. Explore the features that help your team succeed.</p>

        <div className='container cards'>
           <div className='f-card'>
            <img src="https://images.ctfassets.net/rz1oowkt5gyp/gMfkjoA3yWYG3kat3qjpW/3902bfdfccf08869e33d63bbc9d1969b/Integrations_Puzzle.svg" alt="img1" className='img'/>
            <h3>Integrations</h3>
            <p className='my-2'>Connect the apps your team already uses into your Trello workflow or add a Power-Up to fine-tune your specific needs.</p>
            <button type="button" className="btn btn-primary w-50 my-3 mt-4">Integrations</button>
           </div>
           <div className='f-card'>
           <img src="https://images.ctfassets.net/rz1oowkt5gyp/7wxRW93hvb7858bMsK4LSs/f6fc44fb23dbc6ee9bc6a7f6e2af0fb7/Gears.svg" alt="img1" className='img'/>
            <h3>Butler Automation</h3>
            <p className='my-2'>No-code automation is built into every Trello board. Focus on the work that matters most and let the robots do the rest.</p>
            <button type="button" className="btn btn-primary w-50 my-3">Automation</button>
           </div>
           <div className='f-card'>
           <img src="https://images.ctfassets.net/rz1oowkt5gyp/mNa3Mi7T6ga2OTrNxJx1D/8991b8d57cd6ec7330398c7a8757b4dc/Search_Value.svg" alt="img1" className='img'/>
            <h3>Enterprise</h3>
            <p className='my-2'>The productivity tool teams love, paired with the features and security needed for scale. Power-Up to fine-tune your specific needs.</p>
            <button type="button" className="btn btn-primary w-50 my-3">Enterprise</button>
           </div>
        </div>
    </div>
    </>
  )
}
