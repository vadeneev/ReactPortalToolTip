import React from 'react';
import propTypes from 'prop-types';
import {PortalTipContent} from './PortalTipContent';

class PortalTipContainer extends React.PureComponent {
  _timeoutID = 0;

  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.state = {
      shouldShowToolTip: false,
      wasClosedManually: false,
    };

    this.showToolTip = this.showToolTip.bind(this);
    this.entersTarget = this.entersTarget.bind(this);
    this.closeToolTip = this.closeToolTip.bind(this);
    this.scheduleClose = this.scheduleClose.bind(this);
    this.clickTarget = this.clickTarget.bind(this);
    this.wipeTimer = this.wipeTimer.bind(this);
    this.leavesTarget = this.leavesTarget.bind(this);
    this.subscribeCloseHandlers = this.subscribeCloseHandlers.bind(this);
    this.unSubscribeCloseHandlers = this.unSubscribeCloseHandlers.bind(this);
  }

  componentWillUnmount() {
    this.unSubscribeCloseHandlers();
    this.wipeTimer();
  }

  subscribeCloseHandlers() {
    window.addEventListener('resize', this.closeToolTip);
    window.addEventListener('scroll', this.closeToolTip);
  }

  unSubscribeCloseHandlers() {
    window.removeEventListener('resize', this.closeToolTip);
    window.removeEventListener('scroll', this.closeToolTip);
  }

  clickTarget(event) {
    event.stopPropagation();
    if (this.state.shouldShowToolTip) {
      this.setState({wasClosedManually: true});
      this.closeToolTip();
      return false;
    }

    this.showToolTip({keepOpen: true});
    this.subscribeCloseHandlers();
    this.setState({wasClosedManually: false});
    return true;
  }

  entersTarget() {
    this.setState({shouldShowToolTip: true});
    this.wipeTimer();
  }

  leavesTarget(event) {
    if (this.isFalsePositive(event)) {
      return false;
    }

    if (this.state.wasClosedManually) {
      this.setState({wasClosedManually: false});
      return false;
    }

    this.scheduleClose();
    return true;
  }

  isFalsePositive(event) {
    // fast click causes false positive mouseleave event in chrome
    const element = document.elementFromPoint(event.clientX, event.clientY);

    return [...this.ref.current.childNodes].indexOf(element) !== -1;
  }

  showToolTip({keepOpen = false} = {keepOpen: false}) {
    this.wipeTimer();
    this.setState({shouldShowToolTip: true});
    !keepOpen && this.scheduleClose();
  }

  wipeTimer() {
    clearTimeout(this._timeoutID);
  }

  scheduleClose() {
    this.wipeTimer();
    if (this.props.autoHide) {
      this._timeoutID = setTimeout(this.closeToolTip, this.props.hideDelay);
    }
  }

  closeToolTip() {
    this.wipeTimer();
    this.unSubscribeCloseHandlers();
    this.props.willCloseCallback && this.props.willCloseCallback();
    this.setState({shouldShowToolTip: false});
  }

  isToolTipContent(element) {
    return element.hasOwnProperty('type') && element.type.hasOwnProperty('name') && element.type.name === PortalTipContent.displayName;
  }

  getToolTipItems(children) {
    let target = [];
    let content;

    for (let i in children) {
      if (this.isToolTipContent(children[i])) {
        content = children[i];
        continue;
      }

      target.push(children[i]);
    }

    return {target, content};
  }

  render() {
    const {target, content} = this.getToolTipItems(this.props.children);
    const tooltip = this.state.shouldShowToolTip && (React.cloneElement(content, {targetElement: this.ref.current}));

    return (
      <div onMouseEnter={this.entersTarget} onMouseLeave={this.leavesTarget} onMouseDown={this.clickTarget}
        className={`portal-tip__target ${this.props.containerClassNames}`}
        ref={this.ref}>

        {tooltip}
        {target}

      </div>);
  }
}

const childrenPropTypeLogic = (props, propName, componentName) => {
  const prop = props[propName];
  const chArr = React.Children.toArray(prop);

  if (!chArr.find(child => child.type.name === PortalTipContent.displayName)) {
    return new Error(`${componentName} requires PortalTipContent with content you want to show.`);
  }

  return null;
};

PortalTipContainer.propTypes = {
  hideDelay: propTypes.oneOfType([propTypes.string, propTypes.number]),
  autoHide: propTypes.bool.isRequired,
  disableHoverShow: propTypes.bool.isRequired,
  willCloseCallback: propTypes.func,
  children: childrenPropTypeLogic,
  forceShowToolTip: propTypes.bool,
  containerClassNames: propTypes.string,
};

PortalTipContainer.defaultProps = {
  hideDelay: 0,
  autoHide: true,
  disableHoverShow: false,
  forceShowToolTip: false,
  containerClassNames: '',
};

export {PortalTipContainer};