module.exports = function(mongoose){
	var Schema = mongoose.Schema;
	var sliderSchema = new Schema({
	  title: String,
	  content: String,
	  order: String,
	  cost: String,
	  image:String,
	  status: String,
	});
	var Sliders = mongoose.model('Sliders', sliderSchema);
	return Sliders;
}

