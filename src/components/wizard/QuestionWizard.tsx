
'use client'
import { SearchParamProps } from '@/app/page';
import { fetchData, Question } from '@/components/modal/Modal';
import QuestionStep from '@/components/wizard/QuestionStep';
import ResultsStep from '@/components/wizard/ResultsStep';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useWizard, Wizard } from 'react-use-wizard';

type Props = SearchParamProps & {
  questions: Question[];
}

const getStartIndex = (searchParams?: SearchParamProps['searchParams']) => {
  if (searchParams?.["q2"])  return 3
  else if (searchParams?.["q1"])  return 2
  else if (searchParams?.["q0"])  return 1
  else return 0
}

const QuestionWizard =  ({questions ,searchParams}: Props) => {
  const start = getStartIndex(searchParams);
  const router = useRouter()
  
  const handlePopState = () => window.location.reload()

  useEffect(() => {
    // router.refresh() not working
    window.addEventListener('popstate', handlePopState);
    
    // Clean up event listener
    return () => window.removeEventListener('popstate', handlePopState);
  }, [window.location])

  return (
    <Wizard startIndex={start}>
      {questions.map((q, i) => {
        return <QuestionStep key={i} data={q} searchParams={searchParams} name={`question-${i}`} step={i} />
      })}
      <ResultsStep data={questions} searchParams={searchParams} />
    </Wizard>
  )
}

export default QuestionWizard