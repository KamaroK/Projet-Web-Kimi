function login()
{
	var r = new XMLHttpRequest();
    r.addEventListener('readystatechange', function() 
	{
    	if (r.readyState === XMLHttpRequest.DONE && req2.status === 200) 
		{
       		document.main.username="recu"+r.responseText;
       		document.main.userpwd="recu"+r.responseText;
    	}
	});
    var page = frames['frame'].document;
	var lienFeuilleStyle = frm.createElement(link);
	lienFeuilleStyle.setAttribute(rel, stylesheet);
	lienFeuilleStyle.setAttribute(type, text/css);
	lienFeuilleStyle.setAttribute(href, style.css);
	page.head.appendChild(lienFeuilleStyle);
    var url = document.baseURI;
	
	r.open('POST', url, true);
    r.send(null);
    
}

function Jolie()
{
	var page = frames['frame'].document;
	var lienFeuilleStyle = frm.createElement(link);
	lienFeuilleStyle.setAttribute(rel, stylesheet);
	lienFeuilleStyle.setAttribute(type, text/css);
	lienFeuilleStyle.setAttribute(href, style.css);
	page.head.appendChild(lienFeuilleStyle);

}