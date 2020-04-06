import React from 'react';

function Lectures () {
    return (
        <div className="container">
            <div className="row">
                <div className= "col-md-3 col-sm-6 col-12">
                    <div className="lecture-item">
                        <div className="text-center lecture-header">
                            <h5><i className="pi pi-file"></i> Lecture 1</h5>
                        </div>
                        <div className="group-body">
                            <h6>Teacher Name: <span>Ali</span></h6>
                            <h6>Lecture Period: <span>1 hour</span></h6>
                            <h6>Number of Students: <span>10</span></h6>
                            
                        </div>
                        <div className="text-center lecture-footer">
                            <button>View Lecture</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lectures