// Créer un PaperScope Global
paper.install(window);

// Exécuter le code une fois que le DOM est prêt
window.onload = function() {

    // Créer un projet vide et une view pour le canvas
    paper.setup('myCanvas');


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
