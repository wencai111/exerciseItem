<template>
	<view v-show="true" v-bind="id">
		<view>{{items.atlanta.name1}} 得分：{{item.atlanta.grade}}</view>
		<view>{{items.atlanta.name2}} 得分：{{item.atlanta.grade1}}</view>	
		<view>{{items.atlanta.name3}} 得分：{{item.atlanta.grade2}}</view>	
		<view>{{items.atlanta.name4}} 得分：{{item.atlanta.grade3}}</view>
		<view>{{items.atlanta.name5}} 得分：{{item.atlanta.grade4}}</view>
		<view>球队总成绩：{{item.atlanta.adding.addGrade}}</view>
<!-- 				<button type="primary" @click="goBack">返回</button> -->
	</view>
</template>

<script>
	import score from '@/data/grade.js';
	import competition from '@/data/grame.js';
	import teamName from '@/data/person.js';
	export default {
		data() {
			return {
				item: score,
				items:teamName,
				id:''
			};
		},
		onLoad() {},
			components: {
		},
		methods: {
			goBack:function(res){
				console.log("确定传值" + JSON.stringify(res));
			}
		}
	};
</script>

<style>
</style>
