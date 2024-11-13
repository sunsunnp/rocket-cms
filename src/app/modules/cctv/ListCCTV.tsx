/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import {Link} from 'react-router-dom'
import {Dropdown1} from '../../../_metronic/partials'
import {useLocation} from 'react-router-dom'

const ListCCTV: React.FC = () => {
  const location = useLocation()

  return (
    <div className='card mb-5 mb-xl-10'>
      <div className='card-body pt-9 pb-0'>
        <div className='row mb-6'>
          <div className='col-lg-3 fv-row'>
            <div className='me-7 mb-4'>
              <div className='symbol symbol-100px symbol-lg-160px symbol-fixed position-relative'>
                <img src={toAbsoluteUrl('/media/avatars/images1.jpeg')} alt='Metornic' />
              </div>
            </div>
          </div>
          <div className='col-lg-9 fv-row' style={{ marginTop: '-5px' }}>
            <div className='row mt-12'>
              <div className='col-lg-12 fv-row'>
                <label className='col-lg-3 col-form-label fw-bold fs-6'>1/08/2024 09:04:26</label>
                <label className='col-lg-3 col-form-label fw-bold fs-6'>Area Detection</label>
                <label className='col-lg-3 col-form-label fw-bold fs-6'>ตรวจจับคนเข้าพื้นที่</label>
                <label className='col-lg-3 col-form-label fw-bold fs-6' style={{ verticalAlign: 'middle' }}>SP_03 (192.168.60.100)</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {ListCCTV}
