<template>
    <div class="body" >
			<h2 class="typewriting">前端工程化</h2>
		</div>

</template>

<style>

.body {
  width: 800px;
  height:100vh ;
  background: #252839;
}

.typewriting {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}
 
			.typewriting h2 {
				overflow: hidden;
				white-space: nowrap;
				letter-spacing: 5px;
				font: bold 4em TencentSans;
				color: #fff;
				animation: typing 2s steps(6) forwards;
			}
 
			.typewriting::after {
				content: "";
				display: block;
				position: absolute;
				top: 0;
				right: 0;
				width: 2px;
				height: 100%;
				background: #fff;
				animation: blink 1.1s linear infinite;
			}
 
			@keyframes blink {
 
				0%,
				49% {
					opacity: 1;
				}
 
				50%,
				100% {
					opacity: 0;
				}
			}
 
			@keyframes typing {
				0% {
					width: 0;
				}
 
				100% {
					width: 414px;
				}
			}


</style>