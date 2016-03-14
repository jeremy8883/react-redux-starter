import React from 'react';

const FormGroup = ({ children, ...props}) => (
  <div className="py2" {...props}>
    { children }
  </div>
);

FormGroup.propTypes = {
  children: React.PropTypes.node,
  id: React.PropTypes.string,
};

export default FormGroup;
