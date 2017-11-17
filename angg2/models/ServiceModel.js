module.exports = function(mongoose){
	var Schema = mongoose.Schema;
	var serviceSchema = new Schema({
	  title: String,
	  content: String,
	  price: String,
	  cost: String,
	  usertype:String,
	  users:String,
	  userslist:String,
	  status: String,
	});
	var Services = mongoose.model('Services', serviceSchema);
	return Services;
}

