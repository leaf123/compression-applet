var projectData = {
	'name':'creat-miaov',
	'fileData':[
		{
			'name':'css',
			'type':'dir'
		},
		{
			'name':'js',
			'type':'dir'
		},
		{
			'name':'images',
			'type':'dir'
		},
		{
			'name':'index.html',
			'type':'file',
			'content':'<html>\n\t<head>\n\t<title>标题</title>\n\t</head>\n\t<body>\n\t<h1>Hello</h1>\n\t</body>\n\t</html>'
		}
	]
};

var fs=require('fs')
if(projectData.name){
	var fileData = projectData.fileData
	fs.mkdirSync(projectData.name);
	if(fileData && fileData.forEach){
		fileData.forEach(function(f){
			f.path = projectData.name + '/' +f.name;
			f.content = f.content || '';
			switch(f.type){
				case 'dir':
					fs.mkdirSync(f.path);
					break;
				case 'file':
					fs.writeFile(f.path,f.content)
					break;
				default:
					break;

			}
		})
	}
}