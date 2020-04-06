import React from 'react';

function Profile () {
    return (

        <div className="container profile-page">
            <div className="row">
                <div className="col-sm-2">

                </div>
                <div className="profile-info col-sm-8">
                    <h3>About Me</h3>
                    <div className="row">
                        <div className="profile-img col-sm-4 col-12">
                            <img src="/teacher.jpg" />
                        </div>
                        <div className="col-sm-8 col-12">
                            <h4>Ahmed Khater</h4>
                            <p>Aliquam erat volutpat. Curabiene natis massa sedde lacu stiquen sodale word moun taiery.Aliquam erat volutpaturabiene natis massa sedde sodale word moun taiery.</p>
                            <div className="info-table">
                                <table className="table text-nowrap">
                                    <tbody>
                                        <tr>
                                            <td>First Name:</td>
                                            <td>Ahmed</td>
                                        </tr>
                                        <tr>
                                            <td>Last Name:</td>
                                            <td>Khater</td>
                                        </tr>
                                        <tr>
                                            <td>Age:</td>
                                            <td>32</td>
                                        </tr>
                                        <tr>
                                            <td>Phone:</td>
                                            <td>1234567890</td>
                                        </tr>
                                        <tr>
                                            <td>Email:</td>
                                            <td>a@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <td>Address:</td>
                                            <td>Cairo, Egypt</td>
                                        </tr>
                                        <tr>
                                            <td>ID:</td>
                                            <td>10</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2">

                </div>
            </div>
        </div>
        
    )
}

export default Profile