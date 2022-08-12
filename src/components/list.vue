<template>

	<section class="list">
		<router-view></router-view>
		<div class="nav">
			<van-nav-bar title="畅销榜">
				<template #left>
					<router-link to="/index">
						<van-icon name="arrow-left" size="22" />
					</router-link>
				</template>
				<template #right>
					<van-icon name="ellipsis" size="22" />
				</template>
			</van-nav-bar>
		</div>
		<div class="pagewrap">
			<div class="hotnavwrap">
				<div class="hotfixnav">
					<div class="hotnavrela">
						<div class="hotnav">
							<ul>
								<li><span>近24小时</span></li>
								<li><span>总榜</span></li>
								<li><span>折扣区间</span></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="card">
				<ul>
					<li v-for="(da,index) in card" :key="index">
						<van-card :price="da.prc" :origin-price="da.oprc" :desc="da.desc" :title="da.tit" :thumb="da.thumb">
							<template #tags>
								<van-img><img :src="da.full" alt="" style="width: 0.2rem;height: 0.2rem;" ></van-img>
								<van-img><img :src="da.full" alt="" style="width: 0.2rem;height: 0.2rem;" ></van-img>
								<van-img><img :src="da.full" alt="" style="width: 0.2rem;height: 0.2rem;" ></van-img>
								<van-img><img :src="da.full" alt="" style="width: 0.2rem;height: 0.2rem;" ></van-img>
								<van-img><img :src="da.full" alt="" style="width: 0.2rem;height: 0.2rem;" ></van-img>
								<b style="font-size: 0.2rem;margin-left: 0.1rem;color: #ff511c;" >{{da.vb}}</b>
							</template>
							<template #footer>
								<van-img><img :src="da.car" alt="" style="width: 0.3rem;height: 0.3rem;margin-right: 0.1rem;"  ></van-img>
								<van-img><img :src="da.xin" alt="" style="width: 0.3rem;height: 0.3rem;" ></van-img>
							</template>
						</van-card>
					</li>
				</ul>
				<!-- <img src="../../public/img/list/s7890033.jpg" alt=""> -->
			</div>
		</div>

		

	</section>
</template>

<script>
	export default {
		data(){
			return {
				card:[
					{
						thumb:'img/list/s8226041.jpg',
						tit:'到山中去',
						desc:'丰子恺',
						full:'img/list/full.png',
						// half:'img/list/halfstart.png',
						vb:'26条评论',
						prc:'24.7',
						oprc:'45.0',
						car:'img/list/listcar.png',
						xin:'img/list/listcollect.png'
					},
					{
						thumb:'img/list/s8898797.jpg',
						tit:'中图网水墨画绢面折扇（随机发货一种）（特惠品）',
						desc:'中图网',
						full:'img/list/full.png',
						// half:'img/list/halfstart.png',
						vb:'26条评论',
						prc:'24.7',
						oprc:'45.0',
						car:'img/list/listcar.png',
						xin:'img/list/listcollect.png'
					},
					{
						thumb:'img/list/s7845508.jpg',
						tit:'湘行散记',
						desc:'沈从文',
						full:'img/list/full.png',
						// half:'img/list/halfstart.png',
						vb:'26条评论',
						prc:'24.7',
						oprc:'45.0',
						car:'img/list/listcar.png',
						xin:'img/list/listcollect.png'
					},
					{
						thumb:'img/list/s7844054.jpg',
						tit:'把日子过得有趣',
						desc:'老舍',
						full:'img/list/full.png',
						// half:'img/list/halfstart.png',
						vb:'26条评论',
						prc:'24.7',
						oprc:'45.0',
						car:'img/list/listcar.png',
						xin:'img/list/listcollect.png'
					},
					{
						thumb:'img/list/s8160923.jpg',
						tit:'人间失格',
						desc:'中图网',
						full:'img/list/full.png',
						// half:'img/list/halfstart.png',
						vb:'26条评论',
						prc:'24.7',
						oprc:'45.0',
						car:'img/list/listcar.png',
						xin:'img/list/listcollect.png'
					},
					{
						thumb:'img/list/s7886767.jpg',
						tit:'人生就是欢声和泪盈',
						desc:'陈忠实',
						full:'img/list/full.png',
						// half:'img/list/halfstart.png',
						vb:'26条评论',
						prc:'24.7',
						oprc:'45.0',
						car:'img/list/listcar.png',
						xin:'img/list/listcollect.png'
					},
					{
						thumb:'img/list/s7890033.jpg',
						tit:'湘女潇潇',
						desc:'沈从文',
						full:'img/list/full.png',
						// half:'img/list/halfstart.png',
						vb:'26条评论',
						prc:'24.7',
						oprc:'45.0',
						car:'img/list/listcar.png',
						xin:'img/list/listcollect.png'
					}
					
				]
			}
		}
		
	}
</script>

<style>
	dd,
	dl,
	dt,
	li,
	ol,
	ul {
		list-style: none;
	}

	b,
	em,
	i,
	strong {
		font-style: normal;
		font-weight: 400;
	}
</style>
<style scoped>
	.pagewrap .card ul li{
		border-bottom: 0.02rem solid #c25e5e;
	}
	.pagewrap .card {
		margin-top: 0.02rem;
	}

	.pagewrap .hotnavwrap ul li span {
		display: block;
		margin: 0 0.15rem;
		height: 0.52rem;
		border-radius: 0.52rem;
		line-height: 0.52rem;
		color: #333333;
		background: #f3f3f3;
		font-size: 0.22rem;
	}

	.pagewrap .hotnavwrap ul li {
		float: left;
		width: 32%;
		text-align: center;
		margin: 0.16rem 0 0;
		height: 0.68rem;
		border: 0.02rem solid #fff;
		border-bottom: none;
		border-radius: 0.15rem 0.15rem 0 0;
		cursor: pointer;
	}

	.pagewrap .hotnavwrap ul {
		overflow: hidden;
		padding: 0 0.2rem;
	}

	.pagewrap .hotnavwrap .hotnav {
		position: relative;
		z-index: 100;
	}

	.pagewrap .hotnavwrap .hotnavrela {
		position: relative;
		background: #fff;
	}

	.pagewrap .hotnavwrap {
		position: relative;
		z-index: 900;
	}
</style>
