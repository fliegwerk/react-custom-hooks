import { useEffect, useState } from 'react';

/**
 * default delay for the debounce hook
 */
export const DEFAULT_DELAY = 800; /* ms */

/**
 * This hook debounces the input value and updates the returned debounced value
 * only after the delay.
 * The second return element is a function,
 * that updates the debounced value immediately to the current value,
 * if it gets called.
 *
 * @param value the (fast) updating value
 * @param delay the delay to wait before updating the returned debounced value
 *
 * @returns the debounced value and a trigger function
 * to update the debounced value immediately which returns the updated value
 *
 * @see https://dev.to/gabe_ragland/debouncing-with-react-hooks-jci
 */
export default function useDebounce<T>(
	value: T,
	delay = DEFAULT_DELAY
): [T, () => T] {
	const [debouncedValue, setDebouncedValue] = useState<T>(value);

	const updateImmediately = () => {
		setDebouncedValue(value);
		return value;
	};

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);
		return () => {
			clearTimeout(handler);
		};
	}, [delay, value]);

	return [debouncedValue, updateImmediately];
}
