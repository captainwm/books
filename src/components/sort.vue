<template>
	<div class="sort">
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
		<div class="soo">
			<van-tree-select height="100%"  :items="items" :main-active-index.sync="active">
				<template #content>
					<!-- <van-image v-if="active === 0" src="https://img01.yzcdn.cn/vant/apple-1.jpg"/> -->
					<div class="zerori" v-if="active === 0" >
						<div class="zeroricon">
							<div class="topriwrap">
								<a href=""><img src="../../public/img/sort/700263 (4).jpg" alt=""></a>
							</div>
							<div class="hotlink">
								<ul>
									<li>
										<a href=""><img src="../../public/img/sort/lei_cxb.png" alt=""></a>
									</li>
									<li>
										<a href=""><img src="../../public/img/sort/lei_xsj.png" alt=""></a>
									</li>
								</ul>
							</div>
							<div class="conitem">
								<ul class="sorr">
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="zerori" v-if="active === 1" >
						<div class="zeroricon">
							<div class="topriwrap">
								<a href=""><img src="../../public/img/sort/700263 (4).jpg" alt=""></a>
							</div>
							<div class="hotlink">
								<ul>
									<li>
										<a href=""><img src="../../public/img/sort/lei_cxb.png" alt=""></a>
									</li>
									<li>
										<a href=""><img src="../../public/img/sort/lei_xsj.png" alt=""></a>
									</li>
								</ul>
							</div>
							<div class="conitem">
								<ul class="sorr">
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7113220.jpg" alt="">
											</div>
											<span>中国古诗词</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7113220.jpg" alt="">
											</div>
											<span>中国古诗词</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7113220.jpg" alt="">
											</div>
											<span>中国古诗词</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7113220.jpg" alt="">
											</div>
											<span>中国古诗词</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7113220.jpg" alt="">
											</div>
											<span>中国古诗词</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7113220.jpg" alt="">
											</div>
											<span>中国古诗词</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7113220.jpg" alt="">
											</div>
											<span>中国古诗词</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7113220.jpg" alt="">
											</div>
											<span>中国古诗词</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7113220.jpg" alt="">
											</div>
											<span>中国古诗词</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7113220.jpg" alt="">
											</div>
											<span>中国古诗词</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7113220.jpg" alt="">
											</div>
											<span>中国古诗词</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7113220.jpg" alt="">
											</div>
											<span>中国古诗词</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="zerori" v-if="active === 2" >
						<div class="zeroricon">
							<div class="topriwrap">
								<a href=""><img src="../../public/img/sort/700263 (4).jpg" alt=""></a>
							</div>
							<div class="hotlink">
								<ul>
									<li>
										<a href=""><img src="../../public/img/sort/lei_cxb.png" alt=""></a>
									</li>
									<li>
										<a href=""><img src="../../public/img/sort/lei_xsj.png" alt=""></a>
									</li>
								</ul>
							</div>
							<div class="conitem">
								<ul class="sorr">
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z8171333.jpg" alt="">
											</div>
											<span>传统文化</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z8171333.jpg" alt="">
											</div>
											<span>传统文化</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z8171333.jpg" alt="">
											</div>
											<span>传统文化</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z8171333.jpg" alt="">
											</div>
											<span>传统文化</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z8171333.jpg" alt="">
											</div>
											<span>传统文化</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z8171333.jpg" alt="">
											</div>
											<span>传统文化</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z8171333.jpg" alt="">
											</div>
											<span>传统文化</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z8171333.jpg" alt="">
											</div>
											<span>传统文化</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z8171333.jpg" alt="">
											</div>
											<span>传统文化</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z8171333.jpg" alt="">
											</div>
											<span>传统文化</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z8171333.jpg" alt="">
											</div>
											<span>传统文化</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z8171333.jpg" alt="">
											</div>
											<span>传统文化</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="zerori" v-if="active === 3" >
						<div class="zeroricon">
							<div class="topriwrap">
								<a href=""><img src="../../public/img/sort/700263 (4).jpg" alt=""></a>
							</div>
							<div class="hotlink">
								<ul>
									<li>
										<a href=""><img src="../../public/img/sort/lei_cxb.png" alt=""></a>
									</li>
									<li>
										<a href=""><img src="../../public/img/sort/lei_xsj.png" alt=""></a>
									</li>
								</ul>
							</div>
							<div class="conitem">
								<ul class="sorr">
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z6784103.jpg" alt="">
											</div>
											<span>中国史</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z6784103.jpg" alt="">
											</div>
											<span>中国史</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z6784103.jpg" alt="">
											</div>
											<span>中国史</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z6784103.jpg" alt="">
											</div>
											<span>中国史</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z6784103.jpg" alt="">
											</div>
											<span>中国史</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z6784103.jpg" alt="">
											</div>
											<span>中国史</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z6784103.jpg" alt="">
											</div>
											<span>中国史</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z6784103.jpg" alt="">
											</div>
											<span>中国史</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z6784103.jpg" alt="">
											</div>
											<span>中国史</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z6784103.jpg" alt="">
											</div>
											<span>中国史</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z6784103.jpg" alt="">
											</div>
											<span>中国史</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z6784103.jpg" alt="">
											</div>
											<span>中国史</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="zerori" v-if="active === 4" >
						<div class="zeroricon">
							<div class="topriwrap">
								<a href=""><img src="../../public/img/sort/700263 (4).jpg" alt=""></a>
							</div>
							<div class="hotlink">
								<ul>
									<li>
										<a href=""><img src="../../public/img/sort/lei_cxb.png" alt=""></a>
									</li>
									<li>
										<a href=""><img src="../../public/img/sort/lei_xsj.png" alt=""></a>
									</li>
								</ul>
							</div>
							<div class="conitem">
								<ul class="sorr">
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="zerori" v-if="active === 5" >
						<div class="zeroricon">
							<div class="topriwrap">
								<a href=""><img src="../../public/img/sort/700263 (4).jpg" alt=""></a>
							</div>
							<div class="hotlink">
								<ul>
									<li>
										<a href=""><img src="../../public/img/sort/lei_cxb.png" alt=""></a>
									</li>
									<li>
										<a href=""><img src="../../public/img/sort/lei_xsj.png" alt=""></a>
									</li>
								</ul>
							</div>
							<div class="conitem">
								<ul class="sorr">
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="zerori" v-if="active === 6" >
						<div class="zeroricon">
							<div class="topriwrap">
								<a href=""><img src="../../public/img/sort/700263 (4).jpg" alt=""></a>
							</div>
							<div class="hotlink">
								<ul>
									<li>
										<a href=""><img src="../../public/img/sort/lei_cxb.png" alt=""></a>
									</li>
									<li>
										<a href=""><img src="../../public/img/sort/lei_xsj.png" alt=""></a>
									</li>
								</ul>
							</div>
							<div class="conitem">
								<ul class="sorr">
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
									<li>
										<a href="">
											<div class="cover">
												<img src="../../public/img/sort/z7984882.jpg" alt="">
											</div>
											<span>中国当代小说</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</template>
			</van-tree-select>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				active: 0,
				items: [{
						text: '小说'
					}, {
						text: '文学'
					}, {
						text: '少儿'
					}, {
						text: '历史'
					}, {
						text: '哲学/宗教'
					}, {
						text: '传记'
					},
					{
						text: '社会科学'
					}, {
						text: '文化'
					}, {
						text: '传记'
					}, {
						text: '政治军事'
					}, {
						text: '中小学教辅'
					}, {
						text: '成功/励志'
					},
					{
						text: '外语'
					}, {
						text: '古籍'
					}, {
						text: '管理'
					}, {
						text: '医学'
					}, {
						text: '经济'
					}, {
						text: '艺术'
					}, {
						text: '青春文学'
					},
					{
						text: '动漫/幽默'
					}, {
						text: '美食'
					}, {
						text: '教材'
					}, {
						text: '旅游'
					}, {
						text: '收藏/鉴赏'
					}, {
						text: '家居/休闲游戏'
					}, {
						text: '保健/心理健康'
					},
					{
						text: '自然科学'
					}, {
						text: '科普读物'
					}, {
						text: '家庭教育'
					}, {
						text: '体育/运动'
					}, {
						text: '法律'
					}, {
						text: '计算机/网络'
					}, {
						text: '工业技术'
					},
					{
						text: '农业/林业'
					}, {
						text: '建筑'
					}, {
						text: '个人理财'
					}, {
						text: '工具书'
					}, {
						text: '考试'
					}, {
						text: '地图/地理'
					}, {
						text: '两性关系'
					},
					{
						text: '孕产妇/育儿'
					}, {
						text: '美丽装扮'
					}, {
						text: '文创'
					}, {
						text: '进口原版书'
					}, {
						text: '教育音像'
					}, {
						text: '音像和软件'
					},
				],
			};
		},
	};
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
</style>
<style scoped>
	/* 开始 */
	.soo .conitem ul li span {
		display: block;
		color: #333;
		font-size: 0.22rem;
		line-height: 0.32rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-top: 0.12rem;
	}

	.soo .conitem ul li .cover img {
		height: 1.35rem;
		max-width: 100%;
		background: #fff;
		font-size: 12px;
		text-align: center;
	}

	.soo .conitem ul li .cover {
		height: 1.35rem;
	}

	.soo .conitem ul li {
		float: left;
		padding: 0 0.1rem;
		width: 28%;
		text-align: center;
		margin-top: 0.25rem;
	}

	.soo .conitem ul {
		overflow: hidden;
		padding: 0 0.1rem;
		padding-bottom: 0.2rem;
	}

	.soo .hotlink ul li img {
		width: 100%;
	}

	.soo .hotlink ul li {
		width: 49%;
		padding: 0 0.01rem;
		float: left;
	}

	.soo .zerori li {
		font-size: 0.6rem;
	}

	.soo .hotlink ul {
		padding: 0 0.1rem;
	}

	.soo .hotlink {
		margin-top: 0.1rem;
	}

	.soo .zerori .topriwrap img {
		width: 100%;
		height: 100%;
	}

	.soo .zerori .topriwrap {
		padding: 0.2rem 0.2rem 0;
	}

	.soo .zerori {
		flex: 1;
		height: 100%;
		overflow: hidden;
		overflow-y: auto;
	}

	.sort {
		padding-top: 0.88rem;
		padding-bottom: 0.88rem;
	}

	/* 往下压 */
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
</style>
