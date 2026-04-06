export async function generateMetadata({ params }) {
  const step = parseInt(params.step);

  return {
    title: `Mindfulness Step ${step + 1} – Silence Space`,
    description:
      "Follow a calming mindfulness journey to relax your mind, reduce stress, and find inner peace.",
  };
}