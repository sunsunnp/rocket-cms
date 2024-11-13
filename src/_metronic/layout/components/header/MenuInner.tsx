import React from 'react'
import {MenuItem} from './MenuItem'
import {MenuInnerWithSub} from './MenuInnerWithSub'
import {MegaMenu} from './MegaMenu'
import {useIntl} from 'react-intl'

export function MenuInner() {
  const intl = useIntl()
  return (
    <>
      <MenuItem title={intl.formatMessage({id: 'MENU.DASHBOARD'})} to='/dashboard' />
      {/* <MenuItem title='Layout Builder' to='/builder' /> */}
      <MenuItem title='ระบบแผนที่สำหรับเหตุการณ์' to='/map' />
      <MenuItem title='ระบบอ่านป้ายทะเบียน' to='/read-license' />
      <MenuInnerWithSub
          title='ระบบจราจร'
          to='/traffic'
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/traffic/1' title='ฝ่าไฟแดง' hasBullet={true} />
          <MenuItem to='/traffic/2' title='ฝ่าฝืนเส้นทึบ' hasBullet={true} />
          <MenuItem to='/traffic/3' title='ไม่สวมหมวกกันน๊อก' hasBullet={true} />
        </MenuInnerWithSub>

      <MenuItem title='กล้องวงจรปิด' to='/cctv' />
      <MenuItem title='Videowall' to='/videowall' />
      <MenuItem title='แจ้งเหตุ' to='/info' />
    </>
  )
}
