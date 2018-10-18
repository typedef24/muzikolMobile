const apiHost = 'http://localhost/sayo/api/web/v1/beforeauths/signupuser';

	export default {
		//for making a get request
		get: (url) => {
			return fetch(url, {
			  method: 'GET',
			  headers: {
			    Accept: 'application/json',
			    'Content-Type': 'application/json',
			  },
			})

		},


		//for making a post request
		post:  (url,body) => {
			return fetch(url, {
			  method: 'POST',
			  headers: {
			    Accept: 'application/json',
			    'Content-Type': 'application/json',
			  },
			  body: JSON.stringify(body),
			})

		},

		//for making a put request
		put:  (url,body) => {
			return fetch(url, {
			  method: 'PUT',
			  headers: {
			    Accept: 'application/json',
			    'Content-Type': 'application/json',
			  },
			  //body: JSON.stringify(body),
			})

		},

		//for making a patch request
		patch:  (url,body) => {
			return fetch(url, {
			  method: 'PATCH',
			  headers: {
			    Accept: 'application/json',
			    'Content-Type': 'application/json',
			  },
			  body: JSON.stringify(body),
			})

		},

		//for making delete request
		delete: (url, id) => {
			return fetch(url, {
			  method: 'DELETE',
			  headers: {
			    Accept: 'application/json',
			    'Content-Type': 'application/json',
			  },
			})

		},


	} 


