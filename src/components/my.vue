<template>
	<main class="my">
		<router-view></router-view>
		<div class="header">
			<div class="headinner">
				<div class="rebtn">
					<a @click="hui" ></a>
				</div>
				<div class="headlabel">
					<span>我的阅读</span>
				</div>
				<div class="shcut"></div>
			</div>
		</div>
		<div class="content">
			<div class="myhead">
				<div class="userinfor">
					<div class="headpor">
						<a><img src="../../public/img/my/headpic.png" alt=""></a>
					</div>
					<div class="username">
						ztw_123dasdxcd
						<a></a>
					</div>
					<div class="userleave">
						<a class="startleave">
							<i class="start1">1</i>
							一星会员
						</a>
						<a class="innum">
							书虫值：
							<span>0</span>
						</a>
					</div>
					<div class="argin">再积攒<em>200</em>书虫值就可升级为二星会员啦！</div>
				</div>
				<div class="setUp"><a></a></div>
			</div>
			<div class="orderbar">
				<div class="ordertit">
					<a>
						<b>我的订单</b>
						<span>查看所有订单</span>
					</a>
				</div>
				<div class="ordercon">
					<van-grid :border="false" :column-num="4">
						<van-grid-item>
							<van-image src="img/my/willpay.png" />
							<van-grid-item text="待付款" />
						</van-grid-item>
						<van-grid-item>
							<van-image src="img/my/will2.png" />
							<van-grid-item text="待收货" />
						</van-grid-item>
						<van-grid-item>
							<van-image src="img/my/will3.png" />
							<van-grid-item text="待评价" />
						</van-grid-item>
						<van-grid-item>
							<van-image src="img/my/will4.png" />
							<van-grid-item text="退换货" />
						</van-grid-item>
					</van-grid>
				</div>
				<div class="assetbar">
					<van-grid :border="false" :column-num="4">
						<van-grid-item>
							<van-grid-item text="2张" />
							<van-grid-item text="优惠券" />
						</van-grid-item>
						<van-grid-item>
							<van-grid-item text="¥0" />
							<van-grid-item text="余额" />
						</van-grid-item>
						<van-grid-item>
							<van-grid-item text="0" />
							<van-grid-item text="书币" />
						</van-grid-item>
						<van-grid-item>
							<van-grid-item text="0张" />
							<van-grid-item text="书馨卡" />
						</van-grid-item>
					</van-grid>
				</div>
				<div class="shortcutt">
					<van-grid :column-num="4">
						<van-grid-item>
							<van-image src="img/my/signin.png" />
							<van-grid-item text="签到收红包" />
						</van-grid-item>
						<van-grid-item>
							<van-image src="img/my/accountcollection.png" />
							<van-grid-item text="我的收藏" />
						</van-grid-item>
						<van-grid-item>
							<van-image src="img/my/accountAddress.png" />
							<van-grid-item text=" 收货地址" />
						</van-grid-item>
						<van-grid-item>
							<van-image src="img/my/yaoqingfanli.png" />
							<van-grid-item text="邀请返利" />
						</van-grid-item>
						<van-grid-item>
							<van-image src="img/my/integralVoucher.png" />
							<van-grid-item text="书币换券" />
						</van-grid-item>
						<van-grid-item>
							<van-image src="img/my/evaluate.png" />
							<van-grid-item text="我的评论" />
						</van-grid-item>
						<van-grid-item>
							<van-image src="img/my/modifyword.png" />
							<van-grid-item text="修改密码" />
						</van-grid-item>
						<van-grid-item>
							<van-image src="img/my/helpcenter.png" />
							<van-grid-item text="帮助中心" />
						</van-grid-item>
					</van-grid>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
	export default {
		methods:{
			hui(){
				// back():
				this.$router.back();
			}
		}
	}
</script>

<style scoped>
	.orderbar .van-image {
		width: 0.4rem;
		height: 0.4rem;
	}
	.shortcutt {
		padding: 0 0.2rem;
		background: #fff;
		margin-top: 0.1rem;
	}

	.assetbar {
		padding: 0 0.2rem;
		background: #fff;
	}

	.ordercon img {
		width: 100%;
	}

	.orderbar .ordercon {
		border-bottom: 1px solid #f3f3f3;
	}

	.orderbar .ordertit span {
		float: right;
		color: #333;
		background: url("../../public/img/my/accountrightbtn.png") no-repeat right center;
		background-size: 0.08rem 0.15rem;
		padding-right: 0.18rem;
		font-size: 0.22rem;
	}

	.orderbar .ordertit b {
		float: left;
		color: #333333;
		font-size: 0.28rem;
	}

	.orderbar .ordertit a {
		display: block;
		height: 0.86rem;
		overflow: hidden;
		line-height: 0.86rem;
	}

	.orderbar .ordertit {
		border-bottom: 1px solid #f3f3f3;
	}

	.content .orderbar {
		padding: 0 0.2rem;
		background: #fff;
		margin-top: 0.1rem;
	}

	.content .myhead .argin {
		padding-top: 0rem;
		font-family: Microsoft Yahei;
		font-size: .18rem;
		color: #666;
		line-height: 0.32rem;
		padding: 0.28rem 0 0.2rem;
	}

	.content .myhead .userleave .innum span {
		font-family: Arial;
		color: #ec1b08;
	}

	.content .myhead .userleave .innum {
		font-family: Microsoft Yahei, Helvetica, Arial;
		color: #333;
		border-left: 1px solid #bfbfbf;
		padding-left: 0.18rem;
		margin-left: 0.18rem;
	}

	.content .myhead .userleave .startleave i.start1 {
		background: url("../../public/img/my/star1.png") no-repeat left center;
		background-size: 0.28rem 0.24rem;
	}

	.content .myhead .userleave .startleave i {
		color: #fff;
		width: .28rem;
		font-size: .18rem;
		line-height: .37rem;
		height: 0.32rem;
		display: inline-block;
		margin-right: .05rem;
	}

	.content .myhead .userleave .startleave {
		color: #ec1b08;
		font-family: Microsoft Yahei, Helvetica, Arial;
	}

	.content .myhead .userleave {
		font-size: 0.22rem;
		line-height: 0.32rem;
		padding: 0.28rem 0 0.2rem;
	}

	.content .myhead .userinfor .username a {
		display: inline-block;
		height: 0.3rem;
		width: 0.3rem;
		background: url("../../public/img/my/inforedit.png") no-repeat center 0.05rem;
		background-size: 0.26rem 0.25rem;
		margin: 0 0 0 0.07rem;
	}

	.content .myhead .userinfor .username {
		font-size: 0.24rem;
		font-weight: bold;
		line-height: 0.3rem;
		color: #333333;
		margin-top: 0.74rem;
	}

	.content .myhead .userinfor .headpor img {
		width: 100%;
		border-radius: 100%;
	}

	.content .myhead .userinfor .headpor a {
		display: block;
	}

	.content .myhead .userinfor .headpor {
		position: absolute;
		height: 1.2rem;
		width: 1.2rem;
		left: 50%;
		top: -0.6rem;
		background: url("../../public/img/my/headportraitbg.png") no-repeat center;
		background-size: cover;
		padding: 0.1rem;
		margin-left: -0.6rem;
	}

	.content .myhead .setUp {
		position: absolute;
		width: 0.4rem;
		height: 0.4rem;
		background: url("../../public/img/my/setUp.png") no-repeat center;
		background-size: 0.36rem 0.34rem;
		right: 0.18rem;
		top: 0.1rem;
	}

	.content .myhead .userinfor {
		background: #fff;
		text-align: center;
		position: relative;
		border-top: 1px solid #fff;
	}

	.content .myhead {
		background: #e60000;
		padding: 1.2rem 0.2rem 0.15rem;
		position: relative;
	}

	.content {
		margin-top: 0.88rem;
		margin-bottom: 0.88rem;
	}

	.header .shcut {
		position: absolute;
		width: 0.75rem;
		height: 0.88rem;
		right: 0;
		top: 0;
		background: url("../../public/img/shop/shortcut.png") no-repeat center;
		background-size: 0.35rem 0.06rem;
		cursor: pointer;
	}

	.header .headlabel span {
		display: block;
		font-size: 0.3rem;
		color: #333333;
	}

	.header .headlabel {
		text-align: center;
		height: 0.88rem;
		line-height: 0.88rem;
	}

	.header .headinner .rebtn a {
		display: block;
		height: 0.88rem;
		width: 0.6rem;
		background: url("../../public/img/shop/returnbtnicon (1).png") no-repeat center;
		background-size: 0.2rem 0.35rem;
	}

	.header .headinner .rebtn {
		position: absolute;
		left: 0;
		top: 0;
	}

	.header .headinner {
		position: relative;
		height: 0.88rem;
	}

	.header {
		background: #fff;
		/* box-shadow: 0px 0px 10px #d4d2d3; */
		position: fixed;
		width: 100%;
		left: 0;
		top: 0;
		z-index: 900;
	}
</style>
