// utils
import { CustomElement, Tables } from "@/utils/types";
import { getAll } from "@/actions/portfolio/actions";
import { render } from "@/utils/render-engine/parser";

export default async function Home() {
  const data: { id: string; content: CustomElement[] }[] = await getAll<{ id: string; content: CustomElement[] }>(Tables.portfolio);

  if (!data) {
    return;
  }

  const parsedData = await render(data);

  return (
    <main>
      {parsedData}
    </main>
  );
}
