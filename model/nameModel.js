const teamNameModel={
	name1: "",
	name2: "",
	name3: "",
	name4: "",
	name5: "",
	boxScore:function(data){
		console.log ("确定data是否有值"+JSON.stringify(data));
		this.name1=data.name1;
		this.name2=data.name2;
		this.name3=data.name3;
		this.name4=data.name4;
		this.name5=data.name5;
	}
}
//导出对象
export default teamNameModel;