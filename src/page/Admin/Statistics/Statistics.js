import './Statistics.scss'
import AdminHeader from '../../../components/AdminHeader/AdminHeader'
import FooterAdmin from '../../../components/AdminFooter/AdminFooter'
import SidebarAdmin from '../../../components/SidebarAdmin/SidebarAdmin'
import { Bar } from 'react-chartjs-2'
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);

const Statistics = () => {
  return (
    <div className='container-stactistics'>
        <AdminHeader />
        <div className='content'>
            <SidebarAdmin />
            <div className='content-right'>
                <h3>Thống kê</h3>
                <div className='top'>
                    <div className='item'>
                        <div className='left'>
                            <i className="order fa-solid fa-cart-shopping"></i>
                        </div>
                        <div className='right'>
                            <span className='title'>Đơn hàng</span>
                            <span className='quanlity'>10</span>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='left'>
                            <i className="inventory fa-solid fa-bag-shopping"></i>
                        </div>
                        <div className='right'>
                            <span className='title'>Tồn kho</span>
                            <span className='quanlity'>15</span>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='left'>
                            <i className="user fa-regular fa-user"></i>
                        </div>
                        <div className='right'>
                            <span className='title'>Khách hàng</span>
                            <span className='quanlity'>20</span>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='left'>
                            <i className="renvenue fa-solid fa-dollar-sign"></i>
                        </div>
                        <div className='right'>
                            <span className='title'>Doanh thu</span>
                            <span className='quanlity'>22</span>
                        </div>
                    </div>
                </div>
                <div className='center'>
                    <Bar
                        data={{
                            labels:['Tháng 1', 'Tháng 2', 'Tháng 3'],
                            datasets:[{
                                label: 'Doanh thu',
                                data: [100, 200, 300],
                                backgroundColor: 'red',
                                barThickness: 60
                            }],
                        }}
                        options={{
                            scales: {
                                x: {
                                    scaleLabel: {
                                        labelString: 'Months',
                                        display: true
                                    }
                                },
                                y: {
                                    scaleLabel: {
                                        labelString: 'Revenue',
                                        display: true
                                    },
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }
                            }
                        }}
                    >
                    </Bar>
                </div>
            </div>
        </div>
        <FooterAdmin />
    </div>
  )
}

export default Statistics