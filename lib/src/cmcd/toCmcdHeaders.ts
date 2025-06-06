import type { Cmcd } from './Cmcd.ts';
import type { CmcdEncodeOptions } from './CmcdEncodeOptions.ts';
import { CmcdHeaderField } from './CmcdHeaderField.ts';
import { CmcdHeaderMap } from './CmcdHeaderMap.ts';
import type { CmcdKey } from './CmcdKey.ts';
import { encodeCmcd } from './encodeCmcd.ts';

/**
 * Convert a CMCD data object to request headers
 *
 * @param cmcd - The CMCD data object to convert.
 * @param options - Options for encoding the CMCD object.
 *
 * @returns The CMCD header shards.
 *
 * @group CMCD
 *
 * @beta
 */
export function toCmcdHeaders(cmcd: Cmcd, options: CmcdEncodeOptions = {}): Record<CmcdHeaderField, string> {
	const result = {} as Record<CmcdHeaderField, string>;

	if (!cmcd) {
		return result;
	}

	const entries = Object.entries(cmcd);
	const headerMap = Object.entries(CmcdHeaderMap)
		.concat(Object.entries(options?.customHeaderMap || {}));
	const shards = entries.reduce((acc, entry) => {
		const [key, value] = entry as [CmcdKey, Cmcd[CmcdKey]];
		const field = headerMap.find(entry => entry[1].includes(key))?.[0] as CmcdHeaderField || CmcdHeaderField.REQUEST;
		acc[field] ??= {};
		acc[field][key as any] = value as any;
		return acc;
	}, {} as Record<CmcdHeaderField, Cmcd>);

	return Object.entries(shards)
		.reduce((acc, [field, value]) => {
			acc[field as CmcdHeaderField] = encodeCmcd(value, options);
			return acc;
		}, result);
}
