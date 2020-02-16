import React from 'react';
import './Contact.css';

const status = {
    online : <div className="status-online" />,
    offline : <div className="status-offline"/>
}

function Contact(props) {
  return(
    <div className="Contact">
        <img className="avatar" src={props.image} alt="" />
        <div className="infos">
            <div className="name">
                <h3>{props.name}</h3>
            </div>
            <div className="status">
                {props.status ?  status.online : status.offline }
                <div className="status-text">
                    {props.statusText}
                </div>
            </div>
        </div>
    </div>
  );  
}

export default Contact;