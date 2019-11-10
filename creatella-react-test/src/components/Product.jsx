import React from 'react'
import * as money from '../utils/money'
import * as timestamp from '../utils/timestamp'

const Product = ({ id, data, dispatch }) => {
  // get variables from data
  const { size, price, face, date } = data

  // define the style to the ascii face
  const fontSizeStyle = {
    fontSize: `${size}px`
  }

  return (
    <div className='mdl-cell mdl-cell--4-col'>
      <div className='mdl-card mdl-shadow--2dp'>
        <div
          className='mdl-card__title mdl-card--expand ascii-face'
          style={fontSizeStyle}
        >
          { face }
        </div>
        <div className='mdl-card__actions'>
          <div className='mdl-card__actions--title'>
            <div className='mdl-typography--title-color-contrast'>
              $ { money.fromCents(price) }
            </div>
            <div className='mdl-typography--caption-color-contrast'>
              { timestamp.fromNow(date) }
            </div>
          </div>
          <div className='mdl-layout-spacer' />
          <button
            className={
              'mdl-button mdl-js-button mdl-button--fab ' +
              'mdl-js-ripple-effect mdl-button--colored'
            }
            onClick={onAddShoppingCartClick}
          >
            <i className='material-icons'>add_shopping_cart</i>
          </button>
        </div>
      </div>
    </div>
  )
}


export default Product
