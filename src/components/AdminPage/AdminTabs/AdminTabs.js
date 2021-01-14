import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import AdminMakerTab from '../AdminTabs/AdminMakerTab/AdminMakerTab';
import AdminPARTab from '../AdminTabs/AdminRequestsTab/AdminParTab';



const AdminTabs = (props) => {
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
            Pending Approval Requests
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Makers
          </NavLink>
        </NavItem>        
      </Nav>
      {/* pulling in adminPARTab on tab #1 */}
        <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
                
                <AdminPARTab/>
            </TabPane>
      {/* pulling in adminMakerTab on tab #2 */}
            <TabPane tabId="2">
                <AdminMakerTab/>
            </TabPane>
        </TabContent>
    </div>
  );
}

export default AdminTabs;