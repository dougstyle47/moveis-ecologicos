var banners = ["Os mlehores do Brasil!", "Qualidade e preço baixo!"];
var banner Atual = 0;

function trocaBanner(){
	bannerAtual = (bannerAtual + 1) % 2;
	document.querySelector('h2#mensagem').textContent = banners[bannerAtual];
}

setInterval(trocaBanner, 2000);
