# Escalation Matrix

This matrix defines when the DIPAM agent must stop, surface a decision, and wait for human direction. The agent should recommend a path, but it must not resolve material risk silently.

## 1. Escalation principles

- Stop the current stage when a trigger fires.
- Name the severity, business impact, options, and recommended next step.
- Record the escalation in `campaigns/<slug>/STATE.md`.
- Do not proceed on silence.
- Re-ask for the exact approval phrase after the issue is resolved.

## 2. Severity definitions

| Severity | Definition | Example | Required action |
|---|---|---|---|
| Critical | Legal, privacy, financial, or client-commitment risk that blocks work | Missing consent for first-party activation | Stop immediately; require accountable owner decision |
| High | Material impact on budget, launch date, KPI, or claims | MPA does not match approved plan | Stop stage; recommend resolution |
| Medium | Rework or performance risk with a manageable path | Creative spec missing for one vendor | Escalate to owner; continue only unaffected work if safe |
| Low | Minor ambiguity or documentation gap | Non-material naming inconsistency | Log, correct, and monitor |

## 3. Matrix

| Trigger | Stage | Severity | Early indicator | Options | Recommendation | Accountable owner |
|---|---|---|---|---|---|---|
| Budget conflict in brief | Intake | High | Media total and campaign total are inconsistent | Confirm total; reduce scope; rephase budget | Confirm working media before Data | Client brand lead |
| KPI conflict | Intake | High | Awareness, conversion, and ROAS targets imply incompatible channel mix | Rebalance KPIs; revise budget; change timing | Align KPI hierarchy before research | Client brand and analytics leads |
| Missing approver | Intake | Medium | No accountable client or legal approver named | Add approver; use role-based owner; delay gate | Name role-based approver before proceeding | Client brand lead |
| Unsupported product claim | Data or Personalization | Critical | Claim lacks substantiation or conflicts with brief guardrails | Remove claim; rewrite; seek substantiation | Use lower-risk approved language until legal clears claim | Client legal/regulatory lead |
| Market fact cannot be validated | Data | Medium | Material category number lacks credible source | Label assumption; find source; remove number | Label `Illustrative assumption, validate before use` | Agency strategist |
| Data-readiness gap blocks audience | Identity | High | Consent, access, or clean-room route is missing | Use contextual audience; delay activation; contract clean room | Switch to privacy-safe contextual route for pilot | Data and technology lead |
| Sensitive targeting requested | Identity | Critical | Audience uses health or other sensitive inference | Refuse; propose contextual alternative; seek legal guidance | Do not activate sensitive targeting | Client legal/privacy lead |
| Consent status unclear | Identity or Activation | Critical | First-party list lacks documented consent basis | Suppress audience; re-permission; use clean room only if approved | Suppress until consent is documented | Client privacy lead |
| Clean-room access unavailable | Identity or Activation | High | Retailer or platform access not contracted | Use platform-native audience; delay; contract access | Use platform-native or contextual alternative | Data and technology lead |
| Vendor minimum distorts plan | Personalization | Medium | Minimum spend forces unwanted channel allocation | Negotiate; reduce scope; reject vendor | Reallocate to channel that meets objective | Agency investment lead |
| Retail distribution not ready | Personalization or Activation | High | Retail media planned before product availability | Delay retail media; shift to ecommerce; shift to awareness | Do not spend against unavailable product | Client commercial lead |
| Creative production cannot meet variant matrix | Personalization or Activation | Medium | Required formats exceed production scope | Reduce variants; prioritize platforms; extend deadline | Prioritize variants tied to test agenda | Agency production lead |
| MPA-plan mismatch | Activation | High | IO or MPA totals differ from approved plan | Correct MPA; revise plan; request new approval | Stop activation until reconciled | Client media lead |
| IO terms conflict with plan | Activation | High | Cancellation, rate, or delivery terms differ materially | Renegotiate; reject; escalate to client | Do not sign IO until terms are reconciled | Agency investment lead |
| Inventory constraint | Activation | Medium or High | Vendor cannot deliver audience, market, or dates | Shift vendor; change flight; revise forecast | Protect launch-critical reach first | Agency investment lead |
| Creative delivery late | Activation | High | Assets will miss trafficking deadline | Reduce rotation; delay line; use approved fallback | Use approved fallback only | Agency production lead |
| Tag validation failure | Activation | Critical | Conversion or consent behavior fails QA | Fix tag; delay line; use manual monitoring only if approved | Do not launch affected line without measurement | Agency analytics lead |
| Brand-safety setup missing | Activation | High | Verification or exclusions unavailable | Apply platform controls; delay vendor; escalate | Do not launch without minimum controls | Agency activation lead |
| Pacing variance above threshold | Activation or Measurement | High | Spend or delivery exceeds agreed variance | Pause; reallocate; investigate tracking | Pause affected line if variance threatens budget | Agency activation lead |
| Performance anomaly | Measurement | Medium or High | Sudden metric change inconsistent with history | Validate tags; compare sources; pause if spend risk | Validate data before optimization | Agency analytics lead |
| Platform and retailer data conflict | Measurement | High | Reported conversions differ materially | Reconcile definitions; use triangulation; delay reallocation | Do not make causal claim until reconciled | Agency analytics lead |
| Reallocation exceeds authority | Measurement | High | Recommendation moves more budget than approval allows | Split actions; request client approval; test smaller | Request explicit client decision | Client media lead |
| Hallucination risk | Any | High | Output lacks source, state, or input support | Remove claim; label assumption; re-run stage | Treat unsupported content as invalid until verified | Agency strategist |
| Over-automation risk | Any | High | Agent appears to approve, sign, launch, or optimize alone | Stop; reassert gate; update state | Human must make the decision | Engagement lead |

## 4. Escalation response format

```markdown
## Escalation

- Severity: Critical | High | Medium | Low
- Trigger: <what fired>
- Stage blocked: <stage>
- Business impact: <impact>
- Options: <option 1; option 2; option 3>
- Recommendation: <decisive recommendation>
- Decision needed: <exact user decision>
```

## 5. Governance cadence

- Log every escalation in `STATE.md`.
- Review open escalations at each stage gate.
- Close an escalation only when the decision, owner, and date are recorded.
- Carry unresolved Critical or High items into the next stage as blockers, not assumptions.
