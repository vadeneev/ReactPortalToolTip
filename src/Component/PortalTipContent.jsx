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
    let tooltipWidth = this.bodyRef.current.scrollWidth;
    let tooltipHeight = this.bodyRef.current.scrollHeight;
    let arrowWidth = this.arrowRef.current.offsetWidth;
    let arrowHeight = this.arrowRef.current.offsetHeight;

    switch (this.props.position) {
      case 'auto':
      case 'bottom':
      case 'left':
      case 'right':
        console.warn('not implemented');
        break;
      default:
        ({body, arrow} = this.calculateTopPosition({
          left,
          top,
          visibleWidth,
          arrowHeight,
          tooltipHeight,
          tooltipWidth,
          arrowWidth
        }));
        break;
    }

    this.setState({body, arrow});
  }

  calculateTopPosition({left, top, visibleWidth, arrowHeight, tooltipHeight, tooltipWidth, arrowWidth}) {
    const nextLeft = left + visibleWidth / 2 - tooltipWidth / 2;
    const body = {...this.reviewXaxis(nextLeft, tooltipWidth), ...{top: top - tooltipHeight - arrowHeight}};
    const arrow = {
      top: top - arrowHeight,
      left: left + visibleWidth / 2 - arrowWidth / 2
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
