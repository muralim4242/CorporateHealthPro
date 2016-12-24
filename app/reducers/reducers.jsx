var uuid = require('node-uuid');
var moment = require('moment');
import _ from 'lodash';

export var appReducer = (state = {
    refreshIndicator: "hide",
    isMenuOpen: false,
    snackbar: {
        open: false,
        text: ""
    }
}, action) => {
    switch (action.type) {
        case "SET_REFRESH_INDICATOR_STATE":
            //   console.log(action.refreshIndicator);
            return Object.assign({}, state, {refreshIndicator: action.refreshIndicator});

            break;
        case "SET_MENU_STATE":
            return Object.assign({}, state, {isMenuOpen: action.isMenuOpen});
            // return {isMenuOpen: action.isMenuOpen};
            break;
        case "SET_SNACKBAR":
            return Object.assign({}, state, {snackbar: action.snackbar});
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
    campList: []
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

export const formReducer = (state = {
    form: {},
    msg: '',
    dialogOpen: false,
    fieldErrors: {},
    isFormValid: false,
    validationData: {}
}, action) => {
    switch (action.type) {
        case "SET_FORM":
            return {
                ...state,
                form: action.data,
                fieldErrors: {},
                validationData: action.validationData
            }

        case "HANDLE_CHANGE":
            validationData = undefined;
            validationData = validate(action.isRequired, action.pattern, action.property, action.value, state.validationData);
            return {
                ...state,
                form: {
                    ...state.form,
                    [action.property]: action.value
                },
                fieldErrors: {
                    ...state.fieldErrors,
                    [action.property]: validationData.errorText
                },
                validationData: validationData.validationData,
                isFormValid: validationData.isFormValid
            }

        case "HANDLE_CHANGE_NEXT_ONE":
            validationData = undefined;
            validationData = validate(action.isRequired, action.pattern, action.propertyOne, action.value, state.validationData);
            return {
                ...state,
                form: {
                    ...state.form,
                    [action.property]: {
                        ...state.form[action.property],
                        [action.propertyOne]: action.value
                    }
                },
                fieldErrors: {
                    ...state.fieldErrors,
                    [action.propertyOne]: validationData.errorText
                },
                validationData: validationData.validationData,
                isFormValid: validationData.isFormValid
            }

        case "HANDLE_CHANGE_NEXT_TWO":
            let validationData = undefined;
            validationData = validate(action.isRequired, action.pattern, action.propertyTwo, action.value, state.validationData);
            return {
                ...state,
                form: {
                    ...state.form,
                    [action.property]: {
                        ...state.form[action.property],
                        [action.propertyOne]: {
                            ...state.form[action.property][action.propertyOne],
                            [action.propertyTwo]: action.value
                        }
                    }
                },
                fieldErrors: {
                    ...state.fieldErrors,
                    [action.propertyTwo]: validationData.errorText
                },
                validationData: validationData.validationData,
                isFormValid: validationData.isFormValid
            }

        case "RESET_STATE":
            return {
                ...state,
                form: {},
                fieldErrors: {},
                validationData: action.validationData
            }
        case 'FIELD_ERRORS':
            return {
                ...state,
                fieldErrors: action.errors
            }
        default:
            return state;
    }
}

// function propertyName(propertyName) {
//     if (action.property.split(".").length) {
//         return "[action.property.split('.')[0]]: {[action.property.split('.')[1]]: action.value}";
//
//     } else {
//         return "[action.property]: action.value";
//     }
// }

function validate(isRequired, pattern, name, value, validationData) {
    let errorText = "";
    if (isRequired) {
        if (value.length || value) {
            if (_.indexOf(validationData.required.current,name)==-1) {
                validationData.required.current.push(name);
            }
        } else {
            validationData.required.current=_.remove(validationData.required.current,(item)=>{return item!=name});
            errorText = "This is field is required";
        }
    }
    if (pattern.toString().length > 0) {
        if (pattern.test(value)) {
            if (_.indexOf(validationData.pattern.current,name)==-1) {
                validationData.pattern.current.push(name);
            }
        } else {
            validationData.pattern.current=_.remove(validationData.pattern.current,(item)=>{return item!=name});
            errorText = "Invalid field data";
        }
    }
    return {
        errorText: errorText,
        validationData: validationData,
        isFormValid: (validationData.required.required.length == validationData.required.current.length) && (validationData.pattern.required.length == validationData.pattern.current.length)
    };
}
