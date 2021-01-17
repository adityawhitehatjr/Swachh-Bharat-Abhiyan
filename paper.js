/*                                           This Game is created by Aditya with the help of WHITEHAT EDUCATION TECHNOLOGY PRIVATE LIMITED On Visual Studio Code
															                                We Request you not to Copy -Paste our coding without creditng it to us        
																						                                           JavaScript Coding     
																			                                           Project Name- Deadly Mission 2
															                                               Orignal Project Name- Supply Mission 2        
																						                                            JavaScript Coding                                                                                       */
class Paper {
  constructor(x, y) {
    var options = {
      'restitution': 0.3,
      'friction': 0.5,
      'density': 1.2
    }
    this.body = Bodies.circle(x, y, 20, options);

    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    ellipseMode(RADIUS);
    fill("red");
    ellipse(pos.x, pos.y, 20, 20);
  }
}