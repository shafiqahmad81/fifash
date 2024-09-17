"use client";
import { useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
interface Props {
	target: number;
	initial?: number;
	className?: string;
	init: boolean;
	speed?: number;
}

function Counter({ initial = 0, target, className, init, speed = 200 }: Props) {
	const motionValue = useMotionValue(initial);
	const ref = useRef<HTMLDivElement | null>(null);
	const springValue = useSpring(motionValue, {
		damping: 100,
		stiffness: speed,
		duration: 0.1,
	});

	useEffect(() => {
		springValue.on("change", (latest: number) => {
			if (ref.current) {
				ref.current.textContent = Intl.NumberFormat("en-US").format(
					latest.toFixed(0) as unknown as number
				);
			}
		});
	}, [springValue]);

	useEffect(() => {
		if (init) {
			motionValue.set(target);
		}
	}, [target, motionValue, init]);

	return (
		<div className={className} ref={ref}>
			{initial}
		</div>
	);
}

export default Counter;
