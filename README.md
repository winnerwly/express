# express
学习express的一个小demo

# 目录结构

|- /
	|- bin					## 配置服务
		|- www 			   ### 配置web服务
	|- public				## 静态资源
		|- ... 			   ### 按需自行定义
	|- request				## 动态请求(get,post,...)
		|- mysql.js        ### mysql配置文件
		|- user.js         ### 响应请求文件
		|- ....js          ### 按需添加
	|- routes				## 响应页面路由
		|- ....js          ### 定义路由的响应结果
	|- views				## 静态页面模板
		|- ....js          ### 静态模板文件
	|- .gitignore 			## git配置文件
	|- app.js 				## 主入口文件
	|- package.json 		## npm包管理文件
	|- README.md 			## git说明文档

# 运行

### git clone https://github.com/winnerdemo/express.git
### cd express
### npm i 或者 cnpm i
### npm start 或者 npm run dev

### 打开浏览器运行 http://127.0.0.1:8000
