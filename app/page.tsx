import { prisma } from '~/lib/prisma';

const getElements = async () => {
  const elements = await prisma.atomic_element.findMany();
  return elements;
};

export const dynamic = 'force-dynamic';

export default async function Home() {
  const elements = await getElements();

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#1A1A1A]">
      <ul className="grid grid-cols-2 md:grid-cols-5 gap-5">
        {elements.map((element) => (
          <li
            key={element.atomic_number}
            className="relative flex flex-col text-center p-5 rounded-md bg-[#00E699] transition-colors hover:bg-[#00e5BF] text-[black]"
          >
            <p className="absolute top-2 left-2 text-sm">
              {element.atomic_number}
            </p>
            <h2 className="text-2xl font-medium">{element.symbol}</h2>
            <p className="text-base">{element.element_name}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
