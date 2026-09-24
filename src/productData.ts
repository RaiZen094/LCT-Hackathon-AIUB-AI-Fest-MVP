export type WorkerId = 'voice' | 'service' | 'growth' | 'success' | 'content' | 'campaign' | 'landing'

export type Worker = {
  id: WorkerId
  name: string
  shortName: string
  businessNeed: string
  input: string
  work: string
  output: string
  humanCheck: string
  accent: string
}

export const workers: Worker[] = [
  { id: 'voice', name: 'Voice Executive', shortName: 'Voice', businessNeed: 'Make services accessible when typing is difficult or inconvenient.', input: 'Bangla or English voice message', work: 'Transcribes, translates, and extracts the important facts.', output: 'A structured, reviewable intake record', humanCheck: 'A person confirms the transcript and consent.', accent: '#e879e7' },
  { id: 'service', name: 'Customer Service Executive', shortName: 'Service', businessNeed: 'Reduce slow and inconsistent handling of incoming requests.', input: 'A confirmed customer or citizen request', work: 'Classifies the request, checks urgency, and recommends ownership.', output: 'A prioritized case with a suggested next action', humanCheck: 'An operator reviews the recommendation before assignment.', accent: '#34c9d4' },
  { id: 'growth', name: 'Growth Analyst', shortName: 'Growth', businessNeed: 'Turn activity into decisions that improve adoption and outcomes.', input: 'Workflow activity and agreed success measures', work: 'Finds patterns, defines pilot metrics, and prepares insights.', output: 'A focused measurement and learning plan', humanCheck: 'A decision maker validates the data and interpretation.', accent: '#f4b740' },
  { id: 'success', name: 'Customer Success Executive', shortName: 'Success', businessNeed: 'Keep people informed from the first request through resolution.', input: 'Case status, commitments, and user context', work: 'Prepares updates, reminders, escalation, feedback, and closure.', output: 'A complete follow-up journey', humanCheck: 'The responsible team approves messages and closure.', accent: '#56d39a' },
  { id: 'content', name: 'Content Executive', shortName: 'Content', businessNeed: 'Explain services clearly across Bangla and English channels.', input: 'Approved facts, audience, and communication goal', work: 'Drafts factual, audience-appropriate content and templates.', output: 'Bilingual information ready for review', humanCheck: 'A subject owner approves facts and tone.', accent: '#9b8cf2' },
  { id: 'campaign', name: 'Digital Campaign Executive', shortName: 'Campaign', businessNeed: 'Reach the right community with coordinated communication.', input: 'Approved message, audience, location, and channels', work: 'Builds the channel plan, audience plan, and content sequence.', output: 'A responsible outreach plan', humanCheck: 'A campaign owner approves budget, targeting, and publishing.', accent: '#f58b69' },
  { id: 'landing', name: 'Landing Page Designer', shortName: 'Interface', businessNeed: 'Give users a simple place to understand and complete a task.', input: 'User goal, required fields, content, and brand guidance', work: 'Structures accessible forms, pages, status views, and interfaces.', output: 'A reviewable interface prototype', humanCheck: 'A product owner validates accessibility and requirements.', accent: '#579bf4' },
]

export const getWorker = (id: WorkerId) => workers.find(worker => worker.id === id)!

export type DemoStep = {
  id: string
  navLabel: string
  worker: WorkerId
  title: string
  plainAction: string
  input: string
  output: string
  value: string
  decision: string
}

export type DemoProject = {
  id: 'nagar' | 'flood'
  name: string
  problem: string
  audience: string
  track: string
  result: string
  workers: WorkerId[]
  steps: DemoStep[]
}

export const demoProjects: DemoProject[] = [
  {
    id: 'nagar',
    name: 'NagarSathi',
    problem: 'Residents struggle to report and track missed waste collection.',
    audience: 'City service teams and residents',
    track: 'Smart Society & Public Services',
    result: 'A clear route from voice report to reviewed service response.',
    workers: ['voice', 'service', 'growth', 'success'],
    steps: [
      { id: 'intake', navLabel: 'Voice report', worker: 'voice', title: 'Turn a voice report into a case', plainAction: 'The resident speaks in Bangla. Voice Executive creates a structured English operator record.', input: 'A resident reports that waste has not been collected for three days.', output: 'A simple case with the issue, location, delay, and concern', value: 'Residents can report naturally without navigating a complex form.', decision: 'Operator confirms the transcript and location.' },
      { id: 'triage', navLabel: 'Triage', worker: 'service', title: 'Recommend priority and ownership', plainAction: 'Customer Service Executive checks the confirmed report and recommends how the case should be handled.', input: 'The confirmed waste-service case', output: 'A suggested priority, responsible team, and response time', value: 'Service teams receive consistent cases instead of unstructured messages.', decision: 'Coordinator approves or edits priority and ownership.' },
      { id: 'insight', navLabel: 'Find a pattern', worker: 'growth', title: 'Reveal a service pattern', plainAction: 'Growth Analyst compares the case with the fictional pilot activity.', input: 'Recent simulated cases from the same service zone', output: 'A possible repeated collection problem to investigate', value: 'Teams can address recurring service issues, not only individual complaints.', decision: 'Analyst validates the pattern against real records.' },
      { id: 'followup', navLabel: 'Resident update', worker: 'success', title: 'Prepare the resident update', plainAction: 'Customer Success Executive drafts a clear response and follow-up checkpoint.', input: 'The reviewed case and coordinator commitment', output: 'A bilingual status update and resolution reminder', value: 'Residents know what will happen next and when to expect an update.', decision: 'Operator edits and approves the message before sending.' },
    ],
  },
  {
    id: 'flood',
    name: 'FloodReady',
    problem: 'Local flood reports arrive through different channels and are difficult to coordinate.',
    audience: 'Community response teams and affected residents',
    track: 'Climate Resilience & Environmental Sustainability',
    result: 'A reviewed local update and communication plan from one community report.',
    workers: ['voice', 'service', 'content', 'campaign', 'success'],
    steps: [
      { id: 'report', navLabel: 'Local report', worker: 'voice', title: 'Structure a community report', plainAction: 'Voice Executive turns a Bangla voice message into a reviewable situation report.', input: 'A caller reports rising water near a fictional school road.', output: 'A clear summary with the area, condition, time, and uncertainty', value: 'Local observations become usable without losing uncertainty.', decision: 'A response volunteer confirms the report with the caller.' },
      { id: 'check', navLabel: 'Check facts', worker: 'service', title: 'Check urgency and missing facts', plainAction: 'Customer Service Executive separates reported facts from information that still needs confirmation.', input: 'The caller record and situation draft', output: 'A short list of confirmed facts and unanswered questions', value: 'The team sees what is known before communicating publicly.', decision: 'A designated coordinator sets the response level.' },
      { id: 'message', navLabel: 'Write update', worker: 'content', title: 'Draft a safe bilingual update', plainAction: 'Content Executive uses approved facts only and clearly labels uncertainty.', input: 'Approved facts and local safety guidance', output: 'A Bangla and English community update for review', value: 'Public information stays clear, consistent, and locally usable.', decision: 'The responsible authority approves every factual statement.' },
      { id: 'reach', navLabel: 'Plan reach', worker: 'campaign', title: 'Prepare the outreach plan', plainAction: 'Digital Campaign Executive recommends channels and an update sequence for the affected community.', input: 'The approved update, target area, and available channels', output: 'A simple sequence for community groups, SMS, and social channels', value: 'One approved message can be adapted without creating conflicting versions.', decision: 'A human owner approves channels and publication.' },
      { id: 'close', navLabel: 'Follow up', worker: 'success', title: 'Plan follow-up and closure', plainAction: 'Customer Success Executive prepares checkpoints for updates, correction, and resolution.', input: 'The communication record and field-team feedback', output: 'An update, correction, and closure checklist', value: 'The workflow continues after the first announcement.', decision: 'The response lead confirms when the case can be closed.' },
    ],
  },
]

export const getProject = (id: DemoProject['id']) => demoProjects.find(project => project.id === id)!
