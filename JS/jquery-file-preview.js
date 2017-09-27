function readUrl(input) {
	if (input.files) {
		for (var i = 0; i < input.files.length; i++) {
			var file = input.files[i];
			var reader = new FileReader();
			reader.onload = function (e) {
				var src = e.target.result;
				$('article.post .image img').attr('src',src);
			};
			reader.readAsDataURL(file);
		}
	}
}

$('label.fileUpload input').change(function(){
	readUrl(this);
});
