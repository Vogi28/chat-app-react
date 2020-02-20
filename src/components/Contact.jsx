import React from 'react';
import './Contact.css';

class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            online : props.online
        };
    }

    handleClick = (e) => {
        this.setState({online : !this.state.online});
    };

    render () {
        return(
            <div className="Contact">
                <img className="avatar" src={this.props.image} alt="" />
                <div className="infos">
                    <div className="name">
                        <h3>{this.props.name}</h3>
                    </div>
                    <div className="status">
                        <span onClick={this.handleClick}>{this.state.online ?  <div className="status-online"/> : <div className="status-offline"/> }</span>
                        <div className="status-text">
                            {this.state.online ? 'Online' : 'Offline'}
                        </div>
                    </div>
                </div>
            </div>
        );  
    }
}

export default Contact;