/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import {Link} from 'react-router-dom'
import {Dropdown1} from '../../../_metronic/partials'
import {useLocation} from 'react-router-dom'

const ProfileHeader: React.FC = () => {
  const location = useLocation()

  return (
    <div className='card mb-5 mb-xl-10'>
      <div className='card-body pt-9 pb-0'>
        <div className='row mb-6'>
          <div className='col-lg-11 fv-row'>
              <select
                  className='form-select form-select-solid form-select-lg'
                >
                  <option value=''>Choose a camera...</option>
                </select>
          </div>
          <div className='col-lg-1 fv-row'>
            <button type='button' className='btn btn-primary'>
              map
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export {ProfileHeader}
