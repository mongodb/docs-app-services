## July 29, 2022

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
