import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Lesson from "./pages/Lesson";
import Quiz from "./pages/Quiz";
import Chart from "./pages/Chart";
import Grammar from "./pages/Grammar";
import GrammarTopic from "./pages/GrammarTopic";
import Vocabulary from "./pages/Vocabulary";
import VocabDeckPage from "./pages/VocabDeck";
import Phrases from "./pages/Phrases";
import PhraseDeckPage from "./pages/PhraseDeck";
import Dialogues from "./pages/Dialogues";
import DialogueView from "./pages/DialogueView";
import Pronunciation from "./pages/Pronunciation";
import ColloquialPath from "./pages/ColloquialPath";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="learn/:section" element={<Lesson />} />
        <Route path="quiz/:section" element={<Quiz />} />
        <Route path="chart" element={<Chart />} />
        <Route path="grammar" element={<Grammar />} />
        <Route path="grammar/:topicId" element={<GrammarTopic />} />
        <Route path="words" element={<Vocabulary />} />
        <Route path="words/:deckId" element={<VocabDeckPage />} />
        <Route path="phrases" element={<Phrases />} />
        <Route path="phrases/:deckId" element={<PhraseDeckPage />} />
        <Route path="dialogues" element={<Dialogues />} />
        <Route path="dialogues/:dialogueId" element={<DialogueView />} />
        <Route path="pronunciation" element={<Pronunciation />} />
        <Route path="colloquial-path" element={<ColloquialPath />} />
      </Route>
    </Routes>
  );
}
