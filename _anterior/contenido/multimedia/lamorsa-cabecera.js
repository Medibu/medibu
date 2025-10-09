(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 700,
	height: 318,
	fps: 24,
	color: "#6EC6DD",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Animar6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhHQkQiOgIh4gnIiMg2IgtgXIg6ghQhxhFhehiQhdhihBhzQhCh2gjh/IAAgBQgBgDACgDQAYghAWgWQAWgXAfgYIAcgVIAegTIAfgRIBAgdIAhgNQAcgKAogKQBEgRBGgGIAkgCIBpADQATABAQACIAjAFQAeAFAnAJIBDAUQArAPAXAKQAOAFASAKIAgAPQAYANAfATIAQgmIAXhdQADgPAEgeIAEgwIgBgwIgNhfIgNguIgNgtIgrhVIg3hNIg8g9IgEAEIgOAJQgEADgKAEIgIADIgIACIgRACIgSgBQgLgCgGgCIgPgJIgHgFIgGgGIgLgOIgIgPIgEgQQgCgEgBgNIAAAAIgOASIgZAaIgcAWIgOAKIgQAJIgiAOIgjAIIglABQgTgCgRgFQgKgCgHgDIgRgIQgMgGgTgNIgOgMIgMgNQgPgSgGgNQgHgNgGgVQgEgVAAgRQAAgJADgKQgTAAgMgFQgOgFgJgKQgHgIgBgDIgFgMQgHgXAJgbQAHgUARgWQAMgPAVgRIAjgaIBwhIIAngVIA8gcIBnglIArgNICMgbIAhgDIAsgEIBWAAIAsABQAYACATADIBXANQAXAEA+AQIAVAGICPA3QB4A4BoBUQBkBRBSBtIAUAbQAMAQAGALIBCBzIAyB6IAUBAQAUBNAHA1QAJA0ACBQQAAAygBAPIgFBCQgOCDgxCAIgMAfIgNAfIgPAeIgPAeIhGBxQgfAug1A6IgvAwIgxAtQhgBTiAA/Qh2A6iGAbQhtAVhlAAIg2gBgAnfAiIgjABIgjACQhDAFhGASQgfAIgjANIghAMIg+AeIgeARIgdATIgcAVQgeAYgVAWQgSAUgXAfQAjB5BDBzQA+BtBgBiQBbBdBxBEIA4AgIBZApIAeALIA+AVQB2AmCJAHQB7AGCFgbQBMgRAxgSIA9gWIA8gbQB6g8BfhRIAwgrQAKgJANgOIAXgXQA0g8AdgpIBFhuIAqhYIAMgeQAziBAOh7IAGhAIABghIABgeQgBhPgHg0QgPh/gwh9IgNgeIgNgeIg+hzQgHgMgegrQhKhphohWQhnhUh3g5IhRgiIhTgaIgqgLQgZgGgSgDIhWgMQgTgDgZgBIgsgBIgpAAIh4AKIg1AKQgPACgHACIg/AQIgpAOIhmAnIg6AdIgmAVIgTALIgSAMIh5BaIgNAPQgPAVgFAOQgGAUAFAQQAEAQARAHQAPAFAWgDQAFgBAEADQAEADABAFIAAAFIAAABQgGARAAAMQAAANADASQAGASAGAKQAFALAMAPIALALIAMAKQARAMAKAFIAdALQANADASACIAggBIAegGIAegNIAOgHIANgJQAJgGAQgOIAXgYIAVgaIASgbQADgEAFgBQAGgBAEADQAHAFgCAHIgCAOIgBAOIAAANIACANIAEANIAFALIAIAKIAEAEIAFAEIALAGIALADIANABIAMgCIANgDIAMgGIAWgQIABgBQAHgGAHAHIBFBHIA4BQIAXAsIAhBcIALAwIAIAwIAEAxIAAAxIgEAxIgIAvIgMAvIggBcQgCAFgFgCIgBgBIg8gjIgfgQIgggOQgYgLgpgPIhCgUQgngJgegFIgigFIhFgFIgagBIgJAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(110,198,221,0.8)").s().p("Ag6QcQjVgIjChbQjVhkiVizQiRiug9jaQA9haBwg+QBxg/CMgWQE/gvESCtQBUi2grjGQgpjDiWiBQg1AygzgdQg0geARhRQg4BchMAgQhBAchAgWQg8gUgegzQggg0ATg1QhBAMgJgzQgJg0A8gyQDojAEqgoQExgqEZCDQDCBbCPCeQCJCZBGDCQBGDBgHDLQgIDVhbDCQhbDCieCOQiZCJjBBHQivA/i3AAIgngBg");
	this.shape_1.setTransform(-0.1,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.3,-106.1,208.8,212.4);


(lib.Animar5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah4UdIgpgCIh7gOIhRgPQiigliShLQiVhNh5hsQh8huhdiIQgCgDABgDQAPgyAQggQAOgfAcgtIAagkIAbgiIAdghIAPgQIBRhIQAdgXAqgcQBKgwBPgiIAogRIApgPIAqgNIB/gdQAogHAugEIBXgFQA6ABAdADQAUAAAXAEQAdADAOADIArAHIAkAIIAChxIgGg7IgLg4IgPg6IgUg3IgZg2Igdg0IghgyIgkguIgogsIhbhMIgxggIhhgwIgFAHIgMAQQgCAEgFADIgLALIgMAIIgTAKIgUAFIgKABQgFABgGgBQgOgBgHgCIgTgIQgFgCgNgJIgOgPIgMgQIgJgSIgEgIIgMAiQgDAJgPAfQgPAbgIAKIgOARIgOARQgIAJgIAGIgRAOIgmAXIgVAJIgVAHQgVAGgXABIgWAAQgNAAgKgCQgJAAgNgEIgVgGIgVgIIgUgKIgSgNIgJgHIgIgHQgQgOgNgVQgOgWgFgTQgEgMgCgPQgVAJgTAAQgSgBgNgIQgPgHgJgOQgRgYAAgiQAAgcAKgdQAKgbAQgXIAuhEIAyhAIASgVIASgUIAlgpIA7g4IAUgSIAqgjIALgJIAggYIAtggIBFgrIAYgNIA7ghICkhCIAagIQBJgXAggGIA1gLIChgTIBtgCQANAAAOACIBPAFQClATCYA3QCVA3CNBfIBCAwIBOBCIBIBIIAcAeIAbAgIAZAfIAZAhIAYAhQA2BSAdA7QAfA7AjBcIAZBOIAVBQQAjCegFCnQAAAOgFBEIgFApIgGApIgkChQgSA+gmBdIhMCSQhSCKh4B6QhxBwiUBZIiTBKIgmAQIgmAOIgnANQgaAJgOADQg1APgbAGIgoAIIijAUIgoACIgpABIgFAAIgkgBgAldCrQg1AFghAGIgqAIIgVAEIiQAtIgoARQhPAihIAwQghAWglAdIghAbIg9A8IgcAhIgbAiIgYAjQgbArgOAgQgPAfgNAuQBbCBB7BsQB5BqCTBJQCUBJCcAiIAoAHIAnAHIChAOIAoABIApgBIAmgCIBQgIQAcgDAMgCIAogHIAngJQAVgEA5gQIAmgMIAngNIAlgOQAXgJAOgHICQhJQBWg1AugmIA/gzIAdgbIAegcQB3h4BOiFIBKiPQAlhXAShAQAIgYADgPIAfieIAFgnIAEgpQACgYAAgQQAHioghiXIgYhiIgTg5QgehVgghBQghhDgvhJQglg2gJgMIgzg/IgagfIhHhIIhNhDQgMgLgUgOIgggYQiChcidg8QiZg5iigTIhPgFQgPgBgMAAIhtACIhDAGIhdAOIg1AMQgWAEgfAJIgzAPIgaAJIhMAdIgxAXIh3A/IhDAtIgrAgIghAYIgyAsIgVASIg5A5IgjApIgSAUIgRAUIg/BXIgdAtQgRAbgGAUQgJAaAAAXQAAAbANARQANATAYABQATAAAagOQAEgCAFABQAFABACAFIACAFIAAABQACAaAEAMQADANANAWQAOAUALAJIAPANIAQAKIASAKIASAHIATAFIAUADIATACIAUgBQAVgBASgFIATgGIAjgRIAggYIAPgNIANgPIAMgQQAGgHAQgbQAMgYAFgNQAGgNAIgaIALgnQABgFAEgDQAFgDAFACQAIABACAJIADARIAEARIAGAQIADAHIAEAHIAFAHIAFAHIAIAJIADACQAKAIADABIAHAEIAIACQAFACAKABIAIgBIAIAAIAPgEIAPgIIAKgGIAKgJIAQgTIAJgPIABgBQAFgIAJAEIA3AZIBoBAIAvAmIBVBXIAlAwIAhAzIAdA1IAYA4IAUA5IAPA7IAKA5IADA9IABA8IgCA8QAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgBAAIgqgJIgrgIIgqgGIgrgEQgdgDg5gBg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(219,239,244,0.8)").s().p("AjaUPQkigfj3iWQjuiRifjnQAjiBBqh3QBrh3CahRQCjhWC4gZQDJgcDGAwQAYj4iAjWQiBjTjjhcQgUAmggASQgeARgggGQhIgOgNhmQgdCDhLBEQhBA7hUAAQhOAAg4gvQg6gxAAhGQghATgcgFQgbgFgNgZQggg5AzhSQDCk9FNioQFVisF8ApQEIAdDmB/QDdB8ChDGQCgDHBJDzQBMD7gcEGQgdEHh/DmQh8DejGCgQjHCgjzBJQi3A4i7AAQhHAAhIgIg");
	this.shape_1.setTransform(-0.1,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123.4,-131,247,262.1);


(lib.Animar4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkGTAIhNgQIglgJIhvglIhHgdQiPhCh4hhQh8hkhbh7Qheh+g6iOQgCgDACgEQAaguASgXQASgZAkgmIAegcIAggaIAhgZIBGgrIAkgTQAjgSAogQQBMgeBRgQQAOgEAbgEQANgDAbgDIApgEIB7gDQAaABA4AFIBRANQA3ANAYAHIAnAMIAnAOIAmAPIAgAOIANgwIAJg3IAFg4IABg2IgDg4QgBgMgFgrIgMg3IgRg1IgVg0QgKgVgPgcIg9hdIhMhSIhPg+IgFAFIgPANIgQAKQgDADgFABIgJAEIgTAFIgUACQgNgBgHgCQgOgFgEgDIgJgEIgIgHIgOgOIgLgQIgEgJIgEgJIgFgSIgBgGQgKATgHAJIgYAhQgSAVgLAJIgPANIgRANIgSALIgmARIgpALIgVACQgVABgVgDIgVgEQgLgDgJgDIgTgIIgTgKIgigZIgPgPIgNgRQgKgNgKgYQgJgZgBgRQgBgKACgPQgVAEgSgEQgQgEgMgKQgLgKgHgPQgLgYAHghQAFgaAQgZQAOgWATgTIA4g2IATgRIAnghIAVgQIAUgPIAqgeIBBgpIBPgrIBSglICfg0IAlgIIAygLIBMgLIAagDQBJgGAdAAIBkADQAYAABOALIBkATIAZAGIBKAVQCSAvCEBSQCBBRBuBxQAqAtAJAMIA8BMIA1BQIAUAiIAkBEQALAVAVAxQAgBQASBCQARA6APBeIAFAmQADAYAAAPIAEBNQADCWgmCcQgGAagOAxQgEANgJAYIgjBbIgrBXQgfA9gyBHIhiB5QhkBviJBaQh9BTiaA1QicAziUAKQgtAEguAAQhxAAhngUgApnBxIgoAHQhSAShJAdQgoAQgiARIhXA0IgRALIggAZIgfAaIgdAcQghAjgTAaQgUAcgUAmQA9CLBaB4QBdB5B4BfQB7BhCJA8IB8AvICmApQCNAaCggMQCQgLCYgzQBaghAygZQASgIAxgbIAhgUIAggUQCFhXBihsIBgh1QAyhJAeg4IAphVIAvh9QASg7ADgOQAniYgCiSIgJiYQgMhZgQg9QgPg9gghTIgehGIhJiHIhZh7IgZgeIgZgcQhlhtiGhXQiFhSiQgwIhKgUIgZgHIhkgSQhPgKgWAAIhkgCQgYgBhOAHIi7AkIicA3IguAVIgiARIiNBVIgpAfIgUAPIgUAQIhKBEIgkAkQgUAVgKARQgNAVgEAXQgFAZAIASQAIAUAWAEQARAFAagIQAFgCAFACQAEADACAEIAAAGIAAABQgDAWABAOQABANAHAWQAIATAKANIALAOIANANIAeAWIARAIIARAHIASAFIASADQAMACAZAAIAkgFIAjgNIAhgSIAPgLIAOgNIAbgbIAXgfIAUggIARgjQACgFAGgBQAFgCAEACQAIAEAAAIIgBARIABAQIACAQIAEAPIAGAOIAGAKIADADQAHAIADACIAGAFIAGADQAEADAKADQAEABAKABIAPgBIAPgEIAOgGIANgJIAMgKIAMgMQAGgHAJAFIAuAiIArAmIBNBWIA+BgIAtBoIAQA3IAKA4IAHA5IADA5IgCA3IgHA5IgYBuQgCAGgFgCIgBAAIAAAAIglgRIgmgPIgmgOIgngMQgngMgngIIhQgNQgvgFgigCIgpAAIgUAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(110,198,221,0.8)").s().p("AmoSQQkFhUjHi6QjAi0hnj0QA5hwB5hZQB6hZCegtQCngwCuAMQC+ANCuBSQBHjghOjeQhOjbjAiAQg3BCg/gaQhAgbAIhhQg0BzhTAxQhHAphOgQQhHgPgrg2Qgsg4AOhAQgjALgZgKQgXgKgIgaQgSg6A+hDQDwj/FUhbQFchdFXBvQDuBNC7CiQC1CcBuDWQBtDWAVDuQAWD1hNDuQhNDuihC7QidC1jWBuQjWBtjuAVQg3AFg1AAQi+AAi5g8g");
	this.shape_1.setTransform(-0.2,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119,-123.6,238.1,247.2);


(lib.Animar3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkGTAIgmgHIi6g3IhIgdQiNhBh6hiQh7hkhbh7Qhdh9g8iPQgBgEABgDQAagtATgZQAVgcAhgiIAegcQAVgSALgIIAhgZIBqg/QAlgSAmgPQBPgfBOgQIAogHIApgGIApgEIBRgEIApABQAqACAoAEIBRANQAyALAeAJIAnAMIAnAOIAmAPIAfAOIAWhnIAFg4IACg2IgEg4IgFg3IgNg3IgQg1IgVg0Ig2hiIhFhXIhRhLIgmgbIgFAGIgOAMIgQAKQgEADgFACIgJADIgSAGIgUABQgOgBgGgCQgQgFgDgCIgJgFIgHgGQgGgEgIgKIgEgEIgMgVIgDgJIgFgTIgBgFQgLASgGAJQgEAGgVAbIgcAeIgQAOIgiAXIgTAKIgoAOIgpAGQgXABgTgDIgVgEQgLgCgJgEIgUgIIgTgJIgRgMIgRgNIgcggQgKgPgKgXQgIgagBgQQgBgKABgOQgVAEgSgFQgOgDgNgLQgLgJgHgPQgLgZAGghQAGgZAPgZQAOgXAUgTIA3g2ICOhuIBBgpIBPgrIBSglIBIgbIAZgHIBjgbIAygKIBMgMIAZgCIAzgEQAegCAVAAIBlADQAXAABOALIBlATIAYAGIBKAVQCVAwCCBRQB+BQBwBxQArAvAIALIBdB7IAUAhIAUAhIAkBEIAgBHQAgBQASBCQATBCANBWIAFAmQADAXAAAQIAEBNQADCWgmCcQgDAQgGAWIgLAlQgEANgJAYIg8CPIgSAjQgeA5gzBLIhiB5QhlBviHBaQh/BTiYA0QibAziVALQguAEguAAQhxAAhngUgAoWBmIgoAFIgoAGIgoAHQhRARhKAeQgqAQggARIhoA/IggAZQgLAIgUASIgdAcQgiAjgSAaQgTAZgWAoQA9CMBbB4QBbB4B6BgQB4BgCMA9IBGAdIBtAiQAMAEAZAGIAlAIIAlAHQCPAaCdgMQCQgLCZgzQBbghAxgZIAigRIAhgSIAggUIAhgUQCFhXBhhsIBgh2QAyhHAeg6IAhhDIArhqIAMgkIALgkIAKglQAmiYAAiTIgKiXQgMhYgQg+QgPg+gghTIgehGIgihEIgTghIgUghIhZh8IgZgdIgZgdQhmhtiFhWQiAhQiVgyIhJgVIgZgGIhkgSIgzgHQgdgDgWAAIhkgCQgYgBhNAHIgZADIiWAeIhJAWIhfAkIguAVIhwA8Ih8BYIgUAQIhLBDIgjAkQgVAWgJARQgNAUgFAXQgFAYAIATQAJATAVAGQAUAEAYgIQAFgCAEADQAFACABAFIABAFIAAABQgEAWACAOQAAAOAIAVQAIATAJANIAMAOIANANIAOAMIAQAKIAQAIIAjAMIASAEQAPACAWgBIATgBIAkgJIAigQIAQgKIAPgLIAOgMQAGgFAUgXIAXgeQAHgJANgYIASgjQACgEAFgCQAFgBAFACQAHAEAAAIIAAAQIAAAQIADAQIAEAPIAGAOIAGAKIACADQAGAIAEACIAGAFIAHAEIANAFQAFACAKAAIAPgBIAOgEIAOgGQAKgFAEgDIAMgKIAMgNQAHgHAHAGIAvAiIBTBPIBFBbIA2BlIAVA1IAPA3IALA4IAHA5IACA5IgCA3IgGA4IgZBvQgBAFgFgBIgBAAIgBAAIglgRIglgPIgmgOIgngMQgagIg1gMIhQgNQgvgFgigCIgpAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(110,198,221,0.8)").s().p("AmoSQQkFhUjHi6QjAi0hnj0QA5hwB5hZQB6hZCeguQCngvCuALQC+ANCuBTQBHjghOjfQhOjbjAiAQg3BCg/gaQhAgbAIhhQg0B0hTAwQhHAqhOgRQhHgOgrg3Qgsg3AOhBQhJAXgSg5QgSg7A+hDQDwj+FUhbQFchdFXBvQDtBNC8CiQC1CcBtDWQBuDVAVDvQAWD0hNDuQhNDuiiC8QicC1jWBuQjWBtjuAVQg2AFg0AAQi/AAi6g8g");
	this.shape_1.setTransform(-0.2,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119,-123.6,238.1,247.2);


(lib.Animar2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiLWKIgsgDQiwgRirg9Qitg/iQhjQiUhmh2iFIgBAAQgCgDABgDQAKg7AMgiQAMgmAXgyIAWgqIAZgoIAbgnIA7hKIAhgiQAhgiAkgfQAkgeAmgcQAqgdAlgWIApgXIAqgWIArgUIBYgiIAtgPQAwgOArgJIBdgRQBAgHAegBIAwgCIAvABIAtACIAoAEIgDg7IgKhAIgOg+IgUg8IgWg8Igeg5Ighg3Igmg0IgqgxIgugtIgygpIhrhGIh2g0Ig0gQIgEAKQgDAGgIANIgRAVIgEAEIgIAHIgJAGIgJAGIgVAJIgLACIgLACQgSAAgFgBIgLgCIgLgDIgUgKIgFgDIgNgLIgSgUIgJgOIgGgLQgEAYgFASIgOAtQgMAdgIAOIgMAVIgNATIggAkIgmAeIgqAXIgXAHQgPAFgIABIg8AEIgNgBIgXgEIgYgFIgWgJIgWgLIgUgNQgQgLgUgWQgTgYgHgSQgFgMgEgQQgWAMgWACQgSACgQgGQgRgHgMgNQgVgXgEglQgEgcAHgiQAHgdAOgcIBdipIBgiDIBZhjIAggeIArgoIBFg5IAYgRIBhhCIAzgeIBpg1IA2gYQAggNAXgIICbgvIBlgUIBfgJIgHABIi8AhIiaAvQgXAIgfAOIg2AXIg0AbIiXBbIhGA0IhDA5IgqAoIggAfIh6CSIg5BUIgHANIgdAzIgPAZIgMAaIgaA1QgOAegFAXQgGAfAEAXQAEAfAQAQQARATAagDQAWgCAZgSQAEgDAFAAQAFABADAEIACAFIABABQADAZAIAPQAGAOAQAWQARASAOAKIASAMIAUAJIAUAIIAVAFIAVADIALABIAVAAIAggEQARgDAZgJIATgJIAkgYIAggeIANgRIANgSQAFgHAGgLQAFgJAOgfIANgqIAKgsIAGgsQABgFAEgEQAEgDAFABQAIABADAIIAFASIAHASQAGAMADAEIAHAMIAJAKIAQAPIAEACQAMAHAEABIAIADIAIACIASAAIAIgBIAJgCIAQgGIAHgFIAIgFIAKgJIAOgSIAKgQIAIgRIAAgBQAFgJAJADIA/AUIB4A2IA4AjIA1AmIAyArIAvAvIAqAyIAmA2IAiA4IAdA7IAWA9IATA9IAOBAIAJBBIAEBCQABAFgGABIgBAAIgvgFIgtgCQgUgCgaABIgvABQgfABg+AHIhdAQQg7ANgfAKIgtAPIgWAHIhrAvQgiAQgIAFIgoAXQgjAVgsAfQgpAeggAcQglAfgfAhQgWAWgKAMIg6BJIgaAnIgYAoIgVApQgXAxgLAmQgNAkgHAyQB4CECPBfQCNBgCsA9QCmA6CwAQIAsACIAWACIAWAAICBgCICugXIBVgTIAqgMIAqgNIApgOIApgPIApgRQAKgEAegPIAngTIAmgUIAmgWICRhjQBWhFAtgvQARgRArguIAcghIAcgiQBxiTBCiZIARgoIArh8QAbhiAMhJIAGgrIAFgsIAHisQgCg7gDgdQgQi3g4ifIhDiiQgvhcgog8QgqhBhAhMIgdghIgeggIg/g8IghgeIiMhqIhyhEQiahRivgrQiugoiuACIhnAGIBmgJQCxgDCtAnQCqAoCiBSICrBnIBYBEQAUAQAOANIBAA9QAQAOAtAyQBDBNAqBAQArA9AxBcIBGCkQA8CkARC4QAEAeACA7IAAArIgBAsIgLCGIgGAsQgMBNgbBhIg+CoQhDCfhzCUQhsCLiRBxIg2AoIheA8QgOAJhBAiIgoATIgpATIgpARIgqAPIgqAPIgrANIgrALIgrALIiEAXIgtAEIgtAEIiDACIgtgDg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(219,239,244,0.8)").s().p("ApyULQkVh7jLjkQAViQBiiNQBjiQCbhsQCkhyDCg1QDUg5DaAZQgFkPiojVQinjRkBhEQgRAsgfAXQgfAWgigCQhQgFgchsQgNCRhIBTQg+BIhbAMQhTAKhDgrQhFgsgKhLQghAZgfgDQgdgBgSgZQgqg4ArhhQCnlvFPjiQFYjnGhgIQEegGEJBqQEABmDHDBQDIDABwD7QB0EFAFEgQAGEdhrEJQhmEAjADIQjBDHj7BwQkFB0keAGIgcAAQksAAkSh7g");
	this.shape_1.setTransform(-0.2,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.5,-142.1,275.1,284.2);


(lib.Animar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAFQgHgFAHgGQADgDAEAHQAHAEgDADQgDADgDAAQgCAAgDgDg");
	this.shape.setTransform(-10.6,-66.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGAHQgNgLAFgGQAGgFAHAAQAGAAAFAFQAGAGAAAFQAAAIgGAFQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgFAAgIgJg");
	this.shape_1.setTransform(-8.2,-69.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCADQgFgDAFgEQACgCACAFQAFACgCACQgCACgDAAQAAAAgCgCg");
	this.shape_2.setTransform(-35.6,-65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEAFQgJgHAEgEQAEgEAFAAQADAAAEAEQAEAEAAADQAAAFgEAEIgDABQgDAAgFgGg");
	this.shape_3.setTransform(-33.9,-66.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FEF6B2","#DAD29A"],[0,1],-4.1,0,4.3,0).s().p("AghANIgGgdQAPgXAYgDQAWgEASARQgBAggVAWQgRATgNAAQgNAAgIgfg");
	this.shape_4.setTransform(-4.3,-48.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FEF6B2","#DAD29A"],[0,1],-4.8,0,4.4,0).s().p("AgWAWQgOgVgBggQAogUAjAlQgCAggfAVQgPAAgMgRg");
	this.shape_5.setTransform(-36.3,-46.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DAD29A").s().p("AgzAXIgHgfQAKgjAwgJQAvgJAMAcQgSAtgcAZQgUATgSAAQgPAAgLghg");
	this.shape_6.setTransform(-3.1,-48.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DAD29A").s().p("AgBAxQgYgCgRgsIgLgqQAZgQAhAMQAmAMAMAgQgFANgJAMQgSAXgWAAIgCAAg");
	this.shape_7.setTransform(-35.9,-47);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DDB698").s().p("AhnhDQBjAJA+A1QAxAmgDAUQgCALhrAEQgPhWhTgxg");
	this.shape_8.setTransform(28.9,7.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6D5A4C").s().p("Ag6AtQgJAAhigeQhRgYghAOIgXgHIAkgNQArgKAjAMQAKADA4AZQAhAQAkgCQAhgCBBgbQBOgeAdgGQAsgKA6ADQAdACAUAEIgWAXQgLgIgVgGQgqgKgyAQQgTAFhnAlQhBAZgbAAIgBAAg");
	this.shape_9.setTransform(-17.6,-52.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6D5A4C").s().p("AhAAfQgKgfAAgVQAWgaApgMQAlgLAxAFQgVBMglAhQgXAXgcAAQgRAAgNgkg");
	this.shape_10.setTransform(-2.6,-49.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6D5A4C").s().p("Ag3APQgQgnAFgiQA1gGBRAwQgHAcgQAUQgVAcgcAAQggAAgTgtg");
	this.shape_11.setTransform(-35.4,-47.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#02A1B8").s().p("Ag+AOIgJgpQBYgqA3AVQgWA1glAdQgXAUgZACIgBAAQgOAAgMgqg");
	this.shape_12.setTransform(-1.5,-47.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#02A1B8").s().p("AgjAcQgPgNgIgTIAYgkIBdAdQgIALgMAMQgXAbgQACIgEAAQgRAAgOgNg");
	this.shape_13.setTransform(-34,-45.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#02A1B8").s().p("AiUAdQhZgfgXAGIgBgcQAcgSBJAZQBZAbAjgBQAZgBArgPIBSgfQBmgmAmAbIAIAYQgzgFhvAqQh3AvgMABIgEABQgaAAhXggg");
	this.shape_14.setTransform(-18.3,-49.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6D5A4C").s().p("AhKBLQhGgDhNgrIg9gpIgXASIgKgUIAOgLQgEgEgBgGQgEgLAJgGQAHgFBAA5QBQA9BIgDQBOgEBYgoQAugTBMgvQAngXAWABQALABAEAFIgOAJIAsA5IhMgrQgzAghAAcQh9A8hGAAIgEAAg");
	this.shape_15.setTransform(-15,-32);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#65C1CB","#02A1B8"],[0,1],-32.4,0,25.2,0).s().p("AjaAqIhGg5IBYgbQBsgdBggIIDNgPQBWACgGAwQg7AhhJAgQiTBEhGAGIgNAAQhDAAhOg1g");
	this.shape_16.setTransform(-16.1,-34.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#F0C5A4","#DDB698"],[0,1],-8.5,-3.5,8.6,13.6).s().p("AAfBFIjCAAQhpgBgCgGQgBgFAZgVQAdgZAngUQBxhABrAFQBsAEBHA3QAYARAPAWQAMARgBAGQgBAJhKAEQgyADhAAAIgzAAg");
	this.shape_17.setTransform(12.2,7.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6D5A4C").s().p("AkiBFQgBgQATgNQAYgQAvACQAegOBHg3QBIgwBEAKQBzAEBNA+QA7AuAAAeQAAAVkjACIgfAAQkBAAgCgPg");
	this.shape_18.setTransform(12.3,7.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#F0C5A4","#DDB698"],[0,1],-16.7,-22.3,16.4,10.8).s().p("AgzC/QhXgShUhDQhOg+gBhZQgBhCAhguQAVgdA4gJQA1gIAzANIBAAQQAYAABygSQB0gSArApQAgAfgDBMQgDBJg1BPQg7BZhMAMQguAIgpAAQgnAAgkgIg");
	this.shape_19.setTransform(-20.4,-8.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#DDB698").s().p("AjCDOQiIhFgdhnQgYhSAvhSQAlg/BmghQBUgbBxgEQBEgBAogIQAXgCBNAcQBVAfAiAqQAlAtAEBVQAEBahCBAQg3A2hzArIhSAjQglAQgWACIgKABQg6AAh5g+g");
	this.shape_20.setTransform(-15.8,-13.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6D5A4C").s().p("Ai1DvQh1g4g1hRQg/hgAthrQAqhlCBgpQBGgWCAgHQB6gGAuAGQBnAPBABGQBJBSgaB2QgbB4hsA+QiPBRh7AAQhVAAhNglg");
	this.shape_21.setTransform(-15.8,-13);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#02A1B8").s().p("AgNB0IhCivQAFgaALgaIArgLQASA2AZAnIAnAvQARAVAAASQABAXgUApIgDACg");
	this.shape_22.setTransform(9.3,-42.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DDB698").s().p("Ah3hGIAWgBQBMAfAyAZIBFAqQAhAYgRAIQgXAMh/ABQgQhKhDhEg");
	this.shape_23.setTransform(-35.7,7.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#65C1CB","#02A1B8"],[0,1],-33.5,0,24.1,0).s().p("AgOCkQiOgDh9hWQgggcgGgQQgGgNAIgSQAOgjADgLQAJgmgDg0QAbgQBKAYQBZAcAjgCQAygCB8geQA/gPA1gOQASA2AbAnIAnAxQARAVAAAQQABAXgUApQioBUiNAAIgIAAg");
	this.shape_24.setTransform(-15,-38);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#6D5A4C").s().p("AkqBoQgogggGgXQgEgRAOgZQAUgiAFgPQAMgmgKgxQAlgSBUAYQBkAdATAAQAWgBBpgkQBrgjBLgBQAFAwAZAkQAFAHApArQAZAaADAXQAEAigbA2Qi0BBiaAAQibAAiEhBg");
	this.shape_25.setTransform(-15.5,-39.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#DDB698").s().p("AASCoQAmgdAJgmQAJgkgRghQgQgggjgQQgjgSgtAGQgChMgbhRQAzAiAYA7QAJAXAGAcQAqgFAfATQAdATAKAhQAXBPhPBSg");
	this.shape_26.setTransform(7.1,-65.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["#CAA78C","#8E7664"],[0,1],-5.4,-5.4,0,-5.4,-5.4,8.9).s().p("AgWAXQgKgJAAgOQAAgMAKgKQAKgKAMAAQAOAAAJAKQAKAKAAAMQAAAOgKAJQgJAKgOAAQgMAAgKgKg");
	this.shape_27.setTransform(-33.9,-65.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["#CAA78C","#8E7664"],[0,1],-6.9,-7.7,0,-6.9,-7.7,10.4).s().p("AggAhQgOgOAAgTQAAgSAOgNQAOgPASAAQATAAAOAPQAOANAAASQAAATgOAOQgOAOgTAAQgSAAgOgOg");
	this.shape_28.setTransform(-7.8,-67.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#6D5A4C").s().p("AgeAfQgNgNAAgSQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAASgNANQgNANgSAAQgRAAgNgNg");
	this.shape_29.setTransform(-33.9,-65.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#6D5A4C").s().p("AgoApQgSgRAAgYQAAgXASgRQARgSAXAAQAYAAARASQASARAAAXQAAAYgSARQgRASgYAAQgXAAgRgSg");
	this.shape_30.setTransform(-7.8,-67.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#F0C5A4","#DDB698"],[0,1],-10,-1.9,10.6,18.7).s().p("AkUDUQhFhCAJhAQAIg9BEgVQAChcBFhAQA/g6BagLQBZgLBGAsQBOAwASBjQAtgEAfAUQAeAUAJAiQAVBUhYBTQjCAkibAAQhpAAhZgQg");
	this.shape_31.setTransform(-16.3,-65.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#6D5A4C").s().p("AllBeQgBhNBJgWQAKhgBJhBQBDg8BegNQBegMBMArQBVAwAcBlQBmAJANBXQAMBbhfBTIoZAgQhchEgChRg");
	this.shape_32.setTransform(-16.3,-65.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#02A1B8").s().p("AgsAtQgTgTAAgaQAAgZATgTQATgTAZAAQAaAAATATQATATAAAZQAAAagTATQgTATgaAAQgZAAgTgTg");
	this.shape_33.setTransform(12.3,-47.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#6D5A4C").s().p("Ag4A4QgXgXAAghQAAggAXgYQAYgXAgAAQAhAAAYAXQAYAYAAAgQAAAhgYAXQgYAZghAAQggAAgYgZg");
	this.shape_34.setTransform(12.3,-47.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#02A1B8").s().p("ABgAYQAtgeAmgUQAXARAVAUQgvAZgtAqQgMgbgXgbgAgDgVQhhAGgcgEQhJgIgVgyQA2AgBEAAQA2gBBQgVQAqgMAvAUQgiAXggAeQgdgRgfACg");
	this.shape_35.setTransform(39.5,-28.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#65C1CB","#02A1B8"],[0,1],0,-14.7,0,1.2).s().p("ABBA7QBRg7BSgcQATAXARAXQhWAVhOBKQgMgcgXgagAgiAMQh0AHgkgKQhTgUAHhjQAyAoAiAHQAwAKBOgfQBDgcAzABQA/AAA0AnQhHAXhUBLQgbgQghACg");
	this.shape_36.setTransform(42.6,-32.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#6D5A4C").s().p("ABTCDQgCgKgGgOQgLgcgQgSQBchNBcgXQAhAnAUAjQhNAShqBOgAgHAiQhSACgrgBQhPgEgdgdQgdgagKgwIgFgrIAmgPIAgAdQAoAcAogHQAhgGBYgdQBTgXA2APQAqANAtAvQhbAZhcBTQgQgLgTAAg");
	this.shape_37.setTransform(42.5,-32.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#CAA78C").s().p("AgBA6IhVgZIgPgqIAlguIAPgDQASgCATgCQgBAbAIAUQAGARAjAXQAVAOAtAXg");
	this.shape_38.setTransform(24.7,-1.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#DDB698").s().p("AAVA9IhNgEIhVgZIgPgqIAlguIA/gGQBIgCA2AYQA9AcATAkQATAmgkABIgWAAQgfAAg7gCg");
	this.shape_39.setTransform(30.2,-1.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#6D5A4C").s().p("AgnBSQhmgDgSgTQgTgVAFgnQAEgmAQgUQAPgSAsgEQAwgFBBAPQBDAOAyAvQApAlgCAWQgDAdhMACIhoABIgfAAg");
	this.shape_40.setTransform(31,-1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#F0C5A4","#DDB698"],[0,1],-8.4,-4.3,4,8.1).s().p("Ai1A5QhCgNAagbQAMgNBBghQAogVAxgMQAtgKAfABQAfABATAIQAQAIAaAVQARAOA/AkQAzAggUAKQgaANiWABQiZAAhMgQg");
	this.shape_41.setTransform(-46.7,7.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#6D5A4C").s().p("AAABYQj7gBAAgqQAAgVAtgeQAtggA+gXQCfg6BSBGQArAkA6AlQAIAFABAFIgBATQgBARhPAKQhEAIheAAIgJAAg");
	this.shape_42.setTransform(-46.3,7.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#02A1B8").s().p("AAqBJQhLgFgegQIg8gvQgngdgwgIQgvgHgfARIgJAEQAog4BGADQBHACBGA+QAkAeAzAEQAzADA2gWIAYArQg3AXg4AAIgRgBgADOgZQAegVAXgbQASANAVAOQgZAfgiAZg");
	this.shape_43.setTransform(49.9,-51.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#65C1CB","#02A1B8"],[0,1],0,-9.1,0,5.1).s().p("ABBB2QhLgFgfgQIg8gvQgmgfgxgIQgugIggARIg1AcQACgXAIgZQARg1AhgUQArgbAogBQAugBBCAdQBJAgBKgSQBGBNAnBNQg2AXg4AAIgRAAgACJhRQAYgOATgWQAvA2BdA9QgZAeghAag");
	this.shape_44.setTransform(47.6,-55.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#6D5A4C").s().p("Ag1BuIhOgzQgpgagjgCQgngCgtAaQgqAYgDgNQADgjABghQADg1A4gkQA6glBDAMQAvAJArAVQAkARAbABQAtACAigKQBBBPA4BjQg+Ahg6ABIgJAAQhNAAg0gagACwgNQg0g9gIgQQAmgYAMgVIAUAFQAWAfAoAhQAfAZA6AmQggAkgyAlQgZgUg2g/g");
	this.shape_45.setTransform(48.1,-55.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#6D5A4C").s().p("ABKCMQgDgQgGgNQgKgagQgRIgFgGIAGgGQBdhOBfgZIAFgBIADAEQAiAoAUAkIAGAKIgLACQhMAShpBMIgCACgAAVA1QgQgKgOAAIg8AAQgqACgYgBQhTgEgegfQgfgcgLgzQgEgQgBgTIAAgPIAygTIADAFIAfAbQAlAaAlgHQASgDAlgMQAvgPASgEQBUgYA5AQQArANAwAwIAJAKIgOAEQhXAZhcBSIgEAEg");
	this.shape_46.setTransform(42.7,-32.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#6D5A4C").s().p("Ag6B2QgTgJgYgRIgkgaQgngZghgBQgkgCgsAZQgZAOgKADQgSAEgEgQIgBgMIACgQIADgqQADg6A8gmQA9gmBGANQAyAJAqAVQAUAKAIACQAOAFARAAQAsACAggKIAGgCIADAFQBEBSA2BhIAEAHIgHAEQhBAjg6ABIgJAAQhRAAg0gbgAD4BNQgZgUg3hAQg0g+gKgRIgDgHIAGgEQAkgUANgWIACgFIAdAIIACACQAVAeAnAgQAgAZA5AlIAIAFIgGAFQghAngzAmIgFAEg");
	this.shape_47.setTransform(48.3,-55.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#6D5A4C").s().p("AA5IXQhagEgUgIQgjABgkgFQgoAKhRAFQhMAEhRgDQhbgEgxgKQgdgFgQgHQgVgKAAgOQAAgfBDgqQBCgpBPgSQhIhnAwh1QAQgoAgggQgSgTgDgRQgDgPAHgPIARggQALgSAEgQQg/hBAHhGQAHhEBBgYQALhgBLhBQBFg9BggOQBfgNBOArQBWAwAfBnQBLAIAdA5QAcA3gdBGQAWAYAAAiQAAAlgZAaQAMATACAVQACAWgMAgQAjAsAKA6QAKA3gQA6QAsgBA7AMQBFAPAzAwQAtAqgDAaQgCAUgZAKQgVAIgoABIgRAAQAQASAJAQQAJAQAAAJQAAAEgFAFIgHADQgGADgNACQgbAEgmADQhPAFh1ABIgfABQhaAAhDgDg");
	this.shape_48.setTransform(-11.4,-36.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgfINQjkgJizgPQi7gQgRgNQgjgagimGQghmCAYgjQAiguChgwQDYhBE1gIQEvgHDfBWQBRAgA5AmQAuAgAOAWQAYAlg7F4Qg7F9grAqQgaAaj3AAQiLAAjOgIg");
	this.shape_49.setTransform(-9.9,37.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.1,-90.7,166.3,181.4);


// stage content:
(lib.lamorsacabecera = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Animar2("synched",0);
	this.instance.setTransform(263.3,606.5,1,1,45,0,0,0.1,198);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,rotation:0,x:183.3},15,cjs.Ease.get(-0.99)).to({regX:-0.1,rotation:-45,x:103.3},15,cjs.Ease.get(-1)).wait(21));

	// Capa 2
	this.instance_1 = new lib.Animar3("synched",0);
	this.instance_1.setTransform(-107.1,584.7,1,1,45,0,0,0,188);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({rotation:0,x:-187},15,cjs.Ease.get(-0.99)).to({regY:187.9,rotation:-42.2,x:-267,y:584.6},15,cjs.Ease.get(-1)).wait(16));

	// Capa 3
	this.instance_2 = new lib.Animar4("synched",0);
	this.instance_2.setTransform(898.4,604.9,1,1,54,0,0,0.1,265.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).to({regX:0,rotation:0,x:818.3,y:604.8},15,cjs.Ease.get(-0.99)).to({rotation:-52.2,x:738.3},15,cjs.Ease.get(-1)).wait(11));

	// Capa 4
	this.instance_3 = new lib.Animar5("synched",0);
	this.instance_3.setTransform(654.7,640.8,1,1,45,0,0,0.1,253.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({_off:false},0).to({regX:0,rotation:0,x:574.7,y:640.7},15,cjs.Ease.get(-0.99)).to({rotation:-40.5,x:494.7},15,cjs.Ease.get(-1)).wait(6));

	// Capa 5
	this.instance_4 = new lib.Animar6("synched",0);
	this.instance_4.setTransform(455.7,581.9,1,1,50,0,0,0,237.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20).to({_off:false},0).to({rotation:0,x:375.7},15,cjs.Ease.get(-0.99)).to({regY:238,rotation:-49.2,x:295.8,y:582},15,cjs.Ease.get(-1)).wait(1));

	// Capa 1
	this.instance_5 = new lib.Animar1("synched",0);
	this.instance_5.setTransform(500,259.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:267.7},30,cjs.Ease.get(1)).to({y:259.7},20,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(607.7,328,325.5,436.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;