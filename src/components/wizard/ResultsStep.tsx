import { SearchParamProps, SearchParamPropsKey } from "@/app/page"
import BackButton from "@/components/button/BackButton";
import { Question } from "@/components/modal/Modal"
import Link from "next/link";
import { useWizard } from "react-use-wizard";

type Props = SearchParamProps & {
  data: Question[]
}

export const hasRejectedAnswer = (
  questions: Question[],
  searchParams?: SearchParamProps['searchParams']
): boolean => {
  for (let i = 0; i < questions.length; i++) {
    const key = `q${i}` as SearchParamPropsKey;
    // @ts-ignore
    const selectedValue = searchParams[key];

    if (selectedValue) {
      const question = questions[i];

      // Find the option that matches the selected value
      const selectedOption = question.options.find(
        (option) => option.value.toString() === selectedValue
      );

      // If the option is found and isRejection is true, return true
      if (selectedOption && selectedOption.isRejection) {
        return true;
      }
    }
  }

  // If no rejected answers were found, return false
  return false;
};

const ResultsStep = ({ data, searchParams }: Props) => {
  const { previousStep } = useWizard()
  const isRejected = hasRejectedAnswer(data, searchParams)
  return (
    <div>
      <h2 style={{ marginBottom: '40px'}}>
        {isRejected === true
          ? 'Unfortunately, we are unable to prescribe this medication for you. This is because finasteride can alter the PSA levels, which may be used to monitor for cancer. You should discuss this further with your GP or specialist if you would still like this medication.”'
          : 'Great news! We have the perfect treatment for your hair loss. Proceed to www.manual.co, and prepare to say hello to your new hair!”'
        }
      </h2>
      <BackButton onClick={previousStep}>Go Back</BackButton>
      <Link href="/" style={{ display: 'block', marginTop: '30px'}}>Go to landing page</Link>
    </div>
  )
}

export default ResultsStep