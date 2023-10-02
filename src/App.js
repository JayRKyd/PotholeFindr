

import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import MapView from './views/MapView';
import SignInAuthView from './views/SignInAuthView'
import SignUpAuthView from './views/SignUpAuthView';
import { UserButton, SignedOut, SignedIn } from '@clerk/clerk-react';
import UserView from './views/UserView';
import ReportPothole from './views/ReportPothole';
if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw "Missing Publishable Key"
}
function App() {
  return (
    <BrowserRouter>
      {/* <UserButton afterSignOutUrl='/' /> */}
      <Routes>
      <Route path="/" element={<MapView />} />
      <Route path='/report' element={<ReportPothole />} />
      <Route path='/signin' element={
      <SignedOut>
      <SignInAuthView />
      </SignedOut>
      } />
      <Route path='/signup' element={
      <SignedOut>
      <SignUpAuthView />
      </SignedOut>
      } />
      <Route path='/users' element=
      <SignedIn>
      <UserView />
      </SignedIn>
       />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
