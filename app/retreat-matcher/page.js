'use client'
import { useState } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import s from './page.module.css'

const questions = [
  { id:'goal', title:'What is your primary goal?', sub:'Choose the one that resonates most.', options:['Relaxation','Stress Relief','Deepen Practice','Spiritual Growth','Adventure'] },
  { id:'budget', title:'What is your budget?', sub:'Per person, including accommodation.', options:['Under $500','$500 – $1,500','$1,500 – $3,000','$3,000+'] },
  { id:'destination', title:'Where would you like to go?', sub:'Pick a destination or stay open.', options:['Bali','Thailand','Costa Rica','India','Open to Suggestions'] },
  { id:'level', title:'What is your experience level?', sub:'Be honest — all levels are welcome.', options:['Beginner','Intermediate','Advanced'] },
  { id:'style', title:'What style appeals to you?', sub:'This helps us narrow your matches.', options:['Luxury','Wellness','Meditation','Teacher Training','Digital Detox'] },
]

const resultRetreats = [
  { name:'Ubud Serenity Retreat', location:'Ubud, Bali', price:'$1,299', duration:'7 days', img:'/images/retreat-luxury.png' },
  { name:'Sacred Silence Meditation', location:'Chiang Mai, Thailand', price:'$899', duration:'10 days', img:'/images/retreat-meditation.png' },
  { name:'Jungle Flow Costa Rica', location:'Nosara, Costa Rica', price:'$1,599', duration:'5 days', img:'/images/dest-costa-rica.png' },
]

export default function RetreatMatcher() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [showResults, setShowResults] = useState(false)
  const totalSteps = questions.length

  const selectOption = (val) => {
    setAnswers({ ...answers, [questions[step].id]: val })
    if (step < totalSteps - 1) {
      setTimeout(() => setStep(step + 1), 250)
    }
  }

  const handleGateSubmit = (e) => {
    e.preventDefault()
    if (email && name) setShowResults(true)
  }

  const isLastQuestion = step === totalSteps - 1 && answers[questions[step]?.id]
  const showGate = isLastQuestion && !showResults

  return (
    <>
      <Navbar />
      <section className={s.hero}>
        <h1>Which Yoga Retreat Is Perfect For You?</h1>
        <p>Answer 5 quick questions and get personalized retreat recommendations.</p>
      </section>

      <div className={s.quizWrap}>
        {!showGate && !showResults && (
          <>
            <div className={s.progress}>
              <div className={s.progressBar} style={{ width:`${((step + 1) / totalSteps) * 100}%` }} />
            </div>
            <div className={s.stepLabel}>Question {step + 1} of {totalSteps}</div>
            <div className={s.question}>
              <h2>{questions[step].title}</h2>
              <p>{questions[step].sub}</p>
            </div>
            <div className={s.options}>
              {questions[step].options.map(opt => (
                <button key={opt} className={`${s.option} ${answers[questions[step].id] === opt ? s.optionActive : ''}`} onClick={() => selectOption(opt)}>
                  {opt}
                </button>
              ))}
            </div>
            <div className={s.nav}>
              {step > 0 && <button className={s.navBack} onClick={() => setStep(step - 1)}>← Back</button>}
              <div />
            </div>
          </>
        )}

        {showGate && (
          <div className={s.gate}>
            <h2>Unlock Your Personalized Results</h2>
            <p>Enter your details to see your top retreat matches and receive your free planning guide.</p>
            <form className={s.gateForm} onSubmit={handleGateSubmit}>
              <input className={s.gateInput} type="text" placeholder="First Name" value={name} onChange={e => setName(e.target.value)} required />
              <input className={s.gateInput} type="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} required />
              <button type="submit" className="btn btn-primary" style={{ width:'100%', justifyContent:'center' }}>See My Results →</button>
            </form>
          </div>
        )}

        {showResults && (
          <div className={s.results}>
            <div className={s.resultsHeader}>
              <span className={s.resultsType}>Your Match: {answers.style || 'Wellness'} Retreat</span>
              <h2>Your Top 3 Retreat Recommendations</h2>
              <p className="section-subtitle" style={{ margin:'0 auto' }}>Based on your preferences, we think you will love these retreats.</p>
            </div>
            <div className={s.resultsGrid}>
              {resultRetreats.map(r => (
                <div key={r.name} className={s.resultCard}>
                  <div className={s.resultImg}>
                    <Image src={r.img} alt={r.name} fill sizes="33vw" style={{ objectFit:'cover' }} />
                  </div>
                  <div className={s.resultBody}>
                    <h4>{r.name}</h4>
                    <div className={s.resultMeta}>{r.location} · {r.duration} · {r.price}</div>
                    <button className={s.resultBtn}>Book This Retreat →</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <Newsletter />
      <Footer />
    </>
  )
}
