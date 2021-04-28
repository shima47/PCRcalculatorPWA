//計算系
const caluculate = (Num) => {
	const oneVol = [7,1,1,0.8,0.075];
	let resultVol = [7,1,1,0.8,0.075];
	let i = 0;
	//計算と格納
	while(i < 5){
		let a = oneVol[i] * Num;
		let b = a * 1000;
		let result = Math.round(b) / 1000;
		
		resultVol[i] = result;
		i++;
	};
	
	//項目オブジェクト配列を取得
	const $col = document.getElementsByClassName("col");
	
	//最上段右の項目を書き換え
	$col[2].textContent = "x" + Num;
	
	//右列の項目を書き換え
	i = 0;
	let j = 5;
	while(i < 5){
		$col[j].textContent = resultVol[i] + "μL";
		i++;
		j = j + 3;
	};
}

//ボタンオブジェクト取得
const $button = document.getElementsByTagName("button");
//フォームオブジェクトを取得
const $form = document.getElementById("form");

//ボタンを押すと実行
$button[0].addEventListener("click",() => {
	//フォーム内の値を取得
	const Num = $form.value;
	caluculate(Num);
});

//入力すると実行
$form.addEventListener("keypress",() => {
	//フォーム内の値を取得
	const Num = $form.value;
	caluculate(Num);
});
