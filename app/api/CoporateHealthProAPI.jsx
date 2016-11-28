var $ = require('jquery');
var axios = require('axios');
// var store = require('configureStore').configure();

var instanceBeforeLogin = axios.create({
    baseURL: 'http://lowcost-env.9mjwkk3raa.us-west-2.elasticbeanstalk.com/webapi',
    // timeout: 5000,
    headers: {
        'Api-Key': 'GAGAN'
    }
});

// var config = {
//     headers: {
//         'Api-Key': '238997726a78c49dc869d7e006e1353f'
//     }
// };

var instanceAfterLogin = axios.create({
    baseURL: 'http://lowcost-env.9mjwkk3raa.us-west-2.elasticbeanstalk.com/webapi',
    timeout: 10000,
    headers: {
        'Api-Key': '238997726a78c49dc869d7e006e1353f'
    }
});

module.exports = {
    login: function(passcode) {
        instanceBeforeLogin.get('/users/admin/' + passcode).then(function(response) {
          //  console.log(response);
        }).catch(function(error) {
            console.log(error);
        });
    },
    getDashboardData: function() {

        return instanceAfterLogin.get('/dashBoard').then(function(response) {
            //  console.log(response);
            return response.data;
        }).catch(function(response) {
            throw new Error(response.data.message);
        });
    },
    getCorporateData: function() {
        return instanceAfterLogin.get('/companies').then(function(response) {
            return response.data;
        }).catch(function(response) {
            throw new Error(response.data.message);
        });
    },
    getCorporateDataById: function(id) {
        return instanceAfterLogin.get('/companies/' + id).then(function(response) {
            return response.data;
        }).catch(function(response) {
            throw new Error(response.data.message);
        });
    },
    getUsersForCorporate: function(companyId) {
        console.log("Hi");
        return instanceAfterLogin.get('/companies/' + companyId + '/users').then(function(response) {
            console.log("got output");
            return response.data;
        }).catch(function(response) {
            throw new Error(response.data.message);
        });
    },
    getUserData: function(user) {
        return instanceAfterLogin.get('/users/' + user).then(function(response) {
            return response.data;
        }).catch(function(response) {
            throw new Error(response.data.message);
        });
    },
    getUserDataById: function(user, id) {
        return instanceAfterLogin.get('/users/' + user + '/' + id).then(function(response) {
            return response.data;
        }).catch(function(response) {
            throw new Error(response.data.message);
        });
    },
    getCampData: function(cId) {
        return instanceAfterLogin.get('companies/' + cId + '/medicalCamps').then(function(response) {
            return response.data;
        }).catch(function(response) {
            throw new Error(response.data.message);
        });
    },
    getCampDataById: function(cId, id) {
        return instanceAfterLogin.get('companies/' + cId + '/medicalCamps/' + id).then(function(response) {
            return response.data;
        }).catch(function(response) {
            throw new Error(response.data.message);
        });
    }
};
