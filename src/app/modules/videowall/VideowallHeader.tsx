/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import {Link} from 'react-router-dom'
import {Dropdown1} from '../../../_metronic/partials'
import {useLocation} from 'react-router-dom'
import { GMapify } from  'g-mapify';
import  'g-mapify/dist/index.css';

const VideowallHeader: React.FC = () => {
  useEffect(() => {
    window.addEventListener("load", function () {

      // select parent of dish
      let scenary = document.getElementsByClassName("Scenary")[0];

      // create dish
      let dish = new Dish(scenary);

      // set controls (optional)
      let controls = new Controls(dish, scenary);
      controls.append();

      // render dish
      dish.append();

      // resize the cameras
      dish.resize()

      // resize event of window
      window.addEventListener("resize", function () {

          // resize event to dimension cameras
          dish.resize();

      });

    }, false);
  }, []);

  return (
    <div className='card mb-5 mb-xl-10'>
      <div className='card-body pt-9 pb-0'>
        <div className='row mb-7'>
          <div className="Scenary"></div>
        </div>
      </div>
    </div>
  )
}

export {VideowallHeader}
