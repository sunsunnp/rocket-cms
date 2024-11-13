import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Overview} from './components/Overview'
import {Projects} from './components/Projects'
import {Campaigns} from './components/Campaigns'
import {Documents} from './components/Documents'
import {Connections} from './components/Connections'
import {VideowallHeader} from './VideowallHeader'

const profileBreadCrumbs: Array<PageLink> = [
  {
    title: 'Videowall',
    path: '/videowall',
    isSeparator: false,
    isActive: false,
  },
]

const VideowallPage: React.FC = () => {
  return (
    <>
      <PageTitle>Videowall</PageTitle>
      <VideowallHeader />
    </>
  )
}

export default VideowallPage
