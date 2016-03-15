var moduleName = 'phonecatAnimations';

function Animations() {
  let animateUp = (element, className, done) => {
    if (className != 'active') {
      return;
    }
    element.css({
      position: 'absolute',
      top: 500,
      left: 0,
      display: 'block'
    });
    $(element).animate({
      top: 0
    }, done);

    return (cancel) => {
      if (cancel) {
        element.stop();
      }
    };
  }

  let animateDown = (element, className, done) => {
    if(className != 'active') {
      return;
    }
    element.css({
      position: 'absolute',
      left: 0,
      top: 0
    });

    $(element).animate({
      top: -500
    }, done);

    return (cancel) => {
      if (cancel) {
        element.stop();
      }
    };
  }

  return {
    addClass: animateUp,
    removeClass: animateDown
  }
}

angular.module(moduleName, ['ngAnimate'])
  .animation('.phone', Animations);

export default moduleName;