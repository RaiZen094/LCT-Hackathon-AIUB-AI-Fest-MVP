import { useState } from 'react'
import {
  ArrowRight, Bot, Check, ChevronRight, CircleHelp, CloudRain, Headphones,
  Home, Landmark, LayoutTemplate, Leaf, Megaphone, Menu, Mic2, PenLine,
  Rocket, ShieldCheck, Store, Target, TrendingUp, UserCheck, Users,
  X, Zap,
} from 'lucide-react'
import { GuidedDemo } from './OperationalDemos'
import { IdeaMatcher } from './IdeaMatcher'
import { demoProjects, getWorker, workers, type DemoProject, type Worker, type WorkerId } from './productData'

type View = 'overview' | 'workers' | 'matcher' | 'demos' | 'fit' | DemoProject['id']

const navigation: { id: Exclude<View, 'nagar' | 'flood'>; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'workers', label: 'AI Workers' },
  { id: 'matcher', label: 'Build Your Team' },
  { id: 'demos', label: 'Solution Demos' },
  { id: 'fit', label: 'Hackathon Fit' },
]

const workerIcons: Record<WorkerId, typeof Bot> = {
  voice: Mic2,
  service: Headphones,
  growth: TrendingUp,
  success: UserCheck,
  content: PenLine,
  campaign: Megaphone,
  landing: LayoutTemplate,
}

const bangladeshProblems: {
  id: string
  label: string
  context: string
  title: string
  problem: string
  response: string
  icon: typeof Bot
  workers: WorkerId[]
}[] = [
  {
    id: 'sme',
    label: 'Small business',
    context: 'Facebook, WhatsApp and phone orders',
    title: 'Customer messages keep arriving, even when the owner is busy.',
    problem: 'Questions, orders and follow-ups are scattered across familiar channels. A small team can miss a sale or leave a customer waiting.',
    response: 'Voice and Service Workers capture each request. Content and Growth Workers prepare clear replies and practical follow-ups for the owner to review.',
    icon: Store,
    workers: ['voice', 'service', 'content', 'growth'],
  },
  {
    id: 'service-access',
    label: 'Service access',
    context: 'Bangla voice and simpler digital steps',
    title: 'A useful service can still feel unreachable behind a long form.',
    problem: 'Typing, English-heavy interfaces and unfamiliar websites can stop people before they explain what they need, especially on a basic phone or shared device.',
    response: 'Voice Worker listens in a familiar format. Service Worker structures the request, while Landing Worker presents the next step in a simple mobile flow.',
    icon: Landmark,
    workers: ['voice', 'service', 'landing'],
  },
  {
    id: 'flood',
    label: 'Flood response',
    context: 'Calls, reports and urgent local needs',
    title: 'Urgent reports arrive quickly, but not in one organized format.',
    problem: 'During a flood, people may report water levels, shelter needs and blocked roads by voice or message. Important details can become difficult to compare.',
    response: 'Voice Worker captures the report, Service Worker sorts it, and Content Worker prepares clear updates. A responsible person checks every action.',
    icon: CloudRain,
    workers: ['voice', 'service', 'content'],
  },
]

function WorkerMark({ id, label = true }: { id: WorkerId; label?: boolean }) {
  const worker = getWorker(id)
  const Icon = workerIcons[id]
  return (
    <span className="worker-mark" style={{ '--worker-color': worker.accent } as React.CSSProperties}>
      <span><Icon aria-hidden="true" /></span>
      {label && <b>{worker.shortName}</b>}
    </span>
  )
}

function AppHeader({ view, go }: { view: View; go: (view: View) => void }) {
  const [open, setOpen] = useState(false)
  const activeView = view === 'nagar' || view === 'flood' ? 'demos' : view
  return (
    <header className="site-header">
      <button className="wordmark" onClick={() => go('overview')} aria-label="Ezassist home">
        <span><Zap aria-hidden="true" /></span>
        <strong>ezassist</strong>
      </button>
      <button className="menu-button" onClick={() => setOpen(value => !value)} aria-label="Toggle navigation">
        {open ? <X /> : <Menu />}
      </button>
      <nav className={open ? 'open' : ''} aria-label="Main navigation">
        {navigation.map(item => (
          <button
            key={item.id}
            className={activeView === item.id ? 'active' : ''}
            onClick={() => { go(item.id); setOpen(false) }}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <span className="prototype-label">Interactive prototype</span>
    </header>
  )
}

function Overview({ go }: { go: (view: View) => void }) {
  const [activeProblemId, setActiveProblemId] = useState(bangladeshProblems[0].id)
  const activeProblem = bangladeshProblems.find(problem => problem.id === activeProblemId) ?? bangladeshProblems[0]

  return (
    <div className="page overview-page">
      <section className="bangladesh-context" aria-labelledby="bangladesh-context-title">
        <div className="bangladesh-context-heading">
          <span>Built around Bangladesh</span>
          <h2 id="bangladesh-context-title">Start with a problem people already recognize.</h2>
          <p>A useful AI service should meet people in Bangla, by voice, and through the channels they already use. Choose a local problem to see how that becomes a worker-powered solution.</p>
        </div>
        <div className="bangladesh-problem-explorer">
          <div className="bangladesh-problem-tabs" role="group" aria-label="Bangladesh problem examples">
            {bangladeshProblems.map(problem => {
              const Icon = problem.icon
              const isActive = problem.id === activeProblem.id
              return (
                <button
                  key={problem.id}
                  type="button"
                  aria-pressed={isActive}
                  aria-controls="bangladesh-problem-panel"
                  className={isActive ? 'active' : ''}
                  onClick={() => setActiveProblemId(problem.id)}
                >
                  <Icon aria-hidden="true" />
                  <span><b>{problem.label}</b><small>{problem.context}</small></span>
                  <ChevronRight aria-hidden="true" />
                </button>
              )
            })}
          </div>
          <article
            className="bangladesh-problem-detail"
            id="bangladesh-problem-panel"
            aria-live="polite"
          >
            <div>
              <span>The problem</span>
              <h3>{activeProblem.title}</h3>
              <p>{activeProblem.problem}</p>
            </div>
            <div className="bangladesh-worker-response">
              <span>How the workers help</span>
              <p>{activeProblem.response}</p>
              <div aria-label="Suggested AI workers">
                {activeProblem.workers.map(workerId => <WorkerMark key={workerId} id={workerId} />)}
              </div>
            </div>
          </article>
        </div>
        <p className="bangladesh-context-result"><Zap aria-hidden="true" /><span><b>The idea:</b> participants do not need to invent a new AI model. They can combine focused workers around a Bangladesh problem and keep a person responsible for the final decision.</span></p>
      </section>

      <section className="hero">
        <div className="hero-copy">
          <span className="kicker">Technology partner showcase for Hack for Humanity Bangladesh 2026</span>
          <h1>Seven workers.<br />One solution.</h1>
          <p>See what each Ezassist worker does, then follow how the right workers combine around a real civic problem.</p>
          <div className="hero-actions">
            <button className="primary-button" onClick={() => go('matcher')}>Match workers to your idea <ArrowRight /></button>
            <button className="secondary-button" onClick={() => go('workers')}>Learn how workers work</button>
          </div>
        </div>
        <div className="hero-visual" aria-label="Ezassist worker orchestration overview">
          <div className="orchestration-core"><Zap /><strong>Ezassist</strong><span>coordinates the workflow</span></div>
          <div className="orchestration-workers">
            {workers.map(worker => <WorkerMark key={worker.id} id={worker.id} />)}
          </div>
          <div className="orchestration-result"><Check /><span><b>Reviewable output</b><small>A person decides what happens next</small></span></div>
        </div>
      </section>

      <section className="simple-section how-it-works">
        <div className="section-heading">
          <h2>The idea in four moves</h2>
          <p>Workers do focused jobs. Ezassist connects their outputs into one understandable workflow.</p>
        </div>
        <div className="four-moves">
          {[
            ['A real need', 'A voice report, service request, or communication goal enters the solution.'],
            ['The right workers', 'Only the specialists needed for that problem become part of the workflow.'],
            ['Clear outputs', 'Every worker produces an artifact the next person or worker can use.'],
            ['Human decision', 'Important actions stay visible and require an accountable person.'],
          ].map(([title, body], index) => (
            <article key={title}><span>{index + 1}</span><h3>{title}</h3><p>{body}</p></article>
          ))}
        </div>
      </section>

      <section className="simple-section overview-demos">
        <div className="section-heading">
          <h2>Two problems. Two worker teams.</h2>
          <p>The same workforce adapts to the problem instead of forcing every worker into every solution.</p>
        </div>
        <div className="project-pair">
          {demoProjects.map((project, index) => (
            <article key={project.id} className="project-card">
              <span className="project-icon">{index === 0 ? <Leaf /> : <CloudRain />}</span>
              <div>
                <small>{project.track}</small>
                <h3>{project.name}</h3>
                <p>{project.problem}</p>
                <div className="worker-row">{project.workers.map(id => <WorkerMark key={id} id={id} label={false} />)}</div>
              </div>
              <button onClick={() => go(project.id)}>Open guided demo <ArrowRight /></button>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

function WorkerDetails({ worker }: { worker: Worker }) {
  const Icon = workerIcons[worker.id]
  return (
    <section className="worker-detail" aria-live="polite">
      <div className="worker-detail-title" style={{ '--worker-color': worker.accent } as React.CSSProperties}>
        <span><Icon /></span>
        <div><small>{worker.shortName} specialist</small><h2>{worker.name}</h2></div>
      </div>
      <p className="worker-purpose">{worker.businessNeed}</p>
      <div className="worker-flow">
        <div><span>Receives</span><strong>{worker.input}</strong></div>
        <ChevronRight />
        <div><span>Does</span><strong>{worker.work}</strong></div>
        <ChevronRight />
        <div><span>Produces</span><strong>{worker.output}</strong></div>
      </div>
      <div className="human-check"><ShieldCheck /><span><b>Human checkpoint</b>{worker.humanCheck}</span></div>
    </section>
  )
}

const smeJourney: { worker: WorkerId; phase: string; action: string; result: string }[] = [
  { worker: 'landing', phase: 'Create a place to buy', action: 'Build a simple mobile order page for the bakery.', result: 'Customers can view products and place an inquiry.' },
  { worker: 'content', phase: 'Explain the offer', action: 'Write clear Bangla and English product descriptions.', result: 'Customers understand products, prices, and delivery.' },
  { worker: 'campaign', phase: 'Reach local customers', action: 'Prepare a neighborhood social campaign.', result: 'The bakery has a focused plan to attract interest.' },
  { worker: 'voice', phase: 'Capture inquiries', action: 'Turn customer voice messages into structured requests.', result: 'Spoken questions become usable order details.' },
  { worker: 'service', phase: 'Handle each request', action: 'Classify the inquiry and recommend the next response.', result: 'Urgent and normal requests reach the right person.' },
  { worker: 'success', phase: 'Follow up after the order', action: 'Prepare confirmation, delivery, feedback, and return messages.', result: 'Customers stay informed and receive consistent care.' },
  { worker: 'growth', phase: 'Learn what works', action: 'Compare inquiries, orders, repeat customers, and campaign activity.', result: 'The owner receives practical ideas for the next month.' },
]

function SmeJourney() {
  const [active, setActive] = useState(0)
  const item = smeJourney[active]
  const worker = getWorker(item.worker)
  const Icon = workerIcons[item.worker]
  return (
    <section className="sme-journey">
      <div className="sme-intro">
        <span className="kicker">One small business, one connected team</span>
        <h2>How seven workers help a neighborhood bakery grow</h2>
        <p>Follow the customer journey from the first product page to repeat business and better decisions.</p>
        <div className="sme-owner-note"><Users /><span><b>The business owner stays in control.</b> Workers prepare the work. The owner approves offers, messages, campaigns, and decisions.</span></div>
      </div>
      <div className="sme-story">
        <div className="sme-path" aria-label="SME customer journey">
          {smeJourney.map((stage, index) => {
            const StageIcon = workerIcons[stage.worker]
            return (
              <button key={stage.worker} className={active === index ? 'active' : ''} onClick={() => setActive(index)}>
                <span><StageIcon /></span>
                <b>{stage.phase}</b>
              </button>
            )
          })}
        </div>
        <div className="sme-stage" style={{ '--worker-color': worker.accent } as React.CSSProperties} aria-live="polite">
          <div className="sme-stage-worker"><span><Icon /></span><div><small>Ezassist worker</small><b>{worker.name}</b></div></div>
          <h3>{item.phase}</h3>
          <p>{item.action}</p>
          <div><Check /><span><small>Business result</small><b>{item.result}</b></span></div>
          <nav aria-label="SME journey controls">
            <button disabled={active === 0} onClick={() => setActive(index => index - 1)}>Previous</button>
            <span>{active + 1} of {smeJourney.length}</span>
            <button disabled={active === smeJourney.length - 1} onClick={() => setActive(index => index + 1)}>Next <ArrowRight /></button>
          </nav>
        </div>
      </div>
    </section>
  )
}

function WorkersView() {
  const [selectedId, setSelectedId] = useState<WorkerId>('voice')
  const selected = getWorker(selectedId)
  return (
    <div className="page workers-page">
      <header className="page-heading">
        <span className="kicker">Ezassist AI workforce</span>
        <h1>Start with one small business story.</h1>
        <p>See the complete customer journey first, then explore what each worker contributes.</p>
      </header>
      <SmeJourney />
      <header className="worker-explorer-heading">
        <h2>Explore each worker</h2>
        <p>Select a role to see what it receives, does, produces, and leaves for a person to decide.</p>
      </header>
      <div className="worker-browser">
        <div className="worker-selector" role="list" aria-label="AI workers">
          {workers.map(worker => {
            const Icon = workerIcons[worker.id]
            return (
              <button
                key={worker.id}
                className={selectedId === worker.id ? 'active' : ''}
                onClick={() => setSelectedId(worker.id)}
                style={{ '--worker-color': worker.accent } as React.CSSProperties}
              >
                <span><Icon /></span>
                <div><b>{worker.name}</b><small>{worker.output}</small></div>
                <ChevronRight />
              </button>
            )
          })}
        </div>
        <WorkerDetails worker={selected} />
      </div>
      <aside className="prototype-note"><CircleHelp /><p><b>What this prototype proves:</b> the role of each worker and how its output fits into a solution. It does not run production AI or external integrations.</p></aside>
    </div>
  )
}

function DemosView({ go }: { go: (view: View) => void }) {
  return (
    <div className="page demos-page">
      <header className="page-heading">
        <span className="kicker">Guided solution prototypes</span>
        <h1>Choose a problem. Follow the workers.</h1>
        <p>Each demo explains what enters, which worker acts, what comes out, and where a person decides.</p>
      </header>
      <div className="demo-choices">
        {demoProjects.map((project, index) => (
          <article key={project.id}>
            <div className="demo-choice-top">
              <span>{index === 0 ? <Leaf /> : <CloudRain />}</span>
              <small>{project.track}</small>
            </div>
            <h2>{project.name}</h2>
            <p>{project.problem}</p>
            <dl>
              <div><dt>Designed for</dt><dd>{project.audience}</dd></div>
              <div><dt>Prototype result</dt><dd>{project.result}</dd></div>
              <div><dt>Workers used</dt><dd>{project.workers.length} of 7</dd></div>
            </dl>
            <div className="worker-row">{project.workers.map(id => <WorkerMark key={id} id={id} />)}</div>
            <button className="primary-button" onClick={() => go(project.id)}>Start {project.name} demo <ArrowRight /></button>
          </article>
        ))}
      </div>
    </div>
  )
}

function HackathonFit({ go }: { go: (view: View) => void }) {
  return (
    <div className="page fit-page">
      <header className="page-heading">
        <span className="kicker">Hack for Humanity Bangladesh 2026</span>
        <h1>From hackathon idea to understandable prototype.</h1>
        <p>Ezassist demonstrates how specialized workers can support teams across the solution lifecycle while people retain control.</p>
      </header>
      <section className="fit-statement">
        <Rocket />
        <div><h2>Technology partner showcase</h2><p>This prototype introduces the Ezassist workforce and demonstrates how workers can be configured around civic and environmental challenges.</p></div>
      </section>
      <section className="fit-grid">
        <article><Leaf /><h3>Environmental sustainability</h3><p>Waste reporting, public education, adoption campaigns, and outcome measurement.</p></article>
        <article><Users /><h3>Rural development</h3><p>Voice-first intake, service routing, farmer information, and follow-up.</p></article>
        <article><Home /><h3>Smart public services</h3><p>Citizen requests, case triage, status communication, and accountable closure.</p></article>
        <article className="fit-action"><Target /><h3>What teams should notice</h3><p>A complete solution needs more than one model response. It needs roles, handoffs, review, communication, and learning.</p><button onClick={() => go('demos')}>See the orchestration <ArrowRight /></button></article>
      </section>
      <section className="scope-box">
        <ShieldCheck />
        <div><h2>Prototype boundary</h2><p>All cases, outputs, metrics, and actions are simulated. No message is sent, no authority is contacted, and no production integration runs from this experience.</p></div>
      </section>
    </div>
  )
}

export default function ProductApp() {
  const validViews: View[] = ['overview', 'workers', 'matcher', 'demos', 'fit', 'nagar', 'flood']
  const initialHash = window.location.hash.replace('#', '') as View
  const [view, setView] = useState<View>(validViews.includes(initialHash) ? initialHash : 'overview')
  const go = (next: View) => {
    setView(next)
    window.history.replaceState(null, '', `#${next}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <div className="app-shell">
      <AppHeader view={view} go={go} />
      <main>
        {view === 'overview' && <Overview go={go} />}
        {view === 'workers' && <WorkersView />}
        {view === 'matcher' && <IdeaMatcher openDemo={demo => go(demo)} />}
        {view === 'demos' && <DemosView go={go} />}
        {view === 'fit' && <HackathonFit go={go} />}
        {(view === 'nagar' || view === 'flood') && <GuidedDemo projectId={view} back={() => go('demos')} />}
      </main>
      <footer className="site-footer"><span>Ezassist AI Workforce</span><span>Interactive prototype with simulated data and actions</span></footer>
    </div>
  )
}
