// Créer un PaperScope Global
paper.install(window);

// Exécuter le code une fois que le DOM est prêt
window.onload = function() {

    // Créer un projet vide et une view pour le canvas
    paper.setup('myCanvas');

	/* ============= Commencer à coder ici ==================*/
  /*création du cercle avec un radius de 30*/
  var path = new Path.Circle({
  	center: view.center,
  	justification: 'center',
  	radius: 30,
  	fillColor: 'red'
});
var destination = Point.random().multiply(view.size);/*définir une destination aléatoire du cercle dans la fenetre*/
view.onFrame=function(event) {
  path.fillColor.hue += 1; /*changement de la couleur du cercle en rajoutant 1 à la teinte */
	var vector = destination.subtract(path.position);/*le vecteur=à la différence entre la position du cercle et le point de destination*/
	path.position=path.position.add(vector.divide(30)) ;/*ajouter 1/30e du vecteur à la propriété position pour déplcer le cercle*/
	path.content = Math.round(vector.length);/*définir le contenu du chemin : la distance qu'il doit parcourir*/
	if (vector.length < 75) {     /*si la distance entre le chemin et la destination est inf à 75 alors destination=redéfini un point aléatoire*/
		destination = Point.random().multiply(view.size);         /*dans la taille de la fenêtre*/
	}
}
}



// view.draw();
/*=================== Fin du code ici ===================
function enter(event) {
    this.fillColor = 'red';
}

function leave(event) {
    this.fillColor = 'black';
}

// When the mouse is pressed:
function onMouseDown(event) {
    // Create a circle shaped path at the position of the mouse:
    var path = new Path.Circle(event.point, 25);
    path.fillColor = 'black';

    // When the mouse enters the item, set its fill color to red:
    path.onMouseEnter = enter;

    // When the mouse leaves the item, set its fill color to black:
    path.onMouseLeave = leave;
}
var text = new PointText ({
	point: view.center,
	justification: 'center',
	fontSize: 30,
	fillColor: 'black'
});
}

function enter(event) {
    this.fillColor = 'red';
}
function leave(event) {
    this.fillColor = 'black';
}
function onMouseDown(event) {
    // Create a circle shaped path at the position of the mouse:
    var text = new PointText ;
    text.fillColor = 'black';
    text.content = "Le sens de la vie"

    // When the mouse enters the item, set its fill color to red:
    text.onMouseEnter = enter;
    // When the mouse leaves the item, set its fill color to black:
    text.onMouseLeave = leave;
    }
}



};*/
/* Fin de la fonction onload*/
