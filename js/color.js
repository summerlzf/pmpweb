
var Color = {

	// 浅色区
	light: ['#9eb8ed', '#ffc5cc', '#ffd898', '#b2dd83'],
	x: -1,

	// 深色区
	dark: ['#79c02a', '#f6994b', '#4a6eff', '#af53ff', '#f673f1', '#8591f0', '#f7bc32', '#ff6f6f'],
	y: -1,

	rand: function(len) {
		return parseInt(Math.random() * len);
	},

	getLight: function() {
		var i = -1;
		while(i == -1 || i == this.x) {
			i = this.rand(this.light.length);
		}
		this.x = i;
		return this.light[i];
	},

	getDark: function() {
		var i = -1;
		while(i == -1 || i == this.y) {
			i = this.rand(this.dark.length);
		}
		this.y = i;
		return this.dark[i];
	}

};