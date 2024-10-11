import { LinkButton } from "../link-button";

interface StepsPanelProps {
  step: number;
  stepsCount: number;
}

export const StepsPanel = ({ step, stepsCount }: StepsPanelProps) => {
  return (
    <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-4">
      <LinkButton to={{ search: "?step=0" }} isDisabled={step === 0}>
        Reset
      </LinkButton>
      <LinkButton to={{ search: `?step=${step - 1}` }} isDisabled={step === 0}>
        Prev step
      </LinkButton>
      <LinkButton
        to={{ search: `?step=${step + 1}` }}
        isDisabled={step === stepsCount - 1}
      >
        Next step
      </LinkButton>
    </div>
  );
};
