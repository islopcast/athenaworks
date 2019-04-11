<!DOCTYPE html>
<html>
	<head>
	    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Quicksand" />
	    <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js"></script>
	    <link rel="stylesheet" href="style.css">
	    <script type="text/javascript" src="main.js"></script>
	    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	    <meta charset="UTF-8">
	    <link rel="shortcut icon" href="">
	    <title>Test for Developers - Frontend</title>
	</head>
	<body>
		<div class="my_index">
			<div class="row">
				<div class="group_users">
					<h4>Users</h4>	
					<p>If you want to get contact information to specific user, just select group and then select him from the list below.</p>
					<label>Select group of users</label>
					<select id="Select" class="my_select" onchange="getData(this.value)">
						<option value="" selected disabled>Select an option</option>
						<option value="&gender=female">Female</option>
						<option value="&gender=male">Male</option>
						<option value="&nat=us">American</option>
						<option value="&nat=fr">French</option>
						<option value="">Free</option>
					</select>
					<center>
						<table class="table_profile">
							<tbody id="profile_table">
							</tbody>
						</table>
					</center>
				</div>
				<div class="user_profile">
					<div class="picture" id="picture_profile">
						
					</div>
					<div class="user">
						<center>
							<div id="user">
								
							</div>
						</center>
						<div class="data_user" id="data_user">
							
						</div>
					</div>
				</div>		
			</div>
		</div>
	</body>
</html>