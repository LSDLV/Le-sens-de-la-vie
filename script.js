// Créer un PaperScope Global
paper.install(window);

// Exécuter le code une fois que le DOM est prêt
window.onload = function() {

    // Créer un projet vide et une view pour le canvas
    paper.setup('myCanvas');

	/* ============= Commencer à coder ici ==================*/
  	var path = new Path.Circle({
  	center: view.center,
  	justification: 'center',
  	radius: 30,
  	fillColor: 'red'
	});

	var destination = Point.random().multiply(view.size);

	view.onFrame=function(event) {
	    path.fillColor.hue += 1;
		var vector = destination.subtract(path.position);
		path.position=path.position.add(vector.divide(30)) ;
		path.content = Math.round(vector.length);
		if (vector.length < 75) {
		destination = Point.random().multiply(view.size);
		}
	}

	/*=================== Fin du code ici ===================*/

} // Fin de la fonction onload

