/**
 * Industries interests graph section.
 *
 * Functional Requirements:
 * - Render the industries network graph in an explicit-height host so Sigma.js can size on mobile
 * - Use theme card/border tokens and keep the graph full-width within the page container
 */
import IndustriesGraph from './IndustriesGraph';

export default function IndustriesSection() {
  return (
    <section id='industries' className='py-20 bg-background'>
      <div className='container mx-auto px-6'>
        <div className='w-full'>
          <div className='text-center mb-8'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>Interests </h2>
          </div>

          <div className='relative isolate h-[600px] w-full overflow-hidden rounded-lg border border-border bg-card shadow-lg [transform:translateZ(0)]'>
            <IndustriesGraph />
          </div>
        </div>
      </div>
    </section>
  );
}
