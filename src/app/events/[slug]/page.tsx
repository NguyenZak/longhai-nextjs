// ❌ KHÔNG "use client" ở đây
import { notFound } from "next/navigation";
import { events } from "@/data/events";
import EventDetail from "@/components/EventDetail";
export async function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug,
  }));
}
export type paramsType = Promise<{ slug: string }>;

export default async function EventDetailPage(props: { params: paramsType }) {
  const params = await props.params;
  const event = events.find((e) => e.slug === params.slug);
  if (!event) return notFound();

  return <EventDetail event={event} />;
}
