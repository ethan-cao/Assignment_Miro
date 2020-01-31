"use strict";

export default function throttle(fx, threshhold = 1000) {
	let lastInvocation = null;
	let timer = null;

	return function() {
        let now = new Date();

		const context = this;
		const args = arguments;

		if (lastInvocation !== null && lastInvocation + threshhold < now) {
			clearTimeout(timer);

			timer = setTimeout(function() {
				lastInvocation = now;
				fx.apply(context, args);
			}, threshhold);
		} else {
			lastInvocation = now;
			fx.apply(context, args);
		}
	};
}
