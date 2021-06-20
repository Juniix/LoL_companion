function display(img) {
	document.getElementById("display") = `
	<div class='display' id='display' onclick="undisplay()">
		<img src=${img}>
	</div>
	`
}

function undisplay() {
	document.getElementById("display") = `
	<div id='display'></div>
	`
}