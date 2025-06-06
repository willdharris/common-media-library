import type { BoxParser } from '../BoxParser.ts';
import { avc1, type VisualSampleEntry } from './avc1.ts';

/**
 * Parse a VisualSampleEntryBox from an IsoView
 *
 * @param view - The IsoView to read data from
 *
 * @returns A parsed VisualSampleEntryBox
 *
 * @group ISOBMFF
 *
 * @beta
 */
export const avc4: BoxParser<VisualSampleEntry> = avc1;
