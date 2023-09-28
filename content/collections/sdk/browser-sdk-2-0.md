---
id: 2d765d6b-85e3-46dd-ad08-bbf1a47d118c
blueprint: sdk
title: 'Browser SDK 2.0'
sdk_description: |-
  This page is serves as a POC for what future documentation Amplitude's SDKs may look like. It is not meant for public use, as content may be out of date.


  The main goal is to strip the existing SDK Doc format down to a bare minimum, and add back what is necessary and most helpful to users.
updated_by: 3ab3cd91-c441-4bb7-a34a-74c0c19c7979
updated_at: 1695941038
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
    name: 'Default tracking'
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
    name: 'Default tracking: Marketing attribution'
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
    name: 'Default tracking: Page views'
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
  -
    id: ln3gixjn
    name: 'Default tracking: Sessions'
    is_method: false
    sidebar_title: 'Track sessions'
    description: 'Amplitude defines a session as the period of time a user has your website open. When a session begins, Amplitude tracks the session start event: `[Amplitude] Start Session`. When that session ends, Amplitude tracks it with the `[Amplitude] End Session` event.'
    example:
      code: |-
        // Opt out of session tracking
        amplitude.init(AMPLITUDE_API_KEY, {
          defaultTracking: {
            sessions: false,
          },
        });
      mode: javascript
    type: method
    enabled: true
  -
    id: ln3gn3t9
    name: 'Default tracking: Form interactions'
    is_method: false
    sidebar_title: 'Track form interactions'
    description: |-
      Amplitude tracks form interactions when a user interacts with any `<form>` element on your site. 
      ```html
      <form id="subscriber-form" name="subscriber-form" action="/subscribe">
        <input type="text" />
        <input type="submit" />
      </form>
      ```


      The initial interaction can be the first change to a text input, radio button, or dropdown. Amplitude tracks this with the `[Amplitude] Form Started` event.

      Amplitude sends an `[Amplitude] Form Submitted` event when the user submits the form.
    example:
      code: |-
        // Disable form tracking
        amplitude.init(AMPLITUDE_API_KEY, {
          defaultTracking: {
            formInteractions: false,
          },
        });
      mode: javascript
    type: method
    enabled: true
  -
    id: ln3groff
    name: 'Default tracking: File downloads'
    is_method: false
    sidebar_title: 'Track file downloads'
    description: |-
      Amplitude tracks file downloads on your site when a user clicks an anchor or `<a>` tag that links to a file as `[Amplitude] File Downloaded`.

      Amplitude uses the following regular expression to determine if a link points to a file:
      `pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pp(s|t|tx)|7z|pkg|rar|gz|zip|avi|mov|mp4|mpe?g|wmv|midi?|mp3|wav|wma`
    example:
      code: |-
        // Disable file download tracking
        amplitude.init(AMPLITUDE_API_KEY, {
          defaultTracking: {
            fileDownloads: false,
          },
        });
      mode: javascript
    type: method
    enabled: true
  -
    id: ln3hh1n0
    name: amplitude.track(event)
    is_method: true
    sidebar_title: 'Track a custom event'
    description: |-
      You can track any other event or interaction on your site with the Track function.

      For example, you can track a `Button Clicked` event when a user clicks a specific button.

      You can also pass a BaseEvent object to the track function. For more information, see the [BaseEvent](https://amplitude.github.io/Amplitude-TypeScript/interfaces/_amplitude_analytics_browser.Types.BaseEvent.html) interface documentation.
    example:
      code: |-
        // Track a basic event
        amplitude.track('Button Clicked');

        // Track events with optional properties
        const eventProperties = {
          buttonColor: 'primary',
        };
        amplitude.track('Button Clicked', eventProperties);

        // Track an event with a BaseEvent object
        // Define the event's properites
        const event_properties = {
          buttonColor: 'primary',
        };

        // Build the BaseEvent interface
        const event = {
          event_type: "Button Clicked", 
          event_properties,
        };

        amplitude.track(event);
      mode: javascript
    type: method
    enabled: true
  -
    id: ln3hm6io
    name: Identify()
    is_method: true
    sidebar_title: 'Identify users'
    description: |-
      Use the Identify object to identify users and set user properties to enrich the information you gather about your users.

      If the Identify call is sent after the event, the results of operations are visible immediately in the dashboard user’s profile area. However, they don't appear in chart results until another event is sent after the Identify call. The identify call only affects events going forward.

      If you send the Identify call after you send an event, the results of that call are immediately visible in user profiles in Amplitude, but don't appear in charts until you send another event after the Identify call.
    example:
      code: |-
        // Instantiate an Identify object
        const identifyEvent = new amplitude.Identify();

        // Send the object to Amplitude
        amplitude.identify(identifyEvent);
      mode: javascript
    type: method
    enabled: true
  -
    id: ln3hueyp
    name: "Identify.set('property', 'value')"
    is_method: true
    sidebar_title: 'Set a user property'
    description: "Use `Identify.set()` to set the value of a user property. For example, you can set a user's location."
    example:
      code: |-
        const identifyEvent = new amplitude.Identify();
        identifyEvent.set('location', 'LAX');

        amplitude.identify(identifyEvent);
      mode: javascript
    type: method
    enabled: true
  -
    id: ln3ncp2z
    name: 'setGroup(groupType, groupName)'
    is_method: true
    sidebar_title: 'Group users'
    description: |-
      You can group your users based on criteria that you define, and query those groups in Amplitude. If at least one member of a group performs the specified event, the count returned by your query includes that group.

      When you define a group, you specify a `type` and a `name`. For example:
      | Type    | Name    |
      | --- | --- |
      | `orgId`    | `15`     |
      | `sport` | `soccer` |

      Setting a group also sets `groupType:groupName` as a user property in Amplitude, and overwrites any existing group of the same type for that user.

      You can pass an event object with groups to a Track call to set an event-level group. Event-level groups the group designation applies only to the specific logged event, and doesn't persist for the user unless you set it with `setGroup()
    options:
      -
        id: ln3nu2en
        option_name: groupType
        option_type: string
        option_description: 'The category by which you group users. For example, Joe and Sue both have an `orgId`.'
        type: option
        enabled: true
      -
        id: ln3nvw55
        option_name: groupName
        option_type: 'string | array[strings]'
        option_description: 'The group to which an individual user belongs. For example, Joe belongs to OrgId `15` and Sue belongs to OrgId `10`.'
        type: option
        enabled: true
    example:
      code: |-
        // set group with a single group name
        amplitude.setGroup('orgId', '15');

        // set group with multiple group names
        amplitude.setGroup('sport', ['soccer', 'tennis']);

        // Create an event-level group
        amplitude.track({
          event_type: 'event type',
          event_properties: { eventPropertyKey: 'event property value' },
          groups: { 'orgId': '15' }
        })
      mode: javascript
    type: method
    enabled: true
    table-type: Parameters
---
