var Crypto = {
	util: {

		// Convert n to unsigned 32-bit integer
		u32: function (n) {
			return n >>> 0;
		},

		// Unsigned 32-bit addition
		add: function (m, n) {

			// Shortcut
			var u32 = this.u32;

			// If only two numbers given, add them
			if (arguments.length == 2)
				return u32(u32(m) + u32(n));

			// Else, add any number of arguments
			var result = arguments[0];
			for (var i = 1; i < arguments.length; i++)
				result = this.add(result, arguments[i]);
			return result;

		},

		// Unsigned 32-bit multiplication
		mult: function (m, n) {
			return this.add((n & 0xFFFF0000) * m,
			                (n & 0x0000FFFF) * m);
		},

		// Unsigned 32-bit greater than (>) comparison.
		gt: function (m, n) {
			return this.u32(m) > this.u32(n);
		},

		lt: function (m, n) {
			return this.u32(m) < this.u32(n);
		}

	}
};
