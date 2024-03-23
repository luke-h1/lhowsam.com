const healthOptions = {
  health: 'reqHealth',
} as const;

const versionOptions = {
  version: 'reqVersion',
} as const;

const nowPlayingOptions = {
  nowPlaying: 'reqNowPlaying',
} as const;

export type HealthRequestOptions = keyof typeof healthOptions;
export type VersionRequestOptions = keyof typeof versionOptions;
export type NowPlayingRequestOptions = keyof typeof nowPlayingOptions;

interface ErrorOptions {
  message: string;
  action?:
    | HealthRequestOptions
    | VersionRequestOptions
    | NowPlayingRequestOptions;
  debug?: string;
  code?: string;
  httpResponseCode?: number;
  body?: string;
}

export default class LambdaError extends Error {
  constructor(options: ErrorOptions) {
    super(options.message);
    this.action = options.action ?? undefined;
    this.debug = options.debug;
    this.code = options.code;
    this.httpResponseCode = options.httpResponseCode;
    this.body = options.body;

    // to make instanceof work
    Object.setPrototypeOf(this, LambdaError.prototype);
  }

  message: string;

  action?:
    | HealthRequestOptions
    | VersionRequestOptions
    | NowPlayingRequestOptions;

  debug?: string;

  code?: string;

  httpResponseCode?: number;

  body?: string;
}
