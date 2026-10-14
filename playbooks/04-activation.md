# Playbook 04 — Activation

## Purpose

Convert the approved media plan and simulated MPA into launch-ready implementation. Activation runs two parallel tracks:

1. **Connections/Implementation Planning** — commercial, vendor, IO, blocking, budget, creative specification, billing, and client approval work
2. **Activation/Ad Operations** — tagging, trafficking, audience loading, QA, go-live, and post-launch monitoring

Do not begin Activation until the user types `MPA SIGNED`.

## Required inputs

- Approved `campaigns/<slug>/03-personalization/client-approval-pack.md`
- Approved `campaigns/<slug>/03-personalization/media-plan.md`
- Approved `campaigns/<slug>/03-personalization/media-plan-budget.csv`
- Approved `campaigns/<slug>/03-personalization/creative-variant-matrix.csv`
- Approved `campaigns/<slug>/03-personalization/test-and-learn-agenda.csv`
- Simulated MPA approval recorded in `campaigns/<slug>/STATE.md`
- Vendor proposals, rate cards, deal IDs, creative specifications, and platform requirements if available

If a required input is missing, ask for it and mark Stage A as blocked.

## Activation principles

- Reconcile every IO and line item back to the approved plan and MPA.
- Keep a version-controlled blocking chart.
- Keep commercial and ad-ops work connected through one dependency tracker.
- Never treat vendor estimates as approved spend until the IO is signed.
- Never traffic creative before specifications, claims approval, and QA requirements are confirmed.
- Never activate first-party audiences without documented consent and approval.
- Do not move raw PII into the agency environment.
- Make brand safety, verification, frequency, and measurement requirements explicit.
- Use change control for every material plan, budget, creative, vendor, date, or tracking change.
- Stop for pre-flight QA sign-off before simulated go-live.

## Process

### 1. Confirm MPA status

Check `STATE.md` for:

- `APPROVE PERSONALIZATION`
- `MPA SIGNED`
- Approval date
- Approved budget
- Approved scenario
- Any conditions attached to approval

If `MPA SIGNED` is missing, stop and request it.

### 2. Reconcile the MPA against the approved plan

Compare:

- Working media budget
- Market allocations
- Audience allocations
- Channel and vendor allocations
- Flight dates
- KPI targets
- Test-and-learn budget
- Exclusions and contingency

Use `templates/mpa-reconciliation.csv`.

Escalate any mismatch above the stated threshold or any mismatch affecting client commitments.

### 3. Track vendor proposals and negotiations

For each vendor, record:

- Proposal date and version
- Inventory or package
- Market and audience
- Rates
- Value adds
- Negotiation notes
- Decision
- Rejected alternatives
- Next action
- Owner and due date

Use `templates/vendor-negotiation-log.csv`.

### 4. Build the IO tracker

For each vendor IO, record:

- Vendor
- IO number
- Deal or PMP ID
- Line items
- Market
- Audience
- Dates
- Gross and net budget
- Rates
- Deliverables
- Cancellation terms
- Makegood terms
- Billing contact
- PO status
- Signature status

Use `templates/io-tracker.csv`.

### 5. Update the blocking chart

Maintain a version-controlled view of:

- Market
- Audience
- Channel
- Vendor
- Flight dates
- Budget
- Impressions or units if available
- Creative rotation
- Frequency cap
- Version and change reason

Use `templates/blocking-chart.csv`.

### 6. Capture creative specifications and delivery deadlines

For each vendor and placement, capture:

- Format
- Size or duration
- Aspect ratio
- File type
- File weight
- Safe zones
- Captions or subtitles
- Language
- Legal copy
- Tracking requirements
- Delivery deadline
- Owner

Use `templates/creative-spec-sheet.csv`.

### 7. Define trafficking instructions

Document:

- Campaign naming convention
- Ad group or line-item naming
- Creative naming
- UTM taxonomy
- Landing pages
- Audience assignments
- Frequency caps
- Dayparting
- Geo settings
- Exclusions
- Verification settings
- Approval requirements

Use `templates/trafficking-instruction-handoff.md`.

### 8. Build the tagging plan

Define:

- Pixels and platform tags
- Tag manager containers
- Conversion events
- Event parameters
- UTM taxonomy
- Naming conventions
- Consent mode or privacy requirements
- QA owner
- Validation method
- Launch dependency

Use `templates/tagging-plan.md`.

### 9. Plan audience loading and activation

For each audience, confirm:

- Source
- Consent status
- Activation route
- Clean-room requirement
- Suppression rules
- Platform or vendor destination
- Refresh cadence
- Owner
- Go-live dependency

Do not load audiences without documented approval.

### 10. Set brand safety and verification requirements

Define:

- Inclusion and exclusion lists
- Fraud verification
- Viewability requirements
- Brand-suitability controls
- Geography controls
- Sensitive-content exclusions
- Reporting cadence
- Escalation threshold

### 11. Build the dependency and risk tracker

Track:

- IO signature
- Rate confirmation
- Creative specs
- Creative delivery
- Tags implemented
- Tag validation
- Audience loading
- Trafficking complete
- QA complete
- Client sign-off
- Go-live readiness

Use `templates/risk-dependency-tracker.csv`.

### 12. Create the dependency diagram

Include a Mermaid diagram showing the cross-track dependencies:

- MPA signed
- IO signed
- Creative specs confirmed
- Creative delivered
- Tagging implemented
- Tag validation passed
- Audience loaded
- Trafficking complete
- Pre-flight QA approved
- Go-live
- 72-hour monitoring

Use `templates/dependency-diagram.md`.

### 13. Complete pre-launch QA

Check:

- Budgets and dates
- Line items and rates
- Geo and language
- Audience assignments
- Frequency caps
- Creative rotation
- Landing pages
- UTMs
- Pixels and conversion events
- Consent behavior
- Brand safety
- Verification
- Legal copy
- Accessibility or caption requirements where applicable

Use `templates/qa-checklist.md`.

### 14. Plan go-live and 72-hour monitoring

Define:

- Go-live owner
- Launch checklist
- Hour-one checks
- Day-one checks
- 72-hour pacing review
- Anomaly thresholds
- Escalation route
- Client communication cadence

Use `templates/budget-pacing-tracker.csv` and `templates/client-signoff-log.csv`.

## Required outputs

Create:

```text
campaigns/<slug>/04-activation/mpa-reconciliation.csv
campaigns/<slug>/04-activation/vendor-negotiation-log.csv
campaigns/<slug>/04-activation/io-tracker.csv
campaigns/<slug>/04-activation/blocking-chart.csv
campaigns/<slug>/04-activation/creative-spec-sheet.csv
campaigns/<slug>/04-activation/trafficking-instruction-handoff.md
campaigns/<slug>/04-activation/tagging-plan.md
campaigns/<slug>/04-activation/qa-checklist.md
campaigns/<slug>/04-activation/dependency-diagram.md
campaigns/<slug>/04-activation/budget-pacing-tracker.csv
campaigns/<slug>/04-activation/risk-dependency-tracker.csv
campaigns/<slug>/04-activation/client-signoff-log.csv
```

Use the matching files in `templates/`.

## Quality checks

Before requesting approval, confirm:

- `MPA SIGNED` is recorded in `STATE.md`.
- MPA reconciliation is complete.
- Every planned vendor line appears in the IO tracker or is explicitly deferred.
- Blocking chart version and changes are logged.
- Creative specs and delivery dates are assigned.
- Tagging plan includes conversion events, UTMs, and validation ownership.
- Audience activation routes match Identity consent approvals.
- Brand safety and verification requirements are explicit.
- Cross-track dependencies are shown in Mermaid.
- Pre-launch QA and go-live checklists are complete.
- 72-hour monitoring ownership and thresholds are defined.
- All Markdown outputs end with the required sections.

## Escalation triggers

Stop and escalate when:

- MPA and plan do not reconcile
- IO, rate, inventory, or cancellation terms conflict with the approved plan
- A vendor cannot meet launch timing or specifications
- Creative delivery threatens go-live
- Tags cannot be validated
- Audience consent or clean-room approval is missing
- Brand-safety requirements cannot be met
- Pacing variance exceeds the approved threshold
- A dependency required for go-live is unsigned or unowned

Use the escalation format in `AGENTS.md`.

## Gate

Update `campaigns/<slug>/STATE.md`, then stop and request:

```text
APPROVE PREFLIGHT
```
