import { useState } from 'react';
import { Calendar, Home, Flag, Settings, Layers, LayoutDashboard, LifeBuoy, StickyNote } from 'lucide-react';
import Sidebar, { SidebarItem } from './Component/Sidebar';

function App() {

  return (
    <>
      <div className='flex'>
        <Sidebar>
          <SidebarItem icon={<Home size={20} />} text="Home" alert />
          <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" active />
          <SidebarItem icon={<StickyNote size={20} />} text="Project" alert/>
          <SidebarItem icon={<Calendar size={20} />} text="Calender" />
          <SidebarItem icon={<Layers size={20} />} text="Tasks" />
          <SidebarItem icon={<Flag size={20} />} text="Reporting" />
          <hr className='my-3' />
          <SidebarItem icon={<Settings size={20} />} text="Setting" />
          <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
        </Sidebar>
      </div>
    </>
  )
}

export default App;
