import { SearchParamProps, SearchParamPropsKey } from "@/app/page";
import { Question } from "@/components/modal/Modal";
import classes from './Wizard.module.css'
import { useWizard } from "react-use-wizard";
import { redirect, useRouter } from "next/navigation";
import Button from "@/components/button/Button";
import BackButton from "@/components/button/BackButton";

type Props = SearchParamProps & {
  data: Question;
  name: string;
  step: number;
}

type FormatUrlParams = {
  key: SearchParamPropsKey;
  value: string;
};

const formatUrl = ({ key, value }: FormatUrlParams, q0?: string, q1?: string, q2?: string) => {
  let url = new URL('/?modal=true', `${process.env.NEXT_PUBLIC_BASE_URL}`); // Base URL with modal=true

  // Add or update query parameters for q0, q1, q2
  if (q0) url.searchParams.set('q0', q0);
  if (q1) url.searchParams.set('q1', q1);
  if (q2) url.searchParams.set('q2', q2);

  // If the key and value are provided, set or overwrite them
  if (key && value) url.searchParams.set(key, value);

  // Return the formatted URL string (without the base domain)
  return url.pathname + url.search;
};

const QuestionStep = ({name, data, searchParams, step}: Props) => {
  const { nextStep, previousStep, activeStep, isFirstStep  } = useWizard()
  const router = useRouter();
  console.log({searchParams})
  const key = `q${step}` as SearchParamPropsKey

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q0 = searchParams?.["q0"];
    const q1 = searchParams?.["q1"];
    const q2 = searchParams?.["q2"];
    const value = e.target.value
    // const encoded = encodeURIComponent(value)
    const url = formatUrl({ key, value }, q0, q1, q2)
    // const newSearchParams = new URLSearchParams()
    router.push(url)
    nextStep()
  }

  const handleBack = () => {
    previousStep()
  }

  return (
    <div>
      <h2 className={classes.title}>{data.question}</h2>
      <div className={classes["radio-group"]}>
      {data.options.map((option, i) => {
        return (
        <div className={classes.radio} key={i}>
          <div dangerouslySetInnerHTML={{__html:option.display}} />
          <label htmlFor={option.value.toString()}>{option.value}</label>
          <input type="radio" name={name} value={option.value.toString()} id={option.value.toString()} onChange={handleChange} checked={option.value.toString() === searchParams?.[key as SearchParamPropsKey]}/>
        </div>
      )}
      )}
      </div>
      {!isFirstStep && <BackButton onClick={handleBack}>Go Back</BackButton>}
    </div>
  )
}

export default QuestionStep