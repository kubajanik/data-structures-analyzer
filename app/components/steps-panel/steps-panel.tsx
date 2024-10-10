import { Button } from "../button";

interface StepsPanelProps {
  step: number;
  stepsCount: number;
  onStepChange: (step: number) => void;
}

export const StepsPanel = ({
  step,
  stepsCount,
  onStepChange,
}: StepsPanelProps) => {
  return (
    <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-4">
      <Button onClick={() => onStepChange(0)} isDisabled={step === 0}>
        Reset
      </Button>
      <Button
        isDisabled={step === 0}
        onClick={() => onStepChange(step !== 0 ? step - 1 : step)}
      >
        Prev step
      </Button>
      <Button
        isDisabled={step === stepsCount - 1}
        onClick={() => onStepChange(step < stepsCount - 1 ? step + 1 : step)}
      >
        Next step
      </Button>
    </div>
  );
};
