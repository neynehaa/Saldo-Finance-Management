"use client";

import { Sparkles } from "lucide-react";
import { Button } from "../ui/Button";

interface AiInsightProps {
  message?: string;
  onViewInsight?: () => void;
}

const DEFAULT_MESSAGE =
  "You spent 14% more on food this month, while your overall savings increased by 8%.";

export function AiInsight({
  message = DEFAULT_MESSAGE,
  onViewInsight,
}: AiInsightProps) {
  return (
    <section className="mt-14 border-t border-[#E4E8E3] pt-7 flex flex-col md:flex-row justify-between items-start gap-6">
      <div>
        <div className="flex items-center gap-2 font-bold text-sm text-[#17201C]">
          <Sparkles className="h-4 w-4 text-[#477A65]" />
          Your money, summarized
        </div>
        <p className="text-sm text-[#7B8580] mt-2.5 max-w-lg leading-relaxed">
          {message}
        </p>
      </div>
      <Button variant="normal" onClick={onViewInsight}>
        View insight
      </Button>
    </section>
  );
}