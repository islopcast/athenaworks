var Users = [];
	function show_profile(key){
		//set image profile with the same style like pdf
		$('#picture_profile').html(
			'<div style="position:relative">'+
			'<img src="'+Users[key].picture.large+'" class="img_back">'+
			'<img src="'+Users[key].picture.medium+'" class="img_front">'+
			'</div> '
		);
		//set the user's name
		$('#user').html(
			'<span class="white">'+Users[key].name.first+' '+Users[key].name.last+'</span><br>'
		);
		//set user's information
		$('#data_user').html(
			'<label>Adress:</label><br><strong>'+Users[key].location.street+'<br>'+Users[key].location.city+
			'<p>'+Users[key].location.state+' '+Users[key].location.postcode+'</strong></p>'+
			'<p><label>Email:</label><br><strong>'+Users[key].email+'</strong></p>'+
			'<p><label>Phone:</label><br><strong>'+Users[key].phone+'</strong></p>'+
			'<p><label>Cell:</label><br><strong>'+Users[key].cell+'</strong></p>'+
			'<p><label>Nat:</label><br><strong>'+Users[key].nat+'</strong></p>'
		);
	}
	//Connect to API and get users information, 20 results with the previous selection
	function getData(selection){
		$('#profile_table').html('');
		$.ajax({
			type: "GET",
			url: 'https://randomuser.me/api/?results=20'+selection,
			dataType: "json",
			success: function(data){
				Users = data.results;
				//set users into the table
				$('#profile_table').append(
					'<tr>'
				);
				for (var i = 0; i < data.results.length; i++) {
					if (i!=0 && i%2 == 0) {
						$('#profile_table').append(
							'</tr>'+
							'<tr>'
						);
					}
					$("#profile_table").append(
							'<td class="pointer" onclick="show_profile('+i+')">'+
								'<table>'+
									'<td><img src="'+data.results[i].picture.thumbnail+'" class="pre_img"></td>'+
									'<td><strong>'+data.results[i].name.first+' '+data.results[i].name.last+'</strong></td>'+
								'</table>'+
							'</td>'
					);	

				}
				$('#profile_table').append(
					'</tr>'
				);
			    	
			    
			},
			error: function(data) {
				alert('error');
			}
		});	
		
	}