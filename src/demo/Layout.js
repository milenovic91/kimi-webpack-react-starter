import React from 'react';
import classnames from 'classnames';
import './scss/Layout.scss';

export function Container ({children, className}) {
  return (
    <div className={classnames('container', className)}>{children}</div>
  );
}

export function Row ({children, className}) {
  return (
    <div className={classnames('row', className)}>{children}</div>
  );
}

export function Col ({
  xs,
  sm,
  md,
  lg,
  xl,
  children,
  className
}) {
  return (
    <div className={classnames(className, {
      [`col`]: true,
      [`col-${xs}`]: xs > 0,
      [`col-sm-${sm}`]: sm > 0,
      [`col-md-${md}`]: md > 0,
      [`col-lg-${lg}`]: lg > 0,
      [`col-xl-${xl}`]: xl > 0,
    })}>{children}</div>
  );
}
