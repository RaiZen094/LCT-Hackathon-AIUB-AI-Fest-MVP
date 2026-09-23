export type WorkerId = 'content' | 'campaign' | 'service' | 'landing' | 'success' | 'growth' | 'voice'

export type Worker = {
  id: WorkerId; name: string; shortName: string; description: string; tags: string[]; accent: string
  tasks: string[]; inputs: string; outputs: string; activity: string[]
}

export const workers: Worker[] = [
  { id:'content', name:'Content Executive', shortName:'Content', description:'Plan, organize, and publish content workflows.', tags:['Content planning','Bangla copy','Education'], accent:'#a98bff', tasks:['Draft bilingual education posts','Build a monthly content plan','Adapt service updates for residents'], inputs:'Campaign goals, audience, service information', outputs:'Draft copy, content plans, approval-ready posts', activity:['Drafted a waste-separation post','Prepared a bilingual content outline'] },
  { id:'campaign', name:'Digital Campaign Executive', shortName:'Campaign', description:'Create and manage campaign activity.', tags:['Campaigns','Outreach','Engagement'], accent:'#ff8e64', tasks:['Plan neighborhood outreach','Prepare campaign assets','Recommend engagement experiments'], inputs:'Audience, objective, channel, budget guidance', outputs:'Campaign plan, draft assets, performance recommendations', activity:['Prepared a Mirpur campaign concept','Suggested a resident outreach sequence'] },
  { id:'service', name:'Customer Service Executive', shortName:'Service', description:'Handle customer conversations from connected channels.', tags:['Triage','Responses','Routing'], accent:'#19c7d9', tasks:['Classify incoming issues','Draft bilingual replies','Route issues to an operator'], inputs:'Customer message, location, service context', outputs:'Issue category, response draft, routing suggestion', activity:['Classified a missed-collection issue','Drafted an operator response'] },
  { id:'landing', name:'Landing Page Designer', shortName:'Landing Page', description:'Create and manage landing pages.', tags:['Web experiences','Forms','Conversion'], accent:'#4ea1ff', tasks:['Structure public forms','Create campaign page concepts','Improve form completion'], inputs:'Goal, brand guidance, required form fields', outputs:'Page structure, interface copy, form concept', activity:['Prepared a complaint form concept','Suggested accessible field labels'] },
  { id:'success', name:'Customer Success Executive', shortName:'Success', description:'Manage customer lifecycle journeys.', tags:['Follow-up','Retention','Feedback'], accent:'#39d98a', tasks:['Schedule resident follow-up','Collect satisfaction signals','Identify unresolved journeys'], inputs:'Issue status, contact preference, service history', outputs:'Follow-up plan, feedback prompts, escalation reminder', activity:['Scheduled a resident follow-up','Flagged an unresolved service journey'] },
  { id:'growth', name:'Growth Analyst', shortName:'Growth', description:'Review performance and grow operations.', tags:['Metrics','Insights','Optimization'], accent:'#f4b740', tasks:['Identify service trends','Summarize campaign performance','Recommend operational tests'], inputs:'Prototype metrics, issue patterns, campaign results', outputs:'Trend summary, dashboard insights, next-step recommendation', activity:['Compared Mirpur report trends','Prepared an operations insight'] },
  { id:'voice', name:'Voice Executive', shortName:'Voice', description:'Run voice-first support workflows.', tags:['Voice input','Transcription','Accessibility'], accent:'#e86de6', tasks:['Transcribe voice complaints','Detect intent and urgency','Prepare structured issue records'], inputs:'Bangla or English voice complaint', outputs:'Structured issue, recommended response, routing suggestion', activity:['Transcribed a Bangla complaint','Detected medium-high urgency'] },
]

export type Workspace = { name:string; industry:string; location:string; active:WorkerId[]; objective:string; status:string; activity:number }
export const workspaces: Workspace[] = [
  { name:'CleanDhaka Services', industry:'Waste management', location:'Mirpur, Dhaka', active:['voice','service','content','campaign','growth'], objective:'Reduce unresolved waste-collection complaints.', status:'Active demo', activity:24 },
  { name:'KrishiBondhu', industry:'Agriculture support', location:'Rangpur, Bangladesh', active:['content','voice','service','growth'], objective:'Help smallholder farmers receive timely crop guidance.', status:'Concept demo', activity:12 },
  { name:'ReliefLink Bangladesh', industry:'Community disaster response', location:'Coastal Bangladesh', active:['voice','campaign','success','growth'], objective:'Improve emergency communication and follow-up.', status:'Concept demo', activity:9 },
  { name:'LocalMart BD', industry:'Small-business commerce', location:'Dhaka', active:['service','landing','content','growth'], objective:'Help local merchants improve customer communication.', status:'Concept demo', activity:17 },
]

export type Problem = { title:string; affected:string; location:string; workerIds:WorkerId[]; outcome:string; ready?:boolean }
export const problems: Problem[] = [
  { title:'Waste collection and recycling coordination', affected:'Residents and collection teams', location:'Mirpur, Dhaka', workerIds:['voice','service','success','growth'], outcome:'Faster triage and clearer, human-approved follow-up.', ready:true },
  { title:'Farmer support and crop advisory', affected:'Smallholder farmers', location:'Rangpur', workerIds:['content','voice','service'], outcome:'More accessible, timely guidance in local language.' },
  { title:'Flood preparedness and community communication', affected:'At-risk coastal communities', location:'Coastal Bangladesh', workerIds:['voice','campaign','success'], outcome:'Clearer preparedness information and follow-up.' },
  { title:'Public-service complaint management', affected:'Residents and service operators', location:'Urban Bangladesh', workerIds:['service','voice','growth'], outcome:'Structured intake and transparent resolution steps.' },
  { title:'Small-business customer support', affected:'Local merchants and customers', location:'Dhaka', workerIds:['service','landing','content'], outcome:'More consistent customer communication.' },
  { title:'Local healthcare information access', affected:'Patients and community workers', location:'District communities', workerIds:['content','voice','service'], outcome:'Easier access to reviewed, non-diagnostic information.' },
]

export const cleanDhakaActivity = [
  ['voice','Transcribed resident complaint'], ['service','Classified the issue as missed collection'],
  ['growth','Compared the complaint with recent neighborhood trends'], ['success','Scheduled a resident follow-up'],
  ['content','Drafted a waste-separation awareness post'], ['campaign','Prepared a neighborhood cleanliness campaign'],
  ['landing','Prepared a simple public complaint form concept'],
] as const

export const metrics = [
  ['128','Reports received',84], ['91','Reports resolved',71], ['6h','Avg. response time',62],
  ['34%','Engagement increase',34], ['72','Households reached',58],
] as const

export const tutorialDefaults = {
  organization:'CleanDhaka Services', type:'Waste management organization', location:'Mirpur, Dhaka',
  problem:'Residents cannot easily report missed waste collection', users:'Residents and field collection staff',
  language:'Bangla and English', channel:'Phone calls and Facebook messages', goal:'Improve complaint response and community participation',
}

export const tutorialRecommendation: [WorkerId,string][] = [
  ['voice','Receive voice complaints'], ['service','Classify and respond'], ['success','Follow up with residents'],
  ['content','Create educational material'], ['campaign','Run a neighborhood campaign'], ['growth','Monitor service trends'],
]

export const getWorker = (id: WorkerId) => workers.find(w => w.id === id)!
