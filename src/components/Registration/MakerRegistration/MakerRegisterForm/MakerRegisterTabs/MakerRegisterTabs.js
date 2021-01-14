import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import MakerRegisterBusinessTab from '../MakerRegisterBusinessTab/MakerRegisterBusinessTab';
import MakerRegisterProductsTab from '../MakerRegisterProductsTab/MakerRegisterProductsTab';
import MakerRegisterStoryTab from '../MakerRegisterStoryTab/MakerRegisterStoryTab';


const MakerRegisterTabs = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Business
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Products
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            Story
          </NavLink>
        </NavItem>
      </Nav>

        <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
                <MakerRegisterBusinessTab/>
            </TabPane>
            <TabPane tabId="2">
                <MakerRegisterProductsTab/>
            </TabPane>
            <TabPane tabId="3">
                <MakerRegisterStoryTab/>
            </TabPane>
        </TabContent>
    </div>
  );
}

export default MakerRegisterTabs;