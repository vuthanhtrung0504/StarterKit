import React from 'react';

const navigationRef = React.createRef();

const navigate = (name, params) => {
  name && navigationRef?.current?.navigate(name, params);
};

const dispatch = action => {
  action && navigationRef?.current?.dispatch(action);
};

export { navigationRef, navigate, dispatch };
