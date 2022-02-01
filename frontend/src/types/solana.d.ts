declare module global {
    interface Window { 
		solana: any; 
	}
}

declare module 'typeof globalThis' {
	interface globalThis {
		solana: any;
	}
}