import { useState } from 'react'
import { FaRegBell } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Header() {
  const [location, setLocation] = useState('Sukabumi, Jawa barat')

  return (
    <div className=":uno: flex justify-between items-center mb-6 px-4 pt-4">
      <div className=":uno: flex items-center bg-gray-200 rounded-full px-4 py-2 text-black gap-2">
        <FaLocationDot />
        <span>{location}</span>
      </div>
      <div className=":uno: relative rounded-full p-4 bg-gray-200">
        <Link to="/notifications">
          <FaRegBell className=":uno: h-6 w-6 text-black" />
          <span className=":uno: absolute top-4 right-4 bg-red-500 text-white text-xs rounded-full h-2 w-2 flex items-center justify-center">
            &nbsp;
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Header
