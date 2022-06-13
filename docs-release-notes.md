# June 10, 2022

The App Services docs release notes start here from week ending May 27, 2022. Prior to this, the App Services docs release notes were presented alongside the Realm docs release notes in the [Realm Docs repository](https://github.com/mongodb/docs-realm/blob/master/docs-release-notes.md).

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
    - Update Restricted News Feed permission strategy with a subscribeToUser Function
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
