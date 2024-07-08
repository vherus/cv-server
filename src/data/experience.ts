import Experience from "../dal/experience/Experience"

const data: Experience[] = [
  {
    id: 1,
    title: 'Software Engineering Teacher & Teacher Coordinator',
    company: 'Boolean UK',
    description: `&#8226; Designed and delivered a 6-month full-stack software engineering curriculum.\n\n
    &#8226; Led team development simulations for 30-40 junior developers, delivering production-grade applications.\n\n
    &#8226; Conducted pair programming and code review sessions consistently.\n\n
    &#8226; Produced detailed technical documentation.\n\n
    &#8226; Implemented unit test suites for practical exercises to validate coursework completion.`,
    dateFrom: 'August 2021',
    dateTo: 'Present',
    tech: [
      'Javascript',
      'Typescript',
      'React',
      'HTML',
      'CSS',
      'NodeJS',
      'Express',
      'Prisma',
      'Postgres',
      'SQL'
    ]
  },
  {
    id: 2,
    title: 'Full-stack Developer',
    company: 'Self-employed',
    description: `&#8226; Created a dashboard-style React/Electron application for social media entrepreneurs to report and visualize data.\n\n
    &#8226; Aggregated data from various platforms such as ClickFunnels, Teachable and Stripe.`,
    dateFrom: 'November 2019',
    dateTo: 'August 2021',
    tech: [
      'Javascript',
      'HTML',
      'CSS',
      'React',
      'SQLite',
      'Electron',
      'Highcharts'
    ]
  },
  {
    id: 3,
    title: 'Full-stack Developer',
    company: 'Horizen (formerly ZenCash)',
    description: `&#8226; Developed the flagship cryptocurrency wallet 'Sphere by Horizen' using Electron & React.\n\n
    &#8226; Implemented a substantial performance enhancement for unspent transaction handling.\n\n
    &#8226; Designed and implemented a Java bot to automate trading across exchange platforms.`,
    dateFrom: 'April 2018',
    dateTo: 'November 2019',
    tech: [
      'Javascript',
      'React',
      'SQLite',
      'Electron',
      'Java',
      'lots of CLI'
    ]
  },
  {
    id: 4,
    title: 'Backend Developer',
    company: 'Opia',
    description: `&#8226; Developed REST API systems to generate and report on CapitalOne pre-paid reward cards.\n\n
    &#8226; Utilized TDD, OOP, batch data processing, and integrated payment provider APIs.\n\n
    &#8226; Implemented CQRS architecture to scale query and command bus systems separately.\n\n
    &#8226; Designed event sourcing systems to maintain immutable, re-playable application states.`,
    dateFrom: 'June 2016',
    dateTo: 'March 2018',
    tech: [
      'PHP 7',
      'Laravel',
      'Javascript',
      'VueJS',
      'AngularJS',
      'Postgres',
      'Docker',
      'RAML'
    ]
  },
  {
    id: 5,
    title: 'Backend Developer',
    company: 'Accenture',
    description: `&#8226; Developed middleware systems for NHS data streams and x-ray image processing.\n\n
    &#8226; Created a dashboard using vanilla PHP, HTML & CSS to report on NHS server states.`,
    dateFrom: 'January 2015',
    dateTo: 'April 2016',
    tech: [
      'PHP 5',
      'Javascript',
      'C#',
      '.NET',
      'MS Service Bus',
      'Active Directory',
      'HTML',
      'CSS',
      'lots of SQL and CLI'
    ]
  },
  {
    id: 6,
    title: 'Software Developer (Entry-level)',
    company: 'Strategic Corrosion Management',
    description: `&#8226; Developed pipeline corrosion reporting software for clients such as Maersk, Centrica, and Shell.\n\n
    &#8226; Generated useful reports from a denormalised, poorly implemented legacy database by writing complex SQL statements.`,
    dateFrom: 'August 2013',
    dateTo: 'January 2015',
    tech: [
      'Javascript',
      'Java',
      'Servoy',
      'Jasper Reports',
      'Highcarts',
      'T-SQL',
      'Microsoft SQL Server'
    ]
  }
]

export default data