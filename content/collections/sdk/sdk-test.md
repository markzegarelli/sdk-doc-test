---
id: 3d5fc9be-f21c-4c09-ac85-4e099889d817
blueprint: sdk
title: 'SDK test'
method:
  -
    id: ln0tix8m
    name: 'Track default events'
    description: |-
      Starting version 1.9.1, Browser SDK now tracks default events. Browser SDK can be configured to track the following events automatically:

      - Attribution
      - Page views
      - Sessions
      - Form interactions
      - File downloads
    options:
      -
        cells:
          - test
          - 'Enables/disables marketing attribution tracking. If value is true, Amplitude tracks marketing attribution events otherwise marketing attribution tracking is disabled. Default value is true.'
    example:
      code: |-
        amplitude.init(AMPLITUDE_API_KEY, {
          defaultTracking: {
            attribution: false,
            pageViews: false,
            sessions: false,
            formInteractions: false,
            fileDownloads: false,
          },
        });
      mode: javascript
    type: new_set
    enabled: true
updated_by: 692fa3b2-66d3-4b58-be3e-1f198b4b8316
updated_at: 1695766929
entries_field:
  - ac06c104-6d27-4609-9172-00b602c78784
---
