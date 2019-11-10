import React from 'react'
import '../styles/SortMenu.scss'

const SortMenu = ({ currentSort, options }) => {
  // initialize the items array
  let items = []

  // iterate over options
  options.map((option, index) => {
    // define if current option is selected
    const selected = option.sort === currentSort

    // define class name if item is selected
    const selectedClassName = selected ? 'is-selected' : ''

    // click function to execute when click on option item
    const onOptionClick = () => {
      if (!selected) {
       // dispatch(sortVisibleGridBy(option.sort))
      }
    }

    // push the option to the items array
    items.push(
      <li
        key={index}
        className={`mdl-menu__item ${selectedClassName}`}
        onClick={onOptionClick}
        disabled={selected}
      >
        {
          !selected ? '' : (
            <i className='material-icons'>check</i>
          )
        }
        <span>{ option.name }</span>
      </li>
    )
  })

  return (
    <div className='sort-menu'>
      <ul
        className='mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect'
        htmlFor='sort-menu'
      >
        <li className='header'>Sort by</li>
        { items }
      </ul>
      <button
        className='mdl-button mdl-js-button mdl-button--icon sort-button'
        id='sort-menu'
      >
        <i className='material-icons'>
          sort
        </i>
      </button>
    </div>
  )
}


export default SortMenu
