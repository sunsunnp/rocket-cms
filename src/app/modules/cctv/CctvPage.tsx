import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {ProfileHeader} from './CctvHeader'
const profileBreadCrumbs: Array<PageLink> = [
  {
    title: 'กล้องวงจรปิด',
    path: '/cctv',
    isSeparator: false,
    isActive: false,
  },
]

const CCTVPage: React.FC = () => {
  return (
    <>
      <PageTitle>กล้องวงจรปิด</PageTitle>
      <ProfileHeader />
    </>
  )
}

export default CCTVPage
