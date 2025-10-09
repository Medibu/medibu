(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.invitaciónv05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frase01
	this.instance = new lib.Tween12("synched",0);
	this.instance.setTransform(349.2,78.2,0.5,0.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(110).to({startPosition:0,_off:false},0).to({scaleX:1,scaleY:1,y:28.2,alpha:1},20,cjs.Ease.get(-0.99)).wait(170));

	// frase02
	this.instance_1 = new lib.Tween13("synched",0);
	this.instance_1.setTransform(350.6,243.9,0.5,0.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(130).to({startPosition:0,_off:false},0).to({scaleX:1,scaleY:1,y:293.9,alpha:1},20,cjs.Ease.get(-0.99)).wait(150));

	// ojos chico abiertos
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhABBQgbgbAAgmQAAglAbgbQAbgbAlAAQAmAAAbAbQAbAbAAAlQAAAmgbAbQgbAbgmAAQglAAgbgbg");
	this.shape.setTransform(293.5,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiCCCQg2g1AAhNQAAhMA2g2QA3g2BLAAQBMAAA3A2QA2A2AABMQAABNg2A1Qg3A3hMAAQhLAAg3g3g");
	this.shape_1.setTransform(314.6,153.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#772626").s().p("AkFEHQhthuAAiZQAAiYBthtQBthtCYAAQCZAABtBtQBtBtAACYQAACZhtBuQhtBsiZAAQiYAAhthsg");
	this.shape_2.setTransform(306.7,161.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag6A7QgZgYAAgjQAAgiAZgZQAYgYAiAAQAjAAAYAYQAZAZAAAiQAAAjgZAYQgYAZgjAAQgiAAgYgZg");
	this.shape_3.setTransform(473.4,141.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ah2B3QgxgxAAhGQAAhFAxgxQAygxBEAAQBFAAAyAxQAxAxAABFQAABGgxAxQgyAxhFAAQhEAAgygxg");
	this.shape_4.setTransform(492.6,117.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#772626").s().p("AjtDuQhjhjAAiLQAAiKBjhjQBjhjCKAAQCLAABjBjQBjBjAACKQAACLhjBjQhjBjiLAAQiKAAhjhjg");
	this.shape_5.setTransform(485.4,124.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},60).to({state:[]},15).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},10).to({state:[]},25).wait(190));

	// ojos chico cerrados
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#772626").s().p("A1uDCQAfgnBFg2QGPEdDIgIQCKgPAfjvQAnjzipgvQFCgugPF3QgICag9BzQhFB7hdAHIgeACQkGAAoKlygAFZjMQAegmBFg2QHOEkCSgQQCKgHAfjuQAej2ihgvQFDgugXF5QAACahFBxQhGB7hcAIIgTAAQj/AAocl3g");
	this.shape_6.setTransform(387.6,148.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6}]},75).to({state:[]},10).wait(215));

	// cara chico
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ApSi5QILELKajdQhUDtlTBMQg4AMg5AAQlAAAlNlzg");
	this.shape_7.setTransform(406.4,288.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EB4C68").s().p("AhOF+QpJhFlClQQiSiaCSiSQCSiSCSCaQAeAeA2AnQJQGdMWkiQDHhFBFDAQBGDGjIBFQlvCAl8AAQh5AAh5gNg");
	this.shape_8.setTransform(392.5,281.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#772626").s().p("EgypAoAIKVjeQygyBI5y1IhzguQkVwNJuuDQJnuDTGlxQIxipIaCZQEqBVJ2FaQJnFKGIBsQJ9CpLDiSICSTVQlKG+rLAuQiSAIzdhdQuDg9oBDAQraEVmANaIuLkrIL5IKQhcNNKkRiI4+KOg");
	this.shape_9.setTransform(327.6,76.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFD0B4").s().p("EggXAfVQtGs9AAyYQAAyeNGs+QM9s+SYAAQQ6AALpNdQJIKsGvURQG9VBwFMuQtsKs1mAAQyYAAs9tGg");
	this.shape_10.setTransform(309,92.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DC0067").s().p("EgiHAhMQt0tsAAzdQAAzbN0tzQNst0TdAAUAhPAAAAN0AvCQGmWlw0NNQuKLL2rAAQzdAAtst0g");
	this.shape_11.setTransform(308.6,91.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFD0B4").s().p("AtIKUIjX1sIWyCSIKNUgg");
	this.shape_12.setTransform(284.2,398.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DC0067").s().p("Av5MyIkU6/IblCxIM2Zqg");
	this.shape_13.setTransform(288,397.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},60).to({state:[]},50).wait(190));

	// ojos chica abiertos
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag1A2QgXgXAAgfQAAgeAXgYQAXgWAeAAQAfAAAXAWQAXAYAAAeQAAAfgXAXQgXAXgfAAQgeAAgXgXg");
	this.shape_14.setTransform(403.6,172.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhsBtQgtguAAg/QAAg/AtgtQAtgtA/AAQBAAAAtAtQAtAtAAA/QAAA/gtAuQgtAthAAAQg/AAgtgtg");
	this.shape_15.setTransform(386,150.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6E1843").s().p("AjZDbQhbhbAAiAQAAh/BbhaQBbhbB+AAQCAAABbBbQBaBaAAB/QAACAhaBbQhbBaiAAAQh+AAhbhag");
	this.shape_16.setTransform(392.6,157.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgwAxQgVgUAAgdQAAgcAVgUQAUgVAcAAQAdAAAUAVQAVAUAAAcQAAAdgVAUQgUAVgdAAQgcAAgUgVg");
	this.shape_17.setTransform(236,144.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhiBjQgpgpAAg6QAAg5ApgpQApgpA5AAQA6AAApApQApApAAA5QAAA6gpApQgpApg6AAQg5AAgpgpg");
	this.shape_18.setTransform(220,124.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6E1843").s().p("AjGDHQhShTAAh0QAAhzBShTQBThSBzAAQB0AABTBSQBSBTAABzQAAB0hSBTQhTBSh0AAQhzAAhThSg");
	this.shape_19.setTransform(226,130.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]}).to({state:[]},20).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},10).to({state:[]},5).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},10).to({state:[]},15).wait(240));

	// ojos chica cerrados
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6E1843").s().p("AEmGtQBygyCAjcQhAAyhjgWQBOgcBGhjQgqiMAVhdICWgjQgPBqBABpQA5BxBOAAQCOgHDcioICAA5QkGC9iWBAIhjBdQgjAVgdAHQAOgyAAgcQgyAyh/BVQAqgrAAiOQhHBHixBVQicBIgIAAQgFAABTgrgA0cDfQBxg5CAjaQhAA3hjgbQBVgcAyhOQhOjAA/iVICAAOQgOByA5BxQA4B5BWAAQB5AAEpjVIBzBAQjkCyixBTQgIAqhcBHQgrAkgjAHQAAgVAchHQgVAjiyByQAzgrgPiHQhOBHiqBWIhdAjg");
	this.shape_20.setTransform(302.4,164.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_20}]},20).to({state:[]},10).to({state:[{t:this.shape_20}]},5).to({state:[]},10).wait(255));

	// cara chica
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6E1843").s().p("A2PEGQFAgdTutEQaaIxo4FpQm5Edp8AAQq3AAuklWg");
	this.shape_21.setTransform(453.7,68.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Aj+AzQgrgkAAhaQE3AqCGAAICWgOQgkBTjqAdQhaALg/AAQhfAAgigZg");
	this.shape_22.setTransform(305.6,266.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EB4C68").s().p("Ak+CIQiAgVAAioQHagWGjhHQhjDFkjBAQiCAgh1AAQhCAAg+gLg");
	this.shape_23.setTransform(308.4,287.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EB4C68").s().p("AsdALQF4jECqAxQKLCaGOhFQkcDFlcAAQlhAApiiHg");
	this.shape_24.setTransform(303.8,248);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#6E1843").s().p("EgRkBWOQiHm4kAkjQnUGcrjBxQy+CytxqUQl4kdirljQiqljBVk/QDqtNLOhOQiyGGCyEVQCxEOE5hVQD4hAgVjyQgVixjOmAImArbQjcnHgylcQhAnNBrmqQBymwD4i/QmOq/IHlyQAjFyGcAAQGjAAFOrOIN4HHIBVG/ITbDkIm5TKIPUlqUgGqgaRAErg+0UAZ7AX3ADdAlhQBOM+F/G5QFHFqG/AAQGjgHD5kqQEOk5iAmcQKGLjljK9QRiE/qGVwQEVKVMwq4UgC/AYagi9ABVQAALHNim5UgN/AaTggogJqQmPIwuPAAQlSAAmZhNg");
	this.shape_25.setTransform(834.3,396.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#6E1843").s().p("EAOAArNQHjhWCOhxQDOikCOobQoVgrgOojQCcGAFjj5QEyjOBVupQi5lTn4grQlcgcr4B5QvECalqAcQsGAyojixQDOFcAOFUQAOGHj4DVQtjLjnxy4QHqCVFHo/QDHlcByovQkOh5jOijUAYFg1RAu6AdFUAnuAP4gKxAlQQlWdYz6AAQmkAAoIjMg");
	this.shape_26.setTransform(333.8,58.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFD0B4").s().p("A5uL5QoNpVDqygQH4BHLOhcISRiyQJ5hjFGAxQGxBACkE5QhVOnkyDOQljD5icmAQAOIjIVArIh5FxQgkAOtGCHQmyBAlqAAQwRAAnVoNg");
	this.shape_27.setTransform(355.2,174.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FAC86C").s().p("AlwosQo4ljo4iyIGbgcQPcAALhKGQLbJ9COO4Ql4w33ZpTg");
	this.shape_28.setTransform(530.7,-116.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFD0B4").s().p("EgleAj8QpcqcEH6DQDAypLNr/QL/s4RSAAQR+AAMxMxQMqMpAASGQAARSsxL/Qr4LGywDAQn4BQmfAAQwiAAnQoIg");
	this.shape_29.setTransform(417,37.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#6E1843").s().p("EgnkBQuQ9hq4nV5oQiypxBWpOQBOoUDqjrQi5P/KchrQGqg/ArpxQAHjOgOnHIgWsEUAArgrZAMpgRbUAPGgUpAnCACkQIVo4NUBHQM4BALbJ4QMUKiFOQbQGASpk5V3QlxagsjW+QkNHxA4GjQA5FxEcCyQEcC4FVhcQFyhjD/l5QGORGxwLxQwGKx7MAVIhmAAQ8PAA/nrqg");
	this.shape_30.setTransform(431.8,331.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]}).to({state:[]},60).wait(240));

	// cuerpo chico
	this.instance_2 = new lib.Tween1("synched",0);
	this.instance_2.setTransform(246.4,217.1,1,1,-6.2,0,0,0,35.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(110).to({startPosition:0,_off:false},0).to({regX:0.1,regY:35,scaleX:1,scaleY:1,rotation:14.5,x:246.5,y:217},20,cjs.Ease.get(1)).to({startPosition:0},20).to({x:266.5},20,cjs.Ease.get(1)).wait(130));

	// cabeza chico
	this.instance_3 = new lib.Tween2("synched",0);
	this.instance_3.setTransform(220.4,164.7,1,1,-7,0,0,-4.9,20);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(110).to({startPosition:0,_off:false},0).to({regY:20.1,rotation:7.9,x:239.9,y:160.2},20,cjs.Ease.get(1)).to({startPosition:0},20).to({x:259.9},20,cjs.Ease.get(1)).wait(130));

	// piernas chico
	this.instance_4 = new lib.Tween11("synched",0);
	this.instance_4.setTransform(244.5,226.4,1,1,0,0,0,-2.9,-16.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(110).to({startPosition:0,_off:false},0).to({startPosition:0},40).to({x:264.5},20,cjs.Ease.get(1)).wait(130));

	// brazo izq chica
	this.instance_5 = new lib.Tween5("synched",0);
	this.instance_5.setTransform(511.4,176.7,0.998,0.998,-45.5,0,0,24.1,-1.4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(110).to({startPosition:0,_off:false},0).to({regX:24,scaleX:1,scaleY:1,rotation:0,x:471.3,y:176.8},40,cjs.Ease.get(1)).to({x:451.3},20,cjs.Ease.get(1)).wait(130));

	// corazón
	this.instance_6 = new lib.Tween4("synched",0);
	this.instance_6.setTransform(331.3,142.8,1,1,-8.4,0,0,13.5,13);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(110).to({startPosition:0,_off:false},0).to({scaleX:1,scaleY:1,rotation:17.1,x:374.3,y:144.8},40,cjs.Ease.get(1)).to({regX:13.6,rotation:6.8,x:356.3,y:139.8},20,cjs.Ease.get(1)).wait(130));

	// brazo chico
	this.instance_7 = new lib.Tween3("synched",0);
	this.instance_7.setTransform(247.7,183.4,0.999,0.999,-5.1,0,0,-13.1,0);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(110).to({startPosition:0,_off:false},0).to({regX:-12.8,rotation:27.5,x:257.7,y:186.4},20,cjs.Ease.get(1)).to({startPosition:0},20).to({scaleX:1,scaleY:1,rotation:13.9,x:277.7},20,cjs.Ease.get(1)).wait(130));

	// cabeza chica
	this.instance_8 = new lib.Tween6("synched",0);
	this.instance_8.setTransform(512,166.1,0.999,0.999,-8.7,0,0,-20.9,-1.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(110).to({startPosition:0,_off:false},0).to({regY:-1.3,scaleX:1,scaleY:1,rotation:0,x:472,y:166.3},40,cjs.Ease.get(1)).to({x:452},20,cjs.Ease.get(1)).wait(130));

	// cuerpo chica
	this.instance_9 = new lib.Tween7("synched",0);
	this.instance_9.setTransform(506.6,217.8,1,1,4.3);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(110).to({startPosition:0,_off:false},0).to({rotation:0,x:468.6,y:218.3},40,cjs.Ease.get(1)).to({x:448.6},20,cjs.Ease.get(1)).wait(130));

	// pierna chica
	this.instance_10 = new lib.Tween8("synched",0);
	this.instance_10.setTransform(518.6,238.1,0.998,0.998,43.9,0,0,-21.3,3.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(110).to({startPosition:0,_off:false},0).to({regX:-21.3,scaleX:1,scaleY:1,rotation:0,x:478.6,y:238},40,cjs.Ease.get(1)).to({regX:-21.2,scaleX:1,scaleY:1,rotation:15.6,x:458.6,y:238.1},20,cjs.Ease.get(1)).wait(130));

	// brazo der chica
	this.instance_11 = new lib.Tween9("synched",0);
	this.instance_11.setTransform(506.9,172.9,0.999,0.999,-59.8,0,0,16.6,13.6);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(110).to({startPosition:0,_off:false},0).to({regX:16.5,regY:13.5,scaleX:1,scaleY:1,rotation:0,x:466.8},40,cjs.Ease.get(1)).to({x:446.8},20,cjs.Ease.get(1)).wait(130));

	// velo
	this.instance_12 = new lib.Tween10("synched",0);
	this.instance_12.setTransform(512.3,164,0.999,0.999,-11.5,0,0,-47.4,-12.4);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(110).to({startPosition:0,_off:false},0).to({scaleX:1,scaleY:1,rotation:0,x:472.3},40,cjs.Ease.get(1)).to({rotation:-8.8,x:455.3,y:166},20,cjs.Ease.get(1)).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.3,-259.3,1451.5,1215);


// symbols:
(lib.Tween13 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(0,0,0.7,0.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-173.6,-10.1,347.3,20.5);


(lib.Tween12 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(0,0,0.9,0.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-170.6,-12.2,341.3,24.7);


(lib.Tween11 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E1843").s().p("AiqDFQgXgfANg7QAEgUALgiIARg3QAShEgKgpQgOg3hEgdIBog1QBRAuAcBbQAZBYgiBSIg5AXIBHgEQBCgsAShEQAWhTg4hmICFAAQCCFVj5B+g");
	this.shape.setTransform(1.8,-3,1,1,0,180,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6E1843").s().p("AhDADQgHgoAQgLQAQgLAmABIA9ADIAOAnQgOASgmgIIg3gTIgGgBQgDAMAIAfIAKAhIgZAJQgLgdgEgbg");
	this.shape_1.setTransform(16.4,22.1,1,1,0,180,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6E1843").s().p("AgzALQgqgpAVgTQAPgNAvABIBRAFIAJAaQgUAagqgKIghgLQgWgHgKgCQACASAjAcQATAQARALIgOAXQgigWgdgdg");
	this.shape_2.setTransform(-16,21.7,1,1,0,180,0);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.1,-27.9,48.4,56.1);


(lib.Tween10 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E1843").s().p("AAoF8QiuAMhEhdQg5hPgDjDIABg1IABguQgDgsgegFQgvgHANBIQgRgRgFglQgGgqAMgsQAhhzCFgxQCTg2CAABQB7ACBIAwQBQA1gcBNQgSgagagHQgYgHgUANQgUANgEAaQgEAdATAjQA5BoAaB1QAWBjgbBUQgYBKg3AvQg0Atg6AEIgNABQgzAAghgkg");
	this.shape.setTransform(-44,-10.3,1,1,0,180,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqAVQAjgOAogoIAKAKQgrAqglAPg");
	this.shape_1.setTransform(38,50.5,1,1,0,180,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AheBBQBngvBAhQIAKgPIAMAIQgbAsg4ApQgwAng0AWg");
	this.shape_2.setTransform(44.5,32.9,1,1,0,180,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EA66A4").s().p("AjxB2IHIjuIAaAgQjCDRjkAAQgdAAgfgDg");
	this.shape_3.setTransform(48.6,0.4,1,1,0,180,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#DC0067").ss(0.3,1,1).p("AhlCGQCNgYAjhUQAkhSgMhMQg8CziMBXg");
	this.shape_4.setTransform(-11,-40.3,1,1,0,180,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EA66A4").s().p("ABjiFQAMBNgkBSQgjBTiNAYQCMhWA8i0g");
	this.shape_5.setTransform(-11,-40.3,1,1,0,180,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AE8JoQn8hNn3qdQhGiDADh1QAChpA6hDQA3hABSgCQBXgCBPBHQBrgiBgAbQBbAbA0BJQA1BKgHBiQgIBqhQBqQHojsFsGqIAHAHIm6HqgAq1ogQg6A+gDBlQgCBxBGCDQHzKZH5BOIGvnfQl4m4n9EUQBhhtAShvQAQhlgyhPQgxhNhcgcQhggehtAlQhJhEhUAAQhQAAg3A7g");
	this.shape_6.setTransform(3,0);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-79.3,-61.7,158.9,123.6);


(lib.Tween9 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD0B4").s().p("AiQCoQgYgCAJg5QgkAxgTgTQgPgPA6gpQhFAUgCgZQgBgWA2gBQgvgRAJgPQANgTAyAdQBbjEEpgEQAfAagUASQkrAEg5DRQAEBOgaAAIgBAAg");
	this.shape.setTransform(0,0,1,1,0,180,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DC0067").s().p("AiRCyQgOgBgHgPQgEgIgBgPIgBAAQgKAJgMAFQgQAEgLgKQgLgMAJgQQAFgJAJgJQgOABgJgCQgUgFAAgQQgCgOAOgJQAGgEAKgDIgJgIQgKgMAHgMQAIgLARAAQAJAAAPAFIATAHQBgi/EogFIAGADQAqAighAcIgEABQkhADg4DIQABASgCAWQgDAVgFAJQgIASgPAAIgDgBg");
	this.shape_1.setTransform(0,0,1,1,0,180,0);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.3,-17.8,50.8,35.8);


(lib.Tween8 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD0B4").s().p("Ag/B+Qg7gCgsggQgwgjgQg7IA0h7QAFBJAcAuQAdArAuAMQBfAaCDhzIgGAUQAagEAXAJQAXAKAJARIgLANQgrgYgtARQgfA1g4AdQguAag2AAIgIAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.1,-12.6,46.4,25.3);


(lib.Tween7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhaHXQgngIgGgCQgTgIgBgTQgFg5BfghQgkipBUhqQj+hQhPlPQBdgJBOgwQAYgPAmgdQApgfATgMQBFgvBQgHQBngJCbAyQi0EdA+CJQAtBjgcBJQgaBGhNAIQCHFnj6ATQgrg8hOgQg");
	this.shape.setTransform(1.1,-0.2,1,1,0,180,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DC0067").s().p("AALIlQgWghglgOIhNgVIgTgHQgWgLgCgZQgDgpAzgjQAOgKAUgIIAHgDQgfifBKhoQj4hXhOlMIgDgMIANgBQBagJBMgvQAYgPAmgcQAqggARgLQBIgxBTgHQBpgJCdAzIANAEIgHAMQgMASgQAdQgfA5gWA2QhKCsAlBSQAsBhgYBNQgYBLhNAOQBBCzgnBeQgkBaiAAJIgGABg");
	this.shape_1.setTransform(1.3,0,1,1,0,180,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFD0B4").s().p("AAAAxQgwAWg2gHIAAgQQBNgaAagWQAggaAOg5IA4ALQgPA8gxAlIgZA7g");
	this.shape_2.setTransform(-27.3,41.7);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.7,-55.4,75.7,110.9);


(lib.Tween6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E1843").s().p("AhjgRQB8guBBAqQAoAYh3AnQhXg5gXgCg");
	this.shape.setTransform(-15.7,-20.1,1,1,0,180,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRgCQAFgDANACQARACADAEIgLgBQgKAAgTADQgBgFADgCg");
	this.shape_1.setTransform(-26.1,-6.2,1,1,0,180,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EB4C68").s().p("AgeADQAAgKAJgBQAMgCAMADQAVAFAHAMQgegFgfgCg");
	this.shape_2.setTransform(-25.9,-4.7,1,1,0,180,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EB4C68").s().p("Ag3AAQArgJAXAAQAZAAAUAMQgcgDgsAJIgGABQgMAAgVgKg");
	this.shape_3.setTransform(-26.2,-7.5,1,1,0,180,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6E1843").s().p("AhMAJQgDgGgGgCQAHgBAEADQgJgNgIgEIgBgBIAHADQAMAGAFAFQABgKgDgDQAMAIACADIgCgHQACABADACQAHAFAAACQANAFAQANIgIAEQgVgPgJAAQgGAAgEAJQgEAIABAIIgJABQgEgLAFgNgAAjAMQgCgHADgIQgFgHgFgCQAHgBAEADQgJgPgIgEQgNgHATAJQANAGAFAFQAAgKgDgDIAMAKIgBgGIAFACIAHAHQAKAEATAMIgJAEQgQgKgKgBQgFAAgEAHQgFAHABAHg");
	this.shape_4.setTransform(-26.3,-13.4,1,1,0,180,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6E1843").s().p("AgLgGIhFgaIAfBVIhYAQIgGAfIg+AgQgYgygdAAQgdAAgDAaQgkgaAcgyQgSgNgIgdQgHgeAEggQAEgZAPggIAbgzQAPgbABgNQACgRgSgEQgWgGgMATQgNATANAcQgzgGgQg7QgGgXAMgZQAMgZAagUQA+guBWAMQA0AIAhAdQASgUAJgfQBpgUAmA2QCTgsA/B3Qg9gfAAAyQCeAGANBuQg5gxgUAuQAuBihPAXQAZAvguA0QAJgdgTgWQgRgVgeAAQgfAAgXAZQgbAfgGA7QgPCphzBrQgVkbAeh0g");
	this.shape_5.setTransform(11,2.8,1,1,0,180,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6E1843").s().p("AjOA1QAPgLATgJQgIglgOgZQgXgogjAKQAjhVA9A0QASAPgBAcQgBAYgPAYQAngMA2ADQAaACBCAJQA1AJAZgCQAjgDANgWQgGhCgVgPQgZgRgLAbQABgnAlgDQgKgmgOgLQgKgIgigGQCUg6AgCwQAwCmizBHQhLAvg7AAQhyAAhGicg");
	this.shape_6.setTransform(-24.1,-20.8,1,1,0,180,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFD0B4").s().p("AAgBVIhRgMQgygHgkAFQgQhRAlgqQAsgyB0ARIA+ALIAIAaQglADgBAmQALgbAZASQAVAOAGBAQgLAWgfAFIgSABQgUAAgdgFg");
	this.shape_7.setTransform(-22.6,-12.7,1,1,0,180,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FAC86C").s().p("AhoBMQAogMAogZQBngoAahMQgJBDg0ArQgyAthFAAg");
	this.shape_8.setTransform(-10.3,-33.2,1,1,0,180,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFD0B4").s().p("Ah/CMQgzg2gNhUQgThzArgvQAtgzB9AUQBUANA2AyQA5A2AABMQAABSg5A5Qg5A5hRAAQhMAAg2g6g");
	this.shape_9.setTransform(-18.3,-22.3,1,1,0,180,0);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.5,-42.2,99.2,84.5);


(lib.Tween5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD0B4").s().p("AjiBUQgTgOAmgrQg3AVgGgZQgFgWBHgBQhFgUAMgWQALgTAuAdQgegpAQgHQAVgJAaA0QC2h1D9CeQAMAngaADQj9ieijCQQggA3gUAAQgFAAgFgDg");
	this.shape.setTransform(0,0,1,1,0,180,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DC0067").s().p("AjoBdQgLgIACgRQABgIAHgOIgBAAQgPACgKgDQgQgEgEgQQgDgOARgKQAJgDANgCQgOgIgGgGQgNgOAIgPQAHgMAQAAQAJAAAIADIgDgMQgDgPAOgGQAMgGAOAJQAIAFAKANIALAQQC5huD7CfIAEACIABACQAQAzgnAFIgEABIgDgCQj2iaibCKIgXAgQgMAOgLAHQgJAFgIAAQgHAAgHgFg");
	this.shape_1.setTransform(0,0,1,1,0,180,0);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28,-9.8,56.2,19.7);


(lib.Tween4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEBIQgrgFgMg3IADgFIgBgHQADgFAUgMIA5gLQgCgJgagFIgVgBIgFgGIABgDIACgCIgCgCQABgOAhgDQAlAFATAkIgFATQgCAPhMAMQANAZAMACQAMACAGgQQASADAAAVQgHARgaAGg");
	this.shape.setTransform(49.6,-67.6,1,1,0,180,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEBAIgCAAIgCgCIAAACIgYgJQghgLAHg0QACgWAOgTQASgQAOACQA0AHASBLIgHAKQgTAkghAAIgFgBgAgWgHIACAAIgDAHIABAHIgCABIABAAQgCAXAMACIAOACQAQABAJgSIgCAAIABgEQgRgngPgCIgEgBQgEAAgHAVg");
	this.shape_1.setTransform(36.7,-65,1,1,0,180,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhHBNQgLgBgDgRIACgFIAAgKIAAgIIACgBIgBgCIABgHIACgCIgCAAQAKg0ACAAQAHgzARACQASAIAAAHIgGAhIgBAGQgDAXADAXIgCABIABABIAAADIACAAIALgiQAFgqASACQALAEAEAHIAHA2IACABQAYhBAQACIACAAQANACAGAPQgCANgPASQgXBDgagDIgBAAQgPgCgEgdIgCgBQgOAfgPgCIgHgBQgHgBgIgKQgCATgNAFg");
	this.shape_2.setTransform(21,-63.9,1,1,0,180,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOAzQgmgwADgaIAGgWQAagXASADIAKABQAhAFAGAgQgBAEgLAAIgXgKIgbACIgBADIAJAAIAEAAQAKACAQAOQAaAkgCARQgDAOgbALQgNgCgVgNgAAMAfQgIgUgKgGIgCAAQAIATAKAHIACAAIAAAAg");
	this.shape_3.setTransform(6.6,-61.5,1,1,0,180,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVApIgEAAQgIAVgOgDIgJgBQgDgBgCgIQAEglAPguIgCgBIAGgPIgCgCIABgEQAIgJAKABQAJABAJAOIgIAiIAAAPQgCAUAkAMIAVgCIAHABQAAADAFABQACAJAEAAQgCASgfADQgigEgQgUg");
	this.shape_4.setTransform(-5.9,-59.5,1,1,0,180,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUA/QgvgFgDhQQAIgmAeAEIAMAFQAVAWAEAUIACABQAYg4AbADIANAMIgFAKQgMAOgTAtQgNAZgJgBQgVATgKAAIgCAAgAgmgQQgEAeAdAZIAEgFIABgFQgPgxgNgBg");
	this.shape_5.setTransform(-17.9,-57.3,1,1,0,180,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgBBcIgJgNIAJg8IABgCIAAgBIAAAAIgCgCIgMgCQgLgCgRgRIACgCQgPgrABgOQADgYAggCQAOACAKAIIASAMQACgRAVgBQAKAMgBAHIgBAEIgYBvQgFApgTAGgAgEgOIAHAAQADAAADgSQgOgZgPgCIgDAAQAEAXAPAWg");
	this.shape_6.setTransform(-31.2,-59.2,1,1,0,180,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgDBIQgtgFgKg3IACgFIgBgHQADgFAUgMIA5gLQgDgJgagFIgDgBIgSAAIgEgGIAAgDIACgCIgBgCQABgOAhgDQAlAFATAkIgFATQgCAPhMAMQANAZAMACQAMACAGgQQASACAAAWQgHARgaAGg");
	this.shape_7.setTransform(-51.4,-55.2,1,1,0,180,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgFBAIgBAAIgCgCIAAACIgYgJQgggLAGg0QADgWANgTQARgQAPACQAzAGATBMIgHAKQgTAkghAAIgGgBgAgWgHIABAAIgCAHIAAAHIgCABIACAAQgDAXANACIAOACQAPABAKgSIgCAAIABgEQgRgngPgCIgEgBQgFAAgGAVg");
	this.shape_8.setTransform(-64.3,-52.6,1,1,0,180,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAYBsIgNgFIACgCIAAgCIgBgCIAAgCIACgCIgCAAIANg4IgCgCIAEgLIAFgnIACgCIgCgCIACgTIgBgBQhBBtgcgEIAAgCQgJAAgHgIIAKgkIgCgCIABgCIACgCIAAgCIgCgCIABgCIACgBIAIhSIgBgYQADgGAMgCIAEAAQAQACgFAhIgFAZIgBAcIgFATIAEAAIAmg+QAcgkAWgHIAKABQAQACgDAUIgLBLIACACIgDAGIgDAXIgCACIACAAIgMAwQgFAigSAAIgDAAg");
	this.shape_9.setTransform(-79.5,-55.6,1,1,0,180,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgHBRIgBgCIgBACQgLgCgFgLIACgaIABgCIgBAAIADgMIgBgIIAAgBIACgCIAHhBQADgcAWgEIACAAIALAOIgBABIgCACIACAAIgCAFQABAYgGAoIgCAFIACAAIgHAnIgCAFIABACIAAADIgNAVg");
	this.shape_10.setTransform(77.2,-71.8,1,1,0,180,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgOAzQgngvAEgbIAGgWQAagWASACIAKABQAhAFAGAgQgBAEgLAAIgXgKIgbACIgBAEIAJgBIAEABQAJAAARAPQAaAkgCARQgDAOgbALQgNgCgVgNgAAMAfQgJgUgJgGIgCAAQAIATAKAHIACAAIAAAAg");
	this.shape_11.setTransform(68.7,-69.1,1,1,0,180,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgFAaIgBgCIAAACQgHgBgCgKIAGgLQAAgEgGgRQABgKANACQATAKgCAVIgCABIAAACIABABQgBAJgRAHg");
	this.shape_12.setTransform(32.1,4,1.897,1.897,0,180,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAEBNQgDAAgKgLIgOgOIABgIQACgEALgGQAHADAHATQAIAUgFACgAgHAWIgCAAQgJgGACgPQAEgFACgPIACgVIACgBIgCAAIADgKIgBgHIACgBIAAgCIgBgBQAGgQAJABIAEACIAAgBQALAHgBALIgHArIgCAEIABAAQgHAhgOAAIgCAAg");
	this.shape_13.setTransform(17.6,-7.5,1.897,1.897,0,180,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgiBAQgOgHgGgXIAAgGQAFgfAggLIAggMIAAgCQgLgDgFgHIgYgFIgHADIgFgDQgPgBABgPQAJgPATACIAQACQBBAPgDAdIAAADQgBAGgeARQgsAJgDATIAAACQgCAOARAGIAFAAQAHgDACgFIAAgPQAAgEAMgBQALAIgCAIIAAAGQgEAdgmAAg");
	this.shape_14.setTransform(0.4,-5.5,1.897,1.897,0,180,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgDAzIgCgBIgBgBIAAABIgTgGQgagJAFgqQADgSAKgOQANgMAMABQApAFAOA7IgFAIQgPAdgbAAIgDAAgAgRgGIABAAIgCAGIAAAFIgBABIABAAQgCASAKACIAKABQANACAHgPIgBAAIAAgDQgMgfgNgBIgCgBIAAAAQgEAAgFAQg");
	this.shape_15.setTransform(60.2,23.1,1.897,1.897,0,180,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgQAgIgDAAQgHAQgLgBIgHgBIgEgIQAEgeALgjIgBAAIAEgNIgBgBIAAgDQAHgIAIABQAIABAGALIgGAcIAAALQgCAPAcAKIARgCIAGABQAAADAEAAQABAHADABQgBAOgZADQgbgEgMgQg");
	this.shape_16.setTransform(39.8,26,1.897,1.897,0,180,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgKAoQgfglADgVIAFgSQAUgRAOACIAIABQAaADAFAaQgBADgIAAIgTgIIgVACIAAADIAHgBIACABQAJABAMALQAVAdgCAMQgCAMgWAIQgKgBgQgLgAAKAZQgHgQgHgFIgCAAQAGAPAIAFIACABIAAAAg");
	this.shape_17.setTransform(21.4,27.7,1.897,1.897,0,180,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgQBFQgHgBgDgHIABgJQABgEALgFQANAGAAAHQgCAJgKAFgAgEAfIgBAAQgKgGACgPQAEgGACgOIACgVIACgBIgCAAIADgKIgBgHIACgBIAAgCIgBgBQAGgQAJABIAEACIABgCQAKAIgBAKIgHAsIgCAEIABAAQgHAhgOAAIgCAAg");
	this.shape_18.setTransform(5.3,26,1.897,1.897,0,180,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAFAuQgHgmgKgWIgCAAIgEAjIgEAOQgHADAAADIgMgBQgIgBADgiIABgIQAGgxAYACQAQACAMAeQACgLANgIIABAAIACABIAAgBIABgBQAOABACALIgBAFQgJAMgEAcIgCAVQgFAKgKABQgHAAgFgFg");
	this.shape_19.setTransform(-8.4,32,1.897,1.897,0,180,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgEA+IgRgEQgegcADgfQACgHANgJIABABIAFgCIAHABQARACAJAMIACgFIgBAAIAEgNQAJgqAJABIAIABQAHABAFAKIgBADIgJAlQgJA5gNgCQgLASgJAAIgBgBgAgWAIQgBAGAMAUIAIABIADgIQgFgNgOgIIgBAAg");
	this.shape_20.setTransform(-26.4,40.7,1.897,1.897,0,180,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F199C2").s().p("ACdJeQh0hFhkiIQiSBoiEAZQh4AXhfgtQhYgqgzhdQgxhcgCh3QgCh7Ayh6QA2iGBphwQB0h8CnhUQC4hcDoglQGMEbCCFOQA3CNgCCHQgCB/gyBlQgxBjhTA4QhVA5hmAAIgDAAQhqAAhqg9g");
	this.shape_21.setTransform(13,13.3,1,1,0,180,0);

	this.addChild(this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-87.3,-80,174.8,160.2);


(lib.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E1843").s().p("AizgEIEIhMIBfCAIlGAhg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD0B4").s().p("AhBAVQAmh+AoAFQArAEhABaQAoglAYATQAYAShDAuQArgKAJATQAKAThTAig");
	this.shape_1.setTransform(14.3,-4.5,0.896,0.896,18.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DC0067").s().p("AgXBcQgOgQgNgdQgPgggMgkIBBhcQAcAMAVALQASAKAKAIQAIAIACAEQAEAJgDAIQgIAPgWADIAGAGQAOAPAEAIQAIATgPAMQgQANgYgJIAFAJQALAYAAANQABAZgZADIgDABQgRAAgSgWg");
	this.shape_2.setTransform(14.2,-4.3,0.896,0.896,0,-161.3,18.6);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.9,-13.8,39.1,22.1);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AALgKQAWAFAFAOQgpgNgiAQQAZgbAXAFg");
	this.shape.setTransform(5.1,11.3,1,1,0,180,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EB4C68").s().p("Ag/AVQgJgKAJgKQAVgUAmgEQAfgEAgALQANAFgFALQgEAMgNgEQgygRgmAZIgGAEQgFAFgEAAQgFAAgFgEg");
	this.shape_1.setTransform(4.2,10.9,1,1,0,180,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#772626").s().p("ABGAkQALgDgCgQQgCgQgJAAQgKgBgeATIgGgGQAkgYARABQAGABAEAIQAFAFAAAKQABAWgQAAIgFAAgAgpAKQALgDgDgOQgCgPgJgBQgNgBgaATIgGgGQAkgaARACQAGAAAEAIQAEAIABAKQABAUgRAAIgEgBg");
	this.shape_2.setTransform(3.9,2.2,1,1,0,180,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#772626").s().p("AjRCmIArgOQhNhLAlhNIgIgDQgShDApg7QAog6BPgYQAlgLAjAKQARAFApAXQAoAVAaAHQApALAugJIAKBQQgWAdguADQgKABhRgGQg6gEggAMQgvASgZA2Ig7gTIAxAiQgGA3AsBJIhoAqg");
	this.shape_3.setTransform(0,-2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFD0B4").s().p("AiFCCQg3g2AAhMQAAhLA3g2QA2g2BMgBQBYAAA5AtQBDA1gdBWQgcBUgmAsQgwA4hFAAQhMAAg2g2g");
	this.shape_4.setTransform(-1.1,-1.4,1,1,0,180,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DC0067").s().p("AiNCKQg5g6AAhQQAAhQA5g5QA5g5BRAAQBdAAA7AuQBGA3gcBdQg5DDiJAAQhRAAg5g5g");
	this.shape_5.setTransform(-1.1,-1.4,1,1,0,180,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFD0B4").s().p("Ag1gpIB5gFIgqBUIhdAJg");
	this.shape_6.setTransform(-2.7,18.5,1,1,0,180,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DC0067").s().p("AhBg0ICVgGIg2BpIhxAMg");
	this.shape_7.setTransform(-2.5,18.4,1,1,0,180,0);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22,-24.3,44.2,48.7);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E1843").s().p("AgMANQgGgGAAgHQAAgGAGgGQAFgFAHAAQAHAAAGAFQAFAGABAGQgBAHgFAGQgGAFgHAAQgHAAgFgFg");
	this.shape.setTransform(3.2,20.5,1,1,0,180,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbAtIA3hnIgFB1g");
	this.shape_1.setTransform(-2,8.4,1,1,0,180,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B78CA1").s().p("AhQD8Qi3hYgRgnQgQgiBEjYQAahRAahGQAahEAHgIQAHgHAsADQAqACAzAKQCFAYAUAeQAcAriEEkIjng8IHPCfQASCIhnBOQhhgSi0hYg");
	this.shape_2.setTransform(-2.2,5.1,1,1,0,180,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFD0B4").s().p("AhBAVQAmh+AoAFQArAEhABaQAoglAYATQAYAShDAuQArgKAJATQAKAThTAig");
	this.shape_3.setTransform(23.1,-29.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6E1843").s().p("AhLAfQgKgkATgrICRBKQhOAXglAAQgjAAgEgSg");
	this.shape_4.setTransform(-20.8,-13.8,1,1,0,180,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DC0067").s().p("AgXBcQgOgQgNgdQgPgggMgkIBBhcQAcAMAVALQASAKAKAIQAIAIACAEQAEAJgDAIQgIAPgWADIAGAGQAOAPAEAIQAIATgPAMQgQANgYgJIAFAJQALAYAAANQABAZgZADIgDABQgRAAgSgWg");
	this.shape_5.setTransform(23.1,-29.4,1,1,0,180,0);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.7,-40.8,61.7,81.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;