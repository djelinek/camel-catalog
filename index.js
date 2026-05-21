/**
 * @fileoverview
 * This module exports the versions of Camel catalogs and Kamelets used in the project.
 * It includes versions for Main, Quarkus, and SpringBoot catalogs.
 *
 * Camel JBang commands to list available catalogs:
 * - Main: `camel version list --fresh --runtime=main`
 * - Quarkus: `camel version list --fresh --runtime=quarkus`
 * - Spring Boot: `camel version list --fresh --runtime=spring-boot`
 *
 * For Red Hat versions, add `--repo=redhat` to the commands.
 * - Main: `camel version list --fresh --runtime=main --repo=redhat`
 * - Quarkus: `camel version list --fresh --runtime=quarkus --repo=redhat``
 * - Spring Boot: `camel version list --fresh --runtime=spring-boot --repo=redhat``
 */

const CATALOGS = {
  // https://repo1.maven.org/maven2/org/apache/camel/camel-catalog/
  // https://maven.repository.redhat.com/ga/org/apache/camel/camel-catalog/
  Main: [
    '4.20.0', // Latest
    '4.18.2', // LTS
    '4.14.7', // LTS
    '4.18.1.redhat-00019',
  ],
  // https://repo1.maven.org/maven2/org/apache/camel/quarkus/camel-quarkus-catalog/
  // https://maven.repository.redhat.com/ga/org/apache/camel/quarkus/camel-quarkus-catalog/
  Quarkus: [
    '3.35.0', // Camel Version 4.20.0
    '3.33.1', // Camel Version 4.18.2
    '3.27.4', // Camel Version 4.14.7
  ],
  // https://repo1.maven.org/maven2/org/apache/camel/springboot/camel-catalog-provider-springboot/
  // https://maven.repository.redhat.com/ga/org/apache/camel/springboot/camel-catalog-provider-springboot/
  SpringBoot: [
    '4.20.0', // Latest
    '4.18.2', // LTS
    '4.14.7', // LTS
    '4.18.1.redhat-00014',
  ],
  // https://repo1.maven.org/maven2/org/citrusframework/citrus-catalog-schema/
  Citrus: ['4.10.0', '4.10.1'],
};

const KAMELETS_VERSION = '4.20.0';

module.exports = { CATALOGS, KAMELETS_VERSION };