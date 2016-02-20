var apps = [ 
	{	
		name : 'Tolo',
 		appDescription : {
		description : 'a localized dating app that connects users who are within walking distance of each other',
		'front end' : { feature : 'implimented a real time chat feature', action : 'using a React Native mobile interface and Firebase for instant data sharing'},
		'back end' : { feature : 'constructed RESTful API endpoints and controller methods using Node.js and Express', action : 'integrating a Neo4j graph database to store user data and relationships'},
		'full stack' : { feature : 'integrated a React Native mobile interface with server side API routes', action : 'handling the client side requests with neo4j Cypher queries embedded in the server side controllers'},
		}
	}, {
		name : 'Townhall',
		appDescription: {
			description : 'a communication platform geared towards students and teachers',
			'front end' : { feature : 'used AngularJS to create an admin page', action : 'giving admins an easy way to edit user permissions'},
			'back end' : { feature : 'incorporated a MySQL relational database', action: "I architected the database's schemas, optimizing the tables for efficient queries"},
			'full stack' : { feature : 'created Express routes with Node.js controllers', action :'modularizing the request handling operations into individual components to make the codebase scalable'},
		}
	}, {
		name : 'OpenSeat',
		appDescription : {
			description : 'a ride sharing marketplace that matches drivers with passengers',
			'front end' : { feature : 'created multiple views and client side routing', action : 'architecting individual AngularJS components to ensure a scalable codebase'},
			'back end' : { feature : 'deployed a MongoDB server', action :'using the Mongoose ORM for the database queries'},
			'full stack' : { feature : 'developed an algorithm which determines the optimal carpools', action :'The algorithm takes into consideration the differences in departure time and location, returning an ordered array of users based on compatibility'},
    }
	}, {
    name : 'BillSplitter',
    appDescription : {
      description : 'a payment management tool that tracks the individual payment history of group members for shared activities',
      'front end' : { feature : 'architected a modular codebase', action : 'using independent AngularJs modules for front end features'},
      'back end' : { feature : 'constructed RESTful API endpoints on the server', action : 'using Express routing and Node.js controllers to handle requests'},
      'full stack' : { feature : 'used AngularJS to develop the client side interface', action : 'implimenting a MongoDB database on the server side that persistently stores payment history'},
      }
  }
  ];

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'September', 'October', 'November', 'December'];