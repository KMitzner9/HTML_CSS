<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Irish Button Example</title>
		<meta charset="utf-8">
	</head>
	<body>
		<button onclick="My_First_Function()">
			Click me!
		</button>
		<p id="Irish"></p>
	<script>
		function My_First_Function() {
			var String = "Kiss me, I'm Irish!";
			var result = String.fontcolor("green");
			document.getElementById("Irish").innerHTML = result;
		}
	</script>
	</body>
</html>