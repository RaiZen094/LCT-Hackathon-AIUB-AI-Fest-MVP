# Project Workflow

This document explains how the AI Workforce Hub prototype tells its product story, how its frontend state moves, and how the current mock workflow can evolve into a production system.

## 1. Product objective

AI Workforce Hub presents a coordinated team of specialized AI workers. The prototype must make three ideas understandable:

1. The company provides an operating layer for delegated organizational work, not seven unrelated chatbots.
2. Different workers can coordinate around one service workflow while sharing context.
3. Humans remain accountable for consequential actions.

The product is demonstrated through a fictional Bangladesh waste-management scenario. It is not presented as a deployed customer system.

## 2. Audience journeys

### Product visitor

```text
Overview
  → AI Workers
  → Worker detail
  → Demo Workspaces
  → CleanDhaka
  → Run workflow
  → Review recommendation
  → Human approval
```

The visitor should understand the value proposition within the Overview, then see specialization in the worker directory and coordination in CleanDhaka.

### Hackathon judge

```text
Overview
  → Bangladesh Impact
  → Waste-management solution
  → CleanDhaka workflow
  → Sample impact dashboard
```

This journey connects the company thesis to a locally relevant problem while preserving careful prototype language.

### Investor or partner

```text
Investor View
  → Start Pitch
  → Problem
  → Buyer and user
  → Product thesis
  → Live CleanDhaka workflow
  → Differentiation
  → Business model
  → Proof and validation
  → Roadmap
  → Ask
```

Pitch progress is stored in browser `sessionStorage`. Opening the CleanDhaka demonstration and returning to Investor View restores the active pitch step.

### Prospective organization

```text
Workforce Tutorial
  → Describe organization
  → Describe service problem
  → Request recommendation
  → Review proposed worker team
```

The recommendation is deterministic. It demonstrates the intended onboarding experience without claiming live analysis.

## 3. Navigation workflow

`App` owns the active `View` value. The supported states are:

```text
overview
workers
workspaces
workspace
impact
tutorial
investor
```

Desktop navigation uses a persistent sidebar. On smaller screens the same navigation becomes a drawer with a dismissible backdrop.

When a user enters CleanDhaka, the application remembers the originating section. The workspace back action returns to that section, which supports both the normal workspace journey and the live investor-pitch journey.

## 4. CleanDhaka workflow

### Scenario

A fictional Mirpur resident reports that waste has not been collected for three days. The transcript is shown in English as an operator view of an original Bangla voice complaint.

### Initial state

```text
step = 0
running = false
approved = false
editing = false
status = Awaiting operator approval
```

### Run sequence

Clicking **Run AI Workforce**:

1. Clears any prior approval.
2. Resets the timeline to step zero.
3. Sets the workflow to running.
4. Advances through the typed `cleanDhakaActivity` array on a fixed timer.
5. Changes each worker from `Queued` to `Processing` to `Completed` or `Needs human approval`.
6. Stops after all seven stages.

| Stage | Worker | Simulated activity |
| --- | --- | --- |
| 1 | Voice Executive | Transcribes the resident complaint. |
| 2 | Customer Service Executive | Classifies it as missed collection. |
| 3 | Growth Analyst | Compares it with recent neighborhood trends. |
| 4 | Customer Success Executive | Schedules resident follow-up. |
| 5 | Content Executive | Drafts a waste-separation awareness post. |
| 6 | Digital Campaign Executive | Prepares a neighborhood campaign. |
| 7 | Landing Page Designer | Prepares a public complaint-form concept. |

These are visual state transitions only. No model, transcription service, campaign platform, or messaging channel is called.

### Recommendation state

The recommendation panel contains:

- Priority and owner
- Next operational step
- English response
- Bangla response
- Human-approval requirement
- Approval, editing, and reset controls

Approval is disabled until the simulated timeline completes. Approving changes only local UI state and explicitly confirms that nothing was sent.

### Reset behavior

Clicking **Reset demo** restores:

```text
step = 0
running = false
approved = false
editing = false
```

The workflow can then be run again without a page refresh.

### Value narrative

The workspace connects the interface to a pilot hypothesis:

```text
User problem
  → Workflow bottleneck
  → AI intervention
  → Human decision
  → Operational value
  → Metric to validate
```

Potential value is deliberately phrased as a hypothesis. Suggested pilot measures include time to triage, time to approved response, resolution rate, repeat complaints, and operator time per issue.

## 5. Worker-directory workflow

The worker directory reads typed records from `src/data.ts`.

```text
Worker data
  → Text query filter
  → Capability-group filter
  → Worker cards
  → Detail modal
  → Activate for demo
  → CleanDhaka workspace
```

Each worker detail includes example tasks, typical inputs, typical outputs, and simulated recent activity. The Voice Executive additionally displays its input-to-approval process.

Worker categories are interface filters, not persisted classifications or access-control groups.

## 6. Workspace and impact workflows

### Demo Workspaces

- CleanDhaka opens the complete interactive workflow.
- KrishiBondhu, ReliefLink Bangladesh, and LocalMart BD open lightweight concept previews.
- Every organization is fictional and labeled as an active or concept demo.

### Bangladesh Impact

- Waste collection opens the developed CleanDhaka solution.
- Other problem areas open concept modals.
- Language emphasizes potential applications and simulated solutions.

## 7. Tutorial workflow

The tutorial starts with CleanDhaka sample values. Users may edit:

- Organization name and type
- Bangladesh location
- Main problem
- Target users
- Preferred language
- Current channel
- Main goal

Submitting the form displays a fixed six-worker recommendation. **Try sample problem** restores the original values and hides the previous result.

The form does not score inputs, contact a service, or persist organization information.

## 8. Investor Pitch Mode

Pitch Mode has two states:

- **Dashboard state:** All investor sections are visible for free exploration.
- **Presentation state:** One numbered section is visible with previous/next controls.

The nine stages are designed to support a 3–5 minute conversation:

| Step | Investor question answered |
| --- | --- |
| Problem | What painful workflow exists, and why now? |
| Buyer and user | Who pays, who operates it, and who benefits? |
| Product thesis | How does the operating layer work? |
| Live demo | What exists today? |
| Why we win | Why not manual labor, a chatbot, SaaS tools, or custom automation? |
| Business model | How might the company charge? |
| Proof | What is built, shown, and still unvalidated? |
| Roadmap | What must happen before a scalable platform exists? |
| Ask | What support and milestones are being proposed? |

### Editable investor fields

The following values intentionally require founder input:

- Target market size
- Current traction
- Pilot organizations
- Pricing by tier
- Customer-interview count
- Active pilots
- Time saved
- Revenue
- Funding, pilot, or partnership ask
- Three milestones

Inputs are local and temporary. Placeholder text must not be interpreted as product data or fundraising disclosure.

## 9. Data model

`src/data.ts` is the single source for replaceable demo content.

### `Worker`

Contains identity, name, description, tags, visual accent, example tasks, typical inputs and outputs, and recent simulated activity.

### `Workspace`

Contains fictional organization context, active worker IDs, objective, demo status, and sample activity count.

### `Problem`

Contains the impact-area title, affected population, example location, relevant workers, potential outcome, and solution readiness.

### Other typed collections

- `cleanDhakaActivity`
- `metrics`
- `tutorialDefaults`
- `tutorialRecommendation`

UI components refer to workers by `WorkerId`, reducing accidental inconsistency between screens.

## 10. Trust and data boundaries

### Current safeguards in the interface

- Consequential recommendations require human approval.
- Agent activity is visibly staged.
- No action is described as sent or executed.
- Prototype and demo labels appear throughout the application.
- No personal contact, payment, or credential data is shown.
- Unknown investor facts remain explicit placeholders.

### Not implemented

- Identity and access management
- Durable or tamper-resistant audit logs
- Data retention controls
- Organization-level isolation
- Encryption and secrets management
- Confidence calibration
- Automated uncertainty escalation
- Model evaluation and monitoring

These omissions are appropriate for the frontend MVP but must become explicit engineering work before any real pilot processes customer or resident data.

## 11. Development workflow

### Make a content change

1. Identify whether the content belongs in reusable mock data or view-specific narrative.
2. Prefer `src/data.ts` for workers, workspaces, problems, activities, and metrics.
3. Keep trust labels beside new fictional data.
4. Run the production build.
5. Walk the affected presentation journey.

### Add an interaction

1. Define the initial, active, completed, error, and reset states.
2. Keep the interaction deterministic unless a real integration is explicitly in scope.
3. Provide accessible button labels and visible focus states.
4. Ensure the interaction works with keyboard navigation.
5. Verify mobile layout and reduced-motion behavior.

### Required verification

```bash
npm run build
```

Then verify manually:

```text
Navigation
Worker search and filters
Worker modals
Workspace concept modals
CleanDhaka run / approve / edit / rerun / reset
Bangladesh impact concepts
Tutorial submit / restore sample
Pitch Mode steps and live-demo return
Responsive layouts
Bangla rendering
Prototype labels and claims
```

## 12. Migration to production

The recommended migration is incremental.

### Phase 1: service boundary

- Move mock data access behind typed repository or service functions.
- Add runtime validation for API responses.
- Retain a demo-data adapter for offline presentation mode.

### Phase 2: identity and tenancy

- Add authentication.
- Define organization, workspace, user, and role models.
- Add permissions before introducing live customer data.

### Phase 3: orchestration

- Replace fixed timers with server-owned workflow runs.
- Record stage inputs, outputs, confidence, approvals, and failures.
- Make every external side effect idempotent and auditable.

### Phase 4: integrations

- Add one narrow inbound channel for a real pilot.
- Route outbound actions through explicit approval.
- Add retry, rate-limit, and failure-handling policies.

### Phase 5: measurement

- Establish pilot baselines before deployment.
- Track operational outcomes rather than vanity metrics.
- Separate model quality, workflow efficiency, customer value, and social impact.

### Phase 6: platform controls

- Add governance, retention, privacy, audit export, usage metering, and billing.
- Validate multi-tenant isolation and incident-response processes.

## 13. Definition of a successful prototype presentation

A presentation succeeds when the audience can answer all of the following:

- What does AI Workforce Hub do?
- Why are several coordinated workers better than one isolated chatbot?
- Who buys, who operates, and who benefits?
- How does CleanDhaka move from complaint to approval?
- Which evidence is real today, and which outcomes still require validation?
- How could the approach expand beyond one workflow?
- What founder information and pilot work are needed next?

If any answer is unclear, improve the narrative or interaction before adding more product surface area.
