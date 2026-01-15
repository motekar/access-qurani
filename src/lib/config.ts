export interface AudioConfig {
	baseUrl: string;
	reciter: string;
	sources: {
		primary: string;
		fallback?: string;
	};
}

export const audioConfig: AudioConfig = {
	baseUrl: 'https://tanzil.net/res/audio',
	reciter: 'afasy',
	sources: {
		primary: 'https://tanzil.net/res/audio/afasy',
		fallback: 'https://everyayah.com/data/Maher_AlMuaiqly_64kbps'
	}
};

export const appConfig = {
	name: 'Qurani Player'
};
