import React, {Component} from 'react';
var {Link, IndexLink, hashHistory} = require("react-router");

import * as Redux from 'react-redux';

import * as actions from 'actions';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

class Login extends Component {
    static muiName = 'FlatButton';

    render() {
        return (<FlatButton {...this.props} label="Login"/>);
    }
}

const Logged = (props) => (
    <IconMenu {...props} iconButtonElement={< IconButton > <MoreVertIcon/> < /IconButton>} targetOrigin={{
        horizontal: 'right',
        vertical: 'top'
    }} anchorOrigin={{
        horizontal: 'right',
        vertical: 'top'
    }}>
        <MenuItem>
            <Link to="/Admin/Profile">
                <i className="glyphicon glyphicon-eye-open"></i>
                {" "}
                Profile
            </Link>
        </MenuItem>
        <MenuItem>
            <a href="">
                <i className="glyphicon glyphicon-log-out"></i>
                {" "}
                Log Out</a>
        </MenuItem>
    </IconMenu>
);

Logged.muiName = 'IconMenu';

const styles = {
    title: {
        cursor: 'pointer'
    }
};

export var HeaderAndNav = React.createClass({

    onLogoutHandler: function(e) {
        hashHistory.push('/');
    },
    isMenuOpen: function(e) {
        const {dispatch} = this.props;
        const {isMenuOpen}=this.props.app;
        dispatch({
            type: "SET_MENU_STATE",
            isMenuOpen: !isMenuOpen
        });
    },
    render() {
        const {dispatch} = this.props;
        const {isLogin}=this.props.auth;
        const {isMenuOpen}=this.props.app;
        return (
            <div>
                <AppBar title="Corporate Health Pro"  onLeftIconButtonTouchTap={this.isMenuOpen} iconElementLeft={< IconButton > <NavigationMenu/> < /IconButton>} iconElementRight={true
                    ? <Logged/>
                    : <Login/>}/>
                <Drawer containerClassName="side-bar" open={isMenuOpen}>
                    <IndexLink to="/Admin" activeClassName="active" onClick={this.isMenuOpen}>
                        <MenuItem >

                            <i className="glyphicon glyphicon-dashboard"></i>
                            {" "}
                            Dashboard

                        </MenuItem>
                    </IndexLink>
                    <Link to='/Admin/Corporate/List' activeClassName="active" onClick={this.isMenuOpen}>
                        <MenuItem>

                            <i className="glyphicon glyphicon-briefcase"></i>
                            {" "}
                            Corporate

                        </MenuItem>
                    </Link>
                    <Link to='/Admin/Users/UserCheck' activeClassName="active" onClick={this.isMenuOpen}>
                        <MenuItem>

                            <i className="glyphicon glyphicon-user"></i>
                            {" "}
                            User

                        </MenuItem>
                    </Link>
                    <Link to='/Admin/Camp/SelectCompany' activeClassName="active" onClick={this.isMenuOpen}>
                        <MenuItem>

                            <i className="glyphicon glyphicon-th-large"></i>
                            {" "}
                            Camp

                        </MenuItem>
                    </Link>
                    <Link to='/Admin/Report/SelectCompanyAndCamp' activeClassName="active" onClick={this.isMenuOpen}>
                        <MenuItem>

                            <i className="glyphicon glyphicon-list-alt"></i>
                            {" "}
                            Report

                        </MenuItem>
                    </Link>
                </Drawer>
            </div>
        )
    }
});

export default Redux.connect((state) => {
    return {auth:state.auth,app:state.app}
})(HeaderAndNav);

// <Toggle label="Logged" defaultToggled={true} onToggle={()=>
//   {
//     dispatch(actions.logout())
//   }} labelPosition="right" style={{
//     margin: 20
// }}/ >

// <span className="icon-bar"></span>
// <span className="icon-bar"></span>
// <span className="icon-bar"></span>
// <nav className="navbar navbar-fixed-top bg-cust" role="navigation">
//     <div className="navbar-header  bg-cust">
//         <button type="button" className="navbar-toggle" style={{
//             color: "white"
//         }} data-toggle="collapse" data-target=".navbar-ex1-collapse">
//             <span className="sr-only">Toggle navigation</span>
//             <i className="glyphicon glyphicon-th-list"></i>
//         </button>
//         <a className="navbar-brand" href="index.html">Corporate Health Pro</a>
//     </div>
//     <ul className="nav navbar-right top-nav">
//         <li className="dropdown">
//             <a href="#" className="dropdown-toggle" data-toggle="dropdown">
//                 <i className="glyphicon glyphicon-user"></i>
//                 {" "}
//                 Murali M
//                 <b className="caret"></b>
//             </a>
//             <ul className="dropdown-menu">
//                 <li>
//                     <Link to="/Admin/Profile">
//                         <i className="glyphicon glyphicon-eye-open"></i>
//                         {" "}
//                         Profile</Link>
//                 </li>
//                 <li className="divider"></li>
//                 <li>
//                     <a onClick={this.onLogoutHandler}>
//                         <i className="glyphicon glyphicon-log-out"></i>
//                         {" "}
//                         Log Out</a>
//                 </li>
//             </ul>
//         </li>
//     </ul>
//
//     <div className="collapse navbar-collapse navbar-ex1-collapse">
//         <ul className="nav navbar-nav side-nav bg-cust">
//             <li>
//                 <IndexLink to="/Admin" activeClassName="active">
//                     <i className="glyphicon glyphicon-dashboard"></i>
//                     {" "}
//                     Dashboard</IndexLink>
//
//             </li>
//             <li>
//                 <Link to='/Admin/Corporate/List' activeClassName="active">
//                     <i className="glyphicon glyphicon-briefcase"></i>
//                     {" "}Corporate</Link>
//             </li>
//             <li>
//                 <Link to='/Admin/Users/UserCheck' activeClassName="active">
//                     <i className="glyphicon glyphicon-user"></i>
//                     {" "}User</Link>
//             </li>
//
//             <li>
//                 <Link to='/Admin/Camp/SelectCompany' activeClassName="active">
//                     <i className="glyphicon glyphicon-th-large"></i>{" "}Camp</Link>
//
//             </li>
//             <li>
//                 <Link to='/Admin/Report/SelectCompanyAndCamp' activeClassName="active">
//                     <i className="glyphicon glyphicon-list-alt"></i>{" "}Report</Link>
//             </li>
//         </ul>
//     </div>
// </nav>
