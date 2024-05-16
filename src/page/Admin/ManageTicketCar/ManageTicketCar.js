import './ManageTicketCar.scss'
import AdminHeader from '../../../components/AdminHeader/AdminHeader'
import AdminFooter from '../../../components/AdminFooter/AdminFooter'
import SidebarAdmin from '../../../components/SidebarAdmin/SidebarAdmin'

const ManageTicketCar = () => {
  return (
    <div className='manage-ticket-car'>
        <AdminHeader />
        <div className='content'>
            <SidebarAdmin />
        </div>
        <AdminFooter />
    </div>
  )
}

export default ManageTicketCar