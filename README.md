# Ezassist AI Workforce Showcase

An interactive prototype prepared for Hack for Humanity Bangladesh 2026. It introduces seven Ezassist AI workers from a business-solution perspective and shows how selected workers can be configured around civic and environmental problems.

## What the prototype communicates

1. Every worker has a focused role, input, activity, output, and human checkpoint.
2. A solution uses only the workers relevant to its problem.
3. Worker outputs become inputs to an understandable workflow.
4. A responsible person controls consequential actions.

All cases, outputs, metrics, approvals, and actions are simulated. The prototype does not run production AI, send messages, contact authorities, or connect to external services.

## Product areas

| Area | Purpose |
| --- | --- |
| Overview | Explains the seven-worker orchestration idea in plain language. |
| AI Workers | Shows what each worker receives, does, produces, and requires from a person. |
| Build Your Team | Matches a participant's problem pattern to a core worker flow and optional support. |
| Solution Demos | Introduces two event-aligned prototype projects. |
| Hackathon Fit | Connects Ezassist to the three Hack for Humanity Bangladesh challenge tracks. |

## Guided prototypes

### NagarSathi

A smart public-service concept for missed waste collection. Four workers prepare a voice intake record, triage recommendation, pattern insight, and resident follow-up.

### FloodReady

A climate-resilience concept for coordinating local flood reports. Five workers prepare a situation report, verification checklist, bilingual update, outreach sequence, and closure plan.

Each guided story section explains:

- The situation
- Which worker helps
- What Ezassist prepares
- Why the result is useful
- What a person still decides

## SME workforce journey

The AI Workers area begins with a fictional neighborhood bakery. Visitors can follow all seven workers across one end-to-end business flow:

```text
Order page
-> Product content
-> Local campaign
-> Voice inquiries
-> Customer service
-> Customer follow-up
-> Growth insights
```

The business owner remains responsible for offers, messages, campaigns, and decisions.

## Participant idea matcher

The Build Your Team area helps participants connect their own solution concept to the Ezassist workforce. It includes six starter problem patterns, editable idea framing, core and optional worker recommendations, worker handoffs, human checkpoints, and a one-page solution map that can be printed or saved as a PDF.

Matching is deterministic and browser-only. It is a learning aid, not a live AI recommendation service.

## Technology

- React
- TypeScript
- Vite
- Lucide React
- Browser-only deterministic state

There is no backend, authentication, database, API key, AI model, or external integration.

## Run locally

Requirements: Node.js 22 and npm 10 or newer are recommended.

```bash
npm ci
npm run dev
```

Open `http://localhost:5173/`.

Build and preview:

```bash
npm run build
npm run preview
```

## Source structure

```text
src/
  ProductApp.tsx        Main navigation and showcase pages
  IdeaMatcher.tsx       Participant idea-to-worker matching experience
  OperationalDemos.tsx Guided prototype experience
  productData.ts        Worker and project content
  solutionRecipes.ts    Starter problems and worker recommendations
  product-styles.css    Visual system and responsive layout
  main.tsx              React entry point

docs/
  PROJECT_WORKFLOW.md   Interaction and QA notes
```

## Demo checklist

- Read the overview at laptop and projector distance.
- Open every worker and verify the input-to-output explanation.
- Try every Build Your Team recipe, optional worker, and print summary.
- Complete every NagarSathi guided moment.
- Complete every FloodReady guided moment.
- Confirm all important actions are described as human decisions.
- Check desktop, tablet, and mobile layouts.
- Verify Bangla rendering.
- Run `npm run build`.

## Production boundary

A real deployment would require authenticated users, permissions, durable data, audit records, privacy controls, integrations, model evaluation, incident response, monitoring, and partner-approved operating policies.

No open-source license has been selected. Treat the source and product material as private unless the owner provides different terms.
