function onloadEvent(func){
	var one=window.onload
	if(typeof window.onload!='function'){
		window.onload=func
	}
	else{
		window.onload=function(){
			one();
			func();
		}
	}
}
function showtable(){
	var tableid='table';
	var overcolor='#f1f1f1';
	var color1='#FFFFFF';
	var color2='#f7f2ef';
	var tablename=document.getElementById(tableid)
	var tr=tablename.getElementsByTagName("tr")
	for(var i=1 ;i<tr.length;i++){
		tr[i].onmouseover=function(){
			this.style.backgroundColor=overcolor;
		}
		tr[i].onmouseout=function(){
			if(this.rowIndex%2==0){
				this.style.backgroundColor=color1;
			}else{
				this.style.backgroundColor=color2;
			}
		}
		if(i%2==0){
			tr[i].className="color1";
		}else{
			tr[i].className="color2";
		}
	}
}
onloadEvent(showtable);