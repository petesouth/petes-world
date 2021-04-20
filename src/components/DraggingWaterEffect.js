import React from 'react';
import { TransitionMotion, spring } from 'react-motion';

import './DraggingWaterEffect.css';
const leavingSpringConfig = { stiffness: 60, damping: 15 };

export default class DraggingWaterEffect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            screen: {
                width: props.innerWidth,
                height: props.innerHeight,
                ratio: window.devicePixelRatio || 1,
            },
            mouse: [],
            now: 't' + 0
        };
        this.propComponent = props.propComponent;
    };


    handleResize(value, e) {
        this.setState({
            screen: {
                width: this.state.screen.width,
                height: this.state.screen.height,
                ratio: window.devicePixelRatio || 1,
            }
        });
    }
    componentDidMount() {

        window.addEventListener('resize', this.handleResize.bind(this, false));

    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }


    handleMouseMove = ({ pageX, pageY }) => {
        // Make sure the state is queued and not batched.
        this.setState(() => {
            return {
                mouse: [pageX - 25, pageY - 25],
                now: 't' + Date.now(),
            };
        });
    };

    handleTouchMove = (e) => {
        e.preventDefault();
        this.handleMouseMove(e.touches[0]);
    };

    willLeave = (styleCell) => {
        return {
            ...styleCell.style,
            opacity: spring(0, leavingSpringConfig),
            scale: spring(2, leavingSpringConfig),
        };
    };

    render() {
        const { mouse: [mouseX, mouseY], now } = this.state;
        const styles = mouseX == null ? [] : [{
            key: now,
            style: {
                opacity: spring(1),
                scale: spring(0),
                x: spring(mouseX),
                y: spring(mouseY),
            }
        }];
        return (<div style={{paddingTop: 20}}>
            <h4 style={{ color: "white" }}>Drag the mouse see the sparkle!!!</h4>

            <TransitionMotion willLeave={this.willLeave} styles={styles}>
                {circles =>
                    <div
                        style={{
                            width: this.state.screen.width,
                            height: this.state.screen.height
                        }}
                        onMouseMove={this.handleMouseMove}
                        onTouchMove={this.handleTouchMove}
                        className="demo7">
                        {circles.map(({ key, style: { opacity, scale, x, y } }) =>
                        
                            <div
                                key={key}
                                className="demo7-ball"
                                style={{
                                    opacity: opacity,
                                    scale: scale,
                                    transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
                                    WebkitTransform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
                                }} />
                        )}

                    </div>
                }
            </TransitionMotion>
        </div>
        );
    };
}