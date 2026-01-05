import { Truck, Home, Building, Box, Globe, ShieldCheck } from 'lucide-react'

const services = [
  {
    name: 'Residential Moving',
    description: 'We offer comprehensive home moving services, from packing to unpacking at your new residence.',
    icon: Home,
  },
  {
    name: 'Commercial Moving',
    description: 'Specialized services for office and business relocations, minimizing downtime and ensuring smooth transitions.',
    icon: Building,
  },
  {
    name: 'Packing Services',
    description: 'Professional packing using high-quality materials to ensure the safety of your belongings during transit.',
    icon: Box,
  },
  {
    name: 'Long Distance Moving',
    description: 'Experienced in managing long-distance moves across states with careful planning and execution.',
    icon: Truck,
  },
  {
    name: 'International Moving',
    description: 'Comprehensive international moving services, handling customs and logistics for a seamless experience.',
    icon: Globe,
  },
  {
    name: 'Storage Solutions',
    description: 'Secure, climate-controlled storage facilities for short-term or long-term needs during your move.',
    icon: ShieldCheck,
  },
]

const Services = () => {
  return (
    <div id="services" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Our Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Moving Solutions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We offer a wide range of moving services tailored to meet your specific needs, ensuring a smooth and stress-free relocation experience.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {services.map((service) => (
              <div key={service.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                    <service.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{service.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{service.description}</dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services

