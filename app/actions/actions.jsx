import moment from 'moment';

export var login = (uid) => {
    return {type: 'LOGIN', uid};
};

export var startLogin = () => {
    return (dispatch, getState) => {};
};

export var logout = () => {
    return {type: 'LOGOUT'};
};

export var startLogout = () => {
    return (dispatch, getState) => {};
};

export var setDashboardData = (dashboardData) => {
    return {
      type:'SET_DASHBOARD_DATA',
      dashboardData
    }
}

export var setCorporateData = (list) => {
    return {
      type:'SET_CORPORATE_DATA',
      list
    }
}

export var setIndCorporateData = (corporate) => {
    return {
      type:'SET_IND_CORPORATE_DATA',
      corporate
    }
}

export var setUserData = (list) => {
    return {
      type:'SET_USER_DATA',
      list
    }
}

export var setIndUserData = (user) => {
    return {
      type:'SET_IND_USER_DATA',
      user
    }
}
