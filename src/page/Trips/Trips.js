import React from 'react'
import './Trips.scss'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Search from '../../components/Search/Search'
import { connect } from "react-redux"
import * as actions from '../../store/actions'
import { useEffect } from 'react'
import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { getAllPaymentService } from '../../service/TripService'
import { toast } from 'react-toastify'
import { createTicketService } from '../../service/TicketService'

const Trips = (props) => {
    const [data, setData] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [trip, setTrip] = useState({})
    const [quanlityBook, setQuanlityBook] = useState(0)
    const [payments, setPayments] = useState([])
    const [payment, setPayment] = useState("")

    useEffect(() => {
        if(props.dataSearch && props.dataSearch.length > 0) {
            setData(props.dataSearch)
        }
        getPayments()
    }, [])

    const getPayments = async () => {
        let res = await getAllPaymentService()
        if(res && res.status === 'OK') {
            setPayments(res?.data)
        }
    }

    const handleShowModal = (trip) => {
        setShowModal(true)
        setTrip(trip)
    }

    const handleCloseModal = () => {
        setShowModal(false)
        setTrip({})
    }

    const handleBookTicket = async () => {
        if(!props.idUser) {
            toast.error("Bạn chưa đăng nhập!")
            return
        }

        if(quanlityBook === 0) {
            toast.error("Bạn chưa nhập số lượng vé!")
            return
        }

        if(payment === "") {
            toast.error("Bạn chưa chọn phương thức thanh toán!")
            return
        }

        let ticket = {
            dayBooked: Date.now(),
            numberOfBooked: quanlityBook,
            totalPrice: quanlityBook * trip?.price,
            trip: trip?._id,
            user: props.idUser,
            payment: payment,
        }

        let res = await createTicketService(ticket)
        if(res && res.status === 'OK') {
            toast.success("Bạn đã đặt vé thành công!")
            setPayment("")
            setQuanlityBook(0)
            setTrip({})
            handleCloseModal()
        }else {
            toast.error("Lỗi hệ thống!")
        }
    }

  return (
    <div>
        <Header />
            <div className='trip-content'>
            <div className='search-trip'>
                <Search />
            </div>
            <div className='content'>
                <div className='filter'>
                    <h5>Sắp xếp</h5>
                    <div className='list'>
                        <label>
                            <input type="radio" value="option1" 
                            // checked={true} 
                            />
                            Mặc định
                        </label>
                        <label>
                            <input type="radio" value="option1"  />
                            Mới nhất
                        </label>
                        <label>
                            <input type="radio" value="option1"  />
                            Giá giảm dần
                        </label>
                        <label>
                            <input type="radio" value="option1" />
                            Giá tăng dần
                        </label>
                    </div>
                </div>
                <div className='wrapper'>
                    {data && data.length > 0 
                        ?
                            data.map((item, index) => {
                                return (
                                    <div key={item._id} className='item'>
                                        <img src={item?.car?.image} alt="Ảnh xe" />
                                        <div className='right'>
                                            <div className='first'>
                                                <span className='name'>{item?.car?.name}</span>
                                                <span className='price'>{item?.price}</span>
                                            </div>
                                            <div>
                                                <span>{item?.car?.type}</span>
                                            </div>
                                            <div className='departure'>
                                                <span>{item?.departure?.value} - {item?.destination?.value}</span>
                                            </div>
                                            <div className='submit'>
                                                <div>
                                                    <label>Số chỗ còn lại:</label>
                                                    <label>{item?.numberOfAvailable}</label>
                                                </div>
                                                <span>Thông tin chi tiết</span>
                                                <button className='btn btn-warning' onClick={() => handleShowModal(item)}>Chọn chuyến</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        :
                        <div>
                            ...loading
                        </div>
                    }
                </div>
                </div>
            </div>
        <Footer />

        {/* modal */}
        <Modal show={showModal} onHide={handleCloseModal} >
                <Modal.Header closeButton>
                <Modal.Title>Đặt vé</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="row form">
                    <div className="mb-3 col-6 item">
                        <label htmlFor="exampleFormControlInput1" className="form-label first">Tên xe:</label>
                        <label htmlFor="exampleFormControlInput1" className="form-label">{trip?.car?.name}</label>
                    </div>
                    <div className="mb-3 col-6 item">
                        <label htmlFor="exampleFormControlInput1" className="form-label first">Điểm đi - Điểm đến:</label>
                        <label htmlFor="exampleFormControlInput1" className="form-label">{trip?.departure?.value} - {trip?.destination?.value}</label>
                    </div>
                    <div className="mb-3 col-6 item">
                        <label htmlFor="exampleFormControlInput1" className="form-label first">Giá cả:</label>
                        <label htmlFor="exampleFormControlInput1" className="form-label price">{trip?.price} đ</label>
                    </div>
                    <div className="mb-3 col-6">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Số chỗ còn lại: </label>
                        <label htmlFor="exampleFormControlInput1" className="form-label">{trip?.numberOfAvailable}</label>
                    </div>
                    <div className="mb-3 col-6">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Số ghế đặt</label>
                        <div className='quanlity-book'>
                            <label onClick={() => quanlityBook > 0 ? setQuanlityBook(quanlityBook - 1) : quanlityBook} >-</label>
                            <label>{quanlityBook}</label>
                            <label onClick={() => setQuanlityBook(quanlityBook + 1)}>+</label>
                        </div>
                    </div>
                    <div className="mb-3 col-6">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Phương thức thanh toán</label>
                        <select 
                            selected={payment}
                            onChange={(e) => setPayment(e.target.value)}
                        >
                            <option value={""}>
                                Chọn phương thức
                            </option>
                            {payments && payments.length > 0 
                                && payments.map((item) => {
                                    return (
                                        <option key={item._id} value={item._id}>
                                            {item?.value}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="mb-3 col-4 item">
                        <label htmlFor="exampleFormControlInput1" className="form-label first">Tổng tiền: </label>
                        <label htmlFor="exampleFormControlInput1" className="form-label price">{trip?.price * quanlityBook} đ</label>
                    </div>
                </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                </Button>
                <Button variant="warning" 
                    onClick={handleBookTicket}
                >
                    Đặt vé
                </Button>
                </Modal.Footer>
        </Modal>
    </div>
  )
}

function mapStateToProps (state) {
    return  {
        dataSearch: state.trips.searchTrips,
        idUser: state.users.idUser
    }
}

function mapDispatchToProps (dispatch) {
    return {
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Trips)
