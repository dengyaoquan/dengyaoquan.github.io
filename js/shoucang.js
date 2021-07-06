function shoucang(){
	var url = window.document.location.href;
	try{
		window.external.AddFavourite(url,'Garraのblog');
	}catch(e){
		try{
			window.sidebar.AddPanel(url,'Garraのblog');
		}catch(e){
			alert('谢谢小可爱!按下Ctrl+D后点击确定就收藏成功啦!')
		}
	}
}
