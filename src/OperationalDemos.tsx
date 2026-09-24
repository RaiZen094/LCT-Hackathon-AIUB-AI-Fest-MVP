import { useState } from 'react'
import {
  ArrowLeft, ArrowRight, Check, CheckCircle2, CloudRain,
  Headphones, Leaf, LayoutTemplate, Megaphone, Mic2, PenLine, RefreshCcw,
  ShieldCheck, TrendingUp, UserCheck,
} from 'lucide-react'
import { getProject, getWorker, type DemoProject, type WorkerId } from './productData'

const icons: Record<WorkerId, typeof Mic2> = {
  voice: Mic2,
  service: Headphones,
  growth: TrendingUp,
  success: UserCheck,
  content: PenLine,
  campaign: Megaphone,
  landing: LayoutTemplate,
}

function StepPreview({ projectId, stepId }: { projectId: DemoProject['id']; stepId: string }) {
  if (projectId === 'nagar') {
    if (stepId === 'intake') return (
      <div className="artifact-preview intake-preview">
        <span className="preview-label">Structured case</span>
        <blockquote>“আমাদের গলিতে তিন দিন ধরে ময়লা নেওয়া হয়নি।”</blockquote>
        <div className="field-grid">
          <span><small>Issue</small><b>Missed collection</b></span>
          <span><small>Area</small><b>Mirpur 10</b></span>
          <span><small>Delay</small><b>Three days</b></span>
          <span><small>Concern</small><b>Overflowing bin</b></span>
        </div>
      </div>
    )
    if (stepId === 'triage') return (
      <div className="artifact-preview recommendation-preview">
        <span className="preview-label">Triage recommendation</span>
        <div className="recommendation-line"><span>Category</span><b>Missed collection</b></div>
        <div className="recommendation-line"><span>Priority</span><b>Medium-high</b></div>
        <div className="recommendation-line"><span>Owner</span><b>Zone 04 coordinator</b></div>
        <div className="recommendation-line"><span>Response target</span><b>Review within two hours</b></div>
      </div>
    )
    if (stepId === 'insight') return (
      <div className="artifact-preview insight-preview">
        <span className="preview-label">Pattern to validate</span>
        <strong>3 similar reports</strong>
        <p>Simulated missed-collection reports from Zone 04 this week.</p>
        <div className="mini-bars"><span /><span /><span /><span /></div>
        <small>Check against real service records before acting.</small>
      </div>
    )
    return (
      <div className="artifact-preview message-preview">
        <span className="preview-label">Draft resident update</span>
        <p>Thank you for reporting this issue. Your case is ready for coordinator review. We will update you after the collection schedule is confirmed.</p>
        <p className="bangla">সমস্যাটি জানানোর জন্য ধন্যবাদ। সংগ্রহের সময়সূচি নিশ্চিত হওয়ার পর আমরা আপনাকে জানাব।</p>
      </div>
    )
  }

  if (stepId === 'report') return (
    <div className="artifact-preview intake-preview">
      <span className="preview-label">Community situation report</span>
      <div className="field-grid">
        <span><small>Area</small><b>Fictional school road</b></span>
        <span><small>District</small><b>Kurigram</b></span>
        <span><small>Condition</small><b>Water reported rising</b></span>
        <span><small>Confidence</small><b>Caller report only</b></span>
      </div>
    </div>
  )
  if (stepId === 'check') return (
    <div className="artifact-preview checklist-preview">
      <span className="preview-label">Facts and gaps</span>
      <p><Check /> Caller and general area recorded</p>
      <p><Check /> Report time recorded</p>
      <p className="pending">Local road access still needs confirmation</p>
      <p className="pending">Response level must be set by the coordinator</p>
    </div>
  )
  if (stepId === 'message') return (
    <div className="artifact-preview message-preview">
      <span className="preview-label">Bilingual update draft</span>
      <p><b>English:</b> Water has been reported near a fictional school road. Local verification is in progress. Follow approved local safety guidance.</p>
      <p className="bangla"><b>বাংলা:</b> একটি কাল্পনিক স্কুল সড়কের কাছে পানি বৃদ্ধির খবর পাওয়া গেছে। স্থানীয় যাচাই চলছে।</p>
    </div>
  )
  if (stepId === 'reach') return (
    <div className="artifact-preview channel-preview">
      <span className="preview-label">Outreach sequence</span>
      {['Community groups', 'SMS update', 'Social channels', 'Correction if needed', 'Closure notice'].map((item, index) => <div key={item}><span>{index + 1}</span><b>{item}</b></div>)}
    </div>
  )
  return (
    <div className="artifact-preview checklist-preview">
      <span className="preview-label">Follow-up checklist</span>
      <p><Check /> Confirm field-team update</p>
      <p><Check /> Record what changed</p>
      <p><Check /> Prepare correction if required</p>
      <p><Check /> Close only after lead confirmation</p>
    </div>
  )
}

export function GuidedDemo({ projectId, back }: { projectId: DemoProject['id']; back: () => void }) {
  const project = getProject(projectId)
  const [activeIndex, setActiveIndex] = useState(0)
  const [finished, setFinished] = useState(false)
  const step = project.steps[activeIndex]
  const worker = getWorker(step.worker)
  const Icon = icons[step.worker]
  const next = () => {
    if (activeIndex === project.steps.length - 1) setFinished(true)
    else setActiveIndex(index => index + 1)
  }
  const reset = () => { setActiveIndex(0); setFinished(false) }

  return (
    <div className="page guided-demo-page">
      <button className="back-button" onClick={back}><ArrowLeft /> Solution demos</button>
      <header className="demo-heading">
        <div className="demo-heading-icon">{projectId === 'nagar' ? <Leaf /> : <CloudRain />}</div>
        <div><small>{project.track}</small><h1>{project.name}</h1><p>{project.problem}</p></div>
        <span>Beginner-friendly story</span>
      </header>

      <div className="demo-help"><CheckCircle2 /><span><b>Just follow the story.</b>No setup or technical knowledge is needed. Use Next to see how the workers collaborate.</span></div>

      <div className="story-map" role="tablist" aria-label={`${project.name} story sections`}>
        {project.steps.map((item, index) => {
          const ItemIcon = icons[item.worker]
          return (
            <button
              key={item.id}
              className={activeIndex === index && !finished ? 'active' : ''}
              onClick={() => { setActiveIndex(index); setFinished(false) }}
              role="tab"
              aria-selected={activeIndex === index && !finished}
            >
              <span><ItemIcon /></span>
              <b>{item.navLabel}</b>
            </button>
          )
        })}
      </div>

      {!finished ? (
        <section className="story-workspace">
          <div className="story-explanation">
            <div className="story-position">{activeIndex + 1} of {project.steps.length}</div>
            <div className="active-worker" style={{ '--worker-color': worker.accent } as React.CSSProperties}>
              <span><Icon /></span><div><small>Worker helping now</small><b>{worker.name}</b></div>
            </div>
            <h2>{step.title}</h2>
            <div className="beginner-block">
              <small>The situation</small>
              <p>{step.input}</p>
            </div>
            <div className="beginner-block featured">
              <small>How Ezassist helps</small>
              <p>{step.plainAction}</p>
              <strong>{step.output}</strong>
            </div>
            <div className="beginner-notes">
              <div className="beginner-value"><Check /><span><b>Why this is useful</b>{step.value}</span></div>
              <div className="beginner-decision"><ShieldCheck /><span><b>A person still decides</b>{step.decision}</span></div>
            </div>
            <div className="story-controls">
              <button className="secondary-button" disabled={activeIndex === 0} onClick={() => setActiveIndex(index => index - 1)}><ArrowLeft /> Previous</button>
              <button className="primary-button" onClick={next}>{activeIndex === project.steps.length - 1 ? 'Finish demo' : 'Next'} <ArrowRight /></button>
            </div>
          </div>
          <div className="story-example">
            <div className="artifact-title"><span>What the participant sees</span><small>Simulated example</small></div>
            <StepPreview projectId={projectId} stepId={step.id} />
          </div>
        </section>
      ) : (
        <section className="demo-finish-screen">
          <CheckCircle2 />
          <h2>You followed the complete solution.</h2>
          <p>{project.result}</p>
          <div className="finish-summary">
            {project.steps.map(item => { const StepIcon = icons[item.worker]; return <span key={item.id}><StepIcon />{getWorker(item.worker).shortName}</span> })}
          </div>
          <small>Everything shown was simulated. No external action occurred.</small>
          <button className="primary-button" onClick={reset}><RefreshCcw /> Run the story again</button>
        </section>
      )}
    </div>
  )
}
