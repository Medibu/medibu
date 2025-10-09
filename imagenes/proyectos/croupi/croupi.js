(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.croupiv08 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// marco
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6EC6E4").ss(2,1,1).p("EA2sAY2MhtXAAAMAAAgxrMBtXAAAg");
	this.shape.setTransform(350,159);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(401));

	// nube01
	this.instance = new lib.Path();
	this.instance.setTransform(234.6,365.5,1,1,0,0,0,583.1,288.3);
	this.instance.shadow = new cjs.Shadow("rgba(31,20,15,0.247)",8,8,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:435.5},400,cjs.Ease.get(1)).wait(1));

	// nube02
	this.instance_1 = new lib.Path_1();
	this.instance_1.setTransform(884.6,245.5,1,1,0,0,0,583.1,288.3);
	this.instance_1.shadow = new cjs.Shadow("rgba(31,20,15,0.247)",8,8,43);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:395.5},400,cjs.Ease.get(1)).wait(1));

	// cantante04
	this.instance_2 = new lib.Animar1("synched",0);
	this.instance_2.setTransform(634.1,584.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:114.1},400,cjs.Ease.get(1)).wait(1));

	// cantante03
	this.instance_3 = new lib.Animar2("synched",0);
	this.instance_3.setTransform(90.9,622.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:112.2},400,cjs.Ease.get(1)).wait(1));

	// cantante02
	this.instance_4 = new lib.Animar3("synched",0);
	this.instance_4.setTransform(490.4,813);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120).to({startPosition:0,_off:false},0).to({y:53},280,cjs.Ease.get(1)).wait(1));

	// cantante01
	this.instance_5 = new lib.Animar4("synched",0);
	this.instance_5.setTransform(257,874.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(50).to({startPosition:0,_off:false},0).to({y:154.1},350,cjs.Ease.get(1)).wait(1));

	// logo
	this.instance_6 = new lib.Croupi();
	this.instance_6.setTransform(350,131.6,0.5,0.5);
	this.instance_6.alpha = 0;
	this.instance_6.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,200);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5).to({_off:false},0).to({scaleX:1,scaleY:1,x:350.1,y:163,alpha:1},25,cjs.Ease.get(1)).wait(60).to({alpha:0},10,cjs.Ease.get(-0.99)).to({_off:true},1).wait(300));

	// nube03
	this.instance_7 = new lib.Path_5();
	this.instance_7.setTransform(367.6,296.8,1,1,0,0,0,492.7,243.6);
	this.instance_7.shadow = new cjs.Shadow("rgba(31,20,15,0.247)",7,7,36);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:346.8},400,cjs.Ease.get(1)).wait(1));

	// nube04
	this.instance_8 = new lib.Path_1_1();
	this.instance_8.setTransform(352.6,190.8,1,1,0,0,0,478.9,236.8);
	this.instance_8.shadow = new cjs.Shadow("rgba(31,20,15,0.247)",7,7,35);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:310.8},400,cjs.Ease.get(1)).wait(1));

	// nube05
	this.instance_9 = new lib.Path_3();
	this.instance_9.setTransform(12.2,44.4,1,1,0,0,0,138.3,95.5);
	this.instance_9.shadow = new cjs.Shadow("rgba(31,20,15,0.247)",5,5,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:-7.6,y:224.4},400,cjs.Ease.get(1)).wait(1));

	// nube06
	this.instance_10 = new lib.Animar5("synched",0);
	this.instance_10.setTransform(686.1,24.1,1,1,0,0,0,560,-272);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:204.1},400,cjs.Ease.get(1)).wait(1));

	// fondo
	this.instance_11 = new lib.Path_4();
	this.instance_11.setTransform(350,159,0.55,0.55,0,0,0,640,360);
	this.instance_11.alpha = 0.5;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#8ED2EA","#5EBFE1"],[0,1],-60.1,-4.6,0,-60.1,-4.6,1031.2).s().p("Ehj+A4PMAAAhwdMDH9AAAMAAABwdg");
	this.shape_1.setTransform(350,159,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_11}]}).wait(401));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-204.2,-38.9,1637.3,854.1);


// symbols:
(lib.Croupi = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#5BCAF1"],[0,1],0,-75.2,0,23.1).s().p("AjKDMIgBgCQAMgGAIgHQAQgOAAgcQAAgWgHgMQgFgIgDAAQgBAAAAAAQgBAAAAAAQAAABAAAAQAAABgBABQgLgwgdgEQgFgBgKADIgCgQQgKhEABgvIANgLQARgSAEgPQABgGgCgBQgCAAgFAEQAZghgMgbIAAgBQAQgSAWgMQArgYBFgDQBNgEAuAaQALAGAIAHIgCAIQAAAJACAEQABABAAABQAAAAABAAQAAABAAAAQABAAAAgBQggA+AMBLQgDgOgEgDQgEgDgDAOQgDALAEATIgGAFIgoAcQgQAOgBAJQgDAVAhAtQAkAuAbADQASADAfggIAGADQAaANAHgGQAGgFgSgNQArAeA1AFIgBAFQgFAeg4AcQhBAihEgNQgrgGgignQgYgZgbgxQgFgIgFADQgFAEADAJQAaBMgMASQgQAVgvACIgDAAQgyAAgRgkgAhOiNQgeABgOAPQgMAMAFAtQAFAtAOAEQAXAHAigoQAjgogNgZQgMgYggAAIgDAAg");
	this.shape.setTransform(-38.2,-9.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#5BCAF1"],[0,1],0,-73,0,25.3).s().p("AA3DfIgRgBQgQgBgPgDQgNgDgPgFIAAAAQg2gRgrgqQhThSARhzQARhxBYgqQBJgjBPAXQBEAUAQAjIAAAAQAMAcgYAhIgCACQgKAOgNAKQgNAJgIABQgGAAgOgFIgJgEIgrgQQg8gTgkAfQgtAoAQBDQARBEA5AOQAwAMA0gZQAjgRATgFQAJgCAFAAQAeAEALAwIAAADQAFAUgDARQgDAQgHAHIgCACIgBABIgFADIgFADQgXANgqAFIgZADIgIAAIgFAAIgGAAg");
	this.shape_1.setTransform(-75.4,-11.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#5BCAF1"],[0,1],-0.4,-58.5,-0.4,39.8).s().p("AgNBDQgngCgRgcIABgDQAQgegHgcQADAGADgBQAEgBACgLQACgIgDgLIAAAAQAggXAlAKQAoAJAIAjQAHAfgXAcQgXAbgmAAIgFAAg");
	this.shape_2.setTransform(87.1,-26.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#5BCAF1"],[0,1],0,-81.8,0,16.5).s().p("AhNByQgjgvAghoQAchcAUgNQARgLApAEQA0AGAPAhQAMAcgmBTQglBRABABQAFAEAUAAQAVgBAFAEQAJAGgBAJQgCAKgMAJQgbAUgmAFIgRACQgtAAgaglg");
	this.shape_3.setTransform(79.7,-2.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFFFFF","#5BCAF1"],[0,1],0,-70.3,0,28).s().p("AgrDpQgSgBgUgJIgIgEQgKgGgJgHQgbgYgUgrIgEgHQgJgXgGgcQgZhiAbhTIABgCIAAAAIAAgBIAjg7QAZgZAkgSQAPgHAQgGQAvgQA4ACIALAAIACABIACAAIAGAAQAUADAQAGQARAHAOAKQALAJAHAKIAFAIIACACIAEAHQAEAJADAKIACAHQAGAfgPAeIgCACQgSAghBAZQhEAXgBADQgDAGASAmQAWAtACAjQACAdgOAYIgBAAQgHANgKAKIgNALIgJAGQgIAEgHADQgQAGgRAAIgEAAgAAeimQgsAEgPARQgLAMAKAiQAJAiAOABQAVADAjgTQAqgYgFggQgFgegpAAIgKAAg");
	this.shape_4.setTransform(62.6,-14.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFFFF","#5BCAF1"],[0,1],0,-68.3,0,30).s().p("AgPDcIgBAAQg1gGgrgeIgBAAIgHgGIgDgCQgvglgVg9IgGgUIgCgJIgDgPIgDgKQgLhJAfg9IACgBIAJgRIAEgFIAEgGIAMgPQAUgWAagPQAlgWAsgFIAcgBIABAAIABAAIABAAIABAAIABAAIAYACQAlAFAhAUQAhATAYAdIAPAVIABACIAFAIQA+Btg9ByIgJAPIgBACIgHAKIgFAHIgCACQgOASgSAPIgCABQgNAKgPAIQgrAWgwAAIgRAAgAAAhbQgcACgQAXQgQAVAAAdQgBAbAQAUQARAWAcAAQAhABASgYQAPgVgCgcQgCgegRgVQgSgWgaAAIgBABg");
	this.shape_5.setTransform(-11.3,-16.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFFFFF","#5BCAF1"],[0,1],-0.5,-75.6,-0.5,22.7).s().p("AiGC3QguglgZgyIABgBQAQgWAFgVQAFgSgHABQgFABgKAQIAIgPQA9hyg+htIgFgIQAGAIAFgGQAEgFgFgMQAXgbAkABQAvAAATApQAHAQgFAyIgKBfQgIB7BPAQQBMAQAYhYQAXhRgqhWQgOgbAGgYQAFgWATgKQASgLAWAHQAYAIASAcIAGAKQgJAXAFALQADALAJgYQgbBTAYBjQAHAbAJAXQgFgHgDAFQgFAHAIAYQgLAbgRAWQg6BJhcAGIgQAAQhMAAhBg1g");
	this.shape_6.setTransform(25.9,-9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4C4C4C").s().p("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");

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-96.2,-40.4,192.5,80.9);


(lib.Path_1 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ega/Am7QyXg7rPiSQhoBNh6ApQh/AqiGAAQj3AAjOiHQjHiEhjjaIgEAAQkBAAi2i2Qi2i1ABkBQgBkBC2i2QC2i1EBAAQAfAAAfADQgHg+ABgwQgBjOBQi7QBNi1CLiKQCMiLC1hNQC7hPDOAAQEDAADiB8QBJhpBxg7QBzg+CEAAQAbAAAUACQANkEBtjqQBqjkC2iuQC3ivDohfQDxhjEHAAQEvAAEQCCQEFB+C7DgQBcg+BpgiQBsgiBzAAQCOAACEA1QCBAzBmBfQCZi8DZhpQDhhtD7AAQBDAAA5AHQCameFrkAQFxkFHIAAQGsAAFlDqQFaDjCsF5QDShqDrAAQDHAAC2BNQCwBLCICIQCICHBKCwQBOC3AADHQAADFhMC0QhICuiFCHQCUEqA1GQQAiECAAGYQAAKn2VFPUgTpAEmgifAAAQ1cAAuFgtg");
	this.shape.setTransform(583.1,288.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(34.6,34.6,1097,507.4);


(lib.Path = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg+pAjCQ2VlPAAqnQAAmYAikCQA1mQCUkqQiEiHhKiuQhKi0AAjFQAAjHBMi3QBLiwCIiHQCIiICwhLQC2hNDIAAQDqAADRBqQCsl5FcjjQFkjqGsAAQHHAAFzEFQFqEACaGeQA4gHBEAAQD8AADgBtQDZBpCZC8QBmhfCBgzQCEg1COAAQBzAABsAiQBqAiBbA+QC7jgEGh+QEOiCEwAAQEGAADxBjQDpBfC2CvQC3CuBqDkQBtDqAMEEQAUgCAbAAQCEAAB0A+QBwA7BKBpQBtg8B5ggQB9ggCBAAQDOAAC7BPQC1BNCNCLQCLCKBNC1QBPC7AADOQAAAwgGA+QAfgDAfAAQEBAAC1C1QC3C2AAEBQAAEBi3C1Qi1C2kBAAIgFAAQhjDajHCEQjNCHj3AAQiHAAh9gqQh7gphohNQrQCSyXA7QuEAt1cAAUgigAAAgTogEmg");
	this.shape.setTransform(583,288.3,0.8,0.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(144.3,85.4,877.6,405.9);


(lib.Path_4 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#AEDFF0","#5EBFE1"],[0,1],249.4,-167.6,0,249.4,-167.6,1031.2).s().p("Ehj+A4PMAAAhwdMDH9AAAMAAABwdg");
	this.shape.setTransform(640,360);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.Path_3 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAtLiQkYgMjhhiQkDhwiKjSQjHhRhGhiQg9hXAhhtQAahYBjiFQB/igBChYQBNhmCMg3QCHg0CYALQCdAJB9BMQCHBSBDCQQCDgiB5AUQBxATBXBAQBWA9ArBcQAtBegHBrQCogDBwBZQBmBTAMB1QANB3hYBLQhjBTi9gSQhLBbjUA4Qi5AxjRAAQgmAAgmgBg");
	this.shape.setTransform(138.3,95.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(21.6,21.5,233.5,147.9);


(lib.Path_2 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApXMlQj4hChXhqQjcAVh0hhQhnhWAPiLQAOiJB3hhQCDhpDEAEQgJh8A0huQAzhrBkhIQBmhJCEgWQCNgYCZAoQBNioCehhQCShXC4gMQCxgMCeA9QCjA+BaB4QBNBmCTC7QB0CcAfBmQAnCAhIBlQhSByjoBeQihD2kuCDQkHBylGANQgtACgrAAQj0AAjYg5g");
	this.shape.setTransform(157.6,107.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(21.5,21.5,272.4,172.6);


(lib.Path_1_1 = function() {
	this.initialize();

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A2Lf+QvEgwpQh4QhVA/hkAhQhoAjhuAAQjLAAiohvQikhthRiyIgFAAQjSAAiViVQiViWAAjTQAAjSCViWQCViVDSAAQAYAAAcADQgFgrAAgwQAAioBBiaQA/iVByhxQB0hzCUg/QCahBCoAAQDWAAC5BmQA9hVBcgxQBfgzBsAAQAUAAASACQALjWBajBQBWi7CWiPQCWiPDAhOQDFhRDYAAQD5AADeBrQDXBnCaC4QBMg0BVgbQBagcBeAAQB1AABtArQBoArBUBNQB+iaCyhWQC5haDPAAQA0AAAxAGQB/lUEpjSQExjXF2AAQFfAAEkDAQEeC7CNE2QCrhXDBAAQCkAACWA/QCRA9BvBwQBwBvA9CRQBACWAACkQgBChg9CUQg8CPhtBvQB6D0ArFIQAcDVAAFPQAAItyWETQwHDy8WAAQxmAArlglg");
	this.shape_1.setTransform(478.9,236.8,0.8,0.8);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(118.5,70.1,720.8,333.4);


(lib.Path_5 = function() {
	this.initialize();

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Eg07AdmQy4kbAAo9QAAlaAdjaQAtlRB9j7Qhxhzg8iSQhAiZAAimQAAioBBiaQA/iVByhzQB0hzCUg/QCahBCpAAQDGAACwBaQCSk/EljAQEujGFpAAQGBAAE4DdQEyDYCDFeQA0gGA0AAQDVAAC+BcQC4BZCCCfQBVhQBsgrQBwgtB4AAQBhAABcAdQBZAcBNA1QCei+DdhqQDlhuEAAAQDeAADLBUQDFBQCbCUQCZCTBZDAQBdDHAKDbIAogCQBwAABhA0QBfAzA/BYQC/hpDaAAQCuAACeBDQCZBBB2B2QB3B0BACZQBDCeAACuQAAAxgFAsQAdgDAYAAQDZAACZCaQCaCZAADZQAADZiaCaQiZCZjZAAIgEAAQhUC4ioBwQiuByjRAAQhxAAhqgkQhogihXhBQphB7vgAyQr7AmyGAAQ9JAAwlj5g");
	this.shape_1.setTransform(492.7,243.6,0.8,0.8);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(122,72.1,741.5,343);


(lib.Path_12 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(83,124,138,0)","#537C8A"],[0,1],0,-119.7,0,74.6).s().p("AFJW7QAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBMgKSgtxQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAMAKRAtxQAAABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAg");
	this.shape.setTransform(33.2,146.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,66.3,293.5);


(lib.Path_11 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(83,124,138,0)","#537C8A"],[0,1],0,-116.4,0,77.9).s().p("AgtZMMABXgyXQAAgBAAAAQAAgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABMgBXAyXQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgCgCg");
	this.shape.setTransform(4.6,161.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,9.3,323);


(lib.Path_10 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(83,124,138,0)","#537C8A"],[0,1],0,-134.8,0,59.5).s().p("Al6WWQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAgBABAAMAL0gsoQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAABAAQAAABAAAAMgL1AsoIgCABg");
	this.shape.setTransform(38.1,143);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,76.3,286.2);


(lib.Path_14 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(83,124,138,0)","#537C8A"],[0,1],0,-143.5,0,89.4).s().p("AGLbfQgBAAAAgBQgBAAAAAAQAAAAAAAAQgBgBAAAAMgMUg24QAAAAAAgBQAAAAAAgBQABAAAAAAQAAAAABgBQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAMAMVA24QAAABAAAAQAAABAAAAQAAAAgBAAQAAABgBAAg");
	this.shape.setTransform(39.8,175.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,79.5,351.8);


(lib.Path_4_1 = function() {
	this.initialize();

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(83,124,138,0)","#537C8A"],[0,1],0,-139.5,0,93.4).s().p("Ag2eNMABpg8ZQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAABMgBnA8YQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBAAAAgBg");
	this.shape_1.setTransform(5.5,193.6);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11,387.1);


(lib.Path_3_1 = function() {
	this.initialize();

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(83,124,138,0)","#537C8A"],[0,1],0,-161.6,0,71.4).s().p("AnGayQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAMAOLg1gIABgBIACAAQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABMgOLA1fQAAAAAAABQgBAAAAAAQAAAAAAAAQgBAAAAAAg");
	this.shape_1.setTransform(45.7,171.5);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,91.4,343);


(lib.Path_40 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(39,91,109,0)","#275B6D"],[0,1],0,-143.5,0,89.5).s().p("AGLbfQgBAAAAgBQgBAAAAAAQAAAAAAAAQAAgBAAAAMgMVg24QAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAABQAAAAABAAQAAAAAAABQABAAAAAAMAMUA24IAAACIgCABg");
	this.shape.setTransform(39.7,175.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,79.5,351.8);


(lib.Path_39 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(39,91,109,0)","#275B6D"],[0,1],0,-139.5,0,93.4).s().p("Ag2eMMABog8YQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABMgBoA8ZQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAgBg");
	this.shape.setTransform(5.5,193.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11.1,387.1);


(lib.Path_38 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(39,91,109,0)","#275B6D"],[0,1],0,-161.6,0,71.4).s().p("AnGayQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBMAOLg1fQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAIABABIAAABMgOLA1gQAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAg");
	this.shape.setTransform(45.7,171.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0.1,91.4,343);


(lib.Path_33 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8D6C2").s().p("AieATQgVg+gGgnQAMgjAbgVQAngTA4gKIANAAQCIACA8BXIAcCVQg7gYhtAbQh1AegBBAQgihMgYhJg");
	this.shape.setTransform(18.7,16.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,37.3,33.7);


(lib.Path_30 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8D6C2").s().p("AAFAdQhMgchSAKQgLg+ACgnQAuhFBnAMQBbAKA/A7QAOAOAIAKQgEBRgZB7QgdhVhkgkg");
	this.shape.setTransform(16.4,15);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,32.8,30.1);


(lib.Path_28 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#275B6D").s().p("AgWCIQhtgNhTgkQhZgmgfgzQgDgvAcgwQAbgtAYAAQAdAkA+AgQBQAoBXAFQB5AFBDgGQBdgKA0giQAFAUgEAzQgFA3AFAgQg1AohmANQgvAGgxAAQg0AAg1gHg");
	this.shape.setTransform(33.6,14.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,67.2,28.7);


(lib.Path_25 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#275B6D").s().p("AgNBxQgUgIgVgPQg6gqABgnQACgoAtgsQAqgqAdAAQAcAAArBMQAqBIgKAUQgIAQgggYIgegbIAWApQATArgOAOQgOAOgrghIgmgkIASAYQAQAZgBAIQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAgBAAQgCAAgMgFg");
	this.shape.setTransform(11.2,11.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22.5,23.7);


(lib.Path_12_1 = function() {
	this.initialize();

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#275B6D").s().p("AAAEzQg7hBgwhlQgqhZAFgWQADgPAWgNQAfgPASgNQAigbALgHQASgMAHAXQAOA1AHASQAQAtARAXQgFhIgCgoQgChLAKhPQAXikA7gbQgUA2AQCPQASCpgHBBQgKBcgaBgIggB0QgkgRgogsg");
	this.shape_1.setTransform(14.6,36.8);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29.3,73.7);


(lib.Path_9 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8D6C2").s().p("AgDA0Qg3gEgLgkQgLgeAdgTQANgJAigEQAjgFAYAJQANAFAEASQAEAQgIARQgQArgvAAIgIgBg");
	this.shape.setTransform(7.3,5.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14.8,10.7);


(lib.Path_8 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8D6C2").s().p("AgFA5QgogDgNgyQgNgwAagLQAJgDAeAIQAdAHAUAMQAgASgUAjQgTAjglAAIgEAAg");
	this.shape.setTransform(6.3,5.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,12.7,11.5);


(lib.Path_2_1 = function() {
	this.initialize();

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8D6C2").s().p("AgYAFQgRgHAGgHQAGgGAgAEQAhADABAHQABAEgOAFQgMAFgLAAQgJAAgQgIg");
	this.shape_1.setTransform(3.8,1.4);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7.6,2.8);


(lib.Path_46 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(39,91,109,0)","#275B6D"],[0,1],0,-143.5,0,89.5).s().p("AGKbfQAAAAAAgBQgBAAAAAAQAAAAAAAAQgBgBAAAAMgMUg24QAAAAABAAQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAAAABQABAAAAAAQAAAAABABQAAAAAAAAMAMTA24QABAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABg");
	this.shape.setTransform(39.7,175.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,79.4,351.8);


(lib.Path_45 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(39,91,109,0)","#275B6D"],[0,1],0,-139.5,0,93.4).s().p("Ag2eMMABog8YQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABMgBoA8ZQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAgBg");
	this.shape.setTransform(5.5,193.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11.1,387.1);


(lib.Path_44 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(39,91,109,0)","#275B6D"],[0,1],0,-161.6,0,71.4).s().p("AnGayQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBMAOLg1fQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAIABABIAAABMgOLA1gQAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAg");
	this.shape.setTransform(45.7,171.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0.1,91.4,343);


(lib.Path_38_1 = function() {
	this.initialize();

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8D6C2").s().p("AgfD0QgGgBgOgmQgUg4gPgkQg7iThDhPQBchrCUgVQA8gIArALQAsALAGAZQAHAfAZA/QgoABg3AYQg0AWgSAWQgTAXgDA9QgDA9APAnQANAkgOALQgNAKgRgVQAHAbgNAVQgIARgPAAIgJgCg");
	this.shape_1.setTransform(21.3,24.6);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,42.7,49.2);


(lib.Path_37 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8D6C2").s().p("AgRA+QhhhegHgmQgHgngDg7QAugNAqAAQApAAAIAKQAqApAkgJQgmAOghAaQglAggJAjQgLAkA6BLQA8BLA6AXIgEAFQg2gdhbhbg");
	this.shape.setTransform(13.3,18.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,26.6,36.5);


(lib.Path_32 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8D6C2").s().p("AhNgNQAZgWAtgKQAngKAtAEQgMAGgQAbQgSAdgMAqQgZgIhHg6g");
	this.shape.setTransform(7.8,5.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15.6,10.7);


(lib.Path_31 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8D6C2").s().p("Ag5AkQgTgQARgWQAOgVAYgHQBIgYANAUQALAQgVAYQgRAUglAMQgQAGgOAAQgRAAgKgIg");
	this.shape.setTransform(6.8,4.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,13.7,9);


(lib.Path_25_1 = function() {
	this.initialize();

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#275B6D").s().p("Ag3BbQhUh6AWhSQARg9A0gJQAUgDAzArQBIA6AWANQgDAjgLAgQAWAkgCA8QgCBAgdAdQhXgUg8hJg");
	this.shape_1.setTransform(12.3,18.4);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,24.7,36.9);


(lib.Path_24 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8D6C2").s().p("AgJAXQhdhTgig3QAIAEAJAJQApApA5AoQBPA2BPAcQgNAbgIAcQgjgJhahUg");
	this.shape.setTransform(13.7,11.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,27.5,23.4);


(lib.Path_18 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CA7154").s().p("AAMBMQgqgGgcgtQgZgmgDgyIADgBQAugMAWABQAgACAbAbQAJAKAMAbQAMAbAKAlQgaAWgiAAIgPgBg");
	this.shape.setTransform(8.8,7.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,17.5,15.4);


(lib.Path_17 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CA7154").s().p("AAFgQQg5gvhLgBQBBgZBSAHQBJAGAUAUQAXAXgMAnQgMAkglArQgSg9g0gog");
	this.shape.setTransform(12.8,8.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,25.7,17.1);


(lib.Path_10_1 = function() {
	this.initialize();

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#275B6D").s().p("AirApQgRgCgNghQgNggAZgOQAVgLCcgEQCQgEBDAFQAJA2gBA1QgdAFg6AAQhmAAi9gRg");
	this.shape_1.setTransform(20.7,5.8);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,41.4,11.7);


(lib.Path_9_1 = function() {
	this.initialize();

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#275B6D").s().p("AhpFsQgYgCgZgJQgaiLgRjoQgTkRAcgrIAHgKQAzgWA6ACQAsACAfAOQA/AbBGBxQBPCAgLBqQgOCLhIBfQhQBph5AAIgWgBg");
	this.shape_1.setTransform(20.6,36.5);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,41.3,73.1);


(lib.Path_1_2 = function() {
	this.initialize();

	// Capa 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#275B6D").s().p("AgkBhQgKgfAgghQg/AHgQglQgRgjA4gVQgqADgTgNQASgaANgNQATgRARgCQAwgHA1A8QA2A7AJA/QgUAbgfAUQgeASgYADIgLABQgbAAgJgag");
	this.shape_2.setTransform(11.7,12.3);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,23.3,24.7);


(lib.Animar5 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Path_2();
	this.instance.setTransform(556.9,-280.5,0.5,0.5,0,0,0,157.6,107.7);
	this.instance.shadow = new cjs.Shadow("rgba(31,20,15,0.247)",5,5,26);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(488.8,-323.6,136.2,86.3);


(lib.Animar4 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#F8D6C2"],[0,1],-32.1,-20.1,13.2,7).s().p("AgYBrQgOgeAdgkQg+AOgUgkQgVghA3gbQhIANgHgjQgGgiA0gSQA9gVA3ANQBHAQAgBEQAYAzgsA4QgmAvguAMQgJACgIAAQgWAAgKgWg");
	this.shape.setTransform(23.3,-4.9,0.5,0.5);

	this.instance = new lib.Path_1_2();
	this.instance.setTransform(22.4,-3.3,0.5,0.5,0,0,0,11.7,12.4);
	this.instance.alpha = 0.199;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#275B6D").ss(1.8,1,1).p("AgiAAQAAgNAKgLQALgKANAAQAOAAALAKQAKALAAANQAAAOgKALQgLAKgOAAQgNAAgLgKQgKgLAAgOg");
	this.shape_1.setTransform(-24.7,-20.3,0.5,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#275B6D").ss(1.8,1,1).p("AgbAAQAAgLAIgIQAJgIAKAAQALAAAJAIQAIAIAAALQAAALgIAIQgJAJgLAAQgKAAgJgJQgIgIAAgLg");
	this.shape_2.setTransform(-24.7,-16,0.5,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#F8D6C2"],[0,1],-27.5,-14.9,19.5,11.8).s().p("AAGCMQhSgBgjgzQguhCAfg9QAZgzA9giQAxgcAdAaQAdAag7AvQA+gZAVAlQAVAlg2AlQA2AAAUAdQAUAdgiAWQgpAbhFAAIgCAAg");
	this.shape_3.setTransform(-11.1,-3,0.5,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#275B6D").ss(1,1,1).p("EgAdgneQB6DpgDD7QgBDShcEIQg1CVidFWQibFQhEDFQhtE7gZEdQgeFaBXFdQDNM7N3O1");
	this.shape_4.setTransform(34.8,136.3,0.5,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFFFF","#275B6D"],[0,1],-14.6,-3.2,113.6,42.6).s().p("AiDB/Qg3hTAaiGQALg1ATgkQATgkASADQAZADAIAlQAFAXgBA5QgBA/ADAWQAFApAUAMQgXhdAig1QAfgzA/ARQBCARAUA5QAWA+grBkQguBqhUAFIgKAAQhKAAg6hWg");
	this.shape_5.setTransform(-16.4,7,0.5,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#5D8491","#275B6D"],[0,1],-67.2,-58.7,13.5,12.8).s().p("AggFsQhHgFg6g+Qg2g6gghcQgfhaAAhbQAAhiAjhGQA9h+BxgcQBOgUBDAdQA/AaBGBxQBQCBgLBpQgPCLhIBfQhQBph5AAIgWgBg");
	this.shape_6.setTransform(-18.9,3.8,0.5,0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#275B6D").s().p("AAEA3QiVgHgqgHQgSgCgNghQgNggAZgOQAYgNC7gDQC6gEALAJQAOAMAGAgQAHAkgVASQgOALhWAAQgrAAg9gDg");
	this.shape_7.setTransform(-5.1,4.2,0.5,0.5);

	this.instance_1 = new lib.Path_9_1();
	this.instance_1.setTransform(-14.7,5,0.5,0.5,0,0,0,20.6,36.5);
	this.instance_1.alpha = 0.199;

	this.instance_2 = new lib.Path_10_1();
	this.instance_2.setTransform(-5.4,5.3,0.5,0.5,0,0,0,20.7,5.8);
	this.instance_2.alpha = 0.199;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#275B6D").s().p("AgEBKQgFgogTg3QglhOgKgbQgQgsA/ARQAhAKAfAvQAdAsAKA1QAKA7gRApQgUAvgzAKQADgqgEgqg");
	this.shape_8.setTransform(2.1,-3.1,0.5,0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#275B6D").s().p("AhnCKQgKgWAVgMQAbgQA2hKQA7hSAAgpQAAgsAagCQAagDAHAhQAFAYhMB7QhKB/gbAGIgLABQgTAAgIgSg");
	this.shape_9.setTransform(-3.2,32.4,0.5,0.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#275B6D").s().p("ABrCbQgMhXh5hjQh5hWgFgPQgKgkBIAOQAgAGBNBDQBOBCAfAsQAfAwgGAtQgEAlgaAAQgHAAgJgEg");
	this.shape_10.setTransform(-14,33.6,0.5,0.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#275B6D").s().p("Aj3AsQgKgOgFgUQgGgXALgQQAJgPD4gFQD3gFAJALQALAOgCAYQgCAbgYALQgZAMjiAFIh0ABQhxAAgGgHg");
	this.shape_11.setTransform(-9.9,25.2,0.5,0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#5D8491","#275B6D"],[0,1],-34.6,0,34.8,0).s().p("AknHnQgfgmgNgyQgLguAHgkQAIgpAqg2QAVgcBKhQQCaimA9iGQAlhOAKiTQAFhDAEgXQAIgoASgPQAHAGAwAZQA1AfAmAmQB5B6gWDAQgbDqh4DJQh8DRiXArQgoAMgjAAQhXAAg3hGg");
	this.shape_12.setTransform(-25.7,53.3,0.5,0.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#5D8491","#275B6D"],[0,1],198.1,-40.6,-17.5,6).s().p("AgsI2QiCgQhDhdQg2hLAPg8QAIgjCSk0QCUk5AJgVQAMgZA5hKIBXhwQBaDaAHDCQAFCHgoC2QgsDJgvBUQhCB3hsAAQgOAAgOgBg");
	this.shape_13.setTransform(-8.9,56.8,0.5,0.5);

	this.instance_3 = new lib.Path_17();
	this.instance_3.setTransform(-12.8,87.3,0.5,0.5,0,0,0,12.9,8.4);
	this.instance_3.alpha = 0.199;

	this.instance_4 = new lib.Path_18();
	this.instance_4.setTransform(-37.1,79.5,0.5,0.5,0,0,0,8.8,7.7);
	this.instance_4.alpha = 0.199;

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#FFFFFF","#CA7154"],[0,1],-125.3,-125,11.4,10.1).s().p("AhvCQQgjgMgUgfQgwhGA7haQA1hSCBgHQAxgCAsAJQApAIAMAMQAtAuhVBhQhQBdhYAcQgUAHgUAAQgTAAgRgGg");
	this.shape_14.setTransform(-15.8,90.6,0.5,0.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#FFFFFF","#CA7154"],[0,1],-98.7,-98.1,38,37).s().p("AhICdQgkg0gMhVQgMhOAPhAQAPhFAmgKQAugMAVABQAhADAbAbQARAQATA9QAVBCAFBAQAPCzhwAJIgJAAQg0AAgng4g");
	this.shape_15.setTransform(-38.1,86.3,0.5,0.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#5D8491","#275B6D"],[0,1],-66.4,-36.4,20.9,4.8).s().p("Ag3AAQhPhKhbg3QCDgUCdAFQCfAGAEAaQADAVg1BIQhOBigvBDQgSg+hYhUg");
	this.shape_16.setTransform(-9.9,31.6,0.5,0.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#275B6D").s().p("AgcABQABg+AbAAQAaAAACA9QACA7geADIAAAAQgdAAABg9g");
	this.shape_17.setTransform(-18.6,22.7,0.5,0.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["#FFFFFF","#275B6D"],[0,1],14,-7,0,14,-7,234.1).s().p("ACZHRIjfABQicAAgNgeQgWg0gZkuQgclAAggxQANgUAygfQAagPAWgLIgjgvIBYg2QBAB1BrBMQA2AmApAOQAKgOACgRQA9AQAuCIQAxCNgXCIQggC9gPAmQgYA9g5AAIgMgBg");
	this.shape_18.setTransform(-10,2.6,0.5,0.5);

	this.instance_5 = new lib.Path_24();
	this.instance_5.setTransform(-9,-13.2,0.5,0.5,0,0,0,13.7,11.7);
	this.instance_5.alpha = 0.199;

	this.instance_6 = new lib.Path_25_1();
	this.instance_6.setTransform(1.1,2.4,0.5,0.5,0,0,0,12.3,18.5);
	this.instance_6.alpha = 0.199;

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#FFFFFF","#275B6D"],[0,1],45.8,-22.1,-13.8,7.4).s().p("AhTA3QgEgCgBgFQAAgDACgDQACgCAEgBQAngEA0giQAwgdANgWQAFgIAHAFQAHAEgEAHQgRAbgzAfQg2AjgrAFg");
	this.shape_19.setTransform(17.7,-15.3,0.5,0.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#275B6D").s().p("AhOAnQAngGAyghQAugcANgWIACgCQAFAKACAIQgUAZgpAZQgsAcgnAJQgIgHgFgHg");
	this.shape_20.setTransform(17.9,-14.9,0.5,0.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#537C8A","#275B6D"],[0,1],-0.2,-2.9,0,-0.2,-2.9,13.4).s().p("AgjBRQgigPgNgjQgOggAQgiQAPgiAjgNQAggOAiAQQAiAPANAjQANAggPAiQgPAigjANQgQAHgPAAQgRAAgSgJg");
	this.shape_21.setTransform(17.5,-15.5,0.5,0.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#275B6D").s().p("AgKASQgHgFgCgJQgCgGAFgIQAFgHAIgCQAHgDAHAGQAIAEACAJQABAHgEAHQgFAHgJACIgEABQgFAAgFgDg");
	this.shape_22.setTransform(8,-33.9,0.5,0.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#275B6D").s().p("Ag8ArIgDgCIgFgIIgCgDIgGgMIgBgGQAAgFAEgJQACgFAIgIQAEgEALgHIAIgFIAagJIAPgDIAQAAIAOABIANACIATAGIAKAFQAIADgEAIQgCAFgFAAIgYABIgLABIgMACIgZAGIgMADIgGADIgFAEQgIAFgBACIgHAHIgFAHIgDAGIgDAGQgCAEgDAAIgDgBg");
	this.shape_23.setTransform(7.1,-36.5,0.5,0.5);

	this.instance_7 = new lib.Path_31();
	this.instance_7.setTransform(7.6,-35.4,0.5,0.5,0,0,0,6.8,4.4);
	this.instance_7.alpha = 0.5;

	this.instance_8 = new lib.Path_32();
	this.instance_8.setTransform(-4.2,-10.1,0.5,0.5,0,0,0,7.8,5.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#275B6D").ss(1,1,1).p("AABgtQgIAGgLAGQgUAOADAHQADAHAXgLQAJgFALgHQgHAIgEAIQgMAOAFACQAGADATgJIgCAKQgCAMACABQACAAAFgGQAFgGACACQABABAAAQQgBAQAGAC");
	this.shape_24.setTransform(30.3,5.8,0.5,0.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F8D6C2").s().p("AgUA2QgEgBAAgEIgBgBIAAgFIABgNQAAgHADgLIAHgRIAJgSIAHgOIAIgKIAFgEQAEgFAFAFQADADgCAEIgcA/IgJAfQgBAFgEAAIgDgBg");
	this.shape_25.setTransform(3.5,-21.8,0.5,0.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F8D6C2").s().p("AAOA8QgJgCgFgHQgIgJACgMIACgGIADgGIABgDIAAAAIABgBIAAAAIAAgBIACgCQAJgLABgLQABgGgCgGQAAgCgCgDIgCgDIgBgBIABAAIgBAAIAAAAIAAgBQgFgFgIgBIgHAAIgHACIgEACIgCABIgCACQgFADgDgFQgCgCACgEIABgCIAEgFQAKgKANgCQAIgBAHADQAKAFAFAGIABACIABABIAAABIADAEQACADACAGQADALgCAJQgBAIgFAJQgEAIgGAHIgGAGIgCAEQAAAFADAEQACADAEABQAEABACgBIAEgDQAEgEAFADQAEAFgEAEIgCACIgGAFQgFACgFAAIgEAAg");
	this.shape_26.setTransform(-8.9,-29.3,0.5,0.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#5D8491","#275B6D"],[0,1],-37.5,8.5,43.7,-8.4).s().p("AjAGFQg4gJgHgNQgEgGAMgdQAPgiAAgKQACgYh7j7IAGgMQAJgNANgNQgWAOgWAAQgUAAgIgMQAdgPA7hVIBQh0QAdgkDEhCQDFhCAnASQAuAVAyAdQA4AfAIANQAKAQgJBPQgLBQgSgBQgMgBgEgpQgEgqgPgCQgQgDg5AvQg6AwgDAAQgIAAgCgXQgCgYAHgUQhDBBAMB/QAGBBAPA5QgGAGgMgGQgMgHgLgPQATBYgFAWQgDAPgPALQgPALgWADQgphzgOg3QgJANgHAYQgNgXgTgIQgagMgbASQgeAUAJA6QAJA8AqAlQgXAbgZAuQgUAngFACQgFADgOAAQgRAAgfgFg");
	this.shape_27.setTransform(-7.3,-39.3,0.5,0.5);

	this.instance_9 = new lib.Path_37();
	this.instance_9.setTransform(-10.3,-16.8,0.5,0.5,0,0,0,13.3,18.2);

	this.instance_10 = new lib.Path_38_1();
	this.instance_10.setTransform(-1.3,-41.4,0.5,0.5,0,0,0,21.3,24.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["#FFFFFF","#F8D6C2"],[0,1],17.9,2.1,0,17.9,2.1,48.7).s().p("AjcFeQhuhpgHgpQgThqAJiBQAOjIBWhkQBchrCVgUQA6gJAsALQAsALAGAZQAMAzAlBWQAmBWAbAnQgzBSA+AxQAfAZAvANQAGAIgMAfQgLAfgJABQgIACg2gGQALAXADAWQAEAbgQgCQhIgIgXAAQhKAAgMAeQgMAhAtARQAmAPAlgEQAagCAJAPQAJAQgOABQgmAGAUBJQALAmgkAOQgcAKgdgHIhHgYQg1gSgKAEQgMAGgQAcQgSAegMAqQgqgLhqhmg");
	this.shape_28.setTransform(0.4,-30.6,0.5,0.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#275B6D").s().p("AhLARQgQg8BcgZQAigJAZACQAaACgMALQgZAWgLAkQgLAhAJASQAEAJgOAJQgOAKgRABIgGAAQgwAAgQg7g");
	this.shape_29.setTransform(6.3,-20.5,0.5,0.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#FFFFFF","#275B6D"],[0,1],83.7,8.8,-6.7,-0.5).s().p("AAuCqQgIgFimkpIA+gmQDGEfgEAMQgCAJglASQgeAPgJAAIgEgBg");
	this.shape_30.setTransform(24.6,-4.4,0.5,0.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#FFFFFF","#275B6D"],[0,1],28,3.7,-140.7,-24.4).s().p("AkJBxQhVh7AWhRQARg9A1gJQATgDBVBFQBVBEArgFQAugGA4hWQAfguALgNQAYgcAXgDQA9gIA+BVQA+BWgYBAQgNAkhAAzQhHA3hUAfQhPAehCAAQh/AAhXhng");
	this.shape_31.setTransform(11.6,1.2,0.5,0.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["rgba(39,91,109,0)","#275B6D"],[0,1],0,-111.2,0,121.8).s().p("EgEWAitQgFAAABgFMAIshFQQABgFAEABQAFABgBAEMgIsBFQQgBAEgEAAg");
	this.shape_32.setTransform(19.6,-127.1,0.5,0.5);

	this.instance_11 = new lib.Path_44();
	this.instance_11.setTransform(28.4,-101.9,0.5,0.5,0,0,0,45.7,171.5);
	this.instance_11.alpha = 0.5;

	this.instance_12 = new lib.Path_45();
	this.instance_12.setTransform(8.3,-112.9,0.5,0.5,0,0,0,5.5,193.6);
	this.instance_12.alpha = 0.5;

	this.instance_13 = new lib.Path_46();
	this.instance_13.setTransform(-43.8,-110.9,0.5,0.5,0,0,0,39.7,175.9);
	this.instance_13.alpha = 0.5;

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["rgba(39,91,109,0)","#275B6D"],[0,1],0,-79.2,0,153.8).s().p("EgC2AlUQgEgBAAgEMAFshKdQAAgFAFAAQAFABgBAEMgFsBKdQgBAFgEAAg");
	this.shape_33.setTransform(-14.9,-143.1,0.5,0.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["rgba(39,91,109,0)","#275B6D"],[0,1],0,-146.5,0,86.5).s().p("AgMauMAAQg1bQAAgFAEAAQAFAAAAAFMgAQA1bQAAAFgEAAQgFAAAAgFg");
	this.shape_34.setTransform(-23.6,-109.5,0.5,0.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["rgba(39,91,109,0)","#275B6D"],[0,1],0.1,-109.9,0.1,123.1).s().p("EAEhAghQgEAAgBgEMgJAhA4QAAgFAEAAQAEgBABAFMAJABA4QAAAEgEABg");
	this.shape_35.setTransform(-38.5,-127.8,0.5,0.5);

	this.addChild(this.shape_35,this.shape_34,this.shape_33,this.instance_13,this.instance_12,this.instance_11,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.instance_10,this.instance_9,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.instance_8,this.instance_7,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.instance_6,this.instance_5,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.instance_4,this.instance_3,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.instance_2,this.instance_1,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-63.7,-262.5,127.6,525.3);


(lib.Animar3 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8D6C2").s().p("AisgSQAzhuBHgrQAaBDBHAtQBNAwBXgEQg3gTgwgoQgzgrgag3QA3BfCOA0IABAUQhSgChTgjQhPgigxgzQgtAtgaAqQgvBLguCKQAPhnAphYg");
	this.shape.setTransform(-3.9,28.3,0.5,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#275B6D").s().p("AgJABQgGgEAPgDQANgEgBAKQgCAIgHAAQgGAAgGgHg");
	this.shape_1.setTransform(-3.4,45.2,0.5,0.5);

	this.instance = new lib.Path_2_1();
	this.instance.setTransform(-2.9,41.6,0.5,0.5,0,0,0,3.7,1.4);
	this.instance.alpha = 0.5;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EE99A0").s().p("AghAMQgJgTAXgOQATgKAWgBQAOAAABALQAAAKgTACQAPAdgcAKQgFADgGAAQgSAAgJgVg");
	this.shape_2.setTransform(-3.3,45.3,0.5,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#275B6D").s().p("AgQAMQgYgEABgJQACgQAUABQAWABAjAhIg4gGg");
	this.shape_3.setTransform(3.5,30.6,0.5,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#275B6D").s().p("AATAOQgdAAglgJQBUgnALAnQACAKgcAAIgDgBg");
	this.shape_4.setTransform(-8.2,29.6,0.5,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#275B6D").s().p("AgTAfQgOgIgDgPQgDgOAIgNQAJgOAQgDQANgDANAIQANAJAEAPQADAOgJANQgIANgPAEIgIABQgKAAgJgHg");
	this.shape_5.setTransform(-8.8,34.4,0.5,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#275B6D").s().p("AgSAdQgMgIgDgOQgDgNAIgMQAIgMAOgDQANgDAMAIQAMAIADAOQADANgIAMQgIAMgOADIgHABQgJAAgJgGg");
	this.shape_6.setTransform(2.9,35.1,0.5,0.5);

	this.instance_1 = new lib.Path_8();
	this.instance_1.setTransform(3.4,33.1,0.5,0.5,0,0,0,6.3,5.7);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Path_9();
	this.instance_2.setTransform(-8.6,32.3,0.5,0.5,0,0,0,7.2,5.3);
	this.instance_2.alpha = 0.5;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#275B6D").ss(1,1,1).p("EgIFAnhQHplPEqn9QErn8g9pRQg7o7iZopQiYorgUpBQgPmvA8mp");
	this.shape_7.setTransform(-12.4,206.6,0.5,0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FFFFFF","#275B6D"],[0,1],-7.9,-15.6,76.9,69.2).s().p("ABFF3QgxgCg/hFQg8hBgwhlQgqhYAFgXQADgOAWgNIAxgdQATgMAagWQASgLAHAXQAQA1AHASQAQAsAPAYQgFhIgCgpQgChLAKhPQAai4BHgLQAogHAWBRQAXBQgECFQgFDAgEAyQgKB2gdA1QgcAygqAAIgCgBg");
	this.shape_8.setTransform(6.9,75.3,0.5,0.5);

	this.instance_3 = new lib.Path_12_1();
	this.instance_3.setTransform(4.2,77.7,0.5,0.5,0,0,0,14.6,36.8);
	this.instance_3.alpha = 0.199;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FFFFFF","#F8D6C2"],[0,1],-15.1,-16.5,10.6,9.3).s().p("AADC2QgTgPgQgkIgLhAQgHghgigDQgOgMgDggQgDgiALgeQAehRBbApQgwgcgWgPQgngZArgEQAxgGAzA1QAyA0gLAoQgHAbgCBoQgHBggkALQgJADgIAAQgPAAgOgJg");
	this.shape_9.setTransform(-0.6,67.8,0.5,0.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#275B6D").s().p("AgREfQhzgqAplEQAJhGAihIQAghFATgCQAcgCAcAOQAcAOAMAXQAKASgPBWQgXCDgFA0QgDAiAABEQAAA+gDAYQgHA9gqAAQgMAAgQgGg");
	this.shape_10.setTransform(7.3,67.7,0.5,0.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#FFFFFF","#275B6D"],[0,1],-11.8,32.5,-23.2,-33).s().p("AgJASQg9gIgagPQgHgFAFgHQACgCADgBQADgBADACQAWAPA5AFQA9AJAlgLQADgBADABQAEABABACQABAFgDADIgEADQgZAIgjAAQgWAAgWgDg");
	this.shape_11.setTransform(-0.2,51.1,0.5,0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#275B6D").s().p("AgIASQgxgGgcgMQgCgJAAgLIADABQAVAOA3AGQA6AIAmgJQgBAHgEAKQgVAEgZAAQgWAAgXgDg");
	this.shape_12.setTransform(-0.2,51.5,0.5,0.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#537C8A","#275B6D"],[0,1],-0.8,-2.7,0,-0.8,-2.7,13.4).s().p("Ag5BEQgcgZgDglQgDgjAZgcQAYgcAlgDQAjgDAcAZQAcAYADAlQADAjgZAcQgYAcglADIgGAAQggAAgZgVg");
	this.shape_13.setTransform(-0.2,50.6,0.5,0.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#275B6D").ss(1,1,1).p("AgWgwIAWADQAYADABAIQAAAIgZgBIgXgCQAjASgFAFQgEAGgWgCQAPARgDADQgCABgHgEQgGgDgCADQgBABAIAPQAHANgFAF");
	this.shape_14.setTransform(-2.6,75.8,0.5,0.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#FFFFFF","#275B6D"],[0,1],-50.3,62.2,-15.6,-21.8).s().p("AgNC1QgpgBgGgHQgFgGAbitIAdiuIBGAIQgaFUgFAIQgEAFghAAIgGAAg");
	this.shape_15.setTransform(-1.9,63.5,0.5,0.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#275B6D").ss(1.8,1,1).p("AgiAAQAAgOAKgKQALgLANAAQAOAAALALQAKAKAAAOQAAAOgKALQgLAKgOAAQgNAAgLgKQgKgLAAgOg");
	this.shape_16.setTransform(11.5,50.7,0.5,0.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FCEDE3").s().p("AgEFDQgwgDhRhFQhUhGgLg3QgQhKAuiQQA2irBgg6QAaBDBHAuQBNAwBXgFQg3gSgwgoQgzgrgag4QA3BgCOAzQAGBXgGBqQgGBcgIAXQgNAohQBKQhTBMgoAAIgEAAg");
	this.shape_17.setTransform(-4,35.8,0.5,0.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#FFFFFF","#F8D6C2"],[0,1],0,39.7,0,-11.2).s().p("Ag5CaQhJgLghgkQgYgbAEghQA/gXAWgYQAkgqgLhZQgEgcAnAFQAjAFAzAdQA1AcAnAiQAqAmADAYQAFA4hTA1QhFArhBAAQgPAAgPgCg");
	this.shape_18.setTransform(-6.8,53.6,0.5,0.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#5D8491","#275B6D"],[0,1],-34.6,-33.1,31.7,33.2).s().p("AmDDRQg1jdAojCQAkirCghbQBxhBBhAAQAkAAA7APQBIASA+AgQCsBZAJCTQALC+gkC4QgpDUhXBgQhygth/gHQg1gChAAzQhVBEgyATQhphsg0jZg");
	this.shape_19.setTransform(-6.3,29.8,0.5,0.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#FFFFFF","#F8D6C2"],[0,1],-12.6,-12,7.8,8.4).s().p("AgNBxQgUgIgVgPQg6gqABgnQACgoAtgsQAqgqAdAAQAcAAArBMQAqBIgKAUQgIAQgggYIgegbIAWApQATArgOAOQgOAOgrghIgmgkQAjAtgCAMQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAgBAAQgCAAgMgFg");
	this.shape_20.setTransform(-21,91.2,0.5,0.5);

	this.instance_4 = new lib.Path_25();
	this.instance_4.setTransform(-20,92.8,0.5,0.5,0,0,0,11.2,11.8);
	this.instance_4.alpha = 0.199;

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#275B6D").s().p("AhAgBQAGhwAkggQAegcAZAAQASAAAMAPQAKANgmCNQglCPggAjQgjg/AFhwg");
	this.shape_21.setTransform(-19.2,58.5,0.5,0.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#FFFFFF","#EE99A0"],[0,1],-53.9,-57.4,39.2,35.7).s().p("AgWCIQhtgNhTgkQhZgmgfgzQgDgvAcgwQAbgtAYAAQAdAkA+AgQBQAoBXAFQB5AFBDgGQBdgKA0giQAFAUgEAzQgFA3AFAgQg1AohmANQgvAGgxAAQg0AAg1gHg");
	this.shape_22.setTransform(-8.6,101.3,0.5,0.5);

	this.instance_5 = new lib.Path_28();
	this.instance_5.setTransform(-8.6,102.4,0.5,0.5,0,0,0,33.6,14.3);
	this.instance_5.alpha = 0.199;

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#FFFFFF","#275B6D"],[0,1],24.5,-49.2,0,24.5,-49.2,311).s().p("ADVMyQiagdg7gIIjQgbQhsgOgUgIQghgOgMgSQgTgeAAhOQAAijAHhGQATiiBChqQA6hbgFhmQgEgtAAgQQABgbAQgKQh5g5AYhcQAIgdAZglIAegtQg6g5gDhmQgChcAjgkQAbgbB9gZQBwgWBGAAQBCAAAtAJQAxALAsAaIBdA5QA0AgAWARQg6ArANCeIAPCMQAHBVgGA5QgKBkgiBzQgcBfADAWQgeCCA6DSQAzC5AABwQgcAnhUAAQgaAAgfgEg");
	this.shape_23.setTransform(-7.1,90.2,0.5,0.5);

	this.instance_6 = new lib.Path_30();
	this.instance_6.setTransform(-18.3,127.5,0.5,0.5,0,0,0,16.4,15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#FCEDE3","#F8D6C2"],[0,1],-30.3,-36.7,12.8,6.5).s().p("AApJ2QgPgagChsQgBh1gNglQgtiGgchdQg5i8gOh6QgHhAgjizQgWh0AKgzQAHggA0gOQAxgNA/AIQA/AIArAaQAvAdgBApQgCBGgRBeQgJA1gSBTQgJAsAKBbIAOB/QACAmAACYQABCKACASQAhAVAaBwQAOA+AKBPQglAagrAEIgMAAQgpAAgSgeg");
	this.shape_24.setTransform(-16.8,151.6,0.5,0.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EE99A0").s().p("AhLC1QghhlgIijQgNiCABghQABguAugMQA9gPAlAqQAlAnASBbQAGAeAWBYQATBUAHA7QATCwhWARQgJACgKAAQhJAAgqiAg");
	this.shape_25.setTransform(-10.7,181.6,0.5,0.5);

	this.instance_7 = new lib.Path_33();
	this.instance_7.setTransform(3,126.9,0.5,0.5,0,0,0,18.7,16.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#FCEDE3","#F8D6C2"],[0,1],-26.5,-35,29.7,21.1).s().p("ACbJ7QgOgZgPhPQgQhVAEgsQAEgmgihAQgqhEgMgaQgcg3gPgpQgehKgPhhQheh8hJi0Qg6iTgEg/QgBgWAxgWQAwgVA/gIQBFgIAvANQA2APAJAqQASBRA+FkQBAFtAMBjQAJBDAkBfQAhBXADBEQgbAPgsAEIgTABQgiAAgJgRg");
	this.shape_26.setTransform(8,150.8,0.5,0.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EE99A0").s().p("AAFEPQg7gpgQg8IgkilQgZh0gUgyQgZg7AsgxQArgwAoAUQAjARA+CPQA6CCAUBPIAiCRQAJBNgyAIIgTACQguAAgxghg");
	this.shape_27.setTransform(18.9,180.3,0.5,0.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#BECED3").s().p("Ag1FfQgegFgGgUQgJgbAdihQAfiugCgxIgSioQgJhcAdgHQAmgJAxEIQArDpAABuQABBKhWAaQgUAHgUAAQgKAAgKgCg");
	this.shape_28.setTransform(-21.2,72.8,0.5,0.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["rgba(39,91,109,0)","#275B6D"],[0,1],0,-111.2,0,121.8).s().p("EgEWAitQgEAAAAgFMAIthFQQAAgFAEABQAFABgBAEMgIsBFQQgBAEgEAAg");
	this.shape_29.setTransform(25.9,-63.9,0.5,0.5);

	this.instance_8 = new lib.Path_38();
	this.instance_8.setTransform(34.7,-38.7,0.5,0.5,0,0,0,45.7,171.5);
	this.instance_8.alpha = 0.5;

	this.instance_9 = new lib.Path_39();
	this.instance_9.setTransform(14.6,-49.7,0.5,0.5,0,0,0,5.5,193.6);
	this.instance_9.alpha = 0.5;

	this.instance_10 = new lib.Path_40();
	this.instance_10.setTransform(-37.5,-47.7,0.5,0.5,0,0,0,39.7,175.9);
	this.instance_10.alpha = 0.5;

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["rgba(39,91,109,0)","#275B6D"],[0,1],0,-79.2,0,153.8).s().p("EgC2AlUQgEgBAAgEMAFshKdQAAgFAFAAQAEABAAAEMgFsBKdQgBAFgEAAg");
	this.shape_30.setTransform(-8.6,-79.9,0.5,0.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["rgba(39,91,109,0)","#275B6D"],[0,1],0,-146.5,0,86.5).s().p("AgMauMAAQg1bQAAgEAEAAQAFAAAAAEMgAQA1bQAAAEgEABQgFgBAAgEg");
	this.shape_31.setTransform(-17.3,-46.3,0.5,0.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["rgba(39,91,109,0)","#275B6D"],[0,1],0,-109.9,0,123.1).s().p("EAEhAghQgEAAgBgEMgJAhA4QgBgFAFAAQAEgBABAFMAJABA4QAAAEgEABg");
	this.shape_32.setTransform(-32.2,-64.6,0.5,0.5);

	this.addChild(this.shape_32,this.shape_31,this.shape_30,this.instance_10,this.instance_9,this.instance_8,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.instance_7,this.shape_25,this.shape_24,this.instance_6,this.shape_23,this.instance_5,this.shape_22,this.shape_21,this.instance_4,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.instance_3,this.shape_8,this.shape_7,this.instance_2,this.instance_1,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-57.4,-199.3,115,532.5);


(lib.Animar2 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCEDE3").s().p("AgdAXQgJgJAegYQAcgZAIAIQAMAMgaAbQgOASgNAAQgIAAgIgHg");
	this.shape.setTransform(14.2,43,0.5,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#537C8A").s().p("AgJAKQgFgFABgFQgBgFAFgEQAFgEAEgBQAGABAEAEQAEAEABAFQgBAFgEAFQgEAFgGgBQgEABgFgFg");
	this.shape_1.setTransform(6,27.5,0.5,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(83,124,138,0)","#537C8A"],[0,1],0,-111.2,0,121.7).s().p("EgEWAitQgEgBAAgEMAIthFQQAAgFAFABQAAAAAAAAQABABAAAAQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABMgIsBFQQgBAEgEAAg");
	this.shape_2.setTransform(13.2,-64,0.5,0.5);

	this.instance = new lib.Path_3_1();
	this.instance.setTransform(22,-38.8,0.5,0.5,0,0,0,45.7,171.4);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.Path_4_1();
	this.instance_1.setTransform(1.9,-49.8,0.5,0.5,0,0,0,5.5,193.6);
	this.instance_1.alpha = 0.5;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCEDE3").s().p("AicDOQBEgFAshUQAshVgYhRQAWg7A0g3QAygzAGgZQASAhAFA8QADAeAABJQAAAFANAHQAMAHAAAGQAAAEgOAKQgNAJAAAEQgEAmgKAeQgIAXgHAIQgRAQhQgDQgDATABAXIACArQgeAcgwAGIgOAAQgtAAgXgig");
	this.shape_3.setTransform(1.9,30.9,0.5,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#537C8A").s().p("AhWR+QgZgTAAgeIAFgaIgJATQgJAUgFAGQgIgEgLgJQgLgJgFgGQgPgpALgoQAMgpAjgbQA7i9APhYQgIAhhlB3Qg6BFhtB+IgVBAQgPAlgWADQgUADgUgVQgMgMgSgeQgLgRgBgoIABgkIgiAmIgZgUQgBgNAFgVQAKgsAcgsQAQgFAVgKQApgUAVgaQArhHAvg+QBah3B1hFQAAhUgMhzQgLhugUhvQgMhFAdhvQAZhhgVgvQg2hmgZg5QguhnANg/QgRASgfAKQgnAMgigNQAJgsAFgPQALAIAOAAQAQABAOgIQgfAHgUgQIAHgWQAaASAhgKQhLhlgEiLQgEiNBKhYQBUhiCKAWQA1AJAnAbQAnAbACAfQAYANANAaQgGAZgyAzQg2A3gUA7QAXBTgrBVQgsBUhEAFQAaAoA4gGQAwgGAegcQBmAKA7AWQAbAKBvBmQBuBlAHACQARAFA/ADQgkAtAEA3QgrAFgKAAQgegDgzgZQhFghg2g2QgmAvAhBxQAKAgAWBDQAUA9AGAnQANBSgtC7QgNA2hID4QgWBMhGDPQg4CmgDAcQAMA4gHAtQgHAsgSAIIgFAAQgUAAg8gtg");
	this.shape_4.setTransform(0.8,71.8,0.5,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FCEDE3").s().p("AjkgQQA4ACA/ABQBCAAAfgCQAeADA+goQA4gkATAJQAGAEgQAQQgWAWgKALQAcgCBIgTQA5gLgKAdQgoB1jfgwQjVAkgsAGQgEg3Akgrg");
	this.shape_5.setTransform(38.4,54.8,0.5,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#537C8A").ss(1,1,1).p("ALT2FQBUCGgtB5QgnBoiRByQheBKjlCLQkFChh0BRQnQFGiEFzQixH5FkK5");
	this.shape_6.setTransform(-12.4,122.1,0.5,0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#537C8A").s().p("AgrApQgBgEAEgCQAWgJAYgaQAYgZAEgPQACgEAEABQABAAAAABQABAAAAAAQABAAAAABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQgFASgZAZQgZAdgYAJIgDAAQgDgBgBgCg");
	this.shape_7.setTransform(10.3,38.6,0.5,0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#537C8A").s().p("AgIA0QgWgDgMgTQgNgSADgUQAEgWASgMQATgNATADQAWAEANASQANATgEATQgDAWgTANQgOAKgQAAIgIgBg");
	this.shape_8.setTransform(10.2,38.5,0.5,0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#537C8A").ss(1,1,1).p("AgHgXIgKALQgKALADABQAFAGATgUIgDALQgFAJADABQAEAAAJgHQAAAMACAAQABAAACgEQACgEACAAQABABACAJQACAJADAB");
	this.shape_9.setTransform(20.9,48.8,0.5,0.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#537C8A").s().p("AA0BaQgFgCiMiSIAegfQCdCHAAAIQAAAFgTAQQgRAPgFAAIgBAAg");
	this.shape_10.setTransform(15.9,43.9,0.5,0.5);

	this.instance_2 = new lib.Path_14();
	this.instance_2.setTransform(-27.2,-41.1,0.5,0.5,0,0,0,39.7,175.9);
	this.instance_2.alpha = 0.5;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(83,124,138,0)","#537C8A"],[0,1],0,-79.2,0,153.7).s().p("EgC6AlPMAFshKdQABgFAEAAQAEABAAAEMgFsBKeQAAAEgFAAQgEgBAAgEg");
	this.shape_11.setTransform(1.6,-73.3,0.5,0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(83,124,138,0)","#537C8A"],[0,1],0,-146.5,0,86.4).s().p("AgMauMAAQg1bQAAgEAFgBQAEABAAAEMgAQA1bQAAAFgEgBQgFABAAgFg");
	this.shape_12.setTransform(-7,-39.7,0.5,0.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(83,124,138,0)","#537C8A"],[0,1],0,-109.9,0,123).s().p("EAEgAghQgDAAgBgEMgJAhA4QAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAFgBAAAFMAJBBA4QABAEgFABg");
	this.shape_13.setTransform(-21.9,-58,0.5,0.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FCEDE3").s().p("AgXBMQghgEgNgNQgMgMAEgVQAHgeAhglQAjgoAWAHQAWAGgYAaQgHAIgKAIQAxglATAHQAUAJhBAzQAsgRAJAHQAHAGgUAVQgSAVgaARQgYARgQAAIgDAAg");
	this.shape_14.setTransform(14.3,42.8,0.5,0.5);

	this.addChild(this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.instance_2,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.instance_1,this.instance,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51.4,-192.7,103,385.7);


(lib.Animar1 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#537C8A").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgFAHAAQAIAAAFAFQAHAGAAAHQAAAIgHAGQgFAFgIAAQgHAAgGgFg");
	this.shape.setTransform(9,-13.9,0.5,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#537C8A").s().p("AhwDIQgXgTgvgBIgrADIg0hRIAdgKQAlgLAkgGQgfiDAng/QAbgsBDgLQAjgiBMgFQBhgFAvBJQBSgPAMBLQAGAmgKAoQg2gagPgXQABACgMANQgLANAAACQgGgVgRgKQgTgMgXAIQgzARgYASQgpAdAAAzQgRgJgQAKQgOAJgGASQgGASAGAPQAIARAVACQgCAYgMA4Qg5gBgRgNg");
	this.shape_1.setTransform(3.3,-14.6,0.5,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9DECE").s().p("AgvAMQgOgUgBgTQgBgUAOgGQAcgLAKgBQAKAAAWAHQAgAKAIA2QAJA5gnACIgDABQgsAAgfg2g");
	this.shape_2.setTransform(3.2,-2.2,0.5,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9DECE").s().p("AiFCNQANg4ABgYQgVgCgHgRQgHgPAHgSQAGgQAOgJQAQgKARAJQAAgzAqgfQAYgSAygRQAxgRAnAfQAFAbASAiIASAlQACAOgsAeIADAfQABAigJARQgHAPhSAMQhBAKg7AAIgYAAg");
	this.shape_3.setTransform(8,-11,0.5,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8D6C2").s().p("AgjBOQgMgRAJghQglgmAHgUQAHgVAmAwQgcgwAMgTQALgSAeA8QgRg8APgDQAMgCAZAtQAAgdAHgFQAGgFAIAPQATAmgKAzQgGAggWAVQgTATgVADIgGAAQgSAAgKgOg");
	this.shape_4.setTransform(25.9,1.6,0.5,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8D6C2").s().p("AAEBHQgUAAgZgwQgigDgMgRQgLgNAKgUQAKgUAZgLQAbgNAeAFQA1AIAeAfQALALgHAEQgHAFgbgJQAiAkgHAMQgIAMgyglQAuAygWAEQgVAEgigpQAeAygVAAIAAAAg");
	this.shape_5.setTransform(-0.3,12.9,0.5,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#537C8A").p("AGAcMQCPh0gBiXQAAiChvi1QhJh3i/jwQjbkVhciGQitj6hXjZQhskOADkEQAIpyKRp9");
	this.shape_6.setTransform(-18.7,110.1,0.5,0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#537C8A").s().p("AlUBUIGNiSQgFgGgDgJQgGgSAIgQQAJgQCFgPQBDgHBBgEIAQBiQgQgHgWgCQgpgGgVAUQgpAngSAKQgsATg0gXIlwCfg");
	this.shape_7.setTransform(28.2,-0.8,0.5,0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#537C8A").s().p("Ah3KyQgIgiADhYQgYglgTg3QgZhGANgdQgKg7gKh5QgNilADiFQhXAWhFhjQgcgpgKgtQgKgvAPgfQgVgBgSgIQgYgLgJgWQgIgVA8hyQA3hoAegkQAngwAigNQBGgaCGAlQBbAMAiAIQAxAMAcAWQAUAPAzBmQAuBcANgDQAXgGAQgTQAUgYgBghQAWgPAqgOQAsgQAWAAQANAAgKAqQgJArgZA0QhCCLhRATQgyAMgxgmQgugjgSg4QAJBIACBKQArAuA5CiQA+CvAGB+QAnAQAkAzQAqA6AOBKQAXAYAEBEQAFBEgWAHQgUAHgRgXIg3hcQggg1g+gzQhThDgHgHQgMg4g1hyQhAiJggAOQgfAPgKDIQgJC0ANBQQATAhgPBWQgPBagiAEIgFAAQgcAAgKgqg");
	this.shape_8.setTransform(6.4,30.8,0.5,0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(83,124,138,0)","#537C8A"],[0,1],0,-92.8,0,101.5).s().p("Ajoc9QgEAAABgFMAHQg5wQAAgDAEgBQADACAAADMgHQA5xQAAAAAAABQgBAAAAABQAAAAgBAAQgBABgBAAg");
	this.shape_9.setTransform(17.6,-95.6,0.5,0.5);

	this.instance = new lib.Path_10();
	this.instance.setTransform(24.9,-74.5,0.5,0.5,0,0,0,38.1,143);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.Path_11();
	this.instance_1.setTransform(8.1,-83.7,0.5,0.5,0,0,0,4.6,161.5);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Path_12();
	this.instance_2.setTransform(-18.6,-73.7,0.5,0.5,0,0,0,33.2,146.7);
	this.instance_2.alpha = 0.5;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(83,124,138,0)","#537C8A"],[0,1],0,-66.1,0,128.2).s().p("AibfEMAEwg+HQAAgEAEABQADAAAAAEMgEwA+GQAAABAAABQAAAAgBABQAAAAgBAAQgBABAAAAQgFAAABgEg");
	this.shape_10.setTransform(5.4,-100.6,0.5,0.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(83,124,138,0)","#537C8A"],[0,1],0,-122.2,0,72.1).s().p("AgJWSMAAMgskQAAgDAEAAQADAAAAAEMgANAsjQAAABAAABQAAABAAAAQgBABAAAAQgBAAgBAAQgBAAgBAAQAAAAgBgBQAAAAAAgBQAAgBAAgBg");
	this.shape_11.setTransform(-1.8,-72.5,0.5,0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(83,124,138,0)","#537C8A"],[0,1],0,-91.7,0,102.6).s().p("ADxbIQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBMgHgg2HQgBgEAEgBQADAAABAEMAHgA2HQABAEgEAAg");
	this.shape_12.setTransform(-14.2,-87.8,0.5,0.5);

	this.addChild(this.shape_12,this.shape_11,this.shape_10,this.instance_2,this.instance_1,this.instance,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45.1,-200.2,90.4,400.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;