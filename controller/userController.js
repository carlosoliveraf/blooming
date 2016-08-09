var db = require('../db_config.js');

exports.list = function(callback){

	db.User.find({}, function(error, users) {

		if(error) {

			callback({error: 'Não foi possivel retornar os usuarios'});
		} else {

			callback(users);
		}
	});
};


exports.user = function(id, callback) {

	db.User.findById(id, function(error, user) {

		if(error) {

			callback({error: 'Não foi possivel retornar o usuario'});
		} else {

			callback(user);
		}
	});
};




exports.save = function(user, callback){

	new db.User(user).save(function(error, user) {

		if(error) {

			callback({error: 'Não foi possivel salvar o usuario'});
		} else {

			callback(user);
		}
	});
};


exports.update = function(id, callback) {

	db.User.findById(id, function(error, user) {

		if(userEdit.name) {

			user.name = userEdit.name;
		}

		if(userEdit.email) {

			user.email = userEdit.email;
		}

		if(userEdit.username) {

			user.username = userEdit.username;
		}

		if(userEdit.password) {

			user.password = userEdit.password;
		}

		user.save(function(error, user) {

			if(error) {

				callback({error: 'Não foi possivel salvar o usuario'});
			} else {

				callback(user);
			}
		});
	});
};


exports.delete = function(id, callback) {

	db.User.findById(id, function(error, user) {

		if(error) {

			callback({error: 'Não foi possivel retornar o usuario'});
		} else {

			user.remove(function(error) {

				if(!error) {

					callback({response: 'Usuário excluido com sucesso'});
				}
			});
		}
	});
	
};