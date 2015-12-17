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

    // Create a point whose x is between 0 and 50,
    // and y is between 0 and 100
    var point = new Point(50, 100).multiply(Point.random());
    console.log(point);
    // Create a size whose width is between 0 and 50,
    // and height is between 0 and 100
    var size = new Size(50, 100).multiply(Size.random());
    console.log(size);

    var ctx = canvas.getContext("2d");
    var tunnel = document.getElementByClass("all");
    ctx.drawImage(tunnel, 0, 0);









    /*=================== Fin du code ici ===================*/

  } // Fin de la fonction onload
