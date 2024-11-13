/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import {Link} from 'react-router-dom'
import {Dropdown1} from '../../../_metronic/partials'
import {useLocation} from 'react-router-dom'
import { GMapify } from  'g-mapify';
import  'g-mapify/dist/index.css';
import { GoogleMapUI } from './googleMap'

const ProfileHeader: React.FC = () => {
  const location = useLocation()

  return (
    <div className='card mb-5 mb-xl-10'>
      <div className='card-body pt-9 pb-0'>
        <div className='row mb-7'>
          <div className='col-lg-3'>
            <label className='col-lg-12 fw-bold text-muted'>Camera</label>
            <div className='col-lg-12 mb-3'>
              <input
                    type='text'
                    className='form-control form-control-sm form-control-solid col-lg-12 mb-3 mb-lg-0'
                    placeholder='Search camera'
                  />
            </div>

            <div className='col-lg-12'>
              <label className='form-check form-check-custom form-check-solid mb-5'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    name='layout-builder[layout][header][fixed][desktop]'
                  />
                  <span className='form-check-label text-muted'>SP_office</span>
                </label>
                <label className='form-check form-check-custom form-check-solid mb-5'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    name='layout-builder[layout][header][fixed][desktop]'
                  />
                  <span className='form-check-label text-muted'>sp_01(192.168.60.100)</span>
                </label>
                <label className='form-check form-check-custom form-check-solid mb-5'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    name='layout-builder[layout][header][fixed][desktop]'
                  />
                  <span className='form-check-label text-muted'>sp_02(192.168.60.100)</span>
                </label>
            </div>
          </div>

          <div className='col-lg-9' style={{ height: '70vh' }}>
            <GoogleMapUI />
          </div>
        </div>
      </div>
    </div>
  )
}

export {ProfileHeader}
