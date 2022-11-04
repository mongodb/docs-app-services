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
