import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Flashcard {
  question: string;
  answer: string;
}

export const FlashcardGenerator = () => {
  const [topic, setTopic] = useState("");
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [loading, setLoading] = useState(false);
  const [flipped, setFlipped] = useState<number | null>(null);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!topic.trim() || loading) return;

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("generate-flashcards", {
        body: { topic },
      });

      if (error) throw error;

      if (data?.flashcards) {
        setFlashcards(data.flashcards);
        toast({
          title: "Success!",
          description: `Generated ${data.flashcards.length} flashcards`,
        });
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to generate flashcards",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          Flashcard Generator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Textarea
            placeholder="Enter a topic or paste text to generate flashcards from... (e.g., 'Solar energy basics' or paste an article)"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="min-h-32"
            disabled={loading}
          />
          <Button onClick={handleGenerate} disabled={loading || !topic.trim()} className="w-full">
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Generate Flashcards
              </>
            )}
          </Button>
        </div>

        {flashcards.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Your Flashcards ({flashcards.length})</h3>
            <div className="grid gap-4">
              {flashcards.map((card, idx) => (
                <div
                  key={idx}
                  onClick={() => setFlipped(flipped === idx ? null : idx)}
                  className="cursor-pointer perspective-1000"
                >
                  <div
                    className={`relative h-48 transition-all duration-500 transform-style-3d ${
                      flipped === idx ? "rotate-y-180" : ""
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg p-6 flex items-center justify-center text-center backface-hidden border border-primary/30">
                      <p className="font-semibold">{card.question}</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg p-6 flex items-center justify-center text-center backface-hidden rotate-y-180 border border-secondary/30">
                      <p>{card.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
