---
id: 2d765d6b-85e3-46dd-ad08-bbf1a47d118c
blueprint: sdk
title: 'Browser SDK 2.0'
sdk_description: |-
  This page is serves as a POC for what future documentation Amplitude's SDKs may look like. It is not meant for public use, as content may be out of date.


  The main goal is to strip the existing SDK Doc format down to a bare minimum, and add back what is necessary and most helpful to users.
updated_by: 692fa3b2-66d3-4b58-be3e-1f198b4b8316
updated_at: 1695917870
method:
  -
    id: ln29nht4
    name: 'init(AMPLITUDE_API_KEY, USER_ID?, options?)'
    description: 'Before you begin, initialize the SDK with your Amplitude API Key, and any options you want to enable.'
    options:
      -
        id: ln29pysh
        option_name: instanceName
        option_type: string
        option_default: $default_instance
        option_description: 'The name of this instance of the Amplitude Browser SDK.'
        type: option
        enabled: true
      -
        id: ln29qq3u
        option_name: flushIntervalMillis
        option_type: number
        option_default: '1000'
        option_description: 'Sets the interval at which the SDK uploads events to Amplitude, in milliseconds.'
        type: option
        enabled: true
      -
        id: ln29rrb9
        option_name: flushQueueSize
        option_type: number
        option_default: '30'
        option_description: 'The maximum size of a batch of events in a single upload attempt.'
        type: option
        enabled: true
      -
        id: ln29svnc
        option_name: flushMaxRetries
        option_type: number
        option_default: '5'
        option_description: 'The maximum number of retires for failed upload attempts. Applies to retryable errors only.'
        type: option
        enabled: true
      -
        id: ln2aasms
        option_name: logLevel
        option_type: 'None | Error | Warn | Verbose | Debug'
        option_default: Warn
        option_description: 'Sets the log level.'
        type: option
        enabled: true
      -
        id: ln2adw6n
        option_name: loggerProvider
        option_type: Logger
        option_default: 'Amplitude Logger'
        option_description: 'Sets the custom `loggerProvider` class from the Logger to emit log messages to the desired location.'
        type: option
        enabled: true
      -
        id: ln2aeznz
        option_name: minIdLength
        option_type: number
        option_default: '5'
        option_description: 'Sets the minimum length for the value of `user_id` and `device_id`.'
        type: option
        enabled: true
      -
        id: ln2ag10j
        option_name: optOut
        option_type: boolean
        option_default: 'false'
        option_description: 'Sets permission to track events. A value of `true` prevents Amplitude from tracking and uploading events.'
        type: option
        enabled: true
      -
        id: ln2agtdu
        option_name: serverUrl
        option_type: string
        option_default: 'https://api2.amplitude.com/2/httpapi'
        option_description: 'The URL to which the SDK uploads events.'
        type: option
        enabled: true
      -
        id: ln2ahsco
        option_name: serverZone
        option_type: 'EU | US'
        option_default: US
        option_description: 'The Amplitude server zone. Use `EU` if your Amplitude project is created in the EU data center.'
        type: option
        enabled: true
      -
        id: ln2aj84n
        option_name: transportProvider
        option_type: Transport
        option_default: FetchTransport
        option_description: 'A custom implementation of `Transport` to use a different request API.'
        type: option
        enabled: true
      -
        id: ln2ajvyl
        option_name: useBatch
        option_type: boolean
        option_default: 'false'
        option_description: 'A value of `true` sends events with the Batch API rather than the default HTTP V2 API.'
        type: option
        enabled: true
    example:
      code: |-
        // Option 1, initialize with Amplitude API key only
        amplitude.init(AMPLITUDE_API_KEY);

        // Option 2, initialize with options
        amplitude.init(AMPLITUDE_API_KEY, options);

        // Option 3, initialize with user ID if it's already known
        amplitude.init(AMPLITUDE_API_KEY, 'user@amplitude.com');

        // Option 4, initialize with a user ID and options
        amplitude.init(AMPLITUDE_API_KEY, 'user@amplitude.com', options);
      mode: javascript
    type: method
    enabled: true
    sidebar_title: 'Initialize the SDK'
    is_method: true
  -
    id: ln2atlg1
    name: createInstance()
    sidebar_title: 'Track events to multiple projects'
    description: |-
      If you have multiple Amplitude projects to which you need to send events, create a separate instance for each Amplitude project. Then, pass those instance variables to each place you call Amplitude.

      Each instance allows for separate `apiKey`, `userId`, `deviceId`, and `settings` values.
    example:
      code: |-
        const defaultInstance = amplitude.createInstance();
        defaultInstance.init(API_KEY_DEFAULT);

        const envInstance = amplitude.createInstance();
        envInstance.init(API_KEY_ENV, {
          instanceName: 'env',
        });
      mode: javascript
    type: method
    enabled: true
    is_method: true
  -
    id: ln2dwz9z
    name: 'Default Tracking'
    is_method: false
    sidebar_title: 'Track default events'
    description: |-
      Starting version 1.9.1, Browser SDK now tracks default events. Browser SDK can be configured to track the following events automatically:

      - Attribution
      - Page views
      - Sessions
      - Form interactions
      - File downloads
    example:
      code: |-
        //Disable defaults individually
        amplitude.init(AMPLITUDE_API_KEY, {
          defaultTracking: {
            attribution: false,
            pageViews: false,
            sessions: false,
            formInteractions: false,
            fileDownloads: false,
          },
        });

        //Disable all current and future defaults
        amplitude.init(AMPLITUDE_API_KEY, {
          defaultTracking: false,
        });
      mode: javascript
    type: method
    enabled: true
  -
    id: ln2e6k9v
    name: 'Track marketing attribution'
    is_method: false
    sidebar_title: 'Track marketing attribution'
    description: 'Amplitude tracks UTM, referrers, and click IDs as part of marketing attribution tracking.'
    options:
      -
        id: ln2e8dvb
        option_name: .attribution.excludeReferrers
        option_type: Array
        option_description: |-
          The rules which determine which referrers which referrers Amplitude excludes from tracking as a traffic source. Use string values for exact matching and regular expressions for pattern matching against a referring domain.

          By default, Amplitude excludes the current domain and all subdomains.
        type: option
        enabled: true
      -
        id: ln2ebju6
        option_name: .attribution.initialEmptyValue
        option_type: string
        option_default: EMPTY
        option_description: 'The value that represents the undefined / no initial campaign parameter for first-touch attribution.'
        type: option
        enabled: true
      -
        id: ln2edak6
        option_name: .attribution.resetSessionOnNewCampaign
        option_type: boolean
        option_default: 'false'
        option_description: 'Configures Amplitude to start a new session if any campaign parameter changes.'
        type: option
        enabled: true
    example:
      code: |-
        //Disable attribution tracking
        amplitude.init(AMPLITUDE_API_KEY, {
          defaultTracking: {
            attribution: false,
          },
        });

        // Track attribution separately for each subdomain
        amplitude.init(AMPLITUDE_API_KEY, {
          defaultTracking: {
            attribution: {
              excludeReferrers: [location.hostname],
            },
          },
        });
      mode: javascript
    type: method
    enabled: true
  -
    id: ln2egemu
    name: 'Track page views'
    is_method: false
    sidebar_title: 'Track page views'
    description: 'Amplitude tracks page view events by default when the browser initializes the SDK. Page view events appear in Amplitude as `[Amplitude] Page Viewed`.'
    options:
      -
        id: ln2ejm1z
        option_name: .pageviews.trackOn
        option_type: 'attribution | () => boolean'
        option_description: |-
          Provides advanced control on when page view events are tracked.

          Omit or set the value to `undefined`, and configure page view events to be tracked on initialization.

          Set the value to `attribution` and configure page view events to be tracked only when web attribution is tracked.

          Set the value to a function that returns a boolean (`true` or `false`) and configure page view events to be tracked based on your criteria.
        type: option
        enabled: true
      -
        id: ln2elm2o
        option_name: .pageviews.trackHistoryChanges
        option_type: 'pathOnly | all'
        option_description: |-
          Provides advanced control for single page application on when page views are tracked.

          You can omit or set the value to `all`, and configure page view events to be tracked on any navigation change to the URL within your single page application. For example: navigating from `https://amplitude.com/#company` to `https://amplitude.com/#blog`.

          Set the value to `pathOnly`, and configure page view events to be tracked on navigation change to the URL path only within your single page application. For example: navigating from `https://amplitude.com/company` to `https://amplitude.com/blog`.
        type: option
        enabled: true
      -
        id: ln2emwre
        option_name: .pageviews.eventType
        option_type: string
        option_description: 'Customize the event type of the page view event.'
        type: option
        enabled: true
    example:
      code: |-
        //Track a page view only when the URL path includes 'home'
        amplitude.init(API_KEY, {
          defaultTracking: {
            pageViews: {
              trackOn: () => {
                return window.location.pathname.includes('home');
              },
            },
          },
        });
      mode: javascript
    type: method
    enabled: true
---
