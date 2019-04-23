const taskForce = {
	troops: "",
	troops1: "",
	troops2: "",
	troops3: "",
	team: [],
	displayName: function(result) {
		console.log("确定传值" + JSON.stringify(result));
		debugger;
		troops: "",
		this.troops = result.troops;
		this.troops1 = result.troops1;
		this.troops2 = result.troops2;
		this.troops3 = result.troops3;
	},
// 	if (bigEagle.addgrade > celtic.addgrade) {
// 		//大老鹰领先
// 		this.troops = data.troops;
// 	} else {
// 		if (bigEagle.addgrade < celtic.addgrade)
// 		else {
// 			this.troops1 = data.troops1;
// 		} else {
// 
// 		}
// 	}
}


//导出对象
export default taskForce;
