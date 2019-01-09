(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"idex_atlas_", frames: [[0,502,600,500],[0,1506,600,500],[0,0,600,500],[0,1004,600,500]]}
];


// symbols:



(lib.S8PNG = function() {
	this.spriteSheet = ss["idex_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.S8PNG_heart = function() {
	this.spriteSheet = ss["idex_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.S8PNG_LINEpngcopy = function() {
	this.spriteSheet = ss["idex_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.S8PNGBOX = function() {
	this.spriteSheet = ss["idex_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACEBwIAbhDIg1h5IAgAAIAkBWIAihWIAfAAIhNC8gAiFAyQgMgEgJgJQgJgJgFgMQgGgMAAgPQAAgRAGgMQAFgNAJgJQAJgIALgEQAMgFAMAAQANAAALAFQALAFAHAIIAAgPIAeAAIAACAIgeAAIAAgRQgHAJgLAGQgLAEgNAAQgMABgLgFgAh5gwQgHACgFAGQgFAFgDAHQgDAIAAAIQAAAJADAGQADAHAFAFQAFAGAHADQAHAEAJgBQAIABAHgEQAHgDAFgGQAFgFAEgHQACgHAAgIQAAgIgCgIQgEgHgFgFQgFgFgHgDQgHgEgIAAQgJAAgHAEgAlIAyQgMgEgJgJQgJgJgFgMQgGgMAAgPQAAgRAGgMQAFgNAJgJQAJgIALgEQAMgFAMAAQANAAALAFQALAFAHAIIAAgPIAeAAIAACAIgeAAIAAgRQgHAJgLAGQgLAEgNAAQgMABgLgFgAk8gwQgHACgFAGQgFAFgDAHQgDAIAAAIQAAAJADAGQADAHAFAFQAFAGAHADQAHAEAJgBQAIABAHgEQAHgDAFgGQAFgFAEgHQACgHAAgIQAAgIgCgIQgEgHgFgFQgFgFgHgDQgHgEgIAAQgJAAgHAEgAG6ApQgPgOAAgXQAAgMAFgJQAFgKAKgGQgHgGgEgIQgEgIAAgKQAAgKAEgIQAEgJAHgGQAHgGAKgEQAJgCAMAAQAMAAAKACQAJAEAHAGQAHAGAEAJQAEAIAAAKQAAALgEAHQgFAJgHAFQAKAGAFAKQAFAJAAAMQAAAXgPAOQgQANgbAAQgcAAgOgNgAHPgMQgHAHAAAJQAAAKAHAHQAGAGAPAAQAOAAAIgGQAHgHAAgKQAAgJgHgHQgHgHgOAAQgOAAgIAHgAHShPQgGAGAAAIQAAAJAGAGQAGAGAMgBQANABAHgGQAGgGAAgJQAAgIgGgGQgHgGgMAAQgMAAgHAGgAFBAuQgPgJgLgMIAcgVQAGAKAJAGQAJAFALAAQAGAAAFgBQAEgCAEgDQADgDABgEIACgIQAAgFgDgDQgDgDgFgDIgKgEIgdgKQgIgDgHgFQgGgGgFgIQgEgHAAgMQAAgJAEgJQAEgIAIgHQAHgFAJgEQAKgDAMAAQAKgBAHACIAPAFQAGADAGAEIAKAKIgZATQgKgQgTAAQgLAAgGAFQgFAFAAAJQAAAFACADQADADAEACIAoAPQAIADAHAGQAHAFAEAJQAEAHAAALQAAAJgEAKQgDAIgHAIQgIAGgKAFQgKAEgOAAQgVAAgQgIgAnrAwQgQgHgLgLQgLgMgGgPQgGgOAAgRQAAgRAGgPQAHgQAKgKQALgLAQgHQAPgGASAAQAMAAALACQALADAKAGQAJAGAIAHQAHAIAFAIIgbAQQgHgOgMgGQgLgIgQAAQgLABgKAEQgKAEgHAIQgHAHgEAKQgEAJAAALQAAALAEAKQAEAJAHAHQAHAIAKAEQAKAEAMAAQASAAAMgKQAMgJAFgPIg0AAIAAgdIBUAAIAAAMQAAARgGAOQgFAOgKALQgLALgOAHQgPAGgSAAQgTAAgPgGgABFA0IgfgrIgfArIgkAAIAwhBIgug/IAkAAIAdApIAdgpIAkAAIgvBAIAyBAgAjZA0IAAiiIAeAAIAACig");
	this.shape.setTransform(-37.5,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.6,-8.6,108.4,22.3);


(lib.Tween19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACEBwIAbhDIg1h5IAgAAIAkBWIAihWIAfAAIhNC8gAiFAyQgMgEgJgJQgJgJgFgMQgGgMAAgPQAAgRAGgMQAFgNAJgJQAJgIALgEQAMgFAMAAQANAAALAFQALAFAHAIIAAgPIAeAAIAACAIgeAAIAAgRQgHAJgLAGQgLAEgNAAQgMABgLgFgAh5gwQgHACgFAGQgFAFgDAHQgDAIAAAIQAAAJADAGQADAHAFAFQAFAGAHADQAHAEAJgBQAIABAHgEQAHgDAFgGQAFgFAEgHQACgHAAgIQAAgIgCgIQgEgHgFgFQgFgFgHgDQgHgEgIAAQgJAAgHAEgAlIAyQgMgEgJgJQgJgJgFgMQgGgMAAgPQAAgRAGgMQAFgNAJgJQAJgIALgEQAMgFAMAAQANAAALAFQALAFAHAIIAAgPIAeAAIAACAIgeAAIAAgRQgHAJgLAGQgLAEgNAAQgMABgLgFgAk8gwQgHACgFAGQgFAFgDAHQgDAIAAAIQAAAJADAGQADAHAFAFQAFAGAHADQAHAEAJgBQAIABAHgEQAHgDAFgGQAFgFAEgHQACgHAAgIQAAgIgCgIQgEgHgFgFQgFgFgHgDQgHgEgIAAQgJAAgHAEgAG6ApQgPgOAAgXQAAgMAFgJQAFgKAKgGQgHgGgEgIQgEgIAAgKQAAgKAEgIQAEgJAHgGQAHgGAKgEQAJgCAMAAQAMAAAKACQAJAEAHAGQAHAGAEAJQAEAIAAAKQAAALgEAHQgFAJgHAFQAKAGAFAKQAFAJAAAMQAAAXgPAOQgQANgbAAQgcAAgOgNgAHPgMQgHAHAAAJQAAAKAHAHQAGAGAPAAQAOAAAIgGQAHgHAAgKQAAgJgHgHQgHgHgOAAQgOAAgIAHgAHShPQgGAGAAAIQAAAJAGAGQAGAGAMgBQANABAHgGQAGgGAAgJQAAgIgGgGQgHgGgMAAQgMAAgHAGgAFBAuQgPgJgLgMIAcgVQAGAKAJAGQAJAFALAAQAGAAAFgBQAEgCAEgDQADgDABgEIACgIQAAgFgDgDQgDgDgFgDIgKgEIgdgKQgIgDgHgFQgGgGgFgIQgEgHAAgMQAAgJAEgJQAEgIAIgHQAHgFAJgEQAKgDAMAAQAKgBAHACIAPAFQAGADAGAEIAKAKIgZATQgKgQgTAAQgLAAgGAFQgFAFAAAJQAAAFACADQADADAEACIAoAPQAIADAHAGQAHAFAEAJQAEAHAAALQAAAJgEAKQgDAIgHAIQgIAGgKAFQgKAEgOAAQgVAAgQgIgAnrAwQgQgHgLgLQgLgMgGgPQgGgOAAgRQAAgRAGgPQAHgQAKgKQALgLAQgHQAPgGASAAQAMAAALACQALADAKAGQAJAGAIAHQAHAIAFAIIgbAQQgHgOgMgGQgLgIgQAAQgLABgKAEQgKAEgHAIQgHAHgEAKQgEAJAAALQAAALAEAKQAEAJAHAHQAHAIAKAEQAKAEAMAAQASAAAMgKQAMgJAFgPIg0AAIAAgdIBUAAIAAAMQAAARgGAOQgFAOgKALQgLALgOAHQgPAGgSAAQgTAAgPgGgABFA0IgfgrIgfArIgkAAIAwhBIgug/IAkAAIAdApIAdgpIAkAAIgvBAIAyBAgAjZA0IAAiiIAeAAIAACig");
	this.shape.setTransform(-37.5,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.6,-8.6,108.4,22.3);


(lib.Tween18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgsE5QgQgGgMgNQgOgMgHgSQgIgSAAgWQAAgXAIgSQAHgSANgMQAMgMARgGQAQgHASAAQARAAAQAHQAPAHAKAMIAAgWIAqAAIAAC4IgqAAIAAgZQgKAOgQAHQgPAIgSgBQgRABgQgHgAgaCrQgKAFgIAHQgHAHgEALQgFAKAAAMQAAAMAFAKQAEALAHAIQAIAHAKAFQAKAEAMAAQALAAAKgEQAKgEAIgJQAGgHAFgLQAEgKAAgMQAAgMgEgKQgFgKgGgIQgIgHgKgFQgKgFgLAAQgMAAgKAFgAm3E4QgQgIgNgNQgNgMgIgSQgHgRAAgUQAAgUAHgRQAIgSANgNQANgNAQgHQASgIAUAAQATAAASAIQARAHAOANQANANAGASQAIARAAAUQAAAUgIARQgGASgNAMQgOANgRAIQgSAIgTgBQgUABgSgIgAmnCsQgJAFgHAHQgHAIgEAKQgEAKgBAMQABALAEAKQAEALAHAHQAHAIAJAEQALAEALABQALgBAKgEQAKgEAHgIQAHgHAEgLQAFgKgBgLQABgMgFgKQgEgKgHgIQgHgHgKgFQgKgEgLAAQgLAAgLAEgAKLE8IAAh6Ig6BEIg6hCIAAB4IgpAAIAAi4IAnAAIA8BIIA+hIIAmAAIAAC4gAGsE8IAAh6IhTB6IgqAAIAAi4IApAAIAAB2IBRh2IAsAAIAAC4gADsE8IAAhJIhQAAIAABJIgpAAIAAi4IApAAIAABHIBQAAIAAhHIArAAIAAC4gAieE8Igtg+IgrA+Ig0AAIBEheIhChaIA0AAIApA6IAqg6IAzAAIhDBbIBHBdgAorE8IhAhJIgPAAIAABJIgqAAIAAi4IAqAAIAABHIANAAIBAhHIAzAAIhQBZIBTBfgAgJASIAmheIhKiuIAtAAIAyB8IAwh8IAtAAIhuEMgAj0ARIAAkLIAqAAIAAAZQAKgOAPgIQAQgHASAAQARAAARAGQARAHAMAMQAMANAIARQAIASAAAXQAAAWgIASQgIASgNAMQgMAMgQAHQgRAGgRABQgSAAgQgIQgPgGgKgMIAABpgAirjTQgKAFgIAHQgHAIgDALQgFAJAAAMQAAAMAFALQADAKAHAIQAIAHAKAFQAKAFAMgBQAMABAKgFQAKgEAHgIQAHgIAFgKQAEgLAAgMQAAgMgEgKQgFgKgHgIQgHgHgKgFQgKgFgMABQgMgBgKAFgAn+gYIAAgrIiTAAIAAArIgoAAIAAhTIAXAAIBEi8IAtAAIBEC8IAXAAIAABTgAoZhqIgviFIguCFIBdAAgAI2hGQgSgHgOgNQgMgNgHgSQgHgRAAgUQAAgUAHgSQAHgRAOgNQANgNARgIQARgHAUAAQAUAAASAHQARAHANANQAMANAIARQAHARAAAUIAAARIiWAAQAEATAPAMQAPAMAXAAQASAAANgIQANgKAHgPIAjAUQgMAYgWANQgVAOgfAAQgWAAgRgIgAKPizQgFgSgNgKQgOgJgUAAQgTAAgOAKQgOAKgGARIBpAAIAAAAgAmUhFQgQgHgMgMQgOgMgHgSQgIgSAAgWQAAgXAIgSQAHgRANgNQAMgMARgHQAQgGASAAQASAAAQAHQAPAHAKALIAAgVIAqAAIAAC3IgqAAIAAgXQgKANgQAHQgPAIgTAAQgRgBgQgGgAmCjTQgKAFgIAHQgHAIgEAKQgFAKAAAMQAAAMAFALQAEAKAHAIQAIAIAKAEQAKAFAMgBQAMABAKgFQAKgFAIgHQAGgIAFgKQAEgLAAgMQAAgMgEgJQgFgLgGgIQgIgHgKgFQgKgFgMABQgMgBgKAFgAGOhDIAAiQIg5AAIAAgnICdAAIAAAnIg5AAIAACQgAEahDIAAh5IhSB5IgqAAIAAi3IApAAIAAB2IBRh2IAsAAIAAC3gADdkMQgLgEgGgIQgIgHgDgKQgDgKAAgMIAdAAQAAAPAHAHQAGAIAMAAQANAAAGgIQAHgHAAgPIAdAAQABAMgEAKQgDAKgHAHQgHAIgKAEQgKADgPAAQgNAAgKgDg");
	this.shape.setTransform(0.5,-9.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.3,-41.1,139.6,63.9);


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgsE5QgQgGgMgNQgOgMgHgSQgIgSAAgWQAAgXAIgSQAHgSANgMQAMgMARgGQAQgHASAAQARAAAQAHQAPAHAKAMIAAgWIAqAAIAAC4IgqAAIAAgZQgKAOgQAHQgPAIgSgBQgRABgQgHgAgaCrQgKAFgIAHQgHAHgEALQgFAKAAAMQAAAMAFAKQAEALAHAIQAIAHAKAFQAKAEAMAAQALAAAKgEQAKgEAIgJQAGgHAFgLQAEgKAAgMQAAgMgEgKQgFgKgGgIQgIgHgKgFQgKgFgLAAQgMAAgKAFgAm3E4QgQgIgNgNQgNgMgIgSQgHgRAAgUQAAgUAHgRQAIgSANgNQANgNAQgHQASgIAUAAQATAAASAIQARAHAOANQANANAGASQAIARAAAUQAAAUgIARQgGASgNAMQgOANgRAIQgSAIgTgBQgUABgSgIgAmnCsQgJAFgHAHQgHAIgEAKQgEAKgBAMQABALAEAKQAEALAHAHQAHAIAJAEQALAEALABQALgBAKgEQAKgEAHgIQAHgHAEgLQAFgKgBgLQABgMgFgKQgEgKgHgIQgHgHgKgFQgKgEgLAAQgLAAgLAEgAKLE8IAAh6Ig6BEIg6hCIAAB4IgpAAIAAi4IAnAAIA8BIIA+hIIAmAAIAAC4gAGsE8IAAh6IhTB6IgqAAIAAi4IApAAIAAB2IBRh2IAsAAIAAC4gADsE8IAAhJIhQAAIAABJIgpAAIAAi4IApAAIAABHIBQAAIAAhHIArAAIAAC4gAieE8Igtg+IgrA+Ig0AAIBEheIhChaIA0AAIApA6IAqg6IAzAAIhDBbIBHBdgAorE8IhAhJIgPAAIAABJIgqAAIAAi4IAqAAIAABHIANAAIBAhHIAzAAIhQBZIBTBfgAgJASIAmheIhKiuIAtAAIAyB8IAwh8IAtAAIhuEMgAj0ARIAAkLIAqAAIAAAZQAKgOAPgIQAQgHASAAQARAAARAGQARAHAMAMQAMANAIARQAIASAAAXQAAAWgIASQgIASgNAMQgMAMgQAHQgRAGgRABQgSAAgQgIQgPgGgKgMIAABpgAirjTQgKAFgIAHQgHAIgDALQgFAJAAAMQAAAMAFALQADAKAHAIQAIAHAKAFQAKAFAMgBQAMABAKgFQAKgEAHgIQAHgIAFgKQAEgLAAgMQAAgMgEgKQgFgKgHgIQgHgHgKgFQgKgFgMABQgMgBgKAFgAn+gYIAAgrIiTAAIAAArIgoAAIAAhTIAXAAIBEi8IAtAAIBEC8IAXAAIAABTgAoZhqIgviFIguCFIBdAAgAI2hGQgSgHgOgNQgMgNgHgSQgHgRAAgUQAAgUAHgSQAHgRAOgNQANgNARgIQARgHAUAAQAUAAASAHQARAHANANQAMANAIARQAHARAAAUIAAARIiWAAQAEATAPAMQAPAMAXAAQASAAANgIQANgKAHgPIAjAUQgMAYgWANQgVAOgfAAQgWAAgRgIgAKPizQgFgSgNgKQgOgJgUAAQgTAAgOAKQgOAKgGARIBpAAIAAAAgAmUhFQgQgHgMgMQgOgMgHgSQgIgSAAgWQAAgXAIgSQAHgRANgNQAMgMARgHQAQgGASAAQASAAAQAHQAPAHAKALIAAgVIAqAAIAAC3IgqAAIAAgXQgKANgQAHQgPAIgTAAQgRgBgQgGgAmCjTQgKAFgIAHQgHAIgEAKQgFAKAAAMQAAAMAFALQAEAKAHAIQAIAIAKAEQAKAFAMgBQAMABAKgFQAKgFAIgHQAGgIAFgKQAEgLAAgMQAAgMgEgJQgFgLgGgIQgIgHgKgFQgKgFgMABQgMgBgKAFgAGOhDIAAiQIg5AAIAAgnICdAAIAAAnIg5AAIAACQgAEahDIAAh5IhSB5IgqAAIAAi3IApAAIAAB2IBRh2IAsAAIAAC3gADdkMQgLgEgGgIQgIgHgDgKQgDgKAAgMIAdAAQAAAPAHAHQAGAIAMAAQANAAAGgIQAHgHAAgPIAdAAQABAMgEAKQgDAKgHAHQgHAIgKAEQgKADgPAAQgNAAgKgDg");
	this.shape.setTransform(0.5,-9.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.3,-41.1,139.6,63.9);


(lib.Tween16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.S8PNG_LINEpngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-143.8,-119.9,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.8,-119.9,287.8,239.8);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.S8PNGBOX();
	this.instance.parent = this;
	this.instance.setTransform(-143.8,-119.8,0.479,0.479);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.8,-119.8,287.6,239.7);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.S8PNGBOX();
	this.instance.parent = this;
	this.instance.setTransform(-143.8,-119.8,0.479,0.479);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.8,-119.8,287.6,239.7);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.S8PNG();
	this.instance.parent = this;
	this.instance.setTransform(-143.8,-119.8,0.479,0.479);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.8,-119.8,287.6,239.7);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.S8PNG();
	this.instance.parent = this;
	this.instance.setTransform(-143.8,-119.8,0.479,0.479);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.8,-119.8,287.6,239.7);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmjBeIgDggIhcAAIgEAgIgPAAIAAgxIAHAAQAJgGAEgHQAFgIADgJQABgJABgOIAHhPIBNAAIAACEIAQAAIAAAxgAnigGQgBATgEALIgGAMIgIAJIA+AAIAAhyIgmAAgAhkAxQAIgFAFgFQAEgGACgHQACgHAAgNIAFg3IBCAAIAABvIgTAAIAAheIgcAAIgEApQgBAPgCAKQgDAKgHAHQgHAHgNAHgAHLAxQgMgQAAgbQAAgaALgQQAGgHAJgFQAIgDALAAQATAAAMAOQAFAHADAKQADAJAAANIgBAKIhCAAQACAjAbAAQAIAAAGgCQAHgDAFgDIAIAPQgIAFgIACQgKADgJAAQgXAAgNgPgAIDgCQgBgPgGgIQgDgFgEgCQgEgCgGAAQgFAAgEACQgFACgDAEQgGAJgBAPIAwAAIAAAAgAjAA3QgJgIAAgQQAAgUAPgJQAIgEALgDQAMgCAQAAIAAgIQAAgKgFgEQgHgFgLAAQgMAAgMAGIgFgPQAHgEAJgDIAQgBQAKAAAHACQAHACAFAFQALAIAAARIAABPIgRAAIAAgPQgLARgVAAQgQAAgIgJgAirAMQgFADgDAFQgDAEAAAGQAAAJAEAEQAGAEAJABQANgBALgLIAAgeQgWABgKAFgAl3AxQgMgQAAgbQAAgaALgQQAGgHAJgFQAIgDAKAAQAUAAALAOQAGAHADAKQADAJAAANIgBAKIhDAAQADAjAbAAQAHAAAHgCIAMgGIAHAPQgGAFgKACQgJADgKAAQgWAAgNgPgAlAgCQAAgPgGgIQgEgFgDgCQgFgCgFAAQgGAAgEACQgEACgDAEQgHAJgBAPIAwAAIAAAAgAEkA+IAAhvIAUAAIAABfIAkAAIAAhfIATAAIAABfIAkAAIAAhfIATAAIAABvgADwA+IAAhvIAUAAIAABvgAC8A+IAAgxIgsAAIAAAxIgTAAIAAhvIATAAIAAAuIAsAAIAAguIATAAIAABvgAAXA+IAAhvIAUAAIAAAmIASAAQASABALAIQAGAEACAHQADAGAAAJQAAATgMAJQgLAKgRAAgAArAuIARAAQAKAAAFgGQAGgFgBgLQABgKgGgFQgFgFgJAAIgSAAgAkEA+IAAheIgcAAIAAgRIBMAAIAAARIgdAAIAABegADxhGQgEgEAAgFQAAgHAEgDQACgDAHgBQAGABADADQADADAAAHQAAAFgDAEQgDADgGAAQgHAAgCgDg");
	this.shape.setTransform(83.8,47.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1).p("ApwjMIThAAQBVAAA8A8QA8A8AABUQAABVg8A8Qg8A8hVAAIzhAAQhVAAg8g8Qg8g8AAhVQAAhUA8g8QA8g8BVAAg");
	this.shape_1.setTransform(83,47.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(-1,26,168,43), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag4A5IAAgSIA9AAIAAAXQAAAUAXAAQATAAAEgPQABgKgBgGQgFgNgvgaQgugagGgaQgEgNAEgSQAIg0BIAAQBNAAAAA6IAAARIg5AAIAAgOQAAgVgWAAQgRAAgFAPIAAALQAEAMAxAZQAvAaAGAbQACASgCAVQgHA2hLAAQhTAAAAhFgAszA5IAAgSIA/AAIAAAYQAAAUAXAAQASAAAFgPQABgLgCgGQgEgNgygaQgtgagGgbQgEgOAEgRQAHg1BLAAQBOAAAAA8IAAAQIg7AAIAAgOQAAgVgUAAQgUAAgDAQIAAAKQAEAMAwAaQAxAaAGAbQACASgCAWQgIA1hKAAQhWAAAAhFgACmBBIgBi2IA8AAIAACtIAAAIQACASAUAAQASAAAGgSIAAi1IA6AAIAAC2QgHA7hLAAQhMAAgFg7gAKOA/IAAiBQAGg5BMAAQBNAAAGA5IABAZIg8AAIgBgWQgDgSgUAAQgTAAgFASIAAB9QADARAVAAQAVAAADgRIAAgrIgYAAIAAghIBUAAIgBBNQgFA6hOAAQhMAAgGg6gAisB1IgDjZIgnDZIg8AAIgojZIgCDZIg7AAIAHjqIBfAAIAcC2IAei2IBfAAIAHDqgAnkB1IgfjZIghDZIg/AAIArjqIBnAAIAsDqgAH8ByIg6jCIADDCIg6AAIAAjnIBWAAIA4C8IgDi8IA5AAIAADng");
	this.shape.setTransform(82,42.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,29.9,164,25.2), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.S8PNG_heart();
	this.instance.parent = this;
	this.instance.setTransform(-68.4,-57,0.228,0.228);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.4,-57,137,114.2);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdAeIAAgJIAgAAIAAALQgBALAMAAQALAAACgIQABgFgCgDQgBgHgZgOQgYgNgEgOQgCgGACgKQAFgbAlAAQApAAAAAfIAAAIIgfAAIAAgHQABgLgLAAQgKAAgCAIIAAAGQABAGAaANQAZANADAOQABAKgBALQgEAcgnAAQgrAAAAgkgAmtAeIAAgJIAhAAIAAAMQAAALANAAQAJAAACgIQABgGgCgDQgBgHgagOQgZgNgCgOQgCgHACgJQADgcAoAAQAoAAAAAgIAAAIIgeAAIAAgHQAAgMgLAAQgLAAgBAJIAAAFQACAGAZAOQAaANADAOQABAKgBALQgEAcgnAAQgtAAAAgkgABXAiIgBhfIAgAAIAABaIAAAEQABAKALAAQAJAAADgKIAAheIAfAAIAABfQgEAfgnAAQgoAAgDgfgAFXAhIAAhDQADgeAoAAQApAAACAeIABANIgfAAIgBgLQgBgKgLAAQgKAAgDAKIAABAQACAJALAAQALAAACgJIAAgWIgNAAIAAgRIAsAAIgBAoQgCAfgpAAQgoAAgDgfgAhaA9IgBhxIgVBxIggAAIgUhxIgBBxIgfAAIADh6IAzAAIAOBfIAQhfIAxAAIAEB6gAj+A9IgQhxIgRBxIghAAIAWh6IA2AAIAYB6gAEKA8IgehlIACBlIgfAAIAAh5IAuAAIAdBiIgChiIAeAAIAAB5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43,-6.5,86,13.2);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Galaxy S8", "bold 12px 'Samsung Sharp Sans'");
	this.text.lineHeight = 18;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(-72.8,-11.4,1.457,1.457);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.7,-14.3,151.5,28.6);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-130,131.2,0.501,0.501,11.7,0,0,0.1,0.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-42,x:-118.6,y:57,alpha:0},31).wait(23));

	// Layer_2
	this.instance_1 = new lib.Symbol3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(122.5,162.7,0.501,0.501,53.2,0,0,0.1,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({regX:-0.1,scaleX:0.85,scaleY:0.85,rotation:-42,x:93.9,y:107.7,alpha:0},31).wait(17));

	// Layer_3
	this.instance_2 = new lib.Symbol3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(28.2,145.6,0.501,0.501,-42.7,0,0,0.1,0.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(44).to({_off:false},0).to({regX:-0.1,regY:0.1,scaleX:0.78,scaleY:0.77,rotation:37.2,x:68.9,y:101.1,alpha:0},31).wait(2));

	// Layer_4
	this.instance_3 = new lib.Symbol3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-69,156.2,0.501,0.501,-31.5,0,0,0.1,0.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(36).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:64.1,x:-34.4,y:51.1,alpha:0},31).wait(10));

	// Layer_5
	this.instance_4 = new lib.Symbol3("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-118.5,154.6,0.501,0.501,0,0,0,0.1,0.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(26).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-42,x:-82.1,y:55,alpha:0},31).wait(20));

	// Layer_6
	this.instance_5 = new lib.Symbol3("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-73.5,139.6,0.642,0.642);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},0).to({scaleX:0.88,scaleY:0.88,rotation:30.1,x:-39.3,y:99.7,alpha:0.32},21).to({scaleX:1,scaleY:1,rotation:44.6,x:-23,y:80.6,alpha:0},10).wait(32));

	// Layer_7
	this.instance_6 = new lib.Symbol3("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-166.5,163.1,0.693,0.693);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5).to({_off:false},0).to({regX:-0.1,regY:0.1,scaleX:0.99,scaleY:0.99,rotation:-61.9,x:-132.1,y:83.3,alpha:0.031},30).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-64,x:-131,y:80.6,alpha:0},1).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.idex = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_464 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(464).call(this.frame_464).wait(195));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},465).wait(194));

	// Layer 12
	this.instance = new lib.Symbol19();
	this.instance.parent = this;
	this.instance.setTransform(149,122.5,1,1,0,0,0,83,20.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(417).to({_off:false},0).to({alpha:1},19).wait(28).to({_off:true},1).wait(194));

	// Layer 13
	this.instance_1 = new lib.Symbol18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,69.6,0.89,0.89,0,0,0,82,12.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(417).to({_off:false},0).to({alpha:1},19).wait(28).to({_off:true},1).wait(194));

	// Layer 14
	this.instance_2 = new lib.Tween8("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(150,125);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(400).to({_off:false},0).to({alpha:1},17).to({startPosition:0},47).to({_off:true},1).wait(194));

	// Layer_17
	this.instance_3 = new lib.Symbol2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(54.1,18.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},14).to({_off:true},451).wait(194));

	// Layer_2
	this.instance_4 = new lib.Symbol3("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-16.5,288.1,0.693,0.693);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(145).to({_off:false},0).to({regX:-0.1,regY:0.1,scaleX:0.99,scaleY:0.99,rotation:-61.9,x:17.9,y:208.3,alpha:0.031},30).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-64,x:19,y:205.6,alpha:0},1).to({_off:true},289).wait(194));

	// Layer_3
	this.instance_5 = new lib.Symbol3("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(76.5,264.6,0.642,0.642);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(154).to({_off:false},0).to({scaleX:0.88,scaleY:0.88,rotation:30.1,x:110.7,y:224.7,alpha:0.32},21).to({scaleX:1,scaleY:1,rotation:44.6,x:127,y:205.6,alpha:0},10).to({_off:true},313).wait(161));

	// Layer_4
	this.instance_6 = new lib.Symbol3("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(31.5,279.6,0.501,0.501,0,0,0,0.1,0.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(166).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-42,x:67.9,y:180,alpha:0},31).to({_off:true},334).wait(128));

	// Layer_5
	this.instance_7 = new lib.Symbol3("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(81,281.2,0.501,0.501,-31.5,0,0,0.1,0.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(176).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:64.1,x:115.6,y:176.1,alpha:0},31).to({_off:true},356).wait(96));

	// Layer_6
	this.instance_8 = new lib.Symbol3("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(178.2,270.6,0.501,0.501,-42.7,0,0,0.1,0.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(184).to({_off:false},0).to({regX:-0.1,regY:0.1,scaleX:0.78,scaleY:0.77,rotation:37.2,x:218.9,y:226.1,alpha:0},31).to({_off:true},380).wait(64));

	// Layer_7
	this.instance_9 = new lib.Symbol3("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(272.5,287.7,0.501,0.501,53.2,0,0,0.1,0.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(169).to({_off:false},0).to({regX:-0.1,scaleX:0.85,scaleY:0.85,rotation:-42,x:243.9,y:232.7,alpha:0},31).to({_off:true},427).wait(32));

	// Layer_8
	this.instance_10 = new lib.Symbol3("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(20,256.2,0.501,0.501,11.7,0,0,0.1,0.2);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(163).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-42,x:31.4,y:182,alpha:0},31).wait(465));

	// Layer_10
	this.instance_11 = new lib.Symbol4("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(172.7,106.1);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(185).to({_off:false},0).wait(474));

	// Layer_11
	this.instance_12 = new lib.Symbol4("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(172.7,106.1);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(222).to({_off:false},0).wait(437));

	// Layer_28
	this.instance_13 = new lib.Tween19("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(-20,156.1);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween20("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(116.8,156.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},150).to({state:[{t:this.instance_14}]},25).to({state:[]},290).wait(194));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(150).to({_off:false},0).to({_off:true,x:116.8,alpha:1},25).wait(484));

	// Layer_27
	this.instance_15 = new lib.Tween17("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(-93,115.2);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.instance_16 = new lib.Tween18("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(92.6,115.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15}]},150).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[]},292).wait(194));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(150).to({_off:false},0).wait(1).to({regX:0.5,regY:-9.2,x:-83.2,y:106,alpha:0.05},0).wait(1).to({x:-70.6,alpha:0.118},0).wait(1).to({x:-52.3,alpha:0.216},0).wait(1).to({x:-25.2,alpha:0.363},0).wait(1).to({x:5.7,alpha:0.529},0).wait(1).to({x:28.3,alpha:0.651},0).wait(1).to({x:43.4,alpha:0.732},0).wait(1).to({x:54.2,alpha:0.791},0).wait(1).to({x:62.3,alpha:0.835},0).wait(1).to({x:68.7,alpha:0.869},0).wait(1).to({x:73.8,alpha:0.896},0).wait(1).to({x:77.9,alpha:0.918},0).wait(1).to({x:81.2,alpha:0.936},0).wait(1).to({x:84,alpha:0.951},0).wait(1).to({x:86.3,alpha:0.963},0).wait(1).to({x:88.1,alpha:0.973},0).wait(1).to({x:89.6,alpha:0.981},0).wait(1).to({x:90.7,alpha:0.987},0).wait(1).to({x:91.6,alpha:0.992},0).wait(1).to({x:92.3,alpha:0.996},0).wait(1).to({x:92.7,alpha:0.998},0).wait(1).to({x:93,alpha:1},0).to({_off:true},1).wait(486));

	// Galaxy S8 Text
	this.instance_17 = new lib.Symbol1("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(272.6,18.9);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({alpha:1},14).to({_off:true},451).wait(194));

	// Layer_25 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgTBzQgdgIgXgZQgWgXgLggQgGgSgCgOQgCgcANgaQANgaAXgQQAXgPAdgCQAcgCAZAMQAXALAQAUQAHAJAMAbQAIARADAMQAIAagIAcQgHAcgUATQgUAUgcAHQgNADgNAAQgOAAgNgEg");
	var mask_graphics_70 = new cjs.Graphics().p("AgTBzQgdgIgXgZQgWgXgLggQgGgSgCgOQgCgcANgaQANgaAXgQQAXgPAdgCQAcgCAZAMQAXALAQAUQAHAJAMAbQAIARADAMQAIAagIAcQgHAcgUATQgUAUgcAHQgNADgNAAQgOAAgNgEg");
	var mask_graphics_71 = new cjs.Graphics().p("AgXCjQgdgJgXgZQgVgXgLgfQgGgQgCgNQgGgLgEgMQgGgSgEgeQgDgZABgNQACghAVgbQAWgbAggKQAfgLAgAJQAiAIAYAXIAWAXIAZAYQAWAXAGAiQAGAhgOAdQgHAQgLAMQAAANgEANQgIAcgTAUQgUATgcAHQgOAEgNAAQgNAAgOgEg");
	var mask_graphics_72 = new cjs.Graphics().p("AgUCzQgdgIgXgZQgWgXgLggQgFgPgCgOQgHgKgEgNQgFgRgEgfIgCgQQgGgSAAgUQAAgaAMgVQAJgRAWgUQAbgYAWgHQAggKAzAMQAcAHASAKQAVAMAOAVQAOAVADAYQAEAVgHAWQAGANADAOQAFAhgNAdQgHAQgMANQAAANgEANQgHAcgUATQgUAUgcAHQgNAEgNAAQgNAAgOgFg");
	var mask_graphics_73 = new cjs.Graphics().p("AgUDCQgdgIgXgZQgWgXgLggQgFgQgCgNQgHgLgEgMQgFgRgEggIgCgPQgGgSAAgUQAAgaAMgVQAJgRAVgTQAHgQALgNQAOgQASgJQAlgTAnAMQAhAJAUAaQAIAKAFAMQANAKAJAOQAOAVADAYQAEAVgHAVQAGANADAOQAFAigNAdQgHAQgMAMQAAANgEAOQgHAcgUATQgUAUgcAHQgNADgNAAQgNAAgOgEg");
	var mask_graphics_74 = new cjs.Graphics().p("AgUDQQgdgIgXgZQgWgXgLggQgFgPgCgOQgHgKgEgNQgFgRgEggIgCgQQgGgRAAgUQAAgaAMgVQAIgQATgSQABgJADgJQAHgaASgUQAfghArAAQArAAAfAeQAcAcAEAmIABAKIAHAJQAOAVADAYQAEAVgHAWQAGAMADAOQAFAigNAdQgHAQgMANQAAANgEANQgHAcgUATQgUAUgcAHQgNAEgNAAQgNAAgOgFg");
	var mask_graphics_75 = new cjs.Graphics().p("AgUDiQgdgIgXgZQgWgXgLggQgFgQgCgNQgHgLgEgMQgFgRgEggIgCgQQgGgSAAgTQAAgaAMgVQAIgQATgSQABgJADgJIACgHQgBgUAIgVQALgaAVgRQAWgRAcgFQAbgEAaAKQAZAJASAXQASAWAFAbQACANgBAQQgBAMgEALIAAAAIAHAKQAOAVADAYQAEAVgHAUQAGANADAPQAFAigNAdQgHAQgMAMQAAANgEAOQgHAcgUATQgUAUgcAHQgNADgNAAQgNAAgOgEg");
	var mask_graphics_76 = new cjs.Graphics().p("AgUDzQgdgIgXgZQgWgXgLggQgFgPgCgOQgHgKgEgNQgFgRgEggIgCgQQgGgSAAgUQAAgZAMgVQAIgQATgSQABgJADgJIACgHQgBgUAIgVQAHgQAKgMQAJgcAWgTQAUgRAZgGQAbgGAZAHQAZAHAUAUQATATAIAZQAIAagGAaQgFAbgQATIgBACIAAABIAHAJQAOAVADAYQAEAUgHAWQAGAMADAPQAFAigNAdQgHAQgMANQAAAMgEAOQgHAcgUATQgUAUgcAHQgNADgNAAQgNAAgOgEg");
	var mask_graphics_77 = new cjs.Graphics().p("AgcEFQgdgJgXgZQgVgXgLgfQgGgQgCgNQgGgLgEgMQgGgSgEgfIgBgQQgHgSABgUQAAgaALgVQAIgPAUgSQABgJACgKIACgGQAAgVAIgUQAGgQALgNQAHgWAQgRIAEgJQAOgdAagQQAZgPAgABQAgABAZASQAZARAMAeQAMAegGAeQgFAbgSAVIgEAEQgGARgLANIgBACIAAAAIAHAJQAOAVAEAYQADAVgGAVQAGANACAPQAGAigOAdQgHAQgLAMQgBANgDANQgIAcgTAUQgUATgcAHQgOAEgMAAQgOAAgOgEg");
	var mask_graphics_78 = new cjs.Graphics().p("AgtETQgdgIgXgZQgVgXgLggQgGgQgCgNQgGgLgEgMQgGgRgEggIgCgQQgGgSABgUQAAgaALgUQAIgQAUgSQABgJACgJIACgHQAAgUAIgVQAGgQALgNQAHgWAQgRIAEgJQAOgdAagPIAHgEQAHgJAJgHQAWgSAdgEQAcgEAcAMQAbALARAYQARAXACAeQACAegMAaQgNAZgaAQIgHAEIgDAFIgEAEQgGAQgLANIgBACIAAAAIAHAKQAOAVAEAXQADAVgGAVQAFANADAPQAGAigOAdQgHAQgMAMQAAANgDAOQgIAcgTATQgUAUgcAHQgNADgNAAQgOAAgOgEg");
	var mask_graphics_79 = new cjs.Graphics().p("Ag3EcQgdgJgXgZQgWgXgLgfQgFgQgCgNQgHgLgEgMQgFgSgEgfIgCgQQgGgTAAgTQAAgbAMgUQAIgPATgSQABgJADgKIACgGQgBgVAIgUQAHgQAKgNQAHgWAQgRIAEgJQAOgdAagQIAIgEQAHgIAIgHIALgIIACgCQAcgdAogCQApgBAfAZQAVARAKAaQAKAZgDAbQgEAagQAXQgMAPgPAKQgJALgNAIIgHAEIgEAEIgDAEQgGARgLAMIgBACIAAABIAHAJQAOAVADAXQADAVgGAWQAGANADAPQAFAigNAdQgHAPgMANQAAANgEANQgHAcgUAUQgUATgbAHQgNAEgNAAQgPAAgNgEg");
	var mask_graphics_80 = new cjs.Graphics().p("AhJElQgdgJgXgZQgWgXgLgfQgFgQgCgNQgHgLgEgMQgFgSgEgfIgCgQQgGgTAAgTQAAgbAMgVQAIgOATgSQABgKADgJIACgGQgBgVAIgUQAHgRAKgMQAHgXAQgQIAEgJQAOgdAagQIAIgEQAHgIAIgHIALgIIACgCQAVgVAagHQANgKAQgFQAagJAbAFQAaAFAVASQAWASAJAZQAKAZgEAcQgEAbgQAWQgQAVgaALIgNAEIgHAFQgJALgNAIIgHAEIgEAEIgDAEQgGAQgLANIgBACIAAABIAHAJQAOAUADAYQAEAVgHAWQAGANADAPQAFAigNAdQgHAPgMANQAAANgEANQgHAcgUAUQgUATgbAHQgNAEgNAAQgOAAgOgEg");
	var mask_graphics_81 = new cjs.Graphics().p("AhZEqQgdgJgXgZQgWgXgLgfQgFgQgCgNQgHgLgEgMQgFgSgEgfIgCgQQgGgTAAgTQAAgbAMgVQAIgOATgSQABgJADgKIACgGQgBgVAIgUQAHgQAKgNQAHgWAQgRIAEgJQAOgdAagQIAIgEQAHgIAIgHIALgIIACgCQAVgVAagHQANgJAQgGQAJgDAIgBQAPgIARgDQAYgDAYAHQAaAJATATQATAUAGAaQAHAagHAbQgHAagSAUQgSATgaAJQgJADgKABIgEACIgNAEIgHAFQgJALgNAIIgHAEIgEAEIgDAEQgGARgLAMIgBACIAAABIAHAJQAOAUADAYQAEAVgHAWQAGANADAPQAFAigNAdQgHAPgMANQAAANgEANQgHAcgUAUQgTATgcAHQgNAEgNAAQgOAAgOgEg");
	var mask_graphics_82 = new cjs.Graphics().p("AhlErQgdgIgXgZQgWgXgLggQgFgQgCgNQgHgLgEgMQgFgRgEggIgCgQQgGgSAAgUQAAgaAMgVQAIgPATgSQABgJADgJIACgHQgBgVAIgUQAHgQAKgNQAHgWAQgRIAEgJQAOgdAagPIAIgEQAHgJAIgHIALgHIACgDQAVgVAbgGQAMgKAQgFQAJgDAIgCQAPgIARgCIAPgBQASgFATADQAZADAUAMQATANANAUQANAUADAXQACAZgGAUQgKAegaAUQgaAVgfACIgHAAIgLADIgEABIgNAFIgHAFQgJAKgNAIIgHAEIgEAFIgDAEQgGAQgLANIgBACIAAAAIAHAKQAOAUADAYQAEAVgHAVQAGANADAPQAFAigNAdQgHAQgMAMQAAANgEAOQgHAcgUATQgTAUgcAHQgNADgNAAQgOAAgOgEg");
	var mask_graphics_83 = new cjs.Graphics().p("AiuF7QgdgJgXgZQgVgXgLgfQgGgQgCgNQgGgLgEgMQgGgSgEgfIgCgQQgGgTABgTQAAgbALgVQAIgPAUgSQAAgJADgKIACgGQAAgVAIgTQAGgQALgNQAHgWAQgRIAEgJQAOgdAagQIAHgEQAHgIAJgHIAKgIIADgCQAUgVAbgHQANgKARgFQAIgDAJgBQAOgIAQgDIAQgBQARgEATACQAZADAUANQAUAMANAVQAMAUADAXQADAYgHAVQgKAegZAUQgaAVgfACIgIAAIgLACIgDACIgOAEIgGAEQgKALgMAIIgHAEIgDAEIgEAEQgGAQgLANIgBACIAAABIAHAJQAOAVAEAYQADAVgGAWQAFANADAPQAGAigOAdQgHAPgMANQAAANgDANQgIAcgTAUQgUATgcAHQgOAEgNAAQgOAAgOgEgADwksQgMgCgHgEQgKgFgGgKQgGgLAAgLQABgLAGgKQAHgKAKgEQAKgEAOAAQAMAAAIADQATAHAGATQAHATgMARQgLAQgUACIgEAAIgMgBg");
	var mask_graphics_84 = new cjs.Graphics().p("Ai7GEQgdgJgXgZQgVgXgLgfQgGgQgCgNQgGgLgEgMQgGgSgEgfIgCgQQgGgTABgTQAAgbALgVQAIgPAUgSQAAgKADgJIACgGQAAgVAIgTQAGgRALgMQAHgXAQgQIAEgJQAOgdAagQIAHgEQAHgIAJgHIAKgIIADgCQAUgVAbgHQANgKARgFQAIgDAJgBQAOgIARgDIAPgBQARgEATACQAZADAUANQAUAMANAVQAMAUADAXQADAYgHAVQgKAegZAUQgaAVgfACIgIAAIgLACIgDABIgOAEIgFAFQgKAKgNAJIgHAEIgDAEIgEAEQgGAQgLANIgBACIAAABIAHAJQAOAVAEAYQADAVgGAWQAFANADAPQAGAigOAdQgHAPgMANQAAANgDANQgIAcgTAUQgUATgcAHQgOAEgNAAQgOAAgOgEgADjkjQgMgCgHgEQgKgFgGgKQgGgLAAgLQABgLAGgKQAHgKAKgEQAKgEAOAAIABAAQADgFAFgEQAJgHAMgBQANgBAKAFQAKAGAGALQAGALgCAMIgBAGQgDAKgIAIQgIAIgLACIgCAEQgLAQgUACIgEAAIgMgBg");
	var mask_graphics_85 = new cjs.Graphics().p("AjJGOQgdgIgXgZQgVgXgLggQgGgPgCgOQgGgKgEgNQgGgRgEggIgCgQQgGgSABgUQAAgaALgVQAIgPAUgTQAAgJADgJIACgHQgBgUAJgVQAGgPALgMQAHgXAQgRIAEgJQAOgdAagPIAHgEQAHgIAJgIIAKgHIADgDQAUgUAbgHQANgKARgFQAIgDAJgBQAOgIARgDIAQgBQAQgEATACQAZADAUAMQAUANANAUQAMAUADAXQADAZgHAUQgKAegZAUQgaAUgfACIgIABIgLACIgDABIgNAFIgGAFQgKAKgNAIIgHAEIgDAFIgEAEQgGAQgLANIgBACIAAABIAHAJQAOAVAEAYQADAVgGAWQAFANADAOQAGAigOAdQgHAQgMANQAAANgDANQgIAcgTATQgUAUgcAHQgOAEgNAAQgOAAgOgFgADVkZQgMgCgHgDQgKgGgGgKQgGgKAAgLQABgLAGgKQAHgKAKgEQAKgEAOAAIABAAQADgFAFgEQAHgGAJgCIAEgFQAGgKAMgFQALgEALACQAMACAJAJQAJAIACALQACAMgEALQgEAMgJAHQgIAFgJACQgDAGgFAFQgIAIgLACIgCADQgLARgUABIgEABIgMgCg");
	var mask_graphics_86 = new cjs.Graphics().p("AjcGbQgdgIgXgZQgVgXgLggQgGgQgCgNQgGgLgEgMQgGgRgEggIgBgQQgGgSAAgUQAAgaALgVQAJgQATgSQABgJACgJIACgHQAAgVAIgUQAGgQALgMQAHgWAQgRIAEgJQAOgdAagPIAHgEQAHgJAJgHIAKgHIADgDQAVgVAagGQANgKARgFQAIgDAJgCQAPgIAQgCIAQgBQASgFARADQAZADAUAMQAUANANAUQAMAUADAXQADAZgHAUQgKAegZAUQgaAUgfACIgHAAIgLADIgDABIgOAFIgGAFQgKAKgNAIIgGAEIgEAFIgEAEQgGAQgLANIgBACIAAAAIAHAKQAOAVAEAYQADAVgGAVQAGANACAPQAGAigOAdQgHAQgLAMQAAANgEAOQgIAcgTATQgUAUgcAHQgOADgNAAQgOAAgOgEgADCkMQgMgCgHgDQgKgGgGgKQgGgKAAgLQABgLAGgKQAHgKAKgEQAKgEAOAAIABAAQADgGAFgDQAIgGAJgCIADgFQAGgKAMgFQAGgDAGAAQAEgKAKgHQAMgJARABQASACALAOQALAPgEARQgDASgRAJQgFADgIACIgGAAQgEALgJAHQgIAFgIABQgDAGgGAGQgIAIgLACIgCADQgLARgUABIgEAAIgMgBg");
	var mask_graphics_87 = new cjs.Graphics().p("AjoGkQgdgIgXgZQgWgXgLggQgFgQgCgNQgHgKgEgNQgFgRgEggIgCgQQgGgSAAgUQAAgaAMgVQAIgQATgSQABgJADgJIACgHQgBgUAIgVQAHgQAKgMQAHgWAQgRIAEgJQAOgdAagPIAIgEQAHgJAIgHIALgHIACgDQAVgVAbgGQANgKAQgFQAJgDAIgBQAPgJARgCIAPgBQASgFATADQAYADAUAMQATANANAUQANAUADAXQACAZgGAUQgKAegaATQgaAVgeACIgHABIgLACIgEABIgNAFIgHAFQgJAKgNAIIgHAEIgEAFIgDAEQgGAQgLANIgBACIAAABIAHAJQAOAVADAYQAEAVgHAWQAGAMADAPQAFAigNAdQgHAQgMANQAAAMgEAOQgHAcgUATQgUAUgcAHQgNADgNAAQgOAAgOgEgAC1kDQgLgCgIgDQgKgGgGgKQgGgKABgLQAAgLAHgKQAHgKAKgEQAKgEANAAIABAAQAEgFAEgEQAIgGAJgCIADgFQAHgKALgFQAHgCAGgBQAEgKAJgHQAHgFAIgCIAGgIQAHgGAIgDQALgEALACQALACAJAIQAPANgCAUQgBATgRALQgGAEgGACQgFAIgKAGQgFADgIACIgHABQgEAKgJAHQgHAFgJACQgDAGgFAFQgIAIgLACIgCADQgLARgVABIgDAAIgNgBg");
	var mask_graphics_88 = new cjs.Graphics().p("AjzGxQgdgJgXgZQgWgXgLgfQgFgQgCgNQgHgLgEgMQgFgSgEgfIgCgQQgGgTAAgTQAAgbAMgVQAIgPATgSQABgJADgKIACgGQgBgVAIgUQAHgRAKgMQAHgVAQgRIAEgJQAOgdAagQIAIgEQAHgIAIgHIALgIIACgCQAVgVAagHQAOgKAQgFQAJgDAIgBQAPgIARgDIAPgBQASgEATACQAYADAUANQATAMANAVQANAUADAXQACAYgGAVQgKAegaATQgaAVgeACIgHAAIgLACIgEACIgNAEIgHAFQgKALgMAIIgHAEIgEAEIgEAEQgGAQgLANIAAACIAAABIAHAJQAOAVADAYQADAVgGAWQAGANADAPQAFAigNAdQgHAPgMANQAAANgEANQgHAcgUAUQgUATgcAHQgNAEgOAAQgOAAgNgEgACqj2QgLgCgIgEQgKgFgGgKQgGgLABgLQAAgLAHgKQAHgKAKgEQAKgEANAAIABAAQADgFAFgEQAIgGAJgCIADgFQAHgJALgFQAGgDAHAAQAEgKAJgHQAHgFAHgCIAHgIQAGgGAHgDQACgGAEgFQAJgMAOgDQARgFAPAKQAQAKACARQAEAWgSAPIgKAGQgDANgNAJQgGAEgHABQgEAJgKAFQgFAEgIABIgHABQgEALgJAGQgHAFgJACQgDAGgFAFQgJAJgKABIgCAEQgLAQgVACIgEAAIgMgBg");
	var mask_graphics_89 = new cjs.Graphics().p("AkAHAQgdgJgXgZQgWgXgLgfQgFgQgCgNQgHgLgEgMQgFgSgEgfIgCgQQgGgTAAgTQAAgbAMgVQAIgPATgSQABgJADgKIACgGQgBgVAIgUQAHgQAKgNQAHgWAQgQIAEgJQAOgdAagQIAIgEQAHgIAIgHIALgHIACgDQAVgVAbgHQANgJAQgGQAJgDAIgBQAPgIARgDIAPgBQASgEATACQAZADATANQATAMANAVQANAUADAXQACAYgGAVQgKAdgaAUQgaAVgeACIgHAAIgLACIgEACIgNAFIgHAEQgJALgNAIIgHAEIgEAEIgDAEQgGARgLANIgBACIAAAAIAHAJQAOAVADAYQADAVgGAWQAGANADAPQAFAigNAdQgHAPgMANQAAANgEANQgHAcgUAUQgUATgcAHQgNAEgNAAQgOAAgOgEgACdjnQgLgCgIgEQgKgFgGgKQgGgLABgLQAAgLAHgKQAHgKAKgEQAKgEANAAIABAAQADgFAFgEQAIgGAJgBIADgGQAHgJALgFQAHgDAGAAQAEgKAJgHQAHgFAIgCIAGgIQAGgGAHgCQACgHAEgFQAIgKAKgEQACgNALgKQAKgIANgCQASgBANAKQARAOgDAVQgCAVgTALIgFACQgCANgMAKIgJAGQgEANgNAJQgGAEgGACQgFAIgKAFQgFAEgIABIgHABQgEALgJAGQgHAGgJABQgDAGgFAFQgJAJgKACIgCADQgLAQgVACIgDAAIgNgBg");
	var mask_graphics_90 = new cjs.Graphics().p("AkLHRQgdgIgXgZQgVgXgLggQgGgPgCgOQgGgKgEgNQgGgRgEggIgCgQQgGgSABgUQAAgaALgVQAIgQAUgSQAAgJADgJIACgHQgBgUAJgVQAGgQALgMQAHgXAQgRIAEgIQAOgdAagPIAHgEQAHgJAJgHIAKgHIADgDQAUgUAbgHQANgKARgFQAIgDAJgBQAOgIARgDIAQgBQARgEATACQAZADATAMQAUANANAUQAMAUADAXQADAZgHATQgKAegZAUQgZAVgfACIgIABIgLACIgDABIgOAFIgGAFQgKAKgNAIIgHAEIgDAFIgEAEQgGAQgLANIgBACIAAABIAHAJQAOAVAEAYQADAVgGAWQAFAMADAPQAGAigOAdQgHAQgMANQAAAMgDAOQgIAcgTATQgUAUgcAHQgOADgNAAQgOAAgOgEgACTjWQgMgCgHgDQgKgGgGgKQgGgKAAgLQABgLAGgKQAHgKAKgEQAKgEAOAAIABAAQADgFAFgEQAHgGAJgCIAEgFQAGgKAMgFQAGgCAGgBQAEgKAKgHQAGgFAIgCIAGgIQAGgFAIgDQACgGAEgGQAHgJAKgEQADgNALgKIAHgFQAAgKAGgKQACgEAEgEQAGgHAJgDQARgGAPAHQAUAKADATQAEAVgPAOIgGAGIgEADIAAADQgDAVgSAKIgFADQgDANgLAKIgKAGQgEANgNAIQgGAEgGACQgFAIgKAGQgFADgIACIgGABQgEAKgJAHQgIAFgJACQgDAGgFAFQgIAIgLACIgCADQgLARgUABIgEAAIgMgBg");
	var mask_graphics_91 = new cjs.Graphics().p("AkUHjQgdgIgXgZQgVgXgLggQgGgPgCgOQgGgKgEgNQgGgRgEggIgBgQQgHgSABgUQAAgaALgVQAJgQATgSQABgJACgJIACgHQAAgUAIgVQAGgQALgMQAHgXAQgRIAEgJQAOgcAagPIAHgEQAHgIAJgIIAKgHIADgDQAVgUAagHQANgKARgFQAIgDAJgBQAPgIAQgDIAQgBQARgEATACQAZADAUAMQATANANAUQAMAUADAXQADAZgHATQgKAegZAUQgZAVgfACIgIABIgLACIgDABIgOAFIgGAFQgKAKgNAIIgGAEIgEAFIgEAEQgGAQgLANIgBACIAAABIAHAJQAOAVAEAYQADAVgGAWQAGANACAOQAGAigOAdQgHAQgLANQgBANgDANQgIAcgTATQgUAUgcAHQgOAEgNAAQgOAAgOgFgACKjEQgMgCgHgDQgKgGgGgKQgGgKAAgLQABgLAGgKQAHgKAKgEQAKgEAOAAIABAAQADgFAFgEQAHgGAKgCIADgFQAGgKAMgFQAGgCAGgBQAEgJAKgIQAGgFAIgCIAGgIQAGgFAIgDQACgGAEgGQAHgJAKgEQADgNALgKIAHgFQAAgKAGgKQACgEAEgEIAHgGQAAgLAEgKQAGgKAKgGQAKgGALAAQAMAAAKAHQAKAGAFALQAEAKgBAMQgCAMgHAJQgDAEgFAEQABARgNAMIgGAGIgEADIAAADQgDAVgSAKIgFADQgCANgMAKIgKAGQgEANgNAIQgGAEgGACQgFAJgKAFQgFADgIACIgGABQgEAKgJAHQgIAFgIACQgEAGgFAFQgIAIgLACIgCADQgLARgUABIgEABIgMgCg");
	var mask_graphics_92 = new cjs.Graphics().p("AkcHzQgdgIgXgZQgVgXgLggQgGgQgCgNQgGgLgEgMQgGgRgEggIgBgQQgGgSAAgUQAAgaALgVQAJgQATgSQABgJACgJIACgHQAAgVAIgUQAGgQALgNQAHgWAQgRIAEgJQAOgdAagOIAHgEQAHgJAJgHIAKgHIADgDQAVgVAagGQANgKARgFQAIgDAJgCQAPgIAQgCIAQgBQASgFASADQAZADAUAMQATANANAUQAMAUADAXQADAYgHAUQgKAegYAUQgaAVgfACIgIAAIgLADIgDABIgOAFIgGAFQgKAKgNAIIgGAEIgEAFIgEAEQgGAQgLANIgBACIAAAAIAHAKQAOAVAEAYQADAVgGAVQAGANACAPQAGAigOAdQgHAQgLAMQgBANgDAOQgIAcgTATQgUAUgcAHQgOADgNAAQgOAAgOgEgACCi0QgMgCgHgDQgKgGgGgKQgGgKAAgLQABgLAGgKQAHgKAKgEQAKgEAOAAIABAAQADgGAFgDQAHgGAKgCIADgFQAGgKAMgFQAGgDAGAAQAEgKAKgHQAGgFAIgCIAGgIQAGgFAIgDQACgGAEgGQAHgKAKgDQADgOALgJIAHgGQAAgJAGgKIAFgHIgCgDQgFgPACgPQACgPAKgMQAKgMAOgFQAYgJAWANQAWAMAFAXQACAIgBALQgEAfgaAOIgDABQAAAPgMAMIgGAGIgEACIAAAEQgDAVgSAKIgFACQgCANgMALIgKAGQgEANgNAIQgGAEgGACQgFAIgKAGQgFADgIACIgGAAQgEALgJAHQgIAFgIABQgEAGgFAGQgIAIgLACIgCADQgLARgUABIgEAAIgMgBg");
	var mask_graphics_93 = new cjs.Graphics().p("AkhIFQgdgIgXgZQgVgXgLggQgGgQgCgNQgGgLgEgMQgGgRgEggIgBgQQgGgSAAgUQAAgaALgVQAJgQATgSQABgJACgJIACgHQAAgUAIgVQAGgQALgNQAHgWAQgRIAEgJQAOgdAagPIAHgEQAHgIAJgHIAKgHIADgDQAVgVAagGQANgKARgFQAIgDAJgCQAPgIAQgCIAQgBQASgFASADQAZADAUAMQATANANAUQAMAUADAWQADAZgHAUQgKAegYAUQgaAVgfACIgIAAIgLADIgDABIgOAFIgGAFQgKAKgNAIIgGAEIgEAFIgEAEQgGAQgLANIgBACIAAAAIAHAKQAOAVAEAYQADAVgGAVQAGANACAPQAGAigOAdQgHAQgLAMQgBANgDAOQgIAcgTATQgUAUgcAHQgOADgNAAQgOAAgOgEgAB9iiQgMgCgHgDQgKgGgGgKQgGgKAAgLQABgLAGgKQAHgKAKgEQAKgEAOAAIABAAQADgGAFgDQAHgGAKgCIADgFQAGgKAMgFQAGgCAGgBQAEgKAKgHQAGgFAIgCIAGgIQAGgFAIgDQACgGAEgGQAHgKAKgDQADgOALgJIAHgGQAAgJAGgKIAFgHIgCgDQgFgPACgPQACgOAJgMIgBgDQAAgTAMgQQAKgMAPgFQAQgFAPADQAPAEALALQALAMAEAPQADAPgFAPQgDAHgEAHIAAALQgEAfgaAOIgDABQAAAQgMALIgGAGIgEACIAAAEQgDAVgSAKIgFACQgCAOgMAKIgKAGQgEANgNAIQgGAEgGACQgFAIgKAGQgFADgIACIgGAAQgEALgJAHQgIAFgIABQgEAGgFAGQgIAIgLACIgCADQgLARgUABIgEAAIgMgBg");
	var mask_graphics_94 = new cjs.Graphics().p("AkqIgQgdgJgXgZQgWgXgLgfQgFgQgCgNQgHgLgEgMQgFgSgEgfIgCgQQgGgSAAgUQAAgbAMgVQAIgPATgSQABgJADgKIACgGQgBgVAIgUQAHgQAKgNQAHgWAQgRIAEgJQAOgdAagQIAIgEQAHgIAIgHIALgHIACgDQAVgUAagHQAOgJAQgGQAJgCAIgCQAPgIARgDIAPgBQASgEATACQAZADAUANQATAMAMAVQANATADAXQACAYgGAVQgKAegZAUQgaAVgfACIgHAAIgLACIgEACIgNAFIgHAEQgKALgMAIIgHAEIgEAEIgEAEQgGARgLANIAAACIAAAAIAHAJQAOAVADAYQADAWgGAVQAGANADAPQAFAigNAdQgIAQgLAMQAAANgEANQgHAcgUAUQgUATgcAHQgNAEgOAAQgOAAgNgEgABziHQgLgCgIgEQgKgFgGgKQgGgLABgLQAAgLAHgKQAHgKAKgEQAKgEANAAIABAAQADgFAFgEQAIgGAJgBIADgGQAHgJALgFQAGgDAHAAQAEgKAJgHQAHgFAHgCIAHgIQAGgFAHgDQACgGAEgGQAHgKALgEQACgNALgKIAIgFQAAgKAFgKIAFgGIgBgEQgGgOACgQQACgNAJgMIAAgEQAAgSAMgQIAFgGQgFgZAPgUQAQgWAcgBQATAAAQALQAJAHAGAKQAJAPgBASQgDAXgRAOQACAOgFAOQgCAIgFAGIAAALQgEAfgaAOIgDACQAAAPgLAMIgHAGIgEACIAAADQgCAVgTALIgFACQgCANgMAKIgKAGQgDAOgNAIQgGAEgHACQgFAIgJAFQgFAEgIABIgHABQgEALgJAGQgHAGgJABQgDAGgFAFQgJAJgKACIgCADQgLAQgVACIgEAAIgMgBg");
	var mask_graphics_95 = new cjs.Graphics().p("AkuI2QgdgIgXgZQgVgXgLggQgGgQgCgNQgGgLgEgMQgGgRgEggIgCgQQgGgSABgUQAAgaALgVQAIgQAUgSQABgJACgJIACgHQAAgVAIgUQAGgQALgNQAHgWAQgRIAEgJQAOgdAagPIAHgEQAHgJAJgHIAKgHIADgDQAVgVAagFQANgKARgFQAIgDAJgCQAOgIARgCIAQgBQARgFATADQAZADAUAMQAUANAMATQAMAUADAXQADAZgHAUQgKAegYAUQgaAVgfACIgIAAIgLADIgDABIgOAFIgGAFQgKAKgNAIIgHAEIgDAFIgEAEQgGAQgLANIgBACIAAAAIAHAKQAOAVAEAYQADAVgGAVQAGANACAPQAGAigOAdQgHAQgMAMQAAANgDAOQgIAcgTATQgUAUgcAHQgOADgNAAQgOAAgOgEgABwhxQgMgCgHgDQgKgGgGgKQgGgKAAgLQABgLAGgKQAHgKAKgEQAKgEAOAAIABAAQADgGAFgDQAHgGAJgCIAEgFQAGgKAMgFQAGgCAGgBQAEgKAKgHQAGgFAIgCIAGgIQAGgFAIgDQACgGAEgGQAHgKAKgDQADgOALgJIAHgGQAAgJAGgKIAEgHIgBgDQgFgPACgPQACgOAIgMIAAgDQAAgTAMgQIAGgGQgFgWAMgUQgDgMACgMQAEgRAMgMQAMgMARgEQAHgCAJABQAPABAMAJQAMAIAHANQAGANgBAPQgBAPgIALQADAKgBAKQgCAXgSAPQADAOgFAOQgDAHgEAHIAAALQgEAfgaAOIgEABQABAQgMALIgGAGIgEACIAAAEQgDAVgSAKIgFACQgDAOgLAKIgKAGQgEANgNAIQgGAEgGACQgFAIgKAGQgFADgIACIgGAAQgEALgJAHQgIAFgJABQgDAGgFAGQgIAIgLACIgCADQgLARgUABIgEAAIgMgBg");
	var mask_graphics_96 = new cjs.Graphics().p("Ak0JKQgdgIgXgZQgWgXgLggQgFgQgCgNQgHgLgEgMQgFgRgEggIgCgQQgGgSAAgUQAAgaAMgVQAIgQATgSQABgJADgJIACgHQgBgUAIgVQAHgQAKgNQAHgWAQgRIAEgJQAOgdAagPIAIgEQAHgJAIgHIALgHIACgDQAVgVAbgGQANgKAQgFQAJgDAIgBQAPgIARgCIAPgBQASgFATADQAZADAUALQATANANAUQAMAUADAXQACAZgGAUQgKAegZAUQgaAVgfACIgHAAIgLADIgEABIgNAFIgHAFQgJAKgNAIIgHAEIgEAFIgDAEQgGAQgLANIgBACIAAAAIAHAKQAOAVADAYQADAVgGAVQAGANADAPQAFAigNAdQgHAQgMAMQAAANgEAOQgHAcgUATQgUAUgcAHQgNADgNAAQgOAAgOgEgABphdQgLgCgIgDQgKgGgGgKQgGgKABgLQAAgLAHgKQAHgKAKgEQAKgEANAAIABAAQADgGAFgDQAIgGAJgCIADgFQAHgKALgFQAHgCAGgBQAEgKAJgHQAHgFAIgCIAGgIQAGgFAHgDQACgGAEgGQAIgKAKgDQACgOALgJIAIgGQAAgJAFgKIAFgHIgBgDQgGgPACgPQADgOAIgMIAAgDQAAgTAMgQIAGgGQgFgWAMgUQgDgHABgIIgDgGQgFgPACgPQABgPAJgNQAIgNANgIQAQgKATAAQAfAAAUAYQAUAagHAeQgDANgJAMQgCALgGAJQADAKgBAKQgDAXgRAPQACAOgFAOQgCAHgEAHIgBALQgEAfgaAOIgDABQAAAQgLALIgHAGIgDACIgBAEQgCAVgTAKIgFACQgCAOgMAKIgJAGQgEANgNAIQgGAEgGACQgFAIgKAGQgFADgIACIgHAAQgEALgJAHQgHAFgJABQgDAHgFAFQgJAIgKACIgCADQgLARgVABIgDAAIgNgBg");
	var mask_graphics_97 = new cjs.Graphics().p("Ak0JaQgdgIgXgZQgWgXgLggQgFgQgCgNQgHgLgEgMQgFgRgEggIgCgQQgGgSAAgUQAAgaAMgVQAIgQATgSQABgJADgJIACgHQgBgUAIgVQAHgQAKgNQAHgWAQgRIAEgJQAOgdAagPIAIgEQAHgJAIgHIALgHIACgDQAVgVAbgGQANgKAQgFQAJgDAIgCQAPgIARgCIAPgBQASgEATACQAZADAUAMQATANANAUQAMAUADAXQACAZgGAUQgKAegZAUQgaAVgfACIgHAAIgLADIgEABIgNAFIgHAFQgJAKgNAIIgHAEIgEAFIgDAEQgGAQgLANIgBACIAAAAIAHAKQAOAVADAYQADAVgGAVQAGANADAPQAFAigNAdQgHAQgMAMQAAANgEAOQgHAcgUATQgUAUgcAHQgNADgNAAQgOAAgOgEgABphNQgLgCgIgDQgKgGgGgKQgGgKABgLQAAgLAHgKQAHgKAKgEQAKgEANAAIABAAQADgGAFgDQAIgGAJgCIADgFQAHgKALgFQAHgCAGgBQAEgKAJgHQAHgFAIgCIAGgIQAGgFAHgDQACgGAEgGQAIgKAKgDQACgOALgJIAIgGQAAgJAFgKIAFgHIgBgDQgGgPACgPQADgOAIgMIAAgDQAAgTAMgQIAGgGQgFgWAMgUQgDgIABgHIgDgGQgFgPACgPIAAgDIgCgEQgFgSAFgUQAGgTAPgMQAOgMAUgDQAVgCARAJQARAIAKASQAKARgBATIAAAEQAIASgFAVQgDANgJAMQgCALgGAJQADAKgBAKQgDAXgRAPQACAOgFAOQgCAHgEAHIgBALQgEAfgaAOIgDABQAAAQgLALIgHAGIgDACIgBAEQgCAVgTAKIgFACQgCAOgMAKIgJAGQgEANgNAIQgGAEgGACQgFAIgKAGQgFADgIACIgHAAQgEALgJAHQgHAFgJABQgDAGgFAGQgJAIgKACIgCADQgLARgVABIgDAAIgNgBg");
	var mask_graphics_98 = new cjs.Graphics().p("Ak0JqQgdgJgXgZQgWgXgLgfQgFgQgCgNQgHgLgEgMQgFgSgEgfIgCgQQgGgTAAgTQAAgbAMgVQAIgPATgSQABgKADgJIACgGQgBgVAIgUQAHgRAKgMQAHgXAQgQIAEgJQAOgdAagQIAIgEQAHgIAIgHIALgIIACgCQAVgVAbgHQANgKAQgFQAJgDAIgBQAPgIARgDIAPgBQASgEATACQAZADAUANQATAMANAVQAMAUADAXQACAYgGAVQgKAegZAUQgaAVgfACIgHAAIgLACIgEACIgNAEIgHAFQgJALgNAIIgHAEIgEAEIgDAEQgGAQgLANIgBACIAAABIAHAJQAOAVADAYQADAVgGAWQAGANADAPQAFAigNAdQgHAPgMANQAAANgEANQgHAcgUAUQgUATgcAHQgNAEgNAAQgOAAgOgEgABpg9QgLgCgIgEQgKgFgGgKQgGgLABgLQAAgLAHgKQAHgKAKgEQAKgEANAAIABAAQADgFAFgEQAIgGAJgCIADgFQAHgJALgFQAHgDAGAAQAEgKAJgHQAHgFAIgCIAGgIQAGgGAHgDQACgGAEgFQAIgKAKgEQACgNALgKIAIgFQAAgKAFgKIAFgHIgBgDQgGgOACgQQADgNAIgMIAAgEQAAgSAMgQIAGgHQgFgWAMgTQgDgIABgIIgDgFQgFgPACgPIAAgDIgCgFIgCgKIgBgCQgJgOgBgSQgBgRAHgQQAIgPAOgKQAPgKARgCQAdgDAXAUQARAQADAYIAAAFIABABQAKARgBATIAAAEQAIATgFAUQgDANgJAMQgCALgGAKQADAJgBALQgDAXgRAOQACAOgFAOQgCAIgEAGIgBALQgEAfgaAOIgDACQAAAPgLAMIgHAGIgDACIgBADQgCAVgTALIgFACQgCANgMAKIgJAGQgEANgNAJQgGAEgGABQgFAJgKAFQgFAEgIABIgHABQgEAKgJAHQgHAFgJACQgDAGgFAFQgJAIgKACIgCAEQgLAQgVACIgDAAIgNgBg");
	var mask_graphics_99 = new cjs.Graphics().p("Ak0J1QgdgJgXgZQgWgXgLgfQgFgQgCgNQgHgLgEgMQgFgSgEgfIgCgQQgGgSAAgUQAAgbAMgVQAIgPATgSQABgJADgKIACgGQgBgVAIgUQAHgQAKgNQAHgWAQgRIAEgJQAOgdAagQIAIgEQAHgIAIgHIALgHIACgDQAVgVAbgHQANgJAQgGQAJgCAIgCQAPgIARgDIAPgBQASgEATACQAZADAUANQATAMANAVQAMAUADAXQACAYgGAVQgKAegZAUQgaAVgfACIgHAAIgLACIgEACIgNAFIgHAEQgJALgNAIIgHAEIgEAEIgDAEQgGARgLANIgBACIAAAAIAHAJQAOAVADAYQADAWgGAVQAGANADAPQAFAigNAdQgHAQgMAMQAAANgEANQgHAcgUAUQgUATgcAHQgNAEgNAAQgOAAgOgEgABpgyQgLgCgIgEQgKgFgGgKQgGgLABgLQAAgLAHgKQAHgKAKgEQAKgEANAAIABAAQADgFAFgEQAIgFAJgCIADgGQAHgJALgFQAHgDAGAAQAEgKAJgHQAHgFAIgCIAGgIQAGgFAHgDQACgGAEgGQAIgKAKgEQACgNALgKIAIgFQAAgKAFgKIAFgGIgBgEQgGgOACgQQADgNAIgMIAAgEQAAgSAMgQIAGgGQgFgXAMgTQgDgIABgIIgDgFQgFgPACgPIAAgDIgCgFIgCgJIgBgDIgKgEQgMgHgJgNQgIgMgCgPQgCgOAEgPQAFgOAKgLQAIgJANgGQALgEAJgBQAjgEAWAXIAIAJQAKAEAKAIQARAQADAYIAAAGIABAAQAKARgBATIAAAFQAIASgFAUQgDAOgJALQgCAMgGAJQADAKgBAKQgDAXgRAOQACAOgFAOQgCAIgEAGIgBALQgEAfgaAOIgDACQAAAPgLAMIgHAGIgDACIgBADQgCAVgTALIgFACQgCANgMAKIgJAGQgEAOgNAIQgGAEgGACQgFAIgKAFQgFAEgIABIgHABQgEALgJAGQgHAGgJABQgDAGgFAFQgJAJgKACIgCADQgLAQgVACIgDAAIgNgBg");
	var mask_graphics_100 = new cjs.Graphics().p("Ak0J2QgdgJgXgZQgWgXgLgfQgFgQgCgNQgHgLgEgMQgFgSgEgfIgCgQQgGgSAAgUQAAgbAMgVQAIgPATgSQABgJADgKIACgGQgBgVAIgUQAHgQAKgNQAHgWAQgRIAEgJQAOgdAagQIAIgEQAHgIAIgHIALgHIACgDQAVgVAbgHQANgJAQgGQAJgDAIgBQAPgIARgDIAPgBQASgEATACQAZADAUANQATAMANAVQAMAUADAXQACAYgGAVQgKAegZAUQgaAVgfACIgHAAIgLACIgEACIgNAFIgHAEQgJALgNAIIgHAEIgEAEIgDAEQgGARgLANIgBACIAAAAIAHAJQAOAVADAYQADAVgGAWQAGANADAPQAFAigNAdQgHAQgMAMQAAANgEANQgHAcgUAUQgUATgcAHQgNAEgNAAQgOAAgOgEgABpgxQgLgCgIgEQgKgFgGgKQgGgLABgLQAAgLAHgKQAHgKAKgEQAKgEANAAIABAAQADgFAFgEQAIgGAJgBIADgGQAHgJALgFQAHgDAGAAQAEgKAJgHQAHgFAIgCIAGgIQAGgFAHgDQACgGAEgGQAIgKAKgEQACgNALgKIAIgFQAAgKAFgKIAFgGIgBgEQgGgOACgQQADgNAIgMIAAgEQAAgSAMgQIAGgGQgFgXAMgTQgDgIABgIIgDgFQgFgPACgPIAAgDIgCgFIgCgJIgBgCQgNAEgPgCQgRgCgOgKQgPgLgHgSQgHgTAEgTQAEgVARgOQARgOAVgCQAPgBAPAGIAMgDQAjgEAWAXIAIAJQAKAEAKAIQARAQADAYIAAAGIABAAQAKARgBATIAAAFQAIASgFAUQgDAOgJALQgCAMgGAJQADAKgBAKQgDAXgRAOQACAOgFAOQgCAIgEAGIgBALQgEAfgaAOIgDACQAAAPgLAMIgHAGIgDACIgBADQgCAVgTALIgFACQgCANgMAKIgJAGQgEAOgNAIQgGAEgGACQgFAIgKAFQgFAEgIABIgHABQgEALgJAGQgHAGgJABQgDAGgFAFQgJAJgKACIgCADQgLAQgVACIgDAAIgNgBg");
	var mask_graphics_101 = new cjs.Graphics().p("Ak0J2QgdgJgXgZQgWgXgLgfQgFgQgCgNQgHgLgEgMQgFgSgEgfIgCgQQgGgSAAgUQAAgbAMgVQAIgPATgSQABgJADgKIACgGQgBgVAIgUQAHgQAKgNQAHgWAQgRIAEgJQAOgdAagQIAIgEQAHgIAIgHIALgHIACgDQAVgVAbgHQANgJAQgGQAJgDAIgBQAPgIARgDIAPgBQASgEATACQAZADAUANQATAMANAVQAMAUADAXQACAYgGAVQgKAegZAUQgaAVgfACIgHAAIgLACIgEACIgNAFIgHAEQgJALgNAIIgHAEIgEAEIgDAEQgGARgLANIgBACIAAAAIAHAJQAOAVADAYQADAVgGAWQAGANADAPQAFAigNAdQgHAQgMAMQAAANgEANQgHAcgUAUQgUATgcAHQgNAEgNAAQgOAAgOgEgABpgxQgLgCgIgEQgKgFgGgKQgGgLABgLQAAgLAHgKQAHgKAKgEQAKgEANAAIABAAQADgFAFgEQAIgGAJgBIADgGQAHgJALgFQAHgDAGAAQAEgKAJgHQAHgFAIgCIAGgIQAGgFAHgDQACgGAEgGQAIgKAKgEQACgNALgKIAIgFQAAgKAFgKIAFgGIgBgEQgGgOACgQQADgNAIgMIAAgEQAAgSAMgQIAGgGQgFgXAMgTQgDgIABgIIgDgFQgFgPACgPIAAgDIgCgFIgCgJIgBgCQgIACgHAAIgJAEQgKAFgOABQgQABgPgIQgPgHgKgNQgKgNgCgQQgDgRAGgPQAHgUASgMQAQgKATgBQANgIAPgBQAPgBAPAGIAMgDQAjgEAWAXIAIAJQAKAEAKAIQARAQADAYIAAAGIABAAQAKARgBATIAAAFQAIASgFAUQgDAOgJALQgCAMgGAJQADAKgBAKQgDAXgRAOQACAOgFAOQgCAIgEAGIgBALQgEAfgaAOIgDACQAAAPgLAMIgHAGIgDACIgBADQgCAVgTALIgFACQgCANgMAKIgJAGQgEAOgNAIQgGAEgGACQgFAIgKAFQgFAEgIABIgHABQgEALgJAGQgHAGgJABQgDAGgFAFQgJAJgKACIgCADQgLAQgVACIgDAAIgNgBg");
	var mask_graphics_102 = new cjs.Graphics().p("Ak0J2QgdgJgXgZQgWgXgLgfQgFgQgCgNQgHgLgEgMQgFgSgEgfIgCgQQgGgSAAgUQAAgbAMgVQAIgPATgSQABgJADgKIACgGQgBgVAIgUQAHgQAKgNQAHgWAQgRIAEgJQAOgdAagQIAIgEQAHgIAIgHIALgHIACgDQAVgVAbgHQANgJAQgGQAJgDAIgBQAPgIARgDIAPgBQASgEATACQAZADAUANQATAMANAVQAMAUADAXQACAYgGAVQgKAegZAUQgaAVgfACIgHAAIgLACIgEACIgNAFIgHAEQgJALgNAIIgHAEIgEAEIgDAEQgGARgLANIgBACIAAAAIAHAJQAOAVADAYQADAVgGAWQAGANADAPQAFAigNAdQgHAQgMAMQAAANgEANQgHAcgUAUQgUATgcAHQgNAEgNAAQgOAAgOgEgABpgxQgLgCgIgEQgKgFgGgKQgGgLABgLQAAgLAHgKQAHgKAKgEQAKgEANAAIABAAQADgFAFgEQAIgGAJgBIADgGQAHgJALgFQAHgDAGAAQAEgKAJgHQAHgFAIgCIAGgIQAGgFAHgDQACgGAEgGQAIgKAKgEQACgNALgKIAIgFQAAgKAFgKIAFgGIgBgEQgGgOACgQQADgNAIgMIAAgEQAAgSAMgQIAGgGQgFgXAMgTQgDgIABgIIgDgFQgFgPACgPIAAgDIgCgFIgCgJIgBgCQgIACgHAAIgJAEQgGADgJACQgDAPgLAMQgKANgPAGQgOAGgRgBQgRgCgNgJQgGgEgJgJQgMgQgDgQQgCgPAEgPQAFgOAKgLQAKgLAOgGIANgDIACgHQAHgUASgMQAQgKATgBQANgIAPgBQAPgBAPAGIAMgDQAjgEAWAXIAIAJQAKAEAKAIQARAQADAYIAAAGIABAAQAKARgBATIAAAFQAIASgFAUQgDAOgJALQgCAMgGAJQADAKgBAKQgDAXgRAOQACAOgFAOQgCAIgEAGIgBALQgEAfgaAOIgDACQAAAPgLAMIgHAGIgDACIgBADQgCAVgTALIgFACQgCANgMAKIgJAGQgEAOgNAIQgGAEgGACQgFAIgKAFQgFAEgIABIgHABQgEALgJAGQgHAGgJABQgDAGgFAFQgJAJgKACIgCADQgLAQgVACIgDAAIgNgBg");
	var mask_graphics_103 = new cjs.Graphics().p("Ak0J2QgdgJgXgZQgWgXgLgfQgFgQgCgNQgHgLgEgMQgFgSgEgfIgCgQQgGgSAAgUQAAgbAMgVQAIgPATgSQABgJADgKIACgGQgBgVAIgUQAHgQAKgNQAHgWAQgRIAEgJQAOgdAagQIAIgEQAHgIAIgHIALgHIACgDQAVgVAbgHQANgJAQgGQAJgDAIgBQAPgIARgDIAPgBQASgEATACQAZADAUANQATAMANAVQAMAUADAXQACAYgGAVQgKAegZAUQgaAVgfACIgHAAIgLACIgEACIgNAFIgHAEQgJALgNAIIgHAEIgEAEIgDAEQgGARgLANIgBACIAAAAIAHAJQAOAVADAYQADAVgGAWQAGANADAPQAFAigNAdQgHAQgMAMQAAANgEANQgHAcgUAUQgUATgcAHQgNAEgNAAQgOAAgOgEgABpgxQgLgCgIgEQgKgFgGgKQgGgLABgLQAAgLAHgKQAHgKAKgEQAKgEANAAIABAAQADgFAFgEQAIgGAJgBIADgGQAHgJALgFQAHgDAGAAQAEgKAJgHQAHgFAIgCIAGgIQAGgFAHgDQACgGAEgGQAIgKAKgEQACgNALgKIAIgFQAAgKAFgKIAFgGIgBgEQgGgOACgQQADgNAIgMIAAgEQAAgSAMgQIAGgGQgFgXAMgTQgDgIABgIIgDgFQgFgPACgPIAAgDIgCgFIgCgJIgBgCQgIACgHAAIgJAEQgGADgJACQgDAPgLAMQgKANgPAGIgCABIgHAJQgNANgQAEQgIACgKAAQgbAAgTgSQgRgPgDgWQgDgWALgTQAIgPAQgJIAIgEIAIgLQAKgLAOgGIANgDIACgHQAHgUASgMQAQgKATgBQANgIAPgBQAPgBAPAGIAMgDQAjgEAWAXIAIAJQAKAEAKAIQARAQADAYIAAAGIABAAQAKARgBATIAAAFQAIASgFAUQgDAOgJALQgCAMgGAJQADAKgBAKQgDAXgRAOQACAOgFAOQgCAIgEAGIgBALQgEAfgaAOIgDACQAAAPgLAMIgHAGIgDACIgBADQgCAVgTALIgFACQgCANgMAKIgJAGQgEAOgNAIQgGAEgGACQgFAIgKAFQgFAEgIABIgHABQgEALgJAGQgHAGgJABQgDAGgFAFQgJAJgKACIgCADQgLAQgVACIgDAAIgNgBg");
	var mask_graphics_104 = new cjs.Graphics().p("Ak0J2QgdgJgXgZQgWgXgLgfQgFgQgCgNQgHgLgEgMQgFgSgEgfIgCgQQgGgSAAgUQAAgbAMgVQAIgPATgSQABgJADgKIACgGQgBgVAIgUQAHgQAKgNQAHgWAQgRIAEgJQAOgdAagQIAIgEQAHgIAIgHIALgHIACgDQAVgVAbgHQANgJAQgGQAJgDAIgBQAPgIARgDIAPgBQASgEATACQAZADAUANQATAMANAVQAMAUADAXQACAYgGAVQgKAegZAUQgaAVgfACIgHAAIgLACIgEACIgNAFIgHAEQgJALgNAIIgHAEIgEAEIgDAEQgGARgLANIgBACIAAAAIAHAJQAOAVADAYQADAVgGAWQAGANADAPQAFAigNAdQgHAQgMAMQAAANgEANQgHAcgUAUQgUATgcAHQgNAEgNAAQgOAAgOgEgABpgxQgLgCgIgEQgKgFgGgKQgGgLABgLQAAgLAHgKQAHgKAKgEQAKgEANAAIABAAQADgFAFgEQAIgGAJgBIADgGQAHgJALgFQAHgDAGAAQAEgKAJgHQAHgFAIgCIAGgIQAGgFAHgDQACgGAEgGQAIgKAKgEQACgNALgKIAIgFQAAgKAFgKIAFgGIgBgEQgGgOACgQQADgNAIgMIAAgEQAAgSAMgQIAGgGQgFgXAMgTQgDgIABgIIgDgFQgFgPACgPIAAgDIgCgFIgCgJIgBgCQgIACgHAAIgJAEQgGADgJACQgDAPgLAMQgKANgPAGIgCABIgHAJQgNANgQAEQgIACgKAAIgBAAQgCAYgSASQgMALgQAEQgPAFgQgDQgPgDgNgLQgNgKgGgPQgFgNAAgPIADgRQAFgSANgNQAOgNARgDQAHgCAHAAQACgLAGgLQAIgPAQgJIAIgEIAIgLQAKgLAOgGIANgDIACgHQAHgUASgMQAQgKATgBQANgIAPgBQAPgBAPAGIAMgDQAjgEAWAXIAIAJQAKAEAKAIQARAQADAYIAAAGIABAAQAKARgBATIAAAFQAIASgFAUQgDAOgJALQgCAMgGAJQADAKgBAKQgDAXgRAOQACAOgFAOQgCAIgEAGIgBALQgEAfgaAOIgDACQAAAPgLAMIgHAGIgDACIgBADQgCAVgTALIgFACQgCANgMAKIgJAGQgEAOgNAIQgGAEgGACQgFAIgKAFQgFAEgIABIgHABQgEALgJAGQgHAGgJABQgDAGgFAFQgJAJgKACIgCADQgLAQgVACIgDAAIgNgBg");
	var mask_graphics_105 = new cjs.Graphics().p("Ak0J2QgdgJgXgZQgWgXgLgfQgFgQgCgNQgHgLgEgMQgFgSgEgfIgCgQQgGgSAAgUQAAgbAMgVQAIgPATgSQABgJADgKIACgGQgBgVAIgUQAHgQAKgNQAHgWAQgRIAEgJQAOgdAagQIAIgEQAHgIAIgHIALgHIACgDQAVgVAbgHQANgJAQgGQAJgDAIgBQAPgIARgDIAPgBQASgEATACQAZADAUANQATAMANAVQAMAUADAXQACAYgGAVQgKAegZAUQgaAVgfACIgHAAIgLACIgEACIgNAFIgHAEQgJALgNAIIgHAEIgEAEIgDAEQgGARgLANIgBACIAAAAIAHAJQAOAVADAYQADAVgGAWQAGANADAPQAFAigNAdQgHAQgMAMQAAANgEANQgHAcgUAUQgUATgcAHQgNAEgNAAQgOAAgOgEgABpgxQgLgCgIgEQgKgFgGgKQgGgLABgLQAAgLAHgKQAHgKAKgEQAKgEANAAIABAAQADgFAFgEQAIgGAJgBIADgGQAHgJALgFQAHgDAGAAQAEgKAJgHQAHgFAIgCIAGgIQAGgFAHgDQACgGAEgGQAIgKAKgEQACgNALgKIAIgFQAAgKAFgKIAFgGIgBgEQgGgOACgQQADgNAIgMIAAgEQAAgSAMgQIAGgGQgFgXAMgTQgDgIABgIIgDgFQgFgPACgPIAAgDIgCgFIgCgJIgBgCQgIACgHAAIgJAEQgGADgJACQgDAPgLAMQgKANgPAGIgCABIgHAJQgNANgQAEQgIACgKAAIgBAAQgCAYgSASQgMALgQAEQgPAFgQgDQgNgDgKgHQgLAJgNAEQgTAHgTgFQgUgFgNgOQgKgLgEgPQgEgOACgOQAEgUAOgPQAPgPAUgEQAWgFAVAKIAGADIABgBQAOgNARgDQAHgCAHAAQACgLAGgLQAIgPAQgJIAIgEIAIgLQAKgLAOgGIANgDIACgHQAHgUASgMQAQgKATgBQANgIAPgBQAPgBAPAGIAMgDQAjgEAWAXIAIAJQAKAEAKAIQARAQADAYIAAAGIABAAQAKARgBATIAAAFQAIASgFAUQgDAOgJALQgCAMgGAJQADAKgBAKQgDAXgRAOQACAOgFAOQgCAIgEAGIgBALQgEAfgaAOIgDACQAAAPgLAMIgHAGIgDACIgBADQgCAVgTALIgFACQgCANgMAKIgJAGQgEAOgNAIQgGAEgGACQgFAIgKAFQgFAEgIABIgHABQgEALgJAGQgHAGgJABQgDAGgFAFQgJAJgKACIgCADQgLAQgVACIgDAAIgNgBg");
	var mask_graphics_106 = new cjs.Graphics().p("Ak0J2QgdgJgXgZQgWgXgLgfQgFgQgCgNQgHgLgEgMQgFgSgEgfIgCgQQgGgSAAgUQAAgbAMgVQAIgPATgSQABgJADgKIACgGQgBgVAIgUQAHgQAKgNQAHgWAQgRIAEgJQAOgdAagQIAIgEQAHgIAIgHIALgHIACgDQAVgVAbgHQANgJAQgGQAJgDAIgBQAPgIARgDIAPgBQASgEATACQAZADAUANQATAMANAVQAMAUADAXQACAYgGAVQgKAegZAUQgaAVgfACIgHAAIgLACIgEACIgNAFIgHAEQgJALgNAIIgHAEIgEAEIgDAEQgGARgLANIgBACIAAAAIAHAJQAOAVADAYQADAVgGAWQAGANADAPQAFAigNAdQgHAQgMAMQAAANgEANQgHAcgUAUQgUATgcAHQgNAEgNAAQgOAAgOgEgABpgxQgLgCgIgEQgKgFgGgKQgGgLABgLQAAgLAHgKQAHgKAKgEQAKgEANAAIABAAQADgFAFgEQAIgGAJgBIADgGQAHgJALgFQAHgDAGAAQAEgKAJgHQAHgFAIgCIAGgIQAGgFAHgDQACgGAEgGQAIgKAKgEQACgNALgKIAIgFQAAgKAFgKIAFgGIgBgEQgGgOACgQQADgNAIgMIAAgEQAAgSAMgQIAGgGQgFgXAMgTQgDgIABgIIgDgFQgFgPACgPIAAgDIgCgFIgCgJIgBgCQgIACgHAAIgJAEQgGADgJACQgDAPgLAMQgKANgPAGIgCABIgHAJQgNANgQAEQgIACgKAAIgBAAQgCAYgSASQgMALgQAEQgPAFgQgDQgNgDgKgHQgLAJgNAEQgHADgHABQgLAKgMAGQgUAKgUABQgrADgfgcQghgcgCgqQgCgdAQgaQAPgbAagNQAmgTAoANQAjALATAfIAIADIAGADIABgBQAOgNARgDQAHgCAHAAQACgLAGgLQAIgPAQgJIAIgEIAIgLQAKgLAOgGIANgDIACgHQAHgUASgMQAQgKATgBQANgIAPgBQAPgBAPAGIAMgDQAjgEAWAXIAIAJQAKAEAKAIQARAQADAYIAAAGIABAAQAKARgBATIAAAFQAIASgFAUQgDAOgJALQgCAMgGAJQADAKgBAKQgDAXgRAOQACAOgFAOQgCAIgEAGIgBALQgEAfgaAOIgDACQAAAPgLAMIgHAGIgDACIgBADQgCAVgTALIgFACQgCANgMAKIgJAGQgEAOgNAIQgGAEgGACQgFAIgKAFQgFAEgIABIgHABQgEALgJAGQgHAGgJABQgDAGgFAFQgJAJgKACIgCADQgLAQgVACIgDAAIgNgBg");
	var mask_graphics_107 = new cjs.Graphics().p("Ak0J2QgdgJgXgZQgWgXgLgfQgFgQgCgNQgHgLgEgMQgFgSgEgfIgCgQQgGgSAAgUQAAgbAMgVQAIgPATgSQABgJADgKIACgGQgBgVAIgUQAHgQAKgNQAHgWAQgRIAEgJQAOgdAagQIAIgEQAHgIAIgHIALgHIACgDQAVgVAbgHQANgJAQgGQAJgDAIgBQAPgIARgDIAPgBQASgEATACQAZADAUANQATAMANAVQAMAUADAXQACAYgGAVQgKAegZAUQgaAVgfACIgHAAIgLACIgEACIgNAFIgHAEQgJALgNAIIgHAEIgEAEIgDAEQgGARgLANIgBACIAAAAIAHAJQAOAVADAYQADAVgGAWQAGANADAPQAFAigNAdQgHAQgMAMQAAANgEANQgHAcgUAUQgUATgcAHQgNAEgNAAQgOAAgOgEgABpgxQgLgCgIgEQgKgFgGgKQgGgLABgLQAAgLAHgKQAHgKAKgEQAKgEANAAIABAAQADgFAFgEQAIgGAJgBIADgGQAHgJALgFQAHgDAGAAQAEgKAJgHQAHgFAIgCIAGgIQAGgFAHgDQACgGAEgGQAIgKAKgEQACgNALgKIAIgFQAAgKAFgKIAFgGIgBgEQgGgOACgQQADgNAIgMIAAgEQAAgSAMgQIAGgGQgFgXAMgTQgDgIABgIIgDgFQgFgPACgPIAAgDIgCgFIgCgJIgBgCQgIACgHAAIgJAEQgGADgJACQgDAPgLAMQgKANgPAGIgCABIgHAJQgNANgQAEQgIACgKAAIgBAAQgCAYgSASQgMALgQAEQgPAFgQgDQgNgDgKgHQgLAJgNAEQgHADgHABQgLAKgMAGQgUAKgUABQgrADgfgcIgHgHQgJgBgJgEQgXgJgPgRQgagdAAgnQAAgnAagcQAVgXAhgHQAggHAeANQATAIAOAPIAMADQAjALATAfIAIADIAGADIABgBQAOgNARgDQAHgCAHAAQACgLAGgLQAIgPAQgJIAIgEIAIgLQAKgLAOgGIANgDIACgHQAHgUASgMQAQgKATgBQANgIAPgBQAPgBAPAGIAMgDQAjgEAWAXIAIAJQAKAEAKAIQARAQADAYIAAAGIABAAQAKARgBATIAAAFQAIASgFAUQgDAOgJALQgCAMgGAJQADAKgBAKQgDAXgRAOQACAOgFAOQgCAIgEAGIgBALQgEAfgaAOIgDACQAAAPgLAMIgHAGIgDACIgBADQgCAVgTALIgFACQgCANgMAKIgJAGQgEAOgNAIQgGAEgGACQgFAIgKAFQgFAEgIABIgHABQgEALgJAGQgHAGgJABQgDAGgFAFQgJAJgKACIgCADQgLAQgVACIgDAAIgNgBg");
	var mask_graphics_108 = new cjs.Graphics().p("Ak0J2QgdgJgXgZQgWgXgLgfQgFgQgCgNQgHgLgEgMQgFgSgEgfIgCgQQgGgSAAgUQAAgbAMgVQAIgPATgSQABgJADgKIACgGQgBgVAIgUQAHgQAKgNQAHgWAQgRIAEgJQAOgdAagQIAIgEQAHgIAIgHIALgHIACgDQAVgVAbgHQANgJAQgGQAJgDAIgBQAPgIARgDIAPgBQASgEATACQAZADAUANQATAMANAVQAMAUADAXQACAYgGAVQgKAegZAUQgaAVgfACIgHAAIgLACIgEACIgNAFIgHAEQgJALgNAIIgHAEIgEAEIgDAEQgGARgLANIgBACIAAAAIAHAJQAOAVADAYQADAVgGAWQAGANADAPQAFAigNAdQgHAQgMAMQAAANgEANQgHAcgUAUQgUATgcAHQgNAEgNAAQgOAAgOgEgABpgxQgLgCgIgEQgKgFgGgKQgGgLABgLQAAgLAHgKQAHgKAKgEQAKgEANAAIABAAQADgFAFgEQAIgGAJgBIADgGQAHgJALgFQAHgDAGAAQAEgKAJgHQAHgFAIgCIAGgIQAGgFAHgDQACgGAEgGQAIgKAKgEQACgNALgKIAIgFQAAgKAFgKIAFgGIgBgEQgGgOACgQQADgNAIgMIAAgEQAAgSAMgQIAGgGQgFgXAMgTQgDgIABgIIgDgFQgFgPACgPIAAgDIgCgFIgCgJIgBgCQgIACgHAAIgJAEQgGADgJACQgDAPgLAMQgKANgPAGIgCABIgHAJQgNANgQAEQgIACgKAAIgBAAQgCAYgSASQgMALgQAEQgPAFgQgDQgNgDgKgHQgLAJgNAEQgHADgHABQgLAKgMAGQgUAKgUABQgrADgfgcIgHgHQgJgBgJgEQgXgJgPgRQgPgQgGgTQgNgEgMgHQgPgIgMgNQgRgTgFgaQgFgaAIgYQAHgYATgSQATgTAYgHQAdgJAeAJQAUAGARAPQARAPAIAUIAEAKIAOAFQATAIAOAPIAMADQAjALATAfIAIADIAGADIABgBQAOgNARgDQAHgCAHAAQACgLAGgLQAIgPAQgJIAIgEIAIgLQAKgLAOgGIANgDIACgHQAHgUASgMQAQgKATgBQANgIAPgBQAPgBAPAGIAMgDQAjgEAWAXIAIAJQAKAEAKAIQARAQADAYIAAAGIABAAQAKARgBATIAAAFQAIASgFAUQgDAOgJALQgCAMgGAJQADAKgBAKQgDAXgRAOQACAOgFAOQgCAIgEAGIgBALQgEAfgaAOIgDACQAAAPgLAMIgHAGIgDACIgBADQgCAVgTALIgFACQgCANgMAKIgJAGQgEAOgNAIQgGAEgGACQgFAIgKAFQgFAEgIABIgHABQgEALgJAGQgHAGgJABQgDAGgFAFQgJAJgKACIgCADQgLAQgVACIgDAAIgNgBg");
	var mask_graphics_109 = new cjs.Graphics().p("Ak0KAQgdgJgXgZQgWgXgLgfQgFgQgCgNQgHgLgEgMQgFgSgEgfIgCgQQgGgTAAgTQAAgbAMgVQAIgPATgSQABgKADgJIACgGQgBgVAIgUQAHgRAKgMQAHgWAQgRIAEgJQAOgdAagQIAIgEQAHgIAIgHIALgIIACgCQAVgVAbgHQANgKAQgFQAJgDAIgBQAPgIARgDIAPgBQASgEATACQAZADAUANQATAMANAVQAMAUADAXQACAYgGAVQgKAegZAUQgaAVgfACIgHAAIgLACIgEACIgNAEIgHAFQgJALgNAIIgHAEIgEAEIgDAEQgGAQgLANIgBACIAAABIAHAJQAOAVADAYQADAVgGAWQAGANADAPQAFAigNAdQgHAPgMANQAAANgEANQgHAcgUAUQgUATgcAHQgNAEgNAAQgOAAgOgEgABpgnQgLgCgIgEQgKgFgGgKQgGgLABgLQAAgLAHgKQAHgKAKgEQAKgEANAAIABAAQADgFAFgEQAIgGAJgCIADgFQAHgJALgFQAHgDAGAAQAEgKAJgHQAHgFAIgCIAGgIQAGgGAHgDQACgGAEgFQAIgKAKgEQACgNALgKIAIgFQAAgKAFgKIAFgHIgBgDQgGgOACgQQADgNAIgMIAAgEQAAgSAMgQIAGgHQgFgWAMgTQgDgIABgIIgDgFQgFgPACgPIAAgDIgCgFIgCgKIgBgCQgIADgHAAIgJAEQgGADgJACQgDAPgLAMQgKANgPAGIgCABIgHAJQgNANgQAEQgIACgKAAIgBAAQgCAYgSASQgMALgQAEQgPAFgQgDQgNgDgKgIQgLAJgNAFQgHADgHABQgLAKgMAGQgUAKgUABQgrADgfgcIgHgHQgJgCgJgDQgXgJgPgRQgPgQgGgTQgNgEgMgHQgLgGgKgJIgRABQgVAAgTgJQgWgJgQgUQgPgUgFgXQgFgYAHgYQAHgYARgSQATgVAdgIQAcgIAbAJQAZAHASATQAXgEAXAHQAUAGARAPQARAPAIAUIAEAKIAOAFQATAIAOAPIAMADQAjALATAfIAIADIAGADIABgBQAOgNARgDQAHgCAHAAQACgMAGgKQAIgPAQgJIAIgFIAIgKQAKgLAOgGIANgDIACgHQAHgUASgMQAQgLATAAQANgIAPgBQAPgBAPAFIAMgCQAjgEAWAXIAIAIQAKAFAKAIQARAQADAYIAAAFIABABQAKARgBATIAAAEQAIATgFAUQgDAOgJALQgCALgGAKQADAJgBALQgDAXgRAOQACAOgFAOQgCAIgEAGIgBALQgEAfgaAOIgDACQAAAPgLAMIgHAGIgDACIgBADQgCAVgTALIgFACQgCANgMAKIgJAGQgEANgNAJQgGAEgGABQgFAJgKAFQgFAEgIABIgHABQgEALgJAGQgHAFgJACQgDAGgFAFQgJAIgKACIgCAEQgLAQgVACIgDAAIgNgBg");
	var mask_graphics_110 = new cjs.Graphics().p("AkmKAQgdgJgXgZQgVgXgLgfQgGgQgCgNQgGgLgEgMQgGgSgEgfIgBgQQgGgTAAgTQAAgbALgVQAJgPATgSQABgKACgJIACgGQAAgVAIgUQAGgRALgMQAHgWAQgRIAEgJQAOgdAagQIAHgEQAHgIAJgHIAKgIIADgCQAVgVAagHQANgKARgFQAIgDAJgBQAPgIAQgDIAQgBQASgEASACQAZADAUANQATAMANAVQAMAUADAXQADAYgHAVQgKAegYAUQgaAVgfACIgIAAIgLACIgDACIgOAEIgGAFQgKALgNAIIgGAEIgEAEIgEAEQgGAQgLANIgBACIAAABIAHAJQAOAVAEAYQADAVgGAWQAGANACAPQAGAigOAdQgHAPgLANQgBANgDANQgIAcgTAUQgUATgcAHQgOAEgNAAQgOAAgOgEgAB4gnQgMgCgHgEQgKgFgGgKQgGgLAAgLQABgLAGgKQAHgKAKgEQAKgEAOAAIABAAQADgFAFgEQAHgGAKgCIADgFQAGgJAMgFQAGgDAGAAQAEgKAKgHQAGgFAIgCIAGgIQAHgGAHgDQACgGAEgFQAHgKAKgEQADgNALgKIAHgFQAAgKAGgKIAFgHIgCgDQgFgOACgQQACgNAJgMIgBgEQAAgSAMgQIAGgHQgFgWAMgTQgCgIAAgIIgCgFQgGgPACgPIABgDIgCgFIgCgKIgBgCQgIADgIAAIgIAEQgHADgIACQgEAPgKAMQgLANgOAGIgCABIgIAJQgMANgRAEQgIACgKAAIAAAAQgDAYgSASQgLALgQAEQgQAFgPgDQgNgDgLgIQgKAJgNAFQgHADgIABQgKAKgNAGQgTAKgUABQgrADgggcIgHgHQgJgCgIgDQgXgJgQgRQgOgQgHgTQgMgEgNgHQgLgGgJgJIgJABQgEASgKAPQgMATgTALQgTAMgWADQgWADgVgHQgVgHgQgPQgQgPgJgVQgOgiAMgjQANgoAlgTQATgKATgCIABgFQAHgYAQgSQATgVAdgIQAdgIAbAJQAZAHASATQAWgEAXAHQAVAGARAPQAQAPAJAUIAEAKIANAFQATAIAPAPIALADQAkALATAfIAHADIAHADIABgBQANgNASgDQAHgCAHAAQABgMAGgKQAJgPAPgJIAIgFIAIgKQAKgLAPgGIAMgDIACgHQAHgUASgMQAQgLATAAQANgIAPgBQAQgBAOAFIAMgCQAjgEAXAXIAHAIQALAFAJAIQARAQADAYIABAFIAAABQALARgBATIAAAEQAHATgFAUQgDAOgIALQgCALgHAKQADAJgBALQgCAXgSAOQADAOgFAOQgDAIgEAGIAAALQgEAfgaAOIgDACQAAAPgMAMIgGAGIgEACIAAADQgDAVgSALIgFACQgCANgMAKIgKAGQgEANgNAJQgGAEgGABQgFAJgKAFQgFAEgIABIgGABQgEALgJAGQgIAFgIACQgEAGgFAFQgIAIgLACIgCAEQgLAQgUACIgEAAIgMgBg");
	var mask_graphics_111 = new cjs.Graphics().p("AkmKAQgdgJgXgZQgVgXgLgfQgGgQgCgNQgGgLgEgMQgGgSgEgfIgBgQQgGgTAAgTQAAgbALgVQAJgPATgSQABgKACgJIACgGQAAgVAIgUQAGgRALgMQAHgWAQgRIAEgJQAOgdAagQIAHgEQAHgIAJgHIAKgIIADgCQAVgVAagHQANgKARgFQAIgDAJgBQAPgIAQgDIAQgBQASgEASACQAZADAUANQATAMANAVQAMAUADAXQADAYgHAVQgKAegYAUQgaAVgfACIgIAAIgLACIgDACIgOAEIgGAFQgKALgNAIIgGAEIgEAEIgEAEQgGAQgLANIgBACIAAABIAHAJQAOAVAEAYQADAVgGAWQAGANACAPQAGAigOAdQgHAPgLANQgBANgDANQgIAcgTAUQgUATgcAHQgOAEgNAAQgOAAgOgEgAB4gnQgMgCgHgEQgKgFgGgKQgGgLAAgLQABgLAGgKQAHgKAKgEQAKgEAOAAIABAAQADgFAFgEQAHgGAKgCIADgFQAGgJAMgFQAGgDAGAAQAEgKAKgHQAGgFAIgCIAGgIQAHgGAHgDQACgGAEgFQAHgKAKgEQADgNALgKIAHgFQAAgKAGgKIAFgHIgCgDQgFgOACgQQACgNAJgMIgBgEQAAgSAMgQIAGgHQgFgWAMgTQgCgIAAgIIgCgFQgGgPACgPIABgDIgCgFIgCgKIgBgCQgIADgIAAIgIAEQgHADgIACQgEAPgKAMQgLANgOAGIgCABIgIAJQgMANgRAEQgIACgKAAIAAAAQgDAYgSASQgLALgQAEQgQAFgPgDQgNgDgLgIQgKAJgNAFQgHADgIABQgKAKgNAGQgTAKgUABQgrADgggcIgHgHQgJgCgIgDQgXgJgQgRQgOgQgHgTQgMgEgNgHQgLgGgJgJIgJABQgEASgKAPIgEAGIAKALQATAZACAdQACAYgJAVQgKAbgaASQgZASgdABQgdABgbgRQgagQgMgaQgMgbAEgeQAEgbAPgUQgPgPgJgUQgOgiAMgjQANgoAlgTQATgKATgCIABgFQAHgYAQgSQATgVAdgIQAdgIAbAJQAZAHASATQAWgEAXAHQAVAGARAPQAQAPAJAUIAEAKIANAFQATAIAPAPIALADQAkALATAfIAHADIAHADIABgBQANgNASgDQAHgCAHAAQABgMAGgKQAJgPAPgJIAIgFIAIgKQAKgLAPgGIAMgDIACgHQAHgUASgMQAQgLATAAQANgIAPgBQAQgBAOAFIAMgCQAjgEAXAXIAHAIQALAFAJAIQARAQADAYIABAFIAAABQALARgBATIAAAEQAHATgFAUQgDAOgIALQgCALgHAKQADAJgBALQgCAXgSAOQADAOgFAOQgDAIgEAGIAAALQgEAfgaAOIgDACQAAAPgMAMIgGAGIgEACIAAADQgDAVgSALIgFACQgCANgMAKIgKAGQgEANgNAJQgGAEgGABQgFAJgKAFQgFAEgIABIgGABQgEALgJAGQgIAFgIACQgEAGgFAFQgIAIgLACIgCAEQgLAQgUACIgEAAIgMgBg");
	var mask_graphics_112 = new cjs.Graphics().p("AkmKAQgdgJgXgZQgVgXgLgfQgGgQgCgNQgGgLgEgMQgGgSgEgfIgBgQQgGgTAAgTQAAgbALgVQAJgPATgSQABgKACgJIACgGQAAgVAIgUQAGgRALgMQAHgWAQgRIAEgJQAOgdAagQIAHgEQAHgIAJgHIAKgIIADgCQAVgVAagHQANgKARgFQAIgDAJgBQAPgIAQgDIAQgBQASgEASACQAZADAUANQATAMANAVQAMAUADAXQADAYgHAVQgKAegYAUQgaAVgfACIgIAAIgLACIgDACIgOAEIgGAFQgKALgNAIIgGAEIgEAEIgEAEQgGAQgLANIgBACIAAABIAHAJQAOAVAEAYQADAVgGAWQAGANACAPQAGAigOAdQgHAPgLANQgBANgDANQgIAcgTAUQgUATgcAHQgOAEgNAAQgOAAgOgEgAB4gnQgMgCgHgEQgKgFgGgKQgGgLAAgLQABgLAGgKQAHgKAKgEQAKgEAOAAIABAAQADgFAFgEQAHgGAKgCIADgFQAGgJAMgFQAGgDAGAAQAEgKAKgHQAGgFAIgCIAGgIQAHgGAHgDQACgGAEgFQAHgKAKgEQADgNALgKIAHgFQAAgKAGgKIAFgHIgCgDQgFgOACgQQACgNAJgMIgBgEQAAgSAMgQIAGgHQgFgWAMgTQgCgIAAgIIgCgFQgGgPACgPIABgDIgCgFIgCgKIgBgCQgIADgIAAIgIAEQgHADgIACQgEAPgKAMQgLANgOAGIgCABIgIAJQgMANgRAEQgIACgKAAIAAAAQgDAYgSASQgLALgQAEQgQAFgPgDQgNgDgLgIQgKAJgNAFQgHADgIABQgKAKgNAGQgTAKgUABQgrADgggcIgHgHQgJgCgIgDQgXgJgQgRQgOgQgHgTQgMgEgNgHQgLgGgJgJIgJABQgEASgKAPIgEAGIAKALQATAZACAdQABAPgDAOQAaAPAMAZQANAZgCAeQgDAegRAXQgSAXgcAKQgcAKgcgGQgfgHgVgXQgTgVgGgeQgDgUAEgTIgCgBQgagQgMgaQgMgbAEgeQAEgbAPgUQgPgPgJgUQgOgiAMgjQANgoAlgTQATgKATgCIABgFQAHgYAQgSQATgVAdgIQAdgIAbAJQAZAHASATQAWgEAXAHQAVAGARAPQAQAPAJAUIAEAKIANAFQATAIAPAPIALADQAkALATAfIAHADIAHADIABgBQANgNASgDQAHgCAHAAQABgMAGgKQAJgPAPgJIAIgFIAIgKQAKgLAPgGIAMgDIACgHQAHgUASgMQAQgLATAAQANgIAPgBQAQgBAOAFIAMgCQAjgEAXAXIAHAIQALAFAJAIQARAQADAYIABAFIAAABQALARgBATIAAAEQAHATgFAUQgDAOgIALQgCALgHAKQADAJgBALQgCAXgSAOQADAOgFAOQgDAIgEAGIAAALQgEAfgaAOIgDACQAAAPgMAMIgGAGIgEACIAAADQgDAVgSALIgFACQgCANgMAKIgKAGQgEANgNAJQgGAEgGABQgFAJgKAFQgFAEgIABIgGABQgEALgJAGQgIAFgIACQgEAGgFAFQgIAIgLACIgCAEQgLAQgUACIgEAAIgMgBg");
	var mask_graphics_113 = new cjs.Graphics().p("AkmKAQgdgJgXgZQgVgXgLgfQgGgQgCgNQgGgLgEgMQgGgSgEgfIgBgQQgGgTAAgTQAAgbALgVQAJgPATgSQABgKACgJIACgGQAAgVAIgUQAGgRALgMQAHgWAQgRIAEgJQAOgdAagQIAHgEQAHgIAJgHIAKgIIADgCQAVgVAagHQANgKARgFQAIgDAJgBQAPgIAQgDIAQgBQASgEASACQAZADAUANQATAMANAVQAMAUADAXQADAYgHAVQgKAegYAUQgaAVgfACIgIAAIgLACIgDACIgOAEIgGAFQgKALgNAIIgGAEIgEAEIgEAEQgGAQgLANIgBACIAAABIAHAJQAOAVAEAYQADAVgGAWQAGANACAPQAGAigOAdQgHAPgLANQgBANgDANQgIAcgTAUQgUATgcAHQgOAEgNAAQgOAAgOgEgAj5gfQgagIgSgTQgRgTgHgaQgCgLAAgLQgWgJgRgRQgTgVgGgeQgDgUAEgTIgCgBQgagQgMgaQgMgbAEgeQAEgbAPgUQgPgPgJgUQgOgiAMgjQANgoAlgTQATgKATgCIABgFQAHgYAQgSQATgVAdgIQAdgIAbAJQAZAHASATQAWgEAXAHQAVAGARAPQAQAPAJAUIAEAKIANAFQATAIAPAPIALADQAkALATAfIAHADIAHADIABgBQANgNASgDQAHgCAHAAQABgMAGgKQAJgPAPgJIAIgFIAIgKQAKgLAPgGIAMgDIACgHQAHgUASgMQAQgLATAAQANgIAPgBQAQgBAOAFIAMgCQAjgEAXAXIAHAIQALAFAJAIQARAQADAYIABAFIAAABQALARgBATIAAAEQAHATgFAUQgDAOgIALQgCALgHAKQADAJgBALQgCAXgSAOQADAOgFAOQgDAIgEAGIAAALQgEAfgaAOIgDACQAAAPgMAMIgGAGIgEACIAAADQgDAVgSALIgFACQgCANgMAKIgKAGQgEANgNAJQgGAEgGABQgFAJgKAFQgFAEgIABIgGABQgEALgJAGQgIAFgIACQgEAGgFAFQgIAIgLACIgCAEQgLAQgUACQgIAAgIgBQgMgCgHgEQgKgFgGgKQgGgLAAgLQABgLAGgKQAHgKAKgEQAKgEAOAAIABAAQADgFAFgEQAHgGAKgCIADgFQAGgJAMgFQAGgDAGAAQAEgKAKgHQAGgFAIgCIAGgIQAHgGAHgDQACgGAEgFQAHgKAKgEQADgNALgKIAHgFQAAgKAGgKIAFgHIgCgDQgFgOACgQQACgNAJgMIgBgEQAAgSAMgQIAGgHQgFgWAMgTQgCgIAAgIIgCgFQgGgPACgPIABgDIgCgFIgCgKIgBgCQgIADgIAAIgIAEQgHADgIACQgEAPgKAMQgLANgOAGIgCABIgIAJQgMANgRAEQgIACgKAAIAAAAQgDAYgSASQgLALgQAEQgQAFgPgDQgNgDgLgIQgKAJgNAFQgHADgIABQgKAKgNAGQgTAKgUABQgrADgggcIgHgHQgJgCgIgDQgXgJgQgRQgOgQgHgTQgMgEgNgHQgLgGgJgJIgJABQgEASgKAPIgEAGIAKALQATAZACAdQABAPgDAOQAaAPAMAZQALAUAAAYQAkANASAjQAUAmgNApQgJAZgUASQgUASgaAGQgKACgLAAQgPAAgPgFg");
	var mask_graphics_114 = new cjs.Graphics().p("AkmKAQgdgJgXgZQgVgXgLgfQgGgQgCgNQgGgLgEgMQgGgSgEgfIgBgQQgGgTAAgTQAAgbALgVQAJgPATgSQABgKACgJIACgGQAAgVAIgUQAGgRALgMQAHgWAQgRIAEgJQAOgdAagQIAHgEQAHgIAJgHIAKgIIADgCQAVgVAagHQANgKARgFQAIgDAJgBQAPgIAQgDIAQgBQASgEASACQAZADAUANQATAMANAVQAMAUADAXQADAYgHAVQgKAegYAUQgaAVgfACIgIAAIgLACIgDACIgOAEIgGAFQgKALgNAIIgGAEIgEAEIgEAEQgGAQgLANIgBACIAAABIAHAJQAOAVAEAYQADAVgGAWQAGANACAPQAGAigOAdQgHAPgLANQgBANgDANQgIAcgTAUQgUATgcAHQgOAEgNAAQgOAAgOgEgAimAiQghgMgTgdQgFgKgEgJQgLgBgLgEQgagIgSgTQgRgTgHgaQgCgLAAgLQgWgJgRgRQgTgVgGgeQgDgUAEgTIgCgBQgagQgMgaQgMgbAEgeQAEgbAPgUQgPgPgJgUQgOgiAMgjQANgoAlgTQATgKATgCIABgFQAHgYAQgSQATgVAdgIQAdgIAbAJQAZAHASATQAWgEAXAHQAVAGARAPQAQAPAJAUIAEAKIANAFQATAIAPAPIALADQAkALATAfIAHADIAHADIABgBQANgNASgDQAHgCAHAAQABgMAGgKQAJgPAPgJIAIgFIAIgKQAKgLAPgGIAMgDIACgHQAHgUASgMQAQgLATAAQANgIAPgBQAQgBAOAFIAMgCQAjgEAXAXIAHAIQALAFAJAIQARAQADAYIABAFIAAABQALARgBATIAAAEQAHATgFAUQgDAOgIALQgCALgHAKQADAJgBALQgCAXgSAOQADAOgFAOQgDAIgEAGIAAALQgEAfgaAOIgDACQAAAPgMAMIgGAGIgEACIAAADQgDAVgSALIgFACQgCANgMAKIgKAGQgEANgNAJQgGAEgGABQgFAJgKAFQgFAEgIABIgGABQgEALgJAGQgIAFgIACQgEAGgFAFQgIAIgLACIgCAEQgLAQgUACQgIAAgIgBQgMgCgHgEQgKgFgGgKQgGgLAAgLQABgLAGgKQAHgKAKgEQAKgEAOAAIABAAQADgFAFgEQAHgGAKgCIADgFQAGgJAMgFQAGgDAGAAQAEgKAKgHQAGgFAIgCIAGgIQAHgGAHgDQACgGAEgFQAHgKAKgEQADgNALgKIAHgFQAAgKAGgKIAFgHIgCgDQgFgOACgQQACgNAJgMIgBgEQAAgSAMgQIAGgHQgFgWAMgTQgCgIAAgIIgCgFQgGgPACgPIABgDIgCgFIgCgKIgBgCQgIADgIAAIgIAEQgHADgIACQgEAPgKAMQgLANgOAGIgCABIgIAJQgMANgRAEQgIACgKAAIAAAAQgDAYgSASQgLALgQAEQgQAFgPgDQgNgDgLgIQgKAJgNAFQgHADgIABQgKAKgNAGQgTAKgUABQgrADgggcIgHgHQgJgCgIgDQgXgJgQgRQgOgQgHgTQgMgEgNgHQgLgGgJgJIgJABQgEASgKAPIgEAGIAKALQATAZACAdQABAPgDAOQAaAPAMAZQALAUAAAYQAkANASAjIAHAOQAQABAOAGQAYAKARAWQARAVADAaQAEAZgKAaQgKAYgUAQQgUARgbAEIgRACQgRAAgRgGg");
	var mask_graphics_115 = new cjs.Graphics().p("AkmKAQgdgJgXgZQgVgXgLgfQgGgQgCgNQgGgLgEgMQgGgSgEgfIgBgQQgGgTAAgTQAAgbALgVQAJgPATgSQABgKACgJIACgGQAAgVAIgUQAGgRALgMQAHgWAQgRIAEgJQAOgdAagQIAHgEQAHgIAJgHIAKgIIADgCQAVgVAagHQANgKARgFQAIgDAJgBQAPgIAQgDIANgBIgDgEIgJACQgaAFgZgJQghgMgTgdQgFgKgEgJQgLgBgLgEQgagIgSgTQgRgTgHgaQgCgLAAgLQgWgJgRgRQgTgVgGgeQgDgUAEgTIgCgBQgagQgMgaQgMgbAEgeQAEgbAPgUQgPgPgJgUQgOgiAMgjQANgoAlgTQATgKATgCIABgFQAHgYAQgSQATgVAdgIQAdgIAbAJQAZAHASATQAWgEAXAHQAVAGARAPQAQAPAJAUIAEAKIANAFQATAIAPAPIALADQAkALATAfIAHADIAHADIABgBQANgNASgDQAHgCAHAAQABgMAGgKQAJgPAPgJIAIgFIAIgKQAKgLAPgGIAMgDIACgHQAHgUASgMQAQgLATAAQANgIAPgBQAQgBAOAFIAMgCQAjgEAXAXIAHAIQALAFAJAIQARAQADAYIABAFIAAABQALARgBATIAAAEQAHATgFAUQgDAOgIALQgCALgHAKQADAJgBALQgCAXgSAOQADAOgFAOQgDAIgEAGIAAALQgEAfgaAOIgDACQAAAPgMAMIgGAGIgEACIAAADQgDAVgSALIgFACQgCANgMAKIgKAGQgEANgNAJQgGAEgGABQgFAJgKAFQgFAEgIABIgGABQgEALgJAGQgIAFgIACQgEAGgFAFQgIAIgLACIgCAEQgLAQgUACQgIAAgIgBQgMgCgHgEQgKgFgGgKQgGgLAAgLQABgLAGgKQAHgKAKgEQAKgEAOAAIABAAQADgFAFgEQAHgGAKgCIADgFQAGgJAMgFQAGgDAGAAQAEgKAKgHQAGgFAIgCIAGgIQAHgGAHgDQACgGAEgFQAHgKAKgEQADgNALgKIAHgFQAAgKAGgKIAFgHIgCgDQgFgOACgQQACgNAJgMIgBgEQAAgSAMgQIAGgHQgFgWAMgTQgCgIAAgIIgCgFQgGgPACgPIABgDIgCgFIgCgKIgBgCQgIADgIAAIgIAEQgHADgIACQgEAPgKAMQgLANgOAGIgCABIgIAJQgMANgRAEQgIACgKAAIAAAAQgDAYgSASQgLALgQAEQgQAFgPgDQgNgDgLgIQgKAJgNAFQgHADgIABQgKAKgNAGQgTAKgUABQgrADgggcIgHgHQgJgCgIgDQgXgJgQgRQgOgQgHgTQgMgEgNgHQgLgGgJgJIgJABQgEASgKAPIgEAGIAKALQATAZACAdQABAPgDAOQAaAPAMAZQALAUAAAYQAkANASAjIAHAOQAQABAOAGQAYAKARAWIABACQAUgGAWADQAeADAWATQAfAaAEAqQACAXgJAVQgIAXgRAQQgRAQgXAHIgCAAIAJANQAMAUADAXQADAYgHAVQgKAegYAUQgaAVgfACIgIAAIgLACIgDACIgOAEIgGAFQgKALgNAIIgGAEIgEAEIgEAEQgGAQgLANIgBACIAAABIAHAJQAOAVAEAYQADAVgGAWQAGANACAPQAGAigOAdQgHAPgLANQgBANgDANQgIAcgTAUQgUATgcAHQgOAEgNAAQgOAAgOgEg");
	var mask_graphics_116 = new cjs.Graphics().p("AkmKAQgdgJgXgZQgVgXgLgfQgGgQgCgNQgGgLgEgMQgGgSgEgfIgBgQQgGgTAAgTQAAgbALgVQAJgPATgSQABgKACgJIACgGQAAgVAIgUQAGgRALgMQAHgWAQgRIAEgJQAOgdAagQIAHgEQAHgIAJgHIAKgIIADgCQAVgVAagHQANgKARgFQAIgDAJgBQAPgIAQgDIANgBIgDgEIgJACQgaAFgZgJQghgMgTgdQgFgKgEgJQgLgBgLgEQgagIgSgTQgRgTgHgaQgCgLAAgLQgWgJgRgRQgTgVgGgeQgDgUAEgTIgCgBQgagQgMgaQgMgbAEgeQAEgbAPgUQgPgPgJgUQgOgiAMgjQANgoAlgTQATgKATgCIABgFQAHgYAQgSQATgVAdgIQAdgIAbAJQAZAHASATQAWgEAXAHQAVAGARAPQAQAPAJAUIAEAKIANAFQATAIAPAPIALADQAkALATAfIAHADIAHADIABgBQANgNASgDQAHgCAHAAQABgMAGgKQAJgPAPgJIAIgFIAIgKQAKgLAPgGIAMgDIACgHQAHgUASgMQAQgLATAAQANgIAPgBQAQgBAOAFIAMgCQAjgEAXAXIAHAIQALAFAJAIQARAQADAYIABAFIAAABQALARgBATIAAAEQAHATgFAUQgDAOgIALQgCALgHAKQADAJgBALQgCAXgSAOQADAOgFAOQgDAIgEAGIAAALQgEAfgaAOIgDACQAAAPgMAMIgGAGIgEACIAAADQgDAVgSALIgFACQgCANgMAKIgKAGQgEANgNAJQgGAEgGABQgFAJgKAFQgFAEgIABIgGABQgEALgJAGQgIAFgIACQgEAGgFAFQgIAIgKACQAHAJAEALQAKAVAAAUQAAASgFANQgIAcgXATQgXATgcAEQgdAEgbgOQgSgJgNgNIgLAEIgCAAIAJANQAMAUADAXQADAYgHAVQgKAegYAUQgaAVgfACIgIAAIgLACIgDACIgOAEIgGAFQgKALgNAIIgGAEIgEAEIgEAEQgGAQgLANIgBACIAAABIAHAJQAOAVAEAYQADAVgGAWQAGANACAPQAGAigOAdQgHAPgLANQgBANgDANQgIAcgTAUQgUATgcAHQgOAEgNAAQgOAAgOgEgAgJh6QAeADAWATIAJAJQAPgGARgBIACgFQAHgKAKgEQAKgEAOAAIABAAQADgFAFgEQAHgGAKgCIADgFQAGgJAMgFQAGgDAGAAQAEgKAKgHQAGgFAIgCIAGgIQAHgGAHgDQACgGAEgFQAHgKAKgEQADgNALgKIAHgFQAAgKAGgKIAFgHIgCgDQgFgOACgQQACgNAJgMIgBgEQAAgSAMgQIAGgHQgFgWAMgTQgCgIAAgIIgCgFQgGgPACgPIABgDIgCgFIgCgKIgBgCQgIADgIAAIgIAEQgHADgIACQgEAPgKAMQgLANgOAGIgCABIgIAJQgMANgRAEQgIACgKAAIAAAAQgDAYgSASQgLALgQAEQgQAFgPgDQgNgDgLgIQgKAJgNAFQgHADgIABQgKAKgNAGQgTAKgUABQgrADgggcIgHgHQgJgCgIgDQgXgJgQgRQgOgQgHgTQgMgEgNgHQgLgGgJgJIgJABQgEASgKAPIgEAGIAKALQATAZACAdQABAPgDAOQAaAPAMAZQALAUAAAYQAkANASAjIAHAOQAQABAOAGQAYAKARAWIABACQAOgEAOAAIAOABg");
	var mask_graphics_117 = new cjs.Graphics().p("AkmKAQgdgJgXgZQgVgXgLgfQgGgQgCgNQgGgLgEgMQgGgSgEgfIgBgQQgGgTAAgTQAAgbALgVQAJgPATgSQABgKACgJIACgGQAAgVAIgUQAGgRALgMQAHgWAQgRIAEgJQAOgdAagQIAHgEQAHgIAJgHIAKgIIADgCQAVgVAagHQANgKARgFQAIgDAJgBQAPgIAQgDIANgBIgDgEIgJACQgaAFgZgJQghgMgTgdQgFgKgEgJQgLgBgLgEQgagIgSgTQgRgTgHgaQgCgLAAgLQgWgJgRgRQgTgVgGgeQgDgUAEgTIgCgBQgagQgMgaQgMgbAEgeQAEgbAPgUQgPgPgJgUQgOgiAMgjQANgoAlgTQATgKATgCIABgFQAHgYAQgSQATgVAdgIQAdgIAbAJQAZAHASATQAWgEAXAHQAVAGARAPQAQAPAJAUIAEAKIANAFQATAIAPAPIALADQAkALATAfIAHADIAHADIABgBQANgNASgDQAHgCAHAAQABgMAGgKQAJgPAPgJIAIgFIAIgKQAKgLAPgGIAMgDIACgHQAHgUASgMQAQgLATAAQANgIAPgBQAQgBAOAFIAMgCQAjgEAXAXIAHAIQALAFAJAIQARAQADAYIABAFIAAABQALARgBATIAAAEQAHATgFAUQgDAOgIALQgCALgHAKQADAJgBALQgCAXgSAOQADAOgFAOQgDAIgEAGIAAALQgEAfgaAOIgDACQAAAPgMAMIgGAGIgEACIAAADQgDAVgSALIgFACQgCANgMAKIgKAGQgEANgNAJQgGAEgGABQgFAJgKAFIgDACIACABQAQAHAOAOQARASAHAZQAHAZgGAYQgGAYgSATQgRAUgYAIQgYAIgZgEQgNgCgLgEIgGAFQgXATgcAEQgdAEgbgOQgSgJgNgNIgLAEIgCAAIAJANQAMAUADAXQADAYgHAVQgKAegYAUQgaAVgfACIgIAAIgLACIgDACIgOAEIgGAFQgKALgNAIIgGAEIgEAEIgEAEQgGAQgLANIgBACIAAABIAHAJQAOAVAEAYQADAVgGAWQAGANACAPQAGAigOAdQgHAPgLANQgBANgDANQgIAcgTAUQgUATgcAHQgOAEgNAAQgOAAgOgEgAgJh6QAeADAWATIAJAJQAPgGARgBIACgFQAHgKAKgEQAKgEAOAAIABAAQADgFAFgEQAHgGAKgCIADgFQAGgJAMgFQAGgDAGAAQAEgKAKgHQAGgFAIgCIAGgIQAHgGAHgDQACgGAEgFQAHgKAKgEQADgNALgKIAHgFQAAgKAGgKIAFgHIgCgDQgFgOACgQQACgNAJgMIgBgEQAAgSAMgQIAGgHQgFgWAMgTQgCgIAAgIIgCgFQgGgPACgPIABgDIgCgFIgCgKIgBgCQgIADgIAAIgIAEQgHADgIACQgEAPgKAMQgLANgOAGIgCABIgIAJQgMANgRAEQgIACgKAAIAAAAQgDAYgSASQgLALgQAEQgQAFgPgDQgNgDgLgIQgKAJgNAFQgHADgIABQgKAKgNAGQgTAKgUABQgrADgggcIgHgHQgJgCgIgDQgXgJgQgRQgOgQgHgTQgMgEgNgHQgLgGgJgJIgJABQgEASgKAPIgEAGIAKALQATAZACAdQABAPgDAOQAaAPAMAZQALAUAAAYQAkANASAjIAHAOQAQABAOAGQAYAKARAWIABACQAOgEAOAAIAOABg");
	var mask_graphics_118 = new cjs.Graphics().p("AkmKAQgdgJgXgZQgVgXgLgfQgGgQgCgNQgGgLgEgMQgGgSgEgfIgBgQQgGgTAAgTQAAgbALgVQAJgPATgSQABgKACgJIACgGQAAgVAIgUQAGgRALgMQAHgWAQgRIAEgJQAOgdAagQIAHgEQAHgIAJgHIAKgIIADgCQAVgVAagHQANgKARgFQAIgDAJgBQAPgIAQgDIANgBIgDgEIgJACQgaAFgZgJQghgMgTgdQgFgKgEgJQgLgBgLgEQgagIgSgTQgRgTgHgaQgCgLAAgLQgWgJgRgRQgTgVgGgeQgDgUAEgTIgCgBQgagQgMgaQgMgbAEgeQAEgbAPgUQgPgPgJgUQgOgiAMgjQANgoAlgTQATgKATgCIABgFQAHgYAQgSQATgVAdgIQAdgIAbAJQAZAHASATQAWgEAXAHQAVAGARAPQAQAPAJAUIAEAKIANAFQATAIAPAPIALADQAkALATAfIAHADIAHADIABgBQANgNASgDQAHgCAHAAQABgMAGgKQAJgPAPgJIAIgFIAIgKQAKgLAPgGIAMgDIACgHQAHgUASgMQAQgLATAAQANgIAPgBQAQgBAOAFIAMgCQAjgEAXAXIAHAIQALAFAJAIQARAQADAYIABAFIAAABQALARgBATIAAAEQAHATgFAUQgDAOgIALQgCALgHAKQADAJgBALQgCAXgSAOQADAOgFAOQgDAIgEAGIAAALQgEAfgaAOIgDACQAAAPgMAMIgGAGIgEACIAAADQgDAVgSALIgFACIgCAGQALABALADQAQAFAPALQASANALATQALAUABAWQACAWgIAVQgIAVgQAPQgSASgbAGQgUAFgSgDQgHANgKALQgRAUgYAIQgYAIgZgEQgNgCgLgEIgGAFQgXATgcAEQgdAEgbgOQgSgJgNgNIgLAEIgCAAIAJANQAMAUADAXQADAYgHAVQgKAegYAUQgaAVgfACIgIAAIgLACIgDACIgOAEIgGAFQgKALgNAIIgGAEIgEAEIgEAEQgGAQgLANIgBACIAAABIAHAJQAOAVAEAYQADAVgGAWQAGANACAPQAGAigOAdQgHAPgLANQgBANgDANQgIAcgTAUQgUATgcAHQgOAEgNAAQgOAAgOgEgAgJh6QAeADAWATIAJAJQAPgGARgBIACgFQAHgKAKgEQAKgEAOAAIABAAQADgFAFgEQAHgGAKgCIADgFQAGgJAMgFQAGgDAGAAQAEgKAKgHQAGgFAIgCIAGgIQAHgGAHgDQACgGAEgFQAHgKAKgEQADgNALgKIAHgFQAAgKAGgKIAFgHIgCgDQgFgOACgQQACgNAJgMIgBgEQAAgSAMgQIAGgHQgFgWAMgTQgCgIAAgIIgCgFQgGgPACgPIABgDIgCgFIgCgKIgBgCQgIADgIAAIgIAEQgHADgIACQgEAPgKAMQgLANgOAGIgCABIgIAJQgMANgRAEQgIACgKAAIAAAAQgDAYgSASQgLALgQAEQgQAFgPgDQgNgDgLgIQgKAJgNAFQgHADgIABQgKAKgNAGQgTAKgUABQgrADgggcIgHgHQgJgCgIgDQgXgJgQgRQgOgQgHgTQgMgEgNgHQgLgGgJgJIgJABQgEASgKAPIgEAGIAKALQATAZACAdQABAPgDAOQAaAPAMAZQALAUAAAYQAkANASAjIAHAOQAQABAOAGQAYAKARAWIABACQAOgEAOAAIAOABg");
	var mask_graphics_119 = new cjs.Graphics().p("AlEKAQgdgJgXgZQgVgXgLgfQgGgQgCgNQgGgLgEgMQgGgSgEgfIgBgQQgHgTABgTQAAgbALgVQAIgPAUgSQABgKACgJIACgGQAAgVAIgUQAGgRALgMQAHgWAQgRIAEgJQAOgdAagQIAHgEQAHgIAJgHIAKgIIADgCQAVgVAagHQANgKARgFQAIgDAJgBQAPgIAQgDIANgBIgDgEIgJACQgaAFgZgJQghgMgTgdQgFgKgEgJQgLgBgLgEQgagIgSgTQgRgTgHgaQgCgLAAgLQgWgJgRgRQgTgVgGgeQgEgUAFgTIgCgBQgagQgMgaQgMgbAEgeQAEgbAPgUQgPgPgJgUQgOgiAMgjQANgoAlgTQATgKATgCIABgFQAHgYAQgSQATgVAdgIQAdgIAbAJQAZAHASATQAWgEAXAHQAVAGARAPQAQAPAJAUIAEAKIANAFQATAIAPAPIALADQAkALATAfIAHADIAHADIABgBQANgNASgDQAHgCAHAAQABgMAGgKQAJgPAPgJIAIgFIAIgKQAKgLAPgGIAMgDIACgHQAHgUASgMQAQgLATAAQANgIAPgBQAQgBAOAFIAMgCQAjgEAXAXIAHAIQALAFAJAIQARAQADAYIABAFIAAABQALARgBATIAAAEQAHATgFAUQgDAOgIALQgCALgHAKQADAJgBALQgCAXgSAOQADAOgFAOQgDAIgEAGIAAALQgEAfgaAOIgDACQAAAPgMAMIgGAGIgEACIAAADIgCAIIANgJQAlgVAqAMQAUAFARAOQAXASAJAeQAKAdgJAcQgIAdgYAUQgXAUgeADQgKABgKAAQgHAOgMAMQgSASgbAGQgUAFgSgDQgHANgKALQgRAUgYAIQgYAIgZgEQgNgCgLgEIgGAFQgXATgcAEQgdAEgbgOQgSgJgMgNIgLAEIgCAAIAJANQAMAUADAXQACAYgGAVQgKAegZAUQgaAVgfACIgIAAIgLACIgDACIgOAEIgGAFQgKALgNAIIgGAEIgEAEIgEAEQgGAQgLANIgBACIAAABIAHAJQAOAVAEAYQADAVgGAWQAGANACAPQAGAigOAdQgHAPgLANQgBANgDANQgIAcgTAUQgUATgcAHQgOAEgNAAQgOAAgOgEgAgnh6QAfADAVATIAJAJQAPgGARgBIACgFQAHgKAKgEQAKgEAOAAIABAAQADgFAFgEQAHgGAKgCIADgFQAGgJAMgFQAGgDAGAAQAEgKAKgHQAGgFAIgCIAGgIQAGgGAIgDQACgGAEgFQAHgKAKgEQADgNALgKIAHgFQAAgKAGgKIAFgHIgCgDQgFgOACgQQACgNAJgMIgBgEQAAgSAMgQIAGgHQgFgWAMgTQgCgIAAgIIgCgFQgGgPACgPIABgDIgCgFIgCgKIgBgCQgIADgIAAIgIAEQgHADgIACQgEAPgKAMQgLANgOAGIgCABIgIAJQgMANgRAEQgIACgKAAIAAAAQgDAYgSASQgLALgQAEQgQAFgPgDQgNgDgLgIQgKAJgNAFQgHADgIABQgJAKgNAGQgUAKgUABQgrADgggcIgHgHQgJgCgIgDQgXgJgQgRQgOgQgHgTQgMgEgNgHQgLgGgJgJIgJABQgEASgKAPIgEAGIAKALQATAZACAdQABAPgDAOQAaAPAMAZQALAUAAAYQAkANASAjIAHAOQAPABAPAGQAYAKARAWIABACQAOgEAOAAIAOABgAEbi1IgBADIACgEIgBABg");
	var mask_graphics_120 = new cjs.Graphics().p("Al5KAQgdgJgXgZQgVgXgLgfQgGgQgCgNQgGgLgEgMQgGgSgEgfIgBgQQgHgTABgTQAAgbALgVQAIgPAUgSQABgKACgJIACgGQAAgVAIgUQAGgRALgMQAHgWAQgRIAEgJQAOgdAagQIAHgEQAHgIAJgHIAKgIIADgCQAVgVAagHQANgKARgFQAIgDAJgBQAPgIAQgDIANgBIgDgEIgJACQgaAFgZgJQghgMgTgdQgFgKgEgJQgLgBgLgEQgagIgSgTQgRgTgHgaQgCgLAAgLQgWgJgRgRQgTgVgGgeQgEgUAFgTIgCgBQgagQgMgaQgMgbAEgeQAEgbAPgUQgPgPgJgUQgOgiAMgjQANgoAlgTQATgKATgCIABgFQAHgYAQgSQATgVAdgIQAdgIAbAJQAZAHASATQAWgEAXAHQAVAGARAPQAQAPAJAUIAEAKIANAFQATAIAPAPIALADQAkALAUAfIAHADIAHADIABgBQANgNARgDQAHgCAHAAQABgMAGgKQAJgPAPgJIAIgFIAIgKQAKgLAPgGIAMgDIACgHQAHgUASgMQAQgLATAAQANgIAPgBQAQgBAOAFIAMgCQAjgEAXAXIAHAIQALAFAJAIQARAQADAYIABAFIAAABQALARgBATIAAAEQAHATgFAUQgDAOgIALQgCALgHAKQADAJgBALQgCAXgSAOQADAOgFAOQgDAIgEAGIAAALQgEAfgaAOIgDACQAAAPgMAMIgGAGIgEACIAAADIgCAIIANgJQAlgVAqAMIAFACIAMgMQAWgRAdgEQAdgDAaAMQAZAMAQAYQAQAZAAAcQABAcgQAZQgPAZgZANQgZAMgdgCQgMgCgLgDIgKAKQgXAUgeADQgKABgKAAQgHAOgMAMQgSASgbAGQgUAFgSgDQgHANgKALQgRAUgYAIQgYAIgZgEQgNgCgLgEIgGAFQgXATgcAEQgcAEgbgOQgSgJgNgNIgLAEIgCAAIAJANQAMAUADAXQADAYgHAVQgKAegZAUQgaAVgfACIgIAAIgLACIgDACIgOAEIgGAFQgKALgNAIIgGAEIgEAEIgEAEQgGAQgLANIgBACIAAABIAHAJQAOAVAEAYQADAVgGAWQAGANACAPQAGAigOAdQgHAPgLANQgBANgDANQgIAcgTAUQgUATgcAHQgOAEgNAAQgOAAgOgEgAhch6QAfADAWATIAJAJQAPgGAQgBIACgFQAHgKAKgEQAKgEAOAAIABAAQADgFAFgEQAHgGAKgCIADgFQAGgJAMgFQAGgDAGAAQAEgKAKgHQAGgFAIgCIAGgIQAGgGAIgDQACgGAEgFQAHgKAKgEQADgNALgKIAHgFQAAgKAGgKIAFgHIgCgDQgFgOACgQQACgNAJgMIgBgEQAAgSAMgQIAGgHQgFgWAMgTQgCgIAAgIIgCgFQgGgPACgPIABgDIgCgFIgCgKIgBgCQgIADgIAAIgIAEQgHADgIACQgEAPgKAMQgLANgOAGIgCABIgIAJQgMANgRAEQgIACgKAAIAAAAQgDAYgSASQgLALgQAEQgQAFgPgDQgMgDgLgIQgKAJgNAFQgHADgIABQgKAKgNAGQgUAKgUABQgrADgggcIgHgHQgJgCgIgDQgXgJgQgRQgOgQgHgTQgMgEgNgHQgLgGgJgJIgJABQgEASgKAPIgEAGIAKALQATAZACAdQABAPgDAOQAaAPAMAZQALAUAAAYQAkANASAjIAHAOQAPABAPAGQAYAKARAWIABACQAOgEAOAAIAOABgADmi1IgBADIACgEIgBABg");
	var mask_graphics_121 = new cjs.Graphics().p("AmrKAQgdgJgXgZQgVgXgLgfQgGgQgCgNQgGgLgEgMQgGgSgEgfIgBgQQgGgTAAgTQAAgbALgVQAJgPATgSQABgKACgJIACgGQAAgVAIgUQAGgRALgMQAHgWAQgRIAEgJQAOgdAagQIAHgEQAHgIAJgHIAKgIIADgCQAVgVAagHQANgKARgFQAIgDAJgBQAPgIAQgDIANgBIgDgEIgJACQgaAFgZgJQghgMgTgdQgFgKgEgJQgLgBgLgEQgagIgSgTQgRgTgHgaQgCgLAAgLQgWgJgRgRQgTgVgGgeQgDgUAEgTIgCgBQgagQgMgaQgMgbAEgeQAEgbAPgUQgPgPgJgUQgOgiAMgjQANgoAlgTQATgKATgCIABgFQAHgYAQgSQATgVAdgIQAdgIAbAJQAZAHASATQAXgEAWAHQAVAGARAPQAQAPAJAUIAEAKIANAFQATAIAPAPIALADQAlALATAfIAHADIAHADIABgBQANgNASgDQAHgCAHAAQACgMAFgKQAJgPAOgJIAIgFIAIgKQAKgLAPgGIAMgDIACgHQAHgUASgMQAQgLATAAQANgIAPgBQAQgBAOAFIAMgCQAjgEAXAXIAHAIQALAFAJAIQARAQADAYIABAFIAAABQALARgBATIAAAEQAHATgFAUQgCAOgJALQgCALgHAKQADAJgBALQgCAXgSAOQADAOgFAOQgDAIgEAGIAAALQgEAfgaAOIgDACQAAAPgMAMIgGAGIgEACIAAADIgCAIIANgJQAlgVAqAMIAFACIAMgMQAWgRAdgEQAdgDAaAMQAKAEAIAHIANgFQAdgHAbAIQATAGAQAOQAQANAIASQATAngPAoQgKAcgaATQgbASgeAAQgeAAgagSIgDgCQgYAKgagCQgMgCgLgDIgKAKQgXAUgeADQgKABgKAAQgHAOgMAMQgSASgbAGQgTAFgTgDQgGANgLALQgRAUgYAIQgYAIgZgEQgNgCgLgEIgGAFQgWATgcAEQgdAEgbgOQgSgJgNgNIgLAEIgCAAIAJANQAMAUADAXQADAYgHAVQgKAegZAUQgaAVgfACIgIAAIgLACIgDACIgOAEIgGAFQgKALgNAIIgGAEIgEAEIgEAEQgGAQgLANIgBACIAAABIAHAJQAOAVAEAYQADAVgGAWQAGANACAPQAGAigOAdQgHAPgLANQAAANgEANQgIAcgTAUQgUATgcAHQgOAEgNAAQgOAAgOgEgAiOh6QAfADAWATIAJAJQAQgGAQgBIACgFQAHgKAKgEQAKgEAOAAIABAAQADgFAEgEQAIgGAJgCIADgFQAGgJAMgFQAGgDAGAAQAEgKAKgHQAHgFAHgCIAGgIQAHgGAHgDQACgGAEgFQAHgKAKgEQADgNALgKIAHgFQABgKAFgKIAFgHIgCgDQgFgOACgQQACgNAJgMIgBgEQAAgSAMgQIAGgHQgFgWAMgTQgCgIAAgIIgCgFQgGgPACgPIABgDIgCgFIgCgKIgBgCQgIADgIAAIgIAEQgHADgIACQgEAPgKAMQgLANgOAGIgCABIgIAJQgMANgRAEQgIACgKAAIAAAAQgDAYgSASQgLALgPAEQgQAFgPgDQgNgDgLgIQgKAJgNAFQgHADgIABQgKAKgNAGQgUAKgUABQgrADgggcIgHgHQgIgCgJgDQgXgJgQgRQgOgQgHgTQgMgEgNgHQgLgGgJgJIgJABQgEASgKAPIgEAGIAKALQATAZACAdQABAPgDAOQAaAPAMAZQALAUAAAYQAkANASAjIAHAOQAQABAOAGQAYAKARAWIABACQAOgEAOAAIAOABgAC0i1IgBADIACgEIgBABg");
	var mask_graphics_122 = new cjs.Graphics().p("AnaKAQgdgJgXgZQgVgXgLgfQgGgQgCgNQgGgLgEgMQgGgSgEgfIgBgQQgGgTAAgTQAAgbALgVQAJgPATgSQABgKACgJIACgGQAAgVAIgUQAGgRALgMQAHgWAQgRIAEgJQAOgdAagQIAHgEQAHgIAJgHIAKgIIADgCQAVgVAagHQANgKARgFQAIgDAJgBQAPgIAQgDIANgBIgDgEIgJACQgaAFgZgJQghgMgTgdQgFgKgEgJQgLgBgLgEQgagIgSgTQgRgTgHgaQgCgLAAgLQgWgJgRgRQgTgVgGgeQgDgUAEgTIgCgBQgagQgMgaQgMgbAEgeQAEgbAPgUQgPgPgJgUQgOgiAMgjQANgoAlgTQATgKATgCIABgFQAHgYAQgSQATgVAdgIQAdgIAbAJQAZAHASATQAWgEAXAHQAVAGARAPQAQAPAJAUIAEAKIANAFQATAIAPAPIALADQAlALATAfIAHADIAHADIABgBQANgNASgDQAHgCAHAAQABgMAGgKQAJgPAPgJIAIgFIAIgKQAKgLAPgGIALgDIACgHQAHgUASgMQAQgLATAAQANgIAPgBQAQgBAOAFIAMgCQAjgEAXAXIAHAIQALAFAJAIQARAQADAYIABAFIAAABQALARgBATIAAAEQAHATgFAUQgCAOgJALQgCALgHAKQADAJgBALQgCAXgSAOQADAOgFAOQgDAIgEAGIAAALQgEAfgaAOIgDACQAAAPgMAMIgGAGIgEACIAAADIgCAIIANgJQAlgVAqAMIAFACIAMgMQAWgRAdgEQAdgDAaAMQAJAEAJAHIANgFQAdgHAbAIQATAGAQAOIAPgDQAdgEAZALQAZALAQAXQARAXACAcQACAbgNAZQgNAagXAOQgXAPgdAAQgcABgYgOQgIgFgIgHQgNAEgOAAQgeAAgagSIgDgCQgYAKgagCQgMgCgLgDIgKAKQgXAUgeADQgKABgKAAQgHAOgMAMQgSASgbAGQgUAFgSgDQgGANgLALQgRAUgYAIQgYAIgZgEQgMgCgLgEIgGAFQgXATgcAEQgdAEgbgOQgSgJgNgNIgLAEIgCAAIAJANQAMAUADAXQADAYgHAVQgKAegZAUQgaAVgfACIgIAAIgLACIgDACIgOAEIgGAFQgKALgNAIIgGAEIgEAEIgEAEQgGAQgLANIgBACIAAABIAHAJQAOAVAEAYQADAVgGAWQAGANACAPQAGAigOAdQgHAPgLANQgBANgDANQgIAcgTAUQgUATgcAHQgOAEgNAAQgOAAgOgEgAi9h6QAfADAWATIAJAJQAPgGARgBIACgFQAHgKAKgEQAKgEAOAAIABAAQADgFAFgEQAHgGAKgCIADgFQAGgJAMgFQAFgDAGAAQAEgKAKgHQAGgFAIgCIAGgIQAHgGAHgDQACgGAEgFQAHgKAKgEQADgNALgKIAHgFQABgKAFgKIAFgHIgCgDQgFgOACgQQACgNAJgMIgBgEQAAgSAMgQIAGgHQgFgWAMgTQgCgIAAgIIgCgFQgGgPACgPIABgDIgCgFIgCgKIgBgCQgIADgIAAIgIAEQgHADgIACQgEAPgKAMQgLANgOAGIgCABIgIAJQgMANgRAEQgIACgJAAIAAAAQgDAYgSASQgLALgQAEQgQAFgPgDQgNgDgLgIQgKAJgNAFQgHADgIABQgKAKgNAGQgUAKgUABQgrADgggcIgHgHQgJgCgIgDQgXgJgQgRQgOgQgHgTQgMgEgNgHQgLgGgJgJIgJABQgEASgKAPIgEAGIAKALQATAZACAdQABAPgDAOQAaAPAMAZQALAUAAAYQAkANASAjIAHAOQAQABAOAGQAYAKARAWIABACQAOgEAOAAIAOABgACFi1IgBADIACgEIgBABg");
	var mask_graphics_123 = new cjs.Graphics().p("AoJKAQgdgJgXgZQgVgXgLgfQgGgQgCgNQgGgLgEgMQgGgSgEgfIgBgQQgGgTAAgTQAAgbALgVQAJgPATgSQABgKACgJIACgGQAAgVAIgUQAGgRALgMQAHgWAQgRIAEgJQAOgdAagQIAHgEQAHgIAJgHIAKgIIADgCQAVgVAagHQANgKARgFQAIgDAJgBQAPgIAQgDIANgBIgDgEIgJACQgaAFgZgJQghgMgTgdQgFgKgEgJQgLgBgLgEQgagIgSgTQgRgTgHgaQgCgLAAgLQgWgJgRgRQgTgVgGgeQgDgUAEgTIgCgBQgagQgMgaQgMgbAEgeQAEgbAPgUQgPgPgJgUQgOgiAMgjQANgoAlgTQATgKATgCIABgFQAHgYAQgSQATgVAdgIQAdgIAbAJQAZAHASATQAXgEAWAHQAVAGARAPQAQAPAJAUIAEAKIANAFQATAIAPAPIALADQAlALATAfIAHADIAHADIABgBQANgNASgDQAHgCAHAAQACgMAFgKQAJgPAPgJIAIgFIAIgKQAKgLAPgGIAMgDIACgHQAHgUASgMQAPgLATAAQANgIAPgBQAQgBAOAFIAMgCQAjgEAXAXIAHAIQALAFAJAIQARAQADAYIABAFIAAABQALARgBATIAAAEQAHATgFAUQgCAOgJALQgCALgHAKQADAJgBALQgCAXgSAOQADAOgFAOQgDAIgEAGIAAALQgEAfgaAOIgDACQAAAPgMAMIgGAGIgEACIAAADIgCAIIANgJQAlgVAqAMIAFACIAMgMQAWgRAdgEQAdgDAaAMQAKAEAIAHIANgFQAdgHAbAIQATAGAQAOIAPgDQAdgEAZALQAZALAQAXIAFAIQATgCAUAGQAZAJASAUQASAUAGAZQAFAagIAaQgIAagUARQgTARgaAGQgbAFgZgIQgZgIgSgTQgHgIgGgIIgHAAQgcABgYgOQgIgFgIgHQgNAEgOAAQgeAAgagSIgDgCQgYAKgagCQgMgCgLgDIgKAKQgXAUgeADQgKABgKAAQgHAOgMAMQgSASgbAGQgTAFgTgDQgGANgLALQgRAUgYAIQgXAIgZgEQgNgCgLgEIgGAFQgXATgcAEQgdAEgbgOQgSgJgNgNIgLAEIgCAAIAJANQAMAUADAXQADAYgHAVQgKAegZAUQgaAVgfACIgIAAIgLACIgDACIgOAEIgGAFQgKALgNAIIgGAEIgEAEIgEAEQgGAQgLANIgBACIAAABIAHAJQAOAVAEAYQADAVgGAWQAGANACAPQAGAigOAdQgHAPgLANQAAANgEANQgIAcgTAUQgUATgcAHQgOAEgNAAQgOAAgOgEgAjsh6QAfADAWATIAJAJQAQgGAQgBIACgFQAHgKAKgEQAKgEAOAAIABAAQADgFAFgEQAHgGAKgCIADgFQAGgJAMgFQAGgDAGAAQAEgKAKgHQAGgFAIgCIAGgIQAGgGAHgDQACgGAEgFQAHgKAKgEQADgNALgKIAHgFQABgKAFgKIAFgHIgCgDQgFgOACgQQACgNAJgMIgBgEQAAgSAMgQIAGgHQgFgWAMgTQgCgIAAgIIgCgFQgGgPACgPIABgDIgCgFIgCgKIgBgCQgIADgIAAIgIAEQgHADgIACQgEAPgKAMQgLANgOAGIgCABIgHAJQgMANgRAEQgIACgKAAIAAAAQgDAYgSASQgLALgQAEQgQAFgPgDQgNgDgLgIQgKAJgNAFQgHADgIABQgKAKgNAGQgUAKgUABQgrADgggcIgHgHQgJgCgIgDQgXgJgQgRQgOgQgHgTQgMgEgNgHQgLgGgJgJIgJABQgEASgKAPIgEAGIAKALQATAZACAdQABAPgDAOQAaAPAMAZQALAUAAAYQAkANASAjIAHAOQAQABAOAGQAYAKARAWIABACQAOgEAOAAIAOABgABWi1IgBADIACgEIgBABg");
	var mask_graphics_124 = new cjs.Graphics().p("ApaKAQgdgJgXgZQgWgXgLgfQgGgQgBgNQgHgLgEgMQgFgSgEgfIgCgQQgGgTAAgTQAAgbAMgVQAIgPATgSQABgKADgJIACgGQgBgVAIgUQAGgRALgMQAHgWAQgRIAEgJQAOgdAagQIAIgEQAGgIAJgHIALgIIACgCQAVgVAagHQAOgKAQgFQAIgDAJgBQAPgIARgDIANgBIgDgEIgJACQgbAFgYgJQgigMgSgdQgGgKgEgJQgLgBgLgEQgagIgRgTQgSgTgGgaQgDgLAAgLQgWgJgQgRQgUgVgFgeQgEgUAEgTIgBgBQgagQgNgaQgMgbAFgeQADgbAQgUQgQgPgIgUQgOgiAMgjQANgoAlgTQASgKATgCIABgFQAHgYARgSQATgVAdgIQAcgIAbAJQAZAHASATQAXgEAXAHQAUAGARAPQARAPAIAUIAEAKIAOAFQASAIAPAPIAMADQAkALATAfIAIADIAGADIABgBQAOgNARgDQAHgCAHAAQACgMAGgKQAIgPAQgJIAIgFIAIgKQAKgLAOgGIANgDIACgHQAHgUASgMQAQgLASAAQANgIAQgBQAPgBANAFIANgCQAjgEAWAXIAIAIQAKAFAKAIQARAQADAYIAAAFIABABQAKARgBATIAAAEQAHATgEAUQgDAOgJALQgCALgGAKQACAJAAALQgDAXgRAOQACAOgFAOQgCAIgFAGIAAALQgEAfgaAOIgDACQAAAPgLAMIgHAGIgEACIAAADIgBAIIAMgJQAmgVAqAMIAFACIAMgMQAWgRAdgEQAdgDAZAMQAKAEAIAHIAOgFQAcgHAbAIQAUAGAPAOIAQgDQAcgEAZALQAZALARAXIAFAIQASgCAUAGQAZAJASAUIAIAJIAJgLQAUgUAcgHQAdgHAaAJQAbAIATAXQATAWAEAcQAEAcgMAbQgLAbgXAOQgXAQgdACQgdABgZgNQgVgLgNgTQgGAIgHAGQgTARgbAGQgaAFgZgIQgZgIgTgTQgHgIgFgIIgHAAQgdABgXgOQgJgFgIgHQgNAEgNAAQgeAAgbgSIgDgCQgYAKgagCQgMgCgKgDIgKAKQgYAUgdADQgLABgJAAQgIAOgLAMQgTASgbAGQgTAFgSgDQgGANgKALQgSAUgYAIQgXAIgagEQgNgCgLgEIgGAFQgXATgcAEQgcAEgbgOQgTgJgNgNIgKAEIgDAAIAJANQANAUADAXQACAYgGAVQgKAegaAUQgaAVgfACIgHAAIgLACIgEACIgNAEIgHAFQgKALgMAIIgHAEIgEAEIgEAEQgGAQgLANIAAACIAAABIAHAJQAOAVADAYQADAVgGAWQAGANADAPQAFAigNAdQgIAPgLANQAAANgEANQgHAcgUAUQgUATgcAHQgOAEgNAAQgOAAgNgEgAk9h6QAeADAXATIAJAJQAPgGAQgBIADgFQAHgKAKgEQAKgEANAAIABAAQADgFAFgEQAIgGAJgCIADgFQAHgJALgFQAGgDAHAAQADgKAKgHQAHgFAHgCIAHgIQAGgGAHgDQACgGAEgFQAHgKALgEQACgNALgKIAIgFQAAgKAFgKIAFgHIgBgDQgGgOACgQQACgNAJgMIAAgEQAAgSAMgQIAEgHQgEgWALgTQgCgIAAgIIgCgFQgFgPACgPIAAgDIgCgFIgBgKIgBgCQgIADgIAAIgIAEQgHADgIACQgEAPgKAMQgKANgPAGIgCABIgHAJQgNANgQAEQgIACgKAAIgBAAQgDAYgRASQgMALgQAEQgPAFgQgDQgNgDgLgIQgKAJgNAFQgHADgIABQgKAKgNAGQgUAKgUABQgrADgfgcIgIgHQgIgCgJgDQgXgJgPgRQgPgQgGgTQgNgEgMgHQgMgGgJgJIgIABQgEASgKAPIgFAGIAKALQATAZADAdQAAAPgDAOQAaAPANAZQAKAUABAYQAjANATAjIAGAOQAQABAPAGQAYAKAQAWIACACQANgEAOAAIAPABgAAEi1IgBADIADgEIgCABg");
	var mask_graphics_125 = new cjs.Graphics().p("AqQKAQgdgJgXgZQgWgXgLgfQgFgQgCgNQgHgLgEgMQgFgSgEgfIgCgQQgGgTAAgTQAAgbAMgVQAIgPATgSQABgKADgJIACgGQgBgVAIgUQAHgRAKgMQAHgWAQgRIAEgJQAOgdAagQIAIgEQAHgIAIgHIALgIIACgCQAVgVAbgHQANgKAQgFQAJgDAIgBQAPgIARgDIANgBIgDgEIgJACQgbAFgYgJQgigMgSgdQgGgKgDgJQgLgBgMgEQgagIgRgTQgSgTgGgaQgDgLAAgLQgWgJgQgRQgUgVgFgeQgEgUAEgTIgBgBQgagQgNgaQgMgbAFgeQAEgbAPgUQgQgPgIgUQgOgiAMgjQANgoAlgTQASgKATgCIABgFQAHgYARgSQATgVAdgIQAcgIAbAJQAZAHASATQAXgEAXAHQAUAGARAPQARAPAIAUIAEAKIAOAFQATAIAOAPIAMADQAkALATAfIAIADIAGADIABgBQAOgNARgDQAHgCAHAAQACgMAGgKQAIgPAQgJIAIgFIAIgKQAKgLAOgGIANgDIACgHQAHgUASgMQAQgLATAAQANgIAPgBQAPgBAPAFIAMgCQAjgEAVAXIAIAIQAKAFAKAIQARAQADAYIAAAFIABABQAKARgBATIAAAEQAIATgFAUQgDAOgJALQgCALgGAKQADAJgBALQgDAXgRAOQADAOgGAOQgCAIgEAGIgBALQgEAfgaAOIgCACQAAAPgLAMIgHAGIgDACIgBADIgBAIIAMgJQAlgVAqAMIAFACIAMgMQAWgRAdgEQAdgDAZAMQAKAEAIAHIAOgFQAcgHAbAIQAUAGAPAOIAQgDQAcgEAZALQAZALARAXIAFAIQATgCATAGQAZAJASAUIAIAJIAJgLQAUgUAcgHQAVgFAUADIAIgNQAUgdAhgKQAYgHAYAEQAZAFATAPQATAPALAXQAKAXgCAYQgBAYgNAUQgMAVgUANQgUAMgYADQgOABgNgCQgLAZgWAOQgXAQgdACQgdABgZgNQgVgLgNgTQgGAIgHAGQgTARgbAGQgaAFgZgIQgZgIgTgTQgHgIgFgIIgHAAQgdABgXgOQgJgFgIgHQgMAEgOAAQgeAAgbgSIgDgCQgXAKgbgCQgLgCgLgDIgKAKQgYAUgdADQgKABgKAAQgHAOgMAMQgSASgbAGQgTAFgTgDQgGANgKALQgSAUgYAIQgXAIgagEQgMgCgLgEIgHAFQgXATgcAEQgcAEgbgOQgTgJgMgNIgLAEIgDAAIAJANQANAUADAXQACAYgGAVQgKAegaAUQgaAVgfACIgHAAIgLACIgEACIgNAEIgHAFQgJALgNAIIgHAEIgEAEIgDAEQgGAQgLANIgBACIAAABIAHAJQAOAVADAYQAEAVgHAWQAGANADAPQAFAigNAdQgHAPgMANQAAANgEANQgHAcgUAUQgUATgcAHQgNAEgNAAQgOAAgOgEgAlzh6QAeADAXATIAJAJQAPgGAQgBIADgFQAHgKAKgEQAKgEANAAIABAAQAEgFAEgEQAIgGAJgCIADgFQAHgJALgFQAHgDAGAAQAEgKAJgHQAHgFAIgCIAGgIQAGgGAHgDQACgGAEgFQAIgKAKgEQACgNALgKIAIgFQAAgKAFgKIAFgHIgBgDQgGgOACgQQADgNAIgMIAAgEQAAgSAMgQIAGgHQgFgWAMgTQgDgIABgIIgDgFQgFgPACgPIAAgDIgCgFIgCgKIgBgCQgIADgHAAIgJAEQgGADgJACQgDAPgLAMQgKANgPAGIgCABIgHAJQgNANgQAEQgIACgKAAIgBAAQgCAYgSASQgMALgQAEQgPAFgQgDQgNgDgKgIQgLAJgNAFQgHADgHABQgLAKgNAGQgUAKgUABQgrADgfgcIgHgHQgJgCgJgDQgXgJgPgRQgPgQgGgTQgNgEgMgHQgLgGgKgJIgIABQgEASgKAPIgEAGIAJALQATAZADAdQABAPgDAOQAZAPANAZQAKAUABAYQAkANASAjIAGAOQAQABAPAGQAYAKAQAWIACACQANgEAPAAIAOABgAgxi1IAAADIACgEIgCABg");
	var mask_graphics_126 = new cjs.Graphics().p("ArUKAQgdgJgXgZQgVgXgLgfQgGgQgCgNQgGgLgEgMQgGgSgEgfIgBgQQgGgTAAgTQAAgbALgVQAJgPATgSQABgKACgJIACgGQAAgVAIgUQAGgRALgMQAHgWAQgRIAEgJQAOgdAagQIAHgEQAHgIAJgHIAKgIIADgCQAVgVAagHQANgKARgFQAIgDAJgBQAPgIAQgDIANgBIgDgEIgJACQgaAFgZgJQghgMgTgdQgFgKgEgJQgLgBgLgEQgagIgSgTQgRgTgHgaQgCgLAAgLQgWgJgRgRQgTgVgGgeQgDgUAEgTIgCgBQgagQgMgaQgMgbAEgeQAEgbAPgUQgPgPgJgUQgOgiAMgjQANgoAlgTQATgKATgCIABgFQAHgYAQgSQATgVAdgIQAdgIAbAJQAZAHASATQAXgEAWAHQAVAGARAPQAQAPAJAUIAEAKIANAFQATAIAPAPIALADQAlALATAfIAHADIAHADIABgBQANgNASgDQAHgCAHAAQACgMAFgKQAJgPAPgJIAIgFIAIgKQAKgLAPgGIAMgDIACgHQAHgUASgMQAQgLATAAQANgIAPgBQAQgBAOAFIAMgCQAjgEAXAXIAHAIQALAFAJAIQARAQADAYIABAFIAAABQAKARgBATIAAAEQAHATgFAUQgCAOgJALQgBALgHAKQADAJgBALQgCAXgSAOQADAOgFAOQgDAIgEAGIAAALQgEAfgaAOIgDACQAAAPgMAMIgGAGIgEACIAAADIgCAIIANgJQAlgVAqAMIAEACIAMgMQAWgRAdgEQAdgDAaAMQAKAEAIAHIANgFQAdgHAbAIQATAGAQAOIAPgDQAdgEAZALQAZALAQAXIAFAIQATgCAUAGQAZAJASAUIAIAJIAJgLQATgUAdgHQAVgFAUADIAHgNQAVgdAhgKQAXgHAZAEIAOAEQABgKADgJQAIgbATgSQAUgSAbgGQAbgGAaAHQATAGANAKQAUAOAKAYQALAXgBAZQgCAZgNAVQgNAWgWANQgVAMgaABQgUABgSgGQgCAWgMATQgNAVgUANQgTAMgZADQgNABgNgCQgMAZgWAOQgWAQgeACQgdABgZgNQgUgLgOgTQgFAIgIAGQgTARgaAGQgbAFgZgIQgZgIgSgTQgHgIgGgIIgHAAQgcABgYgOQgIgFgIgHQgNAEgOAAQgeAAgagSIgDgCQgYAKgagCQgMgCgLgDIgKAKQgXAUgdADQgKABgKAAQgHAOgMAMQgSASgbAGQgTAFgTgDQgGANgLALQgRAUgYAIQgYAIgZgEQgNgCgLgEIgGAFQgXATgcAEQgdAEgbgOQgSgJgNgNIgLAEIgCAAIAJANQAMAUADAXQADAYgHAVQgKAegZAUQgaAVgfACIgIAAIgLACIgDACIgOAEIgGAFQgKALgNAIIgGAEIgEAEIgEAEQgGAQgLANIgBACIAAABIAHAJQAOAVAEAYQADAVgGAWQAGANACAPQAGAigOAdQgHAPgLANQgBANgDANQgIAcgTAUQgUATgcAHQgOAEgNAAQgOAAgOgEgAm3h6QAfADAWATIAJAJQAQgGAQgBIACgFQAHgKAKgEQAKgEAOAAIABAAQADgFAFgEQAHgGAKgCIADgFQAGgJAMgFQAGgDAGAAQAEgKAKgHQAGgFAIgCIAGgIQAHgGAHgDQACgGAEgFQAHgKAKgEQADgNALgKIAHgFQABgKAFgKIAFgHIgCgDQgFgOACgQQACgNAJgMIgBgEQAAgSAMgQIAGgHQgFgWAMgTQgCgIAAgIIgCgFQgGgPACgPIABgDIgCgFIgCgKIgBgCQgIADgIAAIgIAEQgHADgIACQgEAPgKAMQgLANgOAGIgCABIgIAJQgMANgRAEQgIACgKAAIAAAAQgDAYgSASQgLALgQAEQgQAFgPgDQgNgDgLgIQgKAJgNAFQgHADgIABQgKAKgNAGQgUAKgUABQgrADgggcIgHgHQgJgCgIgDQgXgJgQgRQgOgQgHgTQgMgEgNgHQgLgGgJgJIgJABQgEASgKAPIgEAGIAKALQATAZACAdQABAPgDAOQAaAPAMAZQALAUAAAYQAkANASAjIAHAOQAQABAOAGQAYAKARAWIABACQAOgEAOAAIAOABgAh0i1IgBADIACgEIgBABg");
	var mask_graphics_127 = new cjs.Graphics().p("AsNKAQgdgJgXgZQgVgXgLgfQgGgQgCgNQgGgLgEgMQgGgSgEgfIgBgQQgGgTAAgTQAAgbALgVQAJgPATgSQABgKACgJIACgGQAAgVAIgUQAGgRALgMQAHgWAQgRIAEgJQAOgdAagQIAHgEQAHgIAJgHIAKgIIADgCQAVgVAagHQANgKARgFQAIgDAJgBQAPgIAQgDIANgBIgDgEIgJACQgaAFgZgJQghgMgTgdQgFgKgEgJQgLgBgLgEQgagIgSgTQgRgTgHgaQgCgLAAgLQgWgJgRgRQgTgVgGgeQgDgUAEgTIgCgBQgagQgMgaQgMgbAEgeQAEgbAPgUQgPgPgJgUQgOgiAMgjQANgoAlgTQATgKATgCIABgFQAHgYAQgSQATgVAdgIQAdgIAbAJQAZAHASATQAXgEAWAHQAVAGARAPQAQAPAJAUIAEAKIANAFQATAIAPAPIALADQAlALATAfIAHADIAHADIABgBQANgNASgDQAHgCAHAAQACgMAFgKQAJgPAPgJIAIgFIAIgKQAKgLAPgGIAMgDIACgHQAHgUASgMQAQgLATAAQANgIAPgBQAQgBAOAFIAMgCQAjgEAXAXIAHAIQALAFAJAIQARAQADAYIABAFIAAABQALARgBATIAAAEQAHATgFAUQgCAOgJALQgCALgHAKQADAJgBALQgCAXgSAOQADAOgFAOQgDAIgEAGIAAALQgEAfgaAOIgDACQAAAPgMAMIgGAGIgEACIAAADIgCAIIANgJQAlgVAqAMIAFACIAMgMQAWgRAcgEQAdgDAaAMQAKAEAIAHIANgFQAdgHAbAIQATAGAQAOIAPgDQAdgEAZALQAZALAQAXIAFAIQATgCAUAGQAZAJASAUIAIAJIAJgLQATgUAdgHQAVgFAUADIAHgNQAVgdAhgKQAXgHAZAEIAOAEQABgKADgJQAIgbATgSQAUgSAbgGQAUgEASACIAAgEQACgdATgYQASgZAcgJQAbgKAeAHQAdAHAVAVQARATAGAYQAIAcgJAdQgKAdgWATQgXASgfADQgMABgLgBIAAACQgCAZgNAVQgNAWgWANQgVAMgaABQgUABgSgGQgCAWgMATQgNAVgUANQgTAMgZADQgNABgNgCQgMAZgWAOQgWAQgeACQgdABgZgNQgUgLgOgTQgFAIgIAGQgTARgaAGQgbAFgZgIQgZgIgSgTQgHgIgGgIIgHAAQgcABgYgOQgIgFgIgHQgNAEgOAAQgeAAgagSIgDgCQgYAKgagCQgMgCgKgDIgKAKQgXAUgeADQgKABgKAAQgHAOgMAMQgSASgbAGQgTAFgTgDQgGANgLALQgRAUgYAIQgYAIgZgEQgNgCgLgEIgGAFQgXATgcAEQgdAEgbgOQgSgJgNgNIgLAEIgCAAIAJANQAMAUADAXQADAYgHAVQgKAegZAUQgaAVgfACIgIAAIgLACIgDACIgOAEIgGAFQgKALgNAIIgGAEIgEAEIgEAEQgGAQgLANIgBACIAAABIAHAJQAOAVAEAYQADAVgGAWQAGANACAPQAGAigOAdQgHAPgLANQAAANgEANQgIAcgTAUQgUATgcAHQgOAEgNAAQgOAAgOgEgAnwh6QAfADAWATIAJAJQAQgGAQgBIACgFQAHgKAKgEQAKgEAOAAIABAAQADgFAFgEQAHgGAKgCIADgFQAGgJAMgFQAGgDAGAAQAEgKAKgHQAGgFAIgCIAGgIQAHgGAHgDQACgGAEgFQAHgKAKgEQADgNALgKIAHgFQABgKAFgKIAFgHIgCgDQgFgOACgQQACgNAJgMIgBgEQAAgSAMgQIAGgHQgFgWAMgTQgCgIAAgIIgCgFQgGgPACgPIABgDIgCgFIgCgKIgBgCQgIADgIAAIgIAEQgHADgIACQgEAPgKAMQgLANgOAGIgCABIgIAJQgMANgRAEQgIACgKAAIAAAAQgDAYgSASQgLALgQAEQgQAFgPgDQgNgDgLgIQgKAJgNAFQgHADgIABQgKAKgNAGQgUAKgUABQgrADgggcIgHgHQgJgCgIgDQgXgJgQgRQgOgQgHgTQgMgEgNgHQgLgGgJgJIgJABQgEASgKAPIgEAGIAKALQATAZACAdQABAPgDAOQAaAPAMAZQALAUAAAYQAkANASAjIAHAOQAQABAOAGQAYAKARAWIABACQAOgEAOAAIAOABgAiti1IgBADIACgEIgBABg");
	var mask_graphics_128 = new cjs.Graphics().p("AtFKAQgdgJgXgZQgVgXgLgfQgGgQgCgNQgGgLgEgMQgGgSgEgfIgBgQQgGgTAAgTQAAgbALgVQAJgPATgSQABgKACgJIACgGQAAgVAIgUQAGgRALgMQAHgWAQgRIAEgJQAOgdAagQIAHgEQAHgIAJgHIAKgIIADgCQAVgVAagHQANgKARgFQAIgDAJgBQAPgIAQgDIANgBIgDgEIgJACQgaAFgZgJQghgMgTgdQgFgKgEgJQgLgBgLgEQgagIgSgTQgRgTgHgaQgCgLAAgLQgWgJgRgRQgTgVgGgeQgDgUAEgTIgCgBQgagQgMgaQgMgbAEgeQAEgbAPgUQgPgPgJgUQgOgiAMgjQANgoAlgTQATgKATgCIABgFQAHgYAQgSQATgVAdgIQAdgIAbAJQAZAHASATQAXgEAWAHQAVAGARAPQAQAPAJAUIAEAKIANAFQATAIAPAPIALADQAlALATAfIAHADIAHADIABgBQANgNASgDQAHgCAHAAQACgMAFgKQAJgPAPgJIAIgFIAIgKQAKgLAPgGIAMgDIACgHQAHgUASgMQAQgLATAAQANgIAPgBQAQgBAOAFIAMgCQAjgEAXAXIAHAIQALAFAJAIQARAQADAYIABAFIAAABQALARgBATIAAAEQAHATgFAUQgCAOgJALQgCALgHAKQADAJgBALQgCAXgSAOQADAOgFAOQgCAIgFAGIAAALQgEAfgaAOIgDACQAAAPgMAMIgGAGIgEACIAAADIgCAIIANgJQAlgVAqAMIAFACIAMgMQAWgRAdgEQAdgDAZAMQAKAEAIAHIANgFQAdgHAbAIQATAGAQAOIAPgDQAdgEAZALQAZALAQAXIAFAIQATgCAUAGQAZAJASAUIAIAJIAJgLQATgUAdgHQAVgFAUADIAHgNQAVgdAhgKQAXgHAZAEIAOAEQABgKADgJQAIgbATgSQAUgSAbgGQAUgEASACIAAgEQACgdATgYQASgZAcgJQAXgIAYADQADgJADgKQAIgRAMgMQAUgUAcgHQAdgHAaAIQAbAJATAWQATAXAEAbQAEAcgLAbQgMAbgXAQQgXAQgdABQgKABgKgCIgCAJQgKAdgWATQgXASgfADQgMABgLgBIAAACQgCAZgNAVQgNAWgWANQgVAMgaABQgUABgSgGQgCAWgMATQgNAVgUANQgTAMgZADQgNABgNgCQgMAZgWAOQgWAQgeACQgdABgZgNQgUgLgOgTQgFAIgIAGQgTARgaAGQgbAFgZgIQgZgIgSgTQgHgIgGgIIgHAAQgcABgYgOQgIgFgIgHQgNAEgOAAQgeAAgagSIgDgCQgXAKgagCQgMgCgLgDIgKAKQgXAUgeADQgKABgKAAQgHAOgMAMQgSASgbAGQgTAFgTgDQgGANgLALQgRAUgYAIQgYAIgZgEQgNgCgLgEIgGAFQgXATgcAEQgdAEgbgOQgSgJgNgNIgLAEIgCAAIAJANQAMAUADAXQADAYgHAVQgKAegZAUQgaAVgfACIgIAAIgLACIgDACIgOAEIgGAFQgKALgNAIIgGAEIgEAEIgEAEQgGAQgLANIgBACIAAABIAHAJQAOAVAEAYQADAVgGAWQAGANACAPQAGAigOAdQgHAPgLANQAAANgEANQgIAcgTAUQgUATgcAHQgOAEgNAAQgOAAgOgEgAooh6QAfADAWATIAJAJQAQgGAQgBIACgFQAHgKAKgEQAKgEAOAAIABAAQADgFAFgEQAIgGAJgCIADgFQAGgJAMgFQAGgDAGAAQAEgKAKgHQAHgFAHgCIAGgIQAHgGAHgDQACgGAEgFQAHgKAKgEQADgNALgKIAHgFQABgKAFgKIAFgHIgCgDQgFgOACgQQACgNAJgMIgBgEQAAgSAMgQIAGgHQgFgWAMgTQgCgIAAgIIgCgFQgGgPACgPIABgDIgCgFIgCgKIgBgCQgIADgIAAIgIAEQgHADgIACQgEAPgKAMQgLANgOAGIgCABIgIAJQgMANgRAEQgIACgKAAIAAAAQgDAYgSASQgLALgQAEQgQAFgPgDQgNgDgLgIQgKAJgNAFQgHADgIABQgKAKgNAGQgUAKgUABQgrADgggcIgHgHQgIgCgJgDQgXgJgQgRQgOgQgHgTQgMgEgNgHQgLgGgJgJIgJABQgDASgLAPIgEAGIAKALQATAZACAdQABAPgDAOQAaAPAMAZQALAUAAAYQAkANASAjIAHAOQAQABAOAGQAYAKARAWIABACQAOgEAOAAIAOABgAjli1IgBADIACgEIgBABg");
	var mask_graphics_129 = new cjs.Graphics().p("AtsKAQgdgJgXgZQgWgXgLgfQgFgQgCgNQgHgLgEgMQgFgSgEgfIgCgQQgGgTAAgTQAAgbAMgVQAIgPATgSQABgKADgJIACgGQgBgVAIgUQAHgRAKgMQAHgWAQgRIAEgJQAOgdAagQIAIgEQAHgIAIgHIALgIIACgCQAVgVAbgHQANgKAQgFQAJgDAIgBQAPgIARgDIANgBIgDgEIgJACQgbAFgYgJQgigMgSgdQgGgKgDgJQgLgBgMgEQgagIgRgTQgSgTgGgaQgDgLAAgLQgWgJgQgRQgUgVgFgeQgEgUAEgTIgBgBQgagQgNgaQgMgbAFgeQAEgbAPgUQgQgPgIgUQgOgiAMgjQANgoAlgTQASgKATgCIABgFQAHgYARgSQATgVAdgIQAcgIAbAJQAZAHASATQAXgEAXAHQAUAGARAPQARAPAIAUIAEAKIAOAFQATAIAOAPIAMADQAkALATAfIAIADIAGADIABgBQAOgNARgDQAHgCAHAAQACgMAGgKQAIgPAQgJIAIgFIAIgKQAKgLAOgGIANgDIACgHQAHgUASgMQAQgLATAAQANgIAPgBQAPgBAPAFIAMgCQAjgEAWAXIAIAIQALAFAJAIQARAQADAYIAAAFIABABQAKARgBATIAAAEQAIATgFAUQgDAOgJALQgCALgGAKQADAJgBALQgDAXgRAOQADAOgGAOQgCAIgEAGIgBALQgEAfgaAOIgDACQAAAPgLAMIgHAGIgDACIgBADIgBAIIAMgJQAmgVAqAMIAFACIAMgMQAWgRAdgEQAdgDAZAMQAKAEAIAHIANgFQAcgHAbAIQAUAGAPAOIAQgDQAcgEAZALQAZALARAXIAFAIQATgCATAGQAZAJASAUIAIAJIAJgLQAUgUAcgHQAWgFATADIAIgNQAUgdAhgKQAYgHAYAEIAPAEQABgKACgJQAIgbAUgSQAUgSAbgGQATgEATACIAAgEQACgdASgYQATgZAbgJQAXgIAZADQACgJAEgKQAIgRAMgMQATgUAdgHIAEgBQgCgdAOgZQANgZAagPQAagPAcACQAdACAYARQAYASALAaQAKAagGAeQgFAdgUAVQgUAUgdAHIgDABQACAYgKAYQgLAbgXAQQgXAQgdABQgKABgKgCIgDAJQgJAdgXATQgXASgeADQgMABgMgBIAAACQgBAZgOAVQgNAWgVANQgWAMgZABQgUABgTgGQgCAWgMATQgMAVgUANQgUAMgYADQgOABgNgCQgLAZgWAOQgXAQgdACQgdABgZgNQgVgLgNgTQgGAIgHAGQgTARgbAGQgaAFgZgIQgZgIgTgTQgHgIgFgIIgHAAQgdABgXgOQgJgFgIgHQgMAEgOAAQgdAAgbgSIgDgCQgXAKgbgCQgLgCgLgDIgKAKQgYAUgdADQgKABgKAAQgHAOgMAMQgTASgbAGQgTAFgTgDQgGANgKALQgSAUgYAIQgXAIgagEQgMgCgLgEIgHAFQgXATgcAEQgcAEgbgOQgSgJgNgNIgLAEIgDAAIAJANQANAUADAXQACAYgGAVQgKAegaAUQgaAVgfACIgHAAIgLACIgEACIgNAEIgHAFQgJALgNAIIgHAEIgEAEIgDAEQgGAQgLANIgBACIAAABIAHAJQAOAVADAYQAEAVgHAWQAGANADAPQAFAigNAdQgHAPgMANQAAANgEANQgHAcgUAUQgUATgcAHQgNAEgNAAQgOAAgOgEgApPh6QAeADAXATIAJAJQAPgGAQgBIADgFQAHgKAKgEQAKgEANAAIABAAQAEgFAEgEQAIgGAJgCIADgFQAHgJALgFQAHgDAGAAQAEgKAJgHQAHgFAIgCIAGgIQAGgGAHgDQACgGAEgFQAIgKAKgEQACgNALgKIAIgFQAAgKAFgKIAFgHIgBgDQgGgOACgQQADgNAIgMIAAgEQAAgSAMgQIAGgHQgFgWAMgTQgCgIAAgIIgDgFQgFgPACgPIAAgDIgCgFIgCgKIgBgCQgHADgIAAIgJAEQgGADgJACQgDAPgLAMQgKANgPAGIgCABIgHAJQgNANgQAEQgIACgKAAIgBAAQgCAYgSASQgMALgQAEQgPAFgQgDQgNgDgKgIQgKAJgOAFQgHADgHABQgLAKgNAGQgUAKgUABQgrADgfgcIgHgHQgJgCgJgDQgXgJgPgRQgPgQgGgTQgNgEgMgHQgLgGgKgJIgIABQgEASgKAPIgEAGIAJALQATAZADAdQABAPgDAOQAZAPANAZQALAUAAAYQAkANASAjIAGAOQAQABAPAGQAYAKAQAWIACACQANgEAPAAIAOABgAkNi1IAAADIACgEIgCABg");
	var mask_graphics_130 = new cjs.Graphics().p("AuOKUQgdgIgXgZQgWgXgLggQgFgQgCgNQgHgKgEgNQgFgRgEggIgCgQQgGgSAAgUQAAgaAMgVQAIgQATgSQABgJADgJIACgHQgBgUAIgVQAHgQAKgNQAHgWAQgRIAEgJQAOgdAagPIAIgEQAHgJAIgHIALgHIACgDQAVgVAbgGQANgKAQgFQAJgDAIgCQAPgIARgCIANgBIgDgEIgJACQgbAEgYgJQgigLgSgfQgGgJgDgJQgLgBgMgDQgagJgRgTQgSgSgGgbQgDgLAAgLQgWgIgQgSQgUgVgFgdQgEgVAEgTIgBAAQgagQgNgbQgMgaAFgfQAEgbAPgTQgQgPgIgUQgOgiAMgkQANgoAlgTQASgKATgBIABgFQAHgZARgRQATgVAdgIQAcgIAbAIQAaAIARASQAXgDAXAGQAUAHARAPQARAOAIAUIAEALIAOAFQATAHAOAPIAMADQAkALATAfIAIADIAGAEIABgBQAOgNARgEQAHgBAHAAQACgMAGgLQAIgPAQgJIAIgEIAIgLQAKgLAOgFIANgEIACgGQAHgVASgLQAQgLATAAQANgIAPgBQAPgCAPAGIAMgCQAjgEAWAXIAIAIQALAEAJAJQARAQADAXIAAAGIABABQAKARgBATIAAAEQAIASgFAVQgDANgJAMQgCALgGAJQADAKgBAKQgDAXgRAPQADAOgGAOQgCAHgEAHIgBALQgEAfgaAOIgDABQABAQgMALIgHAGIgDACIgBAEIgBAHIAMgIQAmgVAqAMIAFABIAMgLQAWgSAdgDQAdgEAZAMQAKAFAIAGIAOgEQAcgIAaAIQAUAHAPANIAQgDQAcgEAZALQAZALARAYIAFAHQATgBATAGQAZAIASAUIAIAKIAJgLQAUgUAcgHQAWgFATADIAIgOQAUgdAhgKQAYgHAYAFIAPADQABgJACgJQAIgbAUgSQAUgSAbgGQATgFATACIAAgDQACgdASgZQATgYAbgKQAXgIAZAEQACgKAEgJQAIgSAMgMQATgUAdgHIAEgBQgCgdAOgZQANgZAagPIAMgGQABgMADgNQAHgYARgSQASgSAYgIQAYgIAYAEQAVADASAMQASALAMASQAZAkgLAsQgIAigdAVQgNAKgPAFIgCAPQgFAegUAUQgUAVgdAHIgDAAQACAYgKAYQgLAbgXAQQgXAQgdACQgKAAgKgBIgDAJQgJAdgXASQgXATgeADQgMABgMgCIAAACQgBAZgOAWQgNAWgVAMQgWANgZABQgUABgTgHQgCAWgMAUQgMAVgUAMQgUANgYACQgOACgNgDQgLAZgWAPQgXAQgdABQgdACgZgNQgVgMgNgUQgGAIgHAHQgTARgbAGQgaAGgZgIQgZgIgTgUQgHgIgFgIIgHABQgdAAgXgNQgJgGgIgGQgMADgNABQgeAAgbgSIgDgDQgXAKgbgCQgLgBgLgEIgKAKQgYAUgdAEQgKABgKgBQgHAOgMAMQgTASgbAHQgTAEgTgCQgGANgKALQgSATgYAIQgXAJgagEQgMgCgLgFIgHAGQgXATgcADQgcAEgbgNQgSgJgNgOIgLAEIgDABIAJAMQANAUADAXQACAZgGAUQgKAegaAUQgaAVgfACIgHAAIgLADIgEABIgNAFIgHAFQgJAKgNAIIgHAEIgEAFIgDAEQgGAQgLANIgBACIAAAAIAHAKQAOAVADAYQAEAVgHAVQAGANADAPQAFAigNAdQgHAQgMAMQAAANgEAOQgHAcgUATQgUAUgcAHQgNADgNAAQgOAAgOgEgApxhmQAeAEAXATIAJAIQAPgGAQgBIADgEQAHgKAKgEQAKgEANAAIABAAQAEgGAEgDQAIgGAJgCIADgFQAHgKALgFQAHgCAGgBQAEgKAJgHQAHgFAIgCIAGgIQAGgFAHgDQACgGAEgGQAIgKAKgDQADgOAKgJIAIgGQAAgJAFgKIAFgHIgBgDQgGgPACgPQADgOAIgMIAAgDQAAgTAMgQIAGgGQgFgWAMgUQgCgHAAgIIgDgGQgFgPACgPIAAgDIgCgEIgCgKIgBgCQgHACgIABIgJAEQgGADgJABQgDAPgLANQgKANgPAGIgCAAIgHAKQgNAMgQAFQgIACgKAAIgBAAQgCAXgSASQgMALgQAFQgPAEgQgDQgNgCgKgIQgKAJgOAFQgHACgHABQgLAKgNAHQgUAJgUACQgrACgfgbIgHgHQgJgCgJgDQgXgJgPgSQgPgQgGgTQgNgDgMgHQgLgGgKgJIgIABQgEARgKAQIgEAGIAJALQATAYADAdQABAPgDAOQAZAPANAZQALAVAAAYQAkANASAiIAGAOQAQACAPAGQAYAKAQAVIACACQANgEAPAAIAOABgAkvihIAAAEIACgEIgCAAg");
	var mask_graphics_131 = new cjs.Graphics().p("AuOKUQgdgIgXgZQgWgXgLggQgFgQgCgNQgHgKgEgNQgFgRgEggIgCgQQgGgSAAgUQAAgaAMgVQAIgQATgSQABgJADgJIACgHQgBgUAIgVQAHgQAKgNQAHgWAQgRIAEgJQAOgdAagPIAIgEQAHgJAIgHIALgHIACgDQAVgVAbgGQANgKAQgFQAJgDAIgCQAPgIARgCIANgBIgDgEIgJACQgbAEgYgJQgigLgSgfQgGgJgDgJQgLgBgMgDQgagJgRgTQgSgSgGgbQgDgLAAgLQgWgIgQgSQgUgVgFgdQgEgVAEgTIgBAAQgagQgNgbQgMgaAFgfQAEgbAPgTQgQgPgIgUQgOgiAMgkQANgoAlgTQASgKATgBIABgFQAHgZARgRQATgVAdgIQAcgIAbAIQAaAIARASQAXgDAXAGQAUAHARAPQARAOAIAUIAEALIAOAFQATAHAOAPIAMADQAkALATAfIAIADIAGAEIABgBQAOgNARgEQAHgBAHAAQACgMAGgLQAIgPAQgJIAIgEIAIgLQAKgLAOgFIANgEIACgGQAHgVASgLQAQgLATAAQANgIAPgBQAPgCAPAGIAMgCQAjgEAWAXIAIAIQALAEAJAJQARAQADAXIAAAGIABABQAKARgBATIAAAEQAIASgFAVQgDANgJAMQgCALgGAJQADAKgBAKQgDAXgRAPQADAOgGAOQgCAHgEAHIgBALQgEAfgaAOIgDABQABAQgMALIgHAGIgDACIgBAEIgBAHIAMgIQAmgVAqAMIAFABIAMgLQAWgSAdgDQAdgEAZAMQAKAFAIAGIAOgEQAcgIAaAIQAUAHAPANIAQgDQAcgEAZALQAZALARAYIAFAHQATgBATAGQAZAIASAUIAIAKIAJgLQAUgUAcgHQAWgFATADIAIgOQAUgdAhgKQAYgHAYAFIAPADQABgJACgJQAIgbAUgSQAUgSAbgGQATgFATACIAAgDQACgdASgZQATgYAbgKQAXgIAZAEQACgKAEgJQAIgSAMgMQATgUAdgHIAEgBQgCgdAOgZQANgZAagPIAMgGQABgMADgNQAHgYARgSQASgSAYgIQAYgIAYAEQAVADASAMQASALAMASQAZAkgLAsQgIAigdAVQgNAKgPAFIgCAPQgFAegUAUQgUAVgdAHIgDAAQACAYgKAYQgLAbgXAQQgXAQgdACQgKAAgKgBIgDAJQgJAdgXASQgXATgeADQgMABgMgCIAAACQgBAZgOAWQgNAWgVAMQgWANgZABQgUABgTgHQgCAWgMAUQgMAVgUAMQgUANgYACQgOACgNgDQgLAZgWAPQgXAQgdABQgdACgZgNQgVgMgNgUQgGAIgHAHQgTARgbAGQgaAGgZgIQgZgIgTgUQgHgIgFgIIgHABQgdAAgXgNQgJgGgIgGQgMADgNABQgeAAgbgSIgDgDQgXAKgbgCQgLgBgLgEIgKAKQgYAUgdAEQgKABgKgBQgHAOgMAMQgTASgbAHQgTAEgTgCQgGANgKALQgSATgYAIQgXAJgagEQgMgCgLgFIgHAGQgXATgcADQgcAEgbgNQgSgJgNgOIgLAEIgDABIAJAMQANAUADAXQACAZgGAUQgKAegaAUQgaAVgfACIgHAAIgLADIgEABIgNAFIgHAFQgJAKgNAIIgHAEIgEAFIgDAEQgGAQgLANIgBACIAAAAIAHAKQAOAVADAYQAEAVgHAVQAGANADAPQAFAigNAdQgHAQgMAMQAAANgEAOQgHAcgUATQgUAUgcAHQgNADgNAAQgOAAgOgEgApxhmQAeAEAXATIAJAIQAPgGAQgBIADgEQAHgKAKgEQAKgEANAAIABAAQAEgGAEgDQAIgGAJgCIADgFQAHgKALgFQAHgCAGgBQAEgKAJgHQAHgFAIgCIAGgIQAGgFAHgDQACgGAEgGQAIgKAKgDQADgOAKgJIAIgGQAAgJAFgKIAFgHIgBgDQgGgPACgPQADgOAIgMIAAgDQAAgTAMgQIAGgGQgFgWAMgUQgCgHAAgIIgDgGQgFgPACgPIAAgDIgCgEIgCgKIgBgCQgHACgIABIgJAEQgGADgJABQgDAPgLANQgKANgPAGIgCAAIgHAKQgNAMgQAFQgIACgKAAIgBAAQgCAXgSASQgMALgQAFQgPAEgQgDQgNgCgKgIQgKAJgOAFQgHACgHABQgLAKgNAHQgUAJgUACQgrACgfgbIgHgHQgJgCgJgDQgXgJgPgSQgPgQgGgTQgNgDgMgHQgLgGgKgJIgIABQgEARgKAQIgEAGIAJALQATAYADAdQABAPgDAOQAZAPANAZQALAVAAAYQAkANASAiIAGAOQAQACAPAGQAYAKAQAVIACACQANgEAPAAIAOABgAkvihIAAAEIACgEIgCAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:17.5,y:275.6}).wait(70).to({graphics:mask_graphics_70,x:17.5,y:275.6}).wait(1).to({graphics:mask_graphics_71,x:17.8,y:270.9}).wait(1).to({graphics:mask_graphics_72,x:17.6,y:269.2}).wait(1).to({graphics:mask_graphics_73,x:17.6,y:267.7}).wait(1).to({graphics:mask_graphics_74,x:17.6,y:266.3}).wait(1).to({graphics:mask_graphics_75,x:17.6,y:264.5}).wait(1).to({graphics:mask_graphics_76,x:17.6,y:262.8}).wait(1).to({graphics:mask_graphics_77,x:18.3,y:261.1}).wait(1).to({graphics:mask_graphics_78,x:20,y:259.6}).wait(1).to({graphics:mask_graphics_79,x:21.1,y:258.8}).wait(1).to({graphics:mask_graphics_80,x:22.9,y:257.9}).wait(1).to({graphics:mask_graphics_81,x:24.5,y:257.4}).wait(1).to({graphics:mask_graphics_82,x:25.7,y:257.2}).wait(1).to({graphics:mask_graphics_83,x:32.9,y:249.3}).wait(1).to({graphics:mask_graphics_84,x:34.2,y:248.4}).wait(1).to({graphics:mask_graphics_85,x:35.6,y:247.3}).wait(1).to({graphics:mask_graphics_86,x:37.5,y:246}).wait(1).to({graphics:mask_graphics_87,x:38.8,y:245.1}).wait(1).to({graphics:mask_graphics_88,x:39.9,y:243.9}).wait(1).to({graphics:mask_graphics_89,x:41.2,y:242.4}).wait(1).to({graphics:mask_graphics_90,x:42.2,y:240.6}).wait(1).to({graphics:mask_graphics_91,x:43.1,y:238.8}).wait(1).to({graphics:mask_graphics_92,x:43.9,y:237.2}).wait(1).to({graphics:mask_graphics_93,x:44.4,y:235.4}).wait(1).to({graphics:mask_graphics_94,x:45.4,y:232.8}).wait(1).to({graphics:mask_graphics_95,x:45.7,y:230.5}).wait(1).to({graphics:mask_graphics_96,x:46.4,y:228.5}).wait(1).to({graphics:mask_graphics_97,x:46.4,y:226.9}).wait(1).to({graphics:mask_graphics_98,x:46.4,y:225.4}).wait(1).to({graphics:mask_graphics_99,x:46.4,y:224.3}).wait(1).to({graphics:mask_graphics_100,x:46.4,y:224.2}).wait(1).to({graphics:mask_graphics_101,x:46.4,y:224.2}).wait(1).to({graphics:mask_graphics_102,x:46.4,y:224.2}).wait(1).to({graphics:mask_graphics_103,x:46.4,y:224.2}).wait(1).to({graphics:mask_graphics_104,x:46.4,y:224.2}).wait(1).to({graphics:mask_graphics_105,x:46.4,y:224.2}).wait(1).to({graphics:mask_graphics_106,x:46.4,y:224.2}).wait(1).to({graphics:mask_graphics_107,x:46.4,y:224.2}).wait(1).to({graphics:mask_graphics_108,x:46.4,y:224.2}).wait(1).to({graphics:mask_graphics_109,x:46.4,y:223.2}).wait(1).to({graphics:mask_graphics_110,x:44.9,y:223.2}).wait(1).to({graphics:mask_graphics_111,x:44.9,y:223.2}).wait(1).to({graphics:mask_graphics_112,x:44.9,y:223.2}).wait(1).to({graphics:mask_graphics_113,x:44.9,y:223.2}).wait(1).to({graphics:mask_graphics_114,x:44.9,y:223.2}).wait(1).to({graphics:mask_graphics_115,x:44.9,y:223.2}).wait(1).to({graphics:mask_graphics_116,x:44.9,y:223.2}).wait(1).to({graphics:mask_graphics_117,x:44.9,y:223.2}).wait(1).to({graphics:mask_graphics_118,x:44.9,y:223.2}).wait(1).to({graphics:mask_graphics_119,x:47.9,y:223.2}).wait(1).to({graphics:mask_graphics_120,x:53.2,y:223.2}).wait(1).to({graphics:mask_graphics_121,x:58.2,y:223.2}).wait(1).to({graphics:mask_graphics_122,x:62.9,y:223.2}).wait(1).to({graphics:mask_graphics_123,x:67.6,y:223.2}).wait(1).to({graphics:mask_graphics_124,x:75.8,y:223.2}).wait(1).to({graphics:mask_graphics_125,x:81.2,y:223.2}).wait(1).to({graphics:mask_graphics_126,x:87.9,y:223.2}).wait(1).to({graphics:mask_graphics_127,x:93.6,y:223.2}).wait(1).to({graphics:mask_graphics_128,x:99.2,y:223.2}).wait(1).to({graphics:mask_graphics_129,x:103.2,y:223.2}).wait(1).to({graphics:mask_graphics_130,x:106.6,y:221.1}).wait(1).to({graphics:mask_graphics_131,x:106.6,y:221.1}).wait(1).to({graphics:null,x:0,y:0}).wait(527));

	// Layer_22
	this.instance_18 = new lib.S8PNG_LINEpngcopy();
	this.instance_18.parent = this;
	this.instance_18.setTransform(4,29,0.48,0.48);

	this.instance_19 = new lib.Tween16("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(147.9,148.9);
	this.instance_19._off = true;

	var maskedShapeInstanceList = [this.instance_18,this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_18}]},70).to({state:[{t:this.instance_19}]},69).to({state:[{t:this.instance_19}]},35).to({state:[]},290).to({state:[]},1).wait(194));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(139).to({_off:false},0).to({regX:0.1,scaleX:0.77,scaleY:0.77,x:253.1,y:158},35,cjs.Ease.quadOut).to({_off:true},290).wait(195));

	// Layer_19
	this.instance_20 = new lib.Tween3("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(303.8,147.8);

	this.instance_21 = new lib.Tween4("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(147.8,147.8);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1).to({x:233.1},0).wait(1).to({x:214.8},0).wait(1).to({x:203.4},0).wait(1).to({x:195.2},0).wait(1).to({x:188.8},0).wait(1).to({x:183.8},0).wait(1).to({x:179.6},0).wait(1).to({x:176},0).wait(1).to({x:173},0).wait(1).to({x:170.4},0).wait(1).to({x:168.1},0).wait(1).to({x:166.1},0).wait(1).to({x:164.4},0).wait(1).to({x:162.8},0).wait(1).to({x:161.4},0).wait(1).to({x:160.1},0).wait(1).to({x:159},0).wait(1).to({x:158},0).wait(1).to({x:157},0).wait(1).to({x:156.2},0).wait(1).to({x:155.4},0).wait(1).to({x:154.7},0).wait(1).to({x:154.1},0).wait(1).to({x:153.5},0).wait(1).to({x:153},0).wait(1).to({x:152.5},0).wait(1).to({x:152.1},0).wait(1).to({x:151.7},0).wait(1).to({x:151.3},0).wait(1).to({x:151},0).wait(1).to({x:150.7},0).wait(1).to({x:150.4},0).wait(1).to({x:150.1},0).wait(1).to({x:149.9},0).wait(1).to({x:149.7},0).wait(1).to({x:149.5},0).wait(1).to({x:149.3},0).wait(1).to({x:149.1},0).wait(1).to({x:149},0).wait(1).to({x:148.9},0).wait(1).to({x:148.7},0).wait(1).to({x:148.6},0).wait(1).to({x:148.5},0).wait(1).to({x:148.4},0).wait(1).to({x:148.3},0).wait(1).to({startPosition:0},0).wait(1).to({x:148.2},0).wait(1).to({startPosition:0},0).wait(1).to({x:148.1},0).wait(1).to({startPosition:0},0).wait(1).to({x:148},0).wait(1).to({startPosition:0},0).wait(1).to({x:147.9},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({x:147.8},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(589));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(70).to({_off:false},0).wait(69).to({startPosition:0},0).to({regX:0.1,regY:0.1,scaleX:0.76,scaleY:0.76,x:254.5,y:157.3},35,cjs.Ease.quadOut).to({_off:true},291).wait(194));

	// Layer_20-------
	this.instance_22 = new lib.Tween1("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(-49.2,147.8);

	this.instance_23 = new lib.Tween2("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(147.8,147.8);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1).to({x:54},0).wait(1).to({x:75.4},0).wait(1).to({x:88.3},0).wait(1).to({x:97.4},0).wait(1).to({x:104.3},0).wait(1).to({x:109.9},0).wait(1).to({x:114.4},0).wait(1).to({x:118.2},0).wait(1).to({x:121.4},0).wait(1).to({x:124.2},0).wait(1).to({x:126.6},0).wait(1).to({x:128.7},0).wait(1).to({x:130.6},0).wait(1).to({x:132.2},0).wait(1).to({x:133.7},0).wait(1).to({x:135},0).wait(1).to({x:136.2},0).wait(1).to({x:137.3},0).wait(1).to({x:138.3},0).wait(1).to({x:139.1},0).wait(1).to({x:139.9},0).wait(1).to({x:140.7},0).wait(1).to({x:141.3},0).wait(1).to({x:141.9},0).wait(1).to({x:142.5},0).wait(1).to({x:143},0).wait(1).to({x:143.4},0).wait(1).to({x:143.8},0).wait(1).to({x:144.2},0).wait(1).to({x:144.6},0).wait(1).to({x:144.9},0).wait(1).to({x:145.2},0).wait(1).to({x:145.4},0).wait(1).to({x:145.7},0).wait(1).to({x:145.9},0).wait(1).to({x:146.1},0).wait(1).to({x:146.3},0).wait(1).to({x:146.4},0).wait(1).to({x:146.6},0).wait(1).to({x:146.7},0).wait(1).to({x:146.9},0).wait(1).to({x:147},0).wait(1).to({x:147.1},0).wait(1).to({x:147.2},0).wait(1).to({startPosition:0},0).wait(1).to({x:147.3},0).wait(1).to({x:147.4},0).wait(1).to({startPosition:0},0).wait(1).to({x:147.5},0).wait(1).to({startPosition:0},0).wait(1).to({x:147.6},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({x:147.7},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({x:147.8},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(589));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(70).to({_off:false},0).wait(69).to({startPosition:0},0).to({regX:0.1,regY:0.1,scaleX:0.76,scaleY:0.76,x:254.5,y:157.3},35,cjs.Ease.quadOut).to({_off:true},291).wait(194));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_1.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).to({_off:true},465).wait(194));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43,124.5,640.6,268.2);
// library properties:
lib.properties = {
	id: 'BB2A30285C8242D4970A17D3C5E17DE9',
	width: 300,
	height: 250,
	fps: 35,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/idex_atlas_.png", id:"idex_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['BB2A30285C8242D4970A17D3C5E17DE9'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;