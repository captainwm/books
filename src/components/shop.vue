<template>
	<main class="shop">
		<router-view></router-view>
		<div class="header">
			<div class="headinner">
				<div class="rebtn">
					<a @click="hui"></a>
				</div>
				<div class="headlabel">
					<span>购物车</span>
				</div>
				<div class="editbtn">编辑</div>
				<div class="shcut"></div>
			</div>
		</div>
		<div class="noticed">
			<a>受疫情防控影响，甘肃、河南、山东、四川、上海等部分地区的快递暂停配送，敬请谅解，详情请点击查看&gt;&gt;</a>
		</div>
		<div class="noshop" style="display: none;">
			<div class="noshopwrap">
				<img src="../../public/img/shop/noproduct.png" alt="">
				<span>您的购物车暂无商品</span>
				<router-link to="/index">随便逛逛</router-link>
			</div>
		</div>
		<div class="active">
			<ul class="activelist bef">
				<li>
					<!-- ::before -->
					<div class="listcheck"></div>
					<div class="book">
						<div class="bookinner">
							<div class="bookcover">
								<a><img src="../../public/img/shop/s6947397.jpg" alt=""></a>
							</div>
							<div class="booktext">
								<a class="name">语自在<br></a>
								<div class="pricewrap"> <span class="salespr">¥13.1</span> <span
										class="price">¥39.8</span> </div>
								<div class="area">
									<div class="countedit">
										<!-- <span class="decrement ">-</span>
										<input autocomplete="off" value="1" max="1633" min="1" type="text" class="num">
										<span class="increment ">+</span> -->
										<van-stepper v-model="value" integer />
									</div>
									<div class="other">
										<i class="add">收藏</i>
										<i class="dele">删除</i>
									</div>
								</div>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<van-submit-bar :price="1310" button-text="提交订单">
			<van-checkbox>全选</van-checkbox>
			<template #tip>
				你的收货地址不支持同城送, <span >修改地址</span>
			</template>
		</van-submit-bar>
	</main>
</template>

<script>
	export default {
		 data() {
		    return {
		      value: 1,
		    };
		  },
		methods: {
			hui() {
				// back():
				this.$router.back();
			}
		}
	}
</script>

<style scoped>
	ul.activelist li .other .dele {
	    float: left;
	    height: 0.4rem;
	    width: 0.4rem;
	    background: url("../../public/img/shop/cardelet.png") no-repeat center;
	    background-size: 0.34rem;
	    text-indent: -999px;
	    overflow: hidden;
	    cursor: pointer;
	}
	ul.activelist li .other .add {
	    float: left;
	    height: 0.4rem;
	    width: 0.4rem;
	    background: url("../../public/img/shop/carslec.png") no-repeat center;
	    background-size: 0.3rem 0.29rem;
	    text-indent: -999px;
	    overflow: hidden;
	    margin-right: 0.28rem;
	    cursor: pointer;
	}
	ul.activelist li .other {
	    float: right;
	    overflow: hidden;
	}
	ul.activelist li .booktext .countedit span.increment {
	    background: url("../../public/img/shop/carplus.png") no-repeat center;
	    background-size: 0.22rem;
	    border-left: 1px solid #f3f3f3;
	}
	ul.activelist li .booktext .countedit input {
	    float: left;
	    height: 0.38rem;
	    border: none;
	    width: 0.56rem;
	    margin: 0 0.1rem;
	    text-align: center;
	    line-height: 0.38rem;
	    color: #333;
	    font-size: 0.22rem;
	}
	ul.activelist li .booktext .countedit span.decrement {
	    background: url("../../public/img/shop/carreduce.png") no-repeat center;
	    background-size: 0.22rem 0.03rem;
	    border-right: 1px solid #f3f3f3;
	}
	ul.activelist li .booktext .countedit span {
	    float: left;
	    width: 0.44rem;
	    height: 0.4rem;
	    text-indent: -999px;
	    overflow: hidden;
	    cursor: pointer;
	}
	ul.activelist li .booktext .countedit {
	    float: left;
	    overflow: hidden;
	    border: 0.02rem solid #f3f3f3;
	}
	ul.activelist li .booktext .area {
		overflow: hidden;
		margin-top: 0.16rem;
	}

	ul.activelist li .booktext .price {
		float: left;
		color: #999999;
		margin-left: 0.26rem;
		text-decoration: line-through;
	}

	ul.activelist li .booktext .salespr {
		float: left;
		color: #e60000;
	}

	ul.activelist li .booktext .pricewrap {
		overflow: hidden;
		font-size: 0.22rem;
		line-height: 0.32rem;
		margin-top: 0.12rem;
		font-family: 'Microsoft YaHei';
	}

	ul.activelist li .booktext a.name {
		line-height: 0.32rem;
		font-size: 0.22rem;
		color: #333333;
		font-family: 'Microsoft YaHei';
		display: block;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	ul.activelist li .book .bookcover img {
		height: 1.25rem;
		max-width: 1.25rem;
	}

	ul.activelist li .book .bookcover {
		outline: 1px solid #ddd;
		position: absolute;
		height: 1.25rem;
		width: 1.25rem;
		left: 0.06rem;
		top: 0.07rem;
		line-height: 1.25rem;
		text-align: center;
	}

	ul.activelist li .book .bookinner {
		position: relative;
		padding-left: 1.607rem;
		min-height: 1.25rem;
		border-bottom: 1px solid #f2f2f2;
		padding-bottom: .3rem;
	}

	ul.activelist li .book {
		/* border-bottom: 1px solid #f2f2f2; */
		padding: 0.25rem 0 0rem 0.4rem;
		font-size: 12px;
		position: relative;
	}

	.activelist li .listcheck {
		cursor: pointer;
		position: absolute;
		width: 0.8rem;
		height: 100%;
		font-size: 0px;
		text-indent: -999px;
		overflow: hidden;
		background: url("../../public/img/shop/carselected.png") no-repeat 0.2rem 0.77rem;
		left: 0;
		top: 0;
		background-size: 0.32rem;
		cursor: pointer;
		z-index: 100;
	}

	/* ul.activelist.bef li::before {
	    content: "";
	    width: 0.01rem;
	    height: 100%;
	    border-left: 1px dashed #e5e5e5;
	    position: absolute;
	    top: -0.45rem;
	    left: 0.35rem;
	    padding-bottom: .14rem;
	} */
	.active ul.activelist li {
		padding: 0 0.2rem;
		position: relative;
	}

	.active ul.activelist {
		background: #fff;
		padding-bottom: 0.2rem;
	}

	.active {
		margin-top: 0.2rem;
	}

	.noshopwrap a {
		display: block;
		margin: auto;
		width: 4rem;
		margin: 0.45rem auto 0.55rem;
		background: #e60000;
		text-align: center;
		color: #ffffff;
		font-size: 0.26rem;
		height: 0.66rem;
		line-height: 0.66rem;
		border-radius: 0.66rem;
	}

	.noshopwrap span {
		color: #333333;
		font-size: 0.22rem;
		display: block;
		line-height: 0.32rem;
		margin-top: 0.15rem;
	}

	.noshopwrap img {
		display: block;
		width: 0.75rem;
		margin: 0.75rem auto 0;
	}

	.noshopwrap {
		text-align: center;
		background: #fff;
		overflow: hidden;
		margin-top: 0.1rem;
	}

	.noticed p,
	.noticed a {
		padding: 0.2rem 0.2rem 0.1rem;
		display: block;
	}

	.noticed {
		margin-top: 0.88rem;
		background: #fcf9db;
		font-size: 0.22rem;
		line-height: 0.34rem;
		color: #e60000;
		width: 100%;
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

	.header .editbtn {
		position: absolute;
		width: 0.85rem;
		height: 0.88rem;
		line-height: 0.88rem;
		text-align: center;
		right: 0.75rem;
		top: 0;
		cursor: pointer;
		font-size: 0.22rem;
		color: #333;
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
		box-shadow: 0px 0px 10px #d4d2d3;
		position: fixed;
		width: 100%;
		left: 0;
		top: 0;
		z-index: 900;
	}

	article,
	aside,
	details,
	figcaption,
	figure,
	footer,
	header,
	hgroup,
	menu,
	nav,
	section {
		display: block;
	}
</style>
