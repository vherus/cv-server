import Experience from "@/dal/experience/Experience"

const data: Experience[] = [
  {
    id: 1,
    title: 'Software Engineering Teacher & Teacher Coordinator',
    company: 'Boolean UK',
    description:  'Responsible for designing and delivering a 6 month, full-time software development course. The curriculum takes career changers through a full web stack including JS, JS DOM, HTML/CSS, React, Express, relational databases and PrismaJS.\n\nOther responsibilities include coordinating teacher schedules, tracking new curriculum development and acting as a team lead for cohorts of 30 people taking part in a month-long agile development simulation.',
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
    title: 'Freelance Developer & Sabbatical',
    company: 'Self-employed',
    description:  'Contracted by social media entrepreneurs to set up infrastructure for acquiring clients. This mostly involved aggregating data from platforms such as ClickFunnels, Teachable, Stripe and ActiveCampaign into a dashboard style React/Electron app for reporting & charting purposes.\n\nI took a sabbatical between April - August 2021 to avoid burn-out.',
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
    title: 'Full Stack Developer',
    company: 'Horizen (formerly ZenCash)',
    description:  'Primary developer of the flagship cryptocurrency wallet “Sphere by Horizen”. This was my first exposure to Electron and React (class based). I also developed a market maker bot in Java designed to automate trading between exchange platforms.',
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
    description:  'Developer on an in-house internal system that processed CapitalOne pre-paid reward cards for customers making large purchases. Involved a lot of test-driven development, object-oriented programming, batch data processing and API integrations with payment providers.',
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
    title: 'Backend Developer & App Maintenance',
    company: 'Accenture',
    description:  'Worked on middleware systems designed to connect various NHS systems through a centralised data stream, primarily x-ray image processing servers.',
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
    description:  'Worked on a small team developing pipeline corrosion reporting software for the oil & gas industry. Clients included Maersk, Centrica and Shell.',
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