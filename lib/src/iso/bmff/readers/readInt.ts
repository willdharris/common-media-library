export function readInt(dataView: DataView, offset: number, size: number): number {
	let result = NaN;
	const cursor = offset - dataView.byteOffset;

	switch (size) {
		case 1:
			result = dataView.getInt8(cursor);
			break;

		case 2:
			result = dataView.getInt16(cursor);
			break;

		case 4:
			result = dataView.getInt32(cursor);
			break;

		case 8:
			// Warning: JavaScript cannot handle 64-bit integers natively.
			// This will give unexpected results for integers >= 2^53
			const s1 = dataView.getInt32(cursor);
			const s2 = dataView.getInt32(cursor + 4);
			result = (s1 * Math.pow(2, 32)) + s2;
			break;
	}

	return result;
};
