import type { FullBox } from '../FullBox.ts';
import type { IsoView } from '../IsoView.ts';

/**
 * ISO/IEC 14496-12:2012 - 8.8.12 Track Fragment Decode Time
 *
 * @group ISOBMFF
 *
 * @beta
 */
export type TrackFragmentDecodeTimeBox = FullBox & {
	baseMediaDecodeTime: number;
};

/**
 * Parse a TrackFragmentDecodeTimeBox from an IsoView
 *
 * @param view - The IsoView to read data from
 *
 * @returns A parsed TrackFragmentDecodeTimeBox
 *
 * @group ISOBMFF
 *
 * @beta
 */
export function tfdt(view: IsoView): TrackFragmentDecodeTimeBox {
	const { version, flags } = view.readFullBox();

	return {
		version,
		flags,
		baseMediaDecodeTime: view.readUint((version == 1) ? 8 : 4),
	};
};
