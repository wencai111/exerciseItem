<template>
	<view>
		<table border="1" class="tableBorder">
			<view class="tableBorderLeft">
			<!-- 	东部第一场 -->
				<tr>
					<th><text>东部</text></th>
				</tr>
				<tr>
					<th v-on:click="eagle">{{ item.oneGame.oneTerm }}</th>
				</tr>
				<tr>
					<th><text>VS</text></th>
				</tr>
				<tr>
					<th v-on:click="celts">{{ item.oneGame.twoTerm }}</th>
				</tr>
				<tr>
					<th>
						<text>比分{{ item.oneGame.grade }}</text>
					</th>
				</tr>
				<tr>
					<th><text></text></th>
				</tr>
				<tr>
					<th v-on:click="wasp">{{ item.twoGame.oneTerm }}</th>
				</tr>
				<tr>
					<th><text>VS</text></th>
				</tr>
				<tr>
					<th>{{ item.twoGame.twoTerm }}</th>
				</tr>
				<tr>
					<th>
						<text>比分{{ item.twoGame.grade }}</text>
					</th>
				</tr>
			</view>
<!-- 	东部第二场 -->
			<view class="tableBorderLeft">
				<tr>
					<th><text>东部</text></th>
				</tr>
				<tr><th><br/></th></tr>
				<tr><th v-on:click="celts">{{ item.fourWin.oneGame.oneTerm}}</th></tr>
				<tr><th><br/></th></tr>
				<tr><th>VS</th></tr>
				<tr>
					<th><text></text></th>
				</tr>
				<tr><th><br/></th></tr>
				<tr><th v-on:click="wasp">{{ item.fourWin.oneGame.twoTerm}}</th></tr>
				<tr><th>比分:{{ item.fourWin.oneGame.grade}}</th></tr>
				<tr><th><br/></th></tr>
			</view>
<!-- 	东部第三场 -->
			<view class="tableBorderLeft">
				<tr>
					<th><text>东部</text></th>
				</tr>
				<tr><th><br/></th></tr>
				<tr><th><br/></th></tr>
				<tr><th><br/></th></tr>
				<tr><th v-on:click="wasp">{{ item.fourWin.twoWin.oneGame.oneTerm}}</th></tr>
				<tr>
					<th><text></text></th>
				</tr>
				<tr><th><br/></th></tr>
				<tr><th><br/></th></tr>
				<tr><th><br/></th></tr>
				<tr><th><br/></th></tr>
			</view>
<!-- 东西决赛-->
			<view class="tableBorderLeft">
				<tr>
					<th><text>win</text></th>
				</tr>
				<tr><th><br/></th></tr>
				<tr><th><br/></th></tr>
				<tr><th><br/></th></tr>
				<tr><th><br/></th></tr>
				<tr>
					<th><text></text></th>
				</tr>
				<tr><th><br/></th></tr>
				<tr><th><br/></th></tr>
				<tr><th><br/></th></tr>
				<tr><th><br/></th></tr>
			</view>
<!-- 西部第三场 -->
			<view class="tableBorderLeft">
				<tr>
					<th><text>西部</text></th>
				</tr>
				<tr><th><br/></th></tr>
				<tr><th><br/></th></tr>
				<tr><th><br/></th></tr>
				<tr><th>{{ item.fourWin.twoWin.oneGame.twoTerm}}</th></tr>
				<tr>
				<th><text></text></th>
				</tr>
				<tr><th><br/></th></tr>
				<tr><th><br/></th></tr>
				<tr><th><br/></th></tr>
				<tr><th><br/></th></tr>
			</view>
<!-- 西部第二场 -->
			<view class="tableBorderLeft">
				<tr>
					<th><text>西部</text></th>
				</tr>
				<tr><th><br/></th></tr>
				<tr><th>{{ item.fourWin.twoGame.oneTerm}}</th></tr>
				<tr><th><br/></th></tr>
				<tr><th>VS</th></tr>
				<tr>
					<th><text></text></th>
				</tr>
				<tr><th><br/></th></tr>
				<tr><th>{{ item.fourWin.twoGame.twoTerm}}</th></tr>
				<tr><th>比分:{{ item.fourWin.twoGame.grade}}</th></tr>
				<tr><th><br/></th></tr>
			</view>
<!-- 西部第一场 -->
			<view class="tableBorderLeft">
				<tr>
					<th><text>西部</text></th>
				</tr>
				<tr>
					<th>{{ item.threeGame.oneTerm }}</th>
				</tr>
				<tr>
					<th><text>VS</text></th>
				</tr>
				<tr>
					<th>{{ item.threeGame.twoTerm }}</th>
				</tr>
				<tr>
					<th>
						<text>比分{{ item.threeGame.grade }}</text>
					</th>
					
				</tr>
								<tr>
					<th><text></text></th>
				</tr>
				<tr>
					<th>{{ item.foreGame.oneTerm }}</th>
				</tr>
								<tr>
					<th><text>VS</text></th>
				</tr>
				<tr>
					<th>{{ item.foreGame.twoTerm }}</th>
				</tr>
				<tr>
					<th>
						<text>比分{{ item.foreGame.grade }}</text>
					</th>
				</tr>
			</view>
		</table>
	</view>
</template>

<script>
import competition from '@/data/grame.js';
export default {
	data() {
		return {
			item: competition
		};
	},
	onLoad() {},
	components: {
	},
	methods: {
		eagle: function(res) {
			var res=competition.oneGame.id
			console.log('res' + JSON.stringify(res))
			uni.navigateTo({ url: '/pages/index/index1?id='+res});
		},
		celts: function(res) {
			var res=competition.oneGame.id
			console.log('res' + JSON.stringify(res))
			uni.navigateTo({ url: '/pages/index/index4?id='+res});
		},
			wasp: function(res) {
			var res=competition.oneGame.id
			console.log('res' + JSON.stringify(res))
			uni.navigateTo({ url: '/pages/index/index5?id='+res});
		}
	}
};
</script>

<style>
.tableBorderLeft {
	float: left;
	font-size: 20upx;
}
.tableBorder{
	overflow: hidden;
}
</style>
