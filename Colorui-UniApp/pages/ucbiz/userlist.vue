<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="backText">返回</block><block slot="content">用户列表</block></cu-custom>
		<ucb-user-list :userlist="userlist"></ucb-user-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userlist:[
					{
						'imgurl':'https://hbimg.huabanimg.com/68b31a50db076d4334f9cc608b8a8cfdcd389bcd1755-ix61xr_sq75sf',
						'name':'nAme',
						'message':'Hiiii,are you there?'
					},
					{
						'imgurl':'https://hbimg.huabanimg.com/68b31a50db076d4334f9cc608b8a8cfdcd389bcd1755-ix61xr_sq75sf',
						'name':'nAme',
						'message':'Hiiii,are you there?'
					},
					{
						'imgurl':'https://hbimg.huabanimg.com/68b31a50db076d4334f9cc608b8a8cfdcd389bcd1755-ix61xr_sq75sf',
						'name':'nAme',
						'message':'Hiiii,are you there?'
					},
					{
						'imgurl':'https://hbimg.huabanimg.com/68b31a50db076d4334f9cc608b8a8cfdcd389bcd1755-ix61xr_sq75sf',
						'name':'nAme',
						'message':'Hiiii,are you there?'
					},
					{
						'imgurl':'https://hbimg.huabanimg.com/68b31a50db076d4334f9cc608b8a8cfdcd389bcd1755-ix61xr_sq75sf',
						'name':'nAme',
						'message':'Hiiii,are you there?'
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
