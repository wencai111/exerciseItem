<template>
	<view v-show="true" v-bind="id">
		<view>{{items.atlanta.name1}} 得分：{{item.atlanta.grade}}</view>
		<view>{{items.atlanta.name2}} 得分：{{item.atlanta.grade1}}</view>	
		<view>{{items.atlanta.name3}} 得分：{{item.atlanta.grade2}}</view>	
		<view>{{items.atlanta.name4}} 得分：{{item.atlanta.grade3}}</view>
		<view>{{items.atlanta.name5}} 得分：{{item.atlanta.grade4}}</view>
		<view>球队总成绩：{{item.atlanta.addGrade}}</view>
		<hr/>
		<text>球队赛程</text>
		<view>{{agenda.oneGame.oneTerm}}VS{{agenda.oneGame.twoTerm}}：{{agenda.oneGame.againstGrade}}</view>
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
		daying: function() {
				debugger;
				var res=getResults
				this.report.bigEagle(res);
			}
		}
	};
</script>

<style>
</style>
