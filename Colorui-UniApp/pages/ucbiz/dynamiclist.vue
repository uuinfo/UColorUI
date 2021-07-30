<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="backText">返回</block><block slot="content">动态列表</block></cu-custom>
		<ucbiz-dynamic-list :dynamiclist="list"></ucbiz-dynamic-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					[{
						title: '英国的"外科医生"，竟然把nike运动服改造成了高级定制西装',
						imgUrl: 'https://hbimg.huabanimg.com/c2b3a8aff0df4a7e4c65ad06404278c20020802adf63d-fre8vM_fw658',
						avatar: 'https://hbimg.huabanimg.com/68b31a50db076d4334f9cc608b8a8cfdcd389bcd1755-ix61xr_sq75sf',
						name: '盒子芥末',
						isFavor: false,
						favor: 333
					}, {
						title: '英国的"外科医生"，竟然把nike运动服改造成了高级定制西装',
						imgUrl: 'https://hbimg.huabanimg.com/a93f35df96eb6fd176313decd3c27ade7b71c7c378630-l6CXXd_fw658',
						avatar: 'https://hbimg.huabanimg.com/68b31a50db076d4334f9cc608b8a8cfdcd389bcd1755-ix61xr_sq75sf',
						name: '盒子芥末',
						isFavor: true,
						favor: 333
					}, {
						title: '英国的"外科医生"，竟然把nike运动服改造成了高级定制西装',
						imgUrl: 'https://hbimg.huabanimg.com/d500eab4467f91bcde88782f19a8336c2b81ce75bdb1a-kedNbr_fw658',
						avatar: 'https://hbimg.huabanimg.com/68b31a50db076d4334f9cc608b8a8cfdcd389bcd1755-ix61xr_sq75sf',
						name: '盒子芥末',
						isFavor: true,
						favor: 333
					}, {
						title: '英国的"外科医生"，竟然把nike运动服改造成了高级定制西装',
						imgUrl: 'https://hbimg.huabanimg.com/d500eab4467f91bcde88782f19a8336c2b81ce75bdb1a-kedNbr_fw658',
						avatar: 'https://hbimg.huabanimg.com/68b31a50db076d4334f9cc608b8a8cfdcd389bcd1755-ix61xr_sq75sf',
						name: '盒子芥末',
						isFavor: true,
						favor: 333
					}],
					[{
						title: '潮男Eugene Tong教你在冬天如何戴好一头好帽',
						imgUrl: 'https://hbimg.huabanimg.com/1e2595586608f1729cefa00a5e4c72fcbf903ed7c8e6-7IxJF0_fw658',
						avatar: 'https://hbimg.huabanimg.com/68b31a50db076d4334f9cc608b8a8cfdcd389bcd1755-ix61xr_sq75sf',
						name: '盒子芥末',
						isFavor: false,
						favor: 333
					}, {
						title: '潮男Eugene Tong教你在冬天如何戴好一头好帽',
						imgUrl: 'https://hbimg.huabanimg.com/a93f35df96eb6fd176313decd3c27ade7b71c7c378630-l6CXXd_fw658',
						avatar: 'https://hbimg.huabanimg.com/68b31a50db076d4334f9cc608b8a8cfdcd389bcd1755-ix61xr_sq75sf',
						name: '盒子芥末',
						isFavor: true,
						favor: 333
					}, {
						title: '潮男Eugene Tong教你在冬天如何戴好一头好帽',
						imgUrl: 'https://hbimg.huabanimg.com/d500eab4467f91bcde88782f19a8336c2b81ce75bdb1a-kedNbr_fw658',
						avatar: 'https://hbimg.huabanimg.com/68b31a50db076d4334f9cc608b8a8cfdcd389bcd1755-ix61xr_sq75sf',
						name: '盒子芥末',
						isFavor: true,
						favor: 333
					}, {
						title: '潮男Eugene Tong教你在冬天如何戴好一头好帽',
						imgUrl: 'https://hbimg.huabanimg.com/d500eab4467f91bcde88782f19a8336c2b81ce75bdb1a-kedNbr_fw658',
						avatar: 'https://hbimg.huabanimg.com/68b31a50db076d4334f9cc608b8a8cfdcd389bcd1755-ix61xr_sq75sf',
						name: '盒子芥末',
						isFavor: true,
						favor: 333
					}]
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
