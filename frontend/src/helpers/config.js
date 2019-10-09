const environment = {
	 development: {
        apiLand: 'http://127.0.0.1:4000',
    },
    staging: {
        apiLand: 'http://192.168.1.30:4000',
    },
    production: {
    	apiLand: 'http://192.168.1.30:4000',
    }
}
module.exports = {
    ...(environment[process.env.NODE_ENV])
};