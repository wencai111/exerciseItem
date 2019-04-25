<template>
	<view>
		<view>{{items.name1}} 得分：{{item.grade}}</view>
		<view>{{items.name2}} 得分：{{item.grade1}}</view>	
		<view>{{items.name3}} 得分：{{item.grade2}}</view>	
		<view>{{items.name4}} 得分：{{item.grade3}}</view>
		<view>{{items.name5}} 得分：{{item.grade4}}</view>
		<view>球队总成绩：{{item.addGrade}}</view>
	</view>
</template>

<script>
	import score from '@/data/grade.js';
	import teamName from '@/data/person.js';
	import teamNameModel from '@/model/nameModel.js';
	import getResults from '@/model/index2Model.js';
	export default {
		data() {
			return {
				item: getResults,
				items:teamNameModel
			};
		},
		onLoad() {},
			components: {
			score,
			teamName
		},
		methods: {
		}
	};
</script>

<style>
</style>
