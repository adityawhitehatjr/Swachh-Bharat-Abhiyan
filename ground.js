/*                                           This Game is created by Aditya with the help of WHITEHAT EDUCATION TECHNOLOGY PRIVATE LIMITED On Visual Studio Code
															                                We Request you not to Copy -Paste our coding without creditng it to us        
																						                                           JavaScript Coding     
																			                                           Project Name- Deadly Mission 2
															                                               Orignal Project Name- Supply Mission 2        
																						                                            JavaScript Coding                                                                                       */
class Ground {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    rectMode(CENTER);
    fill("blue");
    rect(pos.x, pos.y, this.width, this.height);
  }
};