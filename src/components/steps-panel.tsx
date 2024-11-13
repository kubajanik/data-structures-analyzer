import { Button } from "./button";

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
      <Button onClick={() => onStepChange(step - 1)} isDisabled={step === 0}>
        Prev step
      </Button>
      <Button
        onClick={() => onStepChange(step + 1)}
        isDisabled={step === stepsCount - 1}
      >
        Next step
      </Button>
    </div>
  );
};
