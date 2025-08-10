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
    <div className="bg-card rounded-lg p-4 shadow-lg">
      <div className="grid grid-cols-3 gap-3">
        {numbers.map((number) => (
          <Button
            key={number}
            variant="outline"
            size="lg"
            onClick={() => onNumberSelect(number)}
            disabled={disabled}
            className={cn(
              "h-12 text-lg font-bold",
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
          size="lg"
          onClick={onErase}
          disabled={disabled}
          className="h-12 flex items-center justify-center col-start-2"
        >
          <Eraser className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}