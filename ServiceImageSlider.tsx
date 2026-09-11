import HandbookClient from "./HandbookClient";
import { getAllArticles } from "@/lib/articles";

export default function HandbookPage() {
  const articles = getAllArticles();
  return <HandbookClient articles={articles} />;
}
