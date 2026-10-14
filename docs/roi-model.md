# ROI Model

This document provides a conservative, expected, and upside ROI view for piloting the DIPAM agent. Every number is an illustrative assumption for a synthetic $8M campaign. It is not a financial forecast, client result, or claim of guaranteed media performance.

## 1. Model principles

- Show assumptions before benefits.
- Separate labor value from media value.
- Treat media-efficiency value as budget released or redeployed, not profit.
- Treat incremental-lift value as gross revenue unless contribution margin is applied.
- Use a margin-adjusted view as the more honest ROI case.
- Replace assumptions with measured pilot results before scaling.

## 2. Core planning assumptions

| Assumption | Conservative | Expected | Upside | Confidence | Notes |
|---|---:|---:|---:|---|---|
| Working media budget | $8,000,000 | $8,000,000 | $8,000,000 | High | Synthetic sample budget |
| Blended loaded hourly rate | $125 | $125 | $125 | Medium | Illustrative agency rate, not market pricing |
| Direct planning hours saved | 80 | 136 | 180 | Medium | Based on synthetic stage-level estimate |
| Avoided rework hours | 40 | 80 | 120 | Low | Faster insight-cycle proxy |
| Optimizable share of media | 50% | 60% | 65% | Medium | Share affected by better allocation and optimization |
| Media-efficiency improvement | 0.5% | 1.0% | 1.5% | Low | Must be validated in pilot |
| Synthetic incremental ROAS baseline | 1.8 | 1.8 | 1.8 | Low | From sample brief target, not actual performance |
| Response-sensitive share of media-influenced revenue | 50% | 60% | 65% | Low | Share potentially affected by improved decisions |
| Incremental-lift improvement | 0.5% | 1.0% | 1.5% | Low | Requires incrementality testing |
| Contribution margin | 30% | 30% | 30% | Low | Used only for margin-adjusted ROI |

## 3. Time-saving model

| Stage | Baseline hours | Agent-assisted hours | Hours saved |
|---|---:|---:|---:|
| Intake | 16 | 8 | 8 |
| Data | 80 | 48 | 32 |
| Identity | 40 | 24 | 16 |
| Personalization | 96 | 64 | 32 |
| Activation | 120 | 96 | 24 |
| Measurement | 80 | 56 | 24 |
| **Total** | **432** | **296** | **136** |

Expected-case direct time savings:

```text
136 hours × $125 = $17,000
```

Expected-case reduction in planning and analysis hours:

```text
136 ÷ 432 = 31.5%
```

## 4. Gross annual value model

### Labor value

| Scenario | Direct hours saved | Direct labor value | Avoided rework hours | Avoided rework value | Total labor value |
|---|---:|---:|---:|---:|---:|
| Conservative | 80 | $10,000 | 40 | $5,000 | $15,000 |
| Expected | 136 | $17,000 | 80 | $10,000 | $27,000 |
| Upside | 180 | $22,500 | 120 | $15,000 | $37,500 |

### Media-efficiency value

Formula:

```text
Working media × optimizable share × efficiency improvement
```

| Scenario | Calculation | Media-efficiency value |
|---|---|---:|
| Conservative | $8.0M × 50% × 0.5% | $20,000 |
| Expected | $8.0M × 60% × 1.0% | $48,000 |
| Upside | $8.0M × 65% × 1.5% | $78,000 |

This is an efficiency-equivalent value. It is not incremental profit.

### Incremental-lift value before margin

Formula:

```text
Working media × synthetic ROAS × response-sensitive share × lift improvement
```

| Scenario | Calculation | Gross incremental revenue value |
|---|---|---:|
| Conservative | $8.0M × 1.8 × 50% × 0.5% | $36,000 |
| Expected | $8.0M × 1.8 × 60% × 1.0% | $86,400 |
| Upside | $8.0M × 1.8 × 65% × 1.5% | $140,400 |

This is gross revenue value, not contribution or profit.

### Total gross value

| Scenario | Labor value | Media-efficiency value | Gross incremental revenue value | Total gross value |
|---|---:|---:|---:|---:|
| Conservative | $15,000 | $20,000 | $36,000 | $71,000 |
| Expected | $27,000 | $48,000 | $86,400 | $161,400 |
| Upside | $37,500 | $78,000 | $140,400 | $255,900 |

## 5. Margin-adjusted value model

The margin-adjusted model applies a 30% illustrative contribution margin only to incremental revenue. Labor and media-efficiency values remain unchanged.

| Scenario | Labor value | Media-efficiency value | Margin-adjusted lift value | Total margin-adjusted value |
|---|---:|---:|---:|---:|
| Conservative | $15,000 | $20,000 | $10,800 | $45,800 |
| Expected | $27,000 | $48,000 | $25,920 | $100,920 |
| Upside | $37,500 | $78,000 | $42,120 | $157,620 |

## 6. Pilot cost model

| Cost area | Hours | Rate | Cost |
|---|---:|---:|---:|
| Workflow configuration | 120 | $125 | $15,000 |
| Template and category adaptation | 80 | $125 | $10,000 |
| Team training | 40 | $125 | $5,000 |
| Governance and quality review | 80 | $125 | $10,000 |
| Pilot program management | 40 | $125 | $5,000 |
| **Total pilot cost** | **360** | **$125** | **$45,000** |

Assumption: no incremental external software license is required for the repository-based pilot. Production integrations would require a separate business case.

## 7. ROI summary

Formula:

```text
ROI = (margin-adjusted value - pilot cost) ÷ pilot cost
```

| Scenario | Margin-adjusted value | Pilot cost | Net value | ROI | Illustrative payback |
|---|---:|---:|---:|---:|---:|
| Conservative | $45,800 | $45,000 | $800 | 1.8% | 11.8 months |
| Expected | $100,920 | $45,000 | $55,920 | 124.3% | 5.4 months |
| Upside | $157,620 | $45,000 | $112,620 | 250.3% | 3.4 months |

## 8. Interpretation

- The **Conservative** case is close to break-even. That is a useful honesty check.
- The **Expected** case depends on measurable time savings, reduced rework, and disciplined media optimization.
- The **Upside** case should not be used for commitment until incrementality testing and pilot data validate the assumptions.
- The strongest near-term value is likely workflow quality: fewer missing inputs, clearer assumptions, faster approvals, better activation readiness, and more reusable learning.

## 9. Pilot validation plan

During the pilot, replace assumptions with actuals for:

1. Hours by stage
2. Rework cycles
3. Approval turnaround time
4. Number and severity of escalations
5. Pre-flight blockers detected
6. Media reallocation decisions
7. Incrementality test results
8. Team adoption and satisfaction
9. Claims and privacy issues
10. Realized media-efficiency opportunities

## 10. Decision rule

Scale only if the pilot demonstrates one or both of the following:

- A credible path to positive margin-adjusted ROI
- Material improvement in decision quality, compliance confidence, or launch readiness that leadership considers strategically valuable even before financial ROI is proven
