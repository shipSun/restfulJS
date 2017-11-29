restful请求
===============

## 使用说明

config={

    "async":true, //同步或异步
	"debug":true, //添加调试

};

1、$.restful.init(config); 初始化

2、$.restful.get(url, data=null, success=false, error=false, complete=false); 获取

3、$.restful.post(url, data=null, success=false, error=false, complete=false); 创建

4、$.restful.put(url, data=null, success=false, error=false, complete=false); 更新

5、$.restful.del(url, data=null, success=false, error=false, complete=false); 删除

## [v1.1.1_beta]

1、新增加登录检测，如果没有登录跳转到登录界面