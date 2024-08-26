// 'use client';

import { redirect, useRouter } from 'next/navigation';
import styles from './Modal.module.css';
import Link from 'next/link';
import { SearchParamProps } from '@/app/page';
import { cache } from 'react';
import QuestionWizard from '@/components/wizard/QuestionWizard';

export type QuestionOption = {
  display: string;
  value: string | boolean;
  isRejection: boolean;
}

export type Question = {
  question: string;
  type: string;
  options: QuestionOption[];
}

export type QuizData = {
  questions: Question[];
}

export const fetchData = cache(async (): Promise<QuizData> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data.json`, { cache: 'force-cache' })
    //  next: { revalidate: 86400 }, // Revalidate every 24 hours
    .catch(e => redirect('/'));

  if (!res.ok) throw new Error('Failed to fetch data');

  return res.json();
});

const Modal = async ({ searchParams }:SearchParamProps) => {
  const { questions } = await fetchData();

  return (
    <div className={styles.modal}>
    {/* <Link href="/">Go Back</Link> */}
      <div className={styles.content}>
        <QuestionWizard questions={questions} searchParams={searchParams} />
      </div>
    </div>
  );
};

export default Modal;