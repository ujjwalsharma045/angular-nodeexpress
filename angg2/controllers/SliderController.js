module.exports = function(app , func , mail, upload, storage, mailer, multer, validator, Sliders, paginate, cors){
	
	app.get("/slider" , sliderlist);
	app.get("/slider/view/:id" , sliderview);
	app.post("/slider/add" , slideradd);
	app.post("/slider/edit/:id" , slideredit);	
	app.get("/slider/delete/:id" , sliderdelete);
	
    function sliderview(req, res){
		var sess = req.session;
		var sliderid = req.params.id;
		
		func.isGuestSession(req.session , res);
		Sliders.find({_id:sliderid}, function(err, records) {
			if(err){
				var response = {error:err};  
			}
			else {
				var response = {'records':records, 'success':1, 'authen':1};  
			}
			
			res.setHeader('Content-Type' , 'application/json');
			res.send(JSON.stringify(response));
        }); 
	}

    function sliderdelete(req , res){
		var sliderid = req.params.id;
		Sliders.findOneAndRemove({_id:sliderid} , function(err){
		        if(err){
					var response = {error:err};
			    }
				else {
					var response = {'success':1, 'authen':1};
				}
			 
			    res.setHeader('Content-Type' , 'application/json');
			    res.send(JSON.stringify(response));
		});
	}     

    function slideradd(req, res){
		var condition = {
			title: req.body.title
		};
		
		Sliders.find(condition).exec(function(err , records){
			if(records.length>0){
				res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({authen:1 , error:1 , message:'Page name already exists.'}));				
			}
			else {
				data = {
					title:req.body.title,
					content:req.body.description,
					order:req.body.order,							 
				    status:req.body.status					 
				};
				
				var sliders = new Sliders(data);
				sliders.save(function(err){
				    res.setHeader('Content-Type', 'application/json');
					res.send(JSON.stringify({authen:1 , error:1 , message:'Page name already exists.'}));
				});
			}
		});
	}

    function slideredit(req, res){
	    var sliderid = req.params.id; 
		var condition = {
			title:req.body.title
		};
		
		Sliders.find(condition).exec(function(err , records){
			if(records.length>0){
				res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({authen:1 , error:1 , message:'Page name already exists.'}));				
			}
			else {
				data = {
					title:req.body.title,
					content:req.body.description,
					order:req.body.order,							 
				    status:req.body.status					 
				}; 
 
				Sliders.findOneAndUpdate({_id:sliderid} , data , function(err , records){
				
				}); 
			}
		});
	}		
}