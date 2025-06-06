import type { Period } from '../../../../types/mapper/dash/Period.ts';

/**
 * @internal
 *
 * Generates a presentation id. It uses the period id as default or creates one
 * if none is present.
 *
 * @param period - Period to try to get the id from
 * @param duration - Duration of the content
 * @returns Presentation id
 */
export function getPresentationId(period: Period, duration: number): string {
	return period.$.id ?? `presentation-id-${duration}`;
}
