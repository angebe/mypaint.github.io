<!DOCTYPE html>
<html>
<head>
	<title>Paint | Dessiner, Ecrire</title>
	<meta name="description" content="Voici un paint en ligne, amusez vous ! ;)" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<link href="style1.css" rel="stylesheet" type="text/css" />
</head>
<body>
	<h1>My_Paint</h1>
	<div id="all">
		<canvas id="canvas" width="500" height="500"></canvas>
	</div>
	<aside>
		<label>
			Choose a color :
		</label>
		<input id="color" type="color">
		<label>
			Choose a size :
		</label>
		<input name="size" id="size" type="text" placeholder="Default : 1px">
		<button id="crayon" name="crayon">Crayon</button>
		<button id="rect" name="rect">Rectangle</button>
		<button id="rectA" name="rectA">Rect Plein</button>
		<button id="trait" name="trait">Trait</button>
		<button id="cercle" name="cercle">Cercle</button>
		<button id="cercleA" name="cercleA">Cercl Plein</button>
		<button id="texte" name="texte">Text</button>
		<div id="inputTEXT">
			<input type="text" name="text" id="valueTEXT">
			<input type="text" name="sizeText" id="sizeTEXT" placeholder="Text Size">
			<select id="fontTEXT">
				<option value="arial" selected="selected">Arial</option>
				<option value="verdana">Verdana</option>
				<option value="Times New Roman">Times New Roman</option>
				<option value="Courier New">Courier New</option>
				<option value="serif">Serif</option>
				<option value="sans-serif">Sans-Serif</option>
			</select>
			<a href="#" id="back">back</a>
		</div>
		<a href="#" id="clear" title="clear">Clear</a>
	</aside>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script type="text/javascript" src="script.js"></script>
</body>
</html> 
