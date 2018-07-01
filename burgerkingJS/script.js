// alert('autoselect begin');
console.log('autoselect begin');

var submit = document.querySelector("input[type=submit]");
var radios = document.querySelectorAll("input[type=radio]");
var checkboxs = document.querySelectorAll("input[type=checkbox]");
var teaxareas = document.querySelectorAll("textarea");

// 单选题： 默认选中第一个答案
if (radios && radios.length > 0) {
	console.log('autoselect selecting...');
	var radio1 = radios[0];
	if (radio1 && !radio1.checked) {
		radio1.checked = true;
		if (radio1.previousElementSibling) {
			radio1.previousElementSibling.style.backgroundPosition = "0px -73px";
		}
			
	}
}

// 多选题： 默认选中第一个答案
if (checkboxs && checkboxs.length > 0) {
	console.log('autoselect selecting...');
	var checkbox1 = checkboxs[0];
	if (checkbox1 && !checkbox1.checked) {
		checkbox1.checked = true;
		if (checkbox1.previousElementSibling) {
			checkbox1.previousElementSibling.style.backgroundPosition = "0px -73px";
		}
			
	}
}

// 填空题： 默认填入“感觉挺好的啊， 继续加强就行啦”
if (teaxareas && teaxareas.length > 0) {
	teaxareas[0].value = "感觉挺好的啊， 继续加强就行啦";
} 

submit.click();

console.log('autoselect submited');