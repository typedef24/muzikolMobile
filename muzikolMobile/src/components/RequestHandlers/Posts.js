const api = "https://www.muzikol.com/api";
import React, { Component } from 'react';

export class Posts extends Component {
	
	async postSignupArtist( name , email, password, gender, videoUrl){

		fetch(api, {
		  method: 'POST',
		  headers: {
		    Accept: 'application/json',
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
		    name: name,
		    email: 'email',
		    email: 'email',
		    email: 'email',
		    email: 'email',

		  }),
		});
	}
}
