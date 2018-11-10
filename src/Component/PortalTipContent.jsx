import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';

class PortalTipContent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.bodyRef = React.createRef();
    this.arrowRef = React.createRef();
    this.state = {
      body: {
        left: 0,
        top: 0,
      },
      arrow: {
        left: 0,
        top: 0
      }
    };

    this.setPositions = this.setPositions.bind(this);
    this.getDimensions = this.getDimensions.bind(this);
  }

  componentDidMount() {
    const targetBounds = this.props.targetElement.getBoundingClientRect();
    const {left, top} = this.getOffset(targetBounds);
    const visibleWidth = targetBounds.right - targetBounds.left;
    const visibleHeight = targetBounds.bottom - targetBounds.top;

    this.setPositions({left, top, visibleWidth, visibleHeight});
  }

  setPositions({left, top, visibleWidth, visibleHeight}) {
    let body = {};
    let arrow = {};

    switch (this.props.position) {
      case 'auto':
      case 'bottom':
        console.warn('not implemented');
        break;
      case 'left':
        ({body, arrow} = this.calculateLeftPosition({
          left,
          top,
          visibleHeight,
          visibleWidth
        }));
        break;
      case 'right':
        ({body, arrow} = this.calculateRightPosition({
          left,
          top,
          visibleHeight,
          visibleWidth
        }));
        break;
      default:
        ({body, arrow} = this.calculateTopPosition({
          left,
          top,
          visibleWidth
        }));
        break;
    }

    this.setState({body, arrow});
  }

  getDimensions() {
    const tooltipWidth = this.bodyRef.current.scrollWidth;
    const tooltipHeight = this.bodyRef.current.scrollHeight;
    const arrowWidth = this.arrowRef.current.offsetWidth;
    const arrowHeight = this.arrowRef.current.offsetHeight;

    return {tooltipHeight, tooltipWidth, arrowHeight, arrowWidth};
  }

  calculateTopPosition({left, top, visibleWidth}) {
    const {tooltipHeight, tooltipWidth, arrowHeight, arrowWidth} = this.getDimensions();
    const nextLeft = left + visibleWidth / 2 - tooltipWidth / 2;
    const body = {...this.reviewXaxis(nextLeft, tooltipWidth), ...{top: top - tooltipHeight - arrowHeight}};
    const arrow = {
      top: top - arrowHeight * 1.5,
      left: left + visibleWidth / 2 - arrowWidth / 2
    };

    return {body, arrow};
  }

  calculateRightPosition({left, top, visibleHeight, visibleWidth}) {    
    const {tooltipHeight, tooltipWidth, arrowHeight, arrowWidth} = this.getDimensions();
    const nextLeft = left + visibleWidth + arrowWidth;
    const nextTop = top + visibleHeight / 2  - tooltipHeight / 2;
    const body = {...{left: nextLeft}, ...this.reviewYaxis(nextTop, tooltipHeight)};    
    const arrow = {
      top: top + visibleHeight / 2 - arrowHeight / 2  ,
      left: left + visibleWidth + arrowWidth / 2
    };

    return {body, arrow};
  }

  calculateLeftPosition({left, top, visibleHeight, visibleWidth}) {    
    const {tooltipHeight, tooltipWidth, arrowHeight, arrowWidth} = this.getDimensions();
    const nextLeft = left - tooltipWidth - arrowWidth;
    const nextTop = top + visibleHeight / 2  - tooltipHeight / 2;
    const body = {...{left: nextLeft}, ...this.reviewYaxis(nextTop, tooltipHeight)};    
    const arrow = {
      top: top + visibleHeight / 2 - arrowHeight / 2,
      left: left - arrowWidth * 1.5
    };

    return {body, arrow};
  }

  reviewXaxis(nextLeft, bodyWidth) {
    let left = 5;
    let width = document.body.clientWidth - 10 + 'px';

    if (bodyWidth >= document.body.clientWidth) {
      return {left, width};
    }

    if (nextLeft <= 0) {
      return {left};
    }

    const rightOffset = document.body.clientWidth - bodyWidth - nextLeft;

    if (rightOffset < 0) {
      return {left: nextLeft + rightOffset - left};
    }

    return {left: nextLeft};
  }

  reviewYaxis(nextTop, bodyHeight) {
    const nextBottom = nextTop + bodyHeight;
    const curPageBottom = window.innerHeight + (window.scrollY || window.pageYOffset || 0);
    const top = 5;    

    if (nextBottom >= curPageBottom) {
      const newTop = nextTop - nextBottom + curPageBottom;

      return {top: newTop};
    }

    if (nextTop <= 0)
      return {top};

    return {top: nextTop};
  }

  getOffset(boundRect) {    
    const xOffset = window.scrollX || window.pageXOffset;
    const yOffset = window.scrollY || window.pageYOffset;
    const left = boundRect.left + xOffset;
    const top = boundRect.top + yOffset;

    return {left, top};
  }

  render() {
    const {position, width, maxWidth} = this.props;
    const bodyStyles = {...{width, maxWidth}, ...this.state.body};

    return ReactDOM.createPortal(
      <Fragment>

        <div ref={this.bodyRef} className={`portal-tip__body ${this.props.extraBodyClass}`} style={{...bodyStyles}}>
          {this.props.children}
        </div>

        {this.props.showArrow && <div
          ref={this.arrowRef}
          className={`portal-tip__arrow portal-tip__arrow--${position}`}
          style={{...this.state.arrow}}/>}

      </Fragment>,
      document.body);

  }
}

PortalTipContent.propTypes = {
  showArrow: propTypes.bool,
  width: propTypes.string,
  maxWidth: propTypes.string,
  extraBodyClass: propTypes.string,
  children: propTypes.any,
  position: propTypes.string,
  targetElement: propTypes.object
};

PortalTipContent.defaultProps = {
  width: 'auto',
  maxWidth: 'auto',
  position: 'top',
  showArrow: true,
  extraBodyClass: '',
};

PortalTipContent.displayName = 'PortalTipContent';

export {PortalTipContent};
