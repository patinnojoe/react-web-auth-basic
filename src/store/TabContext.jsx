import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const TabContext = createContext({
  activeIndex: 0,
  setActiveIndex: () => {},
});

const TabContextProvider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const values = {
    activeIndex,
    setActiveIndex,
  };

  return <TabContext.Provider value={values}>{children}</TabContext.Provider>;
};

export default TabContextProvider;
TabContextProvider.propTypes = {
  children: PropTypes.node,
};
