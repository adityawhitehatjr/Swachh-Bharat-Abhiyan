/*                                              This Game is created by Aditya with the help of WHITEHAT EDUCATION TECHNOLOGY PRIVATE LIMITED On Visual Studio Code
															     We Request you not to Copy -Paste our coding without creditng it to us        
																					  JavaScript Coding     
																			    Project Name- Deadly Mission 2
															                 Orignal Project Name- Supply Mission 2        
																						JavaScript Coding                                                                                       */

// Constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, dustbin, ground;

// Function Proload
function preload() {
	// Function Preload is EMPTY.
}

//Function Setup
function setup() {

	// Created Canvas
	createCanvas(1200, 700);

	// Created engine and engine. world.
	engine = Engine.create();
	world = engine.world;

	//Created the Bodies Here.
	paper = new Paper(75, 650);
	side1 = new Dustbin(900, 610, 20, 100);
	side2 = new Dustbin(1100, 610, 20, 100);
	side3 = new Dustbin(1000, 650, 200, 20);
	ground = new Ground(600, 670, 1200, 15);

	// Created Engine.run(engine).
	Engine.run(engine);

}

// Function Draw
function draw() {
	rectMode(CENTER);
	// Givem Background its colour here.
	background(0);
	paper.display();
	side1.display();
	side2.display();
	side3.display();
	ground.display();

	drawSprites();

}

// Function BallJump so ball jumps in box whenever Up Arrow is clicked.
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, { x: 85, y: -85 });
	}
}


