# Activation Dependency Diagram Template

- Campaign:
- Campaign slug:
- Date:
- Data status: Synthetic | Vendor input | Mixed

## Cross-track dependency diagram

```mermaid
flowchart LR
    MPA[MPA signed] --> PLAN[Plan and MPA reconciled]
    PLAN --> IO[IOs signed]
    PLAN --> SPECS[Creative specs confirmed]
    PLAN --> TAGPLAN[Tagging plan approved]

    IO --> TRAFFICKING[Line items ready for trafficking]
    SPECS --> CREATIVE[Creative delivered]
    CREATIVE --> TRAFFICKING
    TAGPLAN --> TAGS[Tags implemented]
    TAGS --> TAGQA[Tag validation passed]
    AUD[Audience consent approved] --> LOAD[Audiences loaded]

    TRAFFICKING --> QA[Pre-flight QA complete]
    TAGQA --> QA
    LOAD --> QA
    QA --> SIGNOFF[Pre-flight sign-off]
    SIGNOFF --> LIVE[Go-live]
    LIVE --> MONITOR[72-hour monitoring]
```

## Critical path

| Dependency | Track | Owner | Due date | Status | Escalation trigger |
|---|---|---|---|---|---|
| MPA signed | Commercial |  |  |  |  |
| IO signed | Commercial |  |  |  |  |
| Creative specs confirmed | Shared |  |  |  |  |
| Creative delivered | Creative |  |  |  |  |
| Tag validation passed | Ad Ops |  |  |  |  |
| Audiences loaded | Ad Ops |  |  |  |  |
| Pre-flight QA complete | Shared |  |  |  |  |

## So what

## Decision needed

Request: `APPROVE PREFLIGHT`

## Assumptions and confidence

| Assumption | Confidence | Impact | Validation needed |
|---|---|---|---|
|  |  |  |  |
