<template>
	<div class="page">
		<Header></Header>
		<main class="main">
			<Aside></Aside>
			<section class="section">
				<h1 class="section__title">Создание сбора</h1>
				<Sbor></Sbor>
			</section>
		</main>
	</div>
</template>

<script>
	import Header from "./components/Header/Header.vue";
	import Aside from "./components/Aside/Aside.vue";
	import Sbor from "./components/Sbor/Sbor.vue";
	export default {
		components: {
			Header,
			Aside,
			Sbor
		}
	}
</script>

<style lang="scss">
	@font-face {
		font-family: 'futurabook';
		src: url("@/assets/fonts/futurabook.woff2") format("woff2"), url("@/assets/fonts/futurabook.woff2") format("woff");
		font-style: normal;
		font-weight: 400;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'futurabook', sans-serif;
		font-size: 16px;
		font-weight: 400;
	}

	img {
		display: block;
		max-width: 100%;
	}

	.page {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.main {
		display: flex;
		flex-grow: 1;
	}

	.section {
		padding: 60px;
		flex-grow: 1;

		&__title {
			font-size: 50px;
			color: #302F2D;
			font-weight: 700;
			margin-bottom: 30px;
		}
	}

	.label {
		&__text {
			font-size: 20px;
			color: #302F2D;
			margin-bottom: 20px;
		}
	}

	.field {
		width: 100%;
		background-color: #FAFAFA;
		border: 1px solid #E6E6E6;
		padding: 13px 10px;
	}

	@media (max-width: 1280px) {
		.main {
			position: relative;
		}
	}

	@media (max-width: 768px) {
		.section {
			padding-right: 15px;
			padding-left: 15px;

			&__title {
				font-size: 30px;
			}
		}
	}
</style>