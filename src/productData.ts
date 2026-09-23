export type WorkerId = 'voice' | 'service' | 'growth' | 'success' | 'content' | 'campaign' | 'landing'

export type Worker = {
  id: WorkerId
  name: string
  civicRole: string
  description: string
  capabilities: string[]
  accent: string
}

export const workers: Worker[] = [
  { id:'voice', name:'Voice Executive', civicRole:'Accessible intake', description:'Turns Bangla or English voice reports into structured, reviewable records.', capabilities:['Bangla + English','Transcription','Missing-field detection'], accent:'#e879e7' },
  { id:'service', name:'Customer Service Executive', civicRole:'Case triage', description:'Classifies, prioritizes, and routes service issues or humanitarian reports.', capabilities:['Classification','Priority','Routing'], accent:'#19c7d9' },
  { id:'growth', name:'Growth Analyst', civicRole:'Impact intelligence', description:'Defines pilot metrics, finds patterns, and prepares operational insights.', capabilities:['Metrics','Trends','Validation'], accent:'#f4b740' },
  { id:'success', name:'Customer Success Executive', civicRole:'Resolution follow-up', description:'Designs follow-up, escalation, feedback, and responsible closure journeys.', capabilities:['Follow-up','Escalation','Closure'], accent:'#39d98a' },
  { id:'content', name:'Content Executive', civicRole:'Public information', description:'Prepares factual bilingual service information and educational content.', capabilities:['Bangla copy','Education','Templates'], accent:'#a98bff' },
  { id:'campaign', name:'Digital Campaign Executive', civicRole:'Community reach', description:'Prepares responsible, location-aware public outreach and distribution plans.', capabilities:['Distribution','Outreach','Engagement'], accent:'#ff8e64' },
  { id:'landing', name:'Landing Page Designer', civicRole:'Public interface', description:'Creates accessible forms, public pages, status views, and operator experiences.', capabilities:['Forms','Public UX','Accessibility'], accent:'#4ea1ff' },
]

export const getWorker = (id: WorkerId) => workers.find(worker => worker.id === id)!

export type Activity = { worker: WorkerId; action: string; output: string; approval?: boolean }

export const nagarActivities: Activity[] = [
  { worker:'voice', action:'Structured the resident voice complaint', output:'Bilingual intake record' },
  { worker:'service', action:'Classified and prioritized the service issue', output:'Missed collection • Medium-high' },
  { worker:'growth', action:'Prepared the pilot measurement framework', output:'Triage, resolution, repeat-report metrics' },
  { worker:'success', action:'Designed the resident follow-up journey', output:'Update, confirmation, feedback, closure' },
  { worker:'content', action:'Drafted bilingual public information', output:'Service response + separation guidance', approval:true },
  { worker:'campaign', action:'Prepared neighborhood participation outreach', output:'Mirpur cleanliness campaign plan', approval:true },
  { worker:'landing', action:'Prepared the public reporting experience', output:'Mobile complaint form + status view', approval:true },
]

export const munActivities: Activity[] = [
  { worker:'voice', action:'Converted the fictional voice report into a draft', output:'Unconfirmed structured transcript' },
  { worker:'service', action:'Checked required fields and inconsistencies', output:'Verification checklist + case draft' },
  { worker:'growth', action:'Prepared coverage and response measurements', output:'Timing, reach, tip-quality framework' },
  { worker:'content', action:'Drafted factual Bangla and English alert copy', output:'Authority-review alert package', approval:true },
  { worker:'landing', action:'Prepared a privacy-aware public case page', output:'Alert page + secure tip-form concept', approval:true },
  { worker:'campaign', action:'Prepared the simulated Facebook reach plan', output:'Geo-aware feed, Messenger, and story formats', approval:true },
  { worker:'success', action:'Prepared family, authority, and closure follow-up', output:'Update and responsible closure checklist', approval:true },
]

export const civicCompatibility = [
  ['Waste & neighborhood services',['voice','service','success','content','campaign','landing','growth']],
  ['Missing-child alert support',['voice','service','content','campaign','landing','success','growth']],
  ['Flood preparedness',['voice','content','campaign','success','growth']],
  ['Farmer advisory intake',['voice','service','content','growth']],
  ['Public grievance management',['voice','service','success','landing','growth']],
] as [string,WorkerId[]][]
