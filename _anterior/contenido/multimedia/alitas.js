(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.alitasv06 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// alitas
	this.instance = new lib.Alitas_mc();
	this.instance.setTransform(382,158.6,0.8,0.8,0,0,0,132,158.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:452},19).wait(1));

	// textos
	this.instance_1 = new lib.Textos_mc();
	this.instance_1.setTransform(160,139);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(20));

	// fondo
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#CCA2C0").beginStroke().moveTo(-350,70).lineTo(-350,-70).lineTo(350,-70).lineTo(350,70).closePath();
	this.shape.setTransform(350,70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.6,700,286.1);


// symbols:
(lib.Animar4 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(62,15.3).curveTo(59.6,14.6,57,12.5).curveTo(56.2,11.9,55.8,11.5).curveTo(55.4,11,55.4,10.7).curveTo(55.3,10.3,55.5,10.1).lineTo(56,9.7).curveTo(57.1,9.1,58.5,9.1).curveTo(59.9,9.2,61,9.8).curveTo(62.5,10.6,63.8,10.8).curveTo(65,11.1,66,11.1).curveTo(67.1,11,67.9,10.7).curveTo(68.7,10.2,69.5,9.5).curveTo(70.1,8.8,70.5,8.1).curveTo(70.8,7.3,70.8,6.6).curveTo(70.9,6.1,70.7,5.5).curveTo(70.5,5,70.2,4.7).curveTo(69.5,4.2,68.6,4.1).curveTo(67.8,4,66.5,4.2).curveTo(64.8,4.4,63.2,3.6).curveTo(61.6,2.7,60.5,0.9).curveTo(59.5,-0.6,60.9,-1).curveTo(64.5,-2.2,66.9,-3.4).curveTo(69.3,-4.5,70.8,-5.5).curveTo(72.2,-6.6,72.7,-7.4).curveTo(73.2,-8.2,72.7,-8.8).curveTo(72.5,-9.2,71.8,-9.2).lineTo(70.9,-9.1).lineTo(69.8,-8.6).lineTo(68.7,-8).lineTo(67.6,-7.4).curveTo(66.9,-6.8,65.9,-6.7).curveTo(64.9,-6.6,63.9,-6.6).curveTo(62.9,-6.7,62,-7.1).curveTo(61,-7.5,60.4,-8).curveTo(59.1,-9.2,60,-10.3).curveTo(60.6,-11,61.5,-11.9).curveTo(62.4,-12.7,63.5,-13.5).curveTo(64.5,-14.1,65.8,-14.7).curveTo(67,-15.3,68.3,-15.6).lineTo(70.4,-15.9).curveTo(71.5,-15.9,72.8,-15.7).curveTo(74,-15.4,75.3,-14.6).curveTo(76.5,-13.9,77.8,-12.5).curveTo(79,-10.9,79.5,-9.3).curveTo(80,-7.8,79.9,-6.4).curveTo(79.8,-5.1,79.2,-3.9).curveTo(78.6,-2.8,77.7,-2).curveTo(76.7,-1.2,75.3,-0.3).curveTo(73.8,0.4,72.1,1.1).lineTo(73.8,1.8).curveTo(74.6,2.2,75.4,2.7).curveTo(76.7,3.9,77.4,5.2).curveTo(78,6.4,78.1,7.6).curveTo(78.2,8.8,77.8,10).curveTo(77.4,11.2,76.5,12.2).curveTo(74.6,14.5,72.2,15.3).curveTo(69.8,16.1,66.8,16.1).curveTo(64.5,16.1,62,15.3).closePath().moveTo(-75.2,16).lineTo(-77.1,15.5).curveTo(-78,15.3,-78.6,14.9).curveTo(-79.3,14.5,-79.7,13.9).curveTo(-80,13.4,-79.8,12.4).curveTo(-79.5,11.6,-79.2,9.5).curveTo(-78.9,7.5,-78.7,4.8).lineTo(-78.3,-0.6).lineTo(-77.8,-5.7).lineTo(-77.4,-9.8).curveTo(-77.1,-11.4,-76.7,-11.6).lineTo(-73.7,-13).lineTo(-70.3,-14.5).curveTo(-68.5,-15,-66.7,-15.5).curveTo(-65,-15.9,-63.3,-16).curveTo(-61.6,-16,-60.2,-15.5).curveTo(-58.8,-15.2,-57.8,-14.1).curveTo(-56.5,-12.7,-55.5,-11.2).curveTo(-54.5,-9.6,-53.9,-7.3).curveTo(-53.7,-6.3,-53.8,-5.3).curveTo(-53.9,-4.3,-54.3,-3.5).curveTo(-54.7,-2.5,-55.4,-1.8).curveTo(-56,-1,-56.8,-0.2).curveTo(-58,1,-59.7,2.1).curveTo(-61.4,3.3,-63.4,4.3).curveTo(-65.4,5.3,-67.6,6.2).curveTo(-69.9,6.9,-72,7.5).lineTo(-72.8,11.5).lineTo(-73.5,15.2).curveTo(-73.7,15.8,-74,16).lineTo(-74.5,16.1).lineTo(-75.2,16).closePath().moveTo(-65.7,-8.5).curveTo(-67,-8.2,-68.3,-7.6).lineTo(-69.4,-3.6).lineTo(-70.5,0.8).curveTo(-67.9,-0.1,-66,-1.2).curveTo(-64.1,-2.4,-62.9,-3.6).curveTo(-61.6,-4.9,-61.1,-6).curveTo(-60.6,-7.2,-60.9,-8).curveTo(-61,-8.4,-61.7,-8.7).curveTo(-62.4,-8.9,-63.4,-8.9).curveTo(-64.4,-8.8,-65.7,-8.5).closePath().moveTo(5.2,15.8).lineTo(3.8,15.4).lineTo(2.4,14.9).curveTo(1.8,14.7,1.4,14.3).curveTo(1,13.9,0.8,13.4).curveTo(0.6,13,0.8,12.3).curveTo(0.9,10.6,1.2,8.1).lineTo(2,2.7).lineTo(3,-2.9).lineTo(4.1,-8.2).lineTo(2,-8).curveTo(1.1,-7.9,0.4,-7.6).curveTo(-0.5,-7.5,-1.1,-7.6).curveTo(-1.6,-7.7,-2.3,-8.5).curveTo(-3.1,-9.2,-3.6,-10.3).lineTo(-5.1,-4.9).lineTo(-6.9,1.9).lineTo(-8.6,8.8).lineTo(-10,14.6).curveTo(-10.2,16,-12.2,15.5).curveTo(-13.8,15.3,-15.5,14.6).curveTo(-17.1,14,-17.8,12.5).lineTo(-18.8,9.9).lineTo(-19.9,6.7).lineTo(-20.9,3.2).lineTo(-22,-0.6).lineTo(-22.8,3.9).lineTo(-23.6,8.1).lineTo(-24.2,11.9).lineTo(-24.7,15).curveTo(-24.9,15.5,-25.2,15.8).curveTo(-25.5,15.9,-26.5,15.6).lineTo(-28.2,15.2).curveTo(-29.1,14.9,-29.9,14.4).curveTo(-30.7,14,-31,13.5).curveTo(-31.2,13,-31.2,12.1).lineTo(-30.9,9.3).lineTo(-30.5,5.3).lineTo(-29.9,0.3).lineTo(-29.1,-4.9).lineTo(-28.3,-9.9).lineTo(-27.5,-14.2).curveTo(-27.3,-15.2,-26.6,-15.5).curveTo(-26,-15.8,-24.9,-15.5).lineTo(-22.3,-14.7).curveTo(-21,-14.3,-19.6,-13.6).curveTo(-18.5,-13.2,-18.1,-12.5).curveTo(-17.6,-11.8,-17.4,-10.4).lineTo(-16.9,-7.8).lineTo(-16.3,-4.3).lineTo(-15.5,-0.3).lineTo(-14.7,3.5).curveTo(-14,-1.3,-12.9,-5.8).curveTo(-11.9,-10.4,-10.8,-14.3).curveTo(-10.5,-15.3,-9.9,-15.5).curveTo(-9.3,-15.8,-8.2,-15.5).lineTo(-7.2,-15.3).lineTo(-6.4,-15).lineTo(-5.5,-14.5).lineTo(-4.4,-13.9).lineTo(-4.3,-13.8).lineTo(-4.1,-13.9).curveTo(-2,-14.4,0.7,-14.7).lineTo(6.2,-15.4).lineTo(11.7,-15.9).lineTo(16.5,-16.1).curveTo(17.6,-16.1,18.1,-15.9).curveTo(18.6,-15.7,18.9,-15.3).curveTo(19.6,-14.4,20.1,-13.5).curveTo(20.6,-12.4,20.8,-11.6).curveTo(21.1,-10.7,20.9,-10.4).curveTo(20.6,-10.1,19.5,-10).lineTo(16.5,-9.8).lineTo(13.1,-9.4).lineTo(11.5,-3.1).lineTo(9.9,3.3).lineTo(8.5,9.5).lineTo(7.3,15.2).curveTo(7.3,15.7,7,15.9).curveTo(6.7,16,6.3,16).lineTo(5.2,15.8).closePath().moveTo(-45,15.9).curveTo(-48.2,15.6,-50.3,14.4).curveTo(-51.2,13.9,-52,13.3).curveTo(-52.8,12.6,-53.4,11.6).curveTo(-54.1,10.3,-54.5,8.6).curveTo(-54.8,6.8,-54.8,4.7).curveTo(-54.8,2.7,-54.5,0.3).lineTo(-53.8,-4.5).lineTo(-52.7,-9.3).lineTo(-51.5,-14).curveTo(-51.2,-15.1,-50.6,-15.3).curveTo(-50,-15.5,-48.9,-15.1).curveTo(-47.8,-14.7,-46.8,-14.3).curveTo(-45.8,-13.7,-44.9,-13.1).curveTo(-42.9,-11.7,-43.6,-9.5).lineTo(-44.8,-5.5).lineTo(-45.9,-1).lineTo(-46.9,3.4).curveTo(-47.2,5.4,-47.3,7.1).curveTo(-47.4,8.8,-47.1,9.9).curveTo(-46.9,11.1,-46.1,11.3).curveTo(-45.1,11.5,-44.2,10.4).curveTo(-43.2,9.1,-42.4,7.1).curveTo(-41.5,4.9,-40.8,2.2).curveTo(-40,-0.6,-39.3,-3.5).lineTo(-38.1,-9.3).lineTo(-37.2,-14.4).curveTo(-37.1,-15.5,-36.4,-15.6).curveTo(-35.6,-15.9,-34.6,-15.6).curveTo(-33.6,-15.4,-32.4,-14.7).lineTo(-30.3,-13.6).lineTo(-29.5,-13).lineTo(-29.1,-12.5).curveTo(-29,-12.2,-29.1,-11.8).lineTo(-29.2,-11).curveTo(-30.3,-5.9,-31.4,-1.6).curveTo(-32.5,2.8,-33.7,6.1).curveTo(-34.9,9.4,-36.4,11.6).curveTo(-37.8,13.9,-39.6,14.9).curveTo(-40.8,15.5,-42.1,15.7).curveTo(-43,15.9,-44.1,15.9).lineTo(-45,15.9).closePath().moveTo(29.3,15.8).lineTo(26.5,15.3).curveTo(25,15,23.9,14.4).curveTo(22.9,13.9,21.9,13.1).curveTo(21,12.3,20.5,11.4).curveTo(19.6,9.7,19.2,7.6).curveTo(18.7,5.5,18.8,3.2).curveTo(18.8,0.9,19.3,-1.5).curveTo(19.8,-3.9,20.8,-6.2).curveTo(21.8,-8.4,23.2,-10.5).curveTo(24.6,-12.5,26.5,-14.1).curveTo(27.7,-15.1,29.5,-15.6).curveTo(31.2,-16.1,32.8,-15.9).curveTo(34.9,-15.5,36.7,-14.8).curveTo(38.6,-14.2,39.8,-13.2).curveTo(41.2,-12,41.8,-10.9).curveTo(42.4,-9.6,42.7,-8).curveTo(43.1,-5.3,42.9,-2.3).curveTo(42.7,0.8,41.8,3.8).curveTo(41,6.9,39.5,9.6).curveTo(38.1,12.2,36,14.2).curveTo(34.5,15.3,32.9,15.6).curveTo(31.9,15.9,30.7,15.9).lineTo(29.3,15.8).closePath().moveTo(32.3,-9).curveTo(31.4,-8.1,30.4,-6.5).curveTo(29.5,-5,28.7,-3.2).curveTo(27.9,-1.4,27.4,0.4).curveTo(26.9,2.1,26.7,3.9).curveTo(26.4,5.7,26.5,7.2).curveTo(26.6,8.8,27,9.9).curveTo(27.5,11,28.3,11.4).curveTo(29,11.6,29.9,11).curveTo(30.7,10.4,31.5,9.2).curveTo(32.3,8,33.1,6.3).curveTo(33.8,4.5,34.4,2.5).curveTo(34.8,0.8,35.1,-1.2).curveTo(35.4,-3.2,35.4,-5).curveTo(35.4,-6.8,35.1,-8.1).curveTo(34.7,-9.4,34,-9.6).lineTo(33.7,-9.7).curveTo(33,-9.7,32.3,-9).closePath();
	this.shape.setTransform(-1.5,5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-81.4,-11,159.8,32.2);


(lib.Animar3 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(60.2,16.1).lineTo(59.6,15.9).lineTo(59.1,15.4).lineTo(58.4,15).lineTo(57.6,14.3).lineTo(56.8,13.5).lineTo(56.1,12.8).lineTo(55.7,12.3).lineTo(55.4,11.6).curveTo(55.3,11.2,55.5,10.9).curveTo(55.6,10.5,56,10.2).curveTo(57.9,8.8,60,7).curveTo(62.1,5,64.1,3).curveTo(66.1,1.1,67.8,-0.9).curveTo(69.5,-2.9,70.7,-4.6).curveTo(71.9,-6.1,72.4,-7.3).curveTo(72.9,-8.4,72.4,-8.7).curveTo(72,-9,71.3,-8.9).curveTo(70.6,-8.7,69.8,-8.1).curveTo(68.9,-7.6,68,-6.7).lineTo(66.2,-5.1).curveTo(65.5,-4.6,64.7,-4.4).curveTo(63.8,-4.1,63,-4).curveTo(62.1,-4,61.2,-4.1).curveTo(60.3,-4.3,59.5,-4.6).curveTo(59,-4.7,58.7,-4.9).curveTo(58.4,-5.2,58.3,-5.6).curveTo(58.2,-6,58.4,-6.6).curveTo(58.6,-7.3,59.1,-8.2).curveTo(60.8,-11,63.3,-13).curveTo(65.8,-14.9,68.8,-15.5).curveTo(70.6,-15.8,72.1,-15.5).curveTo(73.7,-15.2,75,-14.5).curveTo(76.3,-13.9,77.3,-12.9).curveTo(78.3,-12.1,78.9,-11.1).curveTo(79.7,-9.8,79.9,-8.7).curveTo(80.1,-7.5,79.9,-6.3).curveTo(79.7,-5.2,79.1,-4).curveTo(78.5,-2.8,77.7,-1.6).curveTo(76.9,-0.2,75.6,1.4).curveTo(74.3,2.9,72.7,4.4).curveTo(71.2,6,69.5,7.4).curveTo(67.8,8.9,66.2,10.1).curveTo(67.7,9.8,69.2,9.7).lineTo(72,9.6).curveTo(72.8,9.6,73.3,9.8).curveTo(73.9,10.1,74.4,10.7).lineTo(75.2,11.9).lineTo(75.7,13.2).curveTo(76,13.8,75.8,14.1).curveTo(75.5,14.3,74.7,14.4).lineTo(71.7,14.6).lineTo(68.3,15).lineTo(65,15.4).lineTo(62.3,16).lineTo(61,16.1).lineTo(60.2,16.1).closePath().moveTo(-75.3,16).lineTo(-77.2,15.5).curveTo(-78.1,15.3,-78.7,14.9).curveTo(-79.4,14.5,-79.8,13.9).curveTo(-80.1,13.4,-79.9,12.4).curveTo(-79.6,11.6,-79.3,9.5).curveTo(-79,7.5,-78.8,4.8).lineTo(-78.4,-0.6).lineTo(-77.9,-5.7).lineTo(-77.5,-9.8).curveTo(-77.2,-11.4,-76.8,-11.6).lineTo(-73.8,-13).lineTo(-70.4,-14.5).curveTo(-68.6,-15,-66.8,-15.5).curveTo(-65.1,-15.9,-63.4,-16).curveTo(-61.7,-16,-60.3,-15.5).curveTo(-58.9,-15.2,-57.9,-14.1).curveTo(-56.6,-12.7,-55.6,-11.2).curveTo(-54.6,-9.6,-54,-7.3).curveTo(-53.8,-6.3,-53.9,-5.3).curveTo(-54,-4.3,-54.4,-3.5).curveTo(-54.8,-2.5,-55.5,-1.8).curveTo(-56.1,-1,-56.9,-0.2).curveTo(-58.1,1,-59.8,2.1).curveTo(-61.5,3.3,-63.5,4.3).curveTo(-65.5,5.3,-67.7,6.2).curveTo(-70,6.9,-72.1,7.5).lineTo(-72.9,11.5).lineTo(-73.6,15.2).curveTo(-73.8,15.8,-74.1,16).lineTo(-74.6,16.1).lineTo(-75.3,16).closePath().moveTo(-65.8,-8.5).curveTo(-67.1,-8.2,-68.4,-7.6).lineTo(-69.5,-3.6).lineTo(-70.6,0.8).curveTo(-68,-0.1,-66.1,-1.2).curveTo(-64.2,-2.4,-63,-3.6).curveTo(-61.7,-4.9,-61.2,-6).curveTo(-60.7,-7.2,-61,-8).curveTo(-61.1,-8.4,-61.8,-8.7).curveTo(-62.5,-8.9,-63.5,-8.9).curveTo(-64.5,-8.8,-65.8,-8.5).closePath().moveTo(5.1,15.8).lineTo(3.7,15.4).lineTo(2.3,14.9).curveTo(1.7,14.7,1.3,14.3).curveTo(0.9,13.9,0.7,13.4).curveTo(0.5,13,0.7,12.3).curveTo(0.8,10.6,1.1,8.1).lineTo(1.9,2.7).lineTo(2.9,-2.9).lineTo(4,-8.2).lineTo(1.9,-8).curveTo(1,-7.9,0.3,-7.6).curveTo(-0.6,-7.5,-1.2,-7.6).curveTo(-1.7,-7.7,-2.4,-8.5).curveTo(-3.2,-9.2,-3.7,-10.3).lineTo(-5.2,-4.9).lineTo(-7,1.9).lineTo(-8.7,8.8).lineTo(-10.1,14.6).curveTo(-10.3,16,-12.3,15.5).curveTo(-13.9,15.3,-15.6,14.6).curveTo(-17.2,14,-17.9,12.5).lineTo(-18.9,9.9).lineTo(-20,6.7).lineTo(-21,3.2).lineTo(-22.1,-0.6).lineTo(-22.9,3.9).lineTo(-23.7,8.1).lineTo(-24.3,11.9).lineTo(-24.8,15).curveTo(-25,15.5,-25.3,15.8).curveTo(-25.6,15.9,-26.6,15.6).lineTo(-28.3,15.2).curveTo(-29.2,14.9,-30,14.4).curveTo(-30.8,14,-31.1,13.5).curveTo(-31.3,13,-31.3,12.1).lineTo(-31,9.3).lineTo(-30.6,5.3).lineTo(-30,0.3).lineTo(-29.2,-4.9).lineTo(-28.4,-9.9).lineTo(-27.6,-14.2).curveTo(-27.4,-15.2,-26.7,-15.5).curveTo(-26.1,-15.8,-25,-15.5).lineTo(-22.4,-14.7).curveTo(-21.1,-14.3,-19.7,-13.6).curveTo(-18.6,-13.2,-18.2,-12.5).curveTo(-17.7,-11.8,-17.5,-10.4).lineTo(-17,-7.8).lineTo(-16.4,-4.3).lineTo(-15.6,-0.3).lineTo(-14.8,3.5).curveTo(-14.1,-1.3,-13,-5.8).curveTo(-12,-10.4,-10.9,-14.3).curveTo(-10.6,-15.3,-10,-15.5).curveTo(-9.4,-15.8,-8.3,-15.5).lineTo(-7.3,-15.3).lineTo(-6.5,-15).lineTo(-5.6,-14.5).lineTo(-4.5,-13.9).lineTo(-4.4,-13.8).lineTo(-4.2,-13.9).curveTo(-2.1,-14.4,0.6,-14.7).lineTo(6.1,-15.4).lineTo(11.6,-15.9).lineTo(16.4,-16.1).curveTo(17.5,-16.1,18,-15.9).curveTo(18.5,-15.7,18.8,-15.3).curveTo(19.5,-14.4,20,-13.5).curveTo(20.5,-12.4,20.7,-11.6).curveTo(21,-10.7,20.8,-10.4).curveTo(20.5,-10.1,19.4,-10).lineTo(16.4,-9.8).lineTo(13,-9.4).lineTo(11.4,-3.1).lineTo(9.8,3.3).lineTo(8.4,9.5).lineTo(7.2,15.2).curveTo(7.2,15.7,6.9,15.9).curveTo(6.6,16,6.2,16).lineTo(5.1,15.8).closePath().moveTo(-45.1,15.9).curveTo(-48.3,15.6,-50.4,14.4).curveTo(-51.3,13.9,-52.1,13.3).curveTo(-52.9,12.6,-53.5,11.6).curveTo(-54.2,10.3,-54.6,8.6).curveTo(-54.9,6.8,-54.9,4.7).curveTo(-54.9,2.7,-54.6,0.3).lineTo(-53.9,-4.5).lineTo(-52.8,-9.3).lineTo(-51.6,-14).curveTo(-51.3,-15.1,-50.7,-15.3).curveTo(-50.1,-15.5,-49,-15.1).curveTo(-47.9,-14.7,-46.9,-14.3).curveTo(-45.9,-13.7,-45,-13.1).curveTo(-43,-11.7,-43.7,-9.5).lineTo(-44.9,-5.5).lineTo(-46,-1).lineTo(-47,3.4).curveTo(-47.3,5.4,-47.4,7.1).curveTo(-47.5,8.8,-47.2,9.9).curveTo(-47,11.1,-46.2,11.3).curveTo(-45.2,11.5,-44.3,10.4).curveTo(-43.3,9.1,-42.5,7.1).curveTo(-41.6,4.9,-40.9,2.2).curveTo(-40.1,-0.6,-39.4,-3.5).lineTo(-38.2,-9.3).lineTo(-37.3,-14.4).curveTo(-37.2,-15.5,-36.5,-15.6).curveTo(-35.7,-15.9,-34.7,-15.6).curveTo(-33.7,-15.4,-32.5,-14.7).lineTo(-30.4,-13.6).lineTo(-29.6,-13).lineTo(-29.2,-12.5).curveTo(-29.1,-12.2,-29.2,-11.8).lineTo(-29.3,-11).curveTo(-30.4,-5.9,-31.5,-1.6).curveTo(-32.6,2.8,-33.8,6.1).curveTo(-35,9.4,-36.5,11.6).curveTo(-37.9,13.9,-39.7,14.9).curveTo(-40.9,15.5,-42.2,15.7).curveTo(-43.1,15.9,-44.2,15.9).lineTo(-45.1,15.9).closePath().moveTo(29.2,15.8).lineTo(26.4,15.3).curveTo(24.9,15,23.8,14.4).curveTo(22.8,13.9,21.8,13.1).curveTo(20.9,12.3,20.4,11.4).curveTo(19.5,9.7,19.1,7.6).curveTo(18.6,5.5,18.7,3.2).curveTo(18.7,0.9,19.2,-1.5).curveTo(19.7,-3.9,20.7,-6.2).curveTo(21.7,-8.4,23.1,-10.5).curveTo(24.5,-12.5,26.4,-14.1).curveTo(27.6,-15.1,29.4,-15.6).curveTo(31.1,-16.1,32.7,-15.9).curveTo(34.8,-15.5,36.6,-14.8).curveTo(38.5,-14.2,39.7,-13.2).curveTo(41.1,-12,41.7,-10.9).curveTo(42.3,-9.6,42.6,-8).curveTo(43,-5.3,42.8,-2.3).curveTo(42.6,0.8,41.7,3.8).curveTo(40.9,6.9,39.4,9.6).curveTo(38,12.2,35.9,14.2).curveTo(34.4,15.3,32.8,15.6).curveTo(31.8,15.9,30.6,15.9).lineTo(29.2,15.8).closePath().moveTo(32.2,-9).curveTo(31.3,-8.1,30.3,-6.5).curveTo(29.4,-5,28.6,-3.2).curveTo(27.8,-1.4,27.3,0.4).curveTo(26.8,2.1,26.6,3.9).curveTo(26.3,5.7,26.4,7.2).curveTo(26.5,8.8,26.9,9.9).curveTo(27.4,11,28.2,11.4).curveTo(28.9,11.6,29.8,11).curveTo(30.6,10.4,31.4,9.2).curveTo(32.2,8,33,6.3).curveTo(33.7,4.5,34.3,2.5).curveTo(34.7,0.8,35,-1.2).curveTo(35.3,-3.2,35.3,-5).curveTo(35.3,-6.8,35,-8.1).curveTo(34.6,-9.4,33.9,-9.6).lineTo(33.6,-9.7).curveTo(32.9,-9.7,32.2,-9).closePath();
	this.shape.setTransform(-0.9,5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-80.9,-11,160,32.2);


(lib.Animar2 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-70.5,16).lineTo(-72.4,15.5).curveTo(-73.3,15.3,-73.9,14.9).curveTo(-74.6,14.5,-75,13.9).curveTo(-75.3,13.4,-75.1,12.4).curveTo(-74.8,11.6,-74.5,9.5).curveTo(-74.2,7.5,-74,4.9).lineTo(-73.6,-0.6).lineTo(-73.1,-5.7).lineTo(-72.7,-9.7).curveTo(-72.4,-11.3,-72,-11.5).lineTo(-69,-13).lineTo(-65.6,-14.4).curveTo(-63.8,-15,-62,-15.5).curveTo(-60.3,-15.9,-58.6,-15.9).curveTo(-56.9,-15.9,-55.5,-15.5).curveTo(-54.1,-15.1,-53.1,-14.1).curveTo(-51.8,-12.7,-50.8,-11.2).curveTo(-49.8,-9.6,-49.2,-7.3).curveTo(-49,-6.2,-49.1,-5.2).curveTo(-49.2,-4.3,-49.6,-3.4).curveTo(-50,-2.5,-50.7,-1.8).curveTo(-51.3,-1,-52.1,-0.2).curveTo(-53.3,1,-55,2.2).curveTo(-56.7,3.3,-58.7,4.3).curveTo(-60.7,5.3,-62.9,6.2).curveTo(-65.2,7,-67.3,7.5).lineTo(-68.1,11.5).lineTo(-68.8,15.2).curveTo(-69,15.8,-69.3,16).lineTo(-69.8,16.1).lineTo(-70.5,16).closePath().moveTo(-61,-8.5).curveTo(-62.3,-8.2,-63.6,-7.6).lineTo(-64.7,-3.6).lineTo(-65.8,0.8).curveTo(-63.2,-0,-61.3,-1.2).curveTo(-59.4,-2.4,-58.2,-3.6).curveTo(-56.9,-4.9,-56.4,-6).curveTo(-55.9,-7.2,-56.2,-7.9).curveTo(-56.3,-8.4,-57,-8.6).curveTo(-57.7,-8.8,-58.7,-8.8).curveTo(-59.7,-8.8,-61,-8.5).closePath().moveTo(9.9,15.8).lineTo(8.5,15.4).lineTo(7.1,14.9).curveTo(6.5,14.7,6.1,14.3).curveTo(5.7,14,5.5,13.5).curveTo(5.3,13,5.5,12.3).curveTo(5.6,10.6,5.9,8.1).lineTo(6.7,2.7).lineTo(7.7,-2.9).lineTo(8.8,-8.2).lineTo(6.7,-7.9).curveTo(5.8,-7.8,5.1,-7.6).curveTo(4.2,-7.4,3.6,-7.6).curveTo(3.1,-7.7,2.4,-8.5).curveTo(1.6,-9.2,1.1,-10.2).lineTo(-0.4,-4.9).lineTo(-2.2,2).lineTo(-3.9,8.8).lineTo(-5.3,14.7).curveTo(-5.5,16,-7.5,15.6).curveTo(-9.1,15.3,-10.8,14.7).curveTo(-12.4,14,-13.1,12.5).lineTo(-14.1,9.9).lineTo(-15.2,6.7).lineTo(-16.2,3.2).lineTo(-17.3,-0.6).lineTo(-18.1,3.9).lineTo(-18.9,8.2).lineTo(-19.5,12).lineTo(-20,15).curveTo(-20.2,15.6,-20.5,15.8).curveTo(-20.8,15.9,-21.8,15.7).lineTo(-23.5,15.2).curveTo(-24.4,15,-25.2,14.5).curveTo(-26,14.1,-26.3,13.6).curveTo(-26.5,13,-26.5,12.1).lineTo(-26.2,9.3).lineTo(-25.8,5.3).lineTo(-25.2,0.4).lineTo(-24.4,-4.9).lineTo(-23.6,-9.8).lineTo(-22.8,-14.1).curveTo(-22.6,-15.2,-21.9,-15.5).curveTo(-21.3,-15.8,-20.2,-15.5).lineTo(-17.6,-14.7).curveTo(-16.3,-14.3,-14.9,-13.6).curveTo(-13.8,-13.2,-13.4,-12.5).curveTo(-12.9,-11.8,-12.7,-10.4).lineTo(-12.2,-7.7).lineTo(-11.6,-4.2).lineTo(-10.8,-0.3).lineTo(-10,3.5).curveTo(-9.3,-1.2,-8.2,-5.8).curveTo(-7.2,-10.4,-6.1,-14.2).curveTo(-5.8,-15.3,-5.2,-15.5).curveTo(-4.6,-15.8,-3.5,-15.5).lineTo(-2.5,-15.2).lineTo(-1.7,-14.9).lineTo(-0.8,-14.5).lineTo(0.3,-13.9).lineTo(0.4,-13.8).lineTo(0.6,-13.9).curveTo(2.7,-14.3,5.4,-14.7).lineTo(10.9,-15.3).lineTo(16.4,-15.8).lineTo(21.2,-16.1).curveTo(22.3,-16.1,22.8,-15.9).curveTo(23.3,-15.7,23.6,-15.2).curveTo(24.3,-14.4,24.8,-13.4).curveTo(25.3,-12.4,25.5,-11.5).curveTo(25.8,-10.7,25.6,-10.4).curveTo(25.3,-10.1,24.2,-10).lineTo(21.2,-9.7).lineTo(17.8,-9.4).lineTo(16.2,-3.1).lineTo(14.6,3.3).lineTo(13.2,9.5).lineTo(12,15.2).curveTo(12,15.7,11.7,15.9).curveTo(11.4,16,11,16).lineTo(9.9,15.8).closePath().moveTo(-40.3,15.9).curveTo(-43.5,15.6,-45.6,14.5).curveTo(-46.5,14,-47.3,13.3).curveTo(-48.1,12.6,-48.7,11.6).curveTo(-49.4,10.3,-49.8,8.6).curveTo(-50.1,6.9,-50.1,4.8).curveTo(-50.1,2.7,-49.8,0.3).lineTo(-49.1,-4.4).lineTo(-48,-9.3).lineTo(-46.8,-14).curveTo(-46.5,-15,-45.9,-15.3).curveTo(-45.3,-15.5,-44.2,-15.1).curveTo(-43.1,-14.7,-42.1,-14.2).curveTo(-41.1,-13.7,-40.2,-13.1).curveTo(-38.2,-11.7,-38.9,-9.5).lineTo(-40.1,-5.4).lineTo(-41.2,-1).lineTo(-42.2,3.4).curveTo(-42.5,5.5,-42.6,7.2).curveTo(-42.7,8.9,-42.4,10).curveTo(-42.2,11.1,-41.4,11.3).curveTo(-40.4,11.6,-39.5,10.4).curveTo(-38.5,9.2,-37.7,7.1).curveTo(-36.8,5,-36.1,2.2).curveTo(-35.3,-0.6,-34.6,-3.5).lineTo(-33.4,-9.3).lineTo(-32.5,-14.3).curveTo(-32.4,-15.4,-31.7,-15.6).curveTo(-30.9,-15.9,-29.9,-15.6).curveTo(-28.9,-15.3,-27.7,-14.7).lineTo(-25.6,-13.6).lineTo(-24.8,-13).lineTo(-24.4,-12.4).curveTo(-24.3,-12.1,-24.4,-11.8).lineTo(-24.5,-11).curveTo(-25.6,-5.8,-26.7,-1.5).curveTo(-27.8,2.8,-29,6.1).curveTo(-30.2,9.4,-31.7,11.6).curveTo(-33.1,13.9,-34.9,14.9).curveTo(-36.1,15.5,-37.4,15.7).curveTo(-38.3,15.9,-39.4,15.9).lineTo(-40.3,15.9).closePath().moveTo(34,15.8).lineTo(31.2,15.4).curveTo(29.7,15.1,28.6,14.4).curveTo(27.6,13.9,26.6,13.1).curveTo(25.7,12.4,25.2,11.4).curveTo(24.3,9.7,23.9,7.6).curveTo(23.4,5.5,23.5,3.2).curveTo(23.5,0.9,24,-1.5).curveTo(24.5,-3.9,25.5,-6.2).curveTo(26.5,-8.4,27.9,-10.4).curveTo(29.3,-12.5,31.2,-14.1).curveTo(32.4,-15.1,34.2,-15.6).curveTo(35.9,-16.1,37.5,-15.8).curveTo(39.6,-15.5,41.4,-14.8).curveTo(43.3,-14.1,44.5,-13.2).curveTo(45.9,-12,46.5,-10.8).curveTo(47.1,-9.6,47.4,-8).curveTo(47.8,-5.3,47.6,-2.3).curveTo(47.4,0.8,46.5,3.8).curveTo(45.7,6.9,44.2,9.6).curveTo(42.8,12.3,40.7,14.2).curveTo(39.2,15.3,37.6,15.7).curveTo(36.6,15.9,35.4,15.9).lineTo(34,15.8).closePath().moveTo(37,-8.9).curveTo(36.1,-8.1,35.1,-6.5).curveTo(34.2,-5,33.4,-3.2).curveTo(32.6,-1.3,32.1,0.4).curveTo(31.6,2.1,31.4,3.9).curveTo(31.1,5.7,31.2,7.3).curveTo(31.3,8.9,31.7,10).curveTo(32.2,11.1,33,11.4).curveTo(33.7,11.6,34.6,11).curveTo(35.4,10.5,36.2,9.3).curveTo(37,8.1,37.8,6.3).curveTo(38.5,4.6,39.1,2.5).curveTo(39.5,0.8,39.8,-1.2).curveTo(40.1,-3.2,40.1,-5).curveTo(40.1,-6.8,39.8,-8.1).curveTo(39.4,-9.4,38.7,-9.6).lineTo(38.4,-9.6).curveTo(37.7,-9.6,37,-8.9).closePath().moveTo(67,15.7).lineTo(65.3,15.3).curveTo(64.5,15.1,63.6,14.7).curveTo(62.9,14.3,62.7,13.7).curveTo(62.5,13.2,62.6,12.3).curveTo(62.6,10.9,62.9,8.7).lineTo(63.6,3.8).lineTo(64.5,-1.7).lineTo(65.6,-6.9).lineTo(64.4,-7.5).curveTo(63.9,-7.8,63.7,-8.1).curveTo(63.5,-8.3,63.6,-8.7).lineTo(63.9,-9.6).curveTo(64.5,-10.8,65.3,-12.1).lineTo(66.8,-14.4).lineTo(67.5,-15.1).curveTo(67.7,-15.4,68.1,-15.5).curveTo(68.4,-15.6,68.8,-15.5).lineTo(69.7,-15.4).curveTo(70.8,-15.1,71.8,-14.6).curveTo(72.8,-14.1,73.9,-13.4).curveTo(74.8,-12.7,75.1,-12.2).curveTo(75.3,-11.7,75,-10.8).lineTo(73.9,-7).lineTo(72.7,-2.5).lineTo(71.5,2.3).lineTo(70.4,7).lineTo(69.5,11.4).lineTo(68.8,15).curveTo(68.6,15.6,68.3,15.8).lineTo(67.9,15.9).lineTo(67,15.7).closePath();
	this.shape.setTransform(-1.5,5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-76.7,-11,150.4,32.2);


(lib.Path_34 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#CCA2C0").beginStroke().moveTo(-46.8,16.4).curveTo(-66.2,9.6,-66.2,-0).curveTo(-66.2,-9.6,-46.8,-16.4).curveTo(-27.4,-23.2,0,-23.2).curveTo(27.4,-23.2,46.8,-16.4).curveTo(66.2,-9.6,66.2,-0).curveTo(66.2,9.6,46.8,16.4).curveTo(27.4,23.2,0,23.2).curveTo(-27.5,23.2,-46.8,16.4).closePath();
	this.shape.setTransform(66.2,23.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,132.4,46.4);


(lib.Path_33 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(12.8,36.4).curveTo(5.7,34.3,1.5,30.7).curveTo(-9.8,21.3,6.1,9).curveTo(-5.8,12.4,-16.2,8.8).curveTo(-25.4,5.7,-28.2,-0.3).curveTo(-31.1,-6.4,-24.5,-9.4).curveTo(-17,-12.8,-0.5,-9.8).curveTo(-15.7,-12.8,-24.5,-19.5).curveTo(-32.5,-25.5,-31.9,-31.4).curveTo(-31.3,-37.2,-22.6,-38).curveTo(-12.9,-38.9,2.1,-32.1).curveTo(29.2,-19.9,31.7,7.4).curveTo(32.6,17.3,29.9,26.8).curveTo(27.6,35.1,24.4,38).lineTo(23.2,38.1).curveTo(18.5,38.1,12.8,36.4).closePath();
	this.shape.setTransform(31.9,38.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63.9,76.2);


(lib.Path_32 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-33.4,30.4).curveTo(-39.2,29.5,-39.4,20.8).curveTo(-39.7,11,-32,-3.5).curveTo(-18.1,-29.8,9.3,-30.5).curveTo(19.3,-30.8,28.6,-27.6).curveTo(36.7,-24.8,39.4,-21.4).curveTo(39.3,-16.2,37,-9.9).curveTo(34.5,-3,30.7,1.1).curveTo(20.5,11.7,9.3,-4.9).curveTo(11.9,7.2,7.7,17.4).curveTo(4,26.3,-2.2,28.8).curveTo(-8.4,31.3,-11,24.5).curveTo(-13.9,16.7,-9.9,0.5).curveTo(-13.9,15.4,-21.1,23.8).curveTo(-26.9,30.5,-32.1,30.5).lineTo(-33.4,30.4).closePath();
	this.shape.setTransform(39.5,30.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,78.9,61.1);


(lib.Path_29 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginLinearGradientFill(["#FFFFFF","#E8E7F2","#C9C8E1","#B3B1D5","#A6A4CE","#A19FCB"],[0,0.145,0.376,0.6,0.812,1],0.1,-20.5,0.1,30.7).beginStroke().moveTo(21.8,25.7).curveTo(7.1,25.4,11.7,5.9).curveTo(4.6,16,-5.8,19.8).curveTo(-14.8,23.2,-20.8,20.3).curveTo(-26.9,17.4,-23.6,10.8).curveTo(-20,3.5,-5.6,-4.4).curveTo(-19.1,2.6,-30,3).curveTo(-40,3.4,-43.2,-1.6).curveTo(-46.4,-6.5,-40.2,-12.5).curveTo(-33.2,-19.4,-17.3,-23.6).curveTo(11.5,-31.1,30.6,-11.4).curveTo(37.5,-4.3,41.5,4.7).curveTo(44.9,12.6,44.2,16.9).curveTo(40.4,20.4,34.2,22.9).curveTo(27.5,25.7,22.1,25.7).lineTo(21.8,25.7).closePath();
	this.shape.setTransform(44.2,25.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,88.6,51.4);


(lib.Path_23 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#FFFFFF","#E8E7F2","#C9C8E1","#B3B1D5","#A6A4CE","#A19FCB"],[0,0.145,0.376,0.6,0.812,1],-46.4,29.5,0,-46.4,29.5,91.2).beginStroke().moveTo(5.7,-4.1).curveTo(-1.3,-14.4,-11.2,-20.4).curveTo(-20.8,-26.3,-30.6,-26.4).curveTo(-29.5,-32.1,-30.9,-38.7).curveTo(-32.6,-46.3,-37.1,-53).curveTo(-27.7,-45.1,-22.4,-29.7).curveTo(5.7,-27.5,20.9,-8).curveTo(36,11.3,37.1,46.3).curveTo(32,45.2,24.7,47.2).curveTo(17.3,49.3,14.4,53.1).curveTo(22.1,20.4,5.7,-4.1).closePath();
	this.shape.setTransform(37.1,53.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginRadialGradientFill(["#FFFFFF","#E8E7F2","#C9C8E1","#B3B1D5","#A6A4CE","#A19FCB"],[0,0.145,0.376,0.6,0.812,1],-46.4,29.5,0,-46.4,29.5,91.2).beginStroke().moveTo(5.7,-4.1).curveTo(-1.3,-14.4,-11.2,-20.4).curveTo(-20.8,-26.3,-30.6,-26.4).curveTo(-29.5,-32.1,-30.9,-38.7).curveTo(-32.6,-46.3,-37.1,-53).curveTo(-27.7,-45.1,-22.4,-29.7).curveTo(5.7,-27.5,20.9,-8).curveTo(36,11.3,37.1,46.3).curveTo(32,45.2,24.7,47.2).curveTo(17.3,49.3,14.4,53.1).curveTo(22.1,20.4,5.7,-4.1).closePath();
	this.shape_1.setTransform(37.1,53.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#FFFFFF","#E8E7F2","#C9C8E1","#B3B1D5","#A6A4CE","#A19FCB"],[0,0.145,0.376,0.6,0.812,1],-46.4,29.5,0,-46.4,29.5,91.2).beginStroke().moveTo(5.7,-4.1).curveTo(-1.3,-14.4,-11.2,-20.4).curveTo(-20.8,-26.3,-30.6,-26.4).curveTo(-29.5,-32.1,-30.9,-38.7).curveTo(-32.6,-46.3,-37.1,-53).curveTo(-27.7,-45.1,-22.4,-29.7).curveTo(5.7,-27.5,20.9,-8).curveTo(36,11.3,37.1,46.3).curveTo(32,45.2,24.7,47.2).curveTo(17.3,49.3,14.4,53.1).curveTo(22.1,20.4,5.7,-4.1).closePath();
	this.shape_2.setTransform(37.1,53.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginRadialGradientFill(["#FFFFFF","#E8E7F2","#C9C8E1","#B3B1D5","#A6A4CE","#A19FCB"],[0,0.145,0.376,0.6,0.812,1],-46.4,29.5,0,-46.4,29.5,91.2).beginStroke().moveTo(5.7,-4.1).curveTo(-1.3,-14.4,-11.2,-20.4).curveTo(-20.8,-26.3,-30.6,-26.4).curveTo(-29.5,-32.1,-30.9,-38.7).curveTo(-32.6,-46.3,-37.1,-53).curveTo(-27.7,-45.1,-22.4,-29.7).curveTo(5.7,-27.5,20.9,-8).curveTo(36,11.3,37.1,46.3).curveTo(32,45.2,24.7,47.2).curveTo(17.3,49.3,14.4,53.1).curveTo(22.1,20.4,5.7,-4.1).closePath();
	this.shape_3.setTransform(37.1,53.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginRadialGradientFill(["#FFFFFF","#E8E7F2","#C9C8E1","#B3B1D5","#A6A4CE","#A19FCB"],[0,0.145,0.376,0.6,0.812,1],-46.4,29.5,0,-46.4,29.5,91.2).beginStroke().moveTo(5.7,-4.1).curveTo(-1.3,-14.4,-11.2,-20.4).curveTo(-20.8,-26.3,-30.6,-26.4).curveTo(-29.5,-32.1,-30.9,-38.7).curveTo(-32.6,-46.3,-37.1,-53).curveTo(-27.7,-45.1,-22.4,-29.7).curveTo(5.7,-27.5,20.9,-8).curveTo(36,11.3,37.1,46.3).curveTo(32,45.2,24.7,47.2).curveTo(17.3,49.3,14.4,53.1).curveTo(22.1,20.4,5.7,-4.1).closePath();
	this.shape_4.setTransform(37.1,53.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginRadialGradientFill(["#FFFFFF","#E8E7F2","#C9C8E1","#B3B1D5","#A6A4CE","#A19FCB"],[0,0.145,0.376,0.6,0.812,1],-46.4,29.5,0,-46.4,29.5,91.2).beginStroke().moveTo(5.7,-4.1).curveTo(-1.3,-14.4,-11.2,-20.4).curveTo(-20.8,-26.3,-30.6,-26.4).curveTo(-29.5,-32.1,-30.9,-38.7).curveTo(-32.6,-46.3,-37.1,-53).curveTo(-27.7,-45.1,-22.4,-29.7).curveTo(5.7,-27.5,20.9,-8).curveTo(36,11.3,37.1,46.3).curveTo(32,45.2,24.7,47.2).curveTo(17.3,49.3,14.4,53.1).curveTo(22.1,20.4,5.7,-4.1).closePath();
	this.shape_5.setTransform(37.1,53.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginRadialGradientFill(["#FFFFFF","#E8E7F2","#C9C8E1","#B3B1D5","#A6A4CE","#A19FCB"],[0,0.145,0.376,0.6,0.812,1],-46.4,29.5,0,-46.4,29.5,91.2).beginStroke().moveTo(5.7,-4.1).curveTo(-1.3,-14.4,-11.2,-20.4).curveTo(-20.8,-26.3,-30.6,-26.4).curveTo(-29.5,-32.1,-30.9,-38.7).curveTo(-32.6,-46.3,-37.1,-53).curveTo(-27.7,-45.1,-22.4,-29.7).curveTo(5.7,-27.5,20.9,-8).curveTo(36,11.3,37.1,46.3).curveTo(32,45.2,24.7,47.2).curveTo(17.3,49.3,14.4,53.1).curveTo(22.1,20.4,5.7,-4.1).closePath();
	this.shape_6.setTransform(37.1,53.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginRadialGradientFill(["#FFFFFF","#E8E7F2","#C9C8E1","#B3B1D5","#A6A4CE","#A19FCB"],[0,0.145,0.376,0.6,0.812,1],-46.4,29.5,0,-46.4,29.5,91.2).beginStroke().moveTo(5.7,-4.1).curveTo(-1.3,-14.4,-11.2,-20.4).curveTo(-20.8,-26.3,-30.6,-26.4).curveTo(-29.5,-32.1,-30.9,-38.7).curveTo(-32.6,-46.3,-37.1,-53).curveTo(-27.7,-45.1,-22.4,-29.7).curveTo(5.7,-27.5,20.9,-8).curveTo(36,11.3,37.1,46.3).curveTo(32,45.2,24.7,47.2).curveTo(17.3,49.3,14.4,53.1).curveTo(22.1,20.4,5.7,-4.1).closePath();
	this.shape_7.setTransform(37.1,53.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginRadialGradientFill(["#FFFFFF","#E8E7F2","#C9C8E1","#B3B1D5","#A6A4CE","#A19FCB"],[0,0.145,0.376,0.6,0.812,1],-46.4,29.5,0,-46.4,29.5,91.2).beginStroke().moveTo(5.7,-4.1).curveTo(-1.3,-14.4,-11.2,-20.4).curveTo(-20.8,-26.3,-30.6,-26.4).curveTo(-29.5,-32.1,-30.9,-38.7).curveTo(-32.6,-46.3,-37.1,-53).curveTo(-27.7,-45.1,-22.4,-29.7).curveTo(5.7,-27.5,20.9,-8).curveTo(36,11.3,37.1,46.3).curveTo(32,45.2,24.7,47.2).curveTo(17.3,49.3,14.4,53.1).curveTo(22.1,20.4,5.7,-4.1).closePath();
	this.shape_8.setTransform(37.1,53.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginRadialGradientFill(["#FFFFFF","#E8E7F2","#C9C8E1","#B3B1D5","#A6A4CE","#A19FCB"],[0,0.145,0.376,0.6,0.812,1],-46.4,29.5,0,-46.4,29.5,91.2).beginStroke().moveTo(5.7,-4.1).curveTo(-1.3,-14.4,-11.2,-20.4).curveTo(-20.8,-26.3,-30.6,-26.4).curveTo(-29.5,-32.1,-30.9,-38.7).curveTo(-32.6,-46.3,-37.1,-53).curveTo(-27.7,-45.1,-22.4,-29.7).curveTo(5.7,-27.5,20.9,-8).curveTo(36,11.3,37.1,46.3).curveTo(32,45.2,24.7,47.2).curveTo(17.3,49.3,14.4,53.1).curveTo(22.1,20.4,5.7,-4.1).closePath();
	this.shape_9.setTransform(37.1,53.1);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,74.3,106.1);


(lib.Path_22 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#DCDBEC").beginStroke().moveTo(-8.5,8.5).curveTo(-12,5,-12,-0).curveTo(-12,-5,-8.5,-8.5).curveTo(-5,-12,-0,-12).curveTo(4.9,-12,8.5,-8.5).curveTo(12,-5,12,-0).curveTo(12,5,8.5,8.5).curveTo(4.9,12,-0,12).curveTo(-5,12,-8.5,8.5).closePath();
	this.shape.setTransform(12,12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DCDBEC").beginStroke().moveTo(-8.5,8.5).curveTo(-12,5,-12,-0).curveTo(-12,-5,-8.5,-8.5).curveTo(-5,-12,-0,-12).curveTo(4.9,-12,8.5,-8.5).curveTo(12,-5,12,-0).curveTo(12,5,8.5,8.5).curveTo(4.9,12,-0,12).curveTo(-5,12,-8.5,8.5).closePath();
	this.shape_1.setTransform(12,12);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#DCDBEC").beginStroke().moveTo(-8.5,8.5).curveTo(-12,5,-12,-0).curveTo(-12,-5,-8.5,-8.5).curveTo(-5,-12,-0,-12).curveTo(4.9,-12,8.5,-8.5).curveTo(12,-5,12,-0).curveTo(12,5,8.5,8.5).curveTo(4.9,12,-0,12).curveTo(-5,12,-8.5,8.5).closePath();
	this.shape_2.setTransform(12,12);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#DCDBEC").beginStroke().moveTo(-8.5,8.5).curveTo(-12,5,-12,-0).curveTo(-12,-5,-8.5,-8.5).curveTo(-5,-12,-0,-12).curveTo(4.9,-12,8.5,-8.5).curveTo(12,-5,12,-0).curveTo(12,5,8.5,8.5).curveTo(4.9,12,-0,12).curveTo(-5,12,-8.5,8.5).closePath();
	this.shape_3.setTransform(12,12);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#DCDBEC").beginStroke().moveTo(-8.5,8.5).curveTo(-12,5,-12,-0).curveTo(-12,-5,-8.5,-8.5).curveTo(-5,-12,-0,-12).curveTo(4.9,-12,8.5,-8.5).curveTo(12,-5,12,-0).curveTo(12,5,8.5,8.5).curveTo(4.9,12,-0,12).curveTo(-5,12,-8.5,8.5).closePath();
	this.shape_4.setTransform(12,12);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#DCDBEC").beginStroke().moveTo(-8.5,8.5).curveTo(-12,5,-12,-0).curveTo(-12,-5,-8.5,-8.5).curveTo(-5,-12,-0,-12).curveTo(4.9,-12,8.5,-8.5).curveTo(12,-5,12,-0).curveTo(12,5,8.5,8.5).curveTo(4.9,12,-0,12).curveTo(-5,12,-8.5,8.5).closePath();
	this.shape_5.setTransform(12,12);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#DCDBEC").beginStroke().moveTo(-8.5,8.5).curveTo(-12,5,-12,-0).curveTo(-12,-5,-8.5,-8.5).curveTo(-5,-12,-0,-12).curveTo(4.9,-12,8.5,-8.5).curveTo(12,-5,12,-0).curveTo(12,5,8.5,8.5).curveTo(4.9,12,-0,12).curveTo(-5,12,-8.5,8.5).closePath();
	this.shape_6.setTransform(12,12);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#DCDBEC").beginStroke().moveTo(-8.5,8.5).curveTo(-12,5,-12,-0).curveTo(-12,-5,-8.5,-8.5).curveTo(-5,-12,-0,-12).curveTo(4.9,-12,8.5,-8.5).curveTo(12,-5,12,-0).curveTo(12,5,8.5,8.5).curveTo(4.9,12,-0,12).curveTo(-5,12,-8.5,8.5).closePath();
	this.shape_7.setTransform(12,12);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#DCDBEC").beginStroke().moveTo(-8.5,8.5).curveTo(-12,5,-12,-0).curveTo(-12,-5,-8.5,-8.5).curveTo(-5,-12,-0,-12).curveTo(4.9,-12,8.5,-8.5).curveTo(12,-5,12,-0).curveTo(12,5,8.5,8.5).curveTo(4.9,12,-0,12).curveTo(-5,12,-8.5,8.5).closePath();
	this.shape_8.setTransform(12,12);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#DCDBEC").beginStroke().moveTo(-8.5,8.5).curveTo(-12,5,-12,-0).curveTo(-12,-5,-8.5,-8.5).curveTo(-5,-12,-0,-12).curveTo(4.9,-12,8.5,-8.5).curveTo(12,-5,12,-0).curveTo(12,5,8.5,8.5).curveTo(4.9,12,-0,12).curveTo(-5,12,-8.5,8.5).closePath();
	this.shape_9.setTransform(12,12);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,24,24);


(lib.Path_21 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#DCDBEC").beginStroke().moveTo(-6,6).curveTo(-8.6,3.6,-8.6,0).curveTo(-8.6,-3.6,-6,-6).curveTo(-3.6,-8.6,0,-8.6).curveTo(3.6,-8.6,6,-6).curveTo(8.5,-3.5,8.6,0).curveTo(8.5,3.6,6,6).curveTo(3.6,8.5,0,8.6).curveTo(-3.6,8.5,-6,6).closePath();
	this.shape.setTransform(8.6,8.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DCDBEC").beginStroke().moveTo(-6,6).curveTo(-8.6,3.6,-8.6,0).curveTo(-8.6,-3.6,-6,-6).curveTo(-3.6,-8.6,0,-8.6).curveTo(3.6,-8.6,6,-6).curveTo(8.5,-3.5,8.6,0).curveTo(8.5,3.6,6,6).curveTo(3.6,8.5,0,8.6).curveTo(-3.6,8.5,-6,6).closePath();
	this.shape_1.setTransform(8.6,8.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#DCDBEC").beginStroke().moveTo(-6,6).curveTo(-8.6,3.6,-8.6,0).curveTo(-8.6,-3.6,-6,-6).curveTo(-3.6,-8.6,0,-8.6).curveTo(3.6,-8.6,6,-6).curveTo(8.5,-3.5,8.6,0).curveTo(8.5,3.6,6,6).curveTo(3.6,8.5,0,8.6).curveTo(-3.6,8.5,-6,6).closePath();
	this.shape_2.setTransform(8.6,8.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#DCDBEC").beginStroke().moveTo(-6,6).curveTo(-8.6,3.6,-8.6,0).curveTo(-8.6,-3.6,-6,-6).curveTo(-3.6,-8.6,0,-8.6).curveTo(3.6,-8.6,6,-6).curveTo(8.5,-3.5,8.6,0).curveTo(8.5,3.6,6,6).curveTo(3.6,8.5,0,8.6).curveTo(-3.6,8.5,-6,6).closePath();
	this.shape_3.setTransform(8.6,8.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#DCDBEC").beginStroke().moveTo(-6,6).curveTo(-8.6,3.6,-8.6,0).curveTo(-8.6,-3.6,-6,-6).curveTo(-3.6,-8.6,0,-8.6).curveTo(3.6,-8.6,6,-6).curveTo(8.5,-3.5,8.6,0).curveTo(8.5,3.6,6,6).curveTo(3.6,8.5,0,8.6).curveTo(-3.6,8.5,-6,6).closePath();
	this.shape_4.setTransform(8.6,8.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#DCDBEC").beginStroke().moveTo(-6,6).curveTo(-8.6,3.6,-8.6,0).curveTo(-8.6,-3.6,-6,-6).curveTo(-3.6,-8.6,0,-8.6).curveTo(3.6,-8.6,6,-6).curveTo(8.5,-3.5,8.6,0).curveTo(8.5,3.6,6,6).curveTo(3.6,8.5,0,8.6).curveTo(-3.6,8.5,-6,6).closePath();
	this.shape_5.setTransform(8.6,8.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#DCDBEC").beginStroke().moveTo(-6,6).curveTo(-8.6,3.6,-8.6,0).curveTo(-8.6,-3.6,-6,-6).curveTo(-3.6,-8.6,0,-8.6).curveTo(3.6,-8.6,6,-6).curveTo(8.5,-3.5,8.6,0).curveTo(8.5,3.6,6,6).curveTo(3.6,8.5,0,8.6).curveTo(-3.6,8.5,-6,6).closePath();
	this.shape_6.setTransform(8.6,8.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#DCDBEC").beginStroke().moveTo(-6,6).curveTo(-8.6,3.6,-8.6,0).curveTo(-8.6,-3.6,-6,-6).curveTo(-3.6,-8.6,0,-8.6).curveTo(3.6,-8.6,6,-6).curveTo(8.5,-3.5,8.6,0).curveTo(8.5,3.6,6,6).curveTo(3.6,8.5,0,8.6).curveTo(-3.6,8.5,-6,6).closePath();
	this.shape_7.setTransform(8.6,8.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#DCDBEC").beginStroke().moveTo(-6,6).curveTo(-8.6,3.6,-8.6,0).curveTo(-8.6,-3.6,-6,-6).curveTo(-3.6,-8.6,0,-8.6).curveTo(3.6,-8.6,6,-6).curveTo(8.5,-3.5,8.6,0).curveTo(8.5,3.6,6,6).curveTo(3.6,8.5,0,8.6).curveTo(-3.6,8.5,-6,6).closePath();
	this.shape_8.setTransform(8.6,8.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#DCDBEC").beginStroke().moveTo(-6,6).curveTo(-8.6,3.6,-8.6,0).curveTo(-8.6,-3.6,-6,-6).curveTo(-3.6,-8.6,0,-8.6).curveTo(3.6,-8.6,6,-6).curveTo(8.5,-3.5,8.6,0).curveTo(8.5,3.6,6,6).curveTo(3.6,8.5,0,8.6).curveTo(-3.6,8.5,-6,6).closePath();
	this.shape_9.setTransform(8.6,8.6);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,17.1,17.1);


(lib.Path_16 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#DCDBEC").beginStroke().moveTo(-37.6,18.9).curveTo(-42.9,14.5,-45.7,8.9).curveTo(-47.9,4.2,-46.9,2.8).curveTo(-45.2,0.6,-1,-13.9).curveTo(43.4,-28.5,45.8,-27.3).curveTo(47.4,-26.4,47.2,-19.8).curveTo(47,-12.1,43.7,-4.3).curveTo(34.1,18.6,6.2,25.2).curveTo(-3.3,27.4,-11.4,27.4).curveTo(-27.1,27.4,-37.6,18.9).closePath();
	this.shape.setTransform(47.2,27.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,94.5,54.8);


(lib.Path_4 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#32284B").beginStroke().moveTo(-7.3,7.6).curveTo(-7,-0.4,-9.6,-8.2).curveTo(-7.3,-9,-4.2,-9.2).curveTo(2,-9.7,5.8,-7.2).curveTo(8.1,-0.1,9.6,7.4).curveTo(5.4,9.3,0.9,9.3).curveTo(-3.3,9.3,-7.3,7.6).closePath();
	this.shape.setTransform(9.6,9.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#32284B").beginStroke().moveTo(-7.3,7.6).curveTo(-7,-0.4,-9.6,-8.2).curveTo(-7.3,-9,-4.2,-9.2).curveTo(2,-9.7,5.8,-7.2).curveTo(8.1,-0.1,9.6,7.4).curveTo(5.4,9.3,0.9,9.3).curveTo(-3.3,9.3,-7.3,7.6).closePath();
	this.shape_1.setTransform(9.6,9.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#32284B").beginStroke().moveTo(-7.3,7.6).curveTo(-7,-0.4,-9.6,-8.2).curveTo(-7.3,-9,-4.2,-9.2).curveTo(2,-9.7,5.8,-7.2).curveTo(8.1,-0.1,9.6,7.4).curveTo(5.4,9.3,0.9,9.3).curveTo(-3.3,9.3,-7.3,7.6).closePath();
	this.shape_2.setTransform(9.6,9.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#32284B").beginStroke().moveTo(-7.3,7.6).curveTo(-7,-0.4,-9.6,-8.2).curveTo(-7.3,-9,-4.2,-9.2).curveTo(2,-9.7,5.8,-7.2).curveTo(8.1,-0.1,9.6,7.4).curveTo(5.4,9.3,0.9,9.3).curveTo(-3.3,9.3,-7.3,7.6).closePath();
	this.shape_3.setTransform(9.6,9.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#32284B").beginStroke().moveTo(-7.3,7.6).curveTo(-7,-0.4,-9.6,-8.2).curveTo(-7.3,-9,-4.2,-9.2).curveTo(2,-9.7,5.8,-7.2).curveTo(8.1,-0.1,9.6,7.4).curveTo(5.4,9.3,0.9,9.3).curveTo(-3.3,9.3,-7.3,7.6).closePath();
	this.shape_4.setTransform(9.6,9.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#32284B").beginStroke().moveTo(-7.3,7.6).curveTo(-7,-0.4,-9.6,-8.2).curveTo(-7.3,-9,-4.2,-9.2).curveTo(2,-9.7,5.8,-7.2).curveTo(8.1,-0.1,9.6,7.4).curveTo(5.4,9.3,0.9,9.3).curveTo(-3.3,9.3,-7.3,7.6).closePath();
	this.shape_5.setTransform(9.6,9.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#32284B").beginStroke().moveTo(-7.3,7.6).curveTo(-7,-0.4,-9.6,-8.2).curveTo(-7.3,-9,-4.2,-9.2).curveTo(2,-9.7,5.8,-7.2).curveTo(8.1,-0.1,9.6,7.4).curveTo(5.4,9.3,0.9,9.3).curveTo(-3.3,9.3,-7.3,7.6).closePath();
	this.shape_6.setTransform(9.6,9.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#32284B").beginStroke().moveTo(-7.3,7.6).curveTo(-7,-0.4,-9.6,-8.2).curveTo(-7.3,-9,-4.2,-9.2).curveTo(2,-9.7,5.8,-7.2).curveTo(8.1,-0.1,9.6,7.4).curveTo(5.4,9.3,0.9,9.3).curveTo(-3.3,9.3,-7.3,7.6).closePath();
	this.shape_7.setTransform(9.6,9.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#32284B").beginStroke().moveTo(-7.3,7.6).curveTo(-7,-0.4,-9.6,-8.2).curveTo(-7.3,-9,-4.2,-9.2).curveTo(2,-9.7,5.8,-7.2).curveTo(8.1,-0.1,9.6,7.4).curveTo(5.4,9.3,0.9,9.3).curveTo(-3.3,9.3,-7.3,7.6).closePath();
	this.shape_8.setTransform(9.6,9.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#32284B").beginStroke().moveTo(-7.3,7.6).curveTo(-7,-0.4,-9.6,-8.2).curveTo(-7.3,-9,-4.2,-9.2).curveTo(2,-9.7,5.8,-7.2).curveTo(8.1,-0.1,9.6,7.4).curveTo(5.4,9.3,0.9,9.3).curveTo(-3.3,9.3,-7.3,7.6).closePath();
	this.shape_9.setTransform(9.6,9.3);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,19.3,18.6);


(lib.Group_0 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(11.3,2.7).lineTo(5.4,1.6).lineTo(-0.5,0.6).curveTo(-3.7,0.3,-6.5,0.4).curveTo(-10,0.5,-12.4,1.3).curveTo(-12.5,1.4,-12.6,1.4).curveTo(-12.6,1.4,-12.7,1.3).curveTo(-12.7,1.3,-12.8,1.3).curveTo(-12.8,1.2,-12.8,1.1).curveTo(-12.8,1.1,-12.9,1).curveTo(-12.9,1,-12.8,0.9).curveTo(-12.8,0.9,-12.8,0.8).curveTo(-12.8,0.8,-12.7,0.7).curveTo(-10.5,-1.1,-6.8,-2).curveTo(-4,-2.6,-0.3,-2.7).curveTo(3.8,-2.6,6.2,-2.1).curveTo(9.8,-1.3,12.3,0.4).curveTo(12.7,0.7,12.8,1.2).curveTo(12.9,1.7,12.6,2.2).curveTo(12.2,2.7,11.6,2.7).lineTo(11.3,2.7).closePath();
	this.shape.setTransform(12.9,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(11.3,2.7).lineTo(5.4,1.6).lineTo(-0.5,0.6).curveTo(-3.7,0.3,-6.5,0.4).curveTo(-10,0.5,-12.4,1.3).curveTo(-12.5,1.4,-12.6,1.4).curveTo(-12.6,1.4,-12.7,1.3).curveTo(-12.7,1.3,-12.8,1.3).curveTo(-12.8,1.2,-12.8,1.1).curveTo(-12.8,1.1,-12.9,1).curveTo(-12.9,1,-12.8,0.9).curveTo(-12.8,0.9,-12.8,0.8).curveTo(-12.8,0.8,-12.7,0.7).curveTo(-10.5,-1.1,-6.8,-2).curveTo(-4,-2.6,-0.3,-2.7).curveTo(3.8,-2.6,6.2,-2.1).curveTo(9.8,-1.3,12.3,0.4).curveTo(12.7,0.7,12.8,1.2).curveTo(12.9,1.7,12.6,2.2).curveTo(12.2,2.7,11.6,2.7).lineTo(11.3,2.7).closePath();
	this.shape_1.setTransform(12.9,2.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(11.3,2.7).lineTo(5.4,1.6).lineTo(-0.5,0.6).curveTo(-3.7,0.3,-6.5,0.4).curveTo(-10,0.5,-12.4,1.3).curveTo(-12.5,1.4,-12.6,1.4).curveTo(-12.6,1.4,-12.7,1.3).curveTo(-12.7,1.3,-12.8,1.3).curveTo(-12.8,1.2,-12.8,1.1).curveTo(-12.8,1.1,-12.9,1).curveTo(-12.9,1,-12.8,0.9).curveTo(-12.8,0.9,-12.8,0.8).curveTo(-12.8,0.8,-12.7,0.7).curveTo(-10.5,-1.1,-6.8,-2).curveTo(-4,-2.6,-0.3,-2.7).curveTo(3.8,-2.6,6.2,-2.1).curveTo(9.8,-1.3,12.3,0.4).curveTo(12.7,0.7,12.8,1.2).curveTo(12.9,1.7,12.6,2.2).curveTo(12.2,2.7,11.6,2.7).lineTo(11.3,2.7).closePath();
	this.shape_2.setTransform(12.9,2.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(11.3,2.7).lineTo(5.4,1.6).lineTo(-0.5,0.6).curveTo(-3.7,0.3,-6.5,0.4).curveTo(-10,0.5,-12.4,1.3).curveTo(-12.5,1.4,-12.6,1.4).curveTo(-12.6,1.4,-12.7,1.3).curveTo(-12.7,1.3,-12.8,1.3).curveTo(-12.8,1.2,-12.8,1.1).curveTo(-12.8,1.1,-12.9,1).curveTo(-12.9,1,-12.8,0.9).curveTo(-12.8,0.9,-12.8,0.8).curveTo(-12.8,0.8,-12.7,0.7).curveTo(-10.5,-1.1,-6.8,-2).curveTo(-4,-2.6,-0.3,-2.7).curveTo(3.8,-2.6,6.2,-2.1).curveTo(9.8,-1.3,12.3,0.4).curveTo(12.7,0.7,12.8,1.2).curveTo(12.9,1.7,12.6,2.2).curveTo(12.2,2.7,11.6,2.7).lineTo(11.3,2.7).closePath();
	this.shape_3.setTransform(12.9,2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(11.3,2.7).lineTo(5.4,1.6).lineTo(-0.5,0.6).curveTo(-3.7,0.3,-6.5,0.4).curveTo(-10,0.5,-12.4,1.3).curveTo(-12.5,1.4,-12.6,1.4).curveTo(-12.6,1.4,-12.7,1.3).curveTo(-12.7,1.3,-12.8,1.3).curveTo(-12.8,1.2,-12.8,1.1).curveTo(-12.8,1.1,-12.9,1).curveTo(-12.9,1,-12.8,0.9).curveTo(-12.8,0.9,-12.8,0.8).curveTo(-12.8,0.8,-12.7,0.7).curveTo(-10.5,-1.1,-6.8,-2).curveTo(-4,-2.6,-0.3,-2.7).curveTo(3.8,-2.6,6.2,-2.1).curveTo(9.8,-1.3,12.3,0.4).curveTo(12.7,0.7,12.8,1.2).curveTo(12.9,1.7,12.6,2.2).curveTo(12.2,2.7,11.6,2.7).lineTo(11.3,2.7).closePath();
	this.shape_4.setTransform(12.9,2.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(11.3,2.7).lineTo(5.4,1.6).lineTo(-0.5,0.6).curveTo(-3.7,0.3,-6.5,0.4).curveTo(-10,0.5,-12.4,1.3).curveTo(-12.5,1.4,-12.6,1.4).curveTo(-12.6,1.4,-12.7,1.3).curveTo(-12.7,1.3,-12.8,1.3).curveTo(-12.8,1.2,-12.8,1.1).curveTo(-12.8,1.1,-12.9,1).curveTo(-12.9,1,-12.8,0.9).curveTo(-12.8,0.9,-12.8,0.8).curveTo(-12.8,0.8,-12.7,0.7).curveTo(-10.5,-1.1,-6.8,-2).curveTo(-4,-2.6,-0.3,-2.7).curveTo(3.8,-2.6,6.2,-2.1).curveTo(9.8,-1.3,12.3,0.4).curveTo(12.7,0.7,12.8,1.2).curveTo(12.9,1.7,12.6,2.2).curveTo(12.2,2.7,11.6,2.7).lineTo(11.3,2.7).closePath();
	this.shape_5.setTransform(12.9,2.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(11.3,2.7).lineTo(5.4,1.6).lineTo(-0.5,0.6).curveTo(-3.7,0.3,-6.5,0.4).curveTo(-10,0.5,-12.4,1.3).curveTo(-12.5,1.4,-12.6,1.4).curveTo(-12.6,1.4,-12.7,1.3).curveTo(-12.7,1.3,-12.8,1.3).curveTo(-12.8,1.2,-12.8,1.1).curveTo(-12.8,1.1,-12.9,1).curveTo(-12.9,1,-12.8,0.9).curveTo(-12.8,0.9,-12.8,0.8).curveTo(-12.8,0.8,-12.7,0.7).curveTo(-10.5,-1.1,-6.8,-2).curveTo(-4,-2.6,-0.3,-2.7).curveTo(3.8,-2.6,6.2,-2.1).curveTo(9.8,-1.3,12.3,0.4).curveTo(12.7,0.7,12.8,1.2).curveTo(12.9,1.7,12.6,2.2).curveTo(12.2,2.7,11.6,2.7).lineTo(11.3,2.7).closePath();
	this.shape_6.setTransform(12.9,2.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(11.3,2.7).lineTo(5.4,1.6).lineTo(-0.5,0.6).curveTo(-3.7,0.3,-6.5,0.4).curveTo(-10,0.5,-12.4,1.3).curveTo(-12.5,1.4,-12.6,1.4).curveTo(-12.6,1.4,-12.7,1.3).curveTo(-12.7,1.3,-12.8,1.3).curveTo(-12.8,1.2,-12.8,1.1).curveTo(-12.8,1.1,-12.9,1).curveTo(-12.9,1,-12.8,0.9).curveTo(-12.8,0.9,-12.8,0.8).curveTo(-12.8,0.8,-12.7,0.7).curveTo(-10.5,-1.1,-6.8,-2).curveTo(-4,-2.6,-0.3,-2.7).curveTo(3.8,-2.6,6.2,-2.1).curveTo(9.8,-1.3,12.3,0.4).curveTo(12.7,0.7,12.8,1.2).curveTo(12.9,1.7,12.6,2.2).curveTo(12.2,2.7,11.6,2.7).lineTo(11.3,2.7).closePath();
	this.shape_7.setTransform(12.9,2.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(11.3,2.7).lineTo(5.4,1.6).lineTo(-0.5,0.6).curveTo(-3.7,0.3,-6.5,0.4).curveTo(-10,0.5,-12.4,1.3).curveTo(-12.5,1.4,-12.6,1.4).curveTo(-12.6,1.4,-12.7,1.3).curveTo(-12.7,1.3,-12.8,1.3).curveTo(-12.8,1.2,-12.8,1.1).curveTo(-12.8,1.1,-12.9,1).curveTo(-12.9,1,-12.8,0.9).curveTo(-12.8,0.9,-12.8,0.8).curveTo(-12.8,0.8,-12.7,0.7).curveTo(-10.5,-1.1,-6.8,-2).curveTo(-4,-2.6,-0.3,-2.7).curveTo(3.8,-2.6,6.2,-2.1).curveTo(9.8,-1.3,12.3,0.4).curveTo(12.7,0.7,12.8,1.2).curveTo(12.9,1.7,12.6,2.2).curveTo(12.2,2.7,11.6,2.7).lineTo(11.3,2.7).closePath();
	this.shape_8.setTransform(12.9,2.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(11.3,2.7).lineTo(5.4,1.6).lineTo(-0.5,0.6).curveTo(-3.7,0.3,-6.5,0.4).curveTo(-10,0.5,-12.4,1.3).curveTo(-12.5,1.4,-12.6,1.4).curveTo(-12.6,1.4,-12.7,1.3).curveTo(-12.7,1.3,-12.8,1.3).curveTo(-12.8,1.2,-12.8,1.1).curveTo(-12.8,1.1,-12.9,1).curveTo(-12.9,1,-12.8,0.9).curveTo(-12.8,0.9,-12.8,0.8).curveTo(-12.8,0.8,-12.7,0.7).curveTo(-10.5,-1.1,-6.8,-2).curveTo(-4,-2.6,-0.3,-2.7).curveTo(3.8,-2.6,6.2,-2.1).curveTo(9.8,-1.3,12.3,0.4).curveTo(12.7,0.7,12.8,1.2).curveTo(12.9,1.7,12.6,2.2).curveTo(12.2,2.7,11.6,2.7).lineTo(11.3,2.7).closePath();
	this.shape_9.setTransform(12.9,2.7);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,25.7,5.5);


(lib.Group = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-19,40.8).curveTo(-19.1,40.8,-19.2,40.7).curveTo(-19.2,40.7,-19.3,40.7).curveTo(-19.3,40.6,-19.3,40.6).curveTo(-19.4,40.5,-19.4,40.5).curveTo(-19.8,39,-19.4,37.4).curveTo(-19.2,36.2,-18.3,34.5).curveTo(-16.7,31.8,-14,30.1).curveTo(-11,28.3,-8,28.1).curveTo(-5.1,27.9,-3,29.2).curveTo(-2.8,27.9,-2.6,25.6).lineTo(-2.7,20.5).lineTo(-3.3,10.1).curveTo(-4.4,-4.6,-4.5,-10.8).curveTo(-4.7,-16.7,-4.2,-21.5).curveTo(-3.7,-25.2,-3,-27.1).lineTo(-2.3,-28.6).lineTo(0,-32).curveTo(3.7,-36.6,8.8,-38.9).curveTo(13.9,-41,19.4,-40.8).curveTo(19.5,-40.8,19.5,-40.8).curveTo(19.5,-40.8,19.6,-40.7).curveTo(19.6,-40.7,19.6,-40.7).curveTo(19.6,-40.6,19.6,-40.5).curveTo(19.6,-40.5,19.6,-40.5).curveTo(19.6,-40.4,19.6,-40.4).curveTo(19.6,-40.4,19.5,-40.4).curveTo(19.5,-40.3,19.5,-40.3).curveTo(13.5,-38.5,10.2,-36.3).curveTo(6.3,-33.9,3.2,-29.6).curveTo(2.5,-28.7,1.9,-27.6).lineTo(0.8,-25.7).curveTo(0.2,-23.9,-0,-21.1).curveTo(-0.3,-18.2,-0.3,-10.9).curveTo(-0.2,-4,0.3,10).curveTo(0.4,17,0.3,20.5).lineTo(-0.1,25.8).lineTo(-0.5,28.5).curveTo(-1.1,30.4,-1.5,31.2).lineTo(-1.5,31.3).curveTo(-2,32.1,-2.7,31.7).lineTo(-7.6,32.2).curveTo(-10.1,32.6,-12,33.6).curveTo(-14.4,34.8,-15.9,36.3).curveTo(-17.9,38.2,-18.4,40.4).curveTo(-18.5,40.8,-18.9,40.8).lineTo(-19,40.8).closePath();
	this.shape.setTransform(19.6,40.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-19,40.8).curveTo(-19.1,40.8,-19.2,40.7).curveTo(-19.2,40.7,-19.3,40.7).curveTo(-19.3,40.6,-19.3,40.6).curveTo(-19.4,40.5,-19.4,40.5).curveTo(-19.8,39,-19.4,37.4).curveTo(-19.2,36.2,-18.3,34.5).curveTo(-16.7,31.8,-14,30.1).curveTo(-11,28.3,-8,28.1).curveTo(-5.1,27.9,-3,29.2).curveTo(-2.8,27.9,-2.6,25.6).lineTo(-2.7,20.5).lineTo(-3.3,10.1).curveTo(-4.4,-4.6,-4.5,-10.8).curveTo(-4.7,-16.7,-4.2,-21.5).curveTo(-3.7,-25.2,-3,-27.1).lineTo(-2.3,-28.6).lineTo(0,-32).curveTo(3.7,-36.6,8.8,-38.9).curveTo(13.9,-41,19.4,-40.8).curveTo(19.5,-40.8,19.5,-40.8).curveTo(19.5,-40.8,19.6,-40.7).curveTo(19.6,-40.7,19.6,-40.7).curveTo(19.6,-40.6,19.6,-40.5).curveTo(19.6,-40.5,19.6,-40.5).curveTo(19.6,-40.4,19.6,-40.4).curveTo(19.6,-40.4,19.5,-40.4).curveTo(19.5,-40.3,19.5,-40.3).curveTo(13.5,-38.5,10.2,-36.3).curveTo(6.3,-33.9,3.2,-29.6).curveTo(2.5,-28.7,1.9,-27.6).lineTo(0.8,-25.7).curveTo(0.2,-23.9,-0,-21.1).curveTo(-0.3,-18.2,-0.3,-10.9).curveTo(-0.2,-4,0.3,10).curveTo(0.4,17,0.3,20.5).lineTo(-0.1,25.8).lineTo(-0.5,28.5).curveTo(-1.1,30.4,-1.5,31.2).lineTo(-1.5,31.3).curveTo(-2,32.1,-2.7,31.7).lineTo(-7.6,32.2).curveTo(-10.1,32.6,-12,33.6).curveTo(-14.4,34.8,-15.9,36.3).curveTo(-17.9,38.2,-18.4,40.4).curveTo(-18.5,40.8,-18.9,40.8).lineTo(-19,40.8).closePath();
	this.shape_1.setTransform(19.6,40.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-19,40.8).curveTo(-19.1,40.8,-19.2,40.7).curveTo(-19.2,40.7,-19.3,40.7).curveTo(-19.3,40.6,-19.3,40.6).curveTo(-19.4,40.5,-19.4,40.5).curveTo(-19.8,39,-19.4,37.4).curveTo(-19.2,36.2,-18.3,34.5).curveTo(-16.7,31.8,-14,30.1).curveTo(-11,28.3,-8,28.1).curveTo(-5.1,27.9,-3,29.2).curveTo(-2.8,27.9,-2.6,25.6).lineTo(-2.7,20.5).lineTo(-3.3,10.1).curveTo(-4.4,-4.6,-4.5,-10.8).curveTo(-4.7,-16.7,-4.2,-21.5).curveTo(-3.7,-25.2,-3,-27.1).lineTo(-2.3,-28.6).lineTo(0,-32).curveTo(3.7,-36.6,8.8,-38.9).curveTo(13.9,-41,19.4,-40.8).curveTo(19.5,-40.8,19.5,-40.8).curveTo(19.5,-40.8,19.6,-40.7).curveTo(19.6,-40.7,19.6,-40.7).curveTo(19.6,-40.6,19.6,-40.5).curveTo(19.6,-40.5,19.6,-40.5).curveTo(19.6,-40.4,19.6,-40.4).curveTo(19.6,-40.4,19.5,-40.4).curveTo(19.5,-40.3,19.5,-40.3).curveTo(13.5,-38.5,10.2,-36.3).curveTo(6.3,-33.9,3.2,-29.6).curveTo(2.5,-28.7,1.9,-27.6).lineTo(0.8,-25.7).curveTo(0.2,-23.9,-0,-21.1).curveTo(-0.3,-18.2,-0.3,-10.9).curveTo(-0.2,-4,0.3,10).curveTo(0.4,17,0.3,20.5).lineTo(-0.1,25.8).lineTo(-0.5,28.5).curveTo(-1.1,30.4,-1.5,31.2).lineTo(-1.5,31.3).curveTo(-2,32.1,-2.7,31.7).lineTo(-7.6,32.2).curveTo(-10.1,32.6,-12,33.6).curveTo(-14.4,34.8,-15.9,36.3).curveTo(-17.9,38.2,-18.4,40.4).curveTo(-18.5,40.8,-18.9,40.8).lineTo(-19,40.8).closePath();
	this.shape_2.setTransform(19.6,40.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-19,40.8).curveTo(-19.1,40.8,-19.2,40.7).curveTo(-19.2,40.7,-19.3,40.7).curveTo(-19.3,40.6,-19.3,40.6).curveTo(-19.4,40.5,-19.4,40.5).curveTo(-19.8,39,-19.4,37.4).curveTo(-19.2,36.2,-18.3,34.5).curveTo(-16.7,31.8,-14,30.1).curveTo(-11,28.3,-8,28.1).curveTo(-5.1,27.9,-3,29.2).curveTo(-2.8,27.9,-2.6,25.6).lineTo(-2.7,20.5).lineTo(-3.3,10.1).curveTo(-4.4,-4.6,-4.5,-10.8).curveTo(-4.7,-16.7,-4.2,-21.5).curveTo(-3.7,-25.2,-3,-27.1).lineTo(-2.3,-28.6).lineTo(0,-32).curveTo(3.7,-36.6,8.8,-38.9).curveTo(13.9,-41,19.4,-40.8).curveTo(19.5,-40.8,19.5,-40.8).curveTo(19.5,-40.8,19.6,-40.7).curveTo(19.6,-40.7,19.6,-40.7).curveTo(19.6,-40.6,19.6,-40.5).curveTo(19.6,-40.5,19.6,-40.5).curveTo(19.6,-40.4,19.6,-40.4).curveTo(19.6,-40.4,19.5,-40.4).curveTo(19.5,-40.3,19.5,-40.3).curveTo(13.5,-38.5,10.2,-36.3).curveTo(6.3,-33.9,3.2,-29.6).curveTo(2.5,-28.7,1.9,-27.6).lineTo(0.8,-25.7).curveTo(0.2,-23.9,-0,-21.1).curveTo(-0.3,-18.2,-0.3,-10.9).curveTo(-0.2,-4,0.3,10).curveTo(0.4,17,0.3,20.5).lineTo(-0.1,25.8).lineTo(-0.5,28.5).curveTo(-1.1,30.4,-1.5,31.2).lineTo(-1.5,31.3).curveTo(-2,32.1,-2.7,31.7).lineTo(-7.6,32.2).curveTo(-10.1,32.6,-12,33.6).curveTo(-14.4,34.8,-15.9,36.3).curveTo(-17.9,38.2,-18.4,40.4).curveTo(-18.5,40.8,-18.9,40.8).lineTo(-19,40.8).closePath();
	this.shape_3.setTransform(19.6,40.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-19,40.8).curveTo(-19.1,40.8,-19.2,40.7).curveTo(-19.2,40.7,-19.3,40.7).curveTo(-19.3,40.6,-19.3,40.6).curveTo(-19.4,40.5,-19.4,40.5).curveTo(-19.8,39,-19.4,37.4).curveTo(-19.2,36.2,-18.3,34.5).curveTo(-16.7,31.8,-14,30.1).curveTo(-11,28.3,-8,28.1).curveTo(-5.1,27.9,-3,29.2).curveTo(-2.8,27.9,-2.6,25.6).lineTo(-2.7,20.5).lineTo(-3.3,10.1).curveTo(-4.4,-4.6,-4.5,-10.8).curveTo(-4.7,-16.7,-4.2,-21.5).curveTo(-3.7,-25.2,-3,-27.1).lineTo(-2.3,-28.6).lineTo(0,-32).curveTo(3.7,-36.6,8.8,-38.9).curveTo(13.9,-41,19.4,-40.8).curveTo(19.5,-40.8,19.5,-40.8).curveTo(19.5,-40.8,19.6,-40.7).curveTo(19.6,-40.7,19.6,-40.7).curveTo(19.6,-40.6,19.6,-40.5).curveTo(19.6,-40.5,19.6,-40.5).curveTo(19.6,-40.4,19.6,-40.4).curveTo(19.6,-40.4,19.5,-40.4).curveTo(19.5,-40.3,19.5,-40.3).curveTo(13.5,-38.5,10.2,-36.3).curveTo(6.3,-33.9,3.2,-29.6).curveTo(2.5,-28.7,1.9,-27.6).lineTo(0.8,-25.7).curveTo(0.2,-23.9,-0,-21.1).curveTo(-0.3,-18.2,-0.3,-10.9).curveTo(-0.2,-4,0.3,10).curveTo(0.4,17,0.3,20.5).lineTo(-0.1,25.8).lineTo(-0.5,28.5).curveTo(-1.1,30.4,-1.5,31.2).lineTo(-1.5,31.3).curveTo(-2,32.1,-2.7,31.7).lineTo(-7.6,32.2).curveTo(-10.1,32.6,-12,33.6).curveTo(-14.4,34.8,-15.9,36.3).curveTo(-17.9,38.2,-18.4,40.4).curveTo(-18.5,40.8,-18.9,40.8).lineTo(-19,40.8).closePath();
	this.shape_4.setTransform(19.6,40.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-19,40.8).curveTo(-19.1,40.8,-19.2,40.7).curveTo(-19.2,40.7,-19.3,40.7).curveTo(-19.3,40.6,-19.3,40.6).curveTo(-19.4,40.5,-19.4,40.5).curveTo(-19.8,39,-19.4,37.4).curveTo(-19.2,36.2,-18.3,34.5).curveTo(-16.7,31.8,-14,30.1).curveTo(-11,28.3,-8,28.1).curveTo(-5.1,27.9,-3,29.2).curveTo(-2.8,27.9,-2.6,25.6).lineTo(-2.7,20.5).lineTo(-3.3,10.1).curveTo(-4.4,-4.6,-4.5,-10.8).curveTo(-4.7,-16.7,-4.2,-21.5).curveTo(-3.7,-25.2,-3,-27.1).lineTo(-2.3,-28.6).lineTo(0,-32).curveTo(3.7,-36.6,8.8,-38.9).curveTo(13.9,-41,19.4,-40.8).curveTo(19.5,-40.8,19.5,-40.8).curveTo(19.5,-40.8,19.6,-40.7).curveTo(19.6,-40.7,19.6,-40.7).curveTo(19.6,-40.6,19.6,-40.5).curveTo(19.6,-40.5,19.6,-40.5).curveTo(19.6,-40.4,19.6,-40.4).curveTo(19.6,-40.4,19.5,-40.4).curveTo(19.5,-40.3,19.5,-40.3).curveTo(13.5,-38.5,10.2,-36.3).curveTo(6.3,-33.9,3.2,-29.6).curveTo(2.5,-28.7,1.9,-27.6).lineTo(0.8,-25.7).curveTo(0.2,-23.9,-0,-21.1).curveTo(-0.3,-18.2,-0.3,-10.9).curveTo(-0.2,-4,0.3,10).curveTo(0.4,17,0.3,20.5).lineTo(-0.1,25.8).lineTo(-0.5,28.5).curveTo(-1.1,30.4,-1.5,31.2).lineTo(-1.5,31.3).curveTo(-2,32.1,-2.7,31.7).lineTo(-7.6,32.2).curveTo(-10.1,32.6,-12,33.6).curveTo(-14.4,34.8,-15.9,36.3).curveTo(-17.9,38.2,-18.4,40.4).curveTo(-18.5,40.8,-18.9,40.8).lineTo(-19,40.8).closePath();
	this.shape_5.setTransform(19.6,40.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-19,40.8).curveTo(-19.1,40.8,-19.2,40.7).curveTo(-19.2,40.7,-19.3,40.7).curveTo(-19.3,40.6,-19.3,40.6).curveTo(-19.4,40.5,-19.4,40.5).curveTo(-19.8,39,-19.4,37.4).curveTo(-19.2,36.2,-18.3,34.5).curveTo(-16.7,31.8,-14,30.1).curveTo(-11,28.3,-8,28.1).curveTo(-5.1,27.9,-3,29.2).curveTo(-2.8,27.9,-2.6,25.6).lineTo(-2.7,20.5).lineTo(-3.3,10.1).curveTo(-4.4,-4.6,-4.5,-10.8).curveTo(-4.7,-16.7,-4.2,-21.5).curveTo(-3.7,-25.2,-3,-27.1).lineTo(-2.3,-28.6).lineTo(0,-32).curveTo(3.7,-36.6,8.8,-38.9).curveTo(13.9,-41,19.4,-40.8).curveTo(19.5,-40.8,19.5,-40.8).curveTo(19.5,-40.8,19.6,-40.7).curveTo(19.6,-40.7,19.6,-40.7).curveTo(19.6,-40.6,19.6,-40.5).curveTo(19.6,-40.5,19.6,-40.5).curveTo(19.6,-40.4,19.6,-40.4).curveTo(19.6,-40.4,19.5,-40.4).curveTo(19.5,-40.3,19.5,-40.3).curveTo(13.5,-38.5,10.2,-36.3).curveTo(6.3,-33.9,3.2,-29.6).curveTo(2.5,-28.7,1.9,-27.6).lineTo(0.8,-25.7).curveTo(0.2,-23.9,-0,-21.1).curveTo(-0.3,-18.2,-0.3,-10.9).curveTo(-0.2,-4,0.3,10).curveTo(0.4,17,0.3,20.5).lineTo(-0.1,25.8).lineTo(-0.5,28.5).curveTo(-1.1,30.4,-1.5,31.2).lineTo(-1.5,31.3).curveTo(-2,32.1,-2.7,31.7).lineTo(-7.6,32.2).curveTo(-10.1,32.6,-12,33.6).curveTo(-14.4,34.8,-15.9,36.3).curveTo(-17.9,38.2,-18.4,40.4).curveTo(-18.5,40.8,-18.9,40.8).lineTo(-19,40.8).closePath();
	this.shape_6.setTransform(19.6,40.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-19,40.8).curveTo(-19.1,40.8,-19.2,40.7).curveTo(-19.2,40.7,-19.3,40.7).curveTo(-19.3,40.6,-19.3,40.6).curveTo(-19.4,40.5,-19.4,40.5).curveTo(-19.8,39,-19.4,37.4).curveTo(-19.2,36.2,-18.3,34.5).curveTo(-16.7,31.8,-14,30.1).curveTo(-11,28.3,-8,28.1).curveTo(-5.1,27.9,-3,29.2).curveTo(-2.8,27.9,-2.6,25.6).lineTo(-2.7,20.5).lineTo(-3.3,10.1).curveTo(-4.4,-4.6,-4.5,-10.8).curveTo(-4.7,-16.7,-4.2,-21.5).curveTo(-3.7,-25.2,-3,-27.1).lineTo(-2.3,-28.6).lineTo(0,-32).curveTo(3.7,-36.6,8.8,-38.9).curveTo(13.9,-41,19.4,-40.8).curveTo(19.5,-40.8,19.5,-40.8).curveTo(19.5,-40.8,19.6,-40.7).curveTo(19.6,-40.7,19.6,-40.7).curveTo(19.6,-40.6,19.6,-40.5).curveTo(19.6,-40.5,19.6,-40.5).curveTo(19.6,-40.4,19.6,-40.4).curveTo(19.6,-40.4,19.5,-40.4).curveTo(19.5,-40.3,19.5,-40.3).curveTo(13.5,-38.5,10.2,-36.3).curveTo(6.3,-33.9,3.2,-29.6).curveTo(2.5,-28.7,1.9,-27.6).lineTo(0.8,-25.7).curveTo(0.2,-23.9,-0,-21.1).curveTo(-0.3,-18.2,-0.3,-10.9).curveTo(-0.2,-4,0.3,10).curveTo(0.4,17,0.3,20.5).lineTo(-0.1,25.8).lineTo(-0.5,28.5).curveTo(-1.1,30.4,-1.5,31.2).lineTo(-1.5,31.3).curveTo(-2,32.1,-2.7,31.7).lineTo(-7.6,32.2).curveTo(-10.1,32.6,-12,33.6).curveTo(-14.4,34.8,-15.9,36.3).curveTo(-17.9,38.2,-18.4,40.4).curveTo(-18.5,40.8,-18.9,40.8).lineTo(-19,40.8).closePath();
	this.shape_7.setTransform(19.6,40.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-19,40.8).curveTo(-19.1,40.8,-19.2,40.7).curveTo(-19.2,40.7,-19.3,40.7).curveTo(-19.3,40.6,-19.3,40.6).curveTo(-19.4,40.5,-19.4,40.5).curveTo(-19.8,39,-19.4,37.4).curveTo(-19.2,36.2,-18.3,34.5).curveTo(-16.7,31.8,-14,30.1).curveTo(-11,28.3,-8,28.1).curveTo(-5.1,27.9,-3,29.2).curveTo(-2.8,27.9,-2.6,25.6).lineTo(-2.7,20.5).lineTo(-3.3,10.1).curveTo(-4.4,-4.6,-4.5,-10.8).curveTo(-4.7,-16.7,-4.2,-21.5).curveTo(-3.7,-25.2,-3,-27.1).lineTo(-2.3,-28.6).lineTo(0,-32).curveTo(3.7,-36.6,8.8,-38.9).curveTo(13.9,-41,19.4,-40.8).curveTo(19.5,-40.8,19.5,-40.8).curveTo(19.5,-40.8,19.6,-40.7).curveTo(19.6,-40.7,19.6,-40.7).curveTo(19.6,-40.6,19.6,-40.5).curveTo(19.6,-40.5,19.6,-40.5).curveTo(19.6,-40.4,19.6,-40.4).curveTo(19.6,-40.4,19.5,-40.4).curveTo(19.5,-40.3,19.5,-40.3).curveTo(13.5,-38.5,10.2,-36.3).curveTo(6.3,-33.9,3.2,-29.6).curveTo(2.5,-28.7,1.9,-27.6).lineTo(0.8,-25.7).curveTo(0.2,-23.9,-0,-21.1).curveTo(-0.3,-18.2,-0.3,-10.9).curveTo(-0.2,-4,0.3,10).curveTo(0.4,17,0.3,20.5).lineTo(-0.1,25.8).lineTo(-0.5,28.5).curveTo(-1.1,30.4,-1.5,31.2).lineTo(-1.5,31.3).curveTo(-2,32.1,-2.7,31.7).lineTo(-7.6,32.2).curveTo(-10.1,32.6,-12,33.6).curveTo(-14.4,34.8,-15.9,36.3).curveTo(-17.9,38.2,-18.4,40.4).curveTo(-18.5,40.8,-18.9,40.8).lineTo(-19,40.8).closePath();
	this.shape_8.setTransform(19.6,40.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-19,40.8).curveTo(-19.1,40.8,-19.2,40.7).curveTo(-19.2,40.7,-19.3,40.7).curveTo(-19.3,40.6,-19.3,40.6).curveTo(-19.4,40.5,-19.4,40.5).curveTo(-19.8,39,-19.4,37.4).curveTo(-19.2,36.2,-18.3,34.5).curveTo(-16.7,31.8,-14,30.1).curveTo(-11,28.3,-8,28.1).curveTo(-5.1,27.9,-3,29.2).curveTo(-2.8,27.9,-2.6,25.6).lineTo(-2.7,20.5).lineTo(-3.3,10.1).curveTo(-4.4,-4.6,-4.5,-10.8).curveTo(-4.7,-16.7,-4.2,-21.5).curveTo(-3.7,-25.2,-3,-27.1).lineTo(-2.3,-28.6).lineTo(0,-32).curveTo(3.7,-36.6,8.8,-38.9).curveTo(13.9,-41,19.4,-40.8).curveTo(19.5,-40.8,19.5,-40.8).curveTo(19.5,-40.8,19.6,-40.7).curveTo(19.6,-40.7,19.6,-40.7).curveTo(19.6,-40.6,19.6,-40.5).curveTo(19.6,-40.5,19.6,-40.5).curveTo(19.6,-40.4,19.6,-40.4).curveTo(19.6,-40.4,19.5,-40.4).curveTo(19.5,-40.3,19.5,-40.3).curveTo(13.5,-38.5,10.2,-36.3).curveTo(6.3,-33.9,3.2,-29.6).curveTo(2.5,-28.7,1.9,-27.6).lineTo(0.8,-25.7).curveTo(0.2,-23.9,-0,-21.1).curveTo(-0.3,-18.2,-0.3,-10.9).curveTo(-0.2,-4,0.3,10).curveTo(0.4,17,0.3,20.5).lineTo(-0.1,25.8).lineTo(-0.5,28.5).curveTo(-1.1,30.4,-1.5,31.2).lineTo(-1.5,31.3).curveTo(-2,32.1,-2.7,31.7).lineTo(-7.6,32.2).curveTo(-10.1,32.6,-12,33.6).curveTo(-14.4,34.8,-15.9,36.3).curveTo(-17.9,38.2,-18.4,40.4).curveTo(-18.5,40.8,-18.9,40.8).lineTo(-19,40.8).closePath();
	this.shape_9.setTransform(19.6,40.8);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,39.3,81.7);


(lib.Textos_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Animar2("synched",0);
	this.instance.setTransform(77.6,-128.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:31.5,alpha:1},20,cjs.Ease.get(1)).to({startPosition:0},25).to({alpha:0.5},15,cjs.Ease.get(-0.99)).to({startPosition:0},15).to({scaleX:1.2,scaleY:1.2,alpha:1},5).to({scaleX:1,scaleY:1},5).to({alpha:0.5},25).to({startPosition:0},70).wait(1));

	// Capa 2
	this.instance_1 = new lib.Animar3("synched",0);
	this.instance_1.setTransform(81.8,-78.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({startPosition:0,_off:false},0).to({y:81.5,alpha:1},20,cjs.Ease.get(1)).to({startPosition:0},15).to({alpha:0.5},15,cjs.Ease.get(-0.99)).to({startPosition:0},50).to({scaleX:1.2,scaleY:1.2,alpha:1},5).to({scaleX:1,scaleY:1},5).to({alpha:0.5},25).to({startPosition:0},35).wait(1));

	// Capa 3
	this.instance_2 = new lib.Animar4("synched",0);
	this.instance_2.setTransform(82.3,-28.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({startPosition:0,_off:false},0).to({y:131.5,alpha:1},20,cjs.Ease.get(1)).to({startPosition:0},5).to({alpha:0.5},15,cjs.Ease.get(-0.99)).to({startPosition:0},85).to({scaleX:1.2,scaleY:1.2,alpha:1},5).to({scaleX:1,scaleY:1},5).to({alpha:0.5},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.8,-139.6,150.4,32.2);


(lib.Ojos_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#3C3355").beginStroke().moveTo(-17.7,6.6).lineTo(-19.3,5.7).lineTo(-18.7,4.5).curveTo(-14.3,5.8,-10.2,4).curveTo(-7.4,2.7,-4.9,1).lineTo(-4.2,1.8).curveTo(-5.5,5.3,-9,6.9).curveTo(-11,7.9,-13.1,7.9).curveTo(-15.4,7.9,-17.7,6.6).closePath().moveTo(3.2,1.2).lineTo(1.2,0.4).lineTo(1.7,-1.3).curveTo(7.4,-0.3,12.2,-3.3).curveTo(15.4,-5.3,18.3,-7.9).lineTo(19.3,-6.9).curveTo(18.2,-2.5,14.1,0.1).curveTo(11.1,2.1,7.8,2.1).curveTo(5.5,2.1,3.2,1.2).closePath();
	this.shape.setTransform(19.7,15.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},40).to({state:[]},5).to({state:[{t:this.shape}]},5).to({state:[]},5).wait(65));

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#807BB4").beginStroke().moveTo(-2,2.6).curveTo(-2.9,1.7,-2.9,0.4).curveTo(-2.9,-1,-2,-1.9).curveTo(-1,-2.9,0.3,-2.9).curveTo(1.7,-2.9,2.6,-1.9).curveTo(3.6,-1,1.3,1.3).curveTo(-0.3,2.9,-1.3,2.9).curveTo(-1.7,2.9,-2,2.6).closePath();
	this.shape_1.setTransform(6.3,17);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#807BB4").beginStroke().moveTo(-2.7,3.6).curveTo(-4,2.3,-4,0.5).curveTo(-4,-1.4,-2.7,-2.7).curveTo(-1.4,-4,0.5,-4).curveTo(2.3,-4,3.6,-2.7).curveTo(4.9,-1.4,1.8,1.8).curveTo(-0.5,4,-1.8,4).curveTo(-2.3,4,-2.7,3.6).closePath();
	this.shape_2.setTransform(27.8,9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginRadialGradientFill(["#635095","#32284B"],[0,1],-2.1,-2.1,0,-2.1,-2.1,6.5).beginStroke().moveTo(-4.6,4.6).curveTo(-6.5,2.7,-6.5,0).curveTo(-6.5,-2.7,-4.6,-4.6).curveTo(-2.7,-6.5,0,-6.5).curveTo(2.7,-6.5,4.6,-4.6).curveTo(6.5,-2.7,6.5,0).curveTo(6.5,2.7,4.6,4.6).curveTo(2.7,6.5,0,6.5).curveTo(-2.7,6.5,-4.6,4.6).closePath();
	this.shape_3.setTransform(7.9,18.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginRadialGradientFill(["#635095","#32284B"],[0,1],-3.4,-2.6,0,-3.4,-2.6,9).beginStroke().moveTo(-6.3,6.4).curveTo(-9,3.8,-9,-0).curveTo(-9,-3.7,-6.3,-6.3).curveTo(-3.7,-9,-0,-9).curveTo(3.7,-9,6.4,-6.3).curveTo(9,-3.7,9,-0).curveTo(9,3.8,6.4,6.4).curveTo(3.7,9,-0,9).curveTo(-3.7,9,-6.3,6.4).closePath();
	this.shape_4.setTransform(29.9,11.1);

	this.instance = new lib.Path_21();
	this.instance.setTransform(8.6,19.3,1,1,0,0,0,8.6,8.6);
	this.instance.alpha = 0.602;

	this.instance_1 = new lib.Path_22();
	this.instance_1.setTransform(30.8,12,1,1,0,0,0,12,12);
	this.instance_1.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[]},40).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},5).to({state:[]},5).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},5).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.8,27.8);


(lib.Boca_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().moveTo(-37.2,18.4).curveTo(-42.8,14.6,-45.7,9.7).curveTo(-48.2,5.5,-47.2,4.3).curveTo(-45.5,2.2,-1.2,-12).curveTo(43.3,-26.3,45.8,-25.2).curveTo(47.5,-24.5,47.5,-18.6).curveTo(47.5,-11.7,44.4,-4.6).curveTo(35.4,16.1,7.3,22.8).curveTo(-3.3,25.3,-12.2,25.3).curveTo(-26.9,25.3,-37.2,18.4).closePath();
	var mask_graphics_1 = new cjs.Graphics().moveTo(-37.2,18.4).curveTo(-42.8,14.6,-45.7,9.7).curveTo(-48.2,5.5,-47.2,4.3).curveTo(-45.5,2.2,-1.2,-12).curveTo(43.3,-26.3,45.8,-25.2).curveTo(47.5,-24.5,47.5,-18.6).curveTo(47.5,-11.7,44.4,-4.6).curveTo(35.4,16.1,7.3,22.8).curveTo(-3.3,25.3,-12.2,25.3).curveTo(-26.9,25.3,-37.2,18.4).closePath();
	var mask_graphics_2 = new cjs.Graphics().moveTo(-37.2,18.4).curveTo(-42.8,14.6,-45.7,9.7).curveTo(-48.2,5.5,-47.2,4.3).curveTo(-45.5,2.2,-1.2,-12).curveTo(43.3,-26.3,45.8,-25.2).curveTo(47.5,-24.5,47.5,-18.6).curveTo(47.5,-11.7,44.4,-4.6).curveTo(35.4,16.1,7.3,22.8).curveTo(-3.3,25.3,-12.2,25.3).curveTo(-26.9,25.3,-37.2,18.4).closePath();
	var mask_graphics_3 = new cjs.Graphics().moveTo(-37.2,18.4).curveTo(-42.8,14.6,-45.7,9.7).curveTo(-48.2,5.5,-47.2,4.3).curveTo(-45.5,2.2,-1.2,-12).curveTo(43.3,-26.3,45.8,-25.2).curveTo(47.5,-24.5,47.5,-18.6).curveTo(47.5,-11.7,44.4,-4.6).curveTo(35.4,16.1,7.3,22.8).curveTo(-3.3,25.3,-12.2,25.3).curveTo(-26.9,25.3,-37.2,18.4).closePath();
	var mask_graphics_4 = new cjs.Graphics().moveTo(-37.2,18.4).curveTo(-42.8,14.6,-45.7,9.7).curveTo(-48.2,5.5,-47.2,4.3).curveTo(-45.5,2.2,-1.2,-12).curveTo(43.3,-26.3,45.8,-25.2).curveTo(47.5,-24.5,47.5,-18.6).curveTo(47.5,-11.7,44.4,-4.6).curveTo(35.4,16.1,7.3,22.8).curveTo(-3.3,25.3,-12.2,25.3).curveTo(-26.9,25.3,-37.2,18.4).closePath();
	var mask_graphics_5 = new cjs.Graphics().moveTo(-37.2,18.4).curveTo(-42.8,14.6,-45.7,9.7).curveTo(-48.2,5.5,-47.2,4.3).curveTo(-45.5,2.2,-1.2,-12).curveTo(43.3,-26.3,45.8,-25.2).curveTo(47.5,-24.5,47.5,-18.6).curveTo(47.5,-11.7,44.4,-4.6).curveTo(35.4,16.1,7.3,22.8).curveTo(-3.3,25.3,-12.2,25.3).curveTo(-26.9,25.3,-37.2,18.4).closePath();
	var mask_graphics_6 = new cjs.Graphics().moveTo(-37.2,18.4).curveTo(-42.8,14.6,-45.7,9.7).curveTo(-48.2,5.5,-47.2,4.3).curveTo(-45.5,2.2,-1.2,-12).curveTo(43.3,-26.3,45.8,-25.2).curveTo(47.5,-24.5,47.5,-18.6).curveTo(47.5,-11.7,44.4,-4.6).curveTo(35.4,16.1,7.3,22.8).curveTo(-3.3,25.3,-12.2,25.3).curveTo(-26.9,25.3,-37.2,18.4).closePath();
	var mask_graphics_7 = new cjs.Graphics().moveTo(-37.2,18.4).curveTo(-42.8,14.6,-45.7,9.7).curveTo(-48.2,5.5,-47.2,4.3).curveTo(-45.5,2.2,-1.2,-12).curveTo(43.3,-26.3,45.8,-25.2).curveTo(47.5,-24.5,47.5,-18.6).curveTo(47.5,-11.7,44.4,-4.6).curveTo(35.4,16.1,7.3,22.8).curveTo(-3.3,25.3,-12.2,25.3).curveTo(-26.9,25.3,-37.2,18.4).closePath();
	var mask_graphics_8 = new cjs.Graphics().moveTo(-37.2,18.4).curveTo(-42.8,14.6,-45.7,9.7).curveTo(-48.2,5.5,-47.2,4.3).curveTo(-45.5,2.2,-1.2,-12).curveTo(43.3,-26.3,45.8,-25.2).curveTo(47.5,-24.5,47.5,-18.6).curveTo(47.5,-11.7,44.4,-4.6).curveTo(35.4,16.1,7.3,22.8).curveTo(-3.3,25.3,-12.2,25.3).curveTo(-26.9,25.3,-37.2,18.4).closePath();
	var mask_graphics_9 = new cjs.Graphics().moveTo(-37.2,18.4).curveTo(-42.8,14.6,-45.7,9.7).curveTo(-48.2,5.5,-47.2,4.3).curveTo(-45.5,2.2,-1.2,-12).curveTo(43.3,-26.3,45.8,-25.2).curveTo(47.5,-24.5,47.5,-18.6).curveTo(47.5,-11.7,44.4,-4.6).curveTo(35.4,16.1,7.3,22.8).curveTo(-3.3,25.3,-12.2,25.3).curveTo(-26.9,25.3,-37.2,18.4).closePath();
	var mask_graphics_10 = new cjs.Graphics().moveTo(-37.2,18.4).curveTo(-42.8,14.6,-45.7,9.7).curveTo(-48.2,5.5,-47.2,4.3).curveTo(-45.5,2.2,-1.2,-12).curveTo(43.3,-26.3,45.8,-25.2).curveTo(47.5,-24.5,47.5,-18.6).curveTo(47.5,-11.7,44.4,-4.6).curveTo(35.4,16.1,7.3,22.8).curveTo(-3.3,25.3,-12.2,25.3).curveTo(-26.9,25.3,-37.2,18.4).closePath();
	var mask_graphics_11 = new cjs.Graphics().moveTo(-37.2,18.4).curveTo(-42.8,14.6,-45.7,9.7).curveTo(-48.2,5.5,-47.2,4.3).curveTo(-45.5,2.2,-1.2,-12).curveTo(43.3,-26.3,45.8,-25.2).curveTo(47.5,-24.5,47.5,-18.6).curveTo(47.5,-11.7,44.4,-4.6).curveTo(35.4,16.1,7.3,22.8).curveTo(-3.3,25.3,-12.2,25.3).curveTo(-26.9,25.3,-37.2,18.4).closePath();
	var mask_graphics_12 = new cjs.Graphics().moveTo(-37.2,18.4).curveTo(-42.8,14.6,-45.7,9.7).curveTo(-48.2,5.5,-47.2,4.3).curveTo(-45.5,2.2,-1.2,-12).curveTo(43.3,-26.3,45.8,-25.2).curveTo(47.5,-24.5,47.5,-18.6).curveTo(47.5,-11.7,44.4,-4.6).curveTo(35.4,16.1,7.3,22.8).curveTo(-3.3,25.3,-12.2,25.3).curveTo(-26.9,25.3,-37.2,18.4).closePath();
	var mask_graphics_13 = new cjs.Graphics().moveTo(-37.2,18.4).curveTo(-42.8,14.6,-45.7,9.7).curveTo(-48.2,5.5,-47.2,4.3).curveTo(-45.5,2.2,-1.2,-12).curveTo(43.3,-26.3,45.8,-25.2).curveTo(47.5,-24.5,47.5,-18.6).curveTo(47.5,-11.7,44.4,-4.6).curveTo(35.4,16.1,7.3,22.8).curveTo(-3.3,25.3,-12.2,25.3).curveTo(-26.9,25.3,-37.2,18.4).closePath();
	var mask_graphics_14 = new cjs.Graphics().moveTo(-37.2,18.4).curveTo(-42.8,14.6,-45.7,9.7).curveTo(-48.2,5.5,-47.2,4.3).curveTo(-45.5,2.2,-1.2,-12).curveTo(43.3,-26.3,45.8,-25.2).curveTo(47.5,-24.5,47.5,-18.6).curveTo(47.5,-11.7,44.4,-4.6).curveTo(35.4,16.1,7.3,22.8).curveTo(-3.3,25.3,-12.2,25.3).curveTo(-26.9,25.3,-37.2,18.4).closePath();
	var mask_graphics_15 = new cjs.Graphics().moveTo(-37.2,18.4).curveTo(-42.8,14.6,-45.7,9.7).curveTo(-48.2,5.5,-47.2,4.3).curveTo(-45.5,2.2,-1.2,-12).curveTo(43.3,-26.3,45.8,-25.2).curveTo(47.5,-24.5,47.5,-18.6).curveTo(47.5,-11.7,44.4,-4.6).curveTo(35.4,16.1,7.3,22.8).curveTo(-3.3,25.3,-12.2,25.3).curveTo(-26.9,25.3,-37.2,18.4).closePath();
	var mask_graphics_16 = new cjs.Graphics().moveTo(-37.2,18.4).curveTo(-42.8,14.6,-45.7,9.7).curveTo(-48.2,5.5,-47.2,4.3).curveTo(-45.5,2.2,-1.2,-12).curveTo(43.3,-26.3,45.8,-25.2).curveTo(47.5,-24.5,47.5,-18.6).curveTo(47.5,-11.7,44.4,-4.6).curveTo(35.4,16.1,7.3,22.8).curveTo(-3.3,25.3,-12.2,25.3).curveTo(-26.9,25.3,-37.2,18.4).closePath();
	var mask_graphics_17 = new cjs.Graphics().moveTo(-37.2,18.4).curveTo(-42.8,14.6,-45.7,9.7).curveTo(-48.2,5.5,-47.2,4.3).curveTo(-45.5,2.2,-1.2,-12).curveTo(43.3,-26.3,45.8,-25.2).curveTo(47.5,-24.5,47.5,-18.6).curveTo(47.5,-11.7,44.4,-4.6).curveTo(35.4,16.1,7.3,22.8).curveTo(-3.3,25.3,-12.2,25.3).curveTo(-26.9,25.3,-37.2,18.4).closePath();
	var mask_graphics_18 = new cjs.Graphics().moveTo(-37.2,18.4).curveTo(-42.8,14.6,-45.7,9.7).curveTo(-48.2,5.5,-47.2,4.3).curveTo(-45.5,2.2,-1.2,-12).curveTo(43.3,-26.3,45.8,-25.2).curveTo(47.5,-24.5,47.5,-18.6).curveTo(47.5,-11.7,44.4,-4.6).curveTo(35.4,16.1,7.3,22.8).curveTo(-3.3,25.3,-12.2,25.3).curveTo(-26.9,25.3,-37.2,18.4).closePath();
	var mask_graphics_19 = new cjs.Graphics().moveTo(-37.2,18.4).curveTo(-42.8,14.6,-45.7,9.7).curveTo(-48.2,5.5,-47.2,4.3).curveTo(-45.5,2.2,-1.2,-12).curveTo(43.3,-26.3,45.8,-25.2).curveTo(47.5,-24.5,47.5,-18.6).curveTo(47.5,-11.7,44.4,-4.6).curveTo(35.4,16.1,7.3,22.8).curveTo(-3.3,25.3,-12.2,25.3).curveTo(-26.9,25.3,-37.2,18.4).closePath();
	var mask_graphics_20 = new cjs.Graphics().moveTo(-37.2,18.4).curveTo(-42.8,14.6,-45.7,9.7).curveTo(-48.2,5.5,-47.2,4.3).curveTo(-45.5,2.2,-1.2,-12).curveTo(43.3,-26.3,45.8,-25.2).curveTo(47.5,-24.5,47.5,-18.6).curveTo(47.5,-11.7,44.4,-4.6).curveTo(35.4,16.1,7.3,22.8).curveTo(-3.3,25.3,-12.2,25.3).curveTo(-26.9,25.3,-37.2,18.4).closePath();
	var mask_graphics_21 = new cjs.Graphics().moveTo(-37.2,18.4).curveTo(-42.8,14.6,-45.7,9.7).curveTo(-48.2,5.5,-47.2,4.3).curveTo(-45.5,2.2,-1.2,-12).curveTo(43.3,-26.3,45.8,-25.2).curveTo(47.5,-24.5,47.5,-18.6).curveTo(47.5,-11.7,44.4,-4.6).curveTo(35.4,16.1,7.3,22.8).curveTo(-3.3,25.3,-12.2,25.3).curveTo(-26.9,25.3,-37.2,18.4).closePath();
	var mask_graphics_22 = new cjs.Graphics().moveTo(-37.2,18.4).curveTo(-42.8,14.6,-45.7,9.7).curveTo(-48.2,5.5,-47.2,4.3).curveTo(-45.5,2.2,-1.2,-12).curveTo(43.3,-26.3,45.8,-25.2).curveTo(47.5,-24.5,47.5,-18.6).curveTo(47.5,-11.7,44.4,-4.6).curveTo(35.4,16.1,7.3,22.8).curveTo(-3.3,25.3,-12.2,25.3).curveTo(-26.9,25.3,-37.2,18.4).closePath();
	var mask_graphics_23 = new cjs.Graphics().moveTo(-37.2,18.4).curveTo(-42.8,14.6,-45.7,9.7).curveTo(-48.2,5.5,-47.2,4.3).curveTo(-45.5,2.2,-1.2,-12).curveTo(43.3,-26.3,45.8,-25.2).curveTo(47.5,-24.5,47.5,-18.6).curveTo(47.5,-11.7,44.4,-4.6).curveTo(35.4,16.1,7.3,22.8).curveTo(-3.3,25.3,-12.2,25.3).curveTo(-26.9,25.3,-37.2,18.4).closePath();
	var mask_graphics_24 = new cjs.Graphics().moveTo(-37.2,18.4).curveTo(-42.8,14.6,-45.7,9.7).curveTo(-48.2,5.5,-47.2,4.3).curveTo(-45.5,2.2,-1.2,-12).curveTo(43.3,-26.3,45.8,-25.2).curveTo(47.5,-24.5,47.5,-18.6).curveTo(47.5,-11.7,44.4,-4.6).curveTo(35.4,16.1,7.3,22.8).curveTo(-3.3,25.3,-12.2,25.3).curveTo(-26.9,25.3,-37.2,18.4).closePath();
	var mask_graphics_25 = new cjs.Graphics().moveTo(-37.2,18.4).curveTo(-42.8,14.6,-45.7,9.7).curveTo(-48.2,5.5,-47.2,4.3).curveTo(-45.5,2.2,-1.2,-12).curveTo(43.3,-26.3,45.8,-25.2).curveTo(47.5,-24.5,47.5,-18.6).curveTo(47.5,-11.7,44.4,-4.6).curveTo(35.4,16.1,7.3,22.8).curveTo(-3.3,25.3,-12.2,25.3).curveTo(-26.9,25.3,-37.2,18.4).closePath();
	var mask_graphics_26 = new cjs.Graphics().moveTo(-37.2,18.4).curveTo(-42.8,14.6,-45.7,9.7).curveTo(-48.2,5.5,-47.2,4.3).curveTo(-45.5,2.2,-1.2,-12).curveTo(43.3,-26.3,45.8,-25.2).curveTo(47.5,-24.5,47.5,-18.6).curveTo(47.5,-11.7,44.4,-4.6).curveTo(35.4,16.1,7.3,22.8).curveTo(-3.3,25.3,-12.2,25.3).curveTo(-26.9,25.3,-37.2,18.4).closePath();
	var mask_graphics_27 = new cjs.Graphics().moveTo(-37.2,18.4).curveTo(-42.8,14.6,-45.7,9.7).curveTo(-48.2,5.5,-47.2,4.3).curveTo(-45.5,2.2,-1.2,-12).curveTo(43.3,-26.3,45.8,-25.2).curveTo(47.5,-24.5,47.5,-18.6).curveTo(47.5,-11.7,44.4,-4.6).curveTo(35.4,16.1,7.3,22.8).curveTo(-3.3,25.3,-12.2,25.3).curveTo(-26.9,25.3,-37.2,18.4).closePath();
	var mask_graphics_28 = new cjs.Graphics().moveTo(-37.2,18.4).curveTo(-42.8,14.6,-45.7,9.7).curveTo(-48.2,5.5,-47.2,4.3).curveTo(-45.5,2.2,-1.2,-12).curveTo(43.3,-26.3,45.8,-25.2).curveTo(47.5,-24.5,47.5,-18.6).curveTo(47.5,-11.7,44.4,-4.6).curveTo(35.4,16.1,7.3,22.8).curveTo(-3.3,25.3,-12.2,25.3).curveTo(-26.9,25.3,-37.2,18.4).closePath();
	var mask_graphics_29 = new cjs.Graphics().moveTo(-37.2,18.4).curveTo(-42.8,14.6,-45.7,9.7).curveTo(-48.2,5.5,-47.2,4.3).curveTo(-45.5,2.2,-1.2,-12).curveTo(43.3,-26.3,45.8,-25.2).curveTo(47.5,-24.5,47.5,-18.6).curveTo(47.5,-11.7,44.4,-4.6).curveTo(35.4,16.1,7.3,22.8).curveTo(-3.3,25.3,-12.2,25.3).curveTo(-26.9,25.3,-37.2,18.4).closePath();
	var mask_graphics_30 = new cjs.Graphics().moveTo(-37.2,18.4).curveTo(-42.8,14.6,-45.7,9.7).curveTo(-48.2,5.5,-47.2,4.3).curveTo(-45.5,2.2,-1.2,-12).curveTo(43.3,-26.3,45.8,-25.2).curveTo(47.5,-24.5,47.5,-18.6).curveTo(47.5,-11.7,44.4,-4.6).curveTo(35.4,16.1,7.3,22.8).curveTo(-3.3,25.3,-12.2,25.3).curveTo(-26.9,25.3,-37.2,18.4).closePath();
	var mask_graphics_31 = new cjs.Graphics().moveTo(-37.2,18.4).curveTo(-42.8,14.6,-45.7,9.7).curveTo(-48.2,5.5,-47.2,4.3).curveTo(-45.5,2.2,-1.2,-12).curveTo(43.3,-26.3,45.8,-25.2).curveTo(47.5,-24.5,47.5,-18.6).curveTo(47.5,-11.7,44.4,-4.6).curveTo(35.4,16.1,7.3,22.8).curveTo(-3.3,25.3,-12.2,25.3).curveTo(-26.9,25.3,-37.2,18.4).closePath();
	var mask_graphics_32 = new cjs.Graphics().moveTo(-37.2,18.4).curveTo(-42.8,14.6,-45.7,9.7).curveTo(-48.2,5.5,-47.2,4.3).curveTo(-45.5,2.2,-1.2,-12).curveTo(43.3,-26.3,45.8,-25.2).curveTo(47.5,-24.5,47.5,-18.6).curveTo(47.5,-11.7,44.4,-4.6).curveTo(35.4,16.1,7.3,22.8).curveTo(-3.3,25.3,-12.2,25.3).curveTo(-26.9,25.3,-37.2,18.4).closePath();
	var mask_graphics_33 = new cjs.Graphics().moveTo(-37.2,18.4).curveTo(-42.8,14.6,-45.7,9.7).curveTo(-48.2,5.5,-47.2,4.3).curveTo(-45.5,2.2,-1.2,-12).curveTo(43.3,-26.3,45.8,-25.2).curveTo(47.5,-24.5,47.5,-18.6).curveTo(47.5,-11.7,44.4,-4.6).curveTo(35.4,16.1,7.3,22.8).curveTo(-3.3,25.3,-12.2,25.3).curveTo(-26.9,25.3,-37.2,18.4).closePath();
	var mask_graphics_34 = new cjs.Graphics().moveTo(-37.2,18.4).curveTo(-42.8,14.6,-45.7,9.7).curveTo(-48.2,5.5,-47.2,4.3).curveTo(-45.5,2.2,-1.2,-12).curveTo(43.3,-26.3,45.8,-25.2).curveTo(47.5,-24.5,47.5,-18.6).curveTo(47.5,-11.7,44.4,-4.6).curveTo(35.4,16.1,7.3,22.8).curveTo(-3.3,25.3,-12.2,25.3).curveTo(-26.9,25.3,-37.2,18.4).closePath();
	var mask_graphics_35 = new cjs.Graphics().moveTo(-37.2,18.4).curveTo(-42.8,14.6,-45.7,9.7).curveTo(-48.2,5.5,-47.2,4.3).curveTo(-45.5,2.2,-1.2,-12).curveTo(43.3,-26.3,45.8,-25.2).curveTo(47.5,-24.5,47.5,-18.6).curveTo(47.5,-11.7,44.4,-4.6).curveTo(35.4,16.1,7.3,22.8).curveTo(-3.3,25.3,-12.2,25.3).curveTo(-26.9,25.3,-37.2,18.4).closePath();
	var mask_graphics_36 = new cjs.Graphics().moveTo(-37.2,18.4).curveTo(-42.8,14.6,-45.7,9.7).curveTo(-48.2,5.5,-47.2,4.3).curveTo(-45.5,2.2,-1.2,-12).curveTo(43.3,-26.3,45.8,-25.2).curveTo(47.5,-24.5,47.5,-18.6).curveTo(47.5,-11.7,44.4,-4.6).curveTo(35.4,16.1,7.3,22.8).curveTo(-3.3,25.3,-12.2,25.3).curveTo(-26.9,25.3,-37.2,18.4).closePath();
	var mask_graphics_37 = new cjs.Graphics().moveTo(-37.2,18.4).curveTo(-42.8,14.6,-45.7,9.7).curveTo(-48.2,5.5,-47.2,4.3).curveTo(-45.5,2.2,-1.2,-12).curveTo(43.3,-26.3,45.8,-25.2).curveTo(47.5,-24.5,47.5,-18.6).curveTo(47.5,-11.7,44.4,-4.6).curveTo(35.4,16.1,7.3,22.8).curveTo(-3.3,25.3,-12.2,25.3).curveTo(-26.9,25.3,-37.2,18.4).closePath();
	var mask_graphics_38 = new cjs.Graphics().moveTo(-37.2,18.4).curveTo(-42.8,14.6,-45.7,9.7).curveTo(-48.2,5.5,-47.2,4.3).curveTo(-45.5,2.2,-1.2,-12).curveTo(43.3,-26.3,45.8,-25.2).curveTo(47.5,-24.5,47.5,-18.6).curveTo(47.5,-11.7,44.4,-4.6).curveTo(35.4,16.1,7.3,22.8).curveTo(-3.3,25.3,-12.2,25.3).curveTo(-26.9,25.3,-37.2,18.4).closePath();
	var mask_graphics_39 = new cjs.Graphics().moveTo(-37.2,18.4).curveTo(-42.8,14.6,-45.7,9.7).curveTo(-48.2,5.5,-47.2,4.3).curveTo(-45.5,2.2,-1.2,-12).curveTo(43.3,-26.3,45.8,-25.2).curveTo(47.5,-24.5,47.5,-18.6).curveTo(47.5,-11.7,44.4,-4.6).curveTo(35.4,16.1,7.3,22.8).curveTo(-3.3,25.3,-12.2,25.3).curveTo(-26.9,25.3,-37.2,18.4).closePath();
	var mask_graphics_40 = new cjs.Graphics().moveTo(-37.2,18.4).curveTo(-42.8,14.6,-45.7,9.7).curveTo(-48.2,5.5,-47.2,4.3).curveTo(-45.5,2.2,-1.2,-12).curveTo(43.3,-26.3,45.8,-25.2).curveTo(47.5,-24.5,47.5,-18.6).curveTo(47.5,-11.7,44.4,-4.6).curveTo(35.4,16.1,7.3,22.8).curveTo(-3.3,25.3,-12.2,25.3).curveTo(-26.9,25.3,-37.2,18.4).closePath();
	var mask_graphics_41 = new cjs.Graphics().moveTo(-36.4,18.3).curveTo(-41.9,14.6,-44.8,9.7).curveTo(-47.2,5.6,-46.2,4.4).curveTo(-44.6,2.3,-0.8,-11.7).curveTo(43.1,-25.8,45.5,-24.7).curveTo(47.2,-24.1,47.2,-18.2).curveTo(47.2,-11.4,44.1,-4.4).curveTo(35.3,16,7.5,22.6).curveTo(-2.9,25.1,-11.7,25.1).curveTo(-26.3,25.1,-36.4,18.3).closePath();
	var mask_graphics_42 = new cjs.Graphics().moveTo(-35.6,18.3).curveTo(-41.1,14.6,-43.9,9.7).curveTo(-46.3,5.7,-45.3,4.5).curveTo(-43.7,2.5,-0.5,-11.4).curveTo(42.8,-25.3,45.3,-24.3).curveTo(46.9,-23.6,46.9,-17.8).curveTo(46.9,-11.1,43.8,-4.1).curveTo(35.1,16,7.7,22.5).curveTo(-2.6,25,-11.3,25).curveTo(-25.6,25,-35.6,18.3).closePath();
	var mask_graphics_43 = new cjs.Graphics().moveTo(-34.9,18.2).curveTo(-40.2,14.5,-43,9.8).curveTo(-45.4,5.8,-44.5,4.6).curveTo(-42.9,2.6,-0.2,-11.1).curveTo(42.6,-24.8,45,-23.8).curveTo(46.6,-23.1,46.6,-17.4).curveTo(46.6,-10.8,43.6,-3.9).curveTo(35,15.9,7.9,22.4).curveTo(-2.2,24.8,-10.8,24.8).curveTo(-25,24.8,-34.9,18.2).closePath();
	var mask_graphics_44 = new cjs.Graphics().moveTo(-34.1,18.1).curveTo(-39.5,14.5,-42.2,9.8).curveTo(-44.6,5.9,-43.6,4.7).curveTo(-42.1,2.7,0.1,-10.8).curveTo(42.3,-24.4,44.7,-23.4).curveTo(46.3,-22.7,46.3,-17).curveTo(46.3,-10.5,43.3,-3.7).curveTo(34.8,15.9,8.1,22.3).curveTo(-1.9,24.7,-10.4,24.7).curveTo(-24.4,24.7,-34.1,18.1).closePath();
	var mask_graphics_45 = new cjs.Graphics().moveTo(-33.5,18.1).curveTo(-38.7,14.5,-41.4,9.8).curveTo(-43.8,5.9,-42.8,4.8).curveTo(-41.3,2.8,0.3,-10.5).curveTo(42.1,-23.9,44.5,-22.9).curveTo(46,-22.3,46,-16.7).curveTo(46,-10.2,43.1,-3.5).curveTo(34.7,15.9,8.3,22.1).curveTo(-1.6,24.5,-10,24.5).curveTo(-23.8,24.5,-33.5,18.1).closePath();
	var mask_graphics_46 = new cjs.Graphics().moveTo(-32.8,18).curveTo(-38,14.5,-40.7,9.9).curveTo(-43,6,-42.1,4.9).curveTo(-40.5,3,0.6,-10.3).curveTo(41.9,-23.5,44.2,-22.5).curveTo(45.8,-21.9,45.8,-16.3).curveTo(45.8,-9.9,42.9,-3.3).curveTo(34.6,15.8,8.5,22).curveTo(-1.3,24.4,-9.6,24.4).curveTo(-23.3,24.4,-32.8,18).closePath();
	var mask_graphics_47 = new cjs.Graphics().moveTo(-32.2,17.9).curveTo(-37.3,14.4,-40,9.9).curveTo(-42.2,6.1,-41.3,5).curveTo(-39.8,3.1,0.9,-10).curveTo(41.7,-23.1,44,-22.1).curveTo(45.5,-21.5,45.5,-16).curveTo(45.5,-9.7,42.7,-3.2).curveTo(34.5,15.8,8.7,21.9).curveTo(-1,24.2,-9.2,24.2).curveTo(-22.8,24.2,-32.2,17.9).closePath();
	var mask_graphics_48 = new cjs.Graphics().moveTo(-31.5,17.9).curveTo(-36.6,14.4,-39.3,9.9).curveTo(-41.5,6.2,-40.6,5).curveTo(-39.1,3.2,1.1,-9.8).curveTo(41.5,-22.7,43.8,-21.7).curveTo(45.3,-21.1,45.3,-15.7).curveTo(45.3,-9.4,42.5,-3).curveTo(34.3,15.7,8.8,21.8).curveTo(-0.8,24.1,-8.9,24.1).curveTo(-22.3,24.1,-31.5,17.9).closePath();
	var mask_graphics_49 = new cjs.Graphics().moveTo(-31,17.8).curveTo(-36,14.4,-38.6,10).curveTo(-40.8,6.2,-39.9,5.1).curveTo(-38.5,3.3,1.4,-9.5).curveTo(41.3,-22.3,43.6,-21.4).curveTo(45.1,-20.7,45.1,-15.4).curveTo(45.1,-9.2,42.3,-2.8).curveTo(34.2,15.7,9,21.7).curveTo(-0.5,24,-8.5,24).curveTo(-21.8,24,-31,17.8).closePath();
	var mask_graphics_50 = new cjs.Graphics().moveTo(-30.4,17.8).curveTo(-35.4,14.4,-38,10).curveTo(-40.2,6.3,-39.3,5.2).curveTo(-37.8,3.4,1.6,-9.3).curveTo(41.1,-22,43.4,-21).curveTo(44.8,-20.4,44.8,-15.1).curveTo(44.8,-9,42.1,-2.7).curveTo(34.1,15.7,9.1,21.6).curveTo(-0.3,23.9,-8.2,23.9).curveTo(-21.3,23.9,-30.4,17.8).closePath();
	var mask_graphics_51 = new cjs.Graphics().moveTo(-29.9,17.7).curveTo(-34.8,14.4,-37.4,10).curveTo(-39.6,6.4,-38.7,5.3).curveTo(-37.2,3.5,1.8,-9.1).curveTo(41,-21.6,43.2,-20.7).curveTo(44.6,-20.1,44.6,-14.8).curveTo(44.6,-8.8,41.9,-2.5).curveTo(34,15.7,9.3,21.5).curveTo(-0,23.8,-7.9,23.8).curveTo(-20.9,23.8,-29.9,17.7).closePath();
	var mask_graphics_52 = new cjs.Graphics().moveTo(-29.4,17.7).curveTo(-34.3,14.4,-36.8,10).curveTo(-39,6.4,-38.1,5.3).curveTo(-36.7,3.5,2,-8.9).curveTo(40.8,-21.3,43,-20.4).curveTo(44.4,-19.8,44.4,-14.6).curveTo(44.4,-8.6,41.7,-2.4).curveTo(33.9,15.6,9.4,21.5).curveTo(0.2,23.7,-7.6,23.7).curveTo(-20.4,23.7,-29.4,17.7).closePath();
	var mask_graphics_53 = new cjs.Graphics().moveTo(-28.9,17.6).curveTo(-33.7,14.3,-36.3,10.1).curveTo(-38.4,6.5,-37.5,5.4).curveTo(-36.1,3.6,2.2,-8.7).curveTo(40.7,-21,42.8,-20.1).curveTo(44.3,-19.5,44.3,-14.3).curveTo(44.3,-8.4,41.6,-2.2).curveTo(33.8,15.6,9.6,21.4).curveTo(0.4,23.6,-7.3,23.6).curveTo(-20.1,23.6,-28.9,17.6).closePath();
	var mask_graphics_54 = new cjs.Graphics().moveTo(-28.5,17.6).curveTo(-33.3,14.3,-35.7,10.1).curveTo(-37.9,6.5,-37,5.5).curveTo(-35.6,3.7,2.4,-8.5).curveTo(40.5,-20.7,42.7,-19.8).curveTo(44.1,-19.2,44.1,-14.1).curveTo(44.1,-8.2,41.4,-2.1).curveTo(33.8,15.6,9.7,21.3).curveTo(0.6,23.5,-7.1,23.5).curveTo(-19.7,23.5,-28.5,17.6).closePath();
	var mask_graphics_55 = new cjs.Graphics().moveTo(-28,17.5).curveTo(-32.8,14.3,-35.3,10.1).curveTo(-37.4,6.6,-36.5,5.5).curveTo(-35.1,3.8,2.6,-8.3).curveTo(40.4,-20.4,42.5,-19.6).curveTo(43.9,-19,43.9,-13.9).curveTo(43.9,-8,41.3,-2).curveTo(33.7,15.5,9.8,21.2).curveTo(0.8,23.4,-6.8,23.4).curveTo(-19.3,23.4,-28,17.5).closePath();
	var mask_graphics_56 = new cjs.Graphics().moveTo(-27.6,17.5).curveTo(-32.4,14.3,-34.8,10.1).curveTo(-36.9,6.6,-36.1,5.6).curveTo(-34.7,3.8,2.7,-8.2).curveTo(40.3,-20.2,42.4,-19.3).curveTo(43.8,-18.7,43.8,-13.7).curveTo(43.8,-7.9,41.1,-1.9).curveTo(33.6,15.5,9.9,21.2).curveTo(1,23.3,-6.6,23.3).curveTo(-19,23.3,-27.6,17.5).closePath();
	var mask_graphics_57 = new cjs.Graphics().moveTo(-27.3,17.5).curveTo(-32,14.3,-34.4,10.1).curveTo(-36.5,6.7,-35.7,5.6).curveTo(-34.3,3.9,2.9,-8).curveTo(40.1,-20,42.2,-19.1).curveTo(43.6,-18.5,43.6,-13.5).curveTo(43.6,-7.7,41,-1.8).curveTo(33.5,15.5,10,21.1).curveTo(1.1,23.2,-6.4,23.2).curveTo(-18.7,23.2,-27.3,17.5).closePath();
	var mask_graphics_58 = new cjs.Graphics().moveTo(-26.9,17.4).curveTo(-31.6,14.3,-34,10.2).curveTo(-36.1,6.7,-35.3,5.7).curveTo(-33.9,4,3,-7.9).curveTo(40,-19.7,42.1,-18.9).curveTo(43.5,-18.3,43.5,-13.3).curveTo(43.5,-7.6,40.9,-1.7).curveTo(33.5,15.5,10.1,21.1).curveTo(1.3,23.2,-6.2,23.2).curveTo(-18.4,23.2,-26.9,17.4).closePath();
	var mask_graphics_59 = new cjs.Graphics().moveTo(-26.6,17.4).curveTo(-31.3,14.3,-33.7,10.2).curveTo(-35.7,6.7,-34.9,5.7).curveTo(-33.5,4,3.1,-7.8).curveTo(39.9,-19.5,42,-18.7).curveTo(43.4,-18.1,43.4,-13.2).curveTo(43.4,-7.5,40.8,-1.6).curveTo(33.4,15.5,10.2,21).curveTo(1.4,23.1,-6,23.1).curveTo(-18.2,23.1,-26.6,17.4).closePath();
	var mask_graphics_60 = new cjs.Graphics().moveTo(-26.3,17.4).curveTo(-31,14.3,-33.3,10.2).curveTo(-35.4,6.8,-34.6,5.8).curveTo(-33.2,4.1,3.3,-7.6).curveTo(39.8,-19.4,41.9,-18.5).curveTo(43.3,-17.9,43.3,-13).curveTo(43.3,-7.4,40.7,-1.5).curveTo(33.3,15.5,10.2,21).curveTo(1.5,23,-5.8,23).curveTo(-17.9,23,-26.3,17.4).closePath();
	var mask_graphics_61 = new cjs.Graphics().moveTo(-26.1,17.4).curveTo(-30.7,14.3,-33,10.2).curveTo(-35.1,6.8,-34.3,5.8).curveTo(-32.9,4.1,3.4,-7.5).curveTo(39.8,-19.2,41.8,-18.3).curveTo(43.2,-17.8,43.2,-12.9).curveTo(43.2,-7.3,40.6,-1.5).curveTo(33.3,15.4,10.3,20.9).curveTo(1.6,23,-5.7,23).curveTo(-17.7,23,-26.1,17.4).closePath();
	var mask_graphics_62 = new cjs.Graphics().moveTo(-25.9,17.3).curveTo(-30.4,14.2,-32.8,10.2).curveTo(-34.8,6.8,-34,5.8).curveTo(-32.7,4.2,3.5,-7.5).curveTo(39.7,-19.1,41.7,-18.2).curveTo(43.1,-17.6,43.1,-12.8).curveTo(43.1,-7.2,40.5,-1.4).curveTo(33.3,15.4,10.4,20.9).curveTo(1.8,22.9,-5.5,22.9).curveTo(-17.5,22.9,-25.9,17.3).closePath();
	var mask_graphics_63 = new cjs.Graphics().moveTo(-25.7,17.3).curveTo(-30.2,14.2,-32.5,10.2).curveTo(-34.6,6.9,-33.8,5.8).curveTo(-32.4,4.2,3.5,-7.4).curveTo(39.6,-18.9,41.6,-18.1).curveTo(43,-17.5,43,-12.7).curveTo(43,-7.1,40.5,-1.3).curveTo(33.2,15.4,10.4,20.8).curveTo(1.8,22.9,-5.4,22.9).curveTo(-17.4,22.9,-25.7,17.3).closePath();
	var mask_graphics_64 = new cjs.Graphics().moveTo(-25.5,17.3).curveTo(-30,14.2,-32.3,10.2).curveTo(-34.4,6.9,-33.6,5.9).curveTo(-32.2,4.2,3.6,-7.3).curveTo(39.6,-18.8,41.6,-18).curveTo(42.9,-17.4,42.9,-12.6).curveTo(42.9,-7,40.4,-1.3).curveTo(33.2,15.4,10.5,20.8).curveTo(1.9,22.9,-5.3,22.9).curveTo(-17.2,22.9,-25.5,17.3).closePath();
	var mask_graphics_65 = new cjs.Graphics().moveTo(-25.3,17.3).curveTo(-29.8,14.2,-32.2,10.2).curveTo(-34.2,6.9,-33.4,5.9).curveTo(-32.1,4.2,3.7,-7.2).curveTo(39.5,-18.7,41.5,-17.9).curveTo(42.9,-17.3,42.9,-12.5).curveTo(42.9,-7,40.4,-1.2).curveTo(33.1,15.4,10.5,20.8).curveTo(2,22.8,-5.2,22.8).curveTo(-17.1,22.8,-25.3,17.3).closePath();
	var mask_graphics_66 = new cjs.Graphics().moveTo(-25.2,17.3).curveTo(-29.7,14.2,-32,10.2).curveTo(-34,6.9,-33.2,5.9).curveTo(-31.9,4.3,3.7,-7.2).curveTo(39.5,-18.6,41.5,-17.8).curveTo(42.8,-17.2,42.8,-12.5).curveTo(42.8,-6.9,40.3,-1.2).curveTo(33.1,15.4,10.5,20.8).curveTo(2,22.8,-5.1,22.8).curveTo(-17,22.8,-25.2,17.3).closePath();
	var mask_graphics_67 = new cjs.Graphics().moveTo(-25.1,17.3).curveTo(-29.6,14.2,-31.9,10.3).curveTo(-33.9,6.9,-33.1,5.9).curveTo(-31.8,4.3,3.8,-7.2).curveTo(39.4,-18.6,41.4,-17.7).curveTo(42.8,-17.2,42.8,-12.4).curveTo(42.8,-6.9,40.3,-1.2).curveTo(33.1,15.4,10.6,20.8).curveTo(2.1,22.8,-5.1,22.8).curveTo(-16.9,22.8,-25.1,17.3).closePath();
	var mask_graphics_68 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.9,10.3).curveTo(-33.9,6.9,-33.1,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.4).curveTo(42.7,-6.8,40.3,-1.2).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_69 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_70 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_71 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_72 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_73 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_74 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_75 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_76 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_77 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_78 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_79 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_80 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_81 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_82 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_83 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_84 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_85 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_86 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_87 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_88 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_89 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_90 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_91 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_92 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_93 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_94 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_95 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_96 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_97 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_98 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_99 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_100 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_101 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_102 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_103 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_104 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_105 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_106 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_107 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_108 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_109 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_110 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_111 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_112 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_113 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_114 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_115 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_116 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_117 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_118 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_119 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_120 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_121 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_122 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_123 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_124 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_125 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_126 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_127 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_128 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_129 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_130 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_131 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_132 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_133 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_134 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_135 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_136 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_137 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_138 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_139 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_140 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_141 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_142 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_143 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_144 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_145 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_146 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_147 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_148 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_149 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_150 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_151 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_152 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_153 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_154 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_155 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_156 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_157 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_158 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_159 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_160 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_161 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_162 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_163 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_164 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_165 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_166 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_167 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_168 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_169 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_170 = new cjs.Graphics().moveTo(-25,17.3).curveTo(-29.5,14.2,-31.8,10.3).curveTo(-33.8,6.9,-33,5.9).curveTo(-31.7,4.3,3.8,-7.1).curveTo(39.4,-18.5,41.4,-17.7).curveTo(42.7,-17.1,42.7,-12.3).curveTo(42.7,-6.8,40.2,-1.1).curveTo(33.1,15.4,10.6,20.7).curveTo(2.1,22.8,-5,22.8).curveTo(-16.8,22.8,-25,17.3).closePath();
	var mask_graphics_171 = new cjs.Graphics().moveTo(-25.8,17.3).curveTo(-30.3,14.2,-32.7,10.2).curveTo(-34.7,6.8,-33.9,5.8).curveTo(-32.6,4.2,3.5,-7.4).curveTo(39.7,-19,41.7,-18.2).curveTo(43,-17.6,43,-12.8).curveTo(43,-7.1,40.5,-1.4).curveTo(33.2,15.4,10.4,20.9).curveTo(1.8,22.9,-5.5,22.9).curveTo(-17.5,22.9,-25.8,17.3).closePath();
	var mask_graphics_172 = new cjs.Graphics().moveTo(-26.6,17.4).curveTo(-31.2,14.3,-33.6,10.2).curveTo(-35.6,6.8,-34.8,5.7).curveTo(-33.5,4,3.2,-7.7).curveTo(39.9,-19.5,42,-18.6).curveTo(43.3,-18.1,43.3,-13.1).curveTo(43.3,-7.4,40.8,-1.6).curveTo(33.4,15.5,10.2,21).curveTo(1.4,23.1,-5.9,23.1).curveTo(-18.1,23.1,-26.6,17.4).closePath();
	var mask_graphics_173 = new cjs.Graphics().moveTo(-27.3,17.5).curveTo(-32,14.3,-34.4,10.1).curveTo(-36.5,6.7,-35.7,5.6).curveTo(-34.3,3.9,2.9,-8).curveTo(40.1,-20,42.2,-19.1).curveTo(43.6,-18.5,43.6,-13.5).curveTo(43.6,-7.7,41,-1.8).curveTo(33.5,15.5,10,21.1).curveTo(1.1,23.2,-6.4,23.2).curveTo(-18.7,23.2,-27.3,17.5).closePath();
	var mask_graphics_174 = new cjs.Graphics().moveTo(-28,17.5).curveTo(-32.8,14.3,-35.2,10.1).curveTo(-37.4,6.6,-36.5,5.5).curveTo(-35.1,3.8,2.6,-8.3).curveTo(40.4,-20.4,42.5,-19.5).curveTo(43.9,-19,43.9,-13.9).curveTo(43.9,-8,41.3,-2).curveTo(33.7,15.5,9.8,21.2).curveTo(0.8,23.4,-6.8,23.4).curveTo(-19.3,23.4,-28,17.5).closePath();
	var mask_graphics_175 = new cjs.Graphics().moveTo(-28.7,17.6).curveTo(-33.5,14.3,-36,10.1).curveTo(-38.2,6.5,-37.3,5.4).curveTo(-35.9,3.7,2.3,-8.6).curveTo(40.6,-20.9,42.8,-20).curveTo(44.2,-19.4,44.2,-14.3).curveTo(44.2,-8.3,41.5,-2.2).curveTo(33.8,15.6,9.6,21.4).curveTo(0.5,23.5,-7.2,23.5).curveTo(-19.9,23.5,-28.7,17.6).closePath();
	var mask_graphics_176 = new cjs.Graphics().moveTo(-29.4,17.7).curveTo(-34.3,14.4,-36.8,10).curveTo(-39,6.4,-38.1,5.3).curveTo(-36.7,3.5,2,-8.9).curveTo(40.8,-21.3,43,-20.4).curveTo(44.4,-19.8,44.4,-14.6).curveTo(44.4,-8.6,41.7,-2.4).curveTo(33.9,15.6,9.4,21.5).curveTo(0.2,23.7,-7.6,23.7).curveTo(-20.4,23.7,-29.4,17.7).closePath();
	var mask_graphics_177 = new cjs.Graphics().moveTo(-30,17.7).curveTo(-35,14.4,-37.5,10).curveTo(-39.7,6.3,-38.8,5.2).curveTo(-37.4,3.4,1.8,-9.1).curveTo(41,-21.7,43.2,-20.8).curveTo(44.7,-20.2,44.7,-14.9).curveTo(44.7,-8.8,41.9,-2.6).curveTo(34.1,15.7,9.3,21.6).curveTo(-0.1,23.8,-8,23.8).curveTo(-21,23.8,-30,17.7).closePath();
	var mask_graphics_178 = new cjs.Graphics().moveTo(-30.6,17.8).curveTo(-35.6,14.4,-38.2,10).curveTo(-40.4,6.3,-39.5,5.2).curveTo(-38.1,3.3,1.5,-9.4).curveTo(41.2,-22.1,43.4,-21.2).curveTo(44.9,-20.5,44.9,-15.2).curveTo(44.9,-9.1,42.2,-2.7).curveTo(34.2,15.7,9.1,21.7).curveTo(-0.4,23.9,-8.3,23.9).curveTo(-21.5,23.9,-30.6,17.8).closePath();
	var mask_graphics_179 = new cjs.Graphics().moveTo(-31.2,17.8).curveTo(-36.3,14.4,-38.9,10).curveTo(-41.1,6.2,-40.2,5.1).curveTo(-38.7,3.2,1.3,-9.6).curveTo(41.4,-22.5,43.7,-21.5).curveTo(45.1,-20.9,45.1,-15.5).curveTo(45.1,-9.3,42.4,-2.9).curveTo(34.3,15.7,8.9,21.8).curveTo(-0.6,24.1,-8.7,24.1).curveTo(-22,24.1,-31.2,17.8).closePath();
	var mask_graphics_180 = new cjs.Graphics().moveTo(-31.8,17.9).curveTo(-36.9,14.4,-39.5,9.9).curveTo(-41.8,6.1,-40.9,5).curveTo(-39.4,3.1,1,-9.8).curveTo(41.6,-22.8,43.9,-21.9).curveTo(45.4,-21.2,45.4,-15.8).curveTo(45.4,-9.5,42.5,-3.1).curveTo(34.4,15.8,8.8,21.9).curveTo(-0.9,24.2,-9,24.2).curveTo(-22.4,24.2,-31.8,17.9).closePath();
	var mask_graphics_181 = new cjs.Graphics().moveTo(-32.3,17.9).curveTo(-37.4,14.5,-40.1,9.9).curveTo(-42.4,6.1,-41.5,4.9).curveTo(-40,3,0.8,-10.1).curveTo(41.8,-23.2,44.1,-22.2).curveTo(45.6,-21.6,45.6,-16.1).curveTo(45.6,-9.7,42.7,-3.2).curveTo(34.5,15.8,8.6,21.9).curveTo(-1.1,24.3,-9.3,24.3).curveTo(-22.9,24.3,-32.3,17.9).closePath();
	var mask_graphics_182 = new cjs.Graphics().moveTo(-32.8,18).curveTo(-38,14.5,-40.7,9.9).curveTo(-43,6,-42.1,4.9).curveTo(-40.5,3,0.6,-10.3).curveTo(41.9,-23.5,44.2,-22.5).curveTo(45.8,-21.9,45.8,-16.3).curveTo(45.8,-9.9,42.9,-3.3).curveTo(34.6,15.8,8.5,22).curveTo(-1.3,24.4,-9.6,24.4).curveTo(-23.3,24.4,-32.8,18).closePath();
	var mask_graphics_183 = new cjs.Graphics().moveTo(-33.3,18).curveTo(-38.5,14.5,-41.2,9.9).curveTo(-43.6,6,-42.6,4.8).curveTo(-41.1,2.9,0.4,-10.5).curveTo(42.1,-23.8,44.4,-22.8).curveTo(45.9,-22.2,45.9,-16.6).curveTo(45.9,-10.1,43,-3.5).curveTo(34.7,15.8,8.4,22.1).curveTo(-1.5,24.5,-9.9,24.5).curveTo(-23.7,24.5,-33.3,18).closePath();
	var mask_graphics_184 = new cjs.Graphics().moveTo(-33.7,18.1).curveTo(-39,14.5,-41.7,9.8).curveTo(-44.1,5.9,-43.1,4.7).curveTo(-41.6,2.8,0.2,-10.6).curveTo(42.2,-24.1,44.6,-23.1).curveTo(46.1,-22.4,46.1,-16.8).curveTo(46.1,-10.3,43.2,-3.6).curveTo(34.8,15.9,8.3,22.2).curveTo(-1.7,24.6,-10.2,24.6).curveTo(-24.1,24.6,-33.7,18.1).closePath();
	var mask_graphics_185 = new cjs.Graphics().moveTo(-34.1,18.1).curveTo(-39.4,14.5,-42.2,9.8).curveTo(-44.6,5.9,-43.6,4.7).curveTo(-42.1,2.7,0.1,-10.8).curveTo(42.3,-24.3,44.7,-23.3).curveTo(46.3,-22.7,46.3,-17).curveTo(46.3,-10.5,43.3,-3.7).curveTo(34.8,15.9,8.1,22.3).curveTo(-1.9,24.7,-10.4,24.7).curveTo(-24.4,24.7,-34.1,18.1).closePath();
	var mask_graphics_186 = new cjs.Graphics().moveTo(-34.5,18.2).curveTo(-39.9,14.5,-42.7,9.8).curveTo(-45,5.8,-44.1,4.6).curveTo(-42.5,2.7,-0.1,-11).curveTo(42.5,-24.6,44.9,-23.6).curveTo(46.4,-22.9,46.4,-17.2).curveTo(46.4,-10.6,43.5,-3.8).curveTo(34.9,15.9,8,22.3).curveTo(-2.1,24.7,-10.6,24.7).curveTo(-24.7,24.7,-34.5,18.2).closePath();
	var mask_graphics_187 = new cjs.Graphics().moveTo(-34.9,18.2).curveTo(-40.3,14.5,-43.1,9.8).curveTo(-45.5,5.8,-44.5,4.6).curveTo(-42.9,2.6,-0.2,-11.1).curveTo(42.6,-24.8,45,-23.8).curveTo(46.6,-23.1,46.6,-17.4).curveTo(46.6,-10.8,43.6,-3.9).curveTo(35,15.9,7.9,22.4).curveTo(-2.2,24.8,-10.8,24.8).curveTo(-25,24.8,-34.9,18.2).closePath();
	var mask_graphics_188 = new cjs.Graphics().moveTo(-35.2,18.2).curveTo(-40.6,14.5,-43.5,9.8).curveTo(-45.9,5.7,-44.9,4.5).curveTo(-43.3,2.5,-0.4,-11.2).curveTo(42.7,-25,45.1,-24).curveTo(46.7,-23.3,46.7,-17.6).curveTo(46.7,-10.9,43.7,-4).curveTo(35.1,16,7.9,22.4).curveTo(-2.4,24.9,-11,24.9).curveTo(-25.3,24.9,-35.2,18.2).closePath();
	var mask_graphics_189 = new cjs.Graphics().moveTo(-35.5,18.3).curveTo(-41,14.6,-43.8,9.7).curveTo(-46.2,5.7,-45.3,4.5).curveTo(-43.7,2.5,-0.5,-11.4).curveTo(42.8,-25.2,45.2,-24.2).curveTo(46.8,-23.5,46.8,-17.7).curveTo(46.8,-11,43.8,-4.1).curveTo(35.1,16,7.8,22.5).curveTo(-2.5,24.9,-11.2,24.9).curveTo(-25.6,25,-35.5,18.3).closePath();
	var mask_graphics_190 = new cjs.Graphics().moveTo(-35.8,18.3).curveTo(-41.3,14.6,-44.1,9.7).curveTo(-46.6,5.7,-45.6,4.4).curveTo(-44,2.4,-0.6,-11.5).curveTo(42.9,-25.4,45.3,-24.4).curveTo(46.9,-23.7,46.9,-17.9).curveTo(46.9,-11.1,43.9,-4.2).curveTo(35.2,16,7.7,22.5).curveTo(-2.7,25,-11.4,25).curveTo(-25.8,25,-35.8,18.3).closePath();
	var mask_graphics_191 = new cjs.Graphics().moveTo(-36.1,18.3).curveTo(-41.6,14.6,-44.4,9.7).curveTo(-46.9,5.6,-45.9,4.4).curveTo(-44.3,2.4,-0.7,-11.6).curveTo(43,-25.6,45.4,-24.6).curveTo(47,-23.9,47,-18).curveTo(47,-11.3,44,-4.3).curveTo(35.2,16,7.6,22.6).curveTo(-2.8,25.1,-11.6,25.1).curveTo(-26,25.1,-36.1,18.3).closePath();
	var mask_graphics_192 = new cjs.Graphics().moveTo(-36.3,18.3).curveTo(-41.8,14.6,-44.7,9.7).curveTo(-47.2,5.6,-46.2,4.4).curveTo(-44.5,2.4,-0.8,-11.7).curveTo(43,-25.7,45.5,-24.7).curveTo(47.1,-24,47.1,-18.1).curveTo(47.1,-11.3,44.1,-4.3).curveTo(35.3,16,7.6,22.6).curveTo(-2.9,25.1,-11.7,25.1).curveTo(-26.2,25.1,-36.3,18.3).closePath();
	var mask_graphics_193 = new cjs.Graphics().moveTo(-36.5,18.3).curveTo(-42.1,14.6,-44.9,9.7).curveTo(-47.4,5.6,-46.4,4.4).curveTo(-44.8,2.3,-0.9,-11.8).curveTo(43.1,-25.9,45.6,-24.8).curveTo(47.2,-24.1,47.2,-18.2).curveTo(47.2,-11.4,44.1,-4.4).curveTo(35.3,16,7.5,22.7).curveTo(-3,25.2,-11.8,25.2).curveTo(-26.4,25.2,-36.5,18.3).closePath();
	var mask_graphics_194 = new cjs.Graphics().moveTo(-36.7,18.4).curveTo(-42.2,14.6,-45.1,9.7).curveTo(-47.6,5.6,-46.6,4.3).curveTo(-45,2.3,-1,-11.8).curveTo(43.2,-26,45.6,-24.9).curveTo(47.3,-24.2,47.3,-18.3).curveTo(47.3,-11.5,44.2,-4.5).curveTo(35.3,16,7.5,22.7).curveTo(-3,25.2,-11.9,25.2).curveTo(-26.5,25.2,-36.7,18.4).closePath();
	var mask_graphics_195 = new cjs.Graphics().moveTo(-36.8,18.4).curveTo(-42.4,14.6,-45.3,9.7).curveTo(-47.8,5.6,-46.8,4.3).curveTo(-45.1,2.3,-1,-11.9).curveTo(43.2,-26.1,45.7,-25).curveTo(47.3,-24.3,47.3,-18.4).curveTo(47.3,-11.6,44.3,-4.5).curveTo(35.4,16,7.4,22.7).curveTo(-3.1,25.2,-12,25.2).curveTo(-26.7,25.2,-36.8,18.4).closePath();
	var mask_graphics_196 = new cjs.Graphics().moveTo(-37,18.4).curveTo(-42.5,14.6,-45.4,9.7).curveTo(-47.9,5.5,-46.9,4.3).curveTo(-45.3,2.2,-1.1,-12).curveTo(43.3,-26.2,45.7,-25.1).curveTo(47.4,-24.4,47.4,-18.5).curveTo(47.4,-11.6,44.3,-4.5).curveTo(35.4,16,7.4,22.7).curveTo(-3.2,25.2,-12.1,25.2).curveTo(-26.8,25.2,-37,18.4).closePath();
	var mask_graphics_197 = new cjs.Graphics().moveTo(-37.1,18.4).curveTo(-42.6,14.6,-45.5,9.7).curveTo(-48,5.5,-47,4.3).curveTo(-45.4,2.2,-1.1,-12).curveTo(43.3,-26.2,45.8,-25.2).curveTo(47.4,-24.5,47.4,-18.5).curveTo(47.4,-11.6,44.3,-4.6).curveTo(35.4,16.1,7.4,22.7).curveTo(-3.2,25.3,-12.1,25.3).curveTo(-26.8,25.3,-37.1,18.4).closePath();
	var mask_graphics_198 = new cjs.Graphics().moveTo(-37.1,18.4).curveTo(-42.7,14.6,-45.6,9.7).curveTo(-48.1,5.5,-47.1,4.3).curveTo(-45.5,2.2,-1.2,-12).curveTo(43.3,-26.3,45.8,-25.2).curveTo(47.5,-24.5,47.5,-18.6).curveTo(47.5,-11.7,44.4,-4.6).curveTo(35.4,16.1,7.3,22.8).curveTo(-3.2,25.3,-12.2,25.3).curveTo(-26.9,25.3,-37.1,18.4).closePath();
	var mask_graphics_199 = new cjs.Graphics().moveTo(-37.2,18.4).curveTo(-42.8,14.6,-45.7,9.7).curveTo(-48.2,5.5,-47.2,4.3).curveTo(-45.5,2.2,-1.2,-12).curveTo(43.3,-26.3,45.8,-25.2).curveTo(47.5,-24.5,47.5,-18.6).curveTo(47.5,-11.7,44.4,-4.6).curveTo(35.4,16.1,7.3,22.8).curveTo(-3.3,25.3,-12.2,25.3).curveTo(-26.9,25.3,-37.2,18.4).closePath();
	var mask_graphics_200 = new cjs.Graphics().moveTo(-37.2,18.4).curveTo(-42.8,14.6,-45.7,9.7).curveTo(-48.2,5.5,-47.2,4.3).curveTo(-45.5,2.2,-1.2,-12).curveTo(43.3,-26.3,45.8,-25.2).curveTo(47.5,-24.5,47.5,-18.6).curveTo(47.5,-11.7,44.4,-4.6).curveTo(35.4,16.1,7.3,22.8).curveTo(-3.3,25.3,-12.2,25.3).curveTo(-26.9,25.3,-37.2,18.4).closePath();

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:47.5,y:25.3}).wait(1).to({graphics:mask_graphics_1,x:47.5,y:25.3}).wait(1).to({graphics:mask_graphics_2,x:47.5,y:25.3}).wait(1).to({graphics:mask_graphics_3,x:47.5,y:25.3}).wait(1).to({graphics:mask_graphics_4,x:47.5,y:25.3}).wait(1).to({graphics:mask_graphics_5,x:47.5,y:25.3}).wait(1).to({graphics:mask_graphics_6,x:47.5,y:25.3}).wait(1).to({graphics:mask_graphics_7,x:47.5,y:25.3}).wait(1).to({graphics:mask_graphics_8,x:47.5,y:25.3}).wait(1).to({graphics:mask_graphics_9,x:47.5,y:25.3}).wait(1).to({graphics:mask_graphics_10,x:47.5,y:25.3}).wait(1).to({graphics:mask_graphics_11,x:47.5,y:25.3}).wait(1).to({graphics:mask_graphics_12,x:47.5,y:25.3}).wait(1).to({graphics:mask_graphics_13,x:47.5,y:25.3}).wait(1).to({graphics:mask_graphics_14,x:47.5,y:25.3}).wait(1).to({graphics:mask_graphics_15,x:47.5,y:25.3}).wait(1).to({graphics:mask_graphics_16,x:47.5,y:25.3}).wait(1).to({graphics:mask_graphics_17,x:47.5,y:25.3}).wait(1).to({graphics:mask_graphics_18,x:47.5,y:25.3}).wait(1).to({graphics:mask_graphics_19,x:47.5,y:25.3}).wait(1).to({graphics:mask_graphics_20,x:47.5,y:25.3}).wait(1).to({graphics:mask_graphics_21,x:47.5,y:25.3}).wait(1).to({graphics:mask_graphics_22,x:47.5,y:25.3}).wait(1).to({graphics:mask_graphics_23,x:47.5,y:25.3}).wait(1).to({graphics:mask_graphics_24,x:47.5,y:25.3}).wait(1).to({graphics:mask_graphics_25,x:47.5,y:25.3}).wait(1).to({graphics:mask_graphics_26,x:47.5,y:25.3}).wait(1).to({graphics:mask_graphics_27,x:47.5,y:25.3}).wait(1).to({graphics:mask_graphics_28,x:47.5,y:25.3}).wait(1).to({graphics:mask_graphics_29,x:47.5,y:25.3}).wait(1).to({graphics:mask_graphics_30,x:47.5,y:25.3}).wait(1).to({graphics:mask_graphics_31,x:47.5,y:25.3}).wait(1).to({graphics:mask_graphics_32,x:47.5,y:25.3}).wait(1).to({graphics:mask_graphics_33,x:47.5,y:25.3}).wait(1).to({graphics:mask_graphics_34,x:47.5,y:25.3}).wait(1).to({graphics:mask_graphics_35,x:47.5,y:25.3}).wait(1).to({graphics:mask_graphics_36,x:47.5,y:25.3}).wait(1).to({graphics:mask_graphics_37,x:47.5,y:25.3}).wait(1).to({graphics:mask_graphics_38,x:47.5,y:25.3}).wait(1).to({graphics:mask_graphics_39,x:47.5,y:25.3}).wait(1).to({graphics:mask_graphics_40,x:47.5,y:25.3}).wait(1).to({graphics:mask_graphics_41,x:47.2,y:25.1}).wait(1).to({graphics:mask_graphics_42,x:46.9,y:25}).wait(1).to({graphics:mask_graphics_43,x:46.6,y:24.8}).wait(1).to({graphics:mask_graphics_44,x:46.3,y:24.7}).wait(1).to({graphics:mask_graphics_45,x:46,y:24.5}).wait(1).to({graphics:mask_graphics_46,x:45.8,y:24.4}).wait(1).to({graphics:mask_graphics_47,x:45.5,y:24.2}).wait(1).to({graphics:mask_graphics_48,x:45.3,y:24.1}).wait(1).to({graphics:mask_graphics_49,x:45.1,y:24}).wait(1).to({graphics:mask_graphics_50,x:44.8,y:23.9}).wait(1).to({graphics:mask_graphics_51,x:44.6,y:23.8}).wait(1).to({graphics:mask_graphics_52,x:44.4,y:23.7}).wait(1).to({graphics:mask_graphics_53,x:44.3,y:23.6}).wait(1).to({graphics:mask_graphics_54,x:44.1,y:23.5}).wait(1).to({graphics:mask_graphics_55,x:43.9,y:23.4}).wait(1).to({graphics:mask_graphics_56,x:43.8,y:23.3}).wait(1).to({graphics:mask_graphics_57,x:43.6,y:23.2}).wait(1).to({graphics:mask_graphics_58,x:43.5,y:23.2}).wait(1).to({graphics:mask_graphics_59,x:43.4,y:23.1}).wait(1).to({graphics:mask_graphics_60,x:43.3,y:23}).wait(1).to({graphics:mask_graphics_61,x:43.2,y:23}).wait(1).to({graphics:mask_graphics_62,x:43.1,y:22.9}).wait(1).to({graphics:mask_graphics_63,x:43,y:22.9}).wait(1).to({graphics:mask_graphics_64,x:42.9,y:22.9}).wait(1).to({graphics:mask_graphics_65,x:42.9,y:22.8}).wait(1).to({graphics:mask_graphics_66,x:42.8,y:22.8}).wait(1).to({graphics:mask_graphics_67,x:42.8,y:22.8}).wait(1).to({graphics:mask_graphics_68,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_69,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_70,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_71,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_72,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_73,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_74,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_75,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_76,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_77,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_78,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_79,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_80,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_81,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_82,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_83,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_84,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_85,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_86,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_87,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_88,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_89,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_90,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_91,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_92,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_93,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_94,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_95,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_96,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_97,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_98,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_99,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_100,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_101,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_102,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_103,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_104,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_105,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_106,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_107,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_108,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_109,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_110,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_111,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_112,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_113,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_114,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_115,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_116,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_117,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_118,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_119,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_120,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_121,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_122,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_123,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_124,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_125,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_126,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_127,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_128,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_129,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_130,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_131,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_132,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_133,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_134,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_135,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_136,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_137,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_138,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_139,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_140,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_141,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_142,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_143,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_144,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_145,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_146,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_147,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_148,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_149,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_150,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_151,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_152,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_153,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_154,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_155,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_156,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_157,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_158,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_159,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_160,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_161,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_162,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_163,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_164,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_165,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_166,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_167,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_168,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_169,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_170,x:42.7,y:22.8}).wait(1).to({graphics:mask_graphics_171,x:43,y:22.9}).wait(1).to({graphics:mask_graphics_172,x:43.3,y:23.1}).wait(1).to({graphics:mask_graphics_173,x:43.6,y:23.2}).wait(1).to({graphics:mask_graphics_174,x:43.9,y:23.4}).wait(1).to({graphics:mask_graphics_175,x:44.2,y:23.5}).wait(1).to({graphics:mask_graphics_176,x:44.4,y:23.7}).wait(1).to({graphics:mask_graphics_177,x:44.7,y:23.8}).wait(1).to({graphics:mask_graphics_178,x:44.9,y:23.9}).wait(1).to({graphics:mask_graphics_179,x:45.1,y:24.1}).wait(1).to({graphics:mask_graphics_180,x:45.4,y:24.2}).wait(1).to({graphics:mask_graphics_181,x:45.6,y:24.3}).wait(1).to({graphics:mask_graphics_182,x:45.8,y:24.4}).wait(1).to({graphics:mask_graphics_183,x:45.9,y:24.5}).wait(1).to({graphics:mask_graphics_184,x:46.1,y:24.6}).wait(1).to({graphics:mask_graphics_185,x:46.3,y:24.7}).wait(1).to({graphics:mask_graphics_186,x:46.4,y:24.7}).wait(1).to({graphics:mask_graphics_187,x:46.6,y:24.8}).wait(1).to({graphics:mask_graphics_188,x:46.7,y:24.9}).wait(1).to({graphics:mask_graphics_189,x:46.8,y:24.9}).wait(1).to({graphics:mask_graphics_190,x:46.9,y:25}).wait(1).to({graphics:mask_graphics_191,x:47,y:25.1}).wait(1).to({graphics:mask_graphics_192,x:47.1,y:25.1}).wait(1).to({graphics:mask_graphics_193,x:47.2,y:25.2}).wait(1).to({graphics:mask_graphics_194,x:47.3,y:25.2}).wait(1).to({graphics:mask_graphics_195,x:47.3,y:25.2}).wait(1).to({graphics:mask_graphics_196,x:47.4,y:25.2}).wait(1).to({graphics:mask_graphics_197,x:47.4,y:25.3}).wait(1).to({graphics:mask_graphics_198,x:47.5,y:25.3}).wait(1).to({graphics:mask_graphics_199,x:47.5,y:25.3}).wait(1).to({graphics:mask_graphics_200,x:47.5,y:25.3}).wait(1));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginLinearGradientFill(["#E20600","#710300"],[0,1],-12,-1.8,22.7,6.9).beginStroke().moveTo(-24.7,7.8).curveTo(-20,-2.2,-12,-7).curveTo(-4.9,-11.2,3.4,-10.7).curveTo(11,-10.2,17,-6).curveTo(23.1,-1.8,24.7,4.2).curveTo(18.8,6.7,12.2,8.3).curveTo(1.9,10.8,-7,10.8).curveTo(-16.8,10.8,-24.7,7.8).closePath();
	this.shape.setTransform(42.6,39.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginRadialGradientFill(["#635095","#32284B"],[0,1],21.1,26.5,0,21.1,26.5,64.8).beginStroke().moveTo(-37.2,18.4).curveTo(-42.8,14.6,-45.7,9.7).curveTo(-48.2,5.5,-47.2,4.3).curveTo(-45.5,2.2,-1.2,-12).curveTo(43.3,-26.3,45.8,-25.2).curveTo(47.5,-24.5,47.5,-18.6).curveTo(47.5,-11.7,44.4,-4.6).curveTo(35.4,16.1,7.3,22.8).curveTo(-3.3,25.3,-12.2,25.3).curveTo(-26.9,25.3,-37.2,18.4).closePath();
	this.shape_1.setTransform(47.5,25.3);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(201));

	// labio
	this.instance = new lib.Path_16();
	this.instance.setTransform(47.8,28.9,1,1,0,0,0,47.1,27.4);
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({regX:47.2,scaleX:0.8,scaleY:0.8,y:28.8},30,cjs.Ease.get(1)).wait(100).to({scaleX:1,scaleY:1,y:28.9},30,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,95.1,56.2);


(lib.Animar5 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Path_4();
	this.instance.setTransform(40.8,-49.8,1,1,0,0,0,9.6,9.3);
	this.instance.alpha = 0.5;

	this.shape = new cjs.Shape();
	this.shape.graphics.beginLinearGradientFill(["#A19FCB","#9C98C6","#8379B1","#7162A2","#675598","#635095"],[0,0.047,0.306,0.553,0.792,1],-38.6,-33.9,38.8,43.5).beginStroke().moveTo(-8.5,2.4).curveTo(-9.3,1,-5.5,-7.1).lineTo(8.7,7.1).curveTo(-7.6,4.3,-8.5,2.4).closePath();
	this.shape.setTransform(-43.8,47.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginLinearGradientFill(["#A19FCB","#9C98C6","#8379B1","#7162A2","#675598","#635095"],[0,0.047,0.306,0.553,0.792,1],-46.8,-41.6,30.6,35.8).beginStroke().moveTo(5.9,19.6).lineTo(-24.2,-10.4).curveTo(-21,-16.1,-17.8,-21).lineTo(24.2,21).curveTo(18.6,21,5.9,19.6).closePath();
	this.shape_1.setTransform(-18.4,38.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginLinearGradientFill(["#A19FCB","#9C98C6","#8379B1","#7162A2","#675598","#635095"],[0,0.047,0.306,0.553,0.792,1],-46.2,-47.2,31.2,30.2).beginStroke().moveTo(-27.2,-19.6).curveTo(-22.2,-25.9,-19.9,-26.2).lineTo(-16.8,-26.3).lineTo(27.2,17.7).curveTo(23.1,22.3,18.7,26.3).closePath();
	this.shape_2.setTransform(-1.3,26.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginLinearGradientFill(["#A19FCB","#9C98C6","#8379B1","#7162A2","#675598","#635095"],[0,0.047,0.306,0.553,0.792,1],-48.9,-52,28.5,25.4).beginStroke().moveTo(-21.7,-16.3).curveTo(-14.9,-17.8,-9,-20.5).lineTo(21.7,10.2).curveTo(18.6,15.7,15.1,20.5).closePath();
	this.shape_3.setTransform(18,14.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginLinearGradientFill(["#A19FCB","#9C98C6","#8379B1","#7162A2","#675598","#635095"],[0,0.047,0.306,0.553,0.792,1],-48.2,-50,29.2,27.4).beginStroke().moveTo(-14.8,-8.1).curveTo(-10.1,-12.2,-7,-17.3).lineTo(14.8,4.5).curveTo(13.1,11.5,10.7,17.3).closePath();
	this.shape_4.setTransform(35,-5.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginLinearGradientFill(["#A19FCB","#9C98C6","#8379B1","#7162A2","#675598","#635095"],[0,0.047,0.306,0.553,0.792,1],-39,-39,38.4,38.4).beginStroke().moveTo(-9.9,-1.4).curveTo(-8.1,-9.4,-9.6,-18).lineTo(9.5,1).curveTo(10.3,9.6,9.6,18.1).closePath();
	this.shape_5.setTransform(42.5,-33.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginLinearGradientFill(["#635095","#624F93","#4D3E74","#3E325D","#352B50","#32284B"],[0,0.012,0.278,0.537,0.784,1],-34,-34.8,43.4,42.6).beginStroke().moveTo(-23.2,56.4).curveTo(-51,52.7,-52.4,49.9).curveTo(-53.1,48.4,-49.3,40.4).curveTo(-45.8,32.9,-40.2,23.6).curveTo(-26.2,0.2,-21.3,-0.1).curveTo(12.1,-0.8,26.1,-19.9).curveTo(32.1,-28.1,33.3,-38.4).curveTo(34.5,-48.2,31.2,-58.1).lineTo(36.7,-59.1).curveTo(42.9,-59.6,46.6,-57.1).curveTo(61.8,-12,38.1,27.2).curveTo(30.3,40.1,19.4,50.3).curveTo(11.2,58.1,8.2,58.9).curveTo(7.1,59.2,4.6,59.2).curveTo(-2.9,59.2,-23.2,56.4).closePath();

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52.4,-59.1,105,118.4);


(lib.Path_13 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Group();
	this.instance.setTransform(19.6,40.8,1,1,0,0,0,19.6,40.8);
	this.instance.alpha = 0.199;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,39.3,81.7);


(lib.Path_11 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Group_0();
	this.instance.setTransform(12.9,2.7,1,1,0,0,0,12.9,2.7);
	this.instance.alpha = 0.199;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,25.7,5.5);


(lib.Ala_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ala
	this.instance = new lib.Path_29();
	this.instance.setTransform(87.8,75.5,1,1,36,0,0,87.7,44.1);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-47},5,cjs.Ease.get(-0.99)).to({regX:87.6,regY:44,rotation:36,y:75.4},5,cjs.Ease.get(1)).wait(1));

	// huella arriba
	this.instance_1 = new lib.Path_33();
	this.instance_1.setTransform(61.9,38.1,1,1,0,0,0,31.9,38.1);
	this.instance_1.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},5,cjs.Ease.get(-0.99)).wait(6));

	// huella abajo
	this.instance_2 = new lib.Path_32();
	this.instance_2.setTransform(49.3,91.7,1,1,0,0,0,39.5,30.6);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:0.199},5,cjs.Ease.get(1)).to({alpha:0},5,cjs.Ease.get(-0.99)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.9,-11.8,104.6,134);


(lib.Corbata_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{vuelta:200});

	// Capa 1
	this.instance = new lib.Animar5("synched",0);
	this.instance.setTransform(93.5,-11.1,1,1,0,0,0,41,-70.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-10},20,cjs.Ease.get(1)).to({rotation:11.7},20,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-0.5},20,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:38.7},20,cjs.Ease.get(1)).to({startPosition:0},20,cjs.Ease.get(1)).to({rotation:23.4},20,cjs.Ease.get(1)).to({startPosition:0},20,cjs.Ease.get(1)).to({rotation:8},20,cjs.Ease.get(1)).to({startPosition:0},20,cjs.Ease.get(1)).to({regX:41.1,regY:-70.2,rotation:-1.5,x:93.7,y:-10.9},20,cjs.Ease.get(1)).to({regX:40.9,regY:-70.3,rotation:-18.6,x:93.5,y:-11},40,cjs.Ease.get(1)).to({regX:41.1,regY:-70.2,rotation:-1.5,x:93.7,y:-10.9},40,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,105,118.4);


(lib.Muñeco_mc = function() {
	this.initialize();

	// boca
	this.instance = new lib.Boca_mc();
	this.instance.setTransform(132.7,113.1,1,1,0,0,0,47.5,28.1);

	// ojos
	this.instance_1 = new lib.Ojos_mc();
	this.instance_1.setTransform(122.5,79.3,1,1,0,0,0,21.4,13.9);

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginLinearGradientFill(["#A19FCB","#9C98C6","#8379B1","#7162A2","#675598","#635095"],[0,0.047,0.306,0.553,0.792,1],-32.8,-32.8,44.6,44.6).beginStroke().moveTo(10.5,-10.5).curveTo(9.6,-2.2,3.7,3.7).curveTo(-2.2,9.6,-10.5,10.5).closePath();
	this.shape.setTransform(130.3,189.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginLinearGradientFill(["#A19FCB","#9C98C6","#8379B1","#7162A2","#675598","#635095"],[0,0.047,0.306,0.553,0.792,1],-19.4,-19.4,58,58).beginStroke().moveTo(-20.7,12.1).lineTo(12.1,-20.7).curveTo(17.5,-17.6,20.7,-12.3).lineTo(-12.3,20.7).curveTo(-17.6,17.5,-20.7,12.1).closePath();
	this.shape_1.setTransform(116.9,175.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginLinearGradientFill(["#A19FCB","#9C98C6","#8379B1","#7162A2","#675598","#635095"],[0,0.047,0.306,0.553,0.792,1],-6.9,-6.9,70.5,70.5).beginStroke().moveTo(-4.4,-4.4).curveTo(2.1,-10.9,11.4,-11.4).lineTo(-11.4,11.4).curveTo(-10.9,2.2,-4.4,-4.4).closePath();
	this.shape_2.setTransform(104.4,163.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginLinearGradientFill(["#635095","#624F93","#4D3E74","#3E325D","#352B50","#32284B"],[0,0.012,0.278,0.537,0.784,1],-19.4,-19.4,58,58).beginStroke().moveTo(-17,17).curveTo(-24,9.9,-24,0).curveTo(-24,-9.9,-17,-16.9).curveTo(-9.9,-24,0,-24).curveTo(10,-24,16.9,-16.9).curveTo(24,-9.9,24,0).curveTo(24,9.9,16.9,17).curveTo(10,24,0,24).curveTo(-9.9,24,-17,17).closePath();
	this.shape_3.setTransform(117,176);

	this.instance_2 = new lib.Path_11();
	this.instance_2.setTransform(93.8,36.1,1,1,0,0,0,12.9,2.7);
	this.instance_2.alpha = 0.199;

	this.instance_3 = new lib.Path_13();
	this.instance_3.setTransform(81.8,91.7,1,1,0,0,0,19.6,40.8);
	this.instance_3.alpha = 0.199;

	this.instance_4 = new lib.Path_23();
	this.instance_4.setTransform(156.9,60.8,1,1,0,0,0,37.1,53.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#A19FCB").beginStroke().moveTo(-46.5,1.1).curveTo(-27.4,4,-5.2,2.6).curveTo(20.6,1,46.5,-6.4).curveTo(25.3,4.1,-5.2,6).curveTo(-11.5,6.4,-16.9,6.4).curveTo(-36.9,6.4,-46.5,1.1).closePath();
	this.shape_4.setTransform(134.5,140.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginLinearGradientFill(["#DCDBEC","#A19FCB"],[0,1],-74.8,-40.2,43.5,78.1).beginStroke().moveTo(-60.6,73.8).curveTo(-64,72.3,-63.8,68.3).curveTo(-63.6,63.7,-58.4,57.1).curveTo(-68.7,61.9,-72.8,60.3).curveTo(-76.2,59,-74.1,54.3).curveTo(-72,49.6,-67,46.6).curveTo(-61.4,43.2,-56.4,45.1).curveTo(-56,41.4,-56.6,27).curveTo(-57.1,13,-57.9,4.1).curveTo(-59.8,-18,-38.4,-24.9).curveTo(-49.8,-28.8,-53.6,-32.9).curveTo(-56.9,-36.6,-53.5,-39.2).curveTo(-50.2,-41.8,-42.7,-41.9).curveTo(-34.6,-42,-25.9,-38.9).curveTo(-41.5,-46.6,-45.4,-57.6).curveTo(-46.9,-61.9,-46.3,-65.9).curveTo(-45.7,-69.4,-43.9,-71.4).curveTo(-41.9,-73.6,-36.9,-74.2).curveTo(-31,-75,-24.9,-72.8).curveTo(-8,-66.9,0.1,-43.4).curveTo(28.2,-41.2,43.4,-21.7).curveTo(58.5,-2.4,59.6,32.6).curveTo(66,33.6,70.3,37.1).curveTo(74.1,40.3,74.8,44).curveTo(75.4,47.7,72.3,49.7).curveTo(68.8,51.8,62.1,50.6).curveTo(65.5,55.7,65.1,60.1).curveTo(64.8,64,61.7,65.8).curveTo(58.6,67.6,54.6,66.3).curveTo(50.2,64.9,46.6,60.1).curveTo(25.4,70.5,-5.1,72.5).curveTo(-34.1,74.3,-46.4,67.6).curveTo(-48.9,71.7,-53.3,73.5).curveTo(-55.6,74.4,-57.6,74.4).curveTo(-59.2,74.4,-60.6,73.8).closePath();
	this.shape_5.setTransform(134.4,74.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginLinearGradientFill(["#DCDBEC","#FFFFFF","#DCDBEC"],[0,0.4,1],-50.3,0,50.5,0).beginStroke().moveTo(-36.7,23.9).curveTo(-42.9,20.8,-47,16.9).curveTo(-50.5,13.6,-50.5,11.7).curveTo(-50.5,8.9,-49.5,-2.8).lineTo(-48.5,-13.8).lineTo(49,-30.3).lineTo(50.3,-20.6).curveTo(51,-8.8,48.5,1.2).curveTo(45.3,14.3,37.2,19.9).curveTo(27.4,26.9,3,29.7).curveTo(-2.3,30.3,-7.3,30.3).curveTo(-23.5,30.3,-36.7,23.9).closePath();
	this.shape_6.setTransform(136.5,151.8);

	// corbata
	this.instance_5 = new lib.Corbata_mc();
	this.instance_5.setTransform(75.3,247.6,1,1,0,0,0,52.5,59.2);

	// ala der
	this.instance_6 = new lib.Ala_mc();
	this.instance_6.setTransform(46.9,65.7,1,1,0,0,0,46.9,61.1);
	this.instance_6.alpha = 0.699;

	// ala izq
	this.instance_7 = new lib.Ala_mc();
	this.instance_7.setTransform(220,65.7,1,1,0,0,180,46.9,61.1);
	this.instance_7.alpha = 0.699;

	this.addChild(this.instance_7,this.instance_6,this.instance_5,this.shape_6,this.shape_5,this.shape_4,this.instance_4,this.instance_3,this.instance_2,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(9.9,-7.2,247.2,314.1);


(lib.Alitas_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// muñeco
	this.instance = new lib.Muñeco_mc();
	this.instance.setTransform(132,153.4,1,1,0,0,0,132,153.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:163.4},15,cjs.Ease.get(-0.99)).to({y:153.4},15,cjs.Ease.get(-0.99)).wait(1));

	// sombra
	this.instance_1 = new lib.Path_34();
	this.instance_1.setTransform(139.2,294,1,1,0,0,0,66.2,23.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.2,scaleY:1.2},15,cjs.Ease.get(-0.99)).to({scaleX:1,scaleY:1},15,cjs.Ease.get(-0.99)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.9,-7.2,247.2,324.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;