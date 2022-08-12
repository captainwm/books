<template>
	<main class="register">
		<div class="header">
			<div class="headinner">
				<div class="rebtn">
					<a @click="hui" ></a>
				</div>
				<div class="headlabel">
					<span>注册</span>
				</div>
				<div class="shcut"></div>
			</div>
		</div>
		<div class="content">
			<div class="bindtip">注册完成后，记得领取新用户福利（10元组合券）</div>
			<div class="resform">
				<div class="inputitem telphonewrap">
					<span class="areacode">+86</span>
					<div class="inputwrap">
						<input type="text" class="inputblock telephone" id="telephone" placeholder="请输入手机号">
					</div>
				</div>
				<div class="inputitem imgcodewrap">
					<div class="inputwrap ">
						<input type="text" class="inputblock" id="imgcode" placeholder="请输入图形验证码">
					</div>
					<div class="imgwrap">
						<img src="../../public/img/lr/Yzm.png" alt="">
					</div>
				</div>
				<div class="nextstep">
					<span>立即注册</span>
				</div>
				<div class="registtip">
					<router-link to="/login" class="login" >立即登录</router-link>
					<a class="getpas" >找回密码</a>
				</div>
			</div>
			<div class="guang">
				<img src="../../public/img/lr/700263.jpg" alt="">
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
	.guang img {
	    display: inline-block;
	    width: 100%;
	    height: 100%;
	}
	.guang {
	    margin-top: .3rem;
	}
	.resform .registtip .getpas {
	    float: right;
	}
	.resform .registtip .login {
	    float: left;
	}
	.resform .registtip a {
	    font-size: 0.26rem;
	    color: #666;
	}
	.resform .registtip {
	    font-size: 0.26rem;
	    color: #666;
	    margin-top: 0.24rem;
	    line-height: 0.36rem;
	    overflow: hidden;
	}
	.resform .nextstep {
		width: 100%;
		margin-top: 0.5rem;
		height: 1rem;
		border-radius: 4px;
		text-align: center;
		line-height: 1rem;
		background: #666a6b;
		color: #fff;
		font-size: 0.3rem;
		cursor: pointer;
	}

	.resform .imgcodewrap .imgwrap img {
		width: 100%;
		height: 100%;
	}

	.resform .imgcodewrap .imgwrap {
		position: absolute;
		top: 0;
		right: 0;
		width: 1.8rem;
		height: 100%;
	}

	.resform .imgcodewrap {
		padding: 0 2rem 0 0;
	}

	.resform .inputwrap .inputblock {
		width: 100%;
		display: block;
		border: none;
		outline: none;
		background: #fff;
		color: #999999;
		font-size: 0.26rem;
		text-indent: 0.2rem;
		letter-spacing: 2px;
		height: 0.88rem;
		line-height: 0.88rem;
		vertical-align: middle;
	}

	.resform .telphonewrap .inputwrap {
		padding: 0 0.2rem 0 0.88rem;
	}

	.resform .inputwrap {
		cursor: pointer;
		border: 1px solid #e3e3e3;
		border-radius: 4px;
		width: 100%;
		background: #fff;
		overflow: hidden;
		position: relative;
	}

	.resform .telphonewrap .areacode {
		position: absolute;
		left: 0;
		top: 0;
		padding: 0;
		height: 100%;
		width: 0.9rem;
		background: #e3e3e3;
		color: #999999;
		font-size: 0.26rem;
		text-align: center;
		line-height: 0.9rem;
		z-index: 5;
	}

	.resform .inputitem {
		margin-top: 0.3rem;
		overflow: hidden;
		position: relative;
		border-radius: 4px;
	}

	.content .resform {
		padding: 0 0.2rem 0.2rem;
	}

	.content .bindtip {
		padding: 0.12rem 0.2rem;
		line-height: 0.4rem;
		color: #fff;
		font-size: 0.26rem;
		background: #e70b1c;
	}

	.content {
		padding-top: 0.88rem;
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
		box-shadow: 0px 0px 10px #d4d2d3;
		position: fixed;
		width: 100%;
		left: 0;
		top: 0;
		z-index: 900;
	}
</style>
