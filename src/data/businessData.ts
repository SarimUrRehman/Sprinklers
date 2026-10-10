export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  estimatedTime: string;
  startingPrice: string;
  image?: string;
  badge?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  service: string;
  comment: string;
  verified: boolean;
}

export interface DiagnosticIssue {
  id: string;
  symptom: string;
  title: string;
  severity: 'Urgent' | 'Moderate' | 'Routine';
  likelyCauses: string[];
  recommendedAction: string;
  estimatedFixTime: string;
}

export const BUSINESS_INFO = {
  name: 'Clean Water Sprinklers',
  rating: 4.7,
  reviewCount: 26,
  category: 'Lawn sprinkler system contractor',
  address: '12007 Moonglow Dr, Houston, TX 77038, United States',
  street: '12007 Moonglow Dr',
  cityStateZip: 'Houston, TX 77038',
  phone: '+1 281-467-5859',
  phoneDisplay: '(281) 467-5859',
  email: 'service@cleanwatersprinklers.com',
  hours: 'Monday – Saturday: 7:00 AM – 6:30 PM | Sunday: Emergency On-Call',
  license: 'TCEQ Licensed Texas Irrigation Specialist & Insured',
  establishedYear: '2011',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'repair',
    title: 'Sprinkler Repair & Head Replacement',
    tagline: 'Fast fix for broken heads, stuck valves, and underground leaks',
    description:
      'We quickly identify and resolve broken rotors, spray nozzles, leaky solenoid valves, and wiring faults. Specially tuned for Houston gumbo clay shifting.',
    features: [
      'Commercial-grade Rain Bird & Hunter replacement heads',
      'Electronic valve locator & wire fault diagnosis',
      'Underground lateral line PVC pipe repair',
      'Nozzle arc & radius pattern fine-tuning',
    ],
    estimatedTime: '1 – 2 hours',
    startingPrice: '$89 diagnostic fee applied to repair',
    image: '/src/assets/images/technician_repair_1791664130524.jpg',
  },
  {
    id: 'installation',
    title: 'Complete Lawn Sprinkler Installation',
    tagline: 'Custom engineered irrigation designed for maximum turf health',
    description:
      'Every lawn is mapped for head-to-head 100% precipitation coverage, separating shady turf, sunny bermuda/st. augustine grass, and garden beds into dedicated micro-zones.',
    features: [
      'Precision hydraulic layout with matched precipitation',
      'Deep root watering with minimal runoff',
      'Trenchless vibratory plow lawn protection',
      'Complete 1-year parts & labor warranty',
    ],
    estimatedTime: '1 – 2 business days',
    startingPrice: 'Free in-person estimate',
    image: '/src/assets/images/hero_sprinkler_lawn_1791664116220.jpg',
  },
  {
    id: 'smart-upgrade',
    title: 'Smart Wi-Fi Controller Retrofits',
    tagline: 'Save 30-50% on municipal water bills with weather-predictive controls',
    description:
      'Upgrade obsolete dial clocks to smartphone-controlled controllers (Rachio, Hunter Hydrawise). Automatically skips watering when rain, wind, or Houston freezes are detected.',
    features: [
      'Hyper-local NOAA satellite weather skipping',
      'Remote smartphone control & zone leak alerts',
      'EPA WaterSense certified (qualifies for city rebates)',
      'Freeze prevention auto-shutoff sensor integration',
    ],
    estimatedTime: '1.5 – 2.5 hours',
    startingPrice: 'From $279 installed',
    image: '/src/assets/images/smart_controller_1791664143649.jpg',
  },
  {
    id: 'backflow',
    title: 'Texas Backflow Testing & Certification',
    tagline: 'City of Houston & Harris County municipal compliance testing',
    description:
      'Keep your household potable drinking water safe from lawn fertilizer back-siphonage. Certified testing, repair of Double Check (DCVA) and RPZ assemblies.',
    features: [
      'TCEQ certified backflow prevention assembly testing',
      'Official City of Houston digital compliance submission',
      'Emergency rebuild of cracked or leaking backflow valves',
      'Winter thermal insulation wraps installed',
    ],
    estimatedTime: '45 – 60 minutes',
    startingPrice: '$95 certified test',
  },
  {
    id: 'drip-irrigation',
    title: 'Drip Irrigation & Foundation Watering',
    tagline: 'Protect home foundations and flowerbeds from Texas drought',
    description:
      'Houston clay soils expand and contract severely between wet and dry spells. Our slow-drip foundation lines prevent costly slab cracking while nourishing ornamentals.',
    features: [
      'Pressure-compensating emitter tubing along perimeter slabs',
      'Flowerbed micro-spray and bubbler zones',
      'Direct root hydration eliminating evaporation waste',
      'Low-volume pressure regulation valves',
    ],
    estimatedTime: '3 – 5 hours',
    startingPrice: 'Custom quote per linear foot',
    image: '/src/assets/images/water_efficiency_lawn_1791664154797.jpg',
  },
  {
    id: 'tune-up',
    title: 'Seasonal System Audit & Tune-Up',
    tagline: 'Full 18-point seasonal inspection before Houston summer heat',
    description:
      'Ensure every zone fires properly, spray patterns do not hit driveways or windows, pressure is calibrated, and rain sensors respond before summer peaks.',
    features: [
      'Full valve box check and wiring continuity check',
      'Filter basket cleaning and clogged nozzle clearing',
      'Rain and freeze sensor responsiveness test',
      'Run-time optimization for Houston seasonal guidelines',
    ],
    estimatedTime: '1 – 1.5 hours',
    startingPrice: '$99 complete system audit',
  },
];

export const INITIAL_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Marcus Vance',
    location: 'North Houston (Moonglow Dr area)',
    rating: 5,
    date: '2 weeks ago',
    service: 'Sprinkler Repair & Head Replacement',
    comment:
      'Called Clean Water Sprinklers when a lawnmower clipped two of my rotor heads and flooded my front lawn. They arrived the same afternoon, replaced both heads with heavy-duty Rain Birds, and adjusted the coverage so my driveway is completely dry. Extremely honest pricing.',
    verified: true,
  },
  {
    id: 'rev-2',
    author: 'Elena Rodriguez',
    location: 'Aldine / Houston, TX',
    rating: 5,
    date: '1 month ago',
    service: 'Smart Wi-Fi Controller Retrofits',
    comment:
      'They upgraded our old 1990s Rain Bird dial box to a smart Wi-Fi controller with rain freeze sensors. The technician walked me through the phone app and set up our custom Houston watering schedule. My water bill dropped over 35% this past month!',
    verified: true,
  },
  {
    id: 'rev-3',
    author: 'David Chen',
    location: 'Spring / North Harris County',
    rating: 5,
    date: '2 months ago',
    service: 'Complete Lawn Sprinkler Installation',
    comment:
      'Clean Water Sprinklers installed an 8-zone sprinkler system on our new construction home. Clean trenches, neat plumbing near the meter, and not a single dry spot anywhere on our St. Augustine turf. 4.7 stars is well earned.',
    verified: true,
  },
  {
    id: 'rev-4',
    author: 'Brenda Miller',
    location: 'Inwood Forest / Houston',
    rating: 4,
    date: '3 months ago',
    service: 'Texas Backflow Testing',
    comment:
      'Very prompt service for our annual backflow device inspection. Filed the paperwork directly with the city water authority so I did not have to deal with municipal bureaucracy.',
    verified: true,
  },
  {
    id: 'rev-5',
    author: 'Carlos Gutierrez',
    location: 'Greenspoint / Houston, TX',
    rating: 5,
    date: '4 months ago',
    service: 'Sprinkler Repair',
    comment:
      'Had an underground pipe leak under a tree root that two other contractors refused to touch. The Clean Water Sprinklers crew dug carefully, bypassed the root, fixed the 1-inch line, and put the sod back neatly. You can barely tell they worked there.',
    verified: true,
  },
  {
    id: 'rev-6',
    author: 'Tamara Washington',
    location: 'Houston, TX 77038',
    rating: 5,
    date: '5 months ago',
    service: 'Drip Irrigation & Foundation Watering',
    comment:
      'Installed drip lines around our foundation to stop the gumbo clay from shrinking during Texas summer heat. Great communication from start to finish. Local neighborhood business we love supporting.',
    verified: true,
  },
  {
    id: 'rev-7',
    author: 'Robert Sterling',
    location: 'Champions / Willowbrook',
    rating: 4,
    date: '6 months ago',
    service: 'Seasonal System Audit',
    comment:
      'Spring tune-up was thorough. Found a hidden valve that was stuck open and wasting gallons. Arrived 15 minutes late due to I-45 traffic, but made up for it with first-class workmanship.',
    verified: true,
  },
];

export const DIAGNOSTIC_ISSUES: DiagnosticIssue[] = [
  {
    id: 'diag-1',
    symptom: 'Water bubbling or pooling around head when system is running',
    title: 'Cracked Head Body or Broken Swing Joint',
    severity: 'Urgent',
    likelyCauses: [
      'Lawnmower impact or vehicle weight',
      'Underground flex pipe shear or broken riser',
      'Cracked nozzle wiper seal allowing high pressure blow-by',
    ],
    recommendedAction:
      'Turn off water to that zone to avoid soil erosion under turf. Have technician dig out and replace the riser assembly and pop-up casing.',
    estimatedFixTime: '30 – 45 min',
  },
  {
    id: 'diag-2',
    symptom: 'Sprinkler heads will not pop up or have very weak spray',
    title: 'Low Zone Water Pressure or Silt Clogging',
    severity: 'Moderate',
    likelyCauses: [
      'Underground lateral line crack releasing pressure before heads',
      'Main solenoid valve partially clogged with sediment',
      'Backflow preventer shut-off valve is partially closed',
    ],
    recommendedAction:
      'Inspect valve diaphragm and perform line pressure test to locate the underground rupture.',
    estimatedFixTime: '45 – 90 min',
  },
  {
    id: 'diag-3',
    symptom: 'Sprinklers keep running even after timer turns off',
    title: 'Stuck Solenoid or Debris in Valve Diaphragm',
    severity: 'Urgent',
    likelyCauses: [
      'Grit or sand trapped inside rubber diaphragm seat',
      'Burnt out 24V solenoid sticking in open position',
      'Manual bleed screw left open in valve box',
    ],
    recommendedAction:
      'Immediately shut the isolation valve at the backflow preventer. The valve bonnet must be disassembled and cleaned or rebuilt.',
    estimatedFixTime: '30 – 60 min',
  },
  {
    id: 'diag-4',
    symptom: 'Lawn has yellow / brown dry patches between heads',
    title: 'Uneven Spray Radius or Clogged Nozzle Filter',
    severity: 'Routine',
    likelyCauses: [
      'Nozzle micro-filter screen clogged with calcium or debris',
      'Incorrect nozzle arc angle leaving blind spots',
      'Tall grass or shrubbery physically obstructing water trajectory',
    ],
    recommendedAction:
      'Clean nozzle filters and readjust rotor arcs for head-to-head 100% overlap coverage.',
    estimatedFixTime: '30 – 60 min',
  },
  {
    id: 'diag-5',
    symptom: 'Controller screen is blank or displays "FAULT" / "ERR"',
    title: 'Field Wire Short or Blown Transformer',
    severity: 'Moderate',
    likelyCauses: [
      'Severed common ground wire from landscape edging or digging',
      'Power surge or lightening spike damaging the 24VAC transformer',
      'Short circuit in one specific zone solenoid',
    ],
    recommendedAction:
      'Multimeter resistance test across common wire terminals and solenoid coils to isolate the short circuit.',
    estimatedFixTime: '45 – 90 min',
  },
];

export const SERVICE_ZIP_CODES = [
  { zip: '77038', area: 'North Houston / Moonglow Dr (Home Base)', status: 'Same-Day Priority' },
  { zip: '77066', area: 'Champions / Klein', status: 'Same-Day Available' },
  { zip: '77067', area: 'Greenspoint / North Houston', status: 'Same-Day Priority' },
  { zip: '77086', area: 'Inwood / Antoine', status: 'Same-Day Priority' },
  { zip: '77014', area: 'Aldine / Westfield', status: 'Same-Day Priority' },
  { zip: '77060', area: 'North Belt / Imperial Valley', status: 'Same-Day Available' },
  { zip: '77090', area: 'FM 1960 / Cypress Creek', status: 'Same-Day Available' },
  { zip: '77073', area: 'Spring / Hardy Toll Rd', status: 'Next-Day Guaranteed' },
  { zip: '77379', area: 'Klein / Spring', status: 'Next-Day Guaranteed' },
  { zip: '77380', area: 'The Woodlands South', status: 'Next-Day Guaranteed' },
  { zip: '77040', area: 'Jersey Village / Northwest', status: 'Next-Day Guaranteed' },
  { zip: '77064', area: 'Willowbrook / Fallbrook', status: 'Next-Day Guaranteed' },
  { zip: '77396', area: 'Humble / Fall Creek', status: 'Next-Day Guaranteed' },
];

export const FAQS = [
  {
    question: 'How quickly can Clean Water Sprinklers respond for emergency sprinkler repairs?',
    answer:
      'For active geysers, broken mainline pipes, or valves that will not shut off, we offer same-day priority dispatch across the Houston 77038 and North Harris County area. Call us immediately at +1 281-467-5859.',
  },
  {
    question: 'Are you licensed and insured for irrigation in Texas?',
    answer:
      'Yes. In the state of Texas, all irrigation installations and backflow testing must follow Texas Commission on Environmental Quality (TCEQ) regulations. Clean Water Sprinklers adheres to all state and local building codes, with full general liability coverage.',
  },
  {
    question: 'Can you convert my existing sprinkler system to a smart phone-controlled controller?',
    answer:
      'Yes! We frequently upgrade older timer boxes to modern smart controllers like Rachio or Hunter Hydrawise. They connect to your home Wi-Fi, monitor live Houston weather forecasts, and automatically pause watering before storms or freezes.',
  },
  {
    question: 'Why are backflow prevention tests required in Houston?',
    answer:
      'Your backflow preventer stops fertilizer, pesticides, and stagnant lawn water from siphoning back into your clean household tap water during municipal pressure drops. Texas municipalities mandate annual testing to protect drinking water safety.',
  },
  {
    question: 'How many zones do I need for my yard?',
    answer:
      'A typical residential Houston yard (4,000–8,000 sq ft) needs between 4 and 8 zones. We zone systems based on sun exposure, plant water requirements (grass vs. shrub beds), and available municipal water pressure (GPM). Use our interactive quote estimator above for an instant preview.',
  },
];
