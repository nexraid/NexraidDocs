# Data Breach Response Checklist 
This checklist is to be used to guide in the event of potential data breach/data breach exercise to contain and recover from an incident quickly and effectively by adopting the four key steps (using the acronym C.A.R.E.), the checklist as appended below can improve response time and minimise damages.

## CONTAIN
Following the discovery of the incident, the designated incident response team should be notified immediately to ensure that the incident is dealt with swiftly and efficiently.
### Alerting Relevant Parties of the Incident
* Incident response team:
    * Incident response handler
    * Incident response service provider
    * Product/service vendor(s)
* Organisations may consider alerting the following bodies:
    * Regulatory bodies
    * Law enforcement agencies
    * SingCERT
    * Business clients (if you are a service provider, e.g., data intermediary)
    * Others: _________
### Knowing Your IT Infrastructure
* Identify investigation resources:
    * List of key assets and data and where they are located/hosted
    * Network diagrams
    * Current baseline of IT systems’ activities
    * Documentation of IT systems and software versions
    * Backing-up of important data
    * Others: _________
### Recognising Possible Attack Vectors
* Organisations should identify common attack vectors or entry points that threat actors may use, such as:
    * Poorly designed web applications
    * Misconfigured systems
    * Internet downloads
    * Poor cyber hygiene practices (e.g., use of weak or default passwords, use of outdated software, etc.)
    * Human lapses
    * Authorised third parties
    * Others: _________
### Reviewing Possible Sources of Precursors and Indicators
* Security software (e.g., Intrusion Detection Systems [IDS], Security Information and Events Management System [SIEM], anti-virus software, third party monitoring services etc.)
    * Logs (e.g., operating system logs, service and application logs, network device logs, netflow logs etc.)
    * Publicly available information (e.g., SingCERT alerts & advisories, alerts & advisories from products/services vendors on vulnerabilities etc.)
    * People from within your organisation
    * Others: _________
### Making an Initial Assessment and Prioritising the Next Steps
* Correlate events against the baseline to determine if an incident has occurred
    * Check incidents against known threat precursors and indicators
    * Make an initial assessment of the scope and nature of the incident, particularly whether it is a malicious act or a technological glitch
    * Prioritise the incident handling activities, including whether to activate crisis management, and crisis communications plans
    * Others: _________
### Developing Containment Strategies 
* Containment strategies vary depending on the type of incident, and a strategy should be developed for different incident types to contain the incident and minimise the damage. Some of the more common strategies are:
    * Isolate all or parts of the compromised network by disconnecting all affected systems
    * Re-route or filter network traffic
    * Firewall filtering
    * Closing particular ports or mail servers
    * Block further unauthorised access to the system
    * Others: _________

## ASSESS
Following identification and containment of the cyber incident, organisations may conduct an in-depth assessment of the incident to understand its impact and severity. The information gathered during this phase allows the organisation to decide whether further remedial actions are required and devise strategies for recovery. The threats/vulnerabilities have to be thoroughly eradicated before normal operations can resume to minimise subsequent repeated disruptions.
### Gathering Evidence
* Evidence gathering may serve two purposes – incident resolution and legal proceedings. Some of the evidence that need to be documented and/or preserved include:
    * Summary of the incident
    * Incident indicators
    * System events
    * Actions taken during the incident
    * Logs of affected systems
    * Forensic copies of affected systems
    * Others: _________
### Eradicating the Threat
* After containing the incident, eradication may be necessary to eliminate all traces of the incident. This may include:
    * Wiping out the malware
    * Disabling breached user accounts
    * Patching vulnerabilities that were exploited. This should be applied to all affected hosts within the organisation
### Taking Steps Towards Recovery
* This may entail:
    * Restoring systems from backups
    * Rebuilding systems from scratch
    * Installing patches
    * Changing passwords (both administrators and users)
    * Tightening network perimeter security
    * Confirming the integrity of business systems and controls
    * Others: _________

## REPORT
### Knowing your Stakeholders and/or Fiduciary Obligations
* Notify relevant stakeholders and affected parties:
    * Board of Directors
    * Regulators, law enforcement and other government agencies (e.g., SPF, PDPC, CSA, SGX etc.)
    * Clients
    * Media
    * Others: _________