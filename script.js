// Créer un PaperScope Global
paper.install(window);

// Exécuter le code une fois que le DOM est prêt
window.onload = function() {

    // Créer un projet vide et une view pour le canvas
    paper.setup('myCanvas');

<<<<<<< HEAD
	/* ============= Commencer à coder ici ==================*/
	/ Create a centered text item at the center of the view:
	var text = new PointText({
		point: view.center,
		justification: 'center',
		fontSize: 30,
		fillColor: 'white'
	});

	// Define a random point in the view, which we will be moving
	// the text item towards.
	var destination = Point.random() * view.size;

	function onFrame(event) {
		// Each frame, move the path 1/30th of the difference in position
		// between it and the destination.

		// The vector is the difference between the position of
		// the text item and the destination point:
		var vector = destination - text.position;

		// We add 1/30th of the vector to the position property
		// of the text item, to move it in the direction of the
		// destination point:
		text.position += vector / 30;

		// Set the content of the text item to be the length of the vector.
		// I.e. the distance it has to travel still:
		text.content = Math.round(vector.length);

		// If the distance between the path and the destination is less
		// than 5, we define a new random point in the view to move the
		// path to:
		if (vector.length < 5) {
			destination = Point.random() * view.size;
		}
	}
	/*=================== Fin du code ici ===================*/

} // Fin de la fonction onload
=======
    /* ============= Commencer à coder ici ==================*/

// mouveemnt du tetard
var path = new Path.Rectangle({
	point: [75, 75],
	size: [75, 75],
	strokeColor: 'blue'
});

view.onFrame = function(event) {

	path.rotate(5);
}
