class AJAX
{
constructor()
{
	let responseText = "";

	//
	this.Send = function( url,method = "GET" )
	{
		let request = new XMLHttpRequest();
		request.onreadystatechange = function()
		{
			if( this.readyState == 4 && this.status == 200 )
			{
				responseText = this.responseText;

				return true;
			}
			else
			{
				return false;
			}
		}
		request.open( method,url,true );
		request.send();
	}

	this.Response = function()
	{
		return responseText;
	}
}
}
