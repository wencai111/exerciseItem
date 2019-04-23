const getResults = {
	grade: "",
	grade1: "",
	grade2: "",
	grade3: "",
	grade4: "",
	addGrade: "",
	bigEagle: function(data) {
		console.log("确定data是否有值" + JSON.stringify(data));
		debugger;
		this.grade = data.grade;
		this.grade1 = data.grade1;
		this.grade2 = data.grade2;
		this.grade3 = data.grade3;
		this.grade4 = data.grade4;
		this.addGrade = Number(this.grade)+ Number(this.grade1) + Number(this.grade2) + Number(this.grade3) + Number(this.grade4);
	},
// 	celtic: function(data) {
// 		console.log("确定data是否有值" + JSON.stringify(data));
// 		this.grade = data.grade;
// 		this.grade1 = data.grade1;
// 		this.grade2 = data.grade2;
// 		this.grade3 = data.grade3;
// 		this.grade4 = data.grade4;
// 		this.addgrade = grade + grade1 + grade2 + grade3 + grade4;
// 	},
}
//导出对象
export default getResults;
