var $ = require('jquery');
var axios = require('axios');
var instanceBeforeLogin = axios.create({
    baseURL: 'http://lowcost-env.9mjwkk3raa.us-west-2.elasticbeanstalk.com/webapi',
    timeout: 1000,
    headers: {
        'Api-Key': 'GAGAN'
    }
});
var config = {
    headers: {
        'Api-Key': '238997726a78c49dc869d7e006e1353f'
    }
};
var instanceAfterLogin = axios.create({
    baseURL: 'http://lowcost-env.9mjwkk3raa.us-west-2.elasticbeanstalk.com/webapi',
    timeout: 1000,
    headers: {
        'Api-Key': '238997726a78c49dc869d7e006e1353f'
    }
});

module.exports = {
    login: function(passcode) {
        instanceBeforeLogin.get('/users/admin/' + passcode).then(function(response) {
            console.log(response);
        }).catch(function(error) {
            console.log(error);
        });
    },
    getDashboardData: function() {
        return instanceAfterLogin.get('/dashBoard').then(function(response) {
            //console.log(response.data);
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
        return instanceAfterLogin.get('/companies/'+id).then(function(response) {
            return response.data;
        }).catch(function(response) {
            throw new Error(response.data.message);
        });
    },
      getUserData: function(user) {
        return instanceAfterLogin.get('/users/'+user).then(function(response) {
            return response.data;
        }).catch(function(response) {
            throw new Error(response.data.message);
        });
    }
};
