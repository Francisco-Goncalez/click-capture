import React, { Fragment } from 'react';

const ClickCaptureFunc = (props) => {

  const executaAntes = () => {
    alert("Executou onClick do clone");
    props.children.props.onClick();
  }

  const renderChildren = () => {
    return React.Children.map(props.children, clone => {
      return React.cloneElement(clone, {
        onClick: executaAntes
      });
    });
  }

    return <Fragment>{renderChildren()}</Fragment>
}

export default ClickCaptureFunc;