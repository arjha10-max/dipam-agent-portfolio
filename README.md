# DIPAM Agent Portfolio

A brief-driven AI agent that runs a synthetic campaign launch through **DIPAM: Data, Identity, Personalization, Activation, and Measurement**, with mandatory human approval gates.

> **Synthetic portfolio.** Vividance and DermaNova are fictional brands. All briefs, budgets, audiences, performance examples, and ROI figures are synthetic or clearly labelled assumptions. This project does not describe any real company's proprietary tools or internal systems.

## The problem

Campaign launches often move through disconnected briefs, research decks, audience documents, creative plans, media plans, IO trackers, QA checklists, and measurement reports. Important decisions get buried, assumptions stay implicit, and activation risks appear too late.

## The solution

This repository defines an agentic operating model that runs inside a coding-agent CLI. The agent uses `AGENTS.md`, stage playbooks, templates, and a campaign-level `STATE.md` file to move one brief through governed stages:

1. **Intake** — brief extraction, gaps, assumptions, and readiness
2. **Data** — category, consumer, competitor, price-pack, and data-readiness foundation
3. **Identity** — one CORE and two GROWTH audiences, signals, consent, and measurement hypotheses
4. **Personalization** — integrated creative and media strategy, budget scenarios, and test-and-learn
5. **Activation** — MPA reconciliation, IOs, blocking, tagging, trafficking, QA, and dependencies
6. **Measurement** — supplied-performance analysis, MMM-lite, incrementality design, and optimization

The agent stops at every gate. It does not approve its own work, sign an MPA, launch media, move raw PII, or invent performance data.

## Repository map

| Path | Purpose |
|---|---|
| `AGENTS.md` | Runtime rules, commands, gates, state model, and escalation behavior |
| `briefs/` | Brief template plus synthetic Vividance and DermaNova sample briefs |
| `playbooks/` | Stage-by-stage operating instructions |
| `templates/` | Markdown and CSV templates for campaign outputs |
| `docs/architecture.md` | Reference architecture with Mermaid diagram |
| `docs/escalation-matrix.md` | Severity model and escalation triggers |
| `docs/feasibility-and-risk.md` | Agent-ready versus human-owned work and risk register |
| `docs/pilot-to-scale.md` | Pilot plan, success metrics, and scale path |
| `docs/roi-model.md` | Conservative, expected, and upside ROI assumptions |
| `docs/narrative/` | CMO and brand-lead storylines |
| `site/` | Static recorded walkthrough for GitHub Pages |
| `.github/workflows/pages.yml` | GitHub Pages deployment workflow |

## How to run this agent

Open this repository in a coding-agent CLI that reads `AGENTS.md`, then use:

```text
start briefs/sample-brief-1-functional-beverage.md
```

The agent will create `campaigns/vividance-hydration-2027/`, run Intake, update `STATE.md`, and stop.

Advance only with exact approval phrases:

```text
APPROVE INTAKE
APPROVE DATA
APPROVE IDENTITY
APPROVE PERSONALIZATION
MPA SIGNED
APPROVE PREFLIGHT
APPROVE OPTIMIZATION
```

Useful commands:

```text
status
revise data: sharpen the competitor analysis
export summary
```

For Measurement, place a performance export in:

```text
campaigns/<slug>/inputs/
```

The agent must never invent performance data in a real run.

## Static walkthrough

The `site/` folder contains a mobile-friendly walkthrough labelled **“Recorded outputs on synthetic data.”** It is a portfolio demonstration, not a live agent. The live workflow runs in the coding-agent CLI.

## GitHub Pages

The workflow in `.github/workflows/pages.yml` deploys `site/` to GitHub Pages using the official Pages actions. In GitHub, open **Settings → Pages** and select **GitHub Actions** as the source.

## License

MIT. See `LICENSE`.
