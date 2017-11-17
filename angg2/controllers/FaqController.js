module.exports = function(app , func , mail, upload, storage, mailer, multer, validator, Services, paginate, cors){
		
	app.post("/faqs/add" , faqadd);
			
	function faqadd(req, res){
		var sess = req.session;		
		var error = [];
		var data = {};
		console.log(req.method);		
		if(req.method=="POST"){					   
		   
		    if(error.length<=0){	
 
                if(req.body.usertype=="A"){		   
				    if(req.body.users=="A"){
						data = {
							title:req.body.title.trim(),
							description:req.body.content.trim(),
							usertype:req.body.usertype.trim(),
							users:req.body.users.trim(),
							status:req.body.status.trim()			  
						};
					}
					else if(req.body.users=="S"){
						data = {
							title:req.body.title.trim(),
							description:req.body.content.trim(),
							usertype:req.body.usertype.trim(),
							users:req.body.users.trim(),
							userslist:req.body.userslist,
							status:req.body.status.trim()			  
						};
					}
				}
				else {
					data = {
						title:req.body.title.trim(),
						description:req.body.content.trim(),						
						status:req.body.status.trim()			  
					};
				}
				console.log(data);
				var detail = new Services(data);
				
				detail.save(function(err){
				    if(err) throw err;
				    console.log('Service saved successfully!');
					res.setHeader('Content-Type', 'application/json');
			        res.send(JSON.stringify({authen:1 , success:0}));
			    });			  
		    }
			else {
				res.setHeader('Content-Type', 'application/json');
			    res.send(JSON.stringify({authen:1 , success:0}));
			}		    
		}
        else {
			res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify({authen:1 , success:0}));
		}
	}       
    
}