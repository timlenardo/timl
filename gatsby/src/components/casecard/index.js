import React from 'react';

import './_casecard.scss';

var hidden = {
    display:'none'
};
var visible = {
    display:'initial'
};

class AppCard extends React.Component {
    state = {
        hovering : false,
    };

    hoverOn = () => this.setState(state => ({ hovering: true }));

    hoverOff = () => this.setState(state => ({ hovering: false }));

    onClick = () => {
        if (this.props.redirectUrl != null) {
            window.location.replace(this.props.redirectUrl);
        }
    }

    render() {
        return (
            <div id={this.props.id} className={'AppCard ' + (this.props.className || '')} onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff} onClick={this.onClick}>
                <img className="background" src={this.state.hovering ? this.props.imageHover : this.props.image}/>
                {/*<img className="cover" src={this.props.image }/>*/}
                <div className="AppCard-info">
                    <div>
                        <div className="AppCard-info--title">{this.props.title}</div>
                        <div className="AppCard-info--subtitle">{this.props.subtitle}</div>
                    </div>
                </div>
            </div>

        );
    }
}


export default AppCard;
