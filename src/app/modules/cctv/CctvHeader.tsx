/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import {Link} from 'react-router-dom'
import {Dropdown1} from '../../../_metronic/partials'
import {useLocation} from 'react-router-dom'
import { ListCCTV } from './ListCCTV'

const ProfileHeader: React.FC = () => {
  const location = useLocation()

  return (
    <div className='card mb-5 mb-xl-10'>
      <div className='card-body pt-9 pb-0'>
        <div className='row mb-6'>
          <div className='col-lg-2 fv-row'>
            <label className='col-lg-12 col-form-label fw-bold fs-6'>Filter</label>
              <select
                  className='form-select form-select-solid form-select-sm'
                >
                  <option value=''>Choose a camera...</option>
                </select>
            <label className='col-lg-12 col-form-label fw-bold fs-6'>Date Time</label>
            <div className='col-lg-12 fv-row mb-6'>
              <input
                type='date'
                className='form-control form-control-sm form-control-solid col-lg-12 mb-3 mb-lg-0'
                placeholder='Form'
              />
             </div>
             <div className='col-lg-12 fv-row'>
              <input
                type='date'
                className='form-control form-control-sm form-control-solid col-lg-12 mb-3 mb-lg-0'
                placeholder='Form'
              />
             </div>
             <label className='col-lg-12 col-form-label fw-bold fs-6'>Rule</label>
             <select
                  className='form-select form-select-solid form-select-sm'
                >
                  <option value=''>Rule</option>
                </select>
            <div className='col-lg-12 fv-row mt-6'>
              <input
                type='text'
                className='form-control form-control-sm form-control-solid col-lg-12 mb-3 mb-lg-0'
                placeholder='Rule Name'
              />
            </div>
            <div className='col-lg-12 fv-row mt-6'>
              <div className='row'>
                <div className='col-lg-6 fv-row mt-6'>
                  <button type='button' className='btn btn-danger'>
                    Reset
                  </button>
                </div>
                <div className='col-lg-6 fv-row mt-6'>
                  <button type='button' className='btn btn-primary'>
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-10 fv-row'>
            <ListCCTV />
            <ListCCTV />
            <ListCCTV />
            <ListCCTV />
          </div>
        </div>
      </div>
    </div>
  )
}

export {ProfileHeader}
