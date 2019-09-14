import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './google-storage.datasource.json';

const newConfig = {
	...config,
	type: process.env.GOOGLE_STORAGE_TYPE,
	project_id: process.env.GOOGLE_STORAGE_PROJECT_ID,
	private_key_id: process.env.GOOGLE_STORAGE_PRIVATE_KEY_ID,
	private_key: process.env.GOOGLE_STORAGE_PRIVATE_KEY,
	client_email: process.env.GOOGLE_STORAGE_CLIENT_EMAIL,
	client_id: process.env.GOOGLE_STORAGE_CLIENT_ID,
	auth_uri: process.env.GOOGLE_STORAGE_AUTH_URI,
	token_uri: process.env.GOOGLE_STORAGE_TOKEN_URI,
	auth_provider_x509_cert_url: process.env.GOOGLE_STORAGE_AUTH_PROVIDER_X509_CERT_URL,
	x509_cert_url: process.env.GOOGLE_STORAGE_X509_CERT_URL
};

export class GoogleStorageDataSource extends juggler.DataSource {
	static dataSourceName = 'GoogleStorage';

	constructor(
		@inject('datasources.newConfig.GoogleStorage', {
			optional: true,
		})
		dsConfig: object = newConfig,
	) {
		super(dsConfig);
	}
}