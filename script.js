// Créer un PaperScope Global
paper.install(window);

// Exécuter le code une fois que le DOM est prêt
window.onload = function() {

    // Créer un projet vide et une view pour le canvas
    paper.setup('myCanvas');

	/* ============= Commencer à coder ici ================== */

	// Create a rectangle shaped path with its top left point at
	// {x: 75, y: 75} and a size of {width: 75, height: 75}
	var path = new Path.Rectangle({
		point: [75, 75],
		size: [75, 75],
		fillColor: 'black'
	});

	view.onFrame = function(event) {
		// Each frame, rotate the path by 3 degrees:
		path.rotate(3);
	}

	var myPoint = new Point({
		point: [100, 100],
		size: [75, 75],
		fillColor: 'gold'
	});
		
	

    /* =================== Fin du code ici =================== */

  } // Fin de la fonction onload*/

