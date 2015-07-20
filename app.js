$(document).ready(function($) {
	

	$('.marquee-copy').find('h1').css('display', 'none');
	$('#div_language').css('display', 'none');

	$('#start_img').bind('click', function(event) {
		$('#start_img').removeAttr('src');
		$('#start_img').attr('src' , 'images/microphone_yellow.png');
	});
	$('#start_img').removeAttr('src');
	$('#start_img').attr('src' , 'images/microphone_yellow.png');

	//add mic button
	$('#copy').after('<button type="button" class="btn btn-danger" id="clean">clean</button><button type="button" class="btn btn-success" id="code">code</button>');

	$('.btn-default').bind('click',function(){
		$('#final_span').text('');
	});

	$(function() {
		$(".lined").linedtextarea(
			{selectedLine: 1}
		);
	});


	
	//hide result
	//$('#preview').hide();

	$('#my_popup').popup({
	  opacity: 0.3,
	  transition: 'all 0.3s',
	  background: true
	});

	


$('#final_span').bind("DOMSubtreeModified",function(){
     var word =  $('#interim_span').text();
	 word	  =  word.trim();
	 console.log(word);
	    
	    var snippet = word;

		if (word == 'clean'  || word =='Clean') {
       		$('#interim_span').text('');
       		$('#final_span').text('');
		} 

		else if (word == 'input' || word =='Input') {
		   	snippet = '<input type="checkbox" />';
		}

		else if (word == 'form' || word == 'forum'  || word =='Forum'  || word =='phone')  {
		   	snippet = '<form action="" method="POST" role="form"><legend>Form title</legend><div class="form-group"><label for="">label</label><input type="text" class="form-control" id="" placeholder="Input field"></div><button type="submit" class="btn btn-primary">Submit</button></form>';
		}

		else if (word == 'button' || word == 'Martin' || word =='but then' || word =='Boston'  || word=='Button')  {
		   	snippet = '<button type="button" class="btn btn-sm btn-success">button</button>';
		}

		else if (word == 'table' || word=='Table')  {
		   	snippet = '<table class="table table-striped table-hover"><thead><tr><th>row1</th><th>row2Lorem ipsum</th><th>row3</th><th>row4</th></tr></thead><tbody><tr><td>text here</td><td>text here</td><td>text here</td><td>text here</td></tr><tr><td>text here</td><td>text here</td><td>text here</td><td>text here</td></tr><tr><td>text here</td><td>text here</td><td>text here</td><td>text here</td></tr><tr><td>text here</td><td>text here</td><td>text here</td><td>text here</td></tr></tbody></table>';
		}


		//html start here ------------------------------------------------------------------------------
		
		//Basic Tags--------
		else if (word == 'html' || word == 'HTML' ||   word == 'HDMIout')  {
		   	snippet = '<!DOCTYPE html><html><head><title>Page Title</title></head><body></body></html>';
		}
		else if (word == 'DOCTYPE' || word == 'duck dive' || word == 'Duct tape')  {
		   	snippet = '<!DOCTYPE>';
		}
		else if (word == 'title')  {
		   	snippet = '<title></title>';
		}
		else if (word == 'body')  {
		   	snippet = '<body></body>';
		}
		else if (word == 'lang')  {
		   	snippet = 'lang=""';
		}
		else if (word == 'h1' || word == 'H1')  {
		   	snippet = '<h1></h1>';
		}
		else if (word == 'h2' || word == 'H2')  {
		   	snippet = '<h2></h2>';
		}
		else if (word == 'h3' || word == 'H3')  {
		   	snippet = '<h3></h3>';
		}
		else if (word == 'h4' || word == 'H4')  {
		   	snippet = '<h4></h4>';
		}
		else if (word == 'h5' || word == 'H5')  {
		   	snippet = '<h5></h5>';
		}
		else if (word == 'h6' || word == 'H6')  {
		   	snippet = '<h6></h6>';
		}
		else if (word == 'br' || word == 'Break' ||word == 'break')  {
		   	snippet = '<br></br>';
		}
		else if (word == 'hr' || word == 'HR')  {
		   	snippet = '<hr></hr>';
		}//end Basic Tags


		//Formatting--------
		else if (word == 'image')  {
		   	snippet = '<img src="w3schools.jpg" alt="W3Schools.com" width="104" height="142">';
		}
		else if (word == 'pre')  {
		   	snippet = '<pre></pre>';
		}
		else if (word == 'table')  {
		   	snippet = '<!DOCTYPE html><html><head><title>Page Title</title></head><body></body></html>';
		}
		else if (word == 'table')  {
		   	snippet = '<!DOCTYPE html><html><head><title>Page Title</title></head><body></body></html>';
		}
		else if (word == 'table')  {
		   	snippet = '<!DOCTYPE html><html><head><title>Page Title</title></head><body></body></html>';
		}
		else if (word == 'table')  {
		   	snippet = '<!DOCTYPE html><html><head><title>Page Title</title></head><body></body></html>';
		}
		else if (word == 'table')  {
		   	snippet = '<!DOCTYPE html><html><head><title>Page Title</title></head><body></body></html>';
		}//end Formatting

		//Attribute--------
		else if (word == 'alt')  {
		   	snippet = 'alt';
		}
		else if (word == 'disabled')  {
		   	snippet = 'disabled';
		}
		else if (word == 'href')  {
		   	snippet = 'href=""';
		}
		else if (word == 'id')  {
		   	snippet = 'id=""';
		}
		else if (word == 'src')  {
		   	snippet = 'src=""';
		}
		else if (word == 'style')  {
		   	snippet = 'style=""';
		}
		else if (word == 'title')  {
		   	snippet = 'title=""';
		}
		else if (word == 'value')  {
		   	snippet = 'value=""';
		}//end attrbute


		//Formatting--------
		else if (word == 'b')  {
		   	snippet = '<b></b>';
		}
		else if (word == 'abbr')  {
		   	snippet = '<abbr></abbr>';
		}
		else if (word == 'address')  {
		   	snippet = '<address></address>';
		}
		else if (word == 'strong')  {
		   	snippet = '<strong></strong>';
		}
		else if (word == 'i')  {
		   	snippet = '<i></i>';
		}
		else if (word == 'em')  {
		   	snippet = '<em></em>';
		}
		else if (word == 'small')  {
		   	snippet = '<small></small>';
		}
		else if (word == 'mark')  {
		   	snippet = '<mark></mark>';
		}
		else if (word == 'del')  {
		   	snippet = '<del></del>';
		}
		else if (word == 'sub')  {
		   	snippet = '<sub></sub>';
		}
		else if (word == 'sup')  {
		   	snippet = '<sup></sup>';
		}
		else if (word == 'blockquote')  {
		   	snippet = '<blockquote></blockquote>';
		}
		else if (word == 'cite')  {
		   	snippet = '<cite></cite>';
		}
		else if (word == 'code')  {
		   	snippet = '<code></code>';
		}
		else if (word == 'del')  {
		   	snippet = '<del></del>';
		}else if (word == 'dfn')  {
		   	snippet = '<dfn></dfn>';
		}else if (word == 'em')  {
		   	snippet = '<em></em>';
		}//end Formatting


 	// 	var quote = $.text(snippet);  
		// $('#input').append(quote);

		var text = snippet; 

		text = style_html(text);

		$('#editor').val(function(_, val){
		    return val + ' ' + text + '\n'; 
		}); 

		 // $('textarea').highlightTextarea({
		 //    words: ['Lorem ipsum', 'vulputate']
		 //  });


		
});

 SyntaxHighlighter.all();
		
});

