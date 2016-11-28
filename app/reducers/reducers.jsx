var uuid = require('node-uuid');
var moment = require('moment');

export var appReducer = (state = {
    refreshIndicator: "hide",
    isMenuOpen: false
}, action) => {
    switch (action.type) {
        case "SET_REFRESH_INDICATOR_STATE":
           console.log(action.refreshIndicator);
            return Object.assign({}, state, {refreshIndicator: action.refreshIndicator});

            break;
        case "SET_MENU_STATE":
            return Object.assign({}, state, {isMenuOpen: action.isMenuOpen});
            // return {isMenuOpen: action.isMenuOpen};
            break;
        default:
            return state;

    }
};

export var authReducer = (state = {
    isLogin: true,
    token: null
}, action) => {
    switch (action.type) {
        case 'LOGIN':
            //  return {token: action.token, isLogin: true};
            return Object.assign({}, state, {
                token: action.token,
                isLogin: true
            });
            break;
        case 'LOGOUT':
            //    return {token: null, isLogin: false};
            return Object.assign({}, state, {
                token: null,
                isLogin: false
            });
            break;

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
        //    console.log(action.dashboardData);
            return Object.assign({}, state, action.dashboardData);
            break;
        default:
            return state;
    }
};

export var corporateReducer = (state = {
    list: [],
    corporate: {},
    isDeleteModalOpen: false
}, action) => {
    switch (action.type) {
        case 'SET_CORPORATE_DATA':
            //      return {list: action.list };
            return Object.assign({}, state, {list: action.list});
            break;
        case 'SET_IND_CORPORATE_DATA':
            return Object.assign({}, state, {corporate: action.corporate});
            //    return {corporate: action.corporate};
            break;
        case 'SET_DELETE_MODAL_STATE':
            return Object.assign({}, state, {isDeleteModalOpen: action.isDeleteModalOpen});
            // return {isDeleteModalOpen: action.isDeleteModalOpen};
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
            //    return {list: action.list};
            return Object.assign({}, state, {list: action.list});
            break;
        case 'SET_IND_USER_DATA':
            // return {user: action.user};
            return Object.assign({}, state, {user: action.user});
            break;

        default:
            return state;
    }
};

export var campReducer = (state = {
    list: [],
    camp: {}
}, action) => {
    switch (action.type) {
        case 'SET_CAMP_DATA':
            //    return {list: action.list};
            return Object.assign({}, state, {list: action.list});
            break;
        case 'SET_IND_CAMP_DATA':
            // return {camp: action.camp};
            return Object.assign({}, state, {camp: action.camp});
            break;

        default:
            return state;
    }
};

export var reportReducer = (state = {
    companySelected: {},
    campSelected: {},
    campList:[]
}, action) => {
    switch (action.type) {
      case 'SET_CAMP_LIST':
          // return {campSelected: action.companySelected};
          return Object.assign({}, state, {campList: action.campList});
          break;
        case 'SET_SELECTED_COMPANY':
            // return {campSelected: action.companySelected};
            return Object.assign({}, state, {companySelected: action.companySelected});
            break;
        case 'SET_SELECTED_CAMP':
            //return {campSelected: action.campSelected};
            return Object.assign({}, state, {campSelected: action.campSelected});
            break;

        default:
            return state;
    }
};
