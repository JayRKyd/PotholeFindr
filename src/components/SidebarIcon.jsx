import React from 'react';
import { IconButton } from '@mui/material';

const SidebarIcon = ({ text, icon }) => (
  <div className='relative cursor-pointer flex items-center justify-center p-2 h-12 w-12 mb-4 mt-2 mx-auto shadow-kg bg-gray-500 text-gray-500 hover:bg-green-500 hover:text-white rounded-3xl hover:rounded-xl transition-all duration-500 ease-linear'>
    {icon}
    <span className='absolute p-2 m-2 w-auto min-w-max rounded-md left-14 shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 origin-left scale-0 group-hover:scale-100'>
      {text}
    </span>
  </div>
);

export default SidebarIcon;