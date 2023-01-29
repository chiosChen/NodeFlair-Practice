import React from 'react';
import "./card.css";

export default function Card({
  id,
  name,
  role,
  rate,
  location,
  updatedTime,
  salary,
  techStacks,
  type,
  selected,
  icon
}) {
  
  return (

    <div className="job-card" 
      style={{
        borderStyle: selected === id ? 'solid' : 'none',
        borderRadius: '8px',
        borderColor: '#1fc76a',
        borderWidth: '3px'
      }}
    >
      <div className='job-card-content'
        
      >
          <div className='job-card-top'>
            <div className='job-card-icon'>
              <img 
                src={icon} 
                style={{
                  width: '100%',
                  height: '50px'
                }}
              />
            </div>
            
            <div className="job-card-details">
              <div className='job-card-company'>
                <span>{name}</span>
                <span>&nbsp;&nbsp;</span>
                <span>{rate}★</span>
              </div>
              <div className='job-card-others'>
                <h2 className='job-card-role'>{role}</h2>
                <div className='job-card-time_location'>
                  <span className='job-time'>{updatedTime}</span>
                  <span>&nbsp;</span>
                  <i className='fa-solid fa-location'></i>
                  <span className='job-location'>{location}</span>
                </div>
                
                {salary && <h4 className='job-card-salary'>{salary}</h4>}
              </div>
            </div>
            <div className='job-card-type'>
              {type}
            </div>
          </div>
          <div className='job-card-bottom'>
            <div className='job-card-tech_stacks'>
              {techStacks && techStacks.map((tech, index) => 
                  <div key={index} className="tech">
                    <span>{tech}</span>
                    <span>&nbsp;</span>
                  </div>
                )}
            </div>
          </div>
        </ div>
          
        
    </div>
  )
}
