import { MouseEvent, MouseEventHandler } from "react"
let canScroll: boolean = true;
export const canUserScroll = (scroll: boolean) => {
	canScroll = scroll;
	// document.body.style.overflowY = scroll?"auto":"hidden";
}

export const smoothScrollPrevent = {
	"onMouseEnter": function (e: MouseEvent<HTMLElement>) {
		if (e.currentTarget.scrollHeight > e.currentTarget.clientHeight) {
			canScroll = false;
		}
	},
	"onMouseLeave": (e: any) => {

		canScroll = true;
	}
}

export function SmoothScroll(target: any, speed: number, smooth: number) {
	// window.history.scrollRestoration = "auto";
	if (target === document)
		target = (document.scrollingElement
			|| document.documentElement
			|| document.body.parentNode
			|| document.body)
	// cross browser support for document scrolling

	var moving = false
	let pos: number = 0;
	var frame = target === document.body
		&& document.documentElement
		? document.documentElement
		: target // safari is the new IE

	// target.addEventListener('wheel', scrolled, { passive: false })

	function scrolled(e: WheelEvent) {
		if (canScroll) {
			e.preventDefault(); // disable default scrolling
			pos = window.scrollY;

			if (pos < 450 && e.deltaY < 0) {
				// window.scrollTo({ top: 0, behavior: "smooth" });
				pos = -11;
			} else {
				const delta = normalizeWheelDelta(e)
				pos += -delta * speed
				pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)) // limit scrolling
			}
			if (!moving) update()
		}
	}

	function normalizeWheelDelta(e: any) {
		if (e.detail) {
			if (e.wheelDelta)
				return e.wheelDelta / e.detail / 40 * (e.detail > 0 ? 1 : -1) // Opera
			else
				return -e.detail / 3 // Firefox
		} else
			return e.wheelDelta / 120 // IE,Safari,Chrome
	}

	function update() {
		moving = true
		const delta = (pos - target.scrollTop) / smooth;
		target.scrollTop += delta
		if (Math.abs(delta) > 0.79) {
			window.requestAnimationFrame(update);
		} else {
			moving = false
		}
	}
}