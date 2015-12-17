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
