/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import {Link} from 'react-router-dom'
import {Dropdown1} from '../../../_metronic/partials'
import {useLocation} from 'react-router-dom'

const ListLicense: React.FC = () => {
  const location = useLocation()

  return (
    <div className='card mb-5 mb-xl-10'>
      <div className='card-body pt-9 pb-0'>
        <div className='row mb-6'>
          <div className='col-lg-2 fv-row'>
            <div className='me-7 mb-4'>
              <div className='symbol symbol-100px symbol-lg-160px symbol-fixed position-relative'>
                <img src={toAbsoluteUrl('/media/avatars/การขับแซง3.jpg')} alt='Metornic' style={{ width: '100%' }}/>
              </div>
            </div>
          </div>
          <div className='col-lg-9 fv-row' style={{ marginTop: '-5px' }}>
            <div className='row'>
              <div className='col-lg-7 fv-row'>
                <label className='col-lg-2 col-form-label fw-bold fs-6'>รายละเอียด</label>
                <label className='col-lg-4 col-form-label fw-bold fs-6' style={{ color: 'blue' }}>ค้นหาป้ายทะเบียนนี้</label>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-4 fv-row'>
                <label className='col-lg-12 col-form-label fw-bold fs-6'>Time: 13 Aug 2024 15:13</label>
              </div>
              <div className='col-lg-4 fv-row'>
                <label className='col-lg-12 col-form-label fw-bold fs-6'>ชื่อกล้อง: sp_05</label>
              </div>
              <div className='col-lg-4 fv-row'>
                <label className='col-lg-12 col-form-label fw-bold fs-6'>โซน: sp_office</label>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-4 fv-row'>
                <label className='col-lg-12 col-form-label fw-bold fs-6'>Type: xxxxxxxxxxxxxxx</label>
              </div>
              <div className='col-lg-8 fv-row'>
                <label className='col-lg-12 col-form-label fw-bold fs-6'>จุดตั้งกล้อง: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</label>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-12 fv-row'>
                <label className='col-lg-12 col-form-label fw-bold fs-6'>ข้อมูลอื่นๆ: -</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {ListLicense}
