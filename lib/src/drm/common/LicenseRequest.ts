/**
 * Represents a DRM license request.
 *
 * Contains all data needed to make a license acquisition request
 * to a DRM license server.
 *
 * @group DRM
 *
 * @beta
 */
export type LicenseRequest = {
	/**
	* License server URL.
	*/
	url: string;

	/**
	* HTTP method
	*/
	method: 'GET' | 'POST';

	/**
	* The HTTP response type
	*/
	responseType: XMLHttpRequestResponseType;

	/**
	* The HTP request headers
	*/
	headers?: Record<string, string>;

	/**
	* Whether request is done using credentials (cross-site cookies)
	*/
	withCredentials?: boolean;

	/**
	* The license request message type
	* (see https://www.w3.org/TR/encrypted-media/#dom-mediakeymessagetype)
	*/
	messageType?: MediaKeyMessageType;

	/**
	* The corresponding EME session ID
	*/
	sessionId?: string;

	/**
	* The license request data
	*/
	data?: ArrayBuffer;
};

