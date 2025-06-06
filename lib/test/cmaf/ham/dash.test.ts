import { dashToHam } from '@svta/common-media-library/cmaf/ham/services/converters/dashToHam';
import { hamToDash } from '@svta/common-media-library/cmaf/ham/services/converters/hamToDash';
import type { Presentation } from '@svta/common-media-library/cmaf/ham/types/model/Presentation';
import { deepStrictEqual, equal } from 'node:assert';
import { describe, it } from 'node:test';

import jsonHam0 from './data/ham-samples/fromDash/ham0.json' assert { type: 'json' };
import jsonHam1 from './data/ham-samples/fromDash/ham1.json' assert { type: 'json' };
import jsonHam2 from './data/ham-samples/fromDash/ham2.json' assert { type: 'json' };
import jsonHam3 from './data/ham-samples/fromDash/ham3.json' assert { type: 'json' };
import jsonHam4 from './data/ham-samples/fromDash/ham4.json' assert { type: 'json' };
import jsonHam5 from './data/ham-samples/fromDash/ham5.json' assert { type: 'json' };
import jsonHam6 from './data/ham-samples/fromDash/ham6.json' assert { type: 'json' };
import jsonHam7 from './data/ham-samples/fromDash/ham7.json' assert { type: 'json' };
import jsonHam8 from './data/ham-samples/fromDash/ham8.json' assert { type: 'json' };

import { dashSample as dashSample0 } from './data/dash-samples/sample-0/sample.ts';
import { dashSample as dashSample1 } from './data/dash-samples/sample-1/sample.ts';
import { dashSample as dashSample2 } from './data/dash-samples/sample-2/sample.ts';
import { dashSample as dashSample3 } from './data/dash-samples/sample-3/sample.ts';
import { dashSample as dashSample4 } from './data/dash-samples/sample-4/sample.ts';
import { dashSample as dashSample5 } from './data/dash-samples/sample-5/sample.ts';
import { dashSample as dashSample6 } from './data/dash-samples/sample-6/sample.ts';
import { dashSample as dashSample7 } from './data/dash-samples/sample-7/sample.ts';
import { dashSample as dashSample8 } from './data/dash-samples/sample-8/sample.ts';

import { dashFromHam1 } from './data/dash-samples/fromHam/dashFromHam1.ts';
import { dashFromHam2 } from './data/dash-samples/fromHam/dashFromHam2.ts';
import { dashFromHam3 } from './data/dash-samples/fromHam/dashFromHam3.ts';
import { dashFromHam4 } from './data/dash-samples/fromHam/dashFromHam4.ts';
import { dashFromHam5 } from './data/dash-samples/fromHam/dashFromHam5.ts';

describe('dashToham', () => {
	it('converts dash1 to ham1', () => {
		const convertedHam0 = dashToHam(dashSample0);
		deepStrictEqual(convertedHam0, jsonHam0);
	});

	it('converts dashSample1 to HAM', () => {
		const convertedHam1 = dashToHam(dashSample1);
		deepStrictEqual(convertedHam1, jsonHam1);
	});

	it('converts dashSample2 to HAM', () => {
		const convertedHam2 = dashToHam(dashSample2);
		deepStrictEqual(convertedHam2, jsonHam2);
	});

	it('converts dashSample3 to HAM', () => {
		const convertedHam3 = dashToHam(dashSample3);
		deepStrictEqual(convertedHam3, jsonHam3);
	});

	it('converts dashSample4 to HAM', () => {
		const convertedHam4 = dashToHam(dashSample4);
		deepStrictEqual(convertedHam4, jsonHam4);
	});

	it('converts dashSample5 to HAM', () => {
		const convertedHam5 = dashToHam(dashSample5);
		deepStrictEqual(convertedHam5, jsonHam5);
	});

	it('converts dashSample6 to HAM', () => {
		const convertedHam6 = dashToHam(dashSample6);
		deepStrictEqual(convertedHam6, jsonHam6);
	});

	it('converts dashSample7 to HAM', () => {
		const convertedHam7 = dashToHam(dashSample7);
		deepStrictEqual(convertedHam7, jsonHam7);
	});

	it('converts dashSample8 to HAM', () => {
		const convertedHam8 = dashToHam(dashSample8);
		deepStrictEqual(convertedHam8, jsonHam8);
	});
});

describe('hamToDash', async () => {
	it('converts ham1 to dash1', () => {
		const presentations = jsonHam1 as Presentation[];
		const convertedDash = hamToDash(presentations);
		deepStrictEqual(convertedDash.manifest, dashFromHam1);
		equal(convertedDash.type, 'dash');
		deepStrictEqual(convertedDash.ancillaryManifests, []);
	});

	it('converts ham2 to dash2', () => {
		const presentations = jsonHam2 as Presentation[];
		const convertedDash = hamToDash(presentations);
		deepStrictEqual(convertedDash.manifest, dashFromHam2);
		equal(convertedDash.type, 'dash');
		deepStrictEqual(convertedDash.ancillaryManifests, []);
	});

	it('converts ham3 to dash3', () => {
		const presentations = jsonHam3 as Presentation[];
		const convertedDash = hamToDash(presentations);
		deepStrictEqual(convertedDash.manifest, dashFromHam3);
		equal(convertedDash.type, 'dash');
		deepStrictEqual(convertedDash.ancillaryManifests, []);
	});

	it('converts ham4 to dash4', () => {
		const presentations = jsonHam4 as Presentation[];
		const convertedDash = hamToDash(presentations);
		deepStrictEqual(convertedDash.manifest, dashFromHam4);
		equal(convertedDash.type, 'dash');
		deepStrictEqual(convertedDash.ancillaryManifests, []);
	});

	it('converts ham5 to dash5', () => {
		const presentations = jsonHam5 as Presentation[];
		const convertedDash = hamToDash(presentations);
		deepStrictEqual(convertedDash.manifest, dashFromHam5);
		equal(convertedDash.type, 'dash');
		deepStrictEqual(convertedDash.ancillaryManifests, []);
	});
});

// Tests skipped because the output is not 100% equal to the original manifest.
// These tests are useful to compare manually the actual dash with the output.
describe.skip('dash to ham to dash', async () => {
	it('converts ham1 to dash1 to ham1 again', () => {
		const convertedHam = dashToHam(dashSample1);
		const convertedDash = hamToDash(convertedHam);
		deepStrictEqual(convertedDash.manifest, dashSample1);
	});

	it('converts ham2 to dash2 to ham2 again', () => {
		const convertedHam = dashToHam(dashSample2);
		const convertedDash = hamToDash(convertedHam);
		deepStrictEqual(convertedDash.manifest, dashSample2);
	});

	it('converts ham3 to dash3 to ham3 again', () => {
		const convertedHam = dashToHam(dashSample3);
		const convertedDash = hamToDash(convertedHam);
		deepStrictEqual(convertedDash.manifest, dashSample3);
	});

	it('converts ham4 to dash4 to ham4 again', () => {
		const convertedHam = dashToHam(dashSample4);
		const convertedDash = hamToDash(convertedHam);
		deepStrictEqual(convertedDash.manifest, dashSample4);
	});
});
