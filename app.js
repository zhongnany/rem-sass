require('./src/assets/styles/index.scss');

//获取屏幕宽度（viewport）
let htmlWidth = document.documentElement.cliemtWidth || document.body.clientWidth;

//获取html的dom 
let htmlDom = document.getElementsByTagName('html')[0];

//设置html的fontSize
htmlDom.style.fontSize = htmlWidth / 10 + 'px';

window.addEventListener('resize',()=>{
	let htmlWidth = document.documentElement.cliemtWidth || document.body.clientWidth;
	htmlDom.style.fontSize = htmlWidth / 10 + 'px';
});

let cir = document.getElementsByClassName("cir");
for(let i=0;i<cir.length;i++){
	cir[i].addEventListener('click',() => {
		let banner = document.getElementsByClassName("banner-one");
		for(let j=0;j<banner.length;j++){
			if(j == i){
				banner[j].style.opacity = 1;
			}else{
				banner[j].style.opacity = 0;
			}
		}
	});
}
