import { useContext } from 'react';
import { TabContext } from '../store/TabContext';

export const TabButton = ({ tabs }) => {
  const tabContext = useContext(TabContext);

  return tabs.map((tab, index) => (
    <button
      key={index}
      className={tabContext.activeIndex === index ? 'active tab-btn' : 'tab-btn'}
      onClick={() => tabContext.setActiveIndex(index)}
    >
      {tab.name}
    </button>
  ));
};

export const TabContent = ({ tabs }) => {
  const tabContext = useContext(TabContext);
  return tabs.map((tab, index) => (
    <div className={tabContext.activeIndex === index ? 'tab-content active' : 'tab-content'} key={index}>
      {tab.content}
    </div>
  ));
};
