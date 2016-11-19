var uuid = require('node-uuid');
var moment = require('moment');

export var authReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {uid: action.uid};
        case 'LOGOUT':
            return {};
        default:
            return state;
    }
};

export var dashboardReducer = (state = {
    companiesCount: 0,
    usersCount: 0
}, action) => {
    switch (action.type) {
        case 'SET_DASHBOARD_DATA':
            return {
                ...action.dashboardData
            }
            break;
        default:
            return state;
    }
};

export var corporateReducer = (state = {
    list: [],
    corporate: {}
}, action) => {
    switch (action.type) {
        case 'SET_CORPORATE_DATA':
            return {list: action.list};
            //      return Object.assign({}, state, {list: action.list});
            break;
        case 'SET_IND_CORPORATE_DATA':
            return {corporate: action.corporate};
            break;
        default:
            return state;
    }
};

export var userReducer = (state = {
    list: [],
    user: {}
}, action) => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {list: action.list};
            //      return Object.assign({}, state, {list: action.list});
            break;
        case 'SET_IND_USER_DATA':
            return {user: action.user};
            break;

        default:
            return state;
    }
};
