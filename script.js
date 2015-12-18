// Créer un PaperScope Global
paper.install(window);

// Exécuter le code une fois que le DOM est prêt
window.onload = function() {

  // Créer un projet vide et une view pour le canvas
  paper.setup('myCanvas');

  /* ============= Commencer à coder ici ==================*/
  var ovule = new Path.Circle({
    center: view.center,
    justification: 'center',
    radius: 30,
    fillColor: 'red'
  });

  var destination = Point.random().multiply(view.size);

  view.onFrame = function(event) {
    ovule.fillColor.hue += 1;
    var vector = destination.subtract(ovule.position);
    ovule.position = ovule.position.add(vector.divide(30));
    ovule.content = Math.round(vector.length);
    if (vector.length < 75) {
      destination = Point.random().multiply(view.size);
    }
  }

  var headSperm = new Path.Circle(new Point(600, 300), 10);
  headSperm.fillColor = 'white';

  var tailSperm = new Path({
    segments: [
      [600, 300],
      [680, 300],
    ],
    strokeWidth: 5,
    strokeJoin: 'round',
    strokeColor: 'white',
    strokeCap: 'round',
  });

  /*=================== Fin du code ici ===================*/

}; // Fin de la fonction onload
