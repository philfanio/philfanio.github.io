
function showtable_rhl(){
	var tableid='table';
	var overcolor='#f1f1f1';
	var color1='#FFFFFF';
	var color2='#f7f2ef';
	var tablename=document.getElementsByTagName(tableid);

	for(var j=0 ;j<tablename.length;j++){
		var tr=tablename[j].getElementsByTagName("tr");
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
				tr[i].className="color1_rhl";
			}else{
				tr[i].className="color2_rhl";
			}
		}
    }
}
