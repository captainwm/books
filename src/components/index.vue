<template>
	<div class="index">
		<router-view></router-view>
		<div class="searchbar">
			<div class="searchinner">
				<h1>
					<img src="../../public/img/all/logo.png" alt="">
				</h1>
				<div class="searchwrap">
					<span>一国两制</span>
				</div>
				<div class="searchbtn">
					搜索
				</div>
			</div>
		</div>
		<div class="container">
			<van-swipe class="my-swipe" :autoplay="3000" indicator-color="red">
				<van-swipe-item><img src="../../public/img/index/700263.jpg" alt="" srcset=""></van-swipe-item>
				<van-swipe-item><img src="../../public/img/index/700263 (1).jpg" alt="" srcset=""></van-swipe-item>
				<van-swipe-item><img src="../../public/img/index/700263 (2).jpg" alt="" srcset=""></van-swipe-item>
				<van-swipe-item><img src="../../public/img/index/m19357_ad990.jpg" alt="" srcset=""></van-swipe-item>
				<van-swipe-item><img src="../../public/img/index/m19362_ad990.jpg" alt="" srcset=""></van-swipe-item>
				<van-swipe-item><img src="../../public/img/index/m16180_ad990.jpg" alt="" srcset=""></van-swipe-item>
				<van-swipe-item><img src="../../public/img/index/m5131_ad990.jpg" alt="" srcset=""></van-swipe-item>
			</van-swipe>
		</div>
		<div class="nav">
			
			<ul class="indexnav">
				<li>
					<router-link to="/list" >
						<img src="../../public/img/index/changxiaobang.png" alt="">
						<b>畅销榜</b>
					</router-link>
				</li>
				<li v-for="(item, index) in listnav" :key="index" >
					<a href="">
						<img :src="item.src" alt="">
						<b>{{item.title}}</b>
					</a>
				</li>
			</ul>
		</div>

		<div class="notice">
			<van-notice-bar left-icon="volume-o" :scrollable="false">
				<van-swipe vertical class="notice-swipe" :autoplay="3000" :show-indicators="false">
					<van-swipe-item>新用户注册即送10元 ！</van-swipe-item>
					<van-swipe-item>818读者节|每满100减50，满108送绢面折扇</van-swipe-item>
				</van-swipe>
			</van-notice-bar>
		</div>
		<div class="floorbanner">
			<van-swipe class="my-swipe" :autoplay="3000" indicator-color="red">
				<van-swipe-item><img src="../../public/img/index/700185.jpg" alt=""></van-swipe-item>
				<van-swipe-item><img src="../../public/img/index/700185 (4).jpg" alt=""></van-swipe-item>
				<van-swipe-item><img src="../../public/img/index/700185hb.jpg" alt=""></van-swipe-item>
				<van-swipe-item><img src="../../public/img/index/700185 (2).jpg" alt=""></van-swipe-item>
				<van-swipe-item><img src="../../public/img/index/700185 (3).jpg" alt=""></van-swipe-item>
			</van-swipe>
		</div>
		<div class="recommend">
			<div class="titlere">主打推荐</div>
			<div class="recombox">
				<ul>
					<li>
						<router-link to="/detail" >
							<div class="bookbox">
								<div class="cover">
									<img src="../../public/img/index/s6947397.jpg" alt="">
								</div>
								<p class="name">语自在</p>
								<p class="action"><em>每满100减50</em></p>
								<div class="pricebox">
									<span class="price">￥13.1</span>
									<span class="original">￥39.8</span>
								</div>
							</div>
						</router-link>
					</li>
					<li v-for="(item, index) in recombox" :key="index" >
						<a>
							<div class="bookbox">
								<div class="cover">
									<img :src="item.src" alt="">
								</div>
								<p class="name">{{item.name}}</p>
								<p class="action"><em>{{item.action}}</em></p>
								<div class="pricebox">
									<span class="price">{{item.price}}</span>
									<span class="original">{{item.original}}</span>
								</div>
							</div>
						</a>
					</li>
				</ul>
			</div>
		</div>

		<div class="contacen">
			<van-swipe class="my-swipe" :autoplay="20000" indicator-color="white" :show-indicators="false">
				<van-swipe-item><img src="../../public/img/index/700185xr.jpg" alt=""></van-swipe-item>
				<van-swipe-item><img src="../../public/img/index/700185 (5).jpg" alt=""></van-swipe-item>
				<van-swipe-item><img src="../../public/img/index/700185xs.jpg" alt=""></van-swipe-item>
				<van-swipe-item><img src="../../public/img/index/sj700185.jpg" alt=""></van-swipe-item>
			</van-swipe>
		</div>

		<div class="tstbox">
			<div class="titlere">
				<h2><img src="../../public/img/index/taoshutuantitle.png" alt=""></h2>
				<a href="">
					更多
					<span></span>
				</a>
			</div>
			<div class="titlist">
				<ul>
					<li>
						<a href="">
							<div class="bookwrap">
								<div class="cover">
									<img src="../../public/img/index/8264988ct01.jpg" alt="">
								</div>
								<div class="name">
									<p>一部搜集完备、考订准确的《周作人集外文》精装全3册，著名学者陈子善、藏书家赵国忠编校，收入近年来新发现的周作人佚文，增补文章百余篇，展现更为丰满立体的周作人
									</p>
									<span class="iocTitle">团</span>
								</div>
								<div class="pricewrap">
									<div class="tprice">
										团购价：
										<span>¥99.0</span>
									</div>
									<div class="discountwrap">
										<span class="original">原价¥268.0 </span>
										<span class="discount">3.7折</span>
									</div>
								</div>
							</div>
						</a>
					</li>
					<li>
						<a href="">
							<div class="bookwrap">
								<div class="cover">
									<img src="../../public/img/index/8895016ct01.jpg" alt="">
								</div>
								<div class="name">
									<p>连环画《西游记》盒装版全22册，老一辈画坛名家钱笑呆、徐燕孙、刘凌沧、郑家声、刘汉宗、任率英、胡若佛、金协中等人精心绘制。原汁原味小人书，轻巧便携小开本。</p>
									<span class="iocTitle">团</span>
								</div>
								<div class="pricewrap">
									<div class="tprice">
										团购价：
										<span>¥58.0</span>
									</div>
									<div class="discountwrap">
										<span class="original">原价¥128.0 </span>
										<span class="discount">4.5折</span>
									</div>
								</div>
							</div>
						</a>
					</li>
					<li>
						<a href="">
							<div class="bookwrap">
								<div class="cover">
									<img src="../../public/img/index/8160608ct01.jpg" alt="">
								</div>
								<div class="name">
									<p>《神话与魔法 :
										约翰·豪的绘画艺术》，精装全彩，收录《霍比特人》《魔戒》等奇幻主题逾250幅素描、彩画。跟随奇幻插画大师、《指环王》艺术指导、17项奥斯卡奖幕后功臣约翰·豪，踏上奇幻艺术之旅。
									</p>
									<span class="iocTitle">团</span>
								</div>
								<div class="pricewrap">
									<div class="tprice">
										团购价：
										<span>¥42.0</span>
									</div>
									<div class="discountwrap">
										<span class="original">原价¥99.0 </span>
										<span class="discount">4.2折</span>
									</div>
								</div>
							</div>
						</a>
					</li>
					<li>
						<a href="">
							<div class="bookwrap">
								<div class="cover">
									<img src="../../public/img/index/8901426ct01.jpg" alt="">
								</div>
								<div class="name">
									<p>“神话学文库”第二辑19种20册，著名学者叶舒宪主编，荟萃国际著名神话学研究著述，以及国内神话学研究的优秀成果，作者囊括麦肯齐、伊利亚德、陈建宪等学界名家。
									</p>
									<span class="iocTitle">团</span>
								</div>
								<div class="pricewrap">
									<div class="tprice">
										团购价：
										<span>¥550.0</span>
									</div>
									<div class="discountwrap">
										<span class="original">原价¥1764.0 </span>
										<span class="discount">3.1折</span>
									</div>
								</div>
							</div>
						</a>
					</li>
				</ul>
			</div>
		</div>

		<div class="hottwrap">
			<div class="hotthead">
				<h2>
					<img src="../../public/img/index/userhottocktitlle.png" alt="">
				</h2>
			</div>
			<div class="hottlist">
				<div class="hottmain">
					<a href="">
						<div class="bookwrap">
							<div class="cover">
								<img src="../../public/img/index/s8251872.jpg" alt="">
							</div>
							<p class="name">大话西方艺术史</p>
							<div class="startwrap">
								<span class="full"></span>
								<span class="full"></span>
								<span class="full"></span>
								<span class="full"></span>
								<span class="half"></span>
								<b>26条评论</b>
							</div>
							<div class="pricewrap">
								<span class="price">¥42.9</span>
								<span class="original">¥78.0</span>
							</div>
							<div class="review">
								<span>[好评]</span>
								本书用浅白风趣的语言和逻辑清晰的脉络，梳理了30000多年西方艺术史的精髓。从艺术的起源、西方文明的源头开始，经过文艺复兴、巴洛克、新古典主义，再到浪漫派、印象派乃至20世纪之后的当代艺术，经由意公子轻松有趣的解读逐一串连，配合书中丰富精美的图片以及关键词索引附录，可让你零压力掌握艺术史知识框架，短时间提升审美品位！
							</div>
						</div>
					</a>
				</div>
				<ul>
					<li>
						<a href="">
							<div class="bookwrap">
								<div class="cover">
									<img src="../../public/img/index/s8112555.jpg" alt="">
								</div>
								<p class="name">冬将军来的夏天</p>
								<div class="startwrap">
									<span class="full"></span>
									<span class="full"></span>
									<span class="full"></span>
									<span class="full"></span>
									<span class="half"></span>
									<b>15条评论</b>
								</div>
								<div class="pricewrap">
									<span class="price">¥24.0</span>
									<span class="original">¥45.0</span>
								</div>
								<div class="review"><span>[好评]</span>“真的超级好看！！看了简介以为很恐怖”</div>
							</div>
						</a>
					</li>
					<li>
						<a href="">
							<div class="bookwrap">
								<div class="cover">
									<img src="../../public/img/index/s7941793.jpg" alt="">
								</div>
								<p class="name">种玫瑰的男人</p>
								<div class="startwrap">
									<span class="full"></span>
									<span class="full"></span>
									<span class="full"></span>
									<span class="full"></span>
									<span class="full"></span>
									<b>17条评论</b>
								</div>
								<div class="pricewrap">
									<span class="price">¥20.2</span>
									<span class="original">¥42.0</span>
								</div>
								<div class="review"><span>[好评]</span>“真的超级好看！！看了简介以为很恐怖”</div>
							</div>
						</a>
					</li>
				</ul>
			</div>
			<div class="fivestartink">
				<a href="">查看五星书>></a>
			</div>
		</div>

		<div class="recommwrap">
			<div class="recommtit">
				<h2>
					<img src="../../public/img/index/recomandtitle.png" alt="">
				</h2>
			</div>
			<div class="recommlist">
				<div class="relistleft">
					<a href=""><img src="../../public/img/index/305417lh.jpg" alt=""></a>
				</div>
				<div class="relistright">
					<a href=""><img src="../../public/img/index/305192.jpg" alt=""></a>
					<a href=""><img src="../../public/img/index/wc305212.jpg" alt=""></a>
				</div>
			</div>
		</div>
		<div class="newbookwrap">
			<div class="newbooktit">
				<h2>限时折上折</h2>
				<a href="">
					更多
					<span></span>
				</a>
			</div>
			<div class="newbooklist">
				<ul>
					<li>
						<a href="">
							<div class="bookwrap">
								<div class="cover">
									<img src="../../public/img/index/s6398471.jpg" alt="">
								</div>
								<p class="name">中篇-虚构-故事在黑暗中疯长-重建中文之美</p>
								<div class="pricewrap">
									<span class="price">
										特惠价
										<em>¥10.3</em>
									</span>
									<span class="original">3.3折</span>
								</div>
							</div>
						</a>
					</li>
					<li>
						<a href="">
							<div class="bookwrap">
								<div class="cover">
									<img src="../../public/img/index/s2832156.jpg" alt="">
								</div>
								<p class="name">近代西学与中国文学(修订本)</p>
								<div class="pricewrap">
									<span class="price">
										特惠价
										<em>¥11.1</em>
									</span>
									<span class="original">2.8折</span>
								</div>
							</div>
						</a>
					</li>
					<li>
						<a href="">
							<div class="bookwrap">
								<div class="cover">
									<img src="../../public/img/index/s7280424.jpg" alt="">
								</div>
								<p class="name">新民说</p>
								<div class="pricewrap">
									<span class="price">
										特惠价
										<em>¥9.5</em>
									</span>
									<span class="original">2.8折</span>
								</div>
							</div>
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="expresswrap">
			<div class="expresstit">
				<h2>
					<img src="../../public/img/index/newtitle.png" alt="">
				</h2>
			</div>
			<div class="exprelist">
				<ul>
					<li>
						<a href="">
							<div class="bookwrap">
								<div class="cover">
									<img src="../../public/img/index/s8548446.jpg" alt="">
								</div>
								<p class="name">偏见</p>
								<div class="pricewrap">
									<span class="price">¥22.4</span>
									<span class="original">¥56.0</span>
								</div>
							</div>
						</a>
					</li>
					<li>
						<a href="">
							<div class="bookwrap">
								<div class="cover">
									<img src="../../public/img/index/s8461068.jpg" alt="">
								</div>
								<p class="name">了不起的哲学家/热血西方哲学入门书！轻松有趣</p>
								<div class="pricewrap">
									<span class="price">¥20.8</span>
									<span class="original">¥52.0</span>
								</div>
							</div>
						</a>
					</li>
					<li>
						<a href="">
							<div class="bookwrap">
								<div class="cover">
									<img src="../../public/img/index/s8654493.jpg" alt="">
								</div>
								<p class="name">他山之石/收录周氏兄弟早期关注的外国小说</p>
								<div class="pricewrap">
									<span class="price">¥60.0</span>
									<span class="original">¥69.0</span>
								</div>
							</div>
						</a>
					</li>
				</ul>
			</div>
		</div>
		<!-- //畅销榜 -->
		<div class="sellhotwrap">
			<div class="sellhottit">
				<img src="../../public/img/index/changxiaobangtitle.png" alt="">
			</div>
			<div class="sellbig">
				<div class="sellhotnav">
						<van-tabs v-model="active">
							<van-tab title="总榜">
								<div class="sellhotbook">
									<div class="sellhotbooklist">
										<ul>
											<li>
												<a href="">
													<div class="bookwrap">
														<div class="cover">
															<img src="../../public/img/index/s7844054.jpg" alt="">
														</div>
														<p class="name">把日子过得有趣</p>
														<div class="pricewrap">
															<span class="price">¥23.5</span>
															<span class="original">¥42.0</span>
														</div>
													</div>
												</a>
											</li>
											<li>
												<a href="">
													<div class="bookwrap">
														<div class="cover">
															<img src="../../public/img/index/s7844054.jpg" alt="">
														</div>
														<p class="name">把日子过得有趣</p>
														<div class="pricewrap">
															<span class="price">¥23.5</span>
															<span class="original">¥42.0</span>
														</div>
													</div>
												</a>
											</li>
											<li>
												<a href="">
													<div class="bookwrap">
														<div class="cover">
															<img src="../../public/img/index/s7844054.jpg" alt="">
														</div>
														<p class="name">把日子过得有趣</p>
														<div class="pricewrap">
															<span class="price">¥23.5</span>
															<span class="original">¥42.0</span>
														</div>
													</div>
												</a>
											</li>
											<li>
												<a href="">
													<div class="bookwrap">
														<div class="cover">
															<img src="../../public/img/index/s7844054.jpg" alt="">
														</div>
														<p class="name">把日子过得有趣</p>
														<div class="pricewrap">
															<span class="price">¥23.5</span>
															<span class="original">¥42.0</span>
														</div>
													</div>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</van-tab>
							<van-tab title="文学">
								<div class="sellhotbook">
									<div class="sellhotbooklist">
										<ul>
											<li>
												<a href="">
													<div class="bookwrap">
														<div class="cover">
															<img src="../../public/img/index/s8226041.jpg" alt="">
														</div>
														<p class="name">到山中去</p>
														<div class="pricewrap">
															<span class="price">¥13.2</span>
															<span class="original">¥30.0</span>
														</div>
													</div>
												</a>
											</li>
											<li>
												<a href="">
													<div class="bookwrap">
														<div class="cover">
															<img src="../../public/img/index/s8226041.jpg" alt="">
														</div>
														<p class="name">到山中去</p>
														<div class="pricewrap">
															<span class="price">¥13.2</span>
															<span class="original">¥30.0</span>
														</div>
													</div>
												</a>
											</li>
											<li>
												<a href="">
													<div class="bookwrap">
														<div class="cover">
															<img src="../../public/img/index/s8226041.jpg" alt="">
														</div>
														<p class="name">到山中去</p>
														<div class="pricewrap">
															<span class="price">¥13.2</span>
															<span class="original">¥30.0</span>
														</div>
													</div>
												</a>
											</li>
											<li>
												<a href="">
													<div class="bookwrap">
														<div class="cover">
															<img src="../../public/img/index/s8226041.jpg" alt="">
														</div>
														<p class="name">到山中去</p>
														<div class="pricewrap">
															<span class="price">¥13.2</span>
															<span class="original">¥30.0</span>
														</div>
													</div>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</van-tab>
							<van-tab title="社科">
								<div class="sellhotbook">
									<div class="sellhotbooklist">
										<ul>
											<li>
												<a href="">
													<div class="bookwrap">
														<div class="cover">
															<img src="../../public/img/index/s7908452.jpg" alt="">
														</div>
														<p class="name">乡土中国-彩色插画版</p>
														<div class="pricewrap">
															<span class="price">¥27.9</span>
															<span class="original">¥37.8</span>
														</div>
													</div>
												</a>
											</li>
											<li>
												<a href="">
													<div class="bookwrap">
														<div class="cover">
															<img src="../../public/img/index/s7908452.jpg" alt="">
														</div>
														<p class="name">乡土中国-彩色插画版</p>
														<div class="pricewrap">
															<span class="price">¥27.9</span>
															<span class="original">¥37.8</span>
														</div>
													</div>
												</a>
											</li>
											<li>
												<a href="">
													<div class="bookwrap">
														<div class="cover">
															<img src="../../public/img/index/s7908452.jpg" alt="">
														</div>
														<p class="name">乡土中国-彩色插画版</p>
														<div class="pricewrap">
															<span class="price">¥27.9</span>
															<span class="original">¥37.8</span>
														</div>
													</div>
												</a>
											</li>
											<li>
												<a href="">
													<div class="bookwrap">
														<div class="cover">
															<img src="../../public/img/index/s7908452.jpg" alt="">
														</div>
														<p class="name">乡土中国-彩色插画版</p>
														<div class="pricewrap">
															<span class="price">¥27.9</span>
															<span class="original">¥37.8</span>
														</div>
													</div>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</van-tab>
							<van-tab title="少儿">
								<div class="sellhotbook">
									<div class="sellhotbooklist">
										<ul>
											<li>
												<a href="">
													<div class="bookwrap">
														<div class="cover">
															<img src="../../public/img/index/s6778122.jpg" alt="">
														</div>
														<p class="name">瓦尔登湖-世界文学名著典藏-全译本</p>
														<div class="pricewrap">
															<span class="price">¥10.0</span>
															<span class="original">¥25.0</span>
														</div>
													</div>
												</a>
											</li>
											<li>
												<a href="">
													<div class="bookwrap">
														<div class="cover">
															<img src="../../public/img/index/s6778122.jpg" alt="">
														</div>
														<p class="name">瓦尔登湖-世界文学名著典藏-全译本</p>
														<div class="pricewrap">
															<span class="price">¥10.0</span>
															<span class="original">¥25.0</span>
														</div>
													</div>
												</a>
											</li>
											<li>
												<a href="">
													<div class="bookwrap">
														<div class="cover">
															<img src="../../public/img/index/s6778122.jpg" alt="">
														</div>
														<p class="name">瓦尔登湖-世界文学名著典藏-全译本</p>
														<div class="pricewrap">
															<span class="price">¥10.0</span>
															<span class="original">¥25.0</span>
														</div>
													</div>
												</a>
											</li>
											<li>
												<a href="">
													<div class="bookwrap">
														<div class="cover">
															<img src="../../public/img/index/s6778122.jpg" alt="">
														</div>
														<p class="name">瓦尔登湖-世界文学名著典藏-全译本</p>
														<div class="pricewrap">
															<span class="price">¥10.0</span>
															<span class="original">¥25.0</span>
														</div>
													</div>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</van-tab>
							<van-tab title="艺术">
								<div class="sellhotbook">
									<div class="sellhotbooklist">
										<ul>
											<li>
												<a href="">
													<div class="bookwrap">
														<div class="cover">
															<img src="../../public/img/index/s7538855.jpg" alt="">
														</div>
														<p class="name">看见美好:文物与人物</p>
														<div class="pricewrap">
															<span class="price">¥28.9</span>
															<span class="original">¥49.0</span>
														</div>
													</div>
												</a>
											</li>
											<li>
												<a href="">
													<div class="bookwrap">
														<div class="cover">
															<img src="../../public/img/index/s7538855.jpg" alt="">
														</div>
														<p class="name">看见美好:文物与人物</p>
														<div class="pricewrap">
															<span class="price">¥28.9</span>
															<span class="original">¥49.0</span>
														</div>
													</div>
												</a>
											</li>
											<li>
												<a href="">
													<div class="bookwrap">
														<div class="cover">
															<img src="../../public/img/index/s7538855.jpg" alt="">
														</div>
														<p class="name">看见美好:文物与人物</p>
														<div class="pricewrap">
															<span class="price">¥28.9</span>
															<span class="original">¥49.0</span>
														</div>
													</div>
												</a>
											</li>
											<li>
												<a href="">
													<div class="bookwrap">
														<div class="cover">
															<img src="../../public/img/index/s7538855.jpg" alt="">
														</div>
														<p class="name">看见美好:文物与人物</p>
														<div class="pricewrap">
															<span class="price">¥28.9</span>
															<span class="original">¥49.0</span>
														</div>
													</div>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</van-tab>
							<van-tab title="生活">
								<div class="sellhotbook">
									<div class="sellhotbooklist">
										<ul>
											<li>
												<a href="">
													<div class="bookwrap">
														<div class="cover">
															<img src="../../public/img/index/s6770207.jpg" alt="">
														</div>
														<p class="name">纸上的味道-古今饮食美文品鉴</p>
														<div class="pricewrap">
															<span class="price">¥15.0</span>
															<span class="original">¥32.0</span>
														</div>
													</div>
												</a>
											</li>
											<li>
												<a href="">
													<div class="bookwrap">
														<div class="cover">
															<img src="../../public/img/index/s6770207.jpg" alt="">
														</div>
														<p class="name">纸上的味道-古今饮食美文品鉴</p>
														<div class="pricewrap">
															<span class="price">¥15.0</span>
															<span class="original">¥32.0</span>
														</div>
													</div>
												</a>
											</li>
											<li>
												<a href="">
													<div class="bookwrap">
														<div class="cover">
															<img src="../../public/img/index/s6770207.jpg" alt="">
														</div>
														<p class="name">纸上的味道-古今饮食美文品鉴</p>
														<div class="pricewrap">
															<span class="price">¥15.0</span>
															<span class="original">¥32.0</span>
														</div>
													</div>
												</a>
											</li>
											<li>
												<a href="">
													<div class="bookwrap">
														<div class="cover">
															<img src="../../public/img/index/s6770207.jpg" alt="">
														</div>
														<p class="name">纸上的味道-古今饮食美文品鉴</p>
														<div class="pricewrap">
															<span class="price">¥15.0</span>
															<span class="original">¥32.0</span>
														</div>
													</div>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</van-tab>
						</van-tabs>
						<div class="morebottom">
							<a href="">进入畅销榜 >> </a>
						</div>
						<!-- <img src="../../public/img/index/700185 (2).jpg" alt=""> -->
					</div>
				</div>
			</div>
			<div class="pagefoot">
				<div class="actionwrap">
					<router-link to="/login" >登录</router-link>
					<router-link to="/register" >注册</router-link>
				</div>
				<nav class="bnav">
					<a class="red">触屏版</a>
					<a>电脑版</a>
					<a>帮助</a>
				</nav>
				<div class="copyright">Copyright 无限阅读©2018 www.wuxianyuedu.com</div>
			</div>
		
	</div>

		
		

</template>

<script>
	export default {
		data() {
			return {
				active: 2,
				listnav:[
					{
						src: 'img/index/taoshutuan.png',
						title: '淘书团'
					},
					{
						src: 'img/index/freepost.png',
						title: '9.9包邮'
					},
					{
						src: 'img/index/new.png',
						title: '新上架'
					},
					{
						src: 'img/index/publisher.png',
						title: '出版社'
					}
				],
				recombox:[
					// {
					// 	src:'img/index/s6947397.jpg',
					// 	name:'语自在',
					// 	action:'每满100减50',
					// 	price:'¥49.3',
					// 	original:'¥88.0'
					// },
					{
						src:'img/index/s7984882.jpg',
						name:'一片树叶的颤动',
						action:'每满100减50',
						price:'¥21.6',
						original:'¥45.0'
					},
					{
						src:'img/index/s7995302.jpg',
						name:'一个观点.不一定对',
						action:'每满100减50',
						price:'¥26.1',
						original:'¥58.0'
					},
					{
						src:'img/index/s7886614.jpg',
						name:'厕神:厕所的文明史',
						action:'每满100减50',
						price:'¥28.5',
						original:'¥39.0'
					}
				]
			};
		},
	};
</script>

<style>
	.index{
		width: 100%;
	}
	b,
	em,
	i,
	strong {
		font-style: normal;
		font-weight: 400;
	}

	/* .my-swipe .van-swipe-item {
	   color: #red;
	   font-size: 20px;
	   line-height: 150px;
	   text-align: center;
	   background-color: #39a9ed;
	} */
	.titlist {
		background: #fff;
	}

	img {
		border: none;
		vertical-align: top;
		font-size: 12px;
	}

	dl dt {
		list-style: none;
	}

	/* 热评从下到上 */
	.pagefoot  .copyright{
		font-size: 0.22rem;
		color: #8e8e8e;
		text-align: center;
		line-height: 0.82rem;
	}
	.pagefoot .bnav a{
		margin: 0 0.22rem;
		color: #666;
	}
	.pagefoot .bnav{
		text-align: center;
		font-size: 0.22rem;
		color: #666;
		line-height: 0.6rem;
	}
	.pagefoot .actionwrap a{
		display: inline-block;
		border: 1px solid #999;
		height: 0.38rem;
		line-height: 0.36rem;
		color: #666;
		font-size: 0.24rem;
		padding: 0 0.16rem;
		border-radius: 0.04rem;
	}
	.pagefoot .actionwrap{
		text-align: center;
		line-height: 0;
		padding: 0.2rem 0;
		border-bottom: 1px solid #f3f3f3;
	}
	.pagefoot{
		background-color: #fff;
		margin-bottom: 0.88rem;
	}
	.sellhotwrap .morebottom a {
	    font-size: 0.24rem;
	    color: #8e8e8e;
	    display: block;
	}
	.sellhotwrap .morebottom {
	    text-align: center;
	    height: 0.8rem;
	    line-height: 0.8rem;
	}
	.sellhotbooklist ul li .pricewrap .original {
		float: left;
		color: #999999;
		font-size: 0.22rem;
		margin-left: 0.12rem;
		text-decoration: line-through;
	}

	.sellhotbooklist ul li .pricewrap .price {
		float: left;
		color: #e60000;
		font-size: 0.24rem;
	}

	.sellhotbooklist ul li .pricewrap {
		overflow: hidden;
		padding: 0 0.1rem 0 0.2rem;
		line-height: 0.3rem;
		margin-top: 0.07rem;
	}

	.sellhotbooklist ul li .name {
		color: #000;
		font-size: 0.22rem;
		line-height: 0.3rem;
		margin-top: 0.12rem;
		padding: 0 0.15rem 0 0.2rem;
		height: 0.6rem;
		text-overflow: ellipsis;
		overflow: hidden;
		-webkit-line-clamp: 2;
		display: -webkit-box;
		-webkit-box-orient: vertical;
	}

	.sellhotbooklist ul li .cover img {
		max-width: 100%;
		height: 2rem;
	}

	.sellhotbooklist ul li .cover {
		text-align: center;
		padding: 0.05rem 0;
	}

	.sellhotbooklist ul li .bookwrap {
		background: #fff;
		padding: 0.15rem 0 0.17rem 0;
	}

	.sellhotbooklist ul li a {
		display: block;
	}

	.sellhotbooklist ul li {
		float: left;
		width: 49.4%;
		overflow: hidden;
		padding: 0 2px 2px 0;
	}

	.sellhotbooklist ul {
		overflow: hidden;
	}

	.sellhotbooklist {
		margin-top: 0.04rem;
	}

	.sellhotwrap .sellhotnav {
		/* height: 0.74rem; */
		margin-top: 0.1rem;
	}

	.sellhotwrap .sellhottit img {
		width: 2.5rem;
		padding: 0.2rem 0 0.24rem;
	}

	.sellhotwrap .sellhottit {
		text-align: center;
		background-color: #fff;
		box-shadow: 0 1px 0.1rem #dddcdd;
		line-height: 0.68rem;
	}

	.sellhotwrap {
		margin-top: 0.16rem;
	}

	.expresswrap .exprelist ul li .pricewrap .original {
		float: left;
		color: #999;
		font-size: 0.22rem;
		margin-left: 0.14rem;
		text-decoration: line-through;
	}

	.expresswrap .exprelist ul li .pricewrap .price {
		float: left;
		color: #e60000;
		font-size: 0.24rem;
	}

	.expresswrap .exprelist ul li .pricewrap {
		overflow: hidden;
		padding: 0 0.1rem;
		line-height: 0.3rem;
		margin-top: 0.07rem;
	}

	.expresswrap .exprelist ul li .name {
		color: #000;
		font-size: 0.22rem;
		line-height: 0.3rem;
		margin-top: 0.1rem;
		padding: 0 0.1rem;
		height: 0.6rem;
		text-overflow: ellipsis;
		overflow: hidden;
		-webkit-line-clamp: 2;
		display: -webkit-box;
		-webkit-box-orient: vertical;
	}

	.expresswrap .exprelist ul li .cover img {
		width: 100%;
		height: 2rem;
	}

	.expresswrap .exprelist ul li .cover {
		text-align: center;
		padding: 0.05rem 0;
	}

	.expresswrap .exprelist ul li a {
		display: block;
	}

	.expresswrap .exprelist ul li {
		float: left;
		width: 33%;
		padding: 0 0.01rem;
		margin-top: 0.2rem;
	}

	.expresswrap .exprelist ul {
		padding: 0 0.05rem;
		background: #fff;
		overflow: hidden;
		padding-bottom: 0.18rem;
	}

	.expresswrap .expresstit h2 img {
		width: 2.3rem;
	}

	.expresswrap .expresstit h2 {
		height: 0.5rem;
	}

	.expresswrap .expresstit {
		position: relative;
		background: #fff;
		padding: 0.09rem 0 0.1rem;
		box-shadow: 0px 1px 2px #dddcdd;
	}

	.expresswrap {
		margin-top: 0.16rem;
	}

	.newbookwrap .newbooklist .pricewrap .original {
		float: right;
		color: #fff;
		font-size: 0.18rem;
		padding: 0.01rem 0.05rem;
		background-color: #f9b24f;
	}

	.newbookwrap .newbooklist .pricewrap .price em {
		font-size: 0.22rem;
		font-family: Arial;
		padding-left: 0.03rem;
	}

	.newbookwrap .newbooklist .pricewrap .price {
		float: left;
		color: #e60000;
		font-size: 0.18rem;
		line-height: 0.35rem;
	}

	.newbookwrap .newbooklist .pricewrap {
		overflow: hidden;
		padding: 0 0.1rem;
		line-height: 0.3rem;
		margin-top: 0.07rem;
	}

	.newbookwrap .newbooklist ul li .name {
		color: #000;
		font-size: 0.22rem;
		line-height: 0.3rem;
		margin-top: 0.1rem;
		padding: 0 0.1rem;
		height: 0.6rem;
		text-overflow: ellipsis;
		overflow: hidden;
		-webkit-line-clamp: 2;
		display: -webkit-box;
		-webkit-box-orient: vertical;
	}

	.newbookwrap .newbooklist ul li .cover img {
		width: 100%;
		height: 2rem;
	}

	.newbookwrap .newbooklist ul li .cover {
		text-align: center;
		padding: 0.05rem 0;
	}

	.newbookwrap .newbooklist ul li a {
		display: block;
	}

	.newbookwrap .newbooklist ul li {
		float: left;
		width: 33%;
		padding: 0 0.01rem;
		margin-top: 0.2rem;
	}

	.newbookwrap .newbooklist ul {
		padding: 0 0.05rem;
		background-color: #fff;
		overflow: hidden;
		padding-bottom: 0.18rem;
	}

	.newbookwrap .newbooktit a span {
		float: right;
		background: url("../../public/img/index/whiterightarrow.png") no-repeat right center;
		background-size: 0.06rem 0.11rem;
		width: 0.06rem;
		height: 0.11rem;
		margin: 0.08rem 0 0 0.08rem;
	}

	.newbookwrap .newbooktit a {
		position: absolute;
		right: 0;
		top: 0;
		overflow: hidden;
		color: #fff;
		height: 0.3rem;
		margin-top: 0.2rem;
		border: 1px solid #fff;
		border-radius: 0.28rem;
		margin-right: 0.1rem;
		padding: 0 0.16rem 0 0.16rem;
		font-size: 0.18rem;
		line-height: 0.28rem;
	}

	.newbookwrap .newbooktit h2 {
		font-size: 0.26rem;
		margin-left: 0.2rem;
		line-height: 0.68rem;
		color: #fff;
		font-style: normal;
		font-weight: normal;
	}

	.newbookwrap .newbooktit {
		margin-top: 0.15rem;
		background-color: #f9bd00;
		height: 0.68rem;
		position: relative;
	}

	.recommwrap .recommlist .relistright a {
		float: left;
		width: 100%;
		margin-bottom: 0.1rem;
	}

	.recommwrap .recommlist .relistright {
		overflow: hidden;
		float: right;
		width: 47%;
		padding: 0 0.06rem;
	}

	.recommwrap .recommlist img {
		width: 100%;
	}

	.recommwrap .recommlist .relistleft {
		float: left;
		width: 49%;
		padding: 0 0.06rem;
	}

	.recommwrap .recommlist {
		overflow: hidden;
		padding: 0.1rem 0;
		background-color: #fff;
	}

	.recommwrap .recommtit h2 img {
		width: 2.3rem;
	}

	.recommwrap .recommtit h2 {
		height: 0.5rem;
	}

	.recommwrap .recommtit {
		position: relative;
		background: #fff;
		padding: 0.09rem 0 0.1rem;
		box-shadow: 0px 1px 2px #dddcdd;
	}

	.recommwrap {
		margin-top: 0.16rem;
	}

	.hottwrap .fivestartink a {
		display: block;
		text-align: center;
		font-size: 0.24rem;
		color: #4a4a4a;
		height: 0.84rem;
		line-height: 0.84rem;
		background: #efbf41;
	}

	.hottwrap ul li .review span {
		color: #e60000;
	}

	.hottwrap ul li .review {
		color: #666666;
		font-size: 0.2rem;
		line-height: 0.3rem;
		background: #f3f3f3;
		margin: 0.1rem 0.05rem 0;
		padding: 0.05rem 0.15rem;
		text-overflow: ellipsis;
		overflow: hidden;
		-webkit-line-clamp: 2;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		height: 0.7rem;
	}

	.hottwrap ul li .pricewrap .original {
		float: left;
		color: #999999;
		font-size: 0.22rem;
		margin-left: 0.12rem;
		text-decoration: line-through;
	}

	.hottwrap ul li .pricewrap .price {
		float: left;
		color: #e60000;
		font-size: 0.24rem;
	}

	.hottwrap ul li .pricewrap {
		overflow: hidden;
		padding: 0 0.1rem 0 0.2rem;
		line-height: 0.3rem;
		margin-top: 0.07rem;
	}

	.hottwrap ul li .startwrap b {
		float: left;
		font-size: 0.2rem;
		margin-left: 0.1rem;
		color: #ff511c;
	}

	.hottwrap ul li .startwrap span.half {
		background-image: url("../../public/img/index/halfstart.png");
		background-size: 0.2rem 0.2rem;
	}

	.hottwrap ul li .startwrap span.full {
		background-image: url("../../public/img/index/full.png");
		background-size: 0.2rem 0.2rem;
	}

	.hottwrap ul li .startwrap span {
		float: left;
		height: 0.2rem;
		width: 0.2rem;
		margin: 0 0.05rem 0 0;
	}

	.hottwrap ul li .startwrap {
		overflow: hidden;
		padding: 0 0 0 0.2rem;
		line-height: 0.2rem;
		margin-top: 0.1rem;
	}

	.hottwrap ul li .name {
		color: #000;
		font-size: 0.22rem;
		line-height: 0.3rem;
		margin-top: 0.12rem;
		padding: 0 0.15rem 0 0.2rem;
		height: 0.3rem;
		text-overflow: ellipsis;
		overflow: hidden;
		-webkit-line-clamp: 1;
		display: -webkit-box;
		-webkit-box-orient: vertical;
	}

	.hottwrap ul li .cover img {
		max-width: 100%;
		height: 2rem;
	}

	.hottwrap ul li .cover {
		text-align: center;
		padding: 0.05rem 0;
	}

	.hottwrap ul li .bookwrap {
		background: #fff;
		padding: 0.15rem 0 0.17rem 0;
	}

	.hottwrap ul li a {
		display: block;
		/* overflow: hidden; */
	}

	.hottwrap ul li:nth-of-type(2) {
		float: right;
		width: 50%;
		overflow: hidden;
		padding: 0 0 2px 0;
	}

	.hottwrap ul li:nth-of-type(1) {
		float: left;
		width: 49%;
		overflow: hidden;
		padding: 0 2px 2px 0;
	}

	.hottwrap ul {
		overflow: hidden;
	}

	.hottwrap .hottmain .bookwrap .review span {
		color: #e60000;
	}

	.hottwrap .hottmain .bookwrap .review {
		color: #666666;
		font-size: 0.2rem;
		line-height: 0.3rem;
		height: 0.9rem;
		padding: 0.05rem 0.15rem;
		background: #f3f3f3;
		margin: 0.1rem 0 0;
		text-overflow: ellipsis;
		overflow: hidden;
		-webkit-line-clamp: 2;
		display: -webkit-box;
		-webkit-box-orient: vertical;
	}

	.hottwrap .hottmain .bookwrap .pricewrap .original {
		float: left;
		color: #999999;
		font-size: 0.22rem;
		margin-left: 0.12rem;
		text-decoration: line-through;
	}

	.hottwrap .hottmain .bookwrap .pricewrap .price {
		float: left;
		color: #e60000;
		font-size: 0.24rem;
	}

	.hottwrap .hottmain .bookwrap .pricewrap {
		overflow: hidden;
		line-height: 0.3rem;
		margin-top: 0.07rem;
	}

	.hottwrap .hottmain .bookwrap .startwrap b {
		float: left;
		font-size: 0.2rem;
		margin-left: 0.1rem;
		color: #ff511c;
	}

	.hottwrap .hottmain .bookwrap .startwrap span.half {
		background-image: url("../../public/img/index/halfstart.png");
		background-size: 0.2rem 0.2rem;
	}

	.hottwrap .hottmain .bookwrap .startwrap span.full {
		background-image: url("../../public/img/index/full.png");
		background-size: 0.2rem 0.2rem;
	}

	.hottwrap .hottmain .bookwrap .startwrap span {
		float: left;
		height: 0.2rem;
		width: 0.2rem;
		margin: 0 0.05rem 0 0;
	}

	.hottwrap .hottmain .bookwrap .startwrap {
		overflow: hidden;
		line-height: 0.2rem;
		margin-top: 0.1rem;
	}

	.hottwrap .hottmain .bookwrap .name {
		color: #000;
		font-size: 0.22rem;
		line-height: 0.3rem;
		margin-top: 0.2rem;
		height: 0.3rem;
		text-overflow: ellipsis;
		overflow: hidden;
		-webkit-line-clamp: 1;
		display: -webkit-box;
		-webkit-box-orient: vertical;
	}

	.hottwrap .hottmain .cover img {
		height: 2.2rem;
		max-width: 100%;
	}

	.hottwrap .hottmain .cover {
		margin: 0.15rem 0;
		height: 2.2rem;
		width: 2.2rem;
		position: absolute;
		left: 0;
		top: 0;
		text-align: center;
	}

	.hottwrap .hottmain a .bookwrap {
		position: relative;
		margin-bottom: 2px;
		padding-left: 2.2rem;
		overflow: hidden;
		min-height: 2.5rem;
	}

	.hottwrap .hottmain a {
		display: block;
	}

	.hottwrap .hottmain {
		padding: 0 0.2rem;
		background: #fff;
	}

	.hottwrap .hotthead h2 img {
		width: 2.3rem;
	}

	.hottwrap .hotthead h2 {
		height: 0.5rem;
	}

	.hottwrap .hotthead {
		position: relative;
		background: #fff;
		padding: 0.09rem 0 0.1rem;
		box-shadow: 0px 1px 2px #dddcdd;
	}

	.hottwrap {
		margin-top: 0.16rem;
	}

	/* 搜索从上到下	 */
	.searchbar {
		position: fixed;
		left: 0;
		top: 0;
		background: linear-gradient(to bottom, #fe2828 0%, #e60000 100%);
		width: 100%;
		height: 0.88rem;
		z-index: 900;
	}

	.searchbar .searchinner {
		position: relative;
		height: 0.88rem;
		width: 100%;
		overflow: hidden;
	}

	.searchinner h1 {
		position: absolute;
		left: 0;
		top: 0;
		height: 0.6rem;
		margin-top: 0.14rem;
	}

	.searchinner h1 img {
		width: 1.64rem;
		margin-left: .05rem;
	}

	.searchbar .searchwrap {
		height: 0.6rem;
		/* margin-top: 0.14rem; */
		border-radius: 0.6rem;
		line-height: 0.6rem;
		background: #fff;
		margin: 0.14rem 0.66rem 0 1.94rem;
	}

	.searchbar .searchwrap span {
		color: #8e8e8e;
		font-size: 0.24rem;
		display: block;
		text-indent: 0.2rem;
		height: 0.6rem;
	}

	.searchbar .searchbtn {
		position: absolute;
		right: 0;
		top: 0;
		width: 0.6rem;
		height: 0.88rem;
		text-indent: -999px;
		overflow: hidden;
		font-size: 0;
		background: url("../../public/img/index/search.png") no-repeat center;
		background-size: 0.34rem 0.34rem;
	}

	.container {
		margin-top: 0.88rem;
		position: relative;
		overflow: hidden;
		list-style: none;
		padding: 0;
		z-index: 1;
	}

	.container img {
		width: 100%;
		height: 100%;
	}

	.nav .indexnav {
		overflow: hidden;
		background-color: #fff;
		padding: 0.2rem 0 0.15rem;
	}

	.nav .indexnav li {
		display: inline-block;
		width: 20%;
		float: left;
		text-align: center;
	}

	.nav .indexnav li img {
		display: block;
		margin: auto;
		width: 0.72rem;
		height: 0.72rem;
		font-size: 12px;
		color: #666;
	}

	.nav .indexnav li b {
		display: block;
		font-size: 0.22rem;
		line-height: 0.27rem;
		margin-top: 0.05rem;
		color: #333333;
	}

	.notice-swipe {
		height: 40px;
		line-height: 40px;
	}

	.notice {
		background: #fff;
		height: 0.68rem;
		margin-top: 0.16rem;
	}

	.floorbanner {
		margin-top: 0.16rem;
	}

	.floorbanner img {
		width: 100%;
	}

	.recommend {
		overflow: hidden;
		margin-top: 0.15rem;
	}

	.titlere {
		position: relative;
		background: #fff;
		padding-top: 0.08rem;
	}

	.recommend .titlere {
		background: #fb2525;
		height: 0.62rem;
		line-height: .62rem;
		color: #fff;
		font-size: .24rem;
		padding: 0rem .2rem;
	}

	.recommend .recombox ul {
		overflow: hidden;
	}

	.recommend .recombox ul li:nth-of-type(1) {
		float: left;
		width: 49%;
		overflow: hidden;
		padding: 0 5px 5px 0;
	}

	.recommend .recombox ul li:nth-of-type(3) {
		float: left;
		width: 49%;
		overflow: hidden;
		padding: 0 5px 5px 0;
	}

	.recommend .recombox ul li:nth-of-type(2) {
		float: right;
		width: 49%;
		overflow: hidden;
		padding: 0 0 5px 0;
	}

	.recommend .recombox ul li:nth-of-type(4) {
		float: right;
		width: 49%;
		overflow: hidden;
		padding: 0 0 5px 0;
	}

	.recommend .recombox ul li a {
		display: block;
	}

	.recommend .recombox .bookbox {
		background: #fff;
		padding: 0.15rem 0 0.17rem 0;
	}

	.recommend .recombox .cover {
		text-align: center;
		padding: 0.05rem 0;
	}

	.recommend .recombox .bookbox .cover img {
		max-width: 100%;
		height: 2rem;
	}

	.recommend .recombox ul li .name,
	.recommend .recombox ul li .action {
		color: #000;
		font-size: 0.22rem;
		line-height: 0.3rem;
		margin-top: 0.12rem;
		padding: 0 0.15rem 0 0.2rem;
		height: 0.3rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.recommend .recombox ul li .action {
		padding-left: .15rem;
		margin-top: 0.1rem;
	}

	.recommend .recombox ul li .action em {
		background-color: #ffebec;
		color: #f10000;
		padding: .0rem .15rem;
		border-radius: 1rem;
		margin-right: .1rem;
	}

	.recommend .recombox ul li .pricebox {
		overflow: hidden;
		padding: 0 0.1rem 0 0.2rem;
		line-height: 0.3rem;
		margin-top: 0.1rem;
		font-family: Arial;
	}

	.recommend .recombox ul li .pricebox .price {
		float: left;
		color: #e60000;
		font-size: 0.24rem;
	}

	.recommend .recombox ul li .pricebox .original {
		float: left;
		color: #999999;
		font-size: 0.23rem;
		padding-left: 0.15rem;
		text-decoration: line-through;
	}

	.contacen {
		margin: 0 auto;
		position: relative;
		overflow: hidden;
		list-style: none;
		padding: 0;
		z-index: 1;
	}

	.contacen img {
		width: 100%;
	}

	.tstbox {
		margin-top: 0.16rem;
	}

	.tstbox h2 {
		height: 0.5rem;
	}

	.tstbox h2 img {
		width: 2.3rem;
	}

	.tstbox .titlere a {
		position: absolute;
		right: 0;
		top: 0;
		overflow: hidden;
		color: #666;
		height: 0.3rem;
		margin-top: 0.2rem;
		border: 1px solid #666;
		border-radius: 0.28rem;
		margin-right: 0.1rem;
		padding: 0 0.16rem 0 0.16rem;
		font-size: 0.18rem;
		line-height: 0.28rem;
	}

	.tstbox .titlere a span {
		float: right;
		background: url("../../public/img/index/rightblaickarrow.png") no-repeat left;
		background-size: 0.06rem 0.11rem;
		width: 0.06rem;
		height: 0.11rem;
		margin: 0.08rem 0 0 0.08rem;
	}

	.titlist ul {
		overflow: hidden;
		padding: 0 0.05rem 0.1rem;
	}

	.titlist ul li {
		float: left;
		width: 48%;
		margin: 0.1rem 0 0 0;
		padding: 0 0.05rem;
	}

	.titlist ul li .bookwrap {
		background: #f3f3f3;
	}

	.titlist ul li .cover {
		position: relative;
		height: 2.9rem;
	}

	.titlist ul li .cover img {
		width: 100%;
		font-size: .24rem;
	}

	.titlist ul li .name {
		position: relative;
		color: #000000;
		line-height: 0.3rem;
		height: 0.6rem;
		font-size: 0.22rem;
		overflow: hidden;
		text-indent: 0.3rem;
		padding: 0 0.1rem;
		margin-top: 0.16rem;
		text-overflow: ellipsis;
		overflow: hidden;
		-webkit-line-clamp: 2;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		position: relative;
	}

	.titlist ul li .pricewrap {
		font-size: 0.18rem;
	}

	.titlist ul li .pricewrap .tprice {
		padding: 0 0.1rem;
		color: #e60000;
		font-size: 0.18rem;
		line-height: 0.28rem;
		margin-top: 0.08rem;
	}

	.titlist ul li .pricewrap .tprice span {
		font-size: 0.24rem;
	}

	.titlist ul li .pricewrap .discountwrap {
		padding: 0 0 0.16rem 0.1rem;
		overflow: hidden;
		margin-top: 0.04rem;
	}

	.titlist ul li .pricewrap .discountwrap .original {
		float: left;
		text-decoration: line-through;
		color: #9a9a9a;
		font-size: 0.2rem;
		line-height: 0.3rem;
	}

	.titlist ul li .pricewrap .discountwrap .discount {
		float: right;
		height: 0.26rem;
		line-height: 0.26rem;
		font-size: 0.18rem;
		color: #fff;
		background: #efb64d;
		border-radius: 0.26rem 0 0 0.26rem;
		padding: 0 0.06rem;
	}

	.titlist ul li .name span.iocTitle {
		border-radius: 0.03rem;
		position: absolute;
		height: 0.22rem;
		width: 0.22rem;
		background: #ed0b0e;
		color: #ffffff;
		text-align: center;
		line-height: 0.22rem;
		font-size: 0.16rem;
		left: 0.1rem;
		top: 0.02rem;
		text-indent: 0px;
	}
</style>
