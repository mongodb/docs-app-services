# December 16, 2022

## Device Sync
- App Builder's Resources: New section with new and moved pages
  - Flexible Sync Permissions Guide: Existing content moved from the "Configure Device Sync" section
  - Sync Atlas Data with Client: New page showing how to sync data that already exists in Atlas with a client app
  - Sync Client Data with Atlas: New page showing how to sync data in a client application with Atlas
  - Stream Data from Client to Atlas: New page showing how to use asymmetric sync to sync data unidirectionally from a client app to Atlas
  - Add Sync to a Local-Only App: Existing content moved from the top-level Device Sync navigation into this section

## Data API
- Custom HTTPS Endpoints: Add an end-to-end example for a custom HTTPS endpoint function

## Functions
- Landing Page: Update Atlas Function max timeout in "Constraints" section from 150 seconds to 180 seconds

## App Services Admin API
- Document new GET/PUT endpoints to get or set the user refresh token expiration time


# December 9, 2022

## Device Sync
- Configure and Update Your Data Model
  - Create a Data Model: Update a link to the React Native SDK
  - Update a Data Model: Add a link to the Swift SDK's new remap a property name feature
  - Data Model Mapping: Update a link to the React Native SDK
- Handle Errors/Sync Errors: Add links to the Flutter and Kotlin SDK pages for handling Sync errors

## Functions
- Landing page: Add a link to the Flutter SDK, update SDK names

## Triggers
- Send Trigger Events to AWS EventBridge: Add information about enabling the Extended JSON (EJSON) format

## Users & Authentication
- Delete or Prevent Users from Accessing an App: Add tabs for Flutter, Kotlin, and the Web SDK, update SDK names

## Realm CLI
- Landing page: Typo fix

## App Services Admin API
- Update the `AWS_EVENTBRIDGE` object's `extended_json_enabled` field to show that it defaults to `false`
- Metrics: Update the description & provide an example response for the `GET` metrics endpoint

## Reference
- Metrics Reference: New page with detailed information about metric format, units, and available metrics

## Other
- Landing page: Fix an incorrect Realm SDK naming reference

# December 2, 2022

## Manage & Deploy Apps
- Create
  - Realm CLI: Remove outdated Template App table, and link out to the Template App page for the list of current app templates
  - App Services API: Remove outdated Template App table, and link out to the Template App page for the list of current app templates
- Deploy
  - Deployment Models & Regions: 
    - Cloud Deployment Regions: Add more details about global vs. local deployment region availability, deployment proximity, link to deployment model
    - Add new deployment region: `aws-us-east-2` (Ohio)
- Secure: Network Security/Firewall Configuration: Add new IP addresses for `aws-us-east-2` to AWS outbound requests list

## Reference
- Template Apps: Add Flexible Sync Rules guides to table of available app templates, update descriptions, alphabetize list
- Service Limitations: Remove "Maximum Number of Concurrent Listening Clients" and information about `watch()` limits from the Change Stream Limitations section

## App Services Admin API
- Applications: 
  - Update description of `provider_region` and the `CloudProviderRegion` `id` with more details and link to Cloud Deployment Regions page
  - Add `aws-us-east-2` to the list of valid AWS deployment regions
- Data API & Endpoints: Add details and example of creating a base URL for Data API endpoints & custom HTPPS endpoints
- Unify credential support across the APIs by changing `-H 'api-key: <API Key>'` to `-H 'apiKey: <API Key>'`

# November 25, 2022

## Get Started
- Update Device Sync tutorials with prerequisites related to having an Atlas account, API key, and realm-cli

## Device Sync
- Streamline the Device Sync docs section, including:
  - Sync Settings: New page that details all the settings available in Sync.
  - Alter Your Sync Configuration: Remove page, merging relevant caveats into "Settings" and "Permissions" pages
  - Optimize Sync Atlas Usage: Move into the "Go to Production" section
  - Compact an Atlas Volume: Move into the "Go to Production" section
  - Various rewrites, touch-ups, and technical clarifications, with an emphasis on Flexible Sync usage
- Get Started: Add back a "Create Queries in Your Client Application" section that was removed in a recent refactoring

## Rules
- Expressions: Update json expansions to list the expansion first, fixing a broken closing parenthesis

## Other
- App Services Admin API
  - List pending user registrations
  - Update the auth provider endpoints to have full details for each provider type
- Add a Redocly OpenAPI lint config to turn off a couple of rules emitting warnings
- Add redirects for some moved pages to fix broken links
- Internal: update many pages to remove source constants, replace them with the product name

# November 18, 2022

## Manage & Deploy Apps
- Deploy/Deployment Models & Regions: Add São Paulo to the table of deployment regions
- Secure: Add São Paulo IP addresses to the "AWS Outbound IP Addresses" list

## Device Sync
- Configure and Update Your Data Model/Data Model Mapping: Add details about `Array`, `EmbeddedObject`, `Set`, and `Dictionaries`, as well as relationships, with links out to relevant documentation

## Users & Authentication
- Authentication Providers: Where pages show an authentication provider configuration, add a note that `name` is the same as its `type`

## Static Hosting
- File Metadata Attributes: Add `Website-Redirect-Location` to metadata info

## Other
- App Services Admin API
  - Applications: Add documentation for product types in the GET all Apps endpoint
  - Authentication Providers: where endpoints show an authentication provider configuration, add a note that `name` is the same as its `type`
  - Deployment: Add documentation for GET and PATCH deployment configuration
  - Environments: Add documentation for Set Environment & Environment Values endpoints
  - Add the São Paulo region ID to the list of available AWS deployment regions
- Release Notes: Add release notes for new São Paulo region, updates to the Admin API endpoint to fetch Atlas Triggers and Atlas Data API apps

# November 11, 2022

## Manage & Deploy Apps
- Configure/App Configuration Reference/Atlas Device Sync: Clarify that if a user has write permission, they also have read permission, regardless of the value of a `read` field or expression.
- Deploy/Deployment Models & Regions: Add `Region` column to Cloud Deployment Regions reference table

## Device Sync
- Configure and Update Your Data Model: Refactor section to improve clarity about schema/data modeling
  - Refactor Data Model Overview to be higher level 
  - Change "Schema" to "Data Model" in navigation
  - Refer to "App Services Schema" instead of "Device Sync Schema"
  - Add a new "Data Model Mapping" page describing how Realm Objects map to the App Services Schema
- Configure Sync/Compact an Atlas Volume: New page with an overview and steps to compact an Atlas volume
- Handle Errors/Client Reset: Add a new tab with a link to the Flutter SDK client reset docs
- Throughout section: De-emphasize Partition-Based Sync. Where both apply, for example in configuration, present Flexible Sync first. Where possible, move Partition-Based Sync docs to a new Partition-Based Sync Mode page in the Reference section.

## Data API
- Data API Endpoints: Add `<Cloud>` to endpoint base URL example

## Triggers
- Disable a Trigger: New "Restoring from a Snapshot" section

## Users & Authentication
- Authentication Providers/API Key Authentication: Add more details about User vs. Server API keys

## Reference
- Template Apps: Remove note about how to get outdated UIKit template app; it only supports Partition-Based Sync and is not compatible with the Flexible Sync backend

## Other
- Admin API
  - Data API
    - Fix broken link to configuration reference docs
    - Add `validation_method` details to endpoints
  - GraphQL API: Fix broken link to configuration reference docs
  - Endpoints: Add `function_id` to config object details in create endpoint

# November 4, 2022

## Get Started
- Device Sync Tutorial/Flutter: Remove the step instructing users to delete app data; no longer needed after template app updates
- Triggers, Functions & Values Tutorial: Update the GitHub Issue Tracker tutorial to fix bugs, clarify wording, add info in places

## Device Sync
- Define Data Access Patterns/Flexible Sync Permissions Guide: Update permissions template names

## Triggers
- Triggers Code Examples: New link in the Table of Contents going to the Triggers examples GitHub repository
- Various pages: Link to the Triggers examples GitHub repository where relevant throughout section

## Users & Authentication
- Various pages: Add Flutter SDK to SDK tabs on authentication provider pages

## Reference
- Template Apps: Update template app descriptions in the table of available templates

## Other
- Admin API: Add new endpoint to retrieve App Services metrics
- New [atlas-app-services-examples GitHub repository in the MongoDB org](https://github.com/mongodb/atlas-app-services-examples/tree/main/triggers-examples) containing Triggers & Functions use cases and code examples, including integration tests

# October 28, 2022

## Get Started/Tutorials
- Change "Tutorials" to "Get Started" in the left navigation
- Create a "Get Started" landing page with information about template apps and cards for tutorials
- Move client tutorials from Realm docs to this section
- Device Sync Tutorial - Flutter: Incorporate feedback from a Google Developer Advocate's review

## Device Sync
- Landing Page: Create new Device Sync landing page, and apply small tweaks
- Get Started: Remove unnecessary text from "Overview" page, rename it to "Get Started"
- Define Data Access Patterns/Sync Rules and Permissions: Add `%stringToOid` to supported expansions
- Go to Production: New section 
  - Production Load Testing: Existing page moved from the top-level navigation within the Sync section
  - Production Checklist: New page containing the "Best Practices" from the old "Overview" page
- Technical Details: New section containing the Sync Protocol & Conflict Resolution pages moved from "Learn" section
- Remove the "Learn" section

## Users & Authentication
- Authentication Providers/Custom JWT Authentication: Move former "JWT Tutorial" to a new "Walkthrough" section on this page

## MongoDB Data Sources
- CRUD & Aggregation APIs: Remove `arrayFilters` from unsupported options

## Reference
- Billing
  - Clarify free tier billing description
  - Add new "Free tier thresholds" subsection to improve information discoverability
  - Remove bold text after links to address styling bug

## Other
- Admin API: Add details for Trigger event processors
- Various: Update note about third-party service deprecation to reflect new date of **1 Aug 2023**

# October 21, 2022

## Manage & Deploy Apps
- Configure/App Configuration Reference/Triggers: Add the `tolerate_resume_errors` bool to the config documentation

## Device Sync
- What is Atlas Device Sync/Atlas Device Sync Overview: Update prerequisites to add details about MongoDB version required for Flexible Sync
- Configure Sync/Enable Atlas Device Sync: Remove unnecessary screenshots, remove steps from Asymmetric Sync details

## Functions
- Context: Add `context.app` to Function context, new "Get App Metadata" section with details

## Triggers
- Database Triggers: Add details about automatically resuming a suspended trigger

## MongoDB Data Sources
- Wire Protocol: Update Wire Protocol URLs to match new pattern

## Other
- Admin API: Add `tolerate_resume_errors` to trigger properties
- Release Notes: Add release notes for October 20, 2022 release

# October 14, 2022

## Functions
- JavaScript Support: Added BigInt to list of supported JS objects and alphabetized list of objects
- Query MongoDB Atlas, Aggregate Data
  - Find Data with Atlas Search: Made note about limitations to the $$SEARCH_META aggregation variable and under what conditions the variable is available for use
- Functions, Constraints: Raised request timeout from 120s to 150s

## MongoDB Data Sources
- CRUD & Aggregation APIs: Made note about limitations to the $$SEARCH_META aggregation variable and under what conditions the variable is available for use

## Manage & Deploy Apps
- Deployment Models & Regions: Removed Ohio and Sao Paulo from local regions list
- Secure, Firewall Configuration: Added AWS, Azure, and GCP IP addresses to firewall configuration

## Admin API
- Applications: Removed Ohio and Sao Paulo from local regions list

# October 7, 2022

## Manage & Deploy Apps
- Configure/App Configuration Reference/Atlas Device Sync: Update configuration details for Recovery Mode

## Device Sync
- What is Atlas Device Sync?/Atlas Device Sync Overview: Add link to Realm SDKs on first reference
- Configure and Update Your Data Model
  - Update a Schema: Specify that breaking changes prevent automatic client recovery and require client applications to implement a manual error handler
- Configure Sync
  - Enable Atlas Device Sync: Update procedure details with info about Client Max Offline Days and Recovery Mode
  - Pause or Terminate Sync: Remove "manual" from client reset mentions, add link to React Native SDK client reset docs
- Handle Errors
  - Client Reset: Update docs for client recovery, including:
    - Add information about automatic client recovery
    - Add a new procedure for how to enable or disable Recovery Mode
    - Provide details about the different client reset modes & client reset recovery rules
    - Update details about discard local - now discard unsynced changes
    - Cover how to handle breaking schema changes
  - Sync Errors: Clarify that `ErrorWriteNotAllowed` in older Realm SDK versions requires a manual client reset

## Static Hosting
- Landing page
  - Add note about static hosting requiring a paid tier
  - Remove reference docs links from landing page to reduce duplication & maintenance issues
- Enable Hosting: Add note about static hosting requiring a paid tier

## Values & Secrets
- Landing page: Remove reference docs links from landing page to reduce duplication & maintenance issues

## Logs
- Landing page: Remove reference docs links from landing page to reduce duplication & maintenance issues

## Other
- Admin API: Add endpoints for getting a single deploy and redeploying an app

# September 30, 2022

## Manage & Deploy Apps
- Create/Realm CLI: Remove deployment regions and link to new reference table
- Deploy
  - Deployment Models & Regions: Update Cloud Deployment Regions to be a comprehensive reference table
  - Automate Deployment/Deploy Automatically with GitHub: Remove outdated note that refers to v1 app structure/CLI
- App Configuration Reference/App Services App: Remove deployment regions and link to new reference table

## Device Sync
- What is Atlas Device Sync/Atlas Device Sync Protocol: Fix typo

## Triggers
- Triggers Landing Page: Move info from "Overview" page to create a Triggers landing page
- Database Triggers
  - Update Project Expression docs for inclusive/exclusive project expressions
  - Remove outdated version-specific note
  - Update details about supported functionality and use cases
  - Move usage example details onto page from "Usage Examples" section
- Authentication Triggers: Move usage example details onto page from "Usage Examples" section
- Scheduled Triggers: Move usage example details onto page from "Usage Examples" section
- Disable a Trigger: Move page from "Usage Examples" section to Triggers top-level navigation
- Send Trigger Events to AWS EventBridge: Move page from "Usage Examples" section to Triggers top-level navigation

## Other
- App Services Landing Page: Redesign landing page with new styling, task-focused content, and key features
- Admin API: Update Applications endpoints with details for current state of configuration object and provider regions

# September 23, 2022

## Manage & Deploy Apps
- Secure: Add Data API & GraphQL to bullet list of App Services secured by TLS 1.3

## Data API
- Data API Examples: New "Data Access Permissions" section with information about custom rules, with examples

## Functions
- Query MongoDB Atlas
  - Aggregate: New "Find Data with Atlas Search" section with information and example
  - MongoDB API Reference: New sections for `mongodb.admin()` and `mongodb.getDBNames()` methods to list the database names for a data source
- Handle Errors: New page with information and examples for how to handle errors in Functions

## Logs
- Landing Page: Update links in Log Entry bullet list, add bullets for Change Stream & Endpoint Requests

## Reference
- Third-Party Services/Replace Services with npm Modules: Fix AWS SDK code example

## Other
- Admin API
  - Data Sources & Services: Add service config definitions
  - Schemas: Add endpoints to get and set null schema type validation settings
  - Triggers: Add endpoint to get a list of all Triggers, update Trigger definitions and examples for each Trigger type
- Fix broken link in release notes
- Update references to "data lake" to use "data federation" across several pages

# September 9, 2022

## Tutorials
- Set up JWT Authentication: Replace mention of the now-deprecated backend tutorial with links to Template Apps and docs on how to create an App Services App

## Functions
- Query MongoDB Atlas/MongoDB API Reference: Add new `database.getCollectionNames()` section showing how to get a list of all collection names in the database

## Triggers
- Atlas Triggers Overview && Database Triggers: Add line about how Atlas Triggers run on a serverless compute layer

## Users & Authentication
- Authentication Providers/Email/Password Authentication: Add details about available email confirmation customization options

## Other
- Introduction: Update description of tutorials to match new tutorial structure
- Fix broken links across various pages

# September 1, 2022

## Device Sync
- Handle Errors/Sync Errors: New section with details about the Compensating Write error

## Data API
- Data API Examples: New page with examples demonstrating how to send requests to the Data API

## Other
- Admin API: Correct the success message for the `adminGetService` endpoint

# August 26, 2022

## Manage & Deploy Apps
- Deploy/Deployment Models & Regions: Add GCP regions

## Device Sync
- Overview: Clarify the Web SDK does not support Device Sync, but you can query via MongoDB Data Access or GraphQL

## Other
- Template Apps page: Update React Native description to include @realm/react library
- Product naming updates across many pages to improve first/subsequent naming compliance and other naming issues

# August 19, 2022

## Manage & Deploy Apps
- Secure: Add info about DNS Filtering when communicating from a Sync client to the Sync Server

## Device Sync
- Define Data Access Patterns/Sync Rules and Permissions: Restore collection-specific rule example and info

# August 12, 2022

## Manage & Deploy Apps
- Configure/App Configuration Reference/Create Template Configurations with Expansions: Document how to specify an environment

## Other
- Admin API: Document the new `GET` endpoint to list all available Atlas App cloud regions

# August 5, 2022

## Manage & Deploy Apps
- Configure/App Configuration Reference/Atlas Device Sync: Update Flexible Sync config for type-specific and field-level permissions

## Device Sync
- Define Data Access Patterns/Sync Rules & Permissions: Update Flexible Sync role information for type-specific and field-level permissions

## GraphQL API
- Landing Page: Update limitations to clarify the GraphQL API does not currently support relationships for fields inside arrays of embedded objects

## Functions
- Query MongoDB Atlas/Write: Add missing underscore to field name

## Schemas
- Relationships: Add "Important" callout about the GraphQL API not supporting embedded object relationships

# July 29, 2022

## Device Sync
- What is Atlas Device Sync/Atlas Device Sync Overview: Fix typos in Offline-First section

## Functions
- Query MongoDB Atlas/Read: Use ISODate format in Atlas Functions

## Other
- Template Apps: Add link targets for linking from realm-docs
- Fix broken links to .NET client reset page
- Remove outdated "App Services Security" page, redirect to Manage & Deploy Apps/Application Security page

# July 22, 2022

## Functions
- Functions Landing Page: Update socket limit from 5 to 25 using the net built-in module

## Other
- Switch all YAML step files to use new rST procedure directive

# July 15, 2022

## Manage & Deploy Apps
- Create/Atlas App Services UI: Update screenshots, remove source constants, wording improvements
- Configure/App Configuration Reference/MongoDB Data Sources: Typo fix

## Device Sync
- Configure & Update Your Data Model/Sync Schema Overview: Define JSON Schema title
- Define Data Access Patterns/Flexible Sync Permissions Guide
  - Update a name from "MongoDB Realm" to "Atlas Apps"
  - Add CTA button to "Deploy a Template App"
- Configure Sync/Optimize Sync Atlas Usage: 
  - New section w/details about Trimming in Flexible Sync apps
  - Update docs for Client Maximum Offline Time setting to add default of 30 days for new apps

## Data API
- Landing Page: Add note that App Services does not support private endpoints

## Triggers
- Database Triggers: Clarify that an error condition shows as a `ChangeStreamHistoryLost` error in logs

## Users & Authentication
- Landing Page: Add note about Apple account deletion requirements
- Delete or Prevent Users From Accessing an App: Add deleteUser endpoints for Node.js & RN SDKs, add custom func example to delete users via Admin API
- Authentication Providers/Custom JWT Authentication: Updated JWT configuration to reflect multiple audiences

## Rules
- Role-based Permissions: Typo fix

## Logs
- Endpoint Logs: New page documenting endpoint logs in the style of the other logs pages

## Reference
- Known Issues & Workarounds: Add section about `ChangeStreamHistoryLost` errors
- Service Limitations: Add note that App Services does not support private endpoints

## Other
- App Services Landing Page: Add CTA button to "Create an Account"
- Template Apps
  - Add CTA button to "Check out the Template Apps"
  - Update the App Services UI screenshot
  - Wording improvements
- Update App Services Table of Contents to shift main "Atlas" services more prominently in the ToC
- Update page & section names per product naming guidelines

# July 8, 2022

## Atlas Device Sync
- What is Sync/Overview: Add guidance to Best Practices regarding splitting large write transactions
- Data Access Patterns/Choose a Sync Mode: Remove a mention of Flexible Sync being in preview

## Users & Authentication
- Authentication Providers/Email/Password Authentication: Refactor to improve readability

## GraphQL API
- Update naming at first mention on every page to `Atlas GraphQL API` to be consistent with naming guidance
- Reorder pages in table of contents based on order of use/relevance

## Data API
- Data API Landing Page: Add section with information about Supported Environments
- Data API Endpoints: Clarify that you can use Data API to query Atlas from a mobile application
- Custom HTTPS Endpoints: Clarify custom endpoint routes
- Correct Data API auth docs to use `runAsSystem` instead of `runAsSystemUser`

## Other
- Admin API: Add endpoint and info for Sampling and Validating Documents
- Update "Data Lake" naming to "Data Federation" across many docs

# July 1, 2022

## Manage & Deploy Apps
- Configure/App Configuration Reference: Add warning about reserved file names

## Atlas Device Sync
- Define Data Access Patterns
  - Choose Your Sync Mode: Specify devs can apply permissions on both document and field level
  - Sync Rules and Permissions: Add field-level permissions details
- Configure Sync/Enable Atlas Device Sync: Add link to new field-level permission info

## Functions
- Test Functions: New page w/guidance & tested code examples for testing Functions

## Triggers
- Authentication Triggers: Edits to improve readability

## Other
- Template Apps: Add Flexible Sync Template Apps to the list of available Template Apps
- Admin API
  - Move API reference from Reference to main sidebar navigation
  - Add Default Rules endpoints and info

# June 24, 2022

## Atlas Device Sync
- Define Data Access Patterns/Flexible Sync Permissions Guide: Add Flexible Sync permissions Template Apps to the page
- Event Library: Add docs for the Event Library w/link to Swift SDK client-side implementation details

## Users & Authentication
- Delete or Prevent Users from Accessing an App: Add link to .NET SDK docs for the delete a user API

## Data API
- Data API Endpoints: Remove Access-Control-Request-Headers from Data API examples

## Triggers
- Database Triggers: Change `operation_type` from snakecase to camelcase

# June 17, 2022

## Manage & Deploy Apps
- Configure/App Configuration Reference/MongoDB Data Sources: Add new section w/info for Default Rules

## Atlas Device Sync
- Define Data Access Patterns/Flexible Sync: Add link to Kotlin SDK Flexible Sync guide
- Add Sync to a Local-Only App: Update with Flexible Sync details, links to SDKs that have copy local-to-synced Realm methods

## Rules
- Rules: Add new section for Default Rules
- Role-based Permissions: Update procedures to define Roles & Permissions, add details about Document-level and Field-level Permissions, how permissions are applied

## Data API
- Data API Endpoints: Add new `API Versions` & `Choose an API Version` sections

## Functions
- Query MongoDB Atlas/MongoDB API Reference
  - Update `insertMany()` to include `options.ordered`
  - Fix monospace method titles

## Realm CLI
- Remove auto-generated message from each page stating that the pages are autogenerated
- Add missing flags (`--include-node-nodules` and `--include package-json`) to `realm-cli pull`

# June 10, 2022

The App Services docs release notes start here from week ending May 27, 2022. Prior to this, the App Services docs release notes were presented alongside the Realm docs release notes in the [Realm Database Docs repository](https://github.com/mongodb/docs-realm/blob/master/docs-release-notes.md).

## Manage & Deploy Apps
- Deploy/Deployment Models & Regions
  - Add new Azure deployment regions
  - Specify regions tha support only local deployment

## Atlas Device Sync
- Define Data Access Patterns
  - Choose Your Sync Mode: Remove Preview from Flexible Sync name & note about Flex Sync being in Preview
  - Flexible Sync
    - Add link to Flexible Sync Permissions Guide
    - Add section on Optimizing Sync with Asymmetric Sync
    - Add link to Flutter SDK re: creating queries in the client application
  - Sync Rules and Permissions: Add link to Flexible Sync Permissions Guide
  - Flexible Sync Permissions Guide
    - New page detailing Flexible Sync permissions patterns for common use cases, with setup procedures and code examples
    - Update Restricted News Feed permission strategy with a `subscribeToUser` Function
    - Add workaround note for Custom User Data
- Configure Sync
  - Enable Atlas Device Sync
    - Add section about configuring Asymmetric Sync to the Flexible Sync procedure
    - Remove note about Flexible Sync being in Preview

## Users & Authentication
- Create a User: Add links to relevant Kotlin SDK and Flutter SDK examples
- Enable Custom User Data: Add link to relevant Flutter SDK example
- Authentication Providers
  - Anonymous Authentication: Add links to relevant Kotlin SDK and Flutter SDK examples
  - Email/Password Authentication: Add links to relevant Kotlin SDK and Flutter SDK examples
  - Custom JWT Authentication: Add link to relevant Kotlin SDK example
  - API Key Authentication: Add link to relevant Kotlin SDK example
  - Facebook Authentication: Add link to relevant Kotlin SDK example
  - Google Authentication: Add link to relevant Kotlin SDK example
  - Apple ID Authentication: Add link to relevant Kotlin SDK example

## MongoDB Data Sources
- CRUD & Aggregation APIs: Add footnote about `allowDiskUse` being supported for system users

## Data API
- Landing page: New landing page for Data API
- Data API endpoints: New page containing content ported from Atlas with modifications for App Services
- Custom HTTPS Endpoints: Formerly the HTTPS Endpoints page, with content updated to align with generated endpoints

## Functions
- Overview: Add basic function example early in the page
- Query MongoDB Atlas
  - Read: Fix Find One example that wrongly shows Insert Many
  - MongoDB API Reference: Clarify that you can use evaluation, geospatial and bitwise in system functions

## Realm CLI
- Consolidate the "Realm CLI Authenticate with API Token" page formerly in the "Reference" section onto the main Realm CLI page

## Reference
- App Services Admin API: Add Data API endpoints for get/create/update Data API configs

Many Pages:
- Rename MongoDB Realm -> App Services
