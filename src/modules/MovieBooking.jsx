import React, { Component } from 'react';
import SeatList from './SeatList';
import BookingInfo from './BookingInfo';

export default class MovieBooking extends Component {
    render() {
        return (
            <div className='container overplay'>
                <h2 className='mb-3 text-center title text-white'>ĐẶT VÉ</h2>
                <div className="row">
                    <div className="col-lg-12 col-xl-8 p-2">
                        <div className="screen fs-5 text-center text-black">
                            <h5>Screen</h5>
                        </div>

                        <SeatList />
                    </div>

                    <div className="col-lg-12 col-xl-4 p-4">
                        <h4 className='pt-4 pb-4 text-center text-white'>Danh Sách Ghế Bạn Chọn</h4>

                        <BookingInfo />
                    </div>
                </div>

            </div>
        );
    }
}