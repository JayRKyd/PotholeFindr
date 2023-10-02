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
      <div className='flex justify-between items center bg-slate-500'>
      <div className='flex items-center mb-3 ml-3'>
      <img src={magnifyingGlass} alt="magnifying-glass" width={34} height={34} />
      <h1 className='sm:text-3xl text-xl font-bold ml-1 tracking-tight text-white'>PotholeFinder</h1>
      </div>
      <div className='flex justify-end mt-3 border-b pb-7 sm:px-4 px-2 border-gray-500 gap-4 w-full'>
      {isSignedIn ? (
        <>
        <SignedInHeader />
        <UserButton />
        <Link to='/signin' className="flex max-w-fit items-center justify-center space-x-2 rounded-lg border border-gray-600 text-white px-5 py-2 text-sm shadow-md hover:bg-gray-400 bg-gray-600 font-medium transition">Login</Link>
          <Link to='/signup' className="gone">SignUp</Link>
        </>
      ) : (
        <>
          <Link to='/signin' className="flex max-w-fit items-center justify-center space-x-2 rounded-lg border border-gray-600 text-white px-5 py-2 text-sm shadow-md hover:bg-gray-400 bg-gray-600 font-medium transition">Login</Link>
          <Link to='/signup' className="flex max-w-fit items-center justify-center space-x-2 rounded-lg border border-gray-600 text-white px-5 py-2 text-sm shadow-md hover:bg-gray-400 bg-gray-600 font-medium transition">SignUp</Link>
        </>
      )}
      <Link to='/report' className="flex max-w-fit items-center justify-center space-x-2 rounded-lg border border-blue-600 text-white px-5 py-2 text-sm shadow-md hover:bg-blue-400 bg-blue-600 font-medium transition">Report a Pothole</Link>
    </div>
        </div>
          <MapComponent />

    </>
  )
}

export default MapView