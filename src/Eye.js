import React, { Component } from 'react';

/**
  * This component represents the animated app logo
  */
export default class Eye extends Component {

    componentDidMount () {
      let eye = document.querySelector('.Eye-iris');
        window.addEventListener('mousemove', (event) => {
          if (event) {
            let x = -(window.innerWidth / 2 - event.pageX) / 35;
            let y = -(window.innerHeight / 2 - event.pageY) / 35;
            eye.style.transform = `rotate(-45deg) translateY(${y}px)  translateX(${x}px)`; 
          }
        }); 
    }

    render() {
        return (
        	<div className="Eye-container">
            <div className="Eye-ball">
              <div className="Eye-iris"></div>
            </div>
            <div className="Eye-eyelid"></div>
            <div className="Eye-lid"></div>
          </div>
        );  
    }
}