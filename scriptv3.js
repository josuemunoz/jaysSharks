// JavaScript Document
// https://www.googleapis.com/youtube/v3/search?part=snippet&q=zbrush&key=AIzaSyDnItGpLyOPl7IlB3GJ1B-j6MCE0eu80co
$(document).ready(function(){
    

function search_api(){
		var s = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=great whites&maxResults=25&key=AIzaSyDnItGpLyOPl7IlB3GJ1B-j6MCE0eu80co";
		$.get(s, function(data){
				
				$.each(data.items, function(i,items){
					//console.log(data.items[i].snippet.title);
					$("ul").append('<li><a id="'+data.items[i].id.videoId+'" href="#page2">"'+data.items[i].snippet.title+'"</a></li>');
					
				});
					
			$("ul").listview('refresh');
			$("a").click( function(){
							showVideo_api(this.id);
						});
		});
}
		
function showVideo_api(id){
	var src = 'http://www.youtube.com/embed/'+id;
		$("iframe").attr("src", src);
	}


search_api();
});
 
