# Ezassist Civic Workforce MVP

A frontend-only compatibility demonstration showing how seven coordinated Ezassist AI workers can help build and operate civic and humanitarian solutions for hackathons such as Hack for Humanity Bangladesh.

The MVP supports one proposition:

> **AI Collective should evaluate Ezassist as a reusable AI-workforce layer for building responsible civic hackathon solutions.**

It proves this through two substantially different workflows:

1. **NagarSathi Waste Operations** — a commercially expandable civic-service platform.
2. **MUN Alert AI Response Studio** — a high-stakes humanitarian compatibility concept with strict authority control.

> All organizations, cases, actions, integrations, and metrics are simulated. No partnership with AI Collective, MUN Alert, Facebook/Meta, or a government authority is claimed.

## Product structure

| Section | Purpose |
| --- | --- |
| Overview | Explains the workforce thesis and two proofs of compatibility. |
| AI Workers | Maps seven workers to civic responsibilities and demo artifacts. |
| Civic Demos | Compares the commercial and humanitarian workflows. |
| NagarSathi | Runs a service complaint and shows a prototype-to-platform path. |
| MUN Alert concept | Runs fictional alert preparation with authority gates. |
| For AI Collective | Presents the evaluation proposition and evidence boundaries. |

Earlier generic organization directories, impact cards, recommendation tutorials, and investor-pricing flows were removed because they diluted the AI Collective compatibility pitch.

## Seven coordinated workers

| Worker | Civic responsibility |
| --- | --- |
| Voice Executive | Accessible Bangla and English voice intake |
| Customer Service Executive | Classification, priority, and routing |
| Growth Analyst | Pilot metrics, patterns, and validation |
| Customer Success Executive | Follow-up, escalation, feedback, and closure |
| Content Executive | Bilingual public information and templates |
| Digital Campaign Executive | Responsible community reach planning |
| Landing Page Designer | Public forms, status views, and operator interfaces |

Workers prepare focused artifacts and share a workflow. They do not autonomously execute consequential external actions.

## Embedded AI assistance model

Both demos show a usable project interface rather than a terminal or agent animation. Ezassist workers appear contextually inside the operator’s work:

- A normal civic or humanitarian product UI remains primary.
- The relevant worker is identified beside each assisted field, insight, or draft.
- Workers prepare transcription, classification, content, insights, or follow-up at the moment it is needed.
- Operators explicitly apply, edit, approve, reject, or escalate recommendations.
- Workers that are unnecessary for the current case remain visibly inactive.
- The interface distinguishes AI preparation from human or authority decisions.

This sells the finished solution and shows where Ezassist improves it.

## Demo 1: NagarSathi

NagarSathi is presented as a civic operations dashboard with an issue queue, case workspace, service status, activity history, and Ezassist assistance rail. The routine missed-collection case activates Voice, Customer Service, Growth, and Customer Success. Content, Campaign, and Landing Page are shown as unnecessary for that case.

```text
Resident voice report
→ Voice-assisted structured case
→ Operator-reviewed triage recommendation
→ Contextual service-pattern insight
→ Human-approved resident response
→ Follow-up and resolution tracking
```

The commercial path is explicit:

```text
Hackathon MVP
→ Controlled pilot
→ Deployable civic product
→ Multi-tenant civic-service platform
```

Future templates such as waste, drainage, roads, and facilities are hypotheses—not deployed offerings.

## Demo 2: MUN Alert compatibility concept

The MUN concept is presented as a humanitarian case console. It activates Voice, Customer Service, Content, Campaign, and Customer Success. Landing Page and Growth remain optional. It demonstrates:

- Minimal fictional report data
- No real child image or identity
- Bangla/English voice-report preparation
- Required-field and inconsistency checks
- Bilingual alert-copy preparation
- Privacy-aware public page and tip-form concepts
- A simulated Facebook/Messenger/Instagram reach package
- Family, authority, and closure follow-up
- An explicit authority-control workflow specification

The generated distribution package remains a specification. It does not unlock or perform social publication.

The demo does not verify a case, identify a child, accept a real report, contact an authority, connect to Meta, publish an alert, or claim an official MUN Alert relationship.

## Technology

- React, TypeScript, and Vite
- Lucide React icons
- Responsive CSS
- Typed local mock data
- Deterministic browser-only state

There is no backend, authentication, database, external API, AI model, social integration, or analytics service.

## Run locally

Requirements: Node.js 22 and npm 10 or newer are recommended.

```bash
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
├── ProductApp.tsx        Shell, views, and demo state
├── productData.ts        Workers, activities, compatibility mappings
├── product-styles.css    Design system and responsive presentation
├── main.tsx              React entry point
└── vite-env.d.ts         Vite declarations

docs/
└── PROJECT_WORKFLOW.md   State machines, safeguards, and QA workflow
```

## Interaction model

The local navigation states are:

```text
overview | workers | demos | nagar | mun | pitch
```

Both product interfaces use deterministic local state. Refreshing restores the training scenario.

NagarSathi tracks the selected case, applied triage, approved response, and AI-assistance panel state. The operator must apply the triage recommendation before a response can be approved.

The MUN console tracks a five-item human verification checklist and the states `review`, `authority`, `authorized`, and `closed`. The interface cannot move to authority review until every required check is completed. AI cannot complete the missing authority reference.

## Trust rules

- Keep every case and organization fictional.
- Never insert a real missing child’s identity or image.
- Do not imitate an official social or government interface deceptively.
- Keep the social preview watermarked and non-functional.
- Distinguish worker preparation from execution.
- Require human approval for consequential actions.
- Require an authority gate for humanitarian alerts.
- Never claim a partnership without written confirmation.
- Label metrics and outcomes as assumptions until validated.

## Recommended 3–5 minute presentation

1. Explain the workforce thesis on Overview.
2. Show the seven distinct civic artifacts.
3. Open NagarSathi and show the resident issue inside the operations dashboard.
4. Show its hackathon-to-platform expansion path.
5. Open the MUN console and show its different active workforce.
6. Complete the human checklist and show the authority gate.
7. Open the alert package and explain why distribution remains a controlled preview.
8. Close with the AI Collective evaluation criteria.

## Quality checklist

- Run `npm run build`.
- Confirm all navigation entries work.
- Search and open every worker role.
- Apply triage, review the insight, approve the response, and reset NagarSathi.
- Complete the checklist, return for correction, authorize, close, and reset the MUN concept.
- Confirm humanitarian outputs never claim verification or publication.
- Check desktop, tablet, and mobile layouts.
- Verify Bangla rendering.
- Confirm partner references remain proposals.
- Confirm no real child or resident data is present.

## Production boundaries

A real pilot requires authentication, permissions, durable case records, audit logs, privacy and retention controls, encryption, model evaluation, escalation procedures, integration agreements, safeguarding review, incident response, and measured baselines.

## Documentation

- [Detailed project workflow](docs/PROJECT_WORKFLOW.md)

## License

No open-source license has been selected. Treat the source and product material as private unless the owner provides different terms.
