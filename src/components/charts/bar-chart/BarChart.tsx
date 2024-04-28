import { Bar } from "./Bar";

interface BarChartProps {
  positives: number[];
  negatives: number[];
}

const MAX_BAR_SIZE = 64;

export function BarChart({ positives, negatives }: Readonly<BarChartProps>) {
  const numberOfBars = Math.max(positives.length, negatives.length);

  if (numberOfBars === 0) {
    return null;
  }

  let totalSavings = positives.reduce((sum, positive) => sum + positive, 0);
  totalSavings = negatives.reduce(
    (sum, negative) => sum - negative,
    totalSavings
  );

  normalize(positives, negatives);

  return (
    <div className="w-80 h-fit bg-secondary-surface px-10 py-4 rounded-xl my-4 mx-auto md:mx-4">
      <h3 className="text-on-secondary-surface font-semibold -translate-x-4">
        {"Total Savings "}
        <strong className="font-bold text-primary">${totalSavings}</strong>
      </h3>
      <span className="text-xs -translate-x-4 block">(Past 7 days)</span>
      <div className="flex w-full h-32 md:h-40 justify-between items-center">
        {Array(numberOfBars)
          .fill(0)
          .map((_, index) => (
            <Bar
              key={index}
              positive={positives[index] ?? 0}
              negative={negatives[index] ?? 0}
            />
          ))}
      </div>
    </div>
  );
}

function normalize(positives: number[], negatives: number[]) {
  let max = positives[0];

  for (const value of positives) {
    max = Math.max(max, value);
  }
  for (const value of negatives) {
    max = Math.max(max, value);
  }

  let normalizationFactor = MAX_BAR_SIZE / max;

  for (let i = 0; i < positives.length; i++) {
    positives[i] *= normalizationFactor;
  }
  for (let i = 0; i < negatives.length; i++) {
    negatives[i] *= normalizationFactor;
  }
}
