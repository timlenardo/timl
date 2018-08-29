import React from 'react';

import './_appcard.scss';
import Icon from '../icon';
import DesktopFrame from '../../img/desktopFrame.png';
import DesktopFrameSelected from '../../img/desktopFrameSelected.png';

import PhoneFrame from '../../img/phoneFrame.png';
import PhoneFrameSelected from '../../img/phoneFrameSelected.png';

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
            <div className={'AppCard ' + (this.props.className || '')} onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff} onClick={this.onClick}>
                <img className={this.props.isPhone ? "fill" : "fillDesktop"} src={this.props.cover}/>
                <img className={this.props.isPhone ? "fill" : "fillDesktop"} style={this.state.hovering ? visible : hidden} src={this.state.hovering ? this.props.gif : null}/>
                {this.props.isPhone ? <img className="background" src={this.state.hovering ? PhoneFrameSelected : PhoneFrame}/> : null}
                {this.props.isPhone ? null : <img className="background" src={this.state.hovering ? DesktopFrameSelected : DesktopFrame}/>}
                <Icon icon={this.props.icon} width={54} height={54}/>
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
