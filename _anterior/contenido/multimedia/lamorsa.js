(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.lamorsav06 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// marco
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F3F3F3").ss(2,1,1).p("EA2sAwcMhtXAAAMAAAhg3MBtXAAAg");
	this.shape.setTransform(350,310);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(95));

	// logo
	this.logo = new lib.logo_mc();
	this.logo.setTransform(104,564.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo}]}).wait(95));

	// Capa 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg2rAwcMAAAhg3MBtXAAAMAAABg3g");
	mask.setTransform(350,310);

	// iceberg
	this.instance = new lib.icebergDesplazam_mc("synched",0,false);
	this.instance.setTransform(397.5,330.9);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,700,1024.6);


// symbols:
(lib.Animar40 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009EB6").s().p("ABtAcQAwghAvgZQAaAUAYAXQg0Abg1AxQgNgfgbgegAgDgYIhGAEQgqACgegDQhTgKgZg5QA+AlBNAAQA9gBBbgYQAxgNA0AVQggAWgrAnQgggUgjADg");
	this.shape.setTransform(-3.5,4.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00B8C6").s().p("ABKBDQBahCBfghQASAWAWAfQhgAXhaBUQgNgfgagegAgnANIhVAFQg1ABgigJQhfgXAIhwQA4AtAoAIQA3ALBXgjQBNgfA6AAQBHAAA8AtQhTAcheBUQgfgUglADg");
	this.shape_1.setTransform(0,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4F3D32").s().p("ABfCVQgLgugdghQBmhYBrgbQAkAtAYAoQhXAVh5BYgAgIAmIhDABQgwABgbgBQhagEghghQg0gxAChUIAsgQQA2BEBJgMQAVgEAqgNIBKgXQBfgaA9ARQAvAPAzA1QhnAdhoBeQgTgNgVAAg");
	this.shape_2.setTransform(-0.1,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4F3D32").s().p("ABUCfQgEgSgGgPQgNgfgQgSIgHgHIAIgHQBphYBsgcIAFgCIAEAFQAmAtAYApIAGAMIgMACQhYAVh2BWIgCACgAAZA8QgRgLgTgBIhDABQgxACgagCQhegDgjgkQgjghgMg5QgHgcABgdIA5gVIAEAFQAzBBBDgMQAVgDApgNIBKgXQBhgbBAATQAyAOA0A3IALALIgPAEQhkAchnBdIgFAFg");

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33.5,-15.9,67.3,32);


(lib.Animar39 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009EB6").s().p("AAwBTQhVgFgjgTQgOgHgRgPIglgfQgsghg3gJQg1gIgjATIgKAFQAtg/BPACQBRADBQBHQAoAiA6ADQA6AEA9gZQAQAaALAXQg8AahAAAIgUgBgADqgcQAggXAbggIAtAfQgcAkgnAbg");
	this.shape.setTransform(1.8,5.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00B8C6").s().p("ABJCGQhVgGgjgSQgNgHgSgPIglgfQgsgjg3gKQg1gIgjATQguAZgOAGQAIhkA8glQAxgeAugCQA0gBBKAhQBTAlBVgVQBOBXAtBYQg9AahAAAIgUAAgACchcQAcgSAVgXQA0A9BrBGQgdAigmAeg");
	this.shape_1.setTransform(-0.6,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4F3D32").s().p("Ag8B9QgVgKgagTIgqgdQgugegogCQgsgDgzAeQgbAQgLADQgLACgCgJQgCgGACgXIAFgvQABgeASgbQASgaAegTQBBgpBMANQA1AKAxAYQApAUAfABQAzACAmgMQBLBbA/BvQhHAnhBAAIgGAAQhbAAg8gdgADIgOQg6hGgKgTQAqgaAPgYIAXAFQApA7CCBVQglApg4AqQgcgWg+hHg");
	this.shape_2.setTransform(-0.1,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4F3D32").s().p("AhCCGQgWgKgbgTIgpgeQgsgcgmgCQgpgCgxAcQgbARgNACQgTAFgGgSQgBgEAAgKIAHhBQABggATgdQATgcAggUQBEgsBQAPQA3AJAxAZQAUAJAMAFQAQAFAUABQAzABAjgLIAHgBIAEAFQBOBgA8BrIAFAJIgJAEQhIAnhDABIgKABQhcAAg8gfgAEaBXQgdgXg+hIQg8hGgJgUIgFgIIAIgFQAogYAOgXIAEgGIAhAJIABADQAqA6CABSIAIAGIgHAGQglAtg5AqIgHAEg");

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.5,-16.4,79.1,33);


(lib.Animar30 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DE5F16").s().p("AgLgKIALgsQAFAQANAXQAJAPgCAkQgKAHgNAGIgFglIAAADQABASgHAUIgPACQABgTAMgug");
	this.shape.setTransform(-6,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C32915").s().p("AgvBHQgbgaBJh8QA4A6AAAkQABAcgqAYQgWANgQAAQgOAAgJgJg");
	this.shape_1.setTransform(-6.6,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFAD4A").s().p("AADAOQgdgIABgKQABgMAUACQATACAJAOQAFAJgHADIgHABIgMgBg");
	this.shape_2.setTransform(-1.5,7.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFAD4A").s().p("AAAAOQgZgQAFgMQAFgKAQAJQATAKACAPQACALgIAAQgGAAgKgHg");
	this.shape_3.setTransform(-7.8,4.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DE5F16").s().p("AgGAqQgngGgSgVQgSgTgBgmIAMgVQABAgAUAXQAVAWAgADIAIAIQAbAVAhgPIALAXQgUAKgTAAQgcAAgWgWg");
	this.shape_4.setTransform(-4.9,5.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFAD4A").s().p("AADANQgdgHABgKQABgMAUACQATACAJAOQAFAJgHADIgHABIgMgCg");
	this.shape_5.setTransform(-2,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFAD4A").s().p("AAAANQgagQAGgLQAFgLAQAKQATAJACAQQACALgIAAQgGAAgKgIg");
	this.shape_6.setTransform(-8.4,-3.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DE5F16").s().p("AgGAqQgngFgSgWQgSgSgBgnIANgVQABAgAUAXQAVAWAfAEIAIAHQAaAWAjgQIAKAYQgUAJgSAAQgdAAgWgWg");
	this.shape_7.setTransform(-5.5,-1.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRAAQAAgGAFgFQAGgGAGAAQAHAAAFAGQAGAFAAAGQAAAIgGAEQgFAGgHAAQgRAAAAgSg");
	this.shape_8.setTransform(2.5,-14.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgZAaQgLgLAAgPQAAgOALgLQALgLAOAAQAPAAALALQALALAAAOQAAAPgLALQgLALgPAAQgOAAgLgLg");
	this.shape_9.setTransform(3.7,-14.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgiAjQgOgPAAgUQAAgTAOgPQAPgOATAAQAUAAAOAOQAPAPAAATQAAAUgPAPQgOAOgUAAQgTAAgPgOg");
	this.shape_10.setTransform(4.4,-15.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DE5F16").s().p("AgrAsQgSgSgBgaQABgZASgSQASgTAZAAQAZAAATATQASASAAAZQAAAagSASQgTATgZAAQgZAAgSgTg");
	this.shape_11.setTransform(4.4,-15.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DE5F16").s().p("AATA5QglgJgWghQgxgRgCg4IAZgBQACAlAfAPIAKADQASAbAcAIQAdAIAegNIAKAXQgXALgYAAQgNAAgNgDg");
	this.shape_12.setTransform(-1.9,-9.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FD7A12").s().p("AhlBGQgLhGAbg/QAihSBsgzQBmBfhvDYQgkBHgxAKQg1gygLhMg");
	this.shape_13.setTransform(0.6,-5.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFAD4A").s().p("Ag1DdQAGgIAdgZQhIhFgZhJQgfhWAshQQAkhAA0goQArgjAngFQArAuANA7QANA7gUA8QgrCBg3AzIgbAXQAxA+ADAeQgWgPgKgVQglgEgKALQgEAEgFAMIgLAWQgQgSASgZg");
	this.shape_14.setTransform(0,-0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DE5F16").s().p("AhbEuQgUgTgCgfQgCgjAYggQhBhLgRhTQgUhcAvhSQArhNBBgwQA7gtA4AAIAJAAQAQAOAMANQAvA4AOBFQANBFgXBHQguCEg7A+QAvBFgRArQgNAjgigIQgagGgXgaQgQAjgaAGIgKABQgSAAgPgQgAgPjiQgzAogkBAQgtBQAfBXQAaBIBHBFQgcAZgHAJQgSAYAQATIAMgXQAFgMADgEQALgLAlAEQAJAVAWAQQgCgfgxg+IAbgWQA2g0AriBQAVg8gOg7QgNg7grgtQgnAEgrAjg");

	this.addChild(this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.9,-31.8,36.1,63.7);


(lib.Animar29 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFAD4A").s().p("AhOArIBMgHIgegTQgTgNgKgHQgfgcAEgkQBAArA3AfQAiATAigDQgmASghAAQgxAAhNAbQAFgXAPgCg");
	this.shape.setTransform(0.5,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DE5F16").s().p("AiSA/QAFgrAbgUQgQgWgDgfQgDgbAIgYQAJgXAPgHQAQgIBqA/QBtBAASAoQASAqheAIQhdAJh6A0QgDg2ADgTg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.8,-13.6,29.8,27.4);


(lib.Animar28 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9EDDF7").s().p("AsgLCQiSgLhXiDQhSh7gBi7QgCi/BTi0QBcjHCsiBQC5iLFiAwQB4AQCtArIELBCQCkAkBXgEQCcgHArhxQAehNgvguQgTgTgdgIQgcgJgcAEQAmgmBDgLQBKgLBNAdQBPAdA0BBQA8BMAOByQhWEDi/BHQiXA5kIg3QhZgSiXgqQjEg3g1gNQkwhNjGAQQjzATiOBwQh7BigZCRQgXCIBCB8QBCB+B8AzQDDBPBiiQQAigyARhHQANg3gCgkQArAqANBLQAPBOgcBHQgeBQhNArQhKAqhtAAIgrgBg");
	this.shape.setTransform(-0.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5EC1CE").s().p("AsiLCQiTgLhWiDQhSh8gCi6QgCi/BUi0QBcjHCriBQC5iLFiAwQB4AQCuArIELBCQCkAkBWgEQCcgHAshxQAdhNguguQgpgog/AIQAlgmBEgLQBJgLBOAdQB4AtA1B5QBCCVg5DoQgmCaiGBuQh8Bmi3AuQiyAsi8gUQjCgUiZhUQkFiMi0gDQiZgDhKBdQgdAkgLAxQgLAwAJAsQAIAvAaAcQAdAeAqACQBMACAygpQAwgoAQhHQArApAOBLQAPBOgbBHQgeBShNArQhKAqhuAAIgqgBg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AslLxQizgKhhiRQhZiGAEjQQADjOBcjCQBjjUCqh/QDGiVFpAuQB8APCyAsIEWBEQCQAgBJAAQCPAAAihaQAhhUhBgCQgVgBgbAIQgXAIgBAEIgwgCQgCgyAegnQAdglAzgVQAygUA9AAQBAgBA8AVQCNAyA/CKQBMCmg+D8QgqCqiQB3QiEBujEAwQi8AtjHgVQjLgWiehWQj7iHingDQiCgCg7BLQgzBAASBJQAIAdARAUQARATASAAQBWADAsg2QAnguABhOQBmBcAYBpQAXBhguBWQguBThiAvQhZArhvAAIgggBgAsFm9QisCAhcDIQhTCzACC/QABC7BSB8QBXCDCSAKQCKAKBZgzQBMgrAfhRQAbhHgPhPQgOhKgsgqQgQBIgwAnQgxAphMgCQgrgBgcgfQgagcgJguQgIgtALgvQALgxAcgkQBKhdCZACQC1AEEECMQCZBTDCAVQC9ATCxgsQC4gtB8hnQCGhuAmiaQA4johBiUQg2h6h4gsQhNgdhKALQhDAKgmAnQA/gIApAoQAvAtgeBNQgrBxicAIQhXAEikglIkLhCQitgrh4gQQhbgMhPAAQjoAAiJBog");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-116.7,-75.4,233.6,151);


(lib.Animar25 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9EDDF7").s().p("AqvIiQi/hfh+i0Qhzikgfi6Qggi4A6iIQA+iQCOglQCFghBhAiQBSAcAtBKQAnBBAABPQAABMgjAxQgEgkgXg0QgdhCgqgrQh7h9ixBxQhxBHgrCIQgrCGAvB/QAzCNCKBKQCgBVDygYQDFgUEeiBQAwgWC5haQCMhCBVgiQD6hkCfAdQDIAkCCDuQAHByguBVQgnBJhJArQhGAqhLACQhEACgsgfQA/gEAhgvQAng0gshHQg/hniaAUQhXAMiaBAIj6BxQijBJhzAlQivA4iLAAQiEAAhkgzg");
	this.shape.setTransform(-0.9,1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5EC1CE").s().p("AqyIjQjAhhh9i0Qhxikggi7Qgfi4A7iIQA/iQCOgkQCGghBgAiQBTAdAsBLQAnBBAABQQgCBMgjAwQgchDg3gfQg4gfhKAPQgqAJgWAjQgVAgAAAvQgBAtATAtQATAuAiAfQBaBNCWgdQCxghDoi3QCKhtC6g2QC2g0C3AMQC8ANCMBPQCXBWBBCTQBgDYgnCfQggCAhuBBQhHAqhLABQhEADgsggQBAgDAhgvQAmg1grhHQg+hnibATQhWALibBBIj7BvQijBJh0AlQitA3iKAAQiFAAhmg0g");
	this.shape_1.setTransform(0.2,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ArGJMQi9hgiHi/Qh9iygnjIQgnjMBBiTQBGihCugoQB/geBtAeQBoAeA8BKQA8BMgFBkQgGBrhUBtQgPhNgugmQg1guhUASQgSADgNAWQgNAWgDAfQgGBLA+A2QBHA/B/gYQClggDgixQCOhwDCg5QDAg4DCAMQDJAOCVBVQCjBcBHCiQBpDsguCwQgnCTiCBJQg3Agg+AKQg9AKg1gLQg3gLgiggQgkghgHgxIAvgKQABADAZAEQAbADAVgEQBAgOgvhNQgyhSiMAYQhIANiJA5IkFBzQioBKh4AlQirA1iMAAQiRAAhwg5gAuUpHQiOAkg/CQQg7CIAfC4QAfC7ByCkQB9C0C/BhQDPBpFThsQB0glCjhJID8hvQCbhBBWgLQCbgTA+BnQArBHgmA1QgiAvg/ADQAsAgBEgDQBKgBBIgqQBuhBAfiAQAnifhgjYQhAiTiXhWQiMhPi9gNQi2gMi3A0Qi7A2iIBtQjpC3ixAhQiWAdhZhNQgigfgUguQgSgtAAgtQABgvAUggQAXgjAqgJQBKgPA4AfQA2AfAcBDQAkgwABhMQAAhQgmhBQgthLhSgdQgxgRg7AAQg5AAhBAQg");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-121.4,-64.4,242.9,129.1);


(lib.Animar24 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9EDDF7").s().p("AjoHgQjBgeiXhcIhIgpIgWgUQJaDCEdkoQByh1AgiOQAdiGgyhtQAWhDgsgqQgnglg7AEQAogkBEgHQBKgHBLAgQB2A0AvB7QA6CZhFDiQguCaiMBnQiBBfi5AkQhhAThhAAQhVAAhWgOg");
	this.shape.setTransform(46.5,-17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5EC1CE").s().p("AtIKVQiSgShPiHQhLiAAIi7QAIi/BdivQBmjCCyh3QDAiCFeBCQB4AWCrA1IEHBQQCiAtBXAAQCbABAyhuQAihMgtgwQgSgUgdgKQgbgJgcACQAoglBEgHQBKgHBLAhQB2AzAvB8QA6CYhFDlQguCXiMBnQiBBgi5AkQi0Aji7geQjBgfiVhbQj8iZi0gNQiZgLhPBZQgeAigOAxQgNAvAGAtQAGAuAZAeQAaAgArAEQBMAGA0gnQAxglAUhGQAqArAKBMQAKBPgeBGQgjBPhPAnQhDAihbAAQghAAglgFg");
	this.shape_1.setTransform(0.1,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AtNLFQiygThaiWQhSiLAPjPQAOjLBmjAQBujOCwh3QBxhLCZgPQCCgNCoAeQB7AWCwA1IERBTQCPAnBJAEQCOAHAnhYQAlhShAgGQgWgBgbAHQgXAGgBAEIgwgFQABgyAgglQAegjA0gSQA0gSA9ADQA/ADA7AYQCKA5A4CNQBDCphKD5QgzCoiXBvQiKBnjGAlQi9AkjGggQjKggiZhfQj0iUingLQiBgJg/BHQg2A+AOBKQAGAeAQAUQAQAUASABQBWAHAvgzQAogsAHhOQBgBiATBqQASBhgzBTQgyBShkApQhPAiheAAQgeAAgfgEgArvnmQixB4hnDCQhdCvgIC/QgIC6BLCAQBQCICRASQCJARBcguQBOgnAjhQQAfhGgLhPQgKhLgpgsQgUBHgyAlQg0AmhMgGQgqgDgbghQgYgdgGgvQgGgtANguQANgxAfgiQBOhaCZALQC0AND9CZQCUBcDBAeQC7AeC0gjQC6gkCBhfQCMhnAuiYQBEjkg6iZQgvh7h1g0QhMgghKAHQhEAHgnAkQAcgCAbAKQAcAKATAUQAsAwgiBLQgxBvicgBQhWgBijgtIkHhQQirg0h3gWQh2gXhlAAQjEAAiABWg");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-118.3,-71.2,236.7,142.7);


(lib.Animar23 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9EDDF7").s().p("AjoHgQjBgeiXhcIhIgpIgWgUQJaDCEdkoQByh1AgiOQAdiGgyhtQAWhDgsgqQgnglg7AEQAogkBEgHQBKgHBLAgQB2A0AvB7QA6CZhFDiQguCaiMBnQiBBfi5AkQhhAThhAAQhVAAhWgOg");
	this.shape.setTransform(46.5,-17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5EC1CE").s().p("AtIKVQiSgShPiHQhLiAAIi7QAIi/BdivQBmjCCyh3QDAiCFeBCQB4AWCrA1IEHBQQCiAtBXAAQCbABAyhuQAihMgtgwQgSgUgdgKQgbgJgcACQAoglBEgHQBKgHBLAhQB2AzAvB8QA6CYhFDlQguCXiMBnQiBBgi5AkQi0Aji7geQjBgfiVhbQj8iZi0gNQiZgLhPBZQgeAigOAxQgNAvAGAtQAGAuAZAeQAaAgArAEQBMAGA0gnQAxglAUhGQAqArAKBMQAKBPgeBGQgjBPhPAnQhDAihbAAQghAAglgFg");
	this.shape_1.setTransform(0.1,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AtNLFQiygThaiWQhSiLAPjPQAOjLBmjAQBujOCwh3QBxhLCZgPQCCgNCoAeQB7AWCwA1IERBTQCPAnBJAEQCOAHAnhYQAlhShAgGQgWgBgbAHQgXAGgBAEIgwgFQABgyAgglQAegjA0gSQA0gSA9ADQA/ADA7AYQCKA5A4CNQBDCphKD5QgzCoiXBvQiKBnjGAlQi9AkjGggQjKggiZhfQj0iUingLQiBgJg/BHQg2A+AOBKQAGAeAQAUQAQAUASABQBWAHAvgzQAogsAHhOQBgBiATBqQASBhgzBTQgyBShkApQhPAiheAAQgeAAgfgEgArvnmQixB4hnDCQhdCvgIC/QgIC6BLCAQBQCICRASQCJARBcguQBOgnAjhQQAfhGgLhPQgKhLgpgsQgUBHgyAlQg0AmhMgGQgqgDgbghQgYgdgGgvQgGgtANguQANgxAfgiQBOhaCZALQC0AND9CZQCUBcDBAeQC7AeC0gjQC6gkCBhfQCMhnAuiYQBEjkg6iZQgvh7h1g0QhMgghKAHQhEAHgnAkQAcgCAbAKQAcAKATAUQAsAwgiBLQgxBvicgBQhWgBijgtIkHhQQirg0h3gWQh2gXhlAAQjEAAiABWg");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-118.3,-71.2,236.7,142.7);


(lib.Animar22 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AGKBVQgCgCgBgEIAAgRQgJAKgMAIQgNAHgPAAQgNAAgMgFQgNgFgJgJQgJgJgFgMQgFgMAAgOQAAgOAFgKQAFgMAJgJQAJgJAMgGQANgFAOAAQANAAAMAGQAMAFAJAJQAJAJAFAMQAFAKABAOIAAA6QgBAEgCACQgCADgEAAQgEAAgCgDgAFDgXQgJAEgHAHQgGAHgFAHQgDAJAAAKQAAAKADAJQAFAJAGAHQAHAHAJADQAJAEAKAAQAKAAAJgEQAIgDAHgHQAHgGAEgJQAEgJAAgLQAAgKgDgJQgEgHgHgHQgHgHgIgEQgKgDgKAAQgKAAgJADgAkCBVQgDgCAAgEIAAgRQgIAKgNAIQgNAHgPAAQgOAAgMgFQgLgFgKgJQgJgJgFgMQgFgMAAgOQAAgOAFgKQAFgMAJgJQAJgJAMgGQAMgFAPAAQANAAAMAGQALAFAKAJQAJAJAFAMQAGAKgBAOIAAA6QABAEgDACQgDADgDAAQgDAAgDgDgAlJgXQgJAEgHAHQgGAHgEAHQgEAJAAAKQAAAKAEAJQAEAJAGAHQAHAHAJADQAJAEAKAAQAKAAAJgEQAJgDAGgHQAHgGAEgJQAEgJAAgLQAAgKgDgJQgEgHgHgHQgGgHgKgEQgJgDgKAAQgKAAgJADgAC4BPQgNgIgEgOQgBgDABgEQACgDAEgBQADgBAEACQADACABADQAEAJAIAFQAJAEAKAAQAOAAAJgGQAJgGAAgLQAAgKgJgGQgJgGgOgCQgUgDgMgIQgNgIAAgNQABgKAEgHQAEgGAFgEQAHgEAIgCQAIgCAIAAQAGAAAHABQAGABAGADIAKAGQAEADACAFQACAEgBAEQgBAEgFABQgEABgCgBQgDgCgCgDQgCgGgHgCQgHgDgJAAIgKABIgIADQgEACgCADQgEAEAAAGQAAAEAEADQACACAEABIAIADIAKACQAKABAJAEQAJADAHAFQAGAFAEAHQAFAHAAAJQAAAJgFAHQgEAIgGAFQgHAFgJADQgJADgKAAQgRAAgOgIgABYBVQgCgDAAgDIAAhzQAAgDACgDQADgCAEAAQADAAADACQACADAAADIAAAOQAJgKAMgGQANgGAOAAQAFAAACACQADADAAADQAAAEgDACQgCADgFAAQgJAAgJAEQgIAEgHAGQgGAGgFAHQgEAIAAAKIAAA9QAAADgCADQgDACgDAAQgEAAgDgCgAhSBVQgDgDABgDIAAhPQAAgGgCgFQgCgFgFgEQgEgEgFgCQgEgCgGAAQgGAAgFACQgGACgDAEQgDAEgDAFQgCAFAAAGIAABPQAAADgDADQgCACgDAAQgEAAgDgCQgCgDAAgDIAAhPQgBgMgIgIQgIgIgLAAQgMAAgHAIQgJAIAAALIAABQQAAADgDADQgCACgDAAQgEAAgDgCQgCgDAAgDIAAhzQAAgDACgDQADgCAEAAQADAAACACQADADAAADIAAADQAEgFAIgDQAIgEAIAAQALAAAJAFQAKAFAGAJQAHgJAIgFQAKgFAMAAQAJAAAIADQAJAEAFAGQAHAGADAIQAEAJAAAJIAABPQAAADgCADQgDACgDAAQgEAAgDgCgAmVBVQgCgDgBgDIAAidQABgEACgCQACgDAEAAQAEAAACADQACACABAEIAACdQgBADgCADQgCACgEAAQgEAAgCgCgAgNBSQgMgFgKgJQgJgJgFgMQgFgMgBgOQABgOAFgKQAFgMAJgJQAJgJAMgFQAMgFANgBQANAAALAGQANAFAJAJQAJAJAFAMQAFAKAAAOQABANgGAMQgFAMgJAKQgJAJgMAFQgMAFgOAAQgMAAgLgFgAgHgXQgJAEgHAHQgGAHgEAHQgEAJAAAKQAAAKAEAJQAEAJAGAHQAHAHAJADQAHAEAKAAQAKAAAKgEQAIgDAHgHQAHgHAEgJQADgJAAgKQAAgKgDgJQgEgHgHgHQgHgHgIgEQgKgDgKAAQgKAAgHADg");
	this.shape.setTransform(-36.9,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#808080").s().p("ACKBVQgCgDAAgDIAAhzQAAgDACgCQADgDADAAQAEAAADADQACACAAADIAABzQAAADgCADQgDADgEgBQgDABgDgDgABtBVQgCgDAAgDIAAgNIgDACQgJAJgMAGQgMAEgNAAQgPAAgMgFQgMgFgJgJQgJgJgDgMQgFgMAAgNQAAgOAFgKQAEgMAJgKQAJgJAMgFQAMgGANAAQAPABANAHQANAHAJAKIAAg6QAAgEACgDQADgCADAAQAEAAACACQADADAAAEIAACcQAAADgDADQgCADgEgBQgDABgDgDgAAmgWQgJAEgHAGQgGAHgEAHQgEAJAAALQAAAJAEAKQAEAIAGAHQAHAHAJAEQAJADALAAQAKAAAJgDQAIgEAHgHQAHgHAEgIQAEgKAAgJQgBgMgEgIQgEgIgGgGQgHgHgJgDQgJgEgJAAQgLAAgJAEgAgiBVQgCgDAAgDIAAgDQgGAFgJADQgIAEgJgBQgLAAgJgDQgJgEgGgHQgHgGgEgJQgEgKAAgKIAAhKQAAgDADgCQACgDAEAAQADAAADADQACACAAADIAABKQAAAHADAFQACAGAFAFQAEAEAGADQAGACAHAAQAGAAAGgCIAKgHQAEgEADgGQADgGAAgFIAAhMQAAgDACgCQADgDAEAAQADAAADADQACACAAADIAABzQAAADgCADQgDADgDgBQgEABgDgDgAinBVQgDgDAAgDIAAhqIgSAAQgEAAgCgDQgDgCAAgEQAAgDADgCQACgDAEAAIASAAIAAghQAAgEADgDQACgCAEAAQADAAADACQACADAAAEIAAAhIASAAQAEAAACADQADACAAADQAAAEgCACQgDADgEAAIgSAAIAABqQAAADgCADQgDADgDgBQgEABgCgDgAkYBPQgNgHgEgOQgBgEABgEQACgCAEgBQADgCAEACQADACABADQAEAKAIAEQAJAFAKgBQANAAAKgFQAJgHAAgLQAAgJgJgHQgKgGgNgCQgUgDgMgHQgNgJAAgNQAAgKAEgHQAEgGAGgEQAHgEAIgCQAIgCAIAAQAGAAAHACQAGABAGACIAKAGQAEADACAGQACADgBAEQgBAEgFABQgEACgCgCQgDgCgCgDQgCgGgHgCQgIgCgIgBIgKABIgIADQgEACgDADQgDAEAAAGQAAAEADADQADACAEABIAIADIAKACQAKACAJADQAJADAHAFQAGAFAEAHQAEAHAAAJQAAAJgEAIQgEAHgGAFQgHAFgJAEQgJACgKAAQgSABgNgJgADOBTQgMgGgJgJQgJgJgFgLQgGgMAAgOQAAgOAGgKQAFgNAJgIQAJgKAMgFQAMgFAOgBQAOAAALAGQAMAFAKAJQAJAKAFAMQAFAKAAAOQAAANgFAMQgFAMgJAJQgJAJgMAFQgMAFgOAAQgOAAgMgEgADVgWQgJAEgHAGQgHAHgEAHQgDAJAAALQAAAJADAKQAEAIAHAHQAHAHAJAEQAJADAKAAQAKAAAJgDQAJgEAHgHQAHgHADgIQAEgKAAgJQAAgLgEgJQgDgHgHgHQgHgGgJgEQgJgEgKAAQgKAAgJAEgACIhDQgDgDAAgFQAAgEADgEQAEgEAEABQAFgBADAEQAEAEAAAEQAAAFgEADQgDAEgFgBQgEABgEgEg");
	this.shape_1.setTransform(35,0.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-77.8,-8.3,142.8,17.7);


(lib.Animar21 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDAEQgIgHAEgDQAHgHAHAJQADADgBADQAAAFgEADIgCAAQgDAAgDgGg");
	this.shape.setTransform(-10.9,-2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00B8C6").s().p("AgBAcQgMgBgHgJQgIgJABgKQABgLAJgIQAJgHAKAAQALACAIAIQAHAKAAAJQgCAMgIAHQgIAHgKAAIgBAAg");
	this.shape_1.setTransform(-11.6,-2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCACQgFgEACgCQAFgFAFAGQAFAEgGAGIgCAAQgCAAgCgFg");
	this.shape_2.setTransform(-26.6,-3.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00B8C6").s().p("AAAATQgIAAgFgHQgGgGABgGQAAgIAHgFQAGgGAGABQAIABAFAGQAGAGgBAGQAAAIgHAGQgFAEgHAAIAAAAg");
	this.shape_3.setTransform(-27.2,-2.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAvCJQgggCABgxIA/ADQgGAwgZAAIgBAAgAh9BsQgSgCgEgkIABgEIA2AIQgMAjgRAAIgEgBgAARBBIikgTQgagDgGgCQgFgCgEgHQgDgJACgKQAEgOASgIQAOgGASABQALgxAighQAmglA1gDQBJgEAtArQAqAngCA6QAkAQgFAdQgCAKgGAIQgGAHgFABg");
	this.shape_4.setTransform(-17.5,-2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00B8C6").s().p("AArCeQgUgCgNgTQgNgVABghIhGgHQgIAYgPAOQgPANgQAAQgQgBgLgPQgMgSgBgeQgVADgOgTQgPgTAJgYQAMgfAtgHQAUhBA2ghQAxgeA6AGQA7AFApAlQAtAoADA+QAcASADAeQAEAggcAXQhFgBgSgCQgEAjgRATQgOAQgTAAIgCAAg");
	this.shape_5.setTransform(-17.5,-2.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00B8C6").s().p("Aj9AIIgKhJIHzAvQAYASAEAVQADATgNAag");
	this.shape_6.setTransform(-11.7,7.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AglELIgXgFQgZgGgTgSQgWgUAEgUIAVi7QBmB6AzBAQASAXgBAUQgCAVgZAGQgRADgUAAQgSAAgYgDgAB0DmQgQgGgbgaIihi8QC0AfBbANQApAFAOATQANARgLAfQgYBCgwAfQgRALgRAAQgJAAgJgEgAiwDLQgqgagag4QgDgGgBgMQgBgQAHgFIB8hTQgTCfgEAZQgCAOgLAGQgFAEgGAAQgFAAgGgEgAkFA/QgHgkAGghQABgHAIgGQAKgHALACIB3ATIiEBLQgEACgDAAQgHAAgCgJgAC8AmQhbgRi0gZIDWiSQAigTASgCQAbgDATAcQAkAyABBNQAAAigSAPQgNAKgXAAQgLAAgNgCgAjmgbQgLgBgGgLQgGgJABgHQAGgoASgkQAIgOAJAMQAJAJBbB0gAgxjdQAEgWAbgPQAWgNAZACIAXACQAvAIAeATQAWAPgFAXQgFAVgZATQhGA0iHBhgAjJiQQgFgJAHgQQAEgMAFgGQArgzAxgOQAMgEAJALQAIAKgDAQQgEAcgjCyg");
	this.shape_7.setTransform(-10.5,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00B8C6").s().p("AhDEZQgVgFgVgQQgZgSgHgXQgWATgagQQgcgTgXggQgagkgCgfQgBgHACgJQgMgHgDgPQgNhKAagZQgHgPACgMQAIgrAUgmQAIgPAPgDQACgYAQgSQAwg3A3gPQAegJAPAcQAOgVAdgKQAYgJAWACQBBAFAtAdQAqAdgVAoQA1gSAgAvQAPAWALAgQALAhACAgQAFBMgzATQAlAbgTA0QgbBHg3AjQgtAcgsgfQACAoguAKQgTAEgVAAQggAAgngLg");
	this.shape_8.setTransform(-10.5,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00B8C6").s().p("AAkCKIAEgOIAzABIgFARgAALBQQgPgJgQAEQglAHgVgCQgWgEgNgRQgHAFgGAAQgOACgJgIQgKgJAAgNQAAgNAIgLQAJgLAMgBQAXgtAggPQAigOA0AMQAUAEAUgKQAVgIALgSIBMAIQgJA4g1AaQgWAIgYADQgXADgSgEIgkgJQgYgHgMABQgVgCgSATQAHAHAAAMIgBALQAKAGAPAAQAJgBAUgFIAggIQAhgHAhAQQAmAVAAAoIg8AEQgIgPgQgJgABciGIBBgHIADAYIhFACQACgKgBgJg");
	this.shape_9.setTransform(23.4,5.2);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.4,-29.1,78.9,58.5);


(lib.Animar20 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D0EFFC").s().p("AG2EBQg9hbiNgmQhygfh9ALQARg1gMg0QgIgugiglQgigkgwgSQgzgRg2AHQgPACgKADIAKAuQA6gIAlAgQAiAdAEAwQAFAxgcAsQgeAwg5ATQgmAMgpgGQgrgGgkgbQhVhBAAiUQAAhHBKg9QBOg+BvgLQB/gLB5BAQCQBMBxCoIBEBoQBDBqAWAxg");
	this.shape.setTransform(-0.4,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AGMEXQgIgMgNgOQhQhUiPgSQhigMiWATQAng7AIgfQARg2gfguIgLgPQAZBGgkBJQgmBQhVAcQgyARg1gIQg4gJgrgiQhphQAAirQAAhoBYhIQBYhGCFgHQCOgHCIBJQCcBUBxCqQB1CuAhBAQAvBfgpAPQgEACgFAAQgfAAg9g5gADoB3QCMAmA9BbIAaAWQgXgxhDhqIhEhoQhxioiPhMQh5hAh/ALQhvALhOA+QhLA9AABHQAACUBVBBQAkAbAsAGQApAGAmgMQA4gTAfgwQAbgsgEgwQgFgxghgdQglggg7AIIgKguQAKgDAQgCQA1gHAzARQAwASAiAkQAjAlAKAwQAJAygRA1QAfgDAhAAQBbAABVAXg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51.6,-33.5,103.3,67.2);


(lib.Animar19 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#71CEF3").s().p("AlyDAQhYh7Bih9QCBiqDmApQDRAtDMBEQkdAzj4CbQhhA8hsAAQgVAAgXgCg");
	this.shape.setTransform(0.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Al2DxQgLgCgJgEQgIgGgHgJQhviXB5icQCTjCEDAvIABAAQDVAuDQBEQAQAGAKAOQAJAOgBARQgBARgMANQgLANgRADQkUAvjwCYQhsBEh7AAQgYAAgZgDg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46.3,-24.4,92.8,48.9);


(lib.Animar18 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9EDDF7").s().p("AQiI+QDKgHg8iuQgVg+kfg+QkJg6l4giQl/gjkuAIQlRAJhrA9QhwBAiKAaQiGAah+gRQiCgRhWg5Qheg/gZhiQhEkPD5jnUAoBgHNAHrAHTQCrCjArC4QAlCbg6CfQgwCFhmBtQhZBghTAgQhMAdhBAAQhoAAhOhKg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-173.8,-64.8,347.8,129.8);


(lib.Animar17 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9EDDF7").s().p("AgpBMQgaggAyiVQBIBjgFA9QgEAqgeAHIgJACQgYAAgYgeg");
	this.shape.setTransform(0,2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag1CeQgvgiADhIQACgnANguQAOg4AhhWQA1A7AcArQA8BdgKBGQgJA6gzAVQgTAHgRAAQgbAAgagSgAgqBiQAdAjAcgHQAfgHAEgqQAFg/hJhhQgxCVAZAgg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.7,-17.6,19.7,35.4);


(lib.Animar16 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5EC1CE").s().p("AACCrQgagDgZgSQgZgSgGgUQgTg5BkjiQBfCOgNB4QgFAvgYAUQgRAOgXAAIgMgBg");
	this.shape.setTransform(0,2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A9E1F8").s().p("AAGDxQgqgCgmgaQgogagMgmQgTg3A8ieQAdhMAwhkQCcC9gSCpQgHBCglAgQgdAZgrAAIgIAAgAhRCGQAHAUAYASQAZASAaADQAfAFAVgSQAYgUAFgvQANh4heiOQhkDiASA5g");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.2,-24.1,26.5,48.4);


(lib.Animar15 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9EDDF7").s().p("AgPBoQgegHgEgqQgGg8BJhkQAxCVgZAgQgZAegXAAIgJgCg");
	this.shape.setTransform(0.1,2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgjCpQg0gVgIg6QgLhGA9hdQAcgrA1g7QAhBWAOA4QANAzABAiQAEBIgvAiQgaASgcAAQgQAAgTgHgAgxBNQAEAqAeAHQAcAHAdgjQAagggyiVQhIBiAFA+g");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.7,-17.6,19.6,35.4);


(lib.Animar14 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6CB5D3").s().p("AhAC/QgdgYgGg4QgJhXAmhhQAahFAshBQB5ESgXBEQgIAZgdAVQgfAWgfAEIgOABQgcAAgVgRg");
	this.shape.setTransform(0,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A9E1F8").s().p("AhnEFQgtgngIhPQgWjNC8jlQA7B5AjBdQBIC9gWBEQgPAugwAgQgvAfgzADIgJAAQgzAAgkgfg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D0EFFC").s().p("AhAC/QgdgYgGg4QgJhXAmhhQAahFAshBQB5ESgXBEQgIAZgdAVQgfAWgfAEIgOABQgcAAgVgRg");
	this.shape_2.setTransform(0,2.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D0EFFC").s().p("AhnEFQgtgngIhPQgWjNC8jlQA7B5AjBdQBIC9gWBEQgPAugwAgQgvAfgzADIgJAAQgzAAgkgfgAhGguQgmBhAJBWQAGA4AeAZQAZAVAmgFQAfgFAegVQAegWAIgYQAWhFh5kRQgsBBgaBFg");

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.9,-29.1,32,58.5);


(lib.Animar13 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6CB5D3").s().p("AB5BXQgWhKhFgHQhJgGg1AkQgyAkgVBGQgcgegOgwQgNgxAFgzQALh8BihAQBJgUBDAhQBAAeAvBDQAuBCATBQQAUBVgQBNQgzAQgyAXQAghMgWhGg");
	this.shape.setTransform(70.4,-37.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9EDDF7").s().p("AmwAeQAaj7EFgaQGmgmCeGjQhUgUhWgfQhWgfhdgcQhbgZgZgDQj+hCg0D2QgGAaAWATQAfAZAnAFQjLgPAVjOg");
	this.shape_1.setTransform(-45.6,36);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5EC1CE").s().p("Au5JvQh0g1gth8Qg3iaBJjjQAxiXCNhlQCDhdC6ghQC0gfC7AhQDAAiCTBeQD6CdCzAQQCZAMBQhWQAfgiAPgwQAOgugGguQgFgugYgeQgaghgqgEQhMgIg0AmQgzAkgVBGQgogsgJhMQgJhPAfhFQAkhPBPgmQBcgsCJATQCSAVBNCJQBJCBgLC6QgMC9hgCvQhqDAizB1QjDB+ldhIQh3gZiqg3IkGhUQiigwhVgCQicgEg0BuQgjBLAsAxQASAUAcAKQAbALAcgCQgoAkhEAFIgXABQg/AAhAgdg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AtOK6Qg/gEg7gZQiJg8g1iOQhBiqBPj3QA2inCYhtQCMhkDHgiQC+ghDGAkQDIAkCYBhQDxCYCnAOQCCALA/hGQA4g8gOhLQgFgdgQgVQgPgUgTgCQhVgIgwAyQgpArgIBOQhehjgShrQgPhiA0hSQAzhQBlgoQBqgqCBAQQCxAWBXCYQBPCMgRDPQgSDLhqC+QhxDMizB0QjPCGlmhHQh6gYivg4IkQhXQiOgrhJgFQiOgJgpBXQgmBRBBAHQAVADAbgHQAYgGAAgEIAwAGQgBAxghAlQgfAjg0ARQgrAOgxAAIgVgBgApPk5Qi6AhiDBdQiNBlgxCWQhJDkA4CZQAsB9B1A1QBLAiBKgGQBEgGApgjQgcABgbgKQgdgLgSgUQgrgxAjhKQAzhuCcAEQBWACCiAvIEGBVQCqA3B3AYQFdBIDCh+QC0h0BqjAQBgiwALi8QALi7hJiBQhNiJiRgUQiJgUhcAtQhPAlgkBPQggBGAJBPQAJBMApAsQAVhHAygkQA1glBLAHQArAFAaAgQAYAeAFAvQAFAtgOAuQgOAxgfAiQhQBViZgLQi0gQj6ieQiThejAgiQhfgRheAAQhZAAhZAQg");

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-118.8,-69.8,237.7,139.8);


(lib.Animar12 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6CB5D3").s().p("AChH5QjHgJifhLQiqhPjVg2QjQg1jSgTQjXgTiuAVQi5AXhtBCQiRBWijjHQhsiChVjJQAcgUAngYQDliNEMgwQENgvEKA2QJbB6FZAaQHgAkFOhrQC9g9DfgzQDpg1DPgcQDigfCYAGQCpAGA6A0QBUBKhCC4QgtB9hdCDQjwg3jaANQkaAQiJCEQhiBeidBOQihBQi3AqQimAmicAAIg5gBg");
	this.shape.setTransform(0.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACiIpQjQgKinhOQinhOjRg1QjMg0jMgSQjQgTinAUQiyAWhmA9QiwBqi8jfQhFhShBh4QgxhagkhcQDfi1FRhFQCbggCdgCQCcgBCKAcQJaB6FUAZQHXAjFFhoQC8g8DegzQDwg4DTgcQIDhFCAByQBqBehJDTQgzCUhyCYQjig6jeAIQkeAKiCB+QhmBiijBRQinBTi9AsQirAniiAAIg9gBgAvhDYQDSATDQA1QDVA2CqBPQCfBLDHAJQC2AIDFgtQC3gqChhQQCdhOBiheQCJiEEagQQDagNDwA3QBdiDAth9QBCi4hUhKQg6g0ipgGQiYgGjiAfQjPAcjpA1QjfAzi9A9QlOBrnggkQlZgapbh6QkKg2kNAvQkMAwjlCNQgnAYgcAUQBVDJBsCCQCjDHCRhWQBthCC5gXQBbgLBnAAQBdAABmAJg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-223.5,-55.4,447.3,110.9);


(lib.Animar11 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5EC1CE").s().p("AuRLhQhmhrgii4Qgji8AzjBQA4jSCTicQCeiqFkgOQB5gFC1ALICNALQBTAGAwACQCnAIBWgUQCYgiAXh3QAQhRg2gkQgXgQgegDQgcgDgbAIQAegtBBgVQBHgYBRAPQB+AXBJBuQBbCHgQDvQgKCghxCEQhpB4isBNQinBKi9ANQjDAOilg3QkZhdiyAcQiYAYg4BoQgWAogCAzQgCAwAQArQAQAsAfAXQAhAaAqgHQBLgLAqgxQAogvADhJQAyAhAbBHQAcBLgOBLQgQBVhDA4QhPBBiJAOQgRACgQAAQh+AAhghlg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Au5MKQhvh1ghjNQghjLA5jSQA9jfCRibQCpi1FsgSQB9gGC4AMIEcATQCVAGBHgMQCMgZAShfQAShYhBAJQgVADgYANQgWALAAAEIgvAGQgLgwAXgsQAVgpAvgdQAugdA8gLQA/gMA/ALQCTAYBWB9QBoCWgREDQgMCxh5COQhwCBi4BRQixBOjIANQjLAOirg5QkPhZilAaQiBAVgsBTQgnBIAeBFQANAcAUAQQAUAQASgDQBVgMAjg9QAdg0gLhNQBzBJArBjQAnBcgfBcQgeBbhYA/QhdBCiBAPQgZADgYAAQiRAAhohsgAk9nmQllAOieCqQiSCcg4DSQgzDBAjC8QAiC4BmBrQBsByCSgPQCKgOBOhBQBEg4AQhVQAOhLgchLQgbhHgyghQgEBJgoAvQgqAxhLALQgqAHghgaQgegXgRgsQgQgrACgwQACgzAWgoQA5hoCXgYQCzgcEYBdQClA3DDgOQC9gNCohKQCshNBoh4QBxiEALigQAPjvhaiHQhKhuh+gXQhRgPhHAYQhAAVgfAtQAbgIAdADQAeADAWAQQA2AkgQBRQgXB3iYAiQhVAUingIQgwgChUgGIiNgLQh+gIhgAAQgrAAgkACg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-111,-88.6,222.2,177.4);


(lib.Animar10 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6CB5D3").s().p("AngERQhag5guiOQgMgjALgsQAKguAfguQBFhpB9g5QCShBCsAdQDKAjDSCmICbB5IB4BjQikCKjLgTQjKgSgXiLQgGhKgng4Qgng2g+geQg8gehGAAQhIgBhCAgQgWAKgeAVIA3BdQCQhGAzB4QAiBQgrBKQgpBHhRAXQgdAIgcAAQg3AAg0ggg");
	this.shape.setTransform(-0.4,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AoqFRQiRgzhBjHQgihnBKhxQBLh0CSg8QCihDC9AhQDYAlDTCoICfB+QBZBJD9EdIjTAAQkDgPjDgtQjCgtghhYQABhHgag9Qgag6gvglQgxgmg+gFQhDgFhJAiIgHAEIAJAPQBMgdA+AgQA6AeAaBBQAbBEgTBHQgUBOhGA0QgwAkg7AJQgVAEgVAAQgqAAgogOgAnkkFQh9A5hFBpQgfAugKAuQgLAsAMAjQAuCOBaA5QBOAxBWgZQBRgXAphHQArhKgihQQgzh4iQBGIg3hdQAegVAWgKQBCggBIABQBGAAA8AeQA+AeAnA2QApA4AGBKQCwBeCkgvQCkgwgEgjIgegZIibh5QjSimjKgjQg1gJgyAAQhyAAhlAtg");
	this.shape_1.setTransform(9.7,0);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-67.8,-35.1,155.2,70.3);


(lib.Animar9 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6CB5D3").s().p("AF3N1QiZgziHiDQiCiAhTiqQhViwgMivQgTklhdibQhPiDh2gOQgtgFgwARQguAQghAfQgjAggKAlQgLAoAVAlQAnBBA9AUQA7AUBFgYQgMA6g4A0Qg6A2hLAPQhVARhNgqQhagwhBh6QhFiCBBiPQA+iHCdhkQCihnDGgZQDZgcDIBNQDWBUCUFFQAyBuA4CsIBWEDQA4CfAxBHQBZCAB3gXQBRgPAOhAQAFgbgIgdQgHgcgSgWQA0AMAtA0QAwA4ARBRQAaB+hLBtQhcCHjiBLQhJAYhLAAQhTAAhWgdg");
	this.shape.setTransform(0.3,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AFsOhQijg2iQiNQiJiGhXi1QhZi4gMi1QgSkahXiQQhDhvhegLQhSgJg0A3QgVAWgHAYQgHAZAJAQQArBKBFAJQA8AIBDgoQgZCHhMBNQhGBGhhAGQhfAGhcg6Qhfg9g/hyQhXidBIifQBDiTCyhrQCwhqDYgaQDngcDHBMQDkBZCZFLQA0BxA7CwIBZEOQAxCLAnA+QBMB5BfgSQBYgRggg5QgLgSgVgSQgTgQgEACIgXgqQApgcAxAFQAuAEAtAhQAsAgAhAzQAhA2AOA+QAhCShUB+QhkCYj2BSQhSAbhUAAQhZAAhbgfgAoRodQB2ANBPCEQBdCbATEkQAMCwBVCvQBTCrCCB/QCHCDCZAzQCkA4CZgzQDihLBciGQBLhugah9QgRhRgwg5Qgtg0g0gLQASAWAHAcQAIAdgFAaQgOBAhRAQQh3AXhZiBQgxhHg4ieIhWkEQg4irgyhvQiUlFjWhTQjIhNjZAbQjGAaiiBmQidBlg+CHQhBCPBFCBQBBB6BaAxQBNAqBVgRQBLgPA6g2QA4g0AMg7QhFAYg7gTQg9gVgnhBQgVglALgoQAKglAjggQAhgfAugQQAlgMAjAAIAVABg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-111.6,-95.9,223.4,192.1);


(lib.Animar8 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#71CEF3").s().p("ApuGXQhMgigehSQgkhkAwiVQAghiBchBQBWg9B5gWQB2gUB6AVQB+AWBfA+QCjBnB2AKQBkAHA0g3QAVgWAJggQAJgegDgeQgEgfgQgTQgRgWgcgCQgwgFgjAZQghAXgOAuQgbgdgFgxQgGg0AVgtQAYg0AzgZQA8gcBaAMQBfAOAyBZQAwBVgHB5QgIB7g/ByQhFB+h1BMQh/BTjlgvQhOgQhvgkIirg4Qhpgfg5gBQhlgCgiBHQgXAxAdAgQAZAbApgBQgaAXgsADIgPABQgqAAgpgTg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-74.4,-42.6,149,85.3);


(lib.Animar7 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9EDDF7").s().p("AopFaQhMgigehSQgkhkAwiTQAghkBchBQBWg9B5gWQB2gUB6AVQB8AWBhA+QCjBnB2AKQBkAJA0g5QAVgWAJggQAJgegDgeQgEgfgQgTQgRgWgbgCQgxgFgjAZQghAXgOAuQgbgegFgzQBPhBBKADQBAACAnAyQAmAxgHA/QgHBFg6AuQhsBVihgmQg4gNhJggIhtgyIhmgtQhAgYg5gFQicgOikB+Qj8DADCDsIgVASg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-67.5,-35.8,135.2,71.8);


(lib.Animar6 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#71CEF3").s().p("AFlJUQhYgUgugxQgngpgEg5QgDgxAYgvQAXgsAjgRQgEAvAXAiQAXAkAwANQAbAHAXgOQAWgMAOgcQAOgaACggQADgggLgcQgchJhhgbQhxggi+AlQhvAXh9gZQh5gXhng+Qhqg9g6hYQg/hfAGhoQAJicBGhRQA4hBBUgFQA2gDAsAVQAoATAQAfQgmgRghARQgmAUAEA2QAFBPBgAiQA2ATBtAJICyAKQB2AGBOANQDmAmBZB6QBTByATCMQASCBgmB3QglB1hLA9Qg7AyhEAAQgWAAgXgGg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-66.7,-60.2,133.5,120.5);


(lib.Animar5 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#71CEF3").s().p("AGYGWQgzgZgYgzQgVguAGgzQAFgyAbgdQAOAuAhAYQAiAYAxgFQAcgCARgWQAQgTAEgfQADgdgJgeQgJgggVgWQg0g4hkAHQh1AKikBoQhfA9h+AWQh6AWh2gVQh5gVhWg9QhchCgghiQgwiUAkhlQAehRBMgjQAwgWAxAEQAtADAaAYQgpgCgZAbQgdAgAXAxQAiBIBlgDQA6gBBogfICrg3QBvgkBOgQQDlgvB/BSQB1BMBFB+QA/BzAIB6QAHB6gwBUQgyBahfANQgcAEgYAAQg4AAgqgUg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-74.4,-42.6,149,85.3);


(lib.Animar4 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FD7A12").s().p("AgKAAQAKgTAFADQAFACABAOQAAAOgFADg");
	this.shape.setTransform(27.3,-10.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FD7A12").s().p("AAMAtIgIgjQgGgegHgEQgIgEAEgIQAEgHAJgDQAKgCAGBdIgDACQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAg");
	this.shape_1.setTransform(30.4,-4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FD7A12").s().p("AgNACQAFgYAJAAQAHAAAEAYIACAVQgBgFgagQg");
	this.shape_2.setTransform(24.2,-13.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DE5F16").s().p("AAIATQgngMgRgHIAJgJQAVAFALAGQABABABAAQAAAAAAAAQAAgBgCgBQgBgBgCAAIgUgSIAUgLQAbANAJAQQANATAKALIgpgLg");
	this.shape_3.setTransform(5.4,-2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C32915").s().p("AhEAOQgHgXAmgWQAlgXAVAOQAdARAUBGQiCAAgIghg");
	this.shape_4.setTransform(4.5,-2.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFAD4A").s().p("AgMAAQAMgaAMADQALAEgHATQgHASgPAFIgGABQgMAAAMgYg");
	this.shape_5.setTransform(12.7,-4.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFAD4A").s().p("AgNATQgVgCAXgTQAWgWAJAIQAKAHgOAOQgMAOgOAAIgDAAg");
	this.shape_6.setTransform(17.1,-9.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DE5F16").s().p("AgogMQAahGBJAPIARARQgggGgaAOQgaAPgLAeIgJAFQgbAWAHAkIgZAFQgKg3Argcg");
	this.shape_7.setTransform(15.3,-7.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFAD4A").s().p("AgLAAQALgZALAEQAKADgGASQgHARgOAEIgFABQgLAAALgWg");
	this.shape_8.setTransform(4.5,-6.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFAD4A").s().p("AgMASQgUgCAWgSQAUgUAJAHQAJAHgNANQgLANgNAAIgDAAg");
	this.shape_9.setTransform(8.5,-11.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DE5F16").s().p("AgngIQAMgiAggQQAggQAkAHIgEAYQgegGgZANQgYAOgKAcIgIAGQgZATAGAjIgXAEQgKgzApgbg");
	this.shape_10.setTransform(7.1,-9.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFAD4A").s().p("AgSATQgBgHAHgLQAMgbAMAEQALADgHATQgHASgQAFIgEABQgGAAgBgFg");
	this.shape_11.setTransform(-1.9,-6.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFAD4A").s().p("AgNATQgVgCAXgTQAWgWAJAIQAKAHgOAOQgMAOgNAAIgEAAg");
	this.shape_12.setTransform(2.2,-12.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DE5F16").s().p("AhIAbQAJgXAUgMQAOglAigRQAjgRAmAIIgFAZQgfgGgbAOQgaAPgLAeIgJAGQgbAVAHAlIgZAEQgFgZAJgXg");
	this.shape_13.setTransform(0.7,-10.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DE5F16").s().p("Ag4ATQAJglAhgWQARgxA4gCIABAZQglACgPAfIgDAKQgbARgIAdQgIAdANAeIgXAKQgRgkAJglg");
	this.shape_14.setTransform(13.3,6.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgLAMQgGgFAAgHQAAgGAGgGQAFgFAGAAQASAAAAARQAAAHgFAFQgFAGgIAAQgGAAgFgGg");
	this.shape_15.setTransform(20.4,12.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgZAaQgLgLAAgPQAAgOALgLQALgLAOAAQAPAAALALQALALAAAOQAAAPgLALQgLALgPAAQgOAAgLgLg");
	this.shape_16.setTransform(21.6,12.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgiAiQgOgOAAgUQAAgTAOgOQAPgPATAAQAUAAAPAPQAOAOAAATQAAAUgOAOQgPAPgUAAQgTAAgPgPg");
	this.shape_17.setTransform(22.2,12.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DE5F16").s().p("AgrAsQgTgTAAgZQAAgZATgSQASgTAZAAQAaAAASATQATASAAAZQAAAZgTATQgSATgaAAQgZAAgSgTg");
	this.shape_18.setTransform(22.2,12.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FD7A12").s().p("ABBCpIhghwQg8gJgphSQgMgZgVhIQgGgTAGgPQClgUBGAoQBLAoASBaQAOA/gQAwQgKAdgmAdQgZATgNAAQgGAAgEgEg");
	this.shape_19.setTransform(13.3,5.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFAD4A").s().p("ACnD1QgJAAgmgwIgpg0QhUgUgqhfQgNgdgQg2QgSg9gJgXQgZg+iwggQA3gTAgAHQAvALBYBgQBSgLBSAGQAqADBMAMIgTgqQgLgdAEgRQAXAHApAfQAiAaAVAWQAMANgDA6QgDAlgGAhQAJAUACATQAGBGgjA8QgmBAg9AAIgJgBg");
	this.shape_20.setTransform(2.7,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#DE5F16").s().p("ACaEVQgagRg1hIQhZgZgvhmQgOghgTg5QgVhEgJgXQgMgdhsgZQg7gNhDgGQgRgXAGgRQAKgbBegaQBLgWA8AdQAoAUBCBEQBUgKBlALQgHgxAagTQAZgSArAUQAxAYAmAiQAxAsAFApQAHAvgMBHQAZBBgiBcQgiBdg+AcQgdANgaAAQgfAAgbgTgAkWjpQCwAgAZA+QAJAXASA+QARA2ANAdQAnBfBWATIApA1QAnAvAIABQBEAFAohEQAjg8gFhHQgCgSgJgUQAGghACgmQADg6gMgNQgUgVgjgbQgpgfgWgGQgEARALAdIASApQhLgMgrgDQhUgGhPALQhZhggvgKQgIgCgLAAQgcAAgoANg");

	this.addChild(this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38.3,-29.6,76.7,59.3);


(lib.Animar3 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFAD4A").s().p("AgEALQgSgYAIgJQAJgIAMAPQAOAPgEARQgDAJgEAAQgGAAgIgPg");
	this.shape.setTransform(11.9,-4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DE5F16").s().p("AgEAeQgXgDgQABIAigZQAhgYAQgIIAEANQgPANgQADQgBAAgBABQAAAAAAAAQABAAABgBQACAAADAAIAagDQAAAKgDALQgZAMgQAAIgEAAg");
	this.shape_1.setTransform(11.6,12.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C32915").s().p("AhAAjQBPhmAfAOQAXAKgFArQgGAqgYAKQgKADgMAAQgcAAgwgUg");
	this.shape_2.setTransform(11.7,11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFAD4A").s().p("AAPAVQgGAAgJgIQgagQAGgLQAFgLAQAKQATAKACAQQABAKgHAAIgBAAg");
	this.shape_3.setTransform(2.2,-4.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFAD4A").s().p("AAHAZQgGgDgFgKQgTgYAJgJQAJgIAMAPQAOAOgFARQgBAIgFAAIgDAAg");
	this.shape_4.setTransform(7.1,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFAD4A").s().p("AAAAQQgSgIgDgQQgEgUAZAQQAbAOgFAMQgCAGgHAAQgGAAgHgEg");
	this.shape_5.setTransform(-2,1.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFAD4A").s().p("AgFAQQgPgPADgQQAEgVARAZQAUAYgJAJQgDADgEAAQgGAAgHgJg");
	this.shape_6.setTransform(3,5.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DE5F16").s().p("AAoBNQAJgfgMgcQgNgbgdgOIgFgJQgTgdglAEIgCgZQA4gGAYAuQAjARAPAjQAOAkgMAmg");
	this.shape_7.setTransform(11,-6.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DE5F16").s().p("AAoBNQAJgfgMgcQgNgbgdgOIgFgJQgTgcglADIgCgZQA3gGAZAuQAjARAOAjQAOAkgLAmg");
	this.shape_8.setTransform(5.5,-1.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DE5F16").s().p("AAoBNQAJgfgMgcQgNgbgdgOIgFgJQgTgdglAEIgCgZQA3gGAZAuQAjARAOAjQAOAkgLAmg");
	this.shape_9.setTransform(1.4,4.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DE5F16").s().p("AgLBYQAVgXADgeQADgggSgZIAAgKQgDgjgigOIAKgYQAxAWABA1QAXAegFAoQgGAmgcAcg");
	this.shape_10.setTransform(3.5,19);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgHAQQgHgEgCgHQgDgFAEgHQADgHAIgCQAFgDAHAEQAHAEACAHQAGAPgSAGIgFABQgDAAgEgCg");
	this.shape_11.setTransform(-10.4,19.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgPAhQgOgHgFgPQgFgNAHgOQAHgOAPgEQANgFAOAHQAOAHAFAPQAEANgHAOQgHANgPAFQgGACgFAAQgHAAgIgEg");
	this.shape_12.setTransform(-9.3,19.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVArQgSgJgGgTQgHgSAJgSQAJgSAUgHQASgGASAJQASAKAGATQAHARgKATQgJASgTAGQgIADgHAAQgKAAgLgGg");
	this.shape_13.setTransform(-8.8,18.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DE5F16").s().p("AgbA4QgYgMgIgZQgIgWAMgYQAMgXAZgIQAXgJAXAMQAXAMAIAZQAJAXgMAXQgMAYgZAIQgKADgJAAQgNAAgOgHg");
	this.shape_14.setTransform(-8.8,18.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FD7A12").s().p("Ai2DUQAFiGBlhZQCnibAUglQANgXANAEQAOAFAJAcQAYBLgCBFQgDCAhfBQQhHA8hkAAQgtAAgygLg");
	this.shape_15.setTransform(1.2,4.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFAD4A").s().p("AitEZQgYgFgDgFQgKgRAahWQAcheAmgpQAwgzCxikQgrhKADgYQAMADAVAQIAMAKQAcAYATgNQAOgJANgkQAJAKAFARQAGARgLAOQgFAGgSAOQAtCmgSBfQgXCDiKBDQhCAihYAAQggAAgZgFg");
	this.shape_16.setTransform(1.2,0.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DE5F16").s().p("Aj2EvQgVglAghrQAghpAtgxQAjgkCkicQgvhhAugnQAagGAXAJQARAHAYATIAEADQAMgVAdgfQATAIAFADQAhAUAPAtQAPAugjAnQAuC8gcBTQgyCViIBDQhLAlhlABIgFABQhkAAgYgpgABpiwQixClgwAyQgmAqgcBdQgaBWAKARQADAGAYAEQAZAFAgAAQBYAABCghQCKhEAXiDQAShfgtimQASgNAFgHQALgOgGgRQgFgRgJgKQgNAkgOAJQgTANgcgXIgMgKQgVgRgMgDQgDAYArBKg");
	this.shape_17.setTransform(1.4,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DE5F16").s().p("AgmAFIAYgKQACgBACgBQABgBAAAAQABAAgBAAQAAAAgCAAQgPAFgTgBIgFgNQASgDAqAAIApABQgNAIgSAPQgMAMgeAFQgJgGgHgKg");
	this.shape_18.setTransform(-19,14.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C32915").s().p("AgzAUQgegeANgWQARgdB8AkQgmA+ghAIIgHABQgVAAgZgag");
	this.shape_19.setTransform(-19.6,13.7);

	this.addChild(this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27,-34.3,54.1,68.8);


(lib.Animar1 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,94,141,0.298)").s().p("ApmEYQgOgtgNgxIgLguQgLg6gYgsQgig9gvAAQgvAAisgrIgRh5QAZgcBXgxQBYgwCOgcQCPgcDRgCQDRgCBzgEIFcAAQCvgFA9gFQA+gFBxARQBwASB3AXIgJCkIhxgFIgBAIQj9AYiXCKQh5D6jbBbIgRhcIgugDIgrCAQhPAShYAAQjYAAkGhsg");
	this.shape.setTransform(6,73.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhelnIC9APIhRLAQhgpngMhog");
	this.shape_1.setTransform(-99.1,-74.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AmxhbIDWgmIKNgRIsmElg");
	this.shape_2.setTransform(24.7,-92.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#71CEF3").s().p("AlnUhQhXAAhLjwQBFgpA1gnQAggXAFAJQAEAHgLAfQgRA0gCAJQgJAjAIAQQAOAaAoCggAEIUNIgvjyIgVgBIA1nPIDLLGgAoqOxQgMg6gYgsQgig+guAAIgWgCQAhg5CGkKQBOFTDBg6QBigdl0FUgAL+v7IpYAEIGWh4IgUhsIEUBEIEEhxIgBAIQgdAUgNAKQgdAYgGAQQgFANAMALQAIAIAaAOQAeARAQALIi6BhIlxHPgAsawnQjAgDhtgMQgCgTABgDQAHgpDlgnIg2ghQgXgQgVgVQgjgkAGgcIBBApQA4AiA+AaQDCBSE6AfQByALg7AKQg2AKijAFQhnADhqAAIh/gCg");
	this.shape_3.setTransform(-3.1,-7.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ap1CpQjQgmh7hGQgtgagXgYQgTgUAHgKQA+hUE2gxQEKgpGLgJQFhgIE2AVQE3AVBMAlIktBmIAgBZID8gfIgZARQonCBm+AYQhmAGhhAAQjxAAjBgkg");
	this.shape_4.setTransform(2.9,-138.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#005E8D").s().p("Ai0WfQiFichOAAQheAAhKimQgvhpgbiHQgHgigPgiQgYg6gXAAQg2AAhOgSIiDgjQhRsng1lZQgkjogYj5QgWjeAGgeQAKg9CXgkQibiREOheQDmhQHcgbQGpgZGTAaQGYAaBQA8IgXDWQgkAWgVAQIgCACQAoAPAnArQAmApAPAqQAOApgjMeQgfKxgQDiIh2gFIhtJRIkGlCIiYGMIkQgGIgli+Ii8I7QhOh8hFhQgAAT42QmIAIkKAqQk2Axg/BUQgVAdAlArQAVAZAdATIA2AhQjlAmgHApQgGAiBhNRQBeM3AVCFQCsArAwAAQAuAAAiA+QAYAsAMA6IAPBAQASBFAVA5QBDCyBKAAQBRAABwBwQBJBKBOBwIC6ozIAuADIAvDyIDHAEICqm6ID5EyIBhoUIBxAFQAOi7Afq9QAhsCgKgfQgPgrgngfQgQgNgvgbQgggRgCgOQgDgSAnggQANgKAdgUIARihQhNglk2gVQjhgPj4AAQheAAhjACg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D0EFFC").s().p("AjHVhQhwhwhRAAQhKAAhCiyQgVg5gThFIgPhAQgLg6gYgsQgjg+guAAQgwAAisgrQgViFhes3QhgtRAGgiQAHgpDkgmIg1ghQgdgTgWgZQglgrAWgdQA+hUE2gxQEKgqGJgIQFjgIE2AVQE3AVBMAlIgRChQgdAUgMAKQgnAgADASQACAOAfARQAwAbAQANQAmAfAPArQALAfgiMCQgfK9gNC7IhxgFIhiIUIj5kyIipG6IjIgEIgvjyIgugDIi6IzQhOhwhJhKg");
	this.shape_6.setTransform(0.1,-2.9);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-117.7,-164.3,235.5,328.7);


(lib.pez04_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Animar3("synched",0);
	this.instance.setTransform(60,-19.9,1,1,20);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:5,x:25,y:-24.8,alpha:1},5).to({rotation:10,x:10,y:-9.8},5).to({rotation:0,x:0,y:0},5).to({startPosition:0},10).to({rotation:10,x:10,y:-9.8},5).to({rotation:5,x:25,y:-24.8},5).to({rotation:20,x:60,y:-19.8,alpha:0},5).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(22.9,-61.5,74.3,83.2);


(lib.pez03_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Animar30("synched",0);
	this.instance.setTransform(0,40);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-14.8,y:-69.8},20,cjs.Ease.get(1)).to({rotation:-89.8,x:-9.8,y:40},50,cjs.Ease.get(-0.99)).to({_off:true},1).wait(119));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.9,8.2,36.1,63.7);


(lib.pez02_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Animar4("synched",0);
	this.instance.setTransform(-125,68.1,0.8,0.8,-59.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:45,guide:{path:[-124.8,68.1,5.5,-60.4,91.9,111.1]}},40,cjs.Ease.get(-0.99)).wait(180));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160.9,29.7,71.8,76.8);


(lib.pez01mov_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cuerpo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FD7A12").s().p("AASAbQApAGACAJQABAJgQAGgAgbgJQAdgNAOAQQAMALgQAQQgPgQgYgOgAg8gbQAfgkAQAJQAKAFgKATQgGALgJAKg");
	this.shape.setTransform(11.9,-15.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DE5F16").s().p("AA8AzQhnhkgsgKIAEgPQBiAdA8BfQARAZgFAAQgEAAgXgYg");
	this.shape_1.setTransform(10.8,-11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DE5F16").s().p("AgdAAQgHgWgHgNIAlAUQAlATANAKIgKAJQgTgIgLgMIgCgCIAUAcIgWAIQgYgVgFgQg");
	this.shape_2.setTransform(3.9,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C32915").s().p("AgkArQgYgXgDhIQB+AdABAgQABAZgqAOQgSAFgMAAQgSAAgLgKg");
	this.shape_3.setTransform(5,-0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFAD4A").s().p("AgGARQgIgCAEgOQAEgMAKgFQAOgFgJAVQgHASgGAAIgCgBg");
	this.shape_4.setTransform(14.4,-4.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFAD4A").s().p("AgMANQgHgFAIgJQAJgNALABQAPAAgPAOQgKANgIAAIgDgBg");
	this.shape_5.setTransform(11.6,-0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DE5F16").s().p("AgmA0IgNgLQAXADASgLQASgMAGgWIAGgEQASgRgHgaIASgEQAKAmgdAWQgOAtgqAAIgMgBg");
	this.shape_6.setTransform(12.8,-2.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFAD4A").s().p("AgGARQgIgCAEgOQAEgMAKgEQAOgFgIAUQgJARgGAAIgBAAg");
	this.shape_7.setTransform(11,-8.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFAD4A").s().p("AgNANQgHgFAJgKQAJgMALABQAPAAgPAOQgKANgIAAIgEgBg");
	this.shape_8.setTransform(8.2,-4.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DE5F16").s().p("AgmAzIgNgLQAXADASgLQASgLAGgWIAGgEQATgQgHgaIASgFQAKAngeAVQgPAtgnAAIgOgCg");
	this.shape_9.setTransform(9.4,-6.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFAD4A").s().p("AgIAGQgCgNAKgIQAJgKAAAWQAAAVgJACIAAAAQgGAAgCgOg");
	this.shape_10.setTransform(6.3,-12.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFAD4A").s().p("AgGASQgIgCAEgOQADgNAKgEQAOgGgIAVQgHASgGAAIgCAAg");
	this.shape_11.setTransform(5.3,-7.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DE5F16").s().p("AgjA8QAXgGAMgRQAMgTgEgWIAEgGQALgXgQgUIAPgMQAYAhgTAgQAFA0gyANg");
	this.shape_12.setTransform(6.1,-10.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DE5F16").s().p("AgtA2QAegDAKgYIADgIQAUgPAFgWQAGgXgLgXIASgIQANAbgFAeQgGAcgZASQgNAngrADg");
	this.shape_13.setTransform(-2.4,-9.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPAAQABgOAOAAQAGAAAEAEQAGAFAAAFQAAAGgGAFQgEAEgGAAQgOAAgBgPg");
	this.shape_14.setTransform(-10.3,-10.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgVAWQgKgJAAgNQAAgMAKgJQAJgKAMAAQANAAAJAKQAKAJAAAMQAAANgKAJQgJAKgNAAQgMAAgJgKg");
	this.shape_15.setTransform(-9.2,-10.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgdAdQgMgMAAgRQAAgQAMgNQANgMAQAAQARAAAMAMQANANAAAQQAAARgNAMQgMANgRAAQgQAAgNgNg");
	this.shape_16.setTransform(-8.7,-11.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DE5F16").s().p("AglAmQgQgQAAgWQAAgVAQgQQAQgQAVAAQAWAAAQAQQAQAQAAAVQAAAWgQAQQgQAQgWAAQgVAAgQgQg");
	this.shape_17.setTransform(-8.7,-11.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FD7A12").s().p("ABZBxQgFgbgQgcQgohGg+gNQhfgUgbg+QAohDCGAkQA7AQAmAkQAyAwgJBDQgKBJg6AxQAHgLgGgbg");
	this.shape_18.setTransform(-0.8,-2.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFAD4A").s().p("AA2BqQgKgZgNgJIgFgIQgagigigOQgOgGgrgKQghgFgTgPQgbgVgWgxQAng0BBgDQAZgBAhAFIA8AMIAPggQAGgOAGgFQANgKAwATQA/AZALB0IgegCQAGBrgpBDQgUAggiALQgJg2gKgZg");
	this.shape_19.setTransform(0.3,-4.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#DE5F16").s().p("AgSBOIgSgUQgWgTgogBQg1gCgqgvQghgngUg8QAyhIA6gSQAygPBcARQASgrAmgFQAdgEAyATQBvAsgDDGIgegCQgCCIhbBCIg0AlQhBiNgZgdg");
	this.shape_20.setTransform(0,-3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(16));

	// cola
	this.instance = new lib.Animar29("synched",0);
	this.instance.setTransform(9.8,15.3,1,1,0,0,0,14.9,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0.1,rotation:-74.8,x:4.9},5).to({regY:0,rotation:0,x:9.8},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.7,-27.9,49.6,57);


(lib.pez01_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.pez01mov_mc();
	this.instance.setTransform(0,-0.4,1,1,-29.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-21.4,guide:{path:[0,-0.4,-2.6,-11,-3.6,-20.8,-3.9,-24.7,-4,-28.5]},alpha:1},5,cjs.Ease.get(0.5)).to({scaleX:1,scaleY:1,rotation:0,guide:{path:[-4.1,-28.7,-4.4,-42.8,-0.9,-54.4,3.2,-67.7,11.8,-75.9,19.6,-83.5,29.6,-84.9,30.5,-85,31.3,-85]}},20).wait(5).to({scaleX:1,scaleY:1,rotation:-59.9,guide:{path:[31.5,-85,40.3,-85.7,48.3,-80.7,57.6,-75,62.9,-63.2,64.7,-59.3,65.9,-54.9]}},20,cjs.Ease.get(-0.99)).to({scaleX:1,scaleY:1,rotation:-134.8,guide:{path:[66,-54.9,68.8,-44.6,68.8,-31.7,68.7,-14.3,63.3,6.5]},alpha:0},10).wait(180));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.4,-37,71.4,74.1);


(lib.ola12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Animar25("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:20},40).to({x:0},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.4,-64.4,242.9,129.1);


(lib.ola11c_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Animar11("synched",0);
	this.instance.setTransform(0.2,0.1,1,1,30);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(78).to({startPosition:0,_off:false},0).to({scaleX:1,scaleY:1,rotation:-9.8,guide:{path:[0.1,0.1,-39.2,-62.2,-94.8,-19.8,-139.8,14,-183.1,6.7]},alpha:1},70,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-14.8,guide:{path:[-183.1,6.6,-193.7,4.8,-204.2,0.8]},alpha:0},10).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.ola11b_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Animar11("synched",0);
	this.instance.setTransform(0.2,0.1,1,1,30);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({startPosition:0,_off:false},0).to({scaleX:1,scaleY:1,rotation:-9.8,guide:{path:[0.1,0.1,-39.2,-62.2,-94.8,-19.8,-139.8,14,-183.1,6.7]},alpha:1},70,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-14.8,guide:{path:[-183.1,6.6,-193.7,4.8,-204.2,0.8]},alpha:0},10).to({_off:true},1).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.ola11a_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Animar11("synched",0);
	this.instance.setTransform(0.2,0.1,1,1,30);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-9.8,guide:{path:[0.1,0.1,-39.2,-62.2,-94.8,-19.8,-139.8,14,-183.1,6.7]},alpha:1},70,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-14.8,guide:{path:[-183.1,6.6,-193.7,4.8,-204.2,0.8]},alpha:0},10).to({_off:true},1).wait(79));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140.2,-132.1,281,264.6);


(lib.ola10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 3
	this.instance = new lib.Animar13("synched",0);
	this.instance.setTransform(39.7,-9.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8,rotation:-29.8,guide:{path:[39.6,-9,24.9,-6.4,14,4.6,-0.4,19.1,-0.4,39.4,-0.4,49.6,3.1,58.3]}},30).to({scaleX:0.7,scaleY:0.7,rotation:-59.8,guide:{path:[3.1,58.2,6.7,67.1,14,74.4,28.5,88.9,49,88.9,69.3,88.9,83.8,74.4,95.1,63.1,97.6,48.3]}},30).to({scaleX:1,scaleY:1,rotation:0,guide:{path:[97.5,48.4,98.3,44.1,98.3,39.4,98.3,19.1,83.8,4.6,69.3,-9.8,49,-9.8,45.9,-9.8,42.9,-9.4]}},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.1,-79.1,237.7,139.8);


(lib.ola09_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Animar20("synched",0);
	this.instance.setTransform(-14.9,38,1,1,-19.9,0,0,0,38);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:20,x:0,y:38.1},30,cjs.Ease.get(-0.99)).to({rotation:-19.8,x:-14.8,y:38},30,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88,-46.8,120.1,98.4);


(lib.ola07_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Animar9("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({skewX:30,skewY:20},30,cjs.Ease.get(0.5)).to({skewX:0,skewY:0},30,cjs.Ease.get(0.5)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.6,-95.9,223.4,192.1);


(lib.ola06fija_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Animar24("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:15},40).to({rotation:0},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.3,-71.2,236.7,142.7);


(lib.ola06c_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Animar23("synched",0);
	this.instance.setTransform(73.4,4.9,0.8,0.8,-44.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},50).to({scaleX:0.84,scaleY:0.84,rotation:-32.9,guide:{path:[73.4,4.8,58.9,1.1,45,-0.2]},alpha:1},10).to({scaleX:0.96,scaleY:0.96,rotation:2.8,guide:{path:[44.9,-0.2,-0.3,-4.6,-39.1,17.8]}},30).to({scaleX:1,scaleY:1,rotation:15,guide:{path:[-39.1,17.8,-51.3,25,-62.8,34.8]},alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.8,-102.4,214.6,214.6);


(lib.ola06b_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Animar23("synched",0);
	this.instance.setTransform(73.4,4.9,0.8,0.8,-44.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},25).to({scaleX:0.84,scaleY:0.84,rotation:-32.9,guide:{path:[73.4,4.8,58.9,1.1,45,-0.2]},alpha:1},10).to({scaleX:0.96,scaleY:0.96,rotation:2.8,guide:{path:[44.9,-0.2,-0.3,-4.6,-39.1,17.8]}},30).to({scaleX:1,scaleY:1,rotation:15,guide:{path:[-39.1,17.8,-51.3,25,-62.8,34.8]},alpha:0},10).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.8,-102.4,214.6,214.6);


(lib.ola06_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Animar23("synched",0);
	this.instance.setTransform(73.4,4.9,0.8,0.8,-44.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.84,scaleY:0.84,rotation:-32.9,guide:{path:[73.4,4.8,58.9,1.1,45,-0.2]},alpha:1},10).to({scaleX:0.96,scaleY:0.96,rotation:2.8,guide:{path:[44.9,-0.2,-0.3,-4.6,-39.1,17.8]}},30).to({scaleX:1,scaleY:1,rotation:15,guide:{path:[-39.1,17.8,-51.3,25,-62.8,34.8]},alpha:0},10).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.8,-102.4,214.6,214.6);


(lib.ola05c_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Animar28("synched",0);
	this.instance.setTransform(96.6,14.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},60).to({rotation:7.3,guide:{path:[96.5,14.2,87.2,3.7,77,-1.9]},alpha:1},10).to({rotation:30,guide:{path:[76.9,-2.1,65.5,-8.3,52.9,-8.6,43.3,-8.9,31.2,-5.7,25,-4.2,8.7,0.9,4.7,2.2,1.2,3.3]}},30).to({scaleX:0.9,scaleY:0.9,rotation:14.8,guide:{path:[0.9,3.5,-8.5,6.2,-15,7.6,-28.2,10.5,-39.7,9.9,-44.8,9.7,-49.8,8.7]}},20).to({scaleX:0.8,scaleY:0.8,rotation:0,guide:{path:[-49.8,8.7,-73.4,4.2,-95.8,-15.2]},alpha:0},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.2,-61.1,233.6,151);


(lib.ola05b_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Animar28("synched",0);
	this.instance.setTransform(96.6,14.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},30).to({rotation:7.3,guide:{path:[96.5,14.2,87.2,3.7,77,-1.9]},alpha:1},10).to({rotation:30,guide:{path:[76.9,-2.1,65.5,-8.3,52.9,-8.6,43.3,-8.9,31.2,-5.7,25,-4.2,8.7,0.9,4.7,2.2,1.2,3.3]}},30).to({scaleX:0.9,scaleY:0.9,rotation:14.8,guide:{path:[0.9,3.5,-8.5,6.2,-15,7.6,-28.2,10.5,-39.7,9.9,-44.8,9.7,-49.8,8.7]}},20).to({scaleX:0.8,scaleY:0.8,rotation:0,guide:{path:[-49.8,8.7,-73.4,4.2,-95.8,-15.2]},alpha:0},20).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.2,-61.1,233.6,151);


(lib.ola05_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Animar28("synched",0);
	this.instance.setTransform(96.6,14.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:7.3,guide:{path:[96.5,14.2,87.2,3.7,77,-1.9]},alpha:1},10).to({rotation:30,guide:{path:[76.9,-2.1,65.5,-8.3,52.9,-8.6,43.3,-8.9,31.2,-5.7,25,-4.2,8.7,0.9,4.7,2.2,1.2,3.3]}},30).to({scaleX:0.9,scaleY:0.9,rotation:14.8,guide:{path:[0.9,3.5,-8.5,6.2,-15,7.6,-28.2,10.5,-39.7,9.9,-44.8,9.7,-49.8,8.7]}},20).to({scaleX:0.8,scaleY:0.8,rotation:0,guide:{path:[-49.8,8.7,-73.4,4.2,-95.8,-15.2]},alpha:0},20).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.2,-61.1,233.6,151);


(lib.ola04_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Animar10("synched",0);
	this.instance.setTransform(112.7,34.6,1,1,45);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:7.5,guide:{path:[112.7,34.5,67.5,6.2,33.3,2.4]},alpha:1},25).to({rotation:-29.8,guide:{path:[33.1,2.4,-14.7,-2.8,-41.8,40.1]},alpha:0},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(39.9,-38.2,159.4,159.4);


(lib.ola03_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Animar6("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-9.8},20,cjs.Ease.get(-0.99)).to({y:0},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.7,-60.2,133.5,120.5);


(lib.ola02_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.instance = new lib.Animar7("single",0);
	this.instance.setTransform(-14.4,28.1,1,1,-19.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0,x:23.1,y:-3.8,alpha:1},20,cjs.Ease.get(1)).to({scaleX:0.8,scaleY:0.8,x:64.5,y:4.9,alpha:0},40,cjs.Ease.get(1)).wait(1));

	// Capa 1
	this.instance_1 = new lib.Animar8("single",0);
	this.instance_1.setTransform(-9.9,20,1,1,-19.9);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:0,x:30,y:-9.8,alpha:1},20,cjs.Ease.get(1)).to({scaleX:0.8,scaleY:0.8,x:70,y:0,alpha:0},40,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.5,-45.5,169.2,131.2);


(lib.ola01_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Animar5("synched",0);
	this.instance.setTransform(-29.9,10,1,1,-9.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0,x:10,alpha:1},15).to({rotation:10,x:50,alpha:0},15).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.7,-44.9,161.5,109.9);


(lib.mancha05_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Animar18("synched",0);
	this.instance.setTransform(0,0,1,1,-9.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:10},30,cjs.Ease.get(-0.99)).to({rotation:-9.8},30,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-182.4,-94,365,188.2);


(lib.mancha02_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Animar12("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-19.8},25,cjs.Ease.get(-0.99)).to({y:0},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-223.5,-55.4,447.3,110.9);


(lib.mancha01_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Animar19("synched",0);
	this.instance.setTransform(0.9,-4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:10.7},40,cjs.Ease.get(0.5)).to({startPosition:0},40).to({y:-4.1},40,cjs.Ease.get(0.5)).wait(42));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.4,-28.7,92.8,48.9);


(lib.logo_mc = function() {
	this.initialize();

	// imago
	this.instance = new lib.Animar21("synched",0);
	this.instance.setTransform(-3.9,-18.8);

	// lamorsa
	this.instance_1 = new lib.Animar22("synched",0);
	this.instance_1.setTransform(0.3,25.8);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-77.5,-48,142.8,83.1);


(lib.hielo_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Animar1("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-9.8},20,cjs.Ease.get(-0.99)).to({y:0},40,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.7,-164.3,235.5,328.7);


(lib.gota04_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Animar17("synched",0);
	this.instance.setTransform(0,-109.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:14.9},30,cjs.Ease.get(-0.99)).to({y:60,alpha:0},5).to({_off:true},1).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,-127.6,19.7,35.4);


(lib.gota03_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Animar16("synched",0);
	this.instance.setTransform(0,-119.9,0.6,0.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(80).to({startPosition:0,_off:false},0).to({scaleX:0.86,scaleY:0.86,y:-43},20,cjs.Ease.get(-0.99)).to({scaleX:1,scaleY:1,y:0,alpha:0},5).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.gota02_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Animar14("synched",0);
	this.instance.setTransform(0,-29.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.82,scaleY:0.82,y:34},20,cjs.Ease.get(-0.99)).to({scaleX:1,scaleY:1,y:70,alpha:0},5).to({_off:true},1).wait(44));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.9,-44.5,16,29.3);


(lib.gota01_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Animar15("synched",0);
	this.instance.setTransform(0,-89.9,0.7,0.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({startPosition:0,_off:false},0).to({scaleX:0.89,scaleY:0.89,y:-13.1},20,cjs.Ease.get(-0.99)).to({scaleX:1,scaleY:1,y:30,alpha:0},5).to({_off:true},1).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.bufanda2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Animar40("synched",0);
	this.instance.setTransform(-33.4,-15.8,1,1,0,0,0,-33.5,-15.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-15.7,rotation:10,y:-15.5},30,cjs.Ease.get(-0.99)).to({regY:-15.8,rotation:-9.8,y:-15.7},30,cjs.Ease.get(1)).to({rotation:0},29,cjs.Ease.get(-0.99)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.5,-15.9,67.3,32);


(lib.bufanda1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Animar39("synched",0);
	this.instance.setTransform(-40.8,9,1,1,0,0,0,-40.9,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-9.8,x:-35.7},25,cjs.Ease.get(1)).to({rotation:10},25,cjs.Ease.get(-0.99)).to({rotation:0,x:-40.7},24,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-16.4,79.1,33);


(lib.Animar2 = function() {
	this.initialize();

	// morsa
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAGQgHgGAHgHQAEgDAFAHQAHAFgDAEQgDADgEAAQgCAAgEgDg");
	this.shape.setTransform(-18.1,-34);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHAIQgOgNAGgGQAGgGAJAAQAGAAAGAGQAGAGAAAGQAAAJgGAGQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgGAAgJgKg");
	this.shape_1.setTransform(-15.4,-36.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgDAEQgFgEAFgEQACgCAEAFQAFADgCACQgDACgCAAQgBAAgDgCg");
	this.shape_2.setTransform(-46.5,-31.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEAGQgLgIAFgFQAEgFAGAAQAEAAAEAFQAFAEAAAEQAAAGgFAEQAAABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQgEAAgFgHg");
	this.shape_3.setTransform(-44.6,-33.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF88C").s().p("AgtgSQARgaAbgEQAZgEAWATQgBAkgYAaQgTAVgQAAQgXAAgIhEg");
	this.shape_4.setTransform(-11,-12.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF88C").s().p("AgZAZQgQgXgBglQAugXAnAqQgCAmgjAXQgRAAgOgUg");
	this.shape_5.setTransform(-47.3,-10.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C8B470").s().p("AhCgKQAFgTAUgOQASgMAXgFQAWgEASAFQAVAGAGAPQgUAzggAcQgXAWgVAAQgbAAgKhJg");
	this.shape_6.setTransform(-9.5,-13.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C8B470").s().p("AgBA4QgtgEgPhgQAdgTAmANQArAOANAlQgSA3gpAAIgEAAg");
	this.shape_7.setTransform(-46.8,-11.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CB8D70").s().p("Ah1hMQBwAJBHA9QAZASAPAXQANASgBAHQgCANh6AEQgRhhheg4g");
	this.shape_8.setTransform(26.7,50.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4F3D32").s().p("AhCAzQgQAAgkgLIhFgXQhdgbglAQIgagIQBBgiBBAVQAUAHAVAIIAhARQAlATApgDQAmgCBKgfQBZgiAhgHQBPgSBcARIgZAaQgxgmhcAdIiLAwQhKAcgeAAIgBAAg");
	this.shape_9.setTransform(-26,-17.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4F3D32").s().p("AgnBMQgUAAgOgpQgMgjABgYQAZgeAugNQAqgMA4AFQgZBWgpAmQgaAaggAAIAAAAg");
	this.shape_10.setTransform(-8.9,-14);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4F3D32").s().p("Ag+ARQgUgsAHgnQA7gGBdA1QgIAggRAXQgZAgggAAQgkAAgVgzg");
	this.shape_11.setTransform(-46.2,-11.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#009EB6").s().p("AhRgeQBkgwA/AYQgaA8gpAgQgbAXgcACIgBAAQgaAAgOhdg");
	this.shape_12.setTransform(-7.8,-12.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#32982A").s().p("AgoAgQgRgPgJgWIAbgpIBpAhQgjA3gfAEIgGABQgSAAgQgPg");
	this.shape_13.setTransform(-44.7,-9.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#009EB6").s().p("AhdA8QgTgGg4gVQgxgSgZgGQglgJgRAFIAAgfQATgNAgADQAWADApAOIBGAVQApAKAegBQAcgBAxgRIBdgjQA4gVAigEQAsgGAZASIAJAcQg6gGh9AvIhZAkQgrASgRACIgGAAQgTAAghgKg");
	this.shape_14.setTransform(-26.8,-14.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4F3D32").s().p("AhVBWQiAgEhsheIgaATIgLgXIAQgLQgQgVAQgKQAEgDAXATQAqAkANAIQBZBFBSgEQBZgEBkguQAxgVBZg2QBFgqASAYIgQAKIAyBBIhXgxQjgCIh9AAIgIAAg");
	this.shape_15.setTransform(-23.1,5.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00B8C6").s().p("AlHgSQCbg6CwgOICAgLQBFgHAkABQAwAAAWANQAZANgEAfQkLCTiCAKIgSABQh6AAh2h+g");
	this.shape_16.setTransform(-24.3,2.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EDA07D").s().p("AAkBOIjdAAQh3AAgCgIQgCgFAdgYQAggcAtgXQCAhJB5AFQB7AGBQA+QAcAUARAYQANATgBAHQgBAKhTAFQg3AEhIAAIg8gBg");
	this.shape_17.setTransform(7.7,50.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4F3D32").s().p("AjhBbQhngFgBgIQgCgSAWgOQAbgTA1ADQATgJAjgZIA9gtQBSg2BOALQCBAFBZBGQAeAXAUAcQAQAYAAAMQAAALhnAHQhZAHiJAAIgtAAQhmAAhPgEg");
	this.shape_18.setTransform(7.9,50.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EDA07D").s().p("Ag6DaQhjgVhfhMQhZhHgBhlQgBgmAMgmQALgfAOgUQAYghBBgKQA7gJA7APIApAMQARAFAOAAQAaABCDgVQCEgVAwAvQAlAjgEBYQgCAlgQAsQgRAwgcArQhDBlhXAOQg0AIgvAAQgtAAgogIg");
	this.shape_19.setTransform(-29.2,31.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CB8D70").s().p("AhZEkQgwgPhUgrQiahOghh2QgbhdA2hdQAphIB0glQBfgfCCgEQAtgBAkgEIAogGQARgBAWAHQAVAFA2ATQBgAjAnAwQAqAzAFBhQAEBmhKBJQg/A9iCAxQgSAGhMAhQgqATgZACIgQABQgeAAglgMg");
	this.shape_20.setTransform(-23.9,26.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4F3D32").s().p("AjOEQQiEg/g8hcQhIhtAzh6QAwhzCSguQA2gQBEgJQAlgEBCgEIBbgFQA5gBArAGQB1AQBIBQQApAtANA+QANA7gNA9QgPBAgmA1QgpA4g8AiQihBciNAAQhgAAhYgqg");
	this.shape_21.setTransform(-23.9,27.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#009EB6").s().p("AgPCEIhLjHQAFgdAOgeIAwgNQAUA+AdAsIAtA2QATAYABAUQABAagXAvIgEACg");
	this.shape_22.setTransform(4.4,-5.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CB8D70").s().p("AiHhQIAZgBQBPAfBAAhIBPAvQAlAcgUAJQgbANiPACQgShThMhPg");
	this.shape_23.setTransform(-46.6,50.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00B8C6").s().p("AgRC6QiggDiOhhQgkgggIgSQgGgOAIgWQARgoADgMQALgsgDg6QATgLAfADQAXADApANIBGAWQAoAKAegBQBagEDwhCQAUA9AfAtIAsA3QAUAYAAATQACAagXAuQi/BfihAAIgKAAg");
	this.shape_24.setTransform(-23.1,-1.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4F3D32").s().p("AlTB2QgtglgHgaQgFgTAQgcQAYgnAFgSQANgqgLg3QAqgVBfAbIBKAWQAnALAXAAQAXgBApgNIBQgcQB5goBVgBQAHA3AcApQALAOAPAQIAaAaQAcAeAEAaQAEAngfA9QjLBJivAAQixAAiWhJg");
	this.shape_25.setTransform(-23.6,-2.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CB8D70").s().p("AAVC/QArghAKgsQAKgogSglQgTglgngSQgogVgzAHQgEhZgehZQA6AnAbBCQAKAZAHAhQAwgFAjAWQAiAVALAlQAMAogQAvQgQAzgsAtg");
	this.shape_26.setTransform(1.9,-32.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#6B5244").s().p("AgaAbQgLgMAAgPQAAgOALgMQAMgLAOAAQAPAAAMALQALAMAAAOQAAAPgLAMQgMALgPAAQgOAAgMgLg");
	this.shape_27.setTransform(-44.5,-32.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#6B5244").s().p("AgkAlQgQgPAAgWQAAgVAQgPQAPgQAVAAQAVAAAQAQQAQAPAAAVQAAAWgQAPQgQAQgVAAQgVAAgPgQg");
	this.shape_28.setTransform(-14.9,-34.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#4F3D32").s().p("AgjAjQgOgPAAgUQAAgTAOgQQAQgOATAAQAUAAAPAOQAPAQAAATQAAAUgPAPQgPAPgUAAQgTAAgQgPg");
	this.shape_29.setTransform(-44.5,-32.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#4F3D32").s().p("AguAvQgUgUAAgbQAAgbAUgTQATgUAbAAQAbAAAUAUQAUATAAAbQAAAbgUAUQgUAUgbAAQgbAAgTgUg");
	this.shape_30.setTransform(-14.9,-34.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EDA07D").s().p("Ak6DxQhNhLAJhJQAFghAWgYQAXgZAkgLQADhpBOhIQBHhCBngMQBmgNBPAxQBYA3AVBxQAygFAkAXQAiAWALAnQAKArgSAwQgTA1gyAuQjaApixAAQh3AAhngSg");
	this.shape_31.setTransform(-24.6,-32.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#4F3D32").s().p("Al7C/QgagqAAgqQgBgoAVgfQAWgfAngLQALhsBThLQBMhEBrgOQBrgOBXAxQBgA2AgBzQA4AFAiAfQAiAdAGAtQAGAugXAzQgYA2g1AuIpiAkQg0gngcgug");
	this.shape_32.setTransform(-24.5,-32.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#009EB6").s().p("AAABIQgdABgVgWQgWgVABgeQgBgdAWgVQAVgWAdAAQAeAAAVAWQAWAVgBAdQABAegWAVQgVAVgeAAIAAAAg");
	this.shape_33.setTransform(7.8,-12);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#4F3D32").s().p("AhABBQgagbAAgmQAAgkAagbQAcgbAkAAQAmAAAaAbQAbAbAAAkQAAAmgbAbQgaAagmAAQgkAAgcgag");
	this.shape_34.setTransform(7.8,-12);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#AE7C64").s().p("AgCBCIhggdIgQgwIApg0QAYgFAkgCQgDAgAKAVQAIATAnAaQAYAQAyAbIh1gFg");
	this.shape_35.setTransform(21.9,40.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CB8D70").s().p("AhABCIhggdIgQgwIApg0QB3gZBgAsQBGAfAVAqQAJASgFAMQgFANgTABIgXAAQg6AAiGgHg");
	this.shape_36.setTransform(28.1,40.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#4F3D32").s().p("AgtBdQh0gEgUgVQgVgXAFguQAEgqATgXQARgVAygEQA2gFBLAQQBMAQA4A1QAVASANAVQAMATgBAJQgDAihYACIhwABIgpAAg");
	this.shape_37.setTransform(29.1,40.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EDA07D").s().p("AjNBBQhLgPAdgfQAOgPBKglQAtgYA3gNQA0gMAjABQAjACAVAJQATAIAeAZQALAJAeASIAyAdQA4AlgWALQgeAPiqAAIgKAAQimAAhTgRg");
	this.shape_38.setTransform(-59.1,50.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#4F3D32").s().p("AAABjQh1gBhPgLQhZgOAAgXQAAgYAzgiQAzglBGgZQBPgdBCABQBRAAAxApQAvAoBEArQAIAGABAFIgCAXQAAAThaALQhKAJhmAAIgSAAg");
	this.shape_39.setTransform(-58.6,50);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#4F3D32").s().p("Ag8JSQgpABgngGQguAMhbAFQhYAEhbgDQhigDg9gMQgjgHgQgHQgYgLAAgRQAAgjBMgvQBLgvBagUQhSh0A3iGQATgvAjgjQgkgnARgkIATgkQALgTAGgUQhHhJAIhQQADgkAVgbQAVgcAkgNQANhtBVhLQBPhFBsgPQBtgPBYAxQBiA2AjB1QBVAKAhBAQAgA/ghBOQAZAcAAAnQAAAqgdAdQAdArgZBAQApAxALBCQALA/gSBCQAzgCBBAPQBPAQA6A3QAYAWANAWQAMAVgBAMQgCAXgdAMQgYAIgtABIgUABQAnApAAAZQAAAHgFADIgIAFQgKADgMACQgYAFgyADQhSAGiNABIgtAAQj6AAgrgQg");
	this.shape_40.setTransform(-19.1,0);

	// bufanda2
	this.instance = new lib.bufanda2_mc();
	this.instance.setTransform(42.3,5.1);

	// bufanda1
	this.instance_1 = new lib.bufanda1_mc();
	this.instance_1.setTransform(48.7,-21.5);

	this.addChild(this.instance_1,this.instance,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-88.2,-61,176.5,122.2);


(lib.morsa_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Animar2("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-9.8},20,cjs.Ease.get(-0.99)).to({y:0},40,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.2,-61,176.5,122.2);


(lib.iceberg_mc = function() {
	this.initialize();

	// pez01
	this.instance = new lib.pez01_mc();
	this.instance.setTransform(97.6,18.8);

	// Capa 35 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxqiNQBrhtDXhpQGujSIbAWQIeAWEOG4QCGDZAYDWQoMDEmyAAQsqAAntqvg");
	mask.setTransform(-0.3,-46.7);

	// pez02
	this.instance_1 = new lib.pez02_mc();
	this.instance_1.setTransform(6,-71);

	this.instance_1.mask = mask;

	// ola05
	this.instance_2 = new lib.ola05_mc();
	this.instance_2.setTransform(-40.7,54.3);

	// ola06
	this.instance_3 = new lib.ola06_mc();
	this.instance_3.setTransform(94.9,31.3);

	// ola05b
	this.instance_4 = new lib.ola05b_mc();
	this.instance_4.setTransform(-20.7,34.3,1,1,10);

	// ola06b
	this.instance_5 = new lib.ola06b_mc();
	this.instance_5.setTransform(44.9,51.3,1.2,1.2,0,160,-19.9);

	// ola05c
	this.instance_6 = new lib.ola05c_mc();
	this.instance_6.setTransform(-10.7,54.3,1.1,1.1,0,170,-9.9);

	// ola06c
	this.instance_7 = new lib.ola06c_mc();
	this.instance_7.setTransform(84.9,31.3,1,1,10);

	// ola06fija
	this.instance_8 = new lib.ola06fija_mc();
	this.instance_8.setTransform(114.9,1.3);

	// pez03
	this.instance_9 = new lib.pez03_mc();
	this.instance_9.setTransform(197.1,-52.8);

	// ola07
	this.instance_10 = new lib.ola07_mc();
	this.instance_10.setTransform(-54.6,33.5);

	// mancha01
	this.instance_11 = new lib.mancha01_mc();
	this.instance_11.setTransform(-0.7,-7.7);

	// pez04
	this.instance_12 = new lib.pez04_mc();
	this.instance_12.setTransform(-177.7,-3.7);

	// ola09
	this.instance_13 = new lib.ola09_mc();
	this.instance_13.setTransform(-96.1,-68.2);

	// ola10
	this.instance_14 = new lib.ola10_mc();
	this.instance_14.setTransform(-116.8,-50.4);

	// ola12
	this.instance_15 = new lib.ola12_mc();
	this.instance_15.setTransform(-110.5,2.1);

	// macha02
	this.instance_16 = new lib.mancha02_mc();
	this.instance_16.setTransform(12.2,-27);

	// mancha03
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5EC1CE").s().p("AB/GLQicgHh9g7QiHg/iogrQimgqimgPQirgPiKARQiUAShXA1QhvBCh/ibQhThkhDicQAUgPAdgSQC1hvDUglQDTglDRAqQHfBhEQAUQF8AdEKhVQFLhqFXgvQGEg0BXBNQA/A5gzCPQgjBfhHBnQjAgrisAKQjfANhtBqQhNBKh8A9Qh/A/iPAhQiDAeh7AAIgtgBg");
	this.shape.setTransform(12.7,24.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACAG6QilgIiFg+QiEg9ilgqQihgpihgOQijgPiEAQQiMAQhQAwQiPBWiXizQhmh5hKi7QCziRELg4QD9g1DnAvQHbBgEOAUQFzAcEAhSQCVgwCvgoQC/gsCngXQGag3BnBcQBXBNg7CqQgpB2hcB6Qi0gtiuAFQjiAIhnBjQhRBOiBBAQiFBDiXAiQiHAfh/AAIgzgBgAsQCmQCmAPCmAqQCoArCHA/QB9A6CcAHQCQAHCbgkQCPghB/g/QB8g9BNhKQBthpDfgOQCsgKDAArQBHhmAjhgQAziOg/g5QhXhOmEA1QlXAulLBqQkKBVl8gcQkQgUnfhhQjRgrjTAmQjUAli1BvQgdASgUAPQBDCbBTBlQB/CbBvhDQBXg0CUgSQBJgJBTAAQBJAABQAHg");
	this.shape_1.setTransform(12.2,24.2);

	// ola04
	this.instance_17 = new lib.ola04_mc();
	this.instance_17.setTransform(-137.3,-86.9);

	// mancha04
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6CB5D3").s().p("ABVECQhngFhTgmQhbgrhygdQhxgdhxgKQh0gKhfALQhkANg9AkQhFAqhShlQg0hAgshjIAbgSQB5hKCNgZQCOgZCLAcQFDBCC4ANQECAUC0g6QDehHDnggQECgjA4AyQAoAjgiBcQgWA9gtBBQiEgbhzAGQiWAKhLBIQgzAxhSApQhVAqhgAWQhYAUhTAAIgcgBg");
	this.shape_2.setTransform(12.7,61);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABWEyQhwgGhbgqQi4hWjngVQhtgJhYAKQhdALg0AgQhmA9hqh9QhHhTg0iFQB9hlCzgnQCsglCiAgQFABBC1AOQD4ASCsg3QDmhJDngfQEZglBIBAQA+A3gpB3QgdBRhCBXQh6gfhzADQiYAEhFBCQg3A1hYAsQhbAthnAYQhcAWhXAAIgigBgAoPBnQBwALBxAcQByAeBbAqQBTAnBoAFQBfAEBogYQBfgWBVgqQBTgpAzgxQBLhICWgKQBzgFCDAaQAthBAXg9QAhhcgngjQg5gxkBAjQjoAfjdBHQi1A6kBgTQi5gOlDhCQiLgciNAZQiOAZh4BKIgcASQAsBkA1BAQBRBkBGgqQA8gkBlgMQAzgGA4AAQAyAAA2AEg");
	this.shape_3.setTransform(12.2,61.1);

	// ola11c
	this.instance_18 = new lib.ola11c_mc();
	this.instance_18.setTransform(150,-31.4);

	// ola11b
	this.instance_19 = new lib.ola11b_mc();
	this.instance_19.setTransform(130,-31.4);

	// ola11a
	this.instance_20 = new lib.ola11a_mc();
	this.instance_20.setTransform(99.5,-31.5);

	// gota01
	this.instance_21 = new lib.gota01_mc();
	this.instance_21.setTransform(-25.1,186.8);

	// gota02
	this.instance_22 = new lib.gota02_mc();
	this.instance_22.setTransform(-102.8,133.7);

	// gota03
	this.instance_23 = new lib.gota03_mc();
	this.instance_23.setTransform(35.6,201.7);

	// gota04
	this.instance_24 = new lib.gota04_mc();
	this.instance_24.setTransform(72.7,151.1);

	// ola03b
	this.instance_25 = new lib.ola03_mc();
	this.instance_25.setTransform(134.7,-55.3,1.25,1.25,-19.9);

	// morsa
	this.instance_26 = new lib.morsa_mc();
	this.instance_26.setTransform(41.6,-167);

	// hielo
	this.instance_27 = new lib.hielo_mc();
	this.instance_27.setTransform(10,28.5);

	// mancha05
	this.instance_28 = new lib.mancha05_mc();
	this.instance_28.setTransform(-2.2,57.4);

	// ola03
	this.instance_29 = new lib.ola03_mc();
	this.instance_29.setTransform(154.7,-95.3);

	// ola02
	this.instance_30 = new lib.ola02_mc();
	this.instance_30.setTransform(-148.3,-116);

	// ola01
	this.instance_31 = new lib.ola01_mc();
	this.instance_31.setTransform(-4.2,-121.2);

	this.addChild(this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.shape_3,this.shape_2,this.instance_17,this.shape_1,this.shape,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-242.9,-228,533.7,420.9);


(lib.icebergDesplazam_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// iceberg
	this.instance = new lib.iceberg_mc();
	this.instance.setTransform(-23.7,492.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1.1,y:0.3},94,cjs.Ease.get(0.5)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-266.7,264,533.7,429.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;