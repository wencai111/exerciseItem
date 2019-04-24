<template>
	<view class="troops">
		<view class="firstTeam">
			<view v-on:click="eagle">{{ item.troops }}</view>
			<text class="fight">VS</text>
			<br />
			<view>
				<view v-on:click="celtic">{{ item.troops1 }}</view>
				<text class="fight">{{ item.troops }}领先</text>
			</view>
		</view>
		<view class="secondTo">
			<view v-on:click="hornet">{{ item.troops2 }}</view>
			<text class="fight">VS</text>
			<br />
			<view>
				<view v-on:click="bull">{{ item.troops3 }}</view>
				<text class="fight">{{ item.troops2 }}领先</text>
			</view>
			<br />
			<button type="primary" v-on:click="daying" class="game">查看比赛</button>
		</view>
	</view>
</template>

<script>
import allTroops from '@/data/team.js';
import taskForce from '@/model/indexModel.js';
export default {
	data() {
		return {
			item: taskForce
		};
	},
	onLoad() {},
	components: {},
	methods: {
// 		//查看队伍
// 		daying: function(result) {
// 			debugger;
// 			var result = allTroops;
// 			this.item.displayName(result);
// 		},
// 		//老鹰队
// 		eagle: function(result) {
// 			uni.navigateTo({ url: '/pages/index/index1' });
// 		},
// 		celtic: function(result) {
// 			uni.navigateTo({ url: '/pages/index/index2' });
// 		},
	}
};
</script>

<style>
.content {
	text-align: center;
	height: 400upx;
}

.logo {
	height: 200upx;
	width: 200upx;
	margin-top: 200upx;
}

.title {
	font-size: 36upx;
	color: #8f8f94;
}
.troops {
	color: deepskyblue;
	position: relative;
}
.firstTeam {
	text-align: center;
	font-size: 35upx;
	width: 250upx;
	height: 200upx;
	border: 1upx solid black;
	position: absolute;
	left: 0%;
}
.fight {
	color: #000000;
	font-size: 25upx;
}
.secondTo {
	text-align: center;
	font-size: 35upx;
	width: 250upx;
	height: 200upx;
	border: 1upx solid black;
	right: 0%;
	position: absolute;
}
.game{
	right: 0%;
	margin-top: 80px;
}
</style>
