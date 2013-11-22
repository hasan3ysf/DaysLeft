app.factory('LocalStorageFactory', function() {

	var storage = {},
	pfx = "ps_";

	storage.id  =  function(key){

		var ids = storage.readCollection("ids");
		var record = _.find(ids, function(item) { return item.collection === key });

		if ( ids.length == 0 || record == undefined ) {

			var item = {
				"collection": key,
				"id": 1
			}
			ids.push(item);
			storage.saveCollection("ids", ids);
			return 1;


		} else {

			var new_id;
			if (record) {
				new_id = record.id + 1;
				record.id = new_id;
			}

			storage.saveCollection("ids", ids);
			return new_id;

		}
	};

	
	storage.addItem = function(key, obj){

		if ( typeof key == 'undefined' || typeof key == 'obj' ) {
			throw "addToCollection(key, obj): key or obj not defined";
		}

		var items = storage.readCollection(key);
		obj.id = storage.id(key);
		if( items ) {

			items.push(obj);
			storage.saveCollection(key, items)
			return obj;

		} else {
			throw "addToCollection(key, obj): problem adding new record";
		}

	};

	storage.updateItem = function(key, obj){

		if ( typeof key == 'undefined' || typeof key == 'obj' ) {
			throw "addToCollection(key, obj): key or obj not defined";
		}

		var items = storage.readCollection(key);
		if( items ) {

			// remove obj
			var arr = _.without(items, _.findWhere( items, { id: parseInt(obj.id) } ));

			// add new obj
			arr.push(obj);
			storage.saveCollection(key, arr);

			return true;

		} else {
			throw "addToCollection(key, obj): problem adding new record";
		}

	}

	
	storage.removeItem = function(key, rec_id){

		//console.log("removeItem.. key: " + key + ", id:" + rec_id);

		if ( typeof key == 'undefined' || typeof key == 'obj' ) {
			throw "addToCollection(key, obj): key or obj not defined";
		}

		var items = storage.readCollection(key);
		if( items ) {

			var arr = _.without(items, _.findWhere( items, { id: parseInt(rec_id) } ));
			storage.saveCollection(key, arr)

		} else {

			throw "addToCollection(key, obj): problem removing record";

		}

	},

	storage.readItem = function(key, rec_id){

		if ( typeof key == 'undefined' || typeof key == 'obj' ) {
			throw "addToCollection(key, obj): key or obj not defined";
		}

		var items = storage.readCollection(key);
		
		if( items ) {

			var item = _.findWhere( items, { id: parseInt(rec_id) } );
			return item;

		} else {

			throw "addToCollection(key, obj): problem reading record";

		}

	}


	storage.saveCollection = function(key, obj){
		localStorage.setItem(pfx+key, JSON.stringify(obj));
	}

	storage.readCollection = function(key) {
		ls = localStorage.getItem(pfx+key);
		return ( ls == null) ? [] : JSON.parse(ls);
	}

	storage.removeCollection = function(key){
		localStorage.removeItem(pfx+key);
	}

	return storage;

});