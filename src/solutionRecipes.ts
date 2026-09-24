import type { DemoProject, WorkerId } from './productData'

export type SolutionRecipe = {
  id: string
  title: string
  category: string
  problem: string
  audience: string
  outcome: string
  relevance: string
  core: WorkerId[]
  optional: WorkerId[]
  reasons: Partial<Record<WorkerId, string>>
  relatedDemo?: DemoProject['id']
}

export const solutionRecipes: SolutionRecipe[] = [
  {
    id: 'waste-reporting',
    title: 'Neighborhood waste reporting',
    category: 'Public service',
    problem: 'Residents need an easy way to report missed waste collection and receive a clear update.',
    audience: 'Residents and city service teams',
    outcome: 'A verified case, clear ownership, and a useful follow-up message',
    relevance: 'The challenge is not only collecting a complaint. Voice intake, case routing, ownership, and follow-up are different jobs that must stay connected.',
    core: ['voice', 'service', 'success'],
    optional: ['growth', 'content', 'landing'],
    relatedDemo: 'nagar',
    reasons: {
      voice: 'Makes reporting possible through a simple voice message.',
      service: 'Turns the report into a prioritized case for the right team.',
      success: 'Keeps the resident informed until the case is closed.',
      growth: 'Finds repeated service gaps across neighborhoods.',
      content: 'Prepares clear public guidance in Bangla and English.',
      landing: 'Adds a simple form and case status page.',
    },
  },
  {
    id: 'farmer-advice',
    title: 'Farmer advisory service',
    category: 'Rural development',
    problem: 'Farmers need to ask questions in their own voice and receive understandable, reviewed guidance.',
    audience: 'Smallholder farmers and field officers',
    outcome: 'A structured question, reviewed guidance, and timely follow-up',
    relevance: 'Farmers need an accessible way to ask, while specialists need structured information to review. Separate workers can connect speaking, routing, approved guidance, and follow-up.',
    core: ['voice', 'service', 'content', 'success'],
    optional: ['landing', 'growth', 'campaign'],
    reasons: {
      voice: 'Captures questions when typing is difficult.',
      service: 'Classifies the need and routes it to the right specialist.',
      content: 'Turns approved facts into accessible local-language guidance.',
      success: 'Sends reminders and checks whether the advice helped.',
      landing: 'Provides a lightweight information and request page.',
      growth: 'Shows which questions and locations need more support.',
      campaign: 'Plans seasonal awareness messages for farming communities.',
    },
  },
  {
    id: 'flood-coordination',
    title: 'Community flood coordination',
    category: 'Climate resilience',
    problem: 'Local flood reports arrive in different formats and communities need verified updates quickly.',
    audience: 'Residents, volunteers, and response coordinators',
    outcome: 'A verified situation picture and coordinated community communication',
    relevance: 'Flood response involves many changing reports. Workers can organize incoming information, support verification, prepare approved updates, and coordinate communication without replacing responders.',
    core: ['voice', 'service', 'content', 'campaign', 'success'],
    optional: ['landing', 'growth'],
    relatedDemo: 'flood',
    reasons: {
      voice: 'Converts local voice reports into structured observations.',
      service: 'Sorts reports by urgency and recommends verification.',
      content: 'Prepares approved bilingual situation updates.',
      campaign: 'Coordinates the message across appropriate local channels.',
      success: 'Manages follow-up, escalation, and closure messages.',
      landing: 'Adds a public status and resource page.',
      growth: 'Reviews response patterns after the event.',
    },
  },
  {
    id: 'public-grievance',
    title: 'Public grievance support',
    category: 'Public service',
    problem: 'People need a clear way to submit a grievance, understand its status, and know who is responsible.',
    audience: 'Citizens and public-service operators',
    outcome: 'A traceable request with responsible routing and status updates',
    relevance: 'A useful grievance service must do more than accept a form. It must structure the request, identify responsibility, communicate progress, and preserve human accountability.',
    core: ['landing', 'service', 'success'],
    optional: ['voice', 'growth', 'content'],
    reasons: {
      landing: 'Creates an accessible submission and status experience.',
      service: 'Categorizes the grievance and recommends ownership.',
      success: 'Prepares acknowledgements, reminders, and closure updates.',
      voice: 'Adds an alternative for people who prefer speaking.',
      growth: 'Identifies recurring grievance themes and service delays.',
      content: 'Makes instructions and policies easier to understand.',
    },
  },
  {
    id: 'small-business',
    title: 'Local business customer journey',
    category: 'Small business',
    problem: 'A small business needs to attract customers, handle inquiries, and learn what improves repeat business.',
    audience: 'Small business owners and their customers',
    outcome: 'A connected journey from discovery to service and repeat business',
    relevance: 'Marketing, customer inquiries, service, and retention are connected but distinct business tasks. Focused workers let a small team coordinate them as one customer journey.',
    core: ['landing', 'content', 'campaign', 'service', 'success'],
    optional: ['voice', 'growth'],
    reasons: {
      landing: 'Creates a simple place to understand the offer and inquire.',
      content: 'Explains products and services clearly.',
      campaign: 'Plans how to reach the most relevant local audience.',
      service: 'Organizes inquiries and recommends the next response.',
      success: 'Keeps customers informed and follows up after service.',
      voice: 'Captures spoken customer questions and order details.',
      growth: 'Finds patterns in inquiries, sales, and repeat customers.',
    },
  },
  {
    id: 'awareness-campaign',
    title: 'Community awareness campaign',
    category: 'Public engagement',
    problem: 'A community program needs to explain an issue clearly and reach the right people through trusted channels.',
    audience: 'Community members and program teams',
    outcome: 'Approved information, a focused outreach plan, and measurable learning',
    relevance: 'Awareness does not come from publishing one message. Teams need accurate content, suitable channels, audience follow-up, and evidence of what people understood or acted on.',
    core: ['content', 'campaign', 'growth'],
    optional: ['landing', 'voice', 'success'],
    reasons: {
      content: 'Turns approved facts into clear bilingual messages.',
      campaign: 'Selects the audience, channels, and message sequence.',
      growth: 'Defines practical measures and shows what to improve.',
      landing: 'Creates one reliable place for information and action.',
      voice: 'Collects questions and reactions from the community.',
      success: 'Prepares reminders and follow-up for participants.',
    },
  },
]
