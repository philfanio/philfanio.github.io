	function show(c_Str,imgg)
	{if(document.all(c_Str).style.display=='none')
	{document.all(c_Str).style.display='block';
	document.all(imgg).src='default/images/sq.gif'}
	else{document.all(c_Str).style.display='none';
	document.all(imgg).src='default/images/zk.gif'}}