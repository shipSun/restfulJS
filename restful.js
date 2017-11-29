/**
 * @author shipSun
 */
function RestFul(){
	this.type="get";
	this.url="";
	this.data="";
	this.async=true;
	
	this.ajax=function(){
		$.ajax({
			"type":this.type,
			"url":this.url,
			"async":this.async,
			"cache":true,
			"complete":this.complete,
			"error":this.error,
			"success":this.success,
			"contentType":"application/x-www-form-urlencoded",
			"data":this.data,
			"dataType":"json"
		});
	};
	this.complete=function(xhr, type){
		console.log('执行完成');
		console.log(xhr);
		console.log(type)
	};
	this.error=function(xhr,errStr){
		console.error(xhr);
		console.error(errStr);
		alert(errStr);
	};
	this.success=function(data){
		console.log(data);
	};
}
RestFul.prototype.init = function(config){
	if(config.async!==undefined){
		this.async = config.async;
	}
}
RestFul.prototype.post = function(url, data, successe, error, complete){
	this.url=url;
	this.data=data;
	this.type='POST';
	if(success){
		this.success=success;
	}
	if(error){
		this.error = error;
	}
	if(complete){
		this.complete=complete;
	}
	this.ajax();
};
RestFul.prototype.get = function(url, data, successe, error, complete){
	this.url=url;
	this.data=data;
	this.type='GET';
	if(success){
		this.success=success;
	}
	if(error){
		this.error = error;
	}
	if(complete){
		this.complete=complete;
	}
	this.ajax();
};
RestFul.prototype.put = function(url, data, successe, error, complete){
	this.url=url;
	this.data=data;
	this.type='PUT';
	if(success){
		this.success=success;
	}
	if(error){
		this.error = error;
	}
	if(complete){
		this.complete=complete;
	}
	this.ajax();
};
RestFul.prototype.del = function(url, data, successe, error, complete){
	this.url=url;
	this.data=data;
	this.type='DELETE';
	if(success){
		this.success=success;
	}
	if(error){
		this.error = error;
	}
	if(complete){
		this.complete=complete;
	}
	this.ajax();
};
jQuery.restful=new RestFul();