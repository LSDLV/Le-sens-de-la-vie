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
  view.onFrame = function(event) {
    path.fillColor.hue += 1;
    var vector = destination.subtract(path.position);
    path.position = path.position.add(vector.divide(30));
    path.content = Math.round(vector.length);
    if (vector.length < 75) {
      destination = Point.random().multiply(view.size);
    }

  }
}



var sperm = new function() {
  var center = view.center;
  var size = 20;
  var partLength = 5;
  var mypath = new Path();
  for (var i = 0; i < size; i++) {
    mypath.add(center - [i * partLength, 0]);
  }
  path.strokeColor = 'white';


  var headpath = new Path.Oval({
    from: [0, 0],
    to: [12, 8],
    fillColor: 'red',
    strokeColor: null
  });
}

// view.draw();
/*=================== Fin du code ici ====
[]===============
// Create a circle shaped path at the center of the view,
// with a radius of 70:
var path = new Path.Circle({
	center: view.center,
	radius: 70,
	fillColor: 'red'
});

function onFrame(event) {
	// Each frame, change the fill color of the path slightly by
	// adding 1 to its hue:
	path.fillColor.hue += 1;
}

} // Fin de la fonction onload*/
