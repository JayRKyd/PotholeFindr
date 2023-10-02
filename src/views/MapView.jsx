import React from 'react'
import { Link } from 'react-router-dom'
import magnifyingGlass from '../images/magnifying-glass.svg'
import MapComponent from '../components/MapComponent'
import SignedInHeader from '../components/SignedInHeader'
import { UserButton, useClerk } from '@clerk/clerk-react'
const MapView = () => {

    const { isSignedIn} = useClerk();
    console.log('Is User Signed In:', isSignedIn);
  return (
    <>
<div className='flex flex-col items-center justify-center bg-slate-500 p-4'>
  <div className='flex items-center mb-3'>
    <img src={magnifyingGlass} alt="magnifying-glass" width={34} height={34} />
    <h1 className='text-3xl font-bold ml-1 tracking-tight text-white'>PotholeFinder</h1>
  </div>
  <div className='flex flex-col gap-2 w-full flex-center-column'>
    {/* Login Button */}
    <Link to='/signin' className="flex max-w-fit items-center justify-center rounded-lg border border-gray-600 text-white px-5 py-2 text-sm shadow-md hover:bg-gray-400 bg-gray-600 font-medium transition">Login</Link>
    
    {/* Signup Button */}
    <Link to='/signup' className="flex max-w-fit items-center justify-center rounded-lg border border-gray-600 text-white px-5 py-2 text-sm shadow-md hover:bg-gray-400 bg-gray-600 font-medium transition">Sign Up</Link>
    
    {/* Report Button */}
    <Link to='/report' className="flex max-w-fit items-center justify-center rounded-lg border border-blue-600 text-white px-5 py-2 text-sm shadow-md hover:bg-blue-400 bg-blue-600 font-medium transition">Report a Pothole</Link>
  </div>
</div>
          <MapComponent />

    </>
  )
}

export default MapView