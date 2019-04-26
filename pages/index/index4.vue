<template>
	<view v-show="true" v-bind="id">
		<view>{{items.boston.name1}} 得分：{{item.boston.grade}}</view>
		<view>{{items.boston.name2}} 得分：{{item.boston.grade1}}</view>	
		<view>{{items.boston.name3}} 得分：{{item.boston.grade2}}</view>	
		<view>{{items.boston.name4}} 得分：{{item.boston.grade3}}</view>
		<view>{{items.boston.name5}} 得分：{{item.boston.grade4}}</view>
		<view>球队总成绩：{{item.boston.addGrade}}</view>
		<hr/>
		<text>球队赛程</text>
		<view>{{agenda.oneGame.twoTerm}}VS{{agenda.oneGame.oneTerm}}：{{agenda.oneGame.againstGrade}}</view>
	</view>
</template>

<script>
	import score from '@/data/grade.js';
	import competition from '@/data/grame.js';
	import teamName from '@/data/person.js';
	import getResults from '@/model/index2Model.js';
	export default {
		data() {
			return {
				report:getResults,
				item: score,
				items:teamName,
				agenda:competition,
				id:''
			};
		},
		onLoad() {},
			components: {
		},
		methods: {
		}
	};
</script>

<style>
</style>
