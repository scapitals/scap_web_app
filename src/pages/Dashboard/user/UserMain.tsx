import Sidebar from '../Sidebar'
import { Route, Routes } from 'react-router-dom'
import { UserHome, UserKyc, UserRefferals, UserSettings, UserSupport, UserWallet } from './pages'

const UserMain = () => {
  return (
    <Sidebar>
        <Routes>
            <Route path='home' element={<UserHome />} />
            <Route path='wallet' element={<UserWallet />} />
            <Route path='kyc' element={<UserKyc />} />
            <Route path='support' element={<UserSupport />} />
            <Route path='settings' element={<UserSettings />} />
            <Route path='refferals' element={<UserRefferals />} />
        </Routes>
    </Sidebar>
  )
}

export default UserMain;