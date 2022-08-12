<template>
	<main class="detail">
		<router-view></router-view>
		<div class="header">
			<div class="headinner">
				<div class="rebtn">
					<a @click="hui"></a>
				</div>
				<div class="detnav">
					<ul>
						<li class="current">
							<a>
								图书
								<span></span>
							</a>
						</li>
						<li>
							<a>
								评论
								<span></span>
							</a>
						</li>
						<li>
							<a>
								详情
								<span></span>
							</a>
						</li>
					</ul>
				</div>
				<div class="sharebtn" style="display: block;"></div>
				<div class="shortcut"></div>
			</div>
		</div>
		<div class="content">
			<div class="bookpro">
				<div class="bookcover">
					<div class="bookpic">
						<img src="../../public/img/detail/6947397.jpg" alt="">
						<div class="tejiaicon"></div>
					</div>
					<div class="rederScore">
						<div class="rederScoreInner"><span> 读者评分<br>5分</span> </div>
					</div>
				</div>
				<div class="bookInfor">
					<h1>语自在</h1>
					<p>阿来的散文带读者走进充满魅力的古老时代，又带读者面对充满机械和科技味道却丧失了自然的现在。</p>
				</div>
				<div class="bookPrice">
					<div class="salePrice" id="divPrice">
						<span class="urerLeave">1星价</span>
						<span class="price ">¥13.1</span>
						<span class="discount" style="">(3.3折)</span>
					</div>
					<div class="otherPrice">
						<span class="startPrice">
							2星价￥13.1
						</span>
						<span class="originalPrice">
							定价￥39.8
						</span>
					</div>
				</div>
				<div class="activeList">
					<a>读者节|88元10本，领券再减10元|包邮</a>
				</div>
				<div class="floorban">
					<van-swipe class="my-swipe" :autoplay="3000" indicator-color="#007aff">
						<van-swipe-item><img src="../../public/img/detail/700185wd.jpg" alt=""></van-swipe-item>
						<van-swipe-item><img src="../../public/img/detail/700185.jpg" alt=""></van-swipe-item>
						<van-swipe-item><img src="../../public/img/detail/700185xr.jpg" alt=""></van-swipe-item>
						<van-swipe-item><img src="../../public/img/detail/wd700185.jpg" alt=""></van-swipe-item>
					</van-swipe>
				</div>
				<div class="inforLInk">
					<div class="inforLinkItem author" id="lblAuthor">
						<a><strong>作者：</strong><em>阿来</em></a>
					</div>
					<div class="inforLinkItem">
						<a>出版社：重庆出版社<span class="arrowIcon"></span></a>
					</div>
					<div class="inforLinkItem">
						<a>排名：文学畅销榜 <i>26</i> 位<span class="arrowIcon"></span></a>
					</div>
					<div class="inforLinkItem">
						<a>分类：文学 &gt; 中国现当代随笔 </a><span class="arrowIcon"></span>
					</div>
				</div>
			</div>
			<div class="shiin">
				<img src="../../public/img/detail/ling.png" alt="">
			</div>
			<div class="reminder">
				<p>温馨提示：5折以下图书主要为出版社尾货，大部分为全新，个别图书品相8-9成新、切口有划线标记、光盘等附件不全</p>
			</div>
		</div>

		<div class="footer">
			<!-- <van-goods-action>
				<van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
				<van-goods-action-icon icon="cart-o" text="购物车" />
				<van-goods-action-icon icon="star-o" text="收藏" color="#ff5000" />
				<van-goods-action-button type="warning" text="加入购物车"  @click="onClickButton(shop)" />
				<van-goods-action-button type="danger" text="立即购买" @click="onClickButton(buy)" />
			</van-goods-action> -->
			<van-goods-action>
				<van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon(dp)" />
				<van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon(kf)" />
				<van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon(gwc)" />
				<van-goods-action-button type="warning" text="加入购物车" @click="onClickButton(cart)" />
				<van-goods-action-button type="danger" text="立即购买" @click="onClickButton(buy)" />
			</van-goods-action>
		</div>
	</main>
</template>

<script>
	import { Toast } from 'vant';
	import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
	  export default {
	    name: 'tabs',
	    data(){
	      return{
	      }
	    },
	    props:{
	      id:String,
	      current:String,
	      title:String,
	      imgUrl:String
	    },
	    components:{
	      [Toast.name]: Toast,
	      [GoodsAction.name]: GoodsAction,
	      [GoodsActionIcon.name]: GoodsActionIcon,
	      [GoodsActionButton.name]: GoodsActionButton
	    },
		methods: {
			hui() {
				// back():
				this.$router.back();
			},
			
		}
	}
</script>
<style>
	b,
	em,
	i,
	strong {
		font-style: normal;
		font-weight: 400;
	}
</style>

<style scoped>
	.content .reminder p {
		color: #e60000;
		font-size: 0.2rem;
		line-height: 0.3rem;
	}

	.content .reminder {
		padding: 0.15rem 0.2rem;
		background: #fff;
	}

	.content .shiin img {
		width: 100%;
	}

	.content .shiin {
		padding: 0.15rem 0;
		overflow: hidden;
		margin: 0 auto;
		list-style: none;
		font-size: 0rem;
	}

	.content .inforLInk .inforLinkItem.author,
	.content .inforLInk .inforLinkItem.author a {
		height: auto;
		line-height: normal;
	}

	.content .inforLInk .inforLinkItem a {
		display: block;
		height: 0.68rem;
		color: #333;
		font-size: 0.22rem;
		background: url("../../public/img/detail/rightarrow.png") no-repeat right;
		background-size: 0.16rem 0.28rem;
	}

	.content .inforLInk .inforLinkItem.author {
		padding: .1rem 0rem;
	}

	.content .inforLInk .inforLinkItem.author,
	.content .inforLInk .inforLinkItem.author a {
		height: auto;
		line-height: normal;
	}

	.content .inforLInk .inforLinkItem {
		border-bottom: 0.02rem solid #f3f3f3;
		height: 0.7rem;
		line-height: 0.68rem;
		position: relative;
	}

	.content .inforLInk {
		padding: 0 0.2rem;
		background: #fff;
		/* margin-top: 0.16rem; */
	}

	.content .floorban img {
		width: 100%;
	}

	.content .floorban {
		margin-top: 0.16rem;
	}

	.content .activeList a {
		float: left;
		border: 2px solid #e60000;
		color: #e60000;
		height: 0.6rem;
		line-height: 0.54rem;
		font-size: 0.22rem;
		padding: 0 0.2rem;
		margin-right: 0.2rem;
		margin-top: 0.2rem;
		border-radius: 0.05rem;
	}

	.content .activeList {
		overflow: hidden;
		padding: 0 0.2rem 0.2rem;
		background: #fff;
	}

	.content .bookPrice .otherPrice .originalPrice {
		float: left;
		color: #666666;
		font-size: 0.2rem;
		margin: 0.02rem 0 0 0;
	}

	.content .bookPrice .otherPrice .startPrice {
		float: left;
		color: #666666;
		font-size: 0.2rem;
		margin: 0.02rem 0.28rem 0 0;
	}

	.content .bookPrice .otherPrice {
		float: right;
		overflow: hidden;
		line-height: 0.4rem;
	}

	.content .bookPrice .salePrice .discount {
		font-size: 0.2rem;
		color: #333333;
		margin: 0.02rem 0 0 0.15rem;
	}

	.content .bookPrice .salePrice .price {
		font-size: 0.3rem;
		color: #e60000;
		font-weight: bold;
	}

	.content .bookPrice .salePrice .urerLeave {
		font-size: 0.2rem;
		color: #e60000;
		margin: 0rem 0.06rem 0 0;
	}

	.content .bookPrice .salePrice span {
		float: left;
	}

	.content .bookPrice .salePrice {
		float: left;
		overflow: hidden;
		line-height: 0.4rem;
	}

	.content .bookPrice {
		clear: both;
		overflow: hidden;
		background: #fff;
		padding: 0.15rem 0.2rem 0;
	}

	.content .bookInfor p {
		margin-top: 0.1rem;
		color: #333333;
		font-size: 0.2rem;
		line-height: 0.3rem;
	}

	.content .bookInfor h1 {
		font-size: 0.28rem;
		line-height: 0.38rem;
		color: #000;
	}

	.content .bookInfor {
		padding: 0.25rem 0.2rem .05rem;
		background: #fff;
	}

	.content .bookcover .rederScoreInner span {
		font-size: 0.2rem;
		color: #ff551e;
		display: block;
	}

	.content .bookcover .rederScoreInner {
		display: table-cell;
		vertical-align: middle;
		text-align: center;
		line-height: 0.3rem;
	}

	.content .bookcover .rederScore {
		position: absolute;
		right: 0;
		bottom: 0.5rem;
		height: 0.68rem;
		border: 2px solid #ff551e;
		border-right: none;
		border-radius: 0.64rem 0 0 0.64rem;
		display: table;
		padding: 0 0.2rem;
	}

	.content .bookcover .bookpic .tejiaicon {
		position: absolute;
		background: url("../../public/img/detail/tejiaIcon.png") no-repeat;
		background-size: cover;
		height: 0.69rem;
		width: 0.69rem;
		top: 0;
		right: 0;
	}

	.content .bookcover .bookpic img {
		max-width: 100%;
		height: 3.5rem;
	}

	.content .bookcover .bookpic {
		border: 1px solid #fef0f0;
		text-align: center;
		width: 3.52rem;
		margin: auto;
		position: relative;
	}

	.content .bookcover {
		position: relative;
		padding: 0.3rem 0;
		background: #fff;
	}

	.content {
		padding-top: 0.88rem;
		margin-bottom: 50px;
	}

	.header .headinner .shortcut {
		position: absolute;
		width: 0.75rem;
		height: 0.88rem;
		right: 0;
		top: 0;
		background: url("../../public/img/detail/shortcut.png") no-repeat center;
		background-size: 0.35rem 0.06rem;
		cursor: pointer;
	}

	.header .headinner .sharebtn {
		position: absolute;
		width: 0.85rem;
		height: 0.88rem;
		right: 0.75rem;
		top: 0;
		background: url("../../public/img/detail/sharebtn.png") no-repeat center;
		background-size: 0.34rem 0.32rem;
		cursor: pointer;
	}

	.header .headinner .detnav ul li.current span {
		background: #e60000;
	}

	.header .headinner .detnav ul li span {
		position: absolute;
		height: 0.06rem;
		background: #fff;
		bottom: 0;
		width: 0.5rem;
		left: 50%;
		margin-left: -0.25rem;
	}

	.header .headinner .detnav ul li.current a {
		color: #e60000;
	}

	.header .headinner .detnav ul li a {
		font-size: 0.24rem;
		color: #333333;
		display: block;
		height: 0.88rem;
		position: relative;
	}

	.header .headinner .detnav ul li {
		float: left;
		width: 30%;
		height: 0.88rem;
		text-align: center;
		line-height: 0.88rem;
	}

	.header .headinner .detnav ul {
		overflow: hidden;
		padding: 0 0.4rem;
	}

	.header .headinner .rebtn a {
		display: block;
		height: 0.88rem;
		width: 0.6rem;
		background: url("../../public/img/detail/returnbtnicon.png") no-repeat center;
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
		padding: 0 1.45rem 0 0.4rem;
	}

	.header {
		position: fixed;
		width: 100%;
		left: 0;
		top: 0;
		background: #fff;
		box-shadow: 0px 0px 10px #d4d2d3;
		z-index: 900;
		background: #fff;
		box-shadow: 0px 0px 10px #d4d2d3;
	}

	* {
		margin: 0px;
		padding: 0px;
		list-style: none;
	}
</style>
