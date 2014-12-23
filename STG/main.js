//  global
var screen, info;
var run = true;
var fps = 1000 / 30;
var mouse = new Point();

// main
window.onload = function(){

	//　スクリーンの初期化
	screen = document.getElementById('screen');
	screen.width = 256;
	screen.height = 256;

	//　イベントの登録
	screen.addEventListener('mousemove',mouseMove,true);
	window.addEventListener('keydown',keyDown,true);

	//　エレメント関連
	info = document.getElementById('info');

	//　ループ処理を呼び出す
	(function(){
		//　HTMLを更新
		info.innerHTML = mouse.x + ' : ' + mouse.y;

		//　フラグにより再帰呼び出し
		if(run){setTimeout(arguments.callee, fps);}
	})();
};

//　event
function mouseMove(event){
	//　マウスカーソル座表の更新
	mouse.x = event.clientX - screen.offsetLeft;
	mouse.y = event.clientY - screen.offsetTop;
}

function keyDown(event){
	//　キーコードを取得
	var ck = event.keyCode;

	//　Escキーが押されていたらフラグを降ろす
	if(ck === 27){run = false;}
}
