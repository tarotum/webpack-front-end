const autoprefixer = require('autoprefixer');
const cssMqpacker = require('css-mqpacker');

module.exports = {
	plugins: [autoprefixer({
		grid: true
	}), cssMqpacker()]
};
