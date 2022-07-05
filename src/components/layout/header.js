import React, {useState} from "react"
import { Link } from "gatsby"
import { Menu, Row } from 'antd';

import ThemeSwitch from '../general/ThemeSwitch'

const headerItems = [
    {
      label: (
        <Link to="/profiles" rel="noopener noreferrer">
          Profiles
        </Link>
      ),
      key: 'one',
    },
    {
      label: 'Navigation Two',
      key: 'two',
    },
    {
      label: 'Navigation Three - Submenu',
      key: 'three',
      children: [
        {
          type: 'group',
          label: 'Item 1',
          children: [
            {
              label: 'Option 1',
              key: 'three:1',
            },
            {
              label: 'Option 2',
              key: 'three:2',
            },
          ],
        },
        {
          type: 'group',
          label: 'four',
          children: [
            {
              label: 'Option 3',
              key: 'four:1',
            },
            {
              label: 'Option 4',
              key: 'four:2',
            },
          ],
        },
      ],
    },
    {
      label: (
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      ),
      key: 'alipay',
    },
  ];

  const Header = () => {

    const [current, setCurrent] = useState();
    const onClick = (e) => {
        setCurrent(e.key);
      };

    return (
      
        <Menu theme="light" onClick={onClick} selectedKeys={[current]} mode="horizontal" items={headerItems} />
      
    )
}

export default Header