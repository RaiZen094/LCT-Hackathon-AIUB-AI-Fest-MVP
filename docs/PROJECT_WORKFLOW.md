# Ezassist Prototype Workflow

## Product objective

Help a first-time visitor answer two questions quickly:

1. What does each Ezassist AI worker do for a business or service team?
2. How can selected workers combine inside a solution for a real problem?

The experience is an interactive prototype. It does not demonstrate production AI execution.

## Information architecture

```text
Overview
AI Workers
Solution Demos
Hackathon Fit
```

The overview provides the mental model. The worker browser explains individual roles. The guided demos show orchestration. Hackathon Fit connects the concept to the event tracks.

## SME introduction flow

The worker area first shows one complete small-business journey. A fictional neighborhood bakery uses all seven workers to create an order page, explain products, reach local customers, capture inquiries, handle requests, follow up, and learn from results.

The visitor can move backward and forward through the story. Each stage shows one worker action and one business result.

## Worker explanation model

Every worker uses the same five-part explanation:

```text
Business need
Receives
Does
Produces
Human checkpoint
```

This keeps the content comparable and avoids capability lists without business context.

## Guided demo model

Each project is divided into a short beginner-friendly story. A story section contains:

```text
The situation
Worker helping now
How Ezassist helps
Simulated example
Why it is useful
What a person still decides
```

The visitor reviews each moment and continues to the next worker. Completing the flow shows a local success state. No external action occurs.

## NagarSathi flow

```text
Bangla voice report
-> Voice Executive prepares a structured case
-> Customer Service Executive recommends priority and ownership
-> Growth Analyst surfaces a pattern for validation
-> Customer Success Executive prepares the resident update
-> Operator controls every consequential action
```

## FloodReady flow

```text
Local flood observation
-> Voice Executive prepares a situation report
-> Customer Service Executive separates facts from gaps
-> Content Executive drafts a bilingual update
-> Digital Campaign Executive prepares an outreach sequence
-> Customer Success Executive prepares follow-up and closure
-> Responsible people verify, publish, correct, and close
```

## Prototype safeguards

- Use fictional scenarios and generalized locations.
- Label outputs as simulated.
- Do not imply that an AI worker verified a real-world event.
- Keep publication, assignment, escalation, and closure under human control.
- Do not claim production integrations or measured outcomes.

## Manual verification

- All four top navigation items open correctly.
- Mobile navigation opens and closes.
- Every worker selector changes the detail panel.
- Worker content includes receives, does, produces, and human checkpoint.
- Both guided demos allow direct moment selection.
- Review and continue advances through the workflow.
- Run again returns the demo to its initial state.
- Text remains readable at common projector resolution.
- Bangla text renders correctly.
- Focus indicators are visible for keyboard users.
- Reduced-motion settings disable nonessential motion.
- `npm run build` completes successfully.

## Production migration

A production version would require authenticated users, role-based permissions, durable workflow records, audit events, data minimization, encryption, model evaluation, error recovery, partner-approved policies, and monitored integrations.
# Participant matching flow

The Build Your Team page uses predefined solution recipes so the prototype remains predictable and honest. A participant:

1. Chooses the closest problem pattern.
2. Customizes the solution name and problem statement.
3. Reviews the recommended core worker handoff.
4. Adds optional workers only when useful.
5. Prints or saves a one-page solution map.

The matcher does not call an AI model. Recipe changes reset optional workers and move the detail view to the first core worker.
