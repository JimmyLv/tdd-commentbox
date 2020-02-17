import React from 'react'
import { TabBar } from 'antd-mobile'
import { useHistory, useLocation } from 'react-router-dom'
import styles from './index.less'

const TabBarData = [
  {
    id: 'home',
    name: '书架',
    icon: require('../../assets/recycleH5_07.png'),
    selectedIcon: require('../../assets/recycleH5_02.png'),
    url: '/home',
  },
  {
    id: 'recommend',
    name: '推荐',
    icon: require('../../assets/recycleH5_03.png'),
    selectedIcon: require('../../assets/recycleH5_06.png'),
    url: '/recommend',
  },
  {
    id: 'donate',
    name: '捐赠',
    icon: require('../../assets/recycleH5_19.png'),
    selectedIcon: require('../../assets/recycleH5_19.png'),
    url: '/donate',
  },
  {
    id: 'profile',
    name: '我的',
    icon: require('../../assets/recycleH5_04.png'),
    selectedIcon: require('../../assets/recycleH5_05.png'),
    url: '/profile',
  },
]

function BaseLayout({ children }) {
  const history = useHistory()
  const location = useLocation()

  const isTabBarSelect = url => {
    if (location.pathname === '/' && url === '/home') {
      return true
    } else {
      return location.pathname === url
    }
  }

  const renderIcon = icon => (
    <div
      style={{
        width: '22px',
        height: '22px',
        background: `url(${icon}) center center /  21px 21px no-repeat`,
      }}
    />
  )
  return (
    <div className={styles.base}>
      <TabBar
        unselectedTintColor="#333"
        tintColor="#ef5f55"
        barTintColor="white"
        tabBarPosition="bottom"
      >
        {TabBarData.map(t => {
          const isSelect = isTabBarSelect(t.url)
          return (
            <TabBar.Item
              title={t.name}
              key={t.id}
              icon={renderIcon(t.icon)}
              selectedIcon={renderIcon(t.selectedIcon)}
              // badge={1}
              onPress={() => history.push(t.url)}
              selected={isSelect}
              data-seed="logId"
            >
              {isSelect && children}
            </TabBar.Item>
          )
        })}
      </TabBar>
    </div>
  )
}

export default BaseLayout
