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
    <div className="space-y-2">
      {/* Timer and Status */}
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-1">
          <Clock className="h-3 w-3 text-muted-foreground" />
          <span className="font-mono text-sm font-semibold">{timer}</span>
        </div>
        <div className="flex items-center gap-1">
          <Zap className="h-3 w-3 text-warning" />
          <Badge variant="outline" className="text-xs px-1">
            {hintsUsed}/{maxHints}
          </Badge>
        </div>
      </div>

      {/* Game Action Buttons - Compact Grid */}
      <div className="grid grid-cols-3 gap-1">
        <Button
          variant={isNotesMode ? "default" : "outline"}
          size="sm"
          onClick={onToggleNotes}
          className={cn(
            "text-xs h-8",
            isNotesMode && "bg-accent text-accent-foreground"
          )}
        >
          <Edit className="h-3 w-3 mr-1" />
          Notas
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={onUndo}
          disabled={!canUndo}
          className="text-xs h-8"
        >
          <Undo className="h-3 w-3 mr-1" />
          Desfazer
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={onHint}
          disabled={hintsUsed >= maxHints}
          className="text-xs h-8"
        >
          <Lightbulb className="h-3 w-3 mr-1" />
          Dica
        </Button>
      </div>

      {/* Navigation Buttons */}
      <div className="grid grid-cols-3 gap-1">
        <Button
          variant="outline"
          size="sm"
          onClick={onRestart}
          className="text-xs h-8"
        >
          <RotateCcw className="h-3 w-3 mr-1" />
          Reiniciar
        </Button>

        <Button
          variant="secondary"
          size="sm"
          onClick={onSave}
          className="text-xs h-8"
        >
          <Save className="h-3 w-3 mr-1" />
          Salvar
        </Button>

        <Button
          variant="secondary"
          size="sm"
          onClick={onHome}
          className="text-xs h-8"
        >
          <Home className="h-3 w-3 mr-1" />
          Menu
        </Button>
      </div>
    </div>
  );
}