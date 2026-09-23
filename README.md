# AI Workforce Hub

AI Workforce Hub is a presentation-ready frontend prototype for a company that provides specialized AI workers that help organizations operate, serve, and grow.

The product thesis is simple:

> We are not building seven separate AI features. We are demonstrating one coordinated AI workforce that can be deployed across multiple organizational workflows.

The application combines a company showcase, a Bangladesh-focused impact demonstration, and an investor presentation mode. Its primary scenario is a fictional waste-management organization called **CleanDhaka Services**.

> **Prototype notice:** Every organization, activity, recommendation, and metric in this repository is illustrative demo content. The application does not use real customer data, run production AI agents, or send messages to external systems.

## What the prototype demonstrates

- A clear AI-workforce product proposition
- Seven specialized worker profiles
- Searchable and filterable worker discovery
- Fictional demo workspaces for several Bangladesh contexts
- A staged CleanDhaka complaint-response workflow
- Agent-by-agent activity and status transitions
- English and Bangla response preparation
- A required human approval step
- Sample operational and impact metrics
- A guided workforce-configuration tutorial
- An editable, nine-step investor Pitch Mode
- Responsive desktop, tablet, and mobile layouts

## Technology

- React
- TypeScript
- Vite
- Lucide React icons
- Hand-authored responsive CSS
- Local React state and typed mock data

There is no backend, authentication, database, analytics service, payment system, or external AI integration.

## Quick start

### Requirements

- Node.js 22 recommended
- npm 10 or newer

### Installation

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will print the local URL, normally `http://localhost:5173`.

### Create a production build

```bash
npm run build
```

The optimized output is generated in `dist/`.

### Preview the production build

```bash
npm run preview
```

## Application sections

| Section | Purpose |
| --- | --- |
| Overview | Introduces the company, positioning, seven-worker system, and featured demo. |
| AI Workers | Provides searchable worker cards and detailed capability modals. |
| Demo Workspaces | Shows fictional configurations for multiple Bangladesh use cases. |
| CleanDhaka Response Hub | Runs the primary simulated multi-worker workflow. |
| Bangladesh Impact | Connects the product thesis to potential local applications. |
| Workforce Tutorial | Recommends a worker team from a locally managed organization profile. |
| Investor View | Explains the buyer, thesis, differentiation, business model, proof, roadmap, and ask. |

## The seven AI workers

| Worker | Responsibility in the prototype |
| --- | --- |
| Content Executive | Plans educational and bilingual content. |
| Digital Campaign Executive | Prepares outreach and engagement campaigns. |
| Customer Service Executive | Classifies issues and prepares responses and routing. |
| Landing Page Designer | Prepares web and public-form concepts. |
| Customer Success Executive | Plans follow-up and feedback journeys. |
| Growth Analyst | Reviews patterns, metrics, and operational opportunities. |
| Voice Executive | Structures Bangla or English voice complaints. |

## Primary CleanDhaka workflow

```text
Resident voice complaint
        ↓
Voice Executive structures the input
        ↓
Customer Service Executive classifies the issue
        ↓
Growth Analyst reviews simulated neighborhood trends
        ↓
Customer Success Executive prepares follow-up
        ↓
Content and Campaign workers prepare awareness activity
        ↓
Landing Page Designer prepares a complaint-form concept
        ↓
Bilingual recommendation prepared for operator approval
        ↓
Human approves, edits, or resets the local demo
```

The animation is deterministic and runs entirely in the browser. Nothing is transmitted or automatically executed.

For the detailed state model and product workflow, see [Project Workflow](docs/PROJECT_WORKFLOW.md).

## Project structure

```text
AI Workforce Hub/
├── docs/
│   └── PROJECT_WORKFLOW.md    Product, UI, demo, and migration workflow
├── src/
│   ├── App.tsx               Shell, views, components, and local interactions
│   ├── data.ts               Typed workers, workspaces, problems, and demo data
│   ├── main.tsx              React entry point
│   ├── styles.css            Design system and responsive layouts
│   └── vite-env.d.ts         Vite type declarations
├── INVESTOR_AUDIT.md         Investor-readiness findings and founder inputs
├── index.html                Application document
├── package.json              Scripts and dependencies
├── tsconfig*.json            TypeScript configuration
└── vite.config.ts            Vite configuration
```

## Architecture

The MVP deliberately uses a small frontend-only architecture:

```text
Typed mock data (`src/data.ts`)
               ↓
Reusable view components (`src/App.tsx`)
               ↓
Local React state and deterministic timers
               ↓
Responsive presentation layer (`src/styles.css`)
```

Main navigation uses a `View` union and local state rather than a routing dependency. Modals, tutorial results, worker filtering, recommendation approval, and the CleanDhaka timeline are also managed locally.

### Important state boundaries

- Reloading the page resets normal demo state.
- Pitch progress is temporarily stored in `sessionStorage` so a presenter can open CleanDhaka and return to the same pitch step.
- Editable investor placeholders are local component state and are not permanently saved.
- No local or remote customer records are created.

## Real, simulated, and planned

### Real in this MVP

- User interface and responsive layouts
- Worker profiles and typed content model
- Navigation and presentation flow
- Local approval, editing, reset, and recommendation states
- Investor narrative and editable planning fields

### Simulated

- Organizations and complaints
- AI processing and agent activity
- Recommendations and campaign preparation
- Operational and impact metrics
- Proof, traction, pricing, and pilot information not supplied by the founders

### Planned production capabilities

- Authentication and role-based access
- Databases and organization tenancy
- Real model and orchestration services
- Bangla voice and text evaluation
- Phone, messaging, email, and social integrations
- Durable workflow logs and audit trails
- Privacy controls, permissions, and governance
- Outcome analytics, usage metering, and billing

## Investor View

Select **Investor View** and then **Start Pitch** to enter the guided presentation. The sequence is:

1. Problem
2. Buyer and user
3. Product thesis
4. Live CleanDhaka workflow
5. Why coordinated workers win
6. Business model
7. Proof and validation
8. Roadmap
9. Ask

Fields marked **Editable** contain either planning assumptions or explicit placeholders. Replace them only with verified founder information. Do not insert invented market figures, customers, revenue, pilot results, or performance claims.

## Recommended demo script

For a 3–5 minute walkthrough:

1. Spend 20–30 seconds on the Overview and product proposition.
2. Open AI Workers and explain specialization and shared workflow context.
3. Open CleanDhaka from Demo Workspaces.
4. Click **Run AI Workforce** and narrate the seven activity stages.
5. Point out the bilingual response and mandatory human approval.
6. Approve or edit the recommendation and show the sample metrics.
7. Open Investor View for the buyer, differentiation, validation plan, and ask.

## Content and trust rules

When changing demo copy:

- Label fictional data as `Demo`, `Sample`, `Simulated`, `Prototype`, or `Placeholder`.
- Say a worker **prepared**, **drafted**, or **recommended** an action unless an integration actually executed it.
- Never imply that a fictional organization is a customer.
- Never add fake testimonials, logos, revenue, adoption, model accuracy, or impact figures.
- Keep consequential actions behind human approval.
- Use `[INSERT ...]` placeholders when verified founder data is unavailable.

## Extending the prototype

### Add or change a worker

1. Update the `WorkerId` union in `src/data.ts`.
2. Add or edit the typed worker record in `workers`.
3. Add the worker icon mapping in `src/App.tsx`.
4. Update any workspace, problem, timeline, or tutorial references.
5. Confirm that all seven-worker assumptions and pitch copy remain accurate.

### Add a demo workspace

1. Add a typed item to `workspaces` in `src/data.ts`.
2. Use only fictional or approved organization information.
3. Add a dedicated workflow view only when it has meaningful interactions.
4. Label its status as an active demo or concept demo.

### Replace mock data with an API later

Keep the existing TypeScript data shapes as an initial contract. Introduce a service layer between UI components and the data source rather than calling external APIs directly throughout the views. Preserve deterministic fallback data for presentations and offline demos.

## Quality checklist

Before presenting or merging changes:

- Run `npm run build`.
- Test every primary navigation item.
- Open all worker details and concept modals.
- Run, approve, edit, rerun, and reset CleanDhaka.
- Test the tutorial recommendation and sample reset.
- Step through all nine Pitch Mode screens.
- Confirm investor placeholders still look like placeholders.
- Check layouts at laptop, tablet, and mobile widths.
- Verify Bangla copy renders correctly.
- Confirm no production or customer claim was introduced.

## Known limitations

- The application is intentionally a single-page prototype without URL routing.
- Investor field edits are not persisted beyond component lifetime.
- Search, filtering, and recommendations are deterministic.
- The CleanDhaka timeline uses fixed browser timers, not AI execution.
- There are currently no automated unit or end-to-end tests.
- Remote font loading may fall back to system fonts when offline; functionality is unaffected.

## Supporting documentation

- [Project workflow and state model](docs/PROJECT_WORKFLOW.md)
- [Investor-readiness audit](INVESTOR_AUDIT.md)

## License and ownership

No open-source license has been selected. Treat the source and product content as private project material unless the project owner provides different terms.
