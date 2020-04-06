import React from 'react';
import {Sidebar} from 'primereact/sidebar';
import {Button} from 'primereact/button';
import {Link} from 'react-router-dom';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

class sideMenu extends React.Component {

    state = {
        visible: true
    }

    render() {
        return(
            <>
            <Sidebar visible={this.state.visible} style={{width:'17em'}} onHide={(e) => this.setState({visible:false})}>
                <div className="sidebar-items">
                    <div className="sidebar-item">
                        <Link><img src="/user-male--v1.png" alt="" /></Link>
                    </div>
                    <div className="sidebar-item">
                        <Link to="/profile">Profile <i className="pi pi-user"></i></Link>
                    </div>
                    <div className="sidebar-item">
                        <Link to="/groups">Groups <i className="pi pi-users"></i></Link>
                    </div>
                    <div className="sidebar-item">
                        <Link to="/lectures">Lectures <i className="pi pi-file"></i></Link>
                    </div>
                </div>
            </Sidebar>
            <Button icon="pi pi-arrow-right" onClick={(e) => this.setState({visible:true})}/>
        </>
        )    
    }
}

export default sideMenu