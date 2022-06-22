import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <div>
        <h3>
            Category Page
        </h3>
        <div>
            <span>Detail Page</span>
            <div>
                <Link style={{ margin: '24px' }} to="/detail/Beef">Beef</Link>
                <Link style={{ margin: '24px' }} to="/detail/Seafood">Seafood</Link>
                <Link style={{ margin: '24px' }} to="/detail/Chicken">Chicken</Link>
            </div>
        </div>
    </div>
  )
}

export default Category
