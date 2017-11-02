module.exports = function(app , func , mail, upload, storage, mailer, multer, validator, Product, paginate , cors , dateFormat , dateDiff, dobByAge, json2csv, excel , pdf, passport , LocalStrategy, bCrypt , fs, async, PasswordGenerate, randtoken, handlebars){ 
    var math = require('mathjs');  
		
	app.post("/product/add", function(req, res){
		   if(req.method=="POST"){
			   var upload = multer({storage:storage , limits:{fileSize:2} , fileFilter:function(req , file , callback){
			        if(file){
						var ext = path.extname(file.orignalname);
						if(ext!=".png" || ext!=".jpg" || ext!=".gif" || ext!=".jpeg"){
							res.setHeader('Content-Type', 'application/json');
					        res.send(JSON.stringify({authen:1 , error:1 , message:'File is invalid'})); 				   
						}
						else {
							callback(null , true);
						}
					}
			      }
			   });
			   
			   upload.single("productpic")(req, res , function(err){
				   if(err.code && err.code=="LIMIT_FILE_SIZE"){
					   res.setHeader('Content-Type', 'application/json');
					   res.send(JSON.stringify({authen:1 , error:1 , message:'File is too large'})); 				   
				   }
				   else {					   
					   var condition = {
						   title:req.body.title
					   };
					   
                       Product.find(condition).exec(function(err , records){
						   if(records.length>0){
							   res.setHeader('Content-Type', 'application/json');
							   res.send(JSON.stringify({authen:1 , error:1 , message:'Product already exists'})); 				   
						   }
						   else {
							   var currentdate = new Date();
							   var formatteddate = dateFormat(currentdate ,'yyyy-mm-dd HH:MM:ss');
							   var data = {
								   title:req.body.title,
								   description:req.body.description,
								   meta_tag:req.body.meta_tag,
								   meta_description:req.body.meta_description,
								   price:req.body.price,
								   cost_price:req.body.cost_price,
								   discount_type:req.body.discount_type,
								   discount:req.body.discount,
								   created_at:formatteddate, 
								   status:req.body.status
							   };
							   
							   var productobj = new Product(data);
							   productobj.save(function(err){
								   if(err)
									  throw err;
								  
								   res.setHeader('Content-Type', 'application/json');
								   res.send(JSON.stringify({authen:1 , success:1 , message:'Product added successfully'})); 				   
							   });
						   }							   						       
					   });					   					   					   					   					   					
				   }			   
			   });			   			   
		   }
           else {
	           res.setHeader('Content-Type', 'application/json');
			   res.send(JSON.stringify({authen:1 , success:0 , message:'Product could not be added successfully'})); 				   
           }		   
	});

    app.post("/product/edit/:id", function(req, res){
		   if(req.method=="POST"){
			   
			       var upload = multer({storage:storage , limits:{fileSize:2} , fileFilter:function(req , file , callback){
						if(file){
							var ext = path.extname(file.orignalname);
							if(ext!=".png" || ext!=".jpg" || ext!=".gif" || ext!=".jpeg"){
								res.setHeader('Content-Type', 'application/json');
								res.send(JSON.stringify({authen:1 , error:1 , message:'File is invalid'})); 				   
							}
							else {
								callback(null , true);
							}
						}
				      }
			      });
			   
			      upload.single("files")(req , res , function(err){
                        if(err.code && err.code=="LIMIT_FILE_SIZE"){
						     res.setHeader('Content-Type', 'application/json');
						     res.send(JSON.stringify({authen:1 ,error:1 , message:'File is too large'})); 
					    }
					    else {					  
							   var productid = req.params.id;
							   var condition = { 
								  title:req.body.title
							   };
							   var error = 1
							   Product.find(condition).exec(function(err , records){
									   if(records.length>2){
										   res.setHeader('Content-Type', 'application/json');
								           res.send(JSON.stringify({authen:1 , error:1 , message:'Product already exists'})); 				   
									   }
									   else if(records.length>1){
										   if(records[0]._id!=productid){
											  res.setHeader('Content-Type', 'application/json');
								              res.send(JSON.stringify({authen:1 , error:1 , message:'Product already exists'})); 				      
										   }
										   else {
											  error = 0   
										   }										   
									   }
                                       else {
										   error = 0;
									   }
 
                                       if(error==0){
										   
										   var currentdate = new Date();
										   var formatteddate = dateFormat(currentdate ,'yyyy-mm-dd HH:MM:ss');
										   var data = {
											   title:req.body.title,
											   description:req.body.description,
											   meta_tag:req.body.meta_tag,
											   meta_description:req.body.meta_description,
											   price:req.body.price,
											   cost_price:req.body.cost_price,
											   discount_type:req.body.discount_type,
											   discount:req.body.discount,
											   modified_at:formatteddate,
											   status:req.body.status
										   };
									   
										   Product.findOneAndUpdate({_id:productid} , data , function(err){
											   if(err)
												  throw err;
											  
											   res.setHeader('Content-Type', 'application/json');
											   res.send(JSON.stringify({authen:1 , success:1 , product_id:'' , message:'Product updated successfully'})); 				   
										   });
									   }   
							   });						   							   
					    }
				  });	   
		   }
           else {
                   res.setHeader('Content-Type', 'application/json');
			       res.send(JSON.stringify({authen:1 , success:0, message:'Product could not be updated successfully'})); 				   
           }		   
	});	

    app.get("/product/view/:id", function(req , res){
	      var productid = req.params.id;
		  Product.find({_id:productid} , function(err, records){
			 if(err)
			   throw err;
					  
		     res.setHeader('Content-Type', 'application/json');
			 res.send(JSON.stringify({authen:1 , success:1, records:records})); 				   
		  });		   
	});

    app.get("/product/index",  function(req , res){	
	
          var condition = {};		  
		  var sortdata = {};		  
		  var perPage = 10;		  
		  var currentpage = 1;
		  if(req.query.searchcontent){
			  condition = {
				  $or:[
					 {'title':{"$regex":req.query.searchcontent , "$options":"$i"}},
					 {'description':{"$regex":req.query.searchcontent , "$options":"$i"}},
					 {'meta_tag':{"$regex":req.query.searchcontent , "$options":"$i"}},
					 {'meta_description':{"$regex":req.query.searchcontent , "$options":"$i"}},
					 {'cost_price':{"$regex":req.query.searchcontent , "$options":"$i"}},
					 {'price':{"$regex":req.query.searchcontent , "$options":"$i"}},
					 {'discount':{"$regex":req.query.searchcontent , "$options":"$i"}}
				  ]
			  };
		  }
		  
		  Product.find(condition).count().exec(function(err , count){
			  if(err)
				throw err;	
			
			  var totalPages = math.ceil(count/perPage);
			  var pages = {}
			  
			  for(var i=1; i<totalPages; i++){
				  pages[i] = i;
			  }
		  			  
			  Product.find(condition).limit(perPage).skip(perPage*(currentpage -1)).sort(sortdata).exec(function(err , docs){
				   if(err)
					  throw err;
				   
                   res.setHeader('Content-Type', 'application/json');
			       res.send(JSON.stringify({'authen':1 , 'success':1 , 'records':docs , 'totalrecords':count ,  'totalpages':totalPages , 'pages':pages}));
			  });							  
		  });		   
	});

    app.delete("/product/delete/:id", function(req , res){          
		  var productid = req.params.id;		  
		  Product.findOneAndRemove({_id:productid} , function(err){
			 if(err)
			   throw err;
             res.setHeader('Content-Type', 'application/json');	
			 res.send(JSON.stringify({'authen':1 , 'success':1}));			
		  });
    });
	
    app.get("/featuredproduct" , function(req , res){
          if(req.method=="POST"){
				var condition = {
					is_featured:1,
				};
				
                Product.find(condition).exec(function(err ,docs){
				    if(err)
                       throw err;
                    res.setHeader('Content-type' , 'application/json');
                    res.send(JSON.stringify({'authen':1 , 'success':1 , 'docs':docs})); 					
				});				
		  }
    }); 			

    app.get("/product/total", function(req , res){          
		  Product.find().count().exec(function(err , count){
			 if(err)
			   throw err;
             res.setHeader('Content-Type', 'application/json');	
			 res.send(JSON.stringify({'authen':1 , 'success':1 , 'products':count}));			
		  });
    });
    
}