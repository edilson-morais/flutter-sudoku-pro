import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Undo, 
  RotateCcw, 
  Lightbulb, 
  Edit, 
  Save,
  Home,
  Clock,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

interface GameControlsProps {
  isNotesMode: boolean;
  hintsUsed: number;
  maxHints: number;
  canUndo: boolean;
  timer: string;
  onToggleNotes: () => void;
  onUndo: () => void;
  onRestart: () => void;
  onHint: () => void;
  onSave: () => void;
  onHome: () => void;
}

export function GameControls({
  isNotesMode,
  hintsUsed,
  maxHints,
  canUndo,
  timer,
  onToggleNotes,
  onUndo,
  onRestart,
  onHint,
  onSave,
  onHome
}: GameControlsProps) {
  return (
    <div className="space-y-4">
      {/* Timer and Status */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span className="font-mono text-lg font-semibold">{timer}</span>
        </div>
        <div className="flex items-center gap-2">
          <Zap className="h-4 w-4 text-warning" />
          <Badge variant="outline">
            {hintsUsed}/{maxHints}
          </Badge>
        </div>
      </div>

      {/* Game Action Buttons */}
      <div className="grid grid-cols-2 gap-2">
        <Button
          variant={isNotesMode ? "default" : "outline"}
          size="sm"
          onClick={onToggleNotes}
          className={cn(
            "flex items-center gap-2",
            isNotesMode && "bg-accent text-accent-foreground"
          )}
        >
          <Edit className="h-4 w-4" />
          Notas
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={onUndo}
          disabled={!canUndo}
        >
          <Undo className="h-4 w-4" />
          Desfazer
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={onHint}
          disabled={hintsUsed >= maxHints}
        >
          <Lightbulb className="h-4 w-4" />
          Dica
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={onRestart}
        >
          <RotateCcw className="h-4 w-4" />
          Reiniciar
        </Button>
      </div>

      {/* Navigation Buttons */}
      <div className="grid grid-cols-2 gap-2">
        <Button
          variant="secondary"
          size="sm"
          onClick={onSave}
        >
          <Save className="h-4 w-4" />
          Salvar
        </Button>

        <Button
          variant="secondary"
          size="sm"
          onClick={onHome}
        >
          <Home className="h-4 w-4" />
          Menu
        </Button>
      </div>
    </div>
  );
}