'use strict' 

const http = require('http');
const url = require('url');
const fs = require('fs');
const querystring = require('querystring');

let todoList = [
    {
        id: Math.random() + '',
        message: "Wake up",
        checked: false
    },
    {
        id: Math.random() + '',
        message: "Have a breakfast",
        checked: false
    },
    {
        id: Math.random() + '',
        message: "Go to classes",
        checked: false
    }
]


const todoServer = http.createServer(function (req, res)
	{

    	const parsedUrl = url.parse(req.url);
    	const parsedQuery = querystring.parse(parsedUrl.query);
    	const method = req.method;

    	fs.readFile('./public' + req.url, function(err,data)
			{
				if(err)
					{
						res.statusCode = 404;
						res.end("The file is not found")
					}
				else
					{
						res.statusCode = 200;
						res.end(data);
					}
    		});


    if(req.url.indexOf('/todo') === 0)
	    {


			if(method === "GET")//???
				{

        	    	res.setHeader('Content-Type','application/json');
            		let localList = todoList;

         		   if(parsedQuery.searchText)
						{
                			localList = localList.filter(function(obj)
								{
                    				return obj.message.indexOf(parsedQuery.searchText) >= 0;
               			 		});
                			res.end(JSON.stringify(localList));
            			}	

            		res.end(JSON.stringify(todoList));
        		}


      	  	if(method === "POST")
		  		{

            		let listAdd = '';
            		req.on('data',function(chunk)
						{
                			listAdd = listAdd + chunk;
            			});

            		req.on('end',function()
						{
                			let parsedAdd = JSON.parse(listAdd);
                			parsedAdd.id = Math.random() + '';
                			todoList.push(parsedAdd);

               	 			res.setHeader('Content-Type','application/json');
                			return res.end(JSON.stringify(todoList));
           			 	})
    	    	}
	

        	if(method === 'DELETE')
				{

            		let listDel = '';
            		req.on('data',function(chunk)
						{
                			listDel = listDel + chunk;
            			});

            		req.on('end',function()
						{
                			let parsedDel = JSON.parse(listDel);
                			for(let i=1;i<=todoList.length;i = i + 1) 
								{
                    				if (parsedDel.id === todoList[i-1].id) 
										{
                       						 todoList.splice(i-1 , 1);//???
                    					}
                				}
               				 res.end(JSON.stringify(todoList));
                		});
        		}

       
      	  	if(method === 'PUT')
				{
            		let listPut = '';
            		req.on('data',function(chunk)
						{
                			listPut = listPut + chunk;
            			});

            		req.on('end',function()
						{
                			let parsedPut = JSON.parse(listPut);
                			for(let i = 1;i <= todoList.length;i = i +1)
								{
                    				if(parsedPut.id === todoList[i - 1].id)
										{
                        					todoList[i-1].checked = parsedPut.checked;
                    					}
                				}	
              				  res.end(JSON.stringify(todoList));
           				 });
        		}
    	}

	});


todoServer.listen(3002);