import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Overview} from './components/Overview'
import {Projects} from './components/Projects'
import {Campaigns} from './components/Campaigns'
import {Documents} from './components/Documents'
import {Connections} from './components/Connections'
import {ProfileHeader} from './ReadLicenseHeader'
import { ListLicense } from './ListLicense'

const profileBreadCrumbs: Array<PageLink> = [
  {
    title: 'ระบบแผนที่ สำหรับเหตุการณ์',
    path: '/map',
    isSeparator: false,
    isActive: false,
  },
]

const ReadLicense: React.FC = () => {
  return (
    <>
      <PageTitle>ระบบอ่านป้ายทะเบียน</PageTitle>
      <ProfileHeader />
      <ListLicense />
      <ListLicense />
      <ListLicense />
    </>
  )
}

export default ReadLicense
