<template>
	<main class="login">
		<div class="header">
			<div class="headinner">
				<div class="rebtn">
					<a @click="hui" ></a>
				</div>
				<div class="headlabel">
					<span>登录</span>
				</div>
				<div class="shcut"></div>
			</div>
		</div>
		<div class="content">
			<div class="loginform">
				<div class="inout username">
					<span class="label"></span>
					<div class="inputwrap">
						<input type="text" class="inputblock username" id="username" name="username" autocomplete="off"
							placeholder="用户名/邮箱/已验证手机">
					</div>
				</div>
				<div class="inout userps">
					<span class="label"></span>
					<div class="inputwrap">
						<input type="password" class="inputblock userpas" id="userpas" name="userpas" autocomplete="off"
							placeholder="请输入密码">
						<span class="isps" id="isps"></span>
					</div>
				</div>
				<div class="nextstep">
					<span>登录</span>
				</div>
				<div class="loginlink">
					<a class="pass" >忘记密码</a>
					<router-link to="/register" class="regis" >新用户注册</router-link>
				</div>
			</div>
			<div class="thirdlog">
				<div class="thirdtit">
					<em>第三方账号登录</em>
				</div>
				<ul class="three">
					<li>
						<a>
							<img src="../../public/img/lr/newqq.png" alt="">
							<b>QQ登录</b>
						</a>
					</li>
					<li>
						<a>
							<img src="../../public/img/lr/newweibo.png" alt="">
							<b>微博登录</b>
						</a>
					</li>
					<li>
						<a>
							<img src="../../public/img/lr/baiduloginicon.png">
							<b>百度登录</b>
						</a>
					</li>
				</ul>
			</div>
			<div class="explain">
				<a>如何绑定微信和中图网账户?</a>
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
	
	.explain {
	    color: #666;
	    font-size: 0.26rem;
	    text-align: center;
	    margin-top: 1rem;
	    padding: 0.2rem 0;
	}
	.thirdlog ul li b {
	    font-size: 0.24rem;
	    color: #666;
	    display: block;
	    line-height: 0.4rem;
	    margin-top: 0.08rem;
	}
	.thirdlog ul li img {
	    width: 1rem;
	    display: block;
	    margin: auto;
	}
	.thirdlog ul li a{
	   display: block;
	}
	.thirdlog ul li {
	    float: left;
		width: 33%;
	    text-align: center;
	}
	.thirdlog ul {
	    overflow: hidden;
	    width: 80%;
	    margin: 0.5rem auto 0;
	}
	.thirdlog .thirdtit em {
	    background: #f6f4f5;
	    color: #999999;
	    font-size: 0.26rem;
	    height: 0.4rem;
	    display: block;
	    width: 40%;
	    margin: auto;
	    line-height: 0.4rem;
	    background: #f6f4f5;
	}
	.thirdlog .thirdtit {
	    width: 80%;
	    margin: auto;
	    text-align: center;
	    background: url("../../public/img/lr/thirdlogintitleline.png") no-repeat center center;
	    background-size: 100% 2px;
	}
	.thirdlog {
	    margin-top: 0.2rem;
	}
	.loginform .loginlink .regis {
	    float: right;
	}
	.loginform .loginlink .pass {
	    float: left;
	}
	.loginform .loginlink a {
	    font-size: 0.26rem;
	    color: #666;
		text-decoration: none;
		margin-left: 0.08rem;
	}
	.loginform .loginlink {
	    font-size: 0.26rem;
	    color: #666;
	    margin-top: 0.24rem;
	    line-height: 0.36rem;
	    overflow: hidden;
	}
	.loginform .nextstep {
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

	.loginform .userps .inputwrap {
		padding: 0 1.16rem 0 0.9rem;
	}

	.loginform .userps .inputwrap .isps {
		z-index: 4;
		position: absolute;
		top: 50%;
		right: 2.3rem;
		margin-top: -0.14rem;
		height: 0.28rem;
		width: 0.36rem;
		cursor: pointer;
		background: url("../../public/img/lr/hidePassWord.png") no-repeat center;
		background-size: 0.36rem 0.28rem;
	}

	.loginform .userps .label {
		background: #e3e3e3 url("../../public/img/lr/nepass.png") no-repeat center;
		background-size: 0.30rem 0.36rem;
	}

	.loginform .inputwrap .inputblock {
		width: 100%;
		display: block;
		border: none;
		outline: none;
		background: #fff;
		color: #999999;
		font-size: 0.26rem;
		text-indent: 0.2rem;
		height: 0.88rem;
		line-height: 0.88rem;
		vertical-align: middle;
	}

	.loginform .username .inputwrap {
		padding: 0 0.5rem 0 0.9rem;
	}

	.loginform .inputwrap {
		cursor: pointer;
		border: 1px solid #e3e3e3;
		border-radius: 4px;
		width: 100%;
		background: #fff;
		overflow: hidden;
		position: relative;
	}

	.loginform .username .label {
		background: #e3e3e3 url("../../public/img/lr/newuser.png") no-repeat center;
		background-size: 0.32rem 0.36rem;
	}

	.loginform .inout .label {
		position: absolute;
		left: 0;
		top: 0;
		padding: 0;
		height: 100%;
		width: 0.9rem;
		color: #999999;
		font-size: 0.26rem;
		text-align: center;
		line-height: 0.9rem;
		z-index: 5;
	}

	.loginform .inout {
		margin-top: 0.3rem;
		overflow: hidden;
		position: relative;
		border-radius: 4px;
	}

	.loginform {
		padding: 0 0.2rem 0 0.2rem;
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
