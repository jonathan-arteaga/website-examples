import { Metadata } from 'next';
import { PropertyScheduleTourPage } from '@hearthmere/ui';
import { ScheduleTourForm } from '@caldridge/components/forms/ScheduleTourForm';
import { propertyConfig } from '@caldridge/config/property';

export const metadata: Metadata = {
  title: 'Tour Request Demo',
  description: `Preview a browser-only tour-request flow for fictional ${propertyConfig.name}. No appointment is created.`,
  alternates: { canonical: '/caldridge/schedule-tour' },
};

interface ScheduleTourPageProps {
  searchParams: Promise<{ plan?: string }>;
}

export default async function ScheduleTourPage({ searchParams }: ScheduleTourPageProps) {
  const params = await searchParams;
  const defaultFloorPlan = params.plan;

  return (
    <PropertyScheduleTourPage
      propertyName={propertyConfig.name}
      officeHours={propertyConfig.contact.officeHours}
      tourHours={propertyConfig.contact.tourHours}
      scheduleTourForm={<ScheduleTourForm defaultFloorPlan={defaultFloorPlan} />}
    />
  );
}
