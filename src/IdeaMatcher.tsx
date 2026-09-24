import { useState } from 'react'
import {
  ArrowRight, Bot, Check, ChevronRight, Download, Headphones, LayoutTemplate,
  Lightbulb, ListChecks, Megaphone, Mic2, PenLine, Plus, ShieldCheck,
  TrendingUp, UserCheck, Users, Workflow,
} from 'lucide-react'
import { getWorker, type DemoProject, type WorkerId } from './productData'
import { solutionRecipes } from './solutionRecipes'

const workerIcons: Record<WorkerId, typeof Bot> = {
  voice: Mic2,
  service: Headphones,
  growth: TrendingUp,
  success: UserCheck,
  content: PenLine,
  campaign: Megaphone,
  landing: LayoutTemplate,
}

type IdeaMatcherProps = {
  openDemo: (demo: DemoProject['id']) => void
}

export function IdeaMatcher({ openDemo }: IdeaMatcherProps) {
  const [recipeId, setRecipeId] = useState(solutionRecipes[0].id)
  const recipe = solutionRecipes.find(item => item.id === recipeId) ?? solutionRecipes[0]
  const [solutionName, setSolutionName] = useState(recipe.title)
  const [problem, setProblem] = useState(recipe.problem)
  const [optional, setOptional] = useState<WorkerId[]>([])
  const [selectedWorker, setSelectedWorker] = useState<WorkerId>(recipe.core[0])

  const chooseRecipe = (id: string) => {
    const next = solutionRecipes.find(item => item.id === id) ?? solutionRecipes[0]
    setRecipeId(next.id)
    setSolutionName(next.title)
    setProblem(next.problem)
    setOptional([])
    setSelectedWorker(next.core[0])
  }

  const toggleOptional = (id: WorkerId) => {
    setOptional(current => current.includes(id) ? current.filter(item => item !== id) : [...current, id])
    setSelectedWorker(id)
  }

  const selected = getWorker(selectedWorker)
  const SelectedIcon = workerIcons[selectedWorker]
  const team = [...recipe.core, ...optional]

  return (
    <div className="page matcher-page">
      <header className="page-heading">
        <span className="kicker">Idea to worker team</span>
        <h1>Build a solution around your problem.</h1>
        <p>Choose the closest starting point, customize the idea, and see which AI workers can help.</p>
      </header>

      <section className="matcher-intro" aria-labelledby="worker-team-intro">
        <div className="intro-copy">
          <div className="intro-icon"><Users aria-hidden="true" /></div>
          <h2 id="worker-team-intro">AI workers are focused digital teammates.</h2>
          <p>An AI worker does one clear job inside a larger solution. It receives information, prepares a useful output, and passes that output forward.</p>
          <p>Think of a hackathon team: one person researches, another designs, and another communicates. Ezassist workers divide digital work in the same way.</p>
        </div>
        <div className="concept-flow" aria-label="How an AI worker team works">
          <div><span><Lightbulb /></span><b>You define the need</b><p>Start with a real person and a real problem.</p></div>
          <ArrowRight aria-hidden="true" />
          <div><span><Workflow /></span><b>Workers prepare the work</b><p>Each specialist creates something the next step can use.</p></div>
          <ArrowRight aria-hidden="true" />
          <div><span><UserCheck /></span><b>A person decides</b><p>People verify important facts, messages, and actions.</p></div>
        </div>
        <div className="intro-outcome">
          <ListChecks aria-hidden="true" />
          <div><b>What you will make here</b><p>A simple solution map showing your problem, recommended worker team, worker handoffs, and human checkpoints.</p></div>
        </div>
      </section>

      <section className="matcher-builder" aria-label="Solution idea matcher">
        <div className="recipe-picker">
          <div className="matcher-section-heading">
            <span>Choose</span>
            <div><h2>Choose a problem pattern</h2><p>Compare the situation, people affected, and intended change. Pick the closest match, then adapt it.</p></div>
          </div>
          <div className="recipe-options">
            {solutionRecipes.map(item => (
              <button key={item.id} className={item.id === recipe.id ? 'active' : ''} onClick={() => chooseRecipe(item.id)} aria-pressed={item.id === recipe.id}>
                <small>{item.category}</small>
                <b>{item.title}</b>
                <p>{item.problem}</p>
                {item.id === recipe.id && <Check aria-hidden="true" />}
              </button>
            ))}
          </div>
          <article className="pattern-explainer" aria-live="polite">
            <header><small>Selected problem pattern</small><h3>{recipe.title}</h3></header>
            <div className="pattern-context">
              <span>The problem in context</span>
              <p>{recipe.problem}</p>
            </div>
            <div className="pattern-relevance">
              <div><small>Who experiences it?</small><strong>{recipe.audience}</strong></div>
              <ArrowRight aria-hidden="true" />
              <div className="relevance-focus"><small>Why is a worker team relevant?</small><strong>{recipe.relevance}</strong></div>
              <ArrowRight aria-hidden="true" />
              <div><small>What should become better?</small><strong>{recipe.outcome}</strong></div>
            </div>
            <p className="pattern-guidance"><Lightbulb aria-hidden="true" /><span><b>Use this as a starting point.</b> Your project can change the users, location, channel, or outcome while keeping the same worker logic.</span></p>
          </article>
        </div>

        <div className="idea-customizer">
          <div className="matcher-section-heading">
            <span>Shape</span>
            <div><h2>Make it yours</h2><p>Use plain language. A strong idea starts with the people and problem.</p></div>
          </div>
          <div className="idea-fields">
            <label>
              <span>What is your solution called?</span>
              <input value={solutionName} onChange={event => setSolutionName(event.target.value)} />
            </label>
            <label className="problem-field">
              <span>What problem are you solving?</span>
              <textarea rows={3} value={problem} onChange={event => setProblem(event.target.value)} />
            </label>
            <div><span>Who experiences it?</span><strong>{recipe.audience}</strong></div>
            <div><span>What should improve?</span><strong>{recipe.outcome}</strong></div>
          </div>
        </div>

        <div className="team-builder">
          <div className="matcher-section-heading">
            <span>Connect</span>
            <div><h2>Meet your recommended team</h2><p>Core workers create the essential flow. Optional workers extend the solution.</p></div>
          </div>

          <dl className="matcher-legend" aria-label="Recommendation guide">
            <div><dt>Core team</dt><dd>The smallest useful set of workers for this problem.</dd></div>
            <div><dt>Handoff</dt><dd>The output one worker prepares for the next worker or person.</dd></div>
            <div><dt>Human checkpoint</dt><dd>The moment a responsible person reviews or approves the work.</dd></div>
          </dl>

          <div className="core-team-label"><span>Core team</span><small>Recommended for this problem</small></div>
          <div className="worker-chain" aria-label="Recommended core worker flow">
            {recipe.core.map((id, index) => {
              const worker = getWorker(id)
              const Icon = workerIcons[id]
              return (
                <div className="chain-item" key={id}>
                  <button className={selectedWorker === id ? 'active' : ''} onClick={() => setSelectedWorker(id)} style={{ '--worker-color': worker.accent } as React.CSSProperties}>
                    <span><Icon /></span><small>{index + 1}</small><b>{worker.shortName}</b>
                  </button>
                  {index < recipe.core.length - 1 && <ChevronRight className="chain-arrow" aria-hidden="true" />}
                </div>
              )
            })}
          </div>

          <div className="worker-reason" style={{ '--worker-color': selected.accent } as React.CSSProperties} aria-live="polite">
            <div className="worker-reason-title"><span><SelectedIcon /></span><div><small>Why this worker?</small><h3>{selected.name}</h3></div></div>
            <p>{recipe.reasons[selectedWorker]}</p>
            <div className="handoff-line"><span><small>Receives</small><b>{selected.input}</b></span><ArrowRight /><span><small>Hands off</small><b>{selected.output}</b></span></div>
            <div className="reason-check"><ShieldCheck /><span><b>Person in control</b>{selected.humanCheck}</span></div>
          </div>

          <div className="optional-workers">
            <div className="core-team-label"><span>Optional support</span><small>Add only if your idea needs it</small></div>
            <div>
              {recipe.optional.map(id => {
                const worker = getWorker(id)
                const Icon = workerIcons[id]
                const added = optional.includes(id)
                return (
                  <button key={id} className={added ? 'active' : ''} onClick={() => toggleOptional(id)} aria-pressed={added}>
                    <Icon /><span><b>{worker.shortName}</b><small>{recipe.reasons[id]}</small></span>{added ? <Check /> : <Plus />}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="solution-summary" aria-label="Solution team summary">
        <div className="summary-heading"><div><span>Your solution map</span><h2>{solutionName || 'Untitled solution'}</h2></div><button className="secondary-button print-action" onClick={() => window.print()}><Download /> Print or save as PDF</button></div>
        <div className="summary-context">
          <div><small>Problem</small><p>{problem || 'Add a short problem statement.'}</p></div>
          <div><small>For</small><p>{recipe.audience}</p></div>
          <div><small>Desired change</small><p>{recipe.outcome}</p></div>
        </div>
        <div className="summary-team">
          <small>Worker team</small>
          <div>{team.map((id, index) => { const worker = getWorker(id); const Icon = workerIcons[id]; return <span key={id}><Icon />{worker.shortName}{index < team.length - 1 && <ChevronRight />}</span> })}</div>
        </div>
        <div className="summary-boundary"><ShieldCheck /><p><b>Prototype boundary:</b> workers prepare outputs for review. People approve facts, actions, messages, and decisions.</p></div>
        {recipe.relatedDemo && <button className="primary-button demo-link" onClick={() => openDemo(recipe.relatedDemo!)}>See this pattern in a guided demo <ArrowRight /></button>}
      </section>
    </div>
  )
}
