<template>
	<div id="app">
		<router-view></router-view>

		<div class="footer">
			<!-- <ul>
				<li>
					<router-link to="/index"><img src="../../public/img/all/home.png" alt=""><b>首页</b></router-link>
				</li>
				<li>
					<router-link to="/sort"><img src="../../public/img/all/kind.png" alt=""><b>分类</b></router-link>
				</li>
				<li>
					<router-link to="/service"><img src="../../public/img/all/service.png" alt=""><b>客服</b></router-link>
				</li>
				<li>
					<router-link to="/shop"><img src="../../public/img/all/cart.png" alt=""><b>购物车</b></router-link>
				</li>
				<li>
					<router-link to="/my"><img src="../../public/img/all/redcapationl1.png" alt=""><b>我的</b></router-link>
				</li>
			</ul> -->
			<ul>
				<van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000">
					<li>
						<router-link to="/index">
							<van-tabbar-item icon="home-o">首页</van-tabbar-item>
						</router-link>
					</li>
					<li>
						<router-link to="/sort">
							<van-tabbar-item icon="bars">分类</van-tabbar-item>
						</router-link>
					</li>
					<li>
						<router-link to="/service">
							<van-tabbar-item icon="service-o">客服</van-tabbar-item>
						</router-link>
					</li>
					<li>
						<router-link to="/shop">
							<van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
						</router-link>
					</li>
					<li>
						<router-link to="/my">
							<van-tabbar-item icon="contact">我的</van-tabbar-item>
						</router-link>
					</li>





				</van-tabbar>
			</ul>

		</div>
		<!-- 网页底部 -->

	</div>

</template>

<script>
	export default{
		data(){
			return{
				active: 0
			}
		}
	}
</script>

<style>
	* {
		margin: 0px;
		padding: 0px;
		list-style: none;
	}

	img {
		border: none;
		vertical-align: top;
		font-size: 12px;
	}

	b {
		font-style: normal;
		font-weight: 400;
	}

	body {
		max-width: 640px;
		margin: 0 auto;
		background: #f3f3f3;
	}

	/* #app{
		padding: 0.88rem 0;
	} */
	html {
		font-size: 100px;
	}

	@media screen and (max-width: 640px) {
		html {
			font-size: 100px;
		}
	}

	@media screen and (max-width: 624px) {
		html {
			font-size: 97.5px;
		}
	}

	@media screen and (max-width: 608px) {
		html {
			font-size: 95px;
		}
	}

	@media screen and (max-width: 592px) {
		html {
			font-size: 92.5px;
		}
	}

	@media screen and (max-width: 576px) {
		html {
			font-size: 90px;
		}
	}

	@media screen and (max-width: 560px) {
		html {
			font-size: 87.5px;
		}
	}

	@media screen and (max-width: 544px) {
		html {
			font-size: 85px;
		}
	}

	@media screen and (max-width: 528px) {
		html {
			font-size: 82.5px;
		}
	}

	@media screen and (max-width: 512px) {
		html {
			font-size: 80px;
		}
	}

	@media screen and (max-width: 496px) {
		html {
			font-size: 77.5px;
		}
	}

	@media screen and (max-width: 480px) {
		html {
			font-size: 75px;
		}
	}

	@media screen and (max-width: 464px) {
		html {
			font-size: 72.5px;
		}
	}

	@media screen and (max-width: 448px) {
		html {
			font-size: 70px;
		}
	}

	@media screen and (max-width: 432px) {
		html {
			font-size: 67.5px;
		}
	}

	@media screen and (max-width: 416px) {
		html {
			font-size: 65px;
		}
	}

	@media screen and (max-width: 400px) {
		html {
			font-size: 62.5px;
		}
	}

	@media screen and (max-width: 384px) {
		html {
			font-size: 60px;
		}
	}

	@media screen and (max-width: 368px) {
		html {
			font-size: 57.5px;
		}
	}

	@media screen and (max-width: 352px) {
		html {
			font-size: 55px;
		}
	}

	@media screen and (max-width: 336px) {
		html {
			font-size: 52.5px;
		}
	}

	@media screen and (max-width: 320px) {
		html {
			font-size: 50px;
		}
	}

	/* @media screen and (max-width: 400px)
	html {
	    font-size: 62.5px;
	}
	@media screen and (max-width: 416px)
	html {
	    font-size: 65px;
	}
	@media screen and (max-width: 432px)
	html {
	    font-size: 67.5px;
	}
	@media screen and (max-width: 448px)
	html {
	    font-size: 70px;
	}
	@media screen and (max-width: 464px)
	html {
	    font-size: 72.5px;
	}
	@media screen and (max-width: 480px)
	html {
	    font-size: 75px;
	}
	@media screen and (max-width: 496px)
	html {
	    font-size: 77.5px;
	}
	@media screen and (max-width: 512px)
	html {
	    font-size: 80px;
	}
	@media screen and (max-width: 528px)
	html {
	    font-size: 82.5px;
	}
	@media screen and (max-width: 544px)
	html {
	    font-size: 85px;
	}
	@media screen and (max-width: 560px)
	html {
	    font-size: 87.5px;
	}
	
	@media screen and (max-width: 576px)
	html {
	    font-size: 90px;
	}
	@media screen and (max-width: 592px)
	html {
	    font-size: 92.5px;
	}
	@media screen and (max-width: 608px)
	html {
	    font-size: 95px;
	}
	@media screen and (max-width: 624px)
	html {
	    font-size: 97.5px;
	}
	
	@media screen and (max-width: 640px)
	html {
	    font-size: 100px;
	}
	html {
	    font-size: 100px;
	} */
</style>
<style scoped>
	.footer {
		position: fixed;
		width: 100%;
		left: 0;
		bottom: 0;
		background: #fff;
		box-shadow: 0px 0px 5px #8e8e8e;
		z-index: 100;
	}

	.footer ul {
		overflow: hidden;
		list-style: none;
	}

	.footer ul li {
		float: left;
		width: 20%;
		text-align: center;
		height: 0.88rem;
	}

	.footer ul li a {
		color: #333333;
		font-size: 0.22rem;
		display: block;
		height: 0.88rem;
		text-decoration: none;
	}

	.footer ul li a img {
		width: 0.36rem;
		margin: auto;
		display: block;
		margin-top: 0.13rem;
		height: 0.36rem;
	}

	.footer ul li a b {
		display: block;
		text-align: center;
		line-height: 0.5rem;
		font-style: normal;
		font-weight: 400;
	}
</style>
