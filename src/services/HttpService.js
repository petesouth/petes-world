import axios from 'axios';

// Wrapper around axios. Since Axios sends different structured responses
// for error and success, we're sending our own json for both cases in the
// response.data property. This service can swallow the actual response object
// and send only the data we care about to the corresponding action.

// INSTANCE FOR SLACK LOGGING
//const instance = axios.create();

class HttpService {

	get = (url, success, err) => {
		console.log('HttpService.get()', url)

		axios.get(url)
		.then(response => {
			success(response.data)
		})
		.catch(errResponse => {
			console.error( "url failed=====> " + url, errResponse, JSON.stringify(errResponse.response)); err(errResponse)
		});
	};

	post = (url, data, success, err) => {
		console.log('HttpService.post()', url)
		axios.post(url, data)
		.then(response => {
			success(response.data);
		})
		.catch(errResponse => {
			console.error( "url failed" + url); err(errResponse);
		});
	};

	put = (url, data, success, err) => {
		console.log('HttpService.put()', url)
		axios.put(url, data)
		.then(response => {
			success(response.data)
		})
		.catch(errResponse => {
			console.error( "url failed" + url); err(errResponse)
		});
	};

	patch = (url, data, success, err) => {
		axios.patch(url, data)
		.then(response => {
			success(response.data)
		})
		.catch(errResponse => {
			console.error( "url failed" + url); err(errResponse)
			
		});
	};

	//this was not refactored, it will be when I refactor reporting
	//didn't want to break that for now
	delete = (url, success, err) => {
		console.log('HttpService.delete()', url)
		axios.delete(url)
		.then(response => {
			success(response.data)
		})
		.catch(errResponse => {
			console.error( "url failed" + url); err(errResponse)
			
		});
	};

}

const httpService = new HttpService();

export default httpService;
