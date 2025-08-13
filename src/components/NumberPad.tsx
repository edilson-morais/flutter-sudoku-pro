import { Button } from "@/components/ui/button";
import { Eraser } from "lucide-react";
import { cn } from "@/lib/utils";

interface NumberPadProps {
  onNumberSelect: (number: number) => void;
  onErase: () => void;
  disabled?: boolean;
}

export function NumberPad({ onNumberSelect, onErase, disabled }: NumberPadProps) {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="bg-card rounded-lg p-1.5 sm:p-2 shadow-lg max-w-sm mx-auto">
      <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
        {numbers.map((number) => (
          <Button
            key={number}
            variant="outline"
            onClick={() => onNumberSelect(number)}
            disabled={disabled}
            className={cn(
              "h-9 sm:h-10 text-sm sm:text-base font-bold aspect-square",
              "hover:bg-primary hover:text-primary-foreground",
              "active:scale-95 transition-transform"
            )}
          >
            {number}
          </Button>
        ))}
        
        {/* Erase button takes up space of one number */}
        <Button
          variant="destructive"
          onClick={onErase}
          disabled={disabled}
          className="h-9 sm:h-10 flex items-center justify-center col-start-2 aspect-square"
        >
          <Eraser className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}