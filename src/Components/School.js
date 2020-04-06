import React from 'react';

function School () {
    return (
        <div className="container">
            <div className="row">
                <div className= "col-md-3 col-sm-6 col-12">
                    <div className="dashboard-item">
                        <div className="row align-items-center">
                            <div className="col-6">
                                <div className="item-icon">
                                    <i className="pi pi-users"></i>
                                </div>
                            </div>
                            <div className="col-6">
                                <div class="item-content">
                                    <p class="item-title">Students</p>
                                    <div class="item-number">
                                        <span class="counter" data-num="150000">5000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className= "col-md-3 col-sm-6 col-12">
                    <div className="dashboard-item">
                        <div className="row align-items-center">
                            <div className="col-6">
                                <div className="item-icon">
                                    <i className="pi pi-user"></i>
                                </div>
                            </div>
                            <div className="col-6">
                                <div class="item-content">
                                    <p class="item-title">Teachers</p>
                                    <div class="item-number">
                                        <span class="counter" data-num="150000">50</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className= "col-md-3 col-sm-6 col-12">
                    <div className="dashboard-item groups-item">
                        <div className="row align-items-center">
                            <div className="col-6">
                                <div className="item-icon">
                                    <i className="pi pi-users"></i>
                                </div>
                            </div>
                            <div className="col-6">
                                <div class="item-content">
                                    <p class="item-title">Groups</p>
                                    <div class="item-number">
                                        <span class="counter" data-num="150000">20</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className= "col-md-3 col-sm-6 col-12">
                    <div className="dashboard-item">
                        <div className="row align-items-center">
                            <div className="col-6">
                                <div className="item-icon">
                                    <i className="pi pi-file"></i>
                                </div>
                            </div>
                            <div className="col-6">
                                <div class="item-content">
                                    <p class="item-title">Lectures</p>
                                    <div class="item-number">
                                        <span class="counter" data-num="150000">3000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default School