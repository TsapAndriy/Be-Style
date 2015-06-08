var selectedPicture = null;

function changeCloses(item){
	var mainImage = document.getElementById('imgMainClose');
	if (mainImage){
		mainImage.style.backgroundImage = 'url(' + item.src + ')';
	}
}

function addPicture(item){
	var imgPosition = document.getElementById('imgPositionCloser');
	if (imgPosition){
		var elem = document.createElement("img");
		elem.setAttribute("src", item.src);
		elem.setAttribute("height", 2*item.height);
		elem.setAttribute("width", 2*item.width);
		//elem.setAttribute("height", 100);
		elem.addEventListener("click", function(){
			if (selectedPicture)
				selectedPicture.style.border = 'none';
			elem.style.border = '1px solid #E8272C';
			//elem.style.display = 'block';
			//elem.style.margin = '0 auto';
			selectedPicture = elem;
		});
		
		imgPosition.appendChild(elem);
	}
}

function bodyKeyDownHandler(event){
	if (event.keyCode == 46) {
		deletePicture();
	}
}
function deletePicture(){
	if (selectedPicture != null) {
		var imgPosition = document.getElementById('imgPositionCloser');
		imgPosition.removeChild(selectedPicture);
		selectedPicture = null;
	}
}