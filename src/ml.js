import Vue from 'vue';
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage';
Vue.use(MLInstaller);

export default new MLCreate({
    initial: 'DE',
    save: process.env.NODE_ENV === 'production',
    languages: [
        new MLanguage('EN').create({
            pagination: {
                next: 'Next',
                prev: 'Previous',
                toEnd: 'To the end',
                toStart: 'To the beginning'
            },
            navbar: [
                {
                    title: "Home",
                    link: "/"
                },
                {
                    title: "Services",
                    link: "/consultings"
                },
                {
                    title: "Products",
                    link: "/produkte"
                },
                {
                    title: 'References',
                    id: 'Referenzen',
                    link: '/referenzen'
                },
                {
                    title: "Team morEnergy",
                    link: "/team-morenergy"
                },
                {
                    title: "News",
                    link: "/aktuelles"
                },
                {
                    title: "Videos",
                    link: "/videos"
                },
                {
                    title: "Presentations",
                    link: "/presentations"
                },
                {
                    title: "Contact",
                    link: "/kontakt"
                },
            ],
            feedback: {
                title: 'Contact us',
                subtitle: 'We will be glad to get your message',
                name: 'First name, Last name',
                phone: 'Phone number',
                email: 'E-mail',
                message: 'Message',
                button: 'Submit',
                wait: 'Please, wait...',
                waitMessage: 'Sending is in process',
                success: 'Success',
                successMessage: 'Successfully sent!',
                error: 'Error',
                errorMessage: 'Error occurred. Please, try again'
            },
            slider: [
                {
                    image: './carousel-images/me_stromnetze-slide.jpg',
                    indicator: 'Power Grids',
                    caption: 'We enable a precise insight into your network. This enables us to determine the exact number of (renewable) energy producers or consumers that can be connected to the grid and predict the grid effects. On request, we can set up a large-scale network monitoring system with automated analysis.',
                    mobile: 'We enable a precise insight into your network. This enables us to determine the exact number of (renewable) energy producers or consumers that can be connected to the grid and predict the grid effects. On request, we can set up a large-scale network monitoring system with automated analysis.'
                },
                {
                    image: './carousel-images/slide_industrieanlagen.jpg',
                    indicator: 'Industrial plants',
                    caption: 'Nowadays a wide variety of systems are operated with inverters. These inverters affect the grid and can generate feedback. As a result of the feedback, the control systems of plants are disturbed, i.e. unstable and can fail. We measure whether your system is running stable and whether the interaction of your plant with the grid works without problems.',
                    mobile: 'Nowadays a wide variety of systems are operated with inverters. These inverters affect the grid and can generate feedback. As a result of the feedback, the control systems of plants are disturbed, i.e. unstable and can fail. We measure whether your system is running stable and whether the interaction of your plant with the grid works without problems.'
                },
                {
                    image: './carousel-images/slide_erneuerbare.jpg',
                    indicator: 'Renewable Energies',
                    caption: 'We have more than 15 years of experience in renewable energies. Contact us if you want to connect new generators to the grid or if you simply have a conceptual question. morEnergy - Conceptual design, testing and problem solving around PVA and wind turbines',
                    mobile: 'We have more than 15 years of experience in renewable energies. Contact us if you want to connect new generators to the grid or if you simply have a conceptual question. morEnergy - Conceptual design, testing and problem solving around PVA and wind turbines'
                },
                {
                    image: './carousel-images/slide-consulting.jpg',
                    indicator: 'Consulting',
                    caption: 'Based on our long-term experience in the field of renewable energies we offer you various consulting services to make your energy project a success. Among other things, we offer calculations for steady-state and transient stability, the design of the various controllers within the WTG and the optimal dimensioning of system filters. For modelling, we can especially rely on our measuring instruments ONIS-690V and ONIS-36kV, with which we can carry out an objective measurement of the time- and frequency-dependent grid impedance at low and medium voltage level.',
                    mobile: 'Based on our long-term experience in the field of renewable energies we offer you various consulting services to make your energy project a success. Among other things, we offer calculations for steady-state and transient stability, the design of the various controllers within the WTG and the optimal dimensioning of system filters. For modelling, we can especially rely on our measuring instruments ONIS-690V and ONIS-36kV, with which we can carry out an objective measurement of the time- and frequency-dependent grid impedance at low and medium voltage level.'
                }
            ],
            info: {
                videoUrl: require('./assets/images/morEnergy.GmbH.Firmenvideo.Netzimpedanz.v1.1.EN_sv.mp4'),
                posterUrl: require('./assets/images/videologo.png'),
                title: 'ONIS-Technology',
                description: 'The ONIS technology (Online Network Impedance Spectrometer) can be used to determine the loop and conductor impedances of single-phase and multi-phase systems at the low and medium-voltage levels. ' +
                    'The mains or system characteristics are precisely reproduced from DC to 50 kHz depending on time and frequency. ' +
                    'We offer measurements on site to identify weak points in the network or on systems and present proposed solutions as experts.'
            },
            fontpageNews: {
                0: {
                    title: 'Interview with our CTO Dr.-Ing. Michael Jordan',
                    videoUrl: require('./assets/videos/interview_mit_michael_und_ingenieurwerk.mp4'),
                    posterUrl: require('./assets/images/videologo.png'),
                    description: 'Our CTO talks about the opportunities and peculiarities of the electrical engineering industry and his motivation to start a company.',

                },
                1: {
                    title: 'MOME - THE NETWORK 4.0',
                    videoUrl: require('./assets/videos/workshop_munich.mp4'),
                    posterUrl: require('./assets/images/mome.png'),
                    description: 'MoMe (spoken Monitoring Me) is our answer to the digitalization possibilities of distribution networks. With our monitoring functions, we optimise the distribution network where it is needed, without the need for additional investment. Our MoMe-IoT platform enables efficient and secure data transfer between the measuring units and our web servers. Our Distributed System Units create the conditions for the smart network of tomorrow. Learn more about our technologies and case studies on request. \n' +
                        '<br><br>' +
                        'MoMe advantages<br>' +
                        '# Optimize investments in the network <br>' +
                        '# Permanently monitor and continuously improve the network status<br>' +
                        '# Network expansion: as much as necessary - as little as possible<br>' +
                        '# Minimize downtime<br>' +
                        '# Optimal utilization of networks and operating resources<br>' +
                        '# Health monitoring for a long-lasting network (AI)<br>' +
                        '# Smart Grid Analysis (AI vulnerability assessment) <br>' +
                        '# Power Quality Monitoring (AI)<br>' +
                        '# Preventive Maintenance (AI-controlled)'  },
                2: {
                    title: 'ONIS Technology - From Hamburg for the world',
                    posterUrl: require('./assets/images/onis_front.png'),
                    description: 'morEnergy originated from the network impedance research. As a Hamburg based company we want to offer our technology to the world market to support decentralized power generation. With our patented Online Network Impedance Spectrometer ONIS high-frequency power quality measurements can be performed. Our speciality is network impedance measurement for the detection of dangerous resonances up to 50 kHz in the power grid. With this solution we stand out from the competition and can detect problems before they occur. We offer on-site measurements to identify weak points and, as experts, we can show you proposed solutions'
                }
            },
            reason: {
                title: {
                    title: 'ONIS Technology - Application examples\n',
                    bg: '#fff',
                    color: '#0A2737'
                },
                points: [
                    {
                        image: require('./assets/images/target.png'),
                        name: 'PV system',
                        link: 'https://admin.morenergypresentation.xyz.morenergypresentation.xyz/pdf/case_solar_power_plants.pdf'
                    },
                    {
                        image: require('./assets/images/network.png'),
                        name: 'High-rise lift',
                        link: 'https://admin.morenergypresentation.xyz.morenergypresentation.xyz/pdf/case_aufzug_en.pdf'
                    },
                    {
                        image: require('./assets/images/project-management.png'),
                        name: 'Electronic railway\n',
                        link: 'https://admin.morenergypresentation.xyz.morenergypresentation.xyz/pdf/case_elektrische_schienenfahrzeuge_en.pdf'
                    }
                ]
            },
            consulting: {
                greeting: {
                    image: require('./assets/images/deistl.png'),
                    title: 'Services',
                    caption: 'On the basis of our many years of experience in the field of renewable energies, we offer you various consulting services to make your energy project a success. Among other things, we offer calculations for steady-state and transient stability, the design of the various controllers within the WTG, and the optimal dimensioning of plant filters. For modelling, we can rely in particular on our ONIS-690V and ONIS-36kV measuring instruments, with which we can carry out an objective measurement of the time- and frequency-dependent network impedance at low and medium voltage level.'
                },
                title: 'Services',
                title2: 'Measurements',
                messdescription: 'morEnergy - the network specialists. In addition to technical consulting we also offer measurements at your site. For this purpose, we use our own products and can measure your plants and detect problems for a few hours up to months. The best thing about it: Once our measuring instruments are connected, the measurements can even be taken via the Internet.\n',
                info: 'Please also contact us by phone for more information.',
                bg: '#fff',
                bg2:'rgba(10, 39, 55, 0.07)',
                posterUrl: require('./assets/images/messugen-cons.png'),
                color: '#0A2737',
                description: 'Description',
                advantages: 'Advantages',
            },
            beratung: {
                title: 'Development of customer-specific solutions',
                title1: 'Studies on grid integration',
                title2: 'Simulation of power grids',
                title3: 'Power Quality Assessment\n',
                title4: 'DGUV V3 measurements\n',
                title5: 'Mains impedance measurements and determination of supraharmonics',
                text: 'Do you want to build a cargo filling station, design a wind or PV park, or simply receive a tailor-made filter design for your plants? We will be happy to advise you!\n',
                text1: 'If you need an independent expert opinion for the grid integration of electricity filling stations or their decentralized systems, we will be happy to help you.',
                text2: 'Calculations and simulations in Matlab Simscape Electrical™ and DIgSILENT PowerFactory®.\n',
                text3: 'Modeling of renewable energy plants (EEA) in Matlab Simscape Electrical™ and DIgSILENT PowerFactory®.',
                text4: 'Electrical systems and equipment must meet various technical requirements in order to be connected to the electrical power supply network.\n',
                text5: 'We can measure up to 36 kV the capacities of grid connection points of wind and photovoltaic plants as well as of consumers in order to evaluate their grid integration technically and financially.\n'
            },
            beratung1: {
                pagetitle: 'Development of customer-specific solutions\n',
                title: 'Overview',
                title2: 'Description',
                text: '- Conceptual design and verification of lightning protection of WKA\n' +
                    '<br>- Conceptual design of charge filling stations E-Mobility\n' +
                    '<br>- Electrical energy storage design for cruise liners\n' +
                    '<br>- Conceptual design of electrical network tests and equipment in 16.7 Hz railway networks\n' +
                    '<br>-  Troubleshooting of inverter-operated systems\n',
                text2: 'We at morEnergy come from the electrical power grid research. The complete knowledge of these electrical systems is our strength.\n '
            },
            beratung2: {
                titlepage: 'Studies on grid integration\n',
                title1: 'Overview',
                title2: 'Description',
                text: '- Load flow / short circuit calculations\n' +
                    '<br>- Harmonics impedances' +
                    '<br>- Dimensioning of operating equipment\n' +
                    '<br>- Calculation of power/ network loss' +
                    '<br>- Network expansion planning',
                text2: 'We provide you with calculations and simulations using the software Matlab Simscape Electrical™ (formerly SimPowerSystems™) and DIgSILENT PowerFactory®. On the basis of our many years of experience in the field of network calculation/simulation, we offer you a wide range of services from simple load flow calculations to complex, dynamic network simulations with consultative network expansion planning. In Matlab Simscape Electrical™ and DIgSILENT PowerFactory® we perform RMS and EMT simulations as well as harmonic analysis. Our service portfolio also includes the design and optimization of plant controllers and filters.\n'
            },
            beratung3: {
                titlepage: 'Simulation of power grids\n',
                title1: 'Overview',
                title2: 'Description',
                text: '-Load flow / short circuit calculationsn' +
                    '<br>- Harmonics impedances' +
                    '<br>- Dimensioning of operating equipment \n' +
                    '<br>- Calculation of power/ network loss \n' +
                    '<br>- Network expansion planning\n',
                text2: 'We provide you with calculations and simulations using the software Matlab Simscape Electrical™ (formerly SimPowerSystems™) and DIgSILENT PowerFactory®. On the basis of our many years of experience in the field of network calculation/simulation, we offer you a wide range of services from simple load flow calculations to complex, dynamic network simulations with consultative network expansion planning. In Matlab Simscape Electrical™ and DIgSILENT PowerFactory® we perform RMS to EMT simulations as well as harmonic analysis. Our service portfolio also includes the design and optimization of plant controllers and filters.\n'
            },
            beratung4: {
                titlepage: 'Power Quality Assessment\n',
                title1: 'Overview',
                title2: 'Description',
                text: '- Holistic consideration of the power quality at the connection point\n' +
                    '<br>- Specialized consideration of possible overvoltages\n' +
                    '<br>- Analysis of the currents' +
                    '<br>- Analysis of the stresses\n' +
                    '<br>- Report and recommendations for action\n',
                text2: 'In addition to measurements with our in-house measuring device ONIS, we perform calculations and simulations for you with the software Matlab Simscape Electrical™ (formerly SimPowerSystems™) and DIgSILENT PowerFactory®. Based on our long experience in the field of power quality, we can give you an exact picture of your network topography at your grid connection point. If required, we also perform harmonic analysis in Matlab Simscape Electrical™ and DIgSILENT PowerFactory® in addition to RMS to EMT simulations. Every Power Quality Assessment includes a detailed report with recommendations for action. \n'
            },
            beratung5: {
                titlepage: 'DGUV V3 measurements',
                title1: 'Overview',
                title2: 'Description',
                text: '- Optical inspection of switchgear' +
                    '<br>- nspection of HH fuse tripping' +
                    '<br>- Partial discharge tests on operating equipment' +
                    '<br>- Secondary testing of protection relays' +
                    '<br>- Inspection of monitoring equipment' +
                    '<br>-Tests / measurements for equipotential bonding',
                text2: 'Electrical systems and equipment must meet various technical requirements before they can be connected to the electrical power supply network. We offer regular functional tests to ensure that the requirements are met. morEnergy is specialized in measurement services for renewable energy systems, among others. Around these plants we can offer various measurement and testing services. These include, for example, checking the correct setting and function of protective relays of switchgear. Furthermore, partial discharge measurements are also part of our service portfolio. Partial discharge measurements can be used to detect possible insulation faults in cables, transformers or terminations at an early stage.'  },
            beratung6: {
                titlepage: 'Mains impedance measurements and determination of supraharmonics',
                title1: 'Overview',
                title2: 'Description',
                text: '- Time and frequency dependent impedance measurements of connection points and systems on the low and medium voltage level' +
                    '<br>- ONIS-690V: voltage range ≤ 690 Vrms' +
                    '<br>- ONIS-36kV: voltage range ≤ 36k Vrms' +
                    '<br>- Frequency range 0...50 kHz' +
                    '<br>- Measurement of time and frequency dependence' +
                    '<br>-    Measurement of the power quality' +
                    '<br>- Evaluation of system perturbations',
                text2: 'Our products measure the capacities of grid connection points of wind and photovoltaic plants as well as of consumers in order to evaluate their grid integration technically and financially. The new devices offer an extended evaluation that gives customers a deeper insight into their grid/electric system. It can be objectively determined how many renewable energy systems/consumers can be connected to the grid and how the grid is affected. A large area network monitoring with automated analysis can be achieved. The grid impedance plays a central role in estimating the connection capacity of grid connection nodes and in evaluating the resulting grid repercussions from producers/consumers and compliance with the associated standards. The frequency-dependent network impedance is of particular interest for the network integration of renewable energy systems, since the power electronics contained in the system feed in harmonic currents which lead to undesirable harmonic voltages at the network impedance. The development of a transportable measuring device for determining the time and frequency dependent network impedance on the medium voltage level allows a better connection evaluation than before, which optimizes the connection of renewable energy plants to the network.' },

            team: {
                title: 'Our Team',
                image: require('./assets/images/team.png'),
                description: 'We are an innovative engineering company for electricity distribution networks and renewable energies and want to contribute to the energy turnaround. A special focus is the determination of the impedance of grid connection points and systems. For this purpose, we have developed one measuring device each for the low and medium voltage level.',
                button: 'Team information',
                link: '/team-morenergy'
            },
            partners: {
                title: 'Our partners',
                bg: '#fff',
                color: '#0A2737'
            },
            footer: {
                title: 'Company',
                menu: [
                    {
                        title: 'Home',
                        link: '/'
                    },
                    {
                        title: 'Products',
                        link: '/produkte'
                    },
                    {
                        title: 'References',
                        link: ''
                    },
                    {
                        title: 'Team morEnergy',
                        link: '/team-morenergy'
                    },
                    {
                        title: 'Company details',
                        link: ''
                    },
                    {
                        title: 'Datenschutz',
                        link: '/datenschutz'
                    }
                ],
                contacts: {
                    title: 'Contact us',
                    subtitle: 'Office morEnergy GmbH',
                    menu: [
                        {
                            icon: require('./assets/images/call.png'),
                            text: '<a class="text-white" href="tel:+49040555546215">+49 (0)40 555 546 215</a>'
                        },
                        {
                            icon: require('./assets/images/mail.png'),
                            text: '<a class="text-white" href="mailto:info@morenergy.net">info@morenergy.net</a>'
                        },
                        {
                            icon: require('./assets/images/clock.png'),
                            text: 'Monday - Friday:<br> 09:00 AM till 16:00 PM'
                        },
                        {
                            icon: require('./assets/images/location.png'),
                            text: 'Georg-Wilhelm-Straße 187<br>21107 Hamburg'
                        }
                    ]
                }
            },
            products: {
                image: require('./assets/images/productss.png'),
                title: 'Products',
                caption: 'With our ONIS measuring instruments, currents and voltages as well as impedances of conventional, but also renewable generation plants and electrical consumers and their grid connection points can be measured and analysed at high frequency. In summary, status information of relevant component groups as well as the grid connection can be determined. In addition, recommendations for action for the controller parameters and the filter design of inverters can be worked out in order to optimally adapt the systems to the local connection point and thus exclude failures due to insufficient control or filtering of the generation systems.',
                advantages: 'Advantages',
                areas: 'Application areas',
                specifications: 'Specifications'
            },
            productonis: {
                image: require('./assets/images/onistop.png'),
                title: 'ONIS-690V',
                caption: 'With the Online Network Impedance Spectrometer ONIS 690V high-frequency power quality measurements can be performed. Our speciality is network impedance measurement for the detection of dangerous resonances up to 50 kHz in the power network. With this solution we stand out from the competition and can detect problems before they occur.',
                advantages: 'Advantages',
                areas: 'Application areas',
                specifications: 'Specifications'
            },
            productonisdetail: {
                title: 'Warum ONIS?',
                videoUrl: require('./assets/videos/workshop_munich.mp4'),
                posterUrl: require('./assets/images/onis-comp.png'),
                description: 'Modern high-performance inverter systems can be found in fast charging systems for electric cars, in high-rise elevators, on server farms and in photovoltaic and wind power plants. They normally function reliably even under the most difficult conditions. This highly efficient frequency converter technology not only precisely controls the charging speed or the speed of elevators, but also takes care of energy regulation on the power grid. The reliability of the systems requires that the interactions between the frequency converter and the power grid have been well estimated by the engineers when designing the controller. If this is not the case, due to complex power grids on site, instabilities often occur during operation, resulting in system failures. With our ONIS technology, we prevent problems in the system integration of energy producers and consumers and proactively prevent system and revenue losses.\n',
                name: 'ONIS 690 V Applications',
                text: '# Easy determination of the system parameters of frequency converters and of the power grid<br>' +
                    '# Detection of faulty filters, components and prediction of system and network failures <br>' +
                    '# Prevention of loss of income<br>' +
                    '# Easy embedding of ONIS technology into the power grid'
            },
            productmome: {
                image: require('./assets/images/MoMergee.png'),
                title: 'MoMe - For the network 4.0',
                caption: 'MoMe, spoken MonitoringMe, is our response to the digitalisation turnaround of the distribution networks. With our monitoring functions, we optimize the distribution network where it is needed, without the need for additional investments. Our MoMe-IoT platform enables efficient and secure data transfer between the measuring units and our web servers. Our distributed system units provide the prerequisites for the smart network of tomorrow. Learn more about our technologies and case studies on request.\n',
                advantages: 'Advantages',
                areas: 'Application areas',
                specifications: 'Specifications',
                name1: 'Description',
                name2: 'MoMe advantages\n',
                text1: 'The innovative and intuitive MoMe web portal gives you real-time access to your power grid data. Using the collected measurement data, you can simulate the effects of additional generators and consumers on your grid. Guarantee your customers unprecedented supply quality and use real-time data for troubleshooting. This real-time overview of the status of your power distribution network enables early warnings of critical operating states. You also get an overview of the aging of your equipment and carry out preventive maintenance before failures occur. MoMe enables you to perform unprecedented load management to maintain voltage and prevent network overloads.',
                text2: '# Optimize investments in the network \n' +
                    '<br>'+
                    '# Permanently monitor and continuously improve the network status\n' +
                    '<br>'+
                    '# Network expansion: as much as necessary - as little as possible' +
                    '<br>'+
                    '# Minimize downtime\n \n' +
                    '<br>'+
                    '# Optimal utilization of networks and operating resources\n\n' +
                    '<br>'+
                    '# Health monitoring for a long-lasting network (AI)\n \n' +
                    '<br>'+
                    '# Smart Grid Analysis (AI vulnerability assessment)\n\n' +
                    '<br>'+
                    '# Power Quality Monitoring (AI)\n' +
                    '<br>'+
                    '# Preventive Maintenance (KI-gesteuert)'
            },
            references: {
                title: 'Projects',
                styles: {
                    bg: '#fff',
                    color: '#0A2737'
                },
                content: {
                    forschung: 'The expertise of morEnergy GmbH has evolved from many years of research work of the three founders at Helmut Schmidt University. Below is an excerpt of the projects the three founders worked on during their time as research assistants at the Chair of Electrical Power Systems under Professor Dr.-Ing. Detlef Schulz.\n',
                    ourExpertise: {
                        title: 'Unsere Expertise',
                        content: 'Die Expertise der morEnergy GmbH hat sich aus langjähriger Forschungsarbeit der drei Gründer an der Helmut-Schmidt-Universität herausgebildet. Unten ist ein Auszug der Projekte, die die drei Gründer während ihrer Zeit als wissenschaftliche Mitarbeiter an der Professur für Elektrische Energiesysteme bei Professor Dr.-Ing. Detlef Schulz bearbeitet haben.'
                    },
                    projects: {
                        title: 'Projects',
                        subtitle: 'Research'
                    },
                    toptext: {
                        text: 'Lightning protection design of wind turbines (European wind turbine manufacturer - under NDA)\n',
                        text2: 'Electrical storage design for cruise ships (European shipyard - under NDA)',
                        text3: 'Feasibility study to determine the input impedances of locomotives and 16.7 Hz railway networks\n',
                        text4: 'Detection of critical grid resonances on inverters for elevator drives\n',
                        text5: 'Analysis of problematic supraharmonic interference emissions of PV inverters and their reduction through optimal filter adjustment\n' +
                            ''
                    },
                    gridboxes: [
                        {
                            year: '2015-2018',
                            text: 'Joint project\n<br>' +
                                'Net Harmony',
                            modal: 'The expertise of morEnergy GmbH has evolved from many years of research work of the three founders at Helmut Schmidt University. Below is an excerpt of the projects the three founders worked on during their time as research assistants at the Chair of Electrical Power Systems under Professor Dr.-Ing. Detlef Schulz.\n'
                        },
                        {
                            year: '2010-2011',
                            text: 'Strategy for grid integration of decentralised plants in Hamburg',
                            modal: 'Development of a measuring device for determining the frequency-dependent network impedance on the high-voltage level up to 110 kV to evaluate the availability of network capacities as a system parameter for dimensioning energy storage facilities\n'
                        },
                        {
                            year: '2013-2017',
                            text: '110 kV mains impedance measuring device\n',
                            modal: 'Development of a measuring device to determine the time and frequency dependent network impedance on the medium voltage level up to 20 kV\n'
                        },
                        {
                            year: '2008-2013',
                            text: 'Medium voltage - mains impedance measuring device',
                            modal: 'Development of future grid scenarios with a high share of renewable energy Strategy proposals for grid expansion and grid optimisation for grid integration of renewable energy plants Modelling and grid simulation'
                        },
                        {
                            year: '05/2013-\n' +
                                '09/2013',
                            text: 'EEG-<br>' +
                                'Monitoring',
                            modal: 'Preparation and monitoring of the preparation of the Progress Report 2014 according to § 65 EEG\n'
                        }

                    ]
                }
            },
            news: {
                image: require('./assets/images/aktuelles.png'),
                title: 'News ',
                caption: 'Here you will find news, press articles and everything that interests and moves morEnergy.'
            },
            jobs: {
                greeting: {
                    image: require('./assets/images/videos-min.jpg'),
                    title: 'Videos',
                    caption: 'morEnergy in moving pictures\n'
                },
                presentations: {
                    image: require('./assets/images/videos-min.jpg'),
                    title: 'Presentations',
                    caption: 'morEnergy in presentations\n'
                },
                title: {
                    title: 'Job advertisements',
                    bg: '#0A2737',
                    color: '#fff'
                },
            },
            teamView: {
                greeting: {
                    image: require('./assets/images/team.png'),
                    title: 'Team morEnergy',
                    caption: 'We are an innovative engineering office for power distribution grids and renewable energies and want to make a contribution to the energy revolution. A special focus is on the determination of the impedance of grid connection points and systems. For this purpose we have developed one measuring device each for the low and medium voltage level.'
                },
                greetingMobile: {
                    image: require('./assets/images/team.png'),
                    title: 'Team morEnergy',
                    caption: 'We are an innovative engineering office for power distribution grids and renewable energies and want to make a contribution to the energy revolution. A special focus is on the determination of the impedance of grid connection points and systems. For this purpose we have developed one measuring device each for the low and medium voltage level.'
                },
                title: {
                    title: 'Our Team',
                    mentor: 'Our Mentors',
                    bg: '#fff',
                    color: '#0A2737'
                }
            }
        }),

        new MLanguage('DE').create({
            pagination: {
                next: 'Weiter',
                prev: 'Zurück',
                toEnd: 'zum Ende',
                toStart: 'zum Anfang '
            },
            navbar: [
                {
                    title: "Startseite",
                    id: "Startseite",
                    link: "/"
                },
                {
                    title: "Dienstleistungen",
                    id: "Dienstleistungen",
                    link: "/consultings"
                },
                {
                    title: "Produkte",
                    id: "Produkte",
                    link: "/produkte"
                },
                {
                    title: 'Referenzen',
                    id: 'Referenzen',
                    link: '/referenzen'
                },
                {
                    title: "Team morEnergy",
                    id: "Team morEnergy",
                    link: "/team-morenergy"
                },
                {
                    title: "Aktuelles",
                    id: "Aktuelles",
                    link: "/aktuelles"
                },
                {
                    title: "Videos",
                    id: "Videos",
                    link: "/videos"
                },
                {
                    title: "Präsentationen",
                    id: "Presentations",
                    link: "/presentations"
                },
                {
                    title: "Kontakt",
                    id: "Kontakt",
                    link: "/kontakt"
                }
            ],
            feedback: {
                title: 'Kontaktiere uns',
                subtitle: 'Wir freuen uns auf Ihre Anfrage',
                name: 'Name, Vorname',
                phone: 'Nummer',
                email: 'E-mail',
                message: 'Ihre Nachricht',
                button: 'Absenden',
                wait: 'Warten...',
                waitMessage: 'Verarbeitung',
                success: 'Erfolg',
                successMessage: 'Erfolgreich gesendet!',
                error: 'Fehler',
                errorMessage: 'Fehler aufgetreten. Wiederholen Sie den Vorgang später'
            },
            slider: [
                {
                    image: './carousel-images/me_stromnetze-slide.jpg',
                    indicator: 'Stromnetze',
                    caption: 'Wir ermöglichen den genauen Einblick in Ihr Netz. Dadurch können wir die genaue Anzahl von (Erneuerbaren) Energieerzeugern bzw. Verbrauchern ermitteln, die an das Netz angeschlossen werden können und sagen die Netzauswirkungen voraus. Auf Wunsch können wir eine großflächige Netzüberwachung mit automatisierter Analyse aufbauen.',
                    mobile: 'Wir ermöglichen den genauen Einblick in ihr Netz. Dadurch können wir die genaue Anzahl von (erneuerbaren) Energieerzeugern bzw. Verbrauchern ermitteln, die an das Netz angeschlossen werden können und sagen die Netzauswirkungen voraus.'
                },
                {
                    indicator: 'Industrieanlagen',
                    image: './carousel-images/slide_industrieanlagen.jpg',
                    caption: 'Heutzutage werden verschiedenste Anlagen mit Wechselrichtern betrieben. Diese Wechselrichter haben Auswirkungen auf das Netz und können Rückkopplungen erzeugen. In Folge der Rückkopplungen werden die Regelungen von Anlagen gestört, sprich instabil und können ausfallen. Wir messen, ob Ihr System stabil läuft und ob das Zusammenspiel Ihrer Anlage mit dem Netz ohne Probleme funktioniert.',
                    mobile: 'Wir messen, ob ihr System stabil läuft und ob das Zusammenspiel ihrer Anlage mit dem Netz ohne Probleme läuft.'
                },
                {
                    indicator: 'Erneuerbare Energien',
                    image: './carousel-images/slide_erneuerbare.jpg',
                    caption: 'Wir haben mehr als 15 Jahre Erfahrung mit Erneuerbaren Energien. Kontaktieren Sie uns, wenn Sie neue Erzeuger an Netz nehmen wollen oder einfach eine konzeptionelle Frage haben. morEnergy – Konzeptionierung, Testen und Problemlösungen rund um PVA und WKA',
                    mobile: 'Wir haben mehr als 15 Jahre Erfahrung mit Erneuerbaren Energien. Wir helfen Ihnen bei Konzeptionierung, Testen und Problemlösungen rund um PVA und WKA.'
                },
                {
                    indicator: 'Beratung',
                    image: './carousel-images/slide-consulting.jpg',
                    caption: 'Auf Grundlage unserer langjährigen Erfahrungen im Bereich Erneuerbarer Energien bieten wir Ihnen verschiedene Beratungsleistungen an, damit ihr Energieprojekt ein Erfolg wird. Unter anderem bieten wir Berechnungen zur stationären und transienten Stabilität, die Auslegung der verschiedenen Regler innerhalb der WEA sowie die optimale Dimensionierung von Anlagenfiltern an. Zur Modellbildung können wir insbesondere auf unsere Messgeräte ONIS-690V und ONIS-36kV zurückgreifen, mit denen wir eine objektive Messung der zeit- und frequenzabhängigen Netzimpedanz auf Nieder- und Mittelspannungsebene durchführen können.',
                    mobile: 'Nutzen Sie unsere langhärige Erfahrung im Bereich der erneuerbaren Energien. Unsere Stärken sind Berechnungen zur stationären und transienten Stabilität, die Auslegung der verschiedenen Regler innerhalb der WEA sowie die optimale Dimensionierung von Anlagenfiltern an.'
                }
            ],

            info: {
                videoUrl: require('./assets/images/morEnergy.GmbH.Firmenvideo.Netzimpedanz.v1.1.EN_sv.mp4'),
                posterUrl: require('./assets/images/videologo.png'),
                title: 'ONIS-Technologie',
                description: 'Mit der ONIS-Technologie (Online Network Impedance Spectrometer) können die Schleifen- und Leiterimpedanzen von Ein- und Mehrphasensystemen auf der Niederspannungs- und Mittelspannungsebene bestimmt werden. ' +
                    'Die Netz- oder Anlagencharakteristiken werden dabei zeit- und frequenzabhängig präzise von DC bis 50 kHz wiedergegeben. ' +
                    'Wir bieten Messungen vor Ort an, um Schwachpunkte im Netz oder an Anlagen zu identifizieren und zeigen Lösungsvorschläge als Sachverständige auf.'
            },
            fontpageNews: {
                0: {
                    title: 'Interview mit unserem CTO Dr.-Ing. Michael Jordan',
                    videoUrl: require('./assets/videos/interview_mit_michael_und_ingenieurwerk.mp4'),
                    posterUrl: require('./assets/images/videologo.png'),
                    description: 'Unser CTO spricht über Chancen und Besonderheiten der Elektroingenieurs Branche und über seine Motivation eine Firma zu gründen.',


                },
                1: {
                    title: 'MOME - DAS NETZ 4.0',
                    videoUrl: require('./assets/videos/workshop_munich.mp4'),
                    posterUrl: require('./assets/images/mome.png'),
                    description: 'MoMe, lang MonitoringMe, ist unsere Antwort auf die Digitalisierungmöglichkeiten der Verteilnetze. Durch unsere Monitoringfunktionen optimieren wir das Verteilnetz dort wo es nötig ist, ohne der Notwendigkeit zusätzlicher Investitionen. Unsere MoMe-IoT-Plattform ermöglicht eine effiziente und sichere Datenübertragung zwischen den Messeinheiten und unseren Webservern. Unsere Distributed System-Einheiten schaffen die Voraussetzungen für die smarte Netz von morgen. Erfahren Sie mehr über unsere Technologien und Fallstudien auf Anfrage. \n' +
                        '<br><br>' +
                        'MoMe Vorteile<br>' +
                        '# Investionen ins Netz optimieren <br>' +
                        '# Netzzustand permanent beobachten und kontinuirlich verbessern<br>' +
                        '# Netzausbau: So viel wie nötig - so wenig wie möglich<br>' +
                        '# Ausfallzeiten minimieren<br>' +
                        '# Optimale Auslastung der Netze und Betriebsmittel<br>' +
                        '# Health-Monitoring für ein langlebiges Netz (KI)<br>' +
                        '# Smart-Grid-Analysis (KI-Schwachstellenermittlung) <br>' +
                        '# Power-Quality-Monitoring (KI)<br>' +
                        '# Preventive Maintenance (KI-gesteuert)'  },
                2: {
                    title: 'ONIS Technologie - Aus Hamburg für die Welt',
                    posterUrl: require('./assets/images/onis_front.png'),
                    description: 'morEnergy ist aus der Netzimpedanzforschung hervorgegangen. Als Hamburger Unternehmen wollen wir unsere Technologie dem Weltmarkt anbieten, um die dezentrale Stromerzeugung zu unterstützen. Mit unserem patentierten Online Network Impedance Spectrometer ONIS  können hochfrequente Power Quality Messungen durch geführt werden. Dabei ist unsere Spezialität die Netzimpedanzmessung zur Detektion von gefährlichen Resonanzen bis 50 kHz im Stromnetz. Wir heben uns mit dieser Lösung von der Konkurrenz ab und können Probleme feststellen, bevor sie entstehen.  Wir bieten die Messungen vor Ort an, um Schwachpunkte zu identifizieren und zeigen Ihnen als Sachverständige Lösungsvorschläge auf.'
                }

            },
            reason: {
                title: {
                    title: 'ONIS Technologie - Andwendungsbeispiele',
                    bg: '#fff',
                    color: '#0A2737'
                },
                points: [
                    {
                        image: require('./assets/images/target.png'),
                        name: 'PV-Anlage',
                        link: '/pvanlage'
                    },
                    {
                        image: require('./assets/images/network.png'),
                        name: 'Hochhauslift',
                        link: '/hochhauslift'
                    },
                    {
                        image: require('./assets/images/project-management.png'),
                        name: 'elektrische Eisenbahn',
                        link: '/elektrische'
                    }
                ],
                subpage: {
                    pagetitle: 'Photovoltaikkraftwerke -\n' +
                        'Preventive Maintenance und Störungsbeseitigung',
                    title1: 'Herausforderung:',
                    text1: 'Die meisten in heutigen Photovoltaikkraftwerken verwendeten\n' +
                        'Wechselrichter arbeiten ohne interne Transformatoren. Das\n' +
                        'Fehlen der galvanischen Entkopplung des Transformators\n' +
                        'kann zu höheren Belastungen der EMV-Filter sowie zu Kopplungen zwischen DC- und AC-Seite führen. Mit zunehmendem Alter kann es zu Einschränkungen in der Filterwirkung\n' +
                        'kommen und im schlimmsten Fall werden Filter beschädigt\n' +
                        'oder fallen ganz aus. Die reduzierte oder nicht mehr\n' +
                        'vorhandene Filterung von harmonischen und supraharmonischen Strömen kann in Abhängigkeit der örtlichen Netzimpedanz zu erhöhten Spannungen führen, welche Komponenten des Wechselrichters oder andere Bauteilgruppen beschädigen können. Damit ist der Filterausfall sehr oft der Beginn\n' +
                        'eine Fehlerkette, die nicht selten im Systemausfall endet. ',
                    title2: 'Lösung:',
                    text2: 'Mit dem ONIS-690V Messgerät können Ströme- und Spannungen sowie Impedanzen von Erneuerbaren Erzeugeranlagen und deren Netzanschlusspunkte hochfrequent\n' +
                        'gemessen und analysiert werden. Hierbei lassen sich Statusinformationen von relevanten Bauteilgruppen sowie\n' +
                        'vom Netzanschluss ermitteln. Zudem können Handlungsempfehlungen für die Reglerparameter und das\n' +
                        'Filterdesign der verbauten Wechselrichter erarbeitet\n' +
                        'werden, um die Anlagen auf den örtlichen Anschlusspunkt\n' +
                        'optimal anzupassen und so Ausfälle durch eine unzureichende Regelung',
                    title3: 'Resultat:',
                    text3: '- Unzureichende bzw. reduzierte Filterung oder Filterausfälle werden\n' +
                        'anhand der Ergebnisse der Impedanzmessung eindeutig identifiziert\n' +
                        '<br>- Anpassung der Regelparameter und des Filterdesigns auf die Netzanforderungen vor Ort\n' +
                        '<br>- Vorhersage und Verhinderung von System- und Einnahmeausfällen'
                },
                subpage2: {
                    pagetitle: 'Elektrischer Antrieb von Aufzugssystemen\n' +
                        'Testen und Störungsbeseitigung',
                    title1: 'Herausforderung:',
                    text1: 'Moderne Aufzugsysteme sind perfekt auf die Kundenbedürfnisse\n' +
                        'angepasst. Sie funktionieren unter schwierigsten Bedingungen zuverlässig und sind inzwischen höchsteffizient dank moderner leistungsfähiger Frequenzumrichtertechnik. Diese steuert nicht nur präzise die\n' +
                        'Geschwindigkeit der Aufzüge, sondern sorgt auch für eine Energierückspeisung ins Stromnetz beim Bremsen. Die Zuverlässigkeit des Systems\n' +
                        'setzt voraus, dass die Wechselwirkungen zwischen Frequenzumrichter\n' +
                        'und dem Stromnetz bei der Reglerauslegung durch die Ingenieure gut\n' +
                        'abgeschätzt wurden. Ist das nicht der Fall, aufgrund von komplexen\n' +
                        'Stromnetzen vor Ort, kann es im Betrieb zu Instabilitäten kommen, die\n' +
                        'Systemausfällen zur Folge haben. Bisher gibt es keine Technologie,\n' +
                        'welche Probleme der Systemintegration von Auszügen erkennen kann\n' +
                        'und Systemausfälle proaktiv verhindert.',
                    title2: 'Lösung:',
                    text2: 'Mit unserer ONIS-690V-Technologie können wir bestimmen, ob das Regelungssystem stabil läuft oder ob ein\n' +
                        'Bauteil im elektrischen Antriebssystem defekt ist. Hierbei\n' +
                        'ermitteln wir die Störursachen und können durch unsere\n' +
                        'Messungen Empfehlungen ausgeben, um das System\n' +
                        'stabil und zuverlässig zu machen.',
                    title3: 'Ergebnis',
                    text3: '- Einfache Bestimmung der Systemparameter vom\n' +
                        'Frequenzumrichter und vom Stromnetz' +
                        '<br>- Anpassung der Regelparameter auf die Netzanforderungen\n' +
                        'vor Ort' +
                        '<br>- Ermittlung von fehlerhaften Filtern und Bauteilen und Vorhersage von\n' +
                        'Systemausfällen'
                },
                subpage3: {
                    pagetitle: 'Elektrischer Antrieb von Schienenfahrzeugen\n' +
                        'Testen von elektrischen Eisenbahnen',
                    title1: 'Herausforderung:',
                    text1: 'Entwicklung eines schnellen, günstigen und zuverlässigen\n' +
                        'Prüfverfahrens für elektrische Schienenfahrzeuge - Elektrisch betriebene Schienenfahrzeuge müssen getestet\n' +
                        'werden, ob ihre Regelung stabil im vorhandenen Bahnstromnetz funktioniert. Instabilitäten verursachen mit\n' +
                        'hoher Wahrscheinlichkeit Systemausfälle und führen zu\n' +
                        'Störungen des Betriebsablaufes. Das bisherige Testverfahren ist sehr zeit- und arbeitsaufwendig und damit teuer.',
                    title2: 'Lösung:',
                    text2: 'Mit unserer ONIS-36kV-Technologie können wir bestimmen,\n' +
                        'ob das Regelungssystem der Eisenbahn stabil oder nicht\n' +
                        'stabil läuft. Wir ermitteln die Ursachen von Instabilitäten\n' +
                        'und können somit nach unseren Messungen eine Empfehlung ausgeben, um das System stabil zu machen.',
                    title3: 'Ergebnis:',
                    text3: '- Einfache Einbettung der ONIS-36kV-Technologie in das\n' +
                        'Bahnstromnetz' +
                        '<br>- Dauer der Messkampagne 2 bis 3 Tage' +
                        '<br>- Hohes Ersparnispotential'
                }
            },
            consulting: {
                greeting: {
                    image: require('./assets/images/deistl.png'),
                    title: 'Dienstleistungen',
                    caption: 'Auf Grundlage unserer langjährigen Erfahrungen im Bereich erneuerbarer Energien, bieten wir Ihnen verschiedene Beratungsleistungen, damit ihr Energieprojekt ein Erfolg wird.\n' +
                        'U.a. bieten wir Berechnungen zur stationären und transienten Stabilität, die Auslegung der verschiedenen Regler innerhalb der WEA sowie die optimale Dimensionierung von Anlagenfiltern an. Zur Modellbildung können wir insbesondere auf unsere Messgeräte ONIS-690V und ONIS-36kV zurückgreifen, mit denen wir eine objektive Messung der zeit- und frequenzabhängigen Netzimpedanz auf Nieder- und Mittelspannungsebene durchführen können\n'
                },
                title: 'Beratung',
                title2: 'Messungen',
                messdescription: 'morEnergy - die Netzspezialisten. Neben technischer Beratung bieten wir natürlich auch Messungen bei Ihnen am Standort an. Wir nutzen hierzu unsere firmeneigenen Produkte und könne  je nach Bedarf für ein paar Stunden bis hin zu Monaten ihre Anlagen vermessen und Probleme erfassen. Das Beste dabei: Die Messungen könnnen, wenn unsere Messgeräte einmal angeschlossen sind,  sogar über das Internet erfolgen.',
                info: 'Bitte kontaktieren Sie uns auch telefonisch um mehr Informationen zu erhalten.',
                posterUrl: require('./assets/images/messugen-cons.png'),
                bg: '#fff',
                bg2: 'rgba(10, 39, 55, 0.07)',
                color: '#0A2737',
                description: 'Beschreibung',
                advantages: 'Vorteile'
            },
            team: {
                title: 'Unser Team',
                image: require('./assets/images/team.png'),
                description: 'Wir sind ein innovatives Ingenieurbüro für ' +
                    'Stromverteilnetze und Erneuerbare Energien und wollen einen Beitrag zur ' +
                    'Energiewende leisten. Ein besonderer Fokus ist auf die Bestimmung der Impedanz von ' +
                    'Netzverknüpfungspunkten und Anlagen gerichtet. Hierzu haben wir je ein ' +
                    'Messgerät für die Nieder- und Mittelspannungsebene entwickelt.',
                button: 'Teaminformationen',
                link: '/team-morenergy'
            },
            partners: {
                title: 'Unsere Partner',
                bg: '#fff',
                color: '#0A2737'
            },
            footer: {
                title: 'Unternehmen',
                menu: [
                    {
                        title: 'Startseite',
                        link: '/'
                    },
                    {
                        title: 'Produkte',
                        link: '/produkte'
                    },
                    {
                        title: 'Team morEnergy',
                        link: '/team-morenergy'
                    },
                    {
                        title: 'Impressum',
                        link: '/impressum'
                    },
                    {
                        title: 'Datenschutz',
                        link: '/datenschutz'
                    }
                ],
                contacts: {
                    title: 'Kontaktiere uns',
                    subtitle: 'Firmenbüro morEnergy GmbH',
                    menu: [
                        {
                            icon: require('./assets/images/call.png'),
                            text: '<a class="text-white" href="tel:+49040555546215">+49 (0)40 555 546 215</a>'
                        },
                        {
                            icon: require('./assets/images/mail.png'),
                            text: '<a class="text-white" href="mailto:info@morenergy.net">info@morenergy.net</a>'
                        },
                        {
                            icon: require('./assets/images/clock.png'),
                            text: 'Montag - Freitag:<br> 09:00 Uhr bis 16:00 Uhr'
                        },
                        {
                            icon: require('./assets/images/location.png'),
                            text: 'Georg-Wilhelm-Straße 187<br>21107 Hamburg'
                        }
                    ]
                }
            },
            products: {
                image: require('./assets/images/productss.png'),
                title: 'Produkte',
                caption: 'Mit unseren ONIS Messgeräten können Ströme- und Spannungen sowie Impedanzen von konventionellen, aber auch Erneuerbaren Erzeugeranlagen und elektrischen Verbrauchern sowie deren Netzanschlusspunkte hochfrequent gemessen und analysiert werden. Zusammenfassend lassen sich Statusinformationen von relevanten Bauteilgruppen sowie vom Netzanschluss ermitteln. Zudem können Handlungsempfehlungen für die Reglerparameter und das Filterdesign von Wechselrichter erarbeitet werden, um dir Anlagen optimal auf den örtlichen Anschlusspunkt anzupassen und so Ausfälle durch eine unzureichende Regelung oder Filterung der Erzeugeranlagen auszuschließen.',
                advantages: 'Vorteile',
                areas: 'Anwendungsgebiete',
                specifications: 'Spezifikation'
            },
            productonis: {
                image: require('./assets/images/onistop.png'),
                title: 'ONIS-690V',
                caption: 'Mit dem Online Network Impedance Spectrometer ONIS 690V können hochfrequente Power Quality Messungen durch geführt werden. Unsere Spezialität ist die Netzimpedanzmessung zur Detektion von gefährlichen Resonanzen bis 50 kHz im Stromnetz. Wir heben uns mit dieser Lösung ab von der Konkurrenz und können Probleme feststellen, bevor sie entstehen.',
                advantages: 'Advantages',
                areas: 'Application areas',
                specifications: 'Specifications'
            },
            productonisdetail: {
                title: 'Warum ONIS?',
                videoUrl: require('./assets/videos/workshop_munich.mp4'),
                posterUrl: require('./assets/images/onis-comp.png'),
                description: 'Moderne Hochleistungswechselrichtersysteme finden Sie in Schnellladesystemen für E-Autos, in Hochhausaufzügen, auf Serverfarmen und in Photovoltaik- und Windkraftanlagen. Sie funktionieren normalerweise auch unter schwierigsten Bedingungen zuverlässig Diese hocheffiziente Frequenzumrichtertechnik steuert nicht nur präzise die Ladegeschwindigkeit oder auch die Geschwindigkeit von Aufzügen, sondern sorgt auch Energieregelung am Stromnetz. Die Zuverlässigkeit der Systeme setzt voraus, dass die Wechselwirkungen zwischen Frequenzumrichter und dem Stromnetz bei der Reglerauslegung durch die Ingenieure gut abgeschätzt wurden. Ist das nicht der Fall, aufgrund von komplexen Stromnetzen vor Ort, kommt es im Betrieb nicht selten zu Instabilitäten, die Systemausfällen zur Folge haben. Mit unserer ONIS-Technologie verhindern wir Probleme der Systemintegration von Energieerzeugern und -verbrauchern und verhindern System- und Einnahmeausfälle proaktiv',
                name: 'ONIS 690 V Anwendungsbereiche',
                text: '# Einfache Bestimmung der Systemparameter von Frequenzumrichtern und vom Stromnetz<br>' +
                    '# Ermittlung von fehlerhaften Filtern, Bauteilen und Vorhersage von System- und Netzausfällen <br>' +
                    '# Verhinderung von Einnahmeausfällen <br>' +
                    '# Einfache Einbettung der ONIS-Technologie in das Stromnetz'
            },
            productmome: {
                image: require('./assets/images/MoMergee.png'),
                title: 'MoMe - Für das Netz 4.0',
                caption: 'MoMe, lang MonitoringMe, ist unsere Antwort auf die Digitalisierungswende der Verteilnetze. Durch unsere Monitoringfunktionen optimieren wir das Verteilnetz dort, wo es nötig ist, ohne die Notwendigkeit zusätzlicher Investitionen. Unsere MoMe-IoT-Plattform ermöglicht eine eﬃziente und sichere Datenübertragung zwischen den Messeinheiten und unseren Webservern. Unsere Distributed-SystemEinheiten schaﬀen die Voraussetzungen für das smarte Netz von morgen. Erfahren Sie mehr über unsere Technologien und Fallstudien auf Anfrage.',
                advantages: 'Advantages',
                areas: 'Application areas',
                specifications: 'Specifications',
                name1: 'Beschreibung',
                name2: 'MoMe Vorteile',
                text1: 'Über das innovative und intuitive MoMe-Webportal können Sie auf die Daten ihres Stromnetzes in Echtzeit zurückgreifen. Mit Hilfe der gesammelten Messdaten simulieren Sie die Auswirkungen von zusätzlichen Erzeugern und Verbrauchern an Ihrem Netz. Garantieren Sie Ihren Kunden eine nie dagewesene Versorgungsqualität, nutzen Sie bei der Fehlersuche Echtzeitdaten. Dieser Echtzeit-Überblick über den Zustand Ihres Stromverteilnetzes ermöglicht frühzeitig Warnungen bei kritischen Betriebszuständen. Auch erhalten Sie einen Überblick über die Alterung Ihrer Betriebsmittel und führen Sie eine preventive Instandhaltungen durch, bevor es zu Ausfällen kommt.  MoMe ermöglicht Ihnen ein nie dagewesenes Lastenmanagement zur Spannungshaltung und Vermeidung von Netzüberlastungen ',
                text2: '# Investionen ins Netz optimieren \n <br>' +
                    '# Netzzustand permanent beobachten und kontinuirlich verbessern \n<br>' +
                    '# Netzausbau: So viel wie nötig - so wenig wie möglich \n<br>' +
                    '# Ausfallzeiten minimieren \n<br>' +
                    '# Optimale Auslastung der Netze und Betriebsmittel \n<br>' +
                    '# Health-Monitoring für ein langlebiges Netz (KI) \n<br>' +
                    '# Smart-Grid-Analysis (KI-Schwachstellenermittlung) \n<br>' +
                    '# Power-Quality-Monitoring (KI) \n<br>' +
                    '# Preventive Maintenance (KI-gesteuert)'
            },
            beratung: {
                title: 'Entwicklung von  kundenspezifischen Lösungen',
                title1: 'Studien zur Netzintegration',
                title2: 'Simulation von Stromnetzen',
                title3: 'Power Quality Beurteilung',
                title4: 'DGUV V3 Messungen',
                title5: 'Netzimpedanzmessungen und Ermittlung Supraharmonische',
                text: 'Wollen Sie einen Ladetankstelle errichten, einen Wind- oder PV-Park konzeptionieren, oder einfach nur ein maßgeschneidertes Filterdesign für ihre Anlagen erhalten? Wir beraten Sie gerne!',
                text1: 'Sollten Sie eine unabhängige Expertenmeinung für die Netzintegration von Stromtankstellen oder ihrer Dezentralen Anlagen benötigen helfen wir Ihnen gerne weiter.',
                text2: 'Berechnungen und Simulationen in Matlab Simscape Electrical™ und DIgSILENT PowerFactory®',
                text3: 'Modellbildung von erneuerbaren Energie-Anlagen (EEA) in Matlab Simscape Electrical™ und DIgSILENT PowerFactory®.',
                text4: 'Elektrische Anlagen und Betriebsmittel müssen verschiedene technische Anforderungen erfüllen, damit sie an das elektrische Energieversorgungsnetz angeschlossen werden dürfen',
                text5: 'Wir können bis 36 kV die Kapazitäten von Netzanschlusspunkten von Wind- und Photovoltaikanlagen sowie von Verbrauchern messen, um ihre Netzintegration technisch und finanziell bewerten zu können.'
            },
            beratung1: {
                pagetitle: 'Entwicklung von  kundenspezifischen Lösungen',
                title: 'Übersicht',
                title2: 'Beschreibung',
                text: '- Konzeptionierung und Überprüfung des Blitzschutzes von WKA\n' +
                    '<br>- Konzeptionierung von Ladetankestellen E-Mobilty\n' +
                    '<br>- Elektrische Energiespeicherauslegung für Kreuzfahrschiffe\n' +
                    '<br>- Konzeptionierung von elektrischen Netzprüfungen und Betriebsmitteln im 16,7 Hz-Bahnnetzen\n' +
                    '<br>- Störungsbeseitigung an wechselrichterbetriebenen Anlagen',
                text2: 'Wir von morEnergy kommen aus der elektrischen Energienetze Forschung. Das vollumfängliche Wissen über diese elektrischen Systeme ist unsere Stärke. Wir verstehen uns jedoch nicht als akademische Theoretiker sondern arbeiten nach dem Hands-On-Prinzip.  '
            },
            beratung2: {
                titlepage: 'Studien zur Netzintegration',
                title1: 'Übersicht',
                title2: 'Beschreibung',
                text: '- Lastfluss-/ Kurzschlussberechnugen\n' +
                    '<br>- Oberschwingungsimpedanzen\n' +
                    '<br>- Dimensionierung von Betriebsmitteln\n' +
                    '<br>- Leistungs-/ Netzverlusteberechnung\n' +
                    '<br>- Netzausbauplanung',
                text2: 'Wir führen für Sie Berechnungen und Simulationen mit Hilfe der Software Matlab Simscape Electrical™ (früher SimPowerSystems™) und DIgSILENT PowerFactory® durch. Auf Grundlage unserer langjährigen Erfahrungen in dem Gebiet der Netzberechnung-/simulation bieten wir Ihnen von einfachen Lastflussberechnungen bis hin zu komplexen, dynamischen Netzsimulationen mit beratender Netzausbauplanung ein breites Spektrum an. In Matlab Simscape Electrical™ und DIgSILENT PowerFactory® führen wir neben RMS- bis zu EMT-Simulationen auch Oberschwingungs- analysen durch. Des Weiteren gehört die Auslegung bzw. Optimierung von Anlagenreglern und Filtern zu unserem Leistungsportfolio.'
            },
            beratung3: {
                titlepage: 'Simulation von Stromnetzen',
                title1: 'Übersicht',
                title2: 'Beschreibung',
                text: '- Lastfluss-/ Kurzschlussberechnugen\n' +
                    '<br>- Oberschwingungsimpedanzen\n' +
                    '<br>- Dimensionierung von Betriebsmitteln\n' +
                    '<br>- Leistungs-/ Netzverlusteberechnung\n' +
                    '<br>- Netzausbauplanung',
                text2: 'Wir führen für Sie Berechnungen und Simulationen mit Hilfe der Software Matlab Simscape Electrical™ (früher SimPowerSystems™) und DIgSILENT PowerFactory® durch. Auf Grundlage unserer langjährigen Erfahrungen in dem Gebiet der Netzberechnung-/simulation bieten wir Ihnen von einfachen Lastflussberechnungen bis hin zu komplexen, dynamischen Netzsimulationen mit beratender Netzausbauplanung ein breites Spektrum an. In Matlab Simscape Electrical™ und DIgSILENT PowerFactory® führen wir neben RMS- bis zu EMT-Simulationen auch Oberschwingungs- analysen durch. Des Weiteren gehört die Auslegung bzw. Optimierung von Anlagenreglern und Filtern zu unserem Leistungsportfolio.'
            },
            beratung4: {
                titlepage: 'Power Quality Beurteilung',
                title1: 'Übersicht',
                title2: 'Beschreibung',
                text: '- Ganzheitliche Betrachtung der Power Quality am Anschlusspunkt\n' +
                    '<br>- Spezialisierte Betrachtungen von möglichen Überspannungen\n' +
                    '<br>- Analyse der Ströme\n' +
                    '<br>- Analyse der Spannungen\n' +
                    '<br>- Report und Handlungsempfehlungen',
                text2: 'Neben Messungen mit unserem hauseigenen Messgerät ONIS führen wir für Sie Berechnungen und Simulationen mit der Software Matlab Simscape Electrical™ (früher SimPowerSystems™) und DIgSILENT PowerFactory® durch. Auf Grundlage unserer langjährigen Erfahrungen in dem Gebiet der Power Qualität können wir Ihnen ein genaues Bild ihrer Netztopografie an ihrem Netzanschlusspunkt geben. Weiter führen wir bei Bedarf In Matlab Simscape Electrical™ und DIgSILENT PowerFactory® neben RMS- bis zu EMT-Simulationen auch Oberschwingungsanalysen durch. Zu jeder Power Quality Beurteilung gehört auch ein ausführlicher Bericht mit Handlungsempfehlungen. '
            },
            beratung5: {
                titlepage: 'DGUV V3 Messungen',
                title1: 'Übersicht',
                title2: 'Beschreibung',
                text: '- Optische Prüfung von Schaltanlagen\n' +
                    '<br>- Überprüfung von HH-Sicherungsauslösungen\n' +
                    '<br>- Teilentladungsprüfungen an Betriebsmitteln\n' +
                    '<br>- Sekundärprüfung von Schutzrelais\n' +
                    '<br>- Überprüfung von Überwachungseinrichtungen\n' +
                    '<br>- Prüfungen/ Messungen zum Potentialausgleich',
                text2: 'Elektrische Anlagen und Betriebsmittel müssen verschiedene technische Anforderungen erfüllen, damit sie an das elektrische Energieversorgungsnetz angeschlossen werden dürfen. Wir bieten Ihnen die regelmäßigen Funktionsprüfungen zur Sicherstellung der Einhaltung der Anforderungen an. morEnergy hat sich unter anderem auf Messdienstleistungen an erneuerbaren Energieanlagen spezialisiert. Rund um diese Anlagen können wir verschiedene Mess- und Prüfdienstleistungen anbieten. Dazu gehören beispielsweise die Überprüfung der korrekten Einstellung und Funktion von Schutzrelais von Schaltanlagen. Weiterführend gehören Teilentladungsmessungen zu unserem Angebotsportfolio. Mit Hilfe der Teilentladungsmessungen können mögliche Isolationsfehler in beispielsweise Kabeln, Transformatoren oder Endverschlüsse frühzeitig detektiert werden.'  },
            beratung6: {
                titlepage: 'Netzimpedanzmessungen und Ermittlung Supraharmonische',
                title1: 'Übersicht',
                title2: 'Beschreibung',
                text: '- Zeit- und frequenzabhängige Impedanzmessungen von Anschlusspunkten und Anlagen auf der Nieder- und Mittelspannungsebene\n' +
                    '<br>- ONIS-690V: Spannungsbereich ≤ 690 Vrms\n' +
                    '<br>- ONIS-36kV: Spannungsbereich ≤ 36k Vrms\n' +
                    '<br>- Frequenzbereich 0…50 kHz\n' +
                    '<br>- Messung der Zeit- und Frequenzabhängigkeit\n' +
                    '<br>- Messung der Netzqualität\n' +
                    '<br>- Bewertung von Netzrückwirkungen',
                text2: 'Unsere Produkte messen die Kapazitäten von Netzanschlusspunkten von Wind- und Photovoltaikanlagen sowie von Verbrauchern, um ihre Netzintegration technisch und finanziell zu bewerten. Die neuen Geräte bieten eine erweiterte Auswertung, die den Kunden einen tieferen Einblick in ihr Netz/elektrische Anlage ermöglicht. Es kann objektiv ermittelt werden, wie viele erneuerbare Energieanlagen/Verbraucher an das Netz angeschlossen werden können und wie das Netz beeinflusst wird. Es kann eine großflächige Netzüberwachung mit automatisierter Analyse erreicht werden. Die Netzimpedanz spielt eine zentrale Rolle bei der Abschätzung der Anschlusskapazität von Netzanschlussknoten und bei der Bewertung der entstehenden Netzrückwirkungen von Erzeugern/Verbrauchern und der Einhaltung der damit verbundenen Normen. Insbesondere bei der Netzintegration von erneuerbaren Energieanlagen ist die frequenzabhängige Netzimpedanz von großem Interesse, da durch die enthaltene Leistungselektronik Oberschwingungsströme eingespeist werden, die an der Netzimpedanz zu unerwünschten Oberschwingungsspannungen führen. Die Entwicklung einer transportablen Messeinrichtung zur Bestimmung der zeit- und frequenzabhängigen Netzimpedanz auf der Mittelspannungsebene erlaubt eine bessere Anschlussbewertung als bisher, wodurch der Anschluss von erneuerbaren Energieanlagen ans Netz optimiert werden kann.' },
            news: {
                image: require('./assets/images/aktuelles.png'),
                title: 'Aktuelles ',
                caption: 'Hier finden sind Neuigkeiten, Presseartikel und alles was morEnergy interessiert und bewegt.'
            },
            jobs: {
                greeting: {
                    image: require('./assets/images/videos-min.jpg'),
                    title: 'Videos',
                    caption: 'morEnergy in bewegten Bildern'
                },
                presentations: {
                    image: require('./assets/images/videos-min.jpg'),
                    title: 'Präsentationen',
                    caption: 'morEnergy Präsentationen'
                },
                title: {
                    title: 'Stellenausschreibungen',
                    bg: '#0A2737',
                    color: '#fff'
                },
            },
            teamView: {
                greeting: {
                    image: require('./assets/images/team/team.png'),
                    mobileImg: require('./assets/images/team/team.png'),
                    title: 'Team morEnergy',
                    caption: 'Wir sind ein innovatives Ingenieurbüro für Stromverteilnetze und Erneuerbare Energien und wollen einen Beitrag zur Energiewende leisten. ' +
                        'Ein besonderer Fokus ist auf die Bestimmung der Impedanz von Netzverknüpfungspunkten und Anlagen gerichtet. ' +
                        'Hierzu haben wir je ein Messgerät für die Nieder- und Mittelspannungsebene entwickelt. '
                },
                greetingMobile: {
                    image: require('./assets/images/team.png'),
                    title: 'Team morEnergy',
                    caption: 'Wir sind ein innovatives Ingenieurbüro für Stromverteilnetze und Erneuerbare Energien und wollen einen Beitrag zur Energiewende leisten. ' +
                        'Ein besonderer Fokus ist auf die Bestimmung der Impedanz von Netzverknüpfungspunkten und Anlagen gerichtet. ' +
                        'Hierzu haben wir je ein Messgerät für die Nieder- und Mittelspannungsebene entwickelt. '
                },
                title: {
                    title: 'Unser Team',
                    mentor: 'Unsere Mentoren',
                    bg: '#fff',
                    color: '#0A2737'
                }
            },
            impressum: {
                title: {
                    title: 'Impressum',
                    bg: '#0A2737',
                    color: '#fff'
                },
                content: {
                    title: 'Impressum von morEnergy GmbH',
                    positions: [
                        'Georg-Wilhelm-Straße 187, D-21107 Hamburg',
                        'Telefon <a href="tel:+49040555546215" style="color: #0A2737;text-underline: none!important;">+49 (0)40 555 546 215</a>',
                        'E-Mail: <a href="mailto:info@morenergy.net" style="color: #0A2737;text-underline: none!important;">info@morenergy.net</a>',

                        'HRB: 137222, Amtsgericht Hamburg',
                        'USt-ID: DE301604999',

                        'Vertretungsberechtigte Geschäftsführer:',
                        'Dr.-Ing. Do',
                        'Dr.-Ing. Langkowski',
                        'Dr.-Ing. Jordan',
                    ],
                    second: {
                        title: 'Disclaimer – rechtliche Hinweise',
                        positions: [
                            {
                                title: '1. Haftungsbeschränkung',
                                description: 'Die Inhalte des Internetauftritts wurden mit größtmöglicher Sorgfalt und nach bestem Gewissen erstellt. Dennoch übernimmt der Anbieter dieser Webseite keine Gewähr für die Aktualität, Vollständigkeit und Richtigkeit der bereitgestellten Seiten und Inhalte.\n' +
                                    '<br>' +
                                    'Als Diensteanbieter ist der Anbieter dieser Webseite gemäß § 7 Abs. 1 TMG für eigene Inhalte und bereitgestellte Informationen auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich; nach den §§ 8 bis 10 TMG jedoch nicht verpflichtet, die übermittelten oder gespeicherten fremden Informationen zu überwachen. Eine Entfernung oder Sperrung dieser Inhalte erfolgt umgehend ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung. Eine Haftung ist erst ab dem Zeitpunkt der Kenntniserlangung möglich.'
                            },
                            {
                                title: '2. Externe Links',
                                description: 'Die Webseite enthält sog. „externe Links“ (Verlinkungen) zu anderen Webseiten, auf deren Inhalt der Anbieter der Webseite keinen Einfluss hat. Aus diesem Grund kann der Anbieter für diese Inhalte auch keine Gewähr übernehmen. \n' +
                                    'Für die Inhalte und Richtigkeit der bereitgestellten Informationen ist der jeweilige Anbieter der verlinkten Webseite verantwortlich. Zum Zeitpunkt der Verlinkung waren keine Rechtsverstöße erkennbar. Bei Bekanntwerden einer solchen Rechtsverletzung wird der Link umgehend entfernt.'
                            },
                            {
                                title: '3. Urheberrecht und Leistungsschutzrecht',
                                description: 'Die auf dieser Webseite veröffentlichten Inhalte, Werke und bereitgestellten Informationen unterliegen dem deutschen Urheberrecht und Leistungsschutzrecht. Jede Art der Vervielfältigung, Bearbeitung, Verbreitung, Einspeicherung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung des jeweiligen Rechteinhabers. Das unerlaubte Kopieren/Speichern der bereitgestellten Informationen auf diesen Webseiten ist nicht gestattet und strafbar.'
                            },
                            {
                                title: '4. Datenschutz',
                                description: 'Durch den Besuch des Internetauftritts können Informationen (Datum, Uhrzeit, aufgerufene Seite) über den Zugriff auf dem Server gespeichert werden. Es werden keine personenbezogenen (z. B. Name, Anschrift, E-Mail- oder IP-Adresse) Daten, gespeichert.\n' +
                                    '<br>' +
                                    '<br>' +
                                    'Sofern personenbezogene Daten erhoben werden, erfolgt dies, sofern möglich, nur mit dem vorherigen Einverständnis des Nutzers der Webseite. Eine Weitergabe der Daten an Dritte findet ohne ausdrückliche Zustimmung des Nutzers nicht statt.\n' +
                                    '<br>' +
                                    '<br>' +
                                    'Der Anbieter weist darauf hin, dass die Übertragung von Daten im Internet (z. B. per E-Mail) Sicherheitslücken aufweisen und ein lückenloser Schutz der Daten vor dem Zugriff Dritter nicht gewährleistet werden kann. Der Anbieter übernimmt keine Haftung für die durch solche Sicherheitslücken entstandenen Schäden.\n' +
                                    '<br>' +
                                    '<br>' +
                                    'Der Verwendung der Kontaktdaten durch Dritte zur gewerblichen Nutzung wird ausdrücklich widersprochen. Es sei denn, der Anbieter hat zuvor seine schriftliche Einwilligung erteilt. \n' +
                                    'Der Anbieter behält sich rechtliche Schritte für den Fall der unverlangten Zusendung von Werbeinformationen, z. B. durch Spam-Mails, vor.'
                            }
                        ]
                    }
                }
            },
            cookies: {
                title: 'Datenschutz',
                titlecook: 'Cookie policy',
                daten: [
                    {
                        title: '1. Datenschutz auf einen Blick\n' +
                            'Allgemeine Informationen\n',
                        text: 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten geschieht, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, die Sie persönlich identifizieren. Ausführliche Informationen zum Thema Datenschutz finden Sie in unserer unter diesem Text aufgeführten Datenschutzerklärung.\n' +
                            'Datenerhebung auf unserer Website\n' +
                            '<br><strong>Wer ist für die Datenerhebung auf dieser Website verantwortlich?\n</strong>' +
                            '<br>Die Datenverarbeitung auf dieser Website erfolgt durch den Betreiber der Website. Kontaktdaten finden Sie im Impressum dieser Website.' +
                            '<br><strong>Wie erheben wir Ihre Daten?\n</strong>' +
                            '<br>Zum einen werden Ihre Daten von Ihnen erhoben, indem Sie sie uns mitteilen. Dies können z.B. Daten sein, die Sie in einem Kontaktformular eingeben.\n' +
                            '<br>Weitere Daten werden von unseren IT-Systemen automatisch erhoben, wenn Sie die Website besuchen. Dies sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Zeitpunkt des Seitenaufrufs). Diese Daten werden automatisch erhoben, sobald Sie unsere Website besuchen.\n' +
                            '<br><strong>Wofür verwenden wir Ihre Daten?\n</strong>' +
                            '<br>Ein Teil der Daten wird gesammelt, um sicherzustellen, dass die Website fehlerfrei ist. Weitere Daten können verwendet werden, um Ihr Nutzerverhalten zu analysieren.\n' +
                            '<br><strong>Welche Rechte haben Sie in Bezug auf Ihre Daten?\n</strong>' +
                            '<br>Sie haben das Recht, jederzeit und kostenlos Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben auch das Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen. Hierfür sowie für weitere Fragen zum Thema Datenschutz stehen wir Ihnen unter der im Impressum angegebenen Adresse jederzeit zur Verfügung. Darüber hinaus haben Sie das Recht, sich an die zuständige Aufsichtsbehörde zu wenden.\n'


                    },
                    {
                        title: '2. Allgemeine Informationen und Pflichtangaben\n' +
                            'Datenschutzerklärung\n',
                        text: 'Die Betreiber dieser Seiten nehmen den Schutz Ihrer personenbezogenen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und gemäß den gesetzlichen Datenschutzbestimmungen sowie dieser Datenschutzerklärung.\n' +
                            '<br>Wenn Sie diese Website nutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Diese Datenschutzerklärung erläutert, welche Informationen wir sammeln und wie wir sie verwenden. Es wird auch erklärt, wie und zu welchem Zweck dies geschieht.\n' +
                            '<br>Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.\n' +
                            '<br>Hinweis auf die zuständige Stelle\n' +
                            '<br><strong>Verantwortlich für die Datenverarbeitung auf dieser Website ist:\n' +
                            'morEnergy GmbH\n</strong>' +
                            '<br>Vertreten durch Trung Do Tanh\n' +
                            '<br><strong>Widerruf Ihrer Einwilligung zur Datenverarbeitung\n</strong>' +
                            '<br>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Zustimmung möglich. Ihre Einwilligung können Sie jederzeit widerrufen. Zu diesem Zweck genügt eine formlose E-Mail-Benachrichtigung an uns. Die Rechtmäßigkeit der bis zum Widerruf durchgeführten Datenverarbeitung bleibt durch den Widerruf unberührt.\n' +
                            '<br><strong>Recht auf Datenübertragbarkeit\n</strong>' +
                            '<br>Sie haben das Recht, Daten, die wir aufgrund Ihrer Einwilligung oder zur Erfüllung eines Vertrages automatisch verarbeiten, in einem gängigen, maschinenlesbaren Format an Sie oder einen Dritten weiterzugeben. Wenn Sie die direkte Übermittlung der Daten an einen anderen Verantwortlichen wünschen, geschieht dies nur im Rahmen der technischen Möglichkeiten.\n' +
                            '<br><strong>SSL- oder TLS-Verschlüsselung\n</strong>' +
                            '\n' +
                            '<br>Diese Website verwendet aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie z.B. Bestellungen oder Anfragen, die Sie an uns als Betreiber der Website senden, SSL- oder TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass sich die Adresszeile des Browsers von "http://" auf "https://" ändert und am Schloss-Symbol in Ihrer Browserzeile. Bei aktivierter SSL- oder TLS-Verschlüsselung können die von Ihnen an uns übermittelten Daten nicht von Dritten gelesen werden.\n' +
                            '<br><strong>Auskunft, Sperrung, Löschung\n</strong>' +
                            '<br>Sie haben im Rahmen der gesetzlichen Bestimmungen ein Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger sowie den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Unter der im Impressum angegebenen Adresse für diese und weitere Fragen zum Thema personenbezogene Daten können Sie uns jederzeit kontaktieren.\n' +
                            '<br><strong>Widerspruch gegen Werbe-E-Mails\n</strong>' +
                            '<br>Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.\n'

                    },
                    {
                        title: '3. Datenerfassung auf unserer Website\n' +
                            'Cookies\n',
                        text: '<br>Einige der Internetseiten verwenden so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die von Ihrem Browser auf Ihrem Computer gespeichert werden.\n' +
                            '<br>Die meisten der von uns verwendeten Cookies sind so genannte "Session-Cookies". Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Terminal gespeichert, bis Sie sie löschen. Diese Cookies ermöglichen es uns, Ihren Browser bei Ihrem nächsten Besuch wiederzuerkennen.\n' +
                            '<br>Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall zulassen, Cookies für bestimmte Fälle akzeptieren oder generell ausschließen und beim Schließen des Browsers das automatische Löschen von Cookies aktivieren. Wenn Cookies deaktiviert werden, kann die Funktionalität dieser Website eingeschränkt sein.\n' +
                            '<br>Cookies, die für den elektronischen Kommunikationsprozess oder zur Bereitstellung bestimmter von Ihnen gewünschter Funktionen (z.B. Warenkorbfunktion) erforderlich sind, werden auf der Grundlage von Art. 6 Abs. 1 1 lit. f DSGVO. Der Webseitenbetreiber hat ein berechtigtes Interesse an der Speicherung von Cookies zur technisch einwandfreien und optimierten Erbringung seiner Dienste. Soweit weitere Cookies (z.B. Cookies zur Analyse Ihres Surfverhaltens) gespeichert werden, werden diese in dieser Datenschutzerklärung gesondert behandelt.\n' +
                            '<br><strong>Server-Protokolldateien\n</strong>' +
                            '<br>Der Anbieter der Seiten erhebt und speichert automatisch in sogenannten Server-Logfiles Informationen, die Ihr Browser automatisch an uns übermittelt. Das sind:\n' +
                            '<br>- Browsertyp und Browser-Version\n' +
                            '<br>- Verwendete Betriebssysteme\n' +
                            '<br>- Referrer URL\n' +
                            '<br>- Hostname des zugreifenden Rechners\n' +
                            '<br>- Uhrzeit der Serveranfrage\n' +
                            '<br>- IP-Adresse\n <br>' +
                            '<br>Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.\n' +
                            '<br>Die Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 1 lit. f DSGVO, die die Verarbeitung von Daten zur Erfüllung eines Vertrages oder vorvertraglicher Maßnahmen erlaubt.\n' +
                            '<br><strong>Formular\n</strong>' +
                            '<br>Wenn Sie uns Anfragen über das Abonnementformular senden, werden Ihre Angaben aus dem Anfrageformular einschließlich der von Ihnen angegebenen Kontaktdaten von uns zum Zwecke der Bearbeitung der Anfrage und bei Folgefragen gespeichert. Eine Weitergabe dieser Daten ohne Ihre Zustimmung erfolgt nicht.\n' +
                            '<br>Die Verarbeitung der im Abonnementformular eingegebenen Daten erfolgt daher ausschließlich auf der Grundlage Ihrer Einwilligung (§ 6 Abs. 1 lit. a DSGVO). Diese Einwilligung können Sie jederzeit widerrufen. Zu diesem Zweck genügt ei\n' +
                            '\n' +
                            '<br>ne formlose E-Mail-Benachrichtigung an uns. Die Rechtmäßigkeit der bis zum Widerruf durchgeführten Datenverarbeitung bleibt von dem Widerruf unberührt.\n' +
                            '<br>Die von Ihnen im Abonnementformular eingegebenen Daten bleiben bei uns, bis Sie die Löschung verlangen, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck der Datenspeicherung entfällt (z.B. nach Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen - insbesondere Aufbewahrungsfristen - bleiben unberührt.'
                    }
                ],
                positions: [
                    {
                        title: '_ga',
                        description: 'Dieses Cookie wird von Google Analytics installiert. Das Cookie wird verwendet, um Besucher-, Sitzungs- und Kampagnendaten zu berechnen und die Nutzung der Website für den Analysebericht der Website zu verfolgen. Die Cookies speichern Informationen anonym und weisen eine zufällig generierte Nummer zu, um eindeutige Besucher zu identifizieren.\n' +
                            '2 years\n' +
                            'Analytics',
                    },
                    {
                        title: '_gid',
                        description: 'Dieses Cookie wird von Google Analytics installiert. Das Cookie wird verwendet, um Informationen darüber zu speichern, wie Besucher eine Website nutzen, und hilft bei der Erstellung eines Analyseberichts über den Zustand der Website. Die gesammelten Daten, einschließlich der Anzahl der Besucher, der Quelle, aus der sie gekommen sind, und der Seiten, die in anonymisierter Form besucht wurden.\n' +
                            '1 day\n' +
                            'Analytics' },
                    {
                        title: '_gat',
                        description: 'Diese Cookies werden von Google Universal Analytics installiert, um die Anforderungsrate zu drosseln und so die Sammlung von Daten auf stark frequentierten Websites einzuschränken.\n' +
                            '1 minute\n' +
                            'Performance'},
                    {
                        title: '_gat_gtag_UA_161769463_1',
                        description: 'Google verwendet dieses Cookie zur Unterscheidung der Nutzer.\n' +
                            '1 minute\n' +
                            'Analytics' }
                ]
            },
            references: {
                title: 'Referenzen',
                styles: {
                    bg: '#fff',
                    color: '#0A2737'
                },
                content: {
                    forschung: 'Die Expertise der morEnergy GmbH hat sich aus langjähriger Forschungsarbeit der drei Gründer an der Helmut-Schmidt-Universität a. Unten ist ein Auszug der Projekte, die die drei Gründer während ihrer Zeit als wissenschaftliche Mitarbeiter an der Professur für Elektrische Energiesysteme bei Professor Dr.-Ing. Detlef Schulz bearbeitet haben.',
                    ourExpertise: {
                        title: 'Unsere Expertise',
                        content: 'Die Expertise der morEnergy GmbH hat sich aus langjähriger Forschungsarbeit der drei Gründer an der Helmut-Schmidt-Universität herausgebildet. Unten ist ein Auszug der Projekte, die die drei Gründer während ihrer Zeit als wissenschaftliche Mitarbeiter an der Professur für Elektrische Energiesysteme bei Professor Dr.-Ing. Detlef Schulz bearbeitet haben.'
                    },
                    projects: {
                        title: 'Projekte',
                        subtitle: 'Forschung'
                    },
                    toptext: {
                        text: 'Blitzschutzauslegung von Windkraftanlagen (europäischer WKA-Hersteller - unter NDA)',
                        text2: 'Elektrische Speicherauslegung für Kreuz-\n' +
                            'fahrtschiffe (europäische Werft - unter NDA)',
                        text3: 'Machbarkeitsstudie zur Bestimmung der Eingangsimpedanzen von Lokomotiven sowie 16,7-Hz- Bahnnetzen',
                        text4: 'Detektion von kritischen Netzresonanzen an Wechselrichtern für Fahrstuhlantriebe ',
                        text5: 'Analyse von problematischen supraharmonischen Störausendung von PV-Wechselrichtern und deren Verringerung durch optimale Filteranpassung\n' +
                            ''
                    },
                    gridboxes: [
                        {
                            year: '2015-2018',
                            text: 'Verbundprojekt<br>' +
                                'Netzharmonie',
                            modal: 'Die Expertise der morEnergy GmbH hat sich aus langjähriger Forschungsarbeit der drei Gründer an der Helmut-Schmidt-Universität herausgebildet. Unten ist ein Auszug der Projekte, die die drei Gründer während ihrer Zeit als wissenschaftliche Mitarbeiter an der Professur für Elektrische Energiesysteme bei Professor Dr.-Ing. Detlef Schulz bearbeitet haben.'
                        },
                        {
                            year: '2010-2011',
                            text: 'Strategie zur Netzintegration dezentraler Anlagen in Hamburg',
                            modal: 'Entwicklung eines Messgeräts zur Bestimmung der frequenzabhängigen Netzimpedanz auf der Hochspannungsebene bis 110 kV zur Bewertung der Verfügbarkeit von Netzkapazitäten als Systemgröße zur Dimensionierung von Energiespeichern'
                        },
                        {
                            year: '2013-2017',
                            text: '110 kV Netzimpedanzmess einrichtung',
                            modal: 'Entwicklung eines Messgerätes zur Bestimmung der zeit- und frequenzabhängigen Netzimpedanz auf der Mittelspannungsebene bis 20 kV'
                        },
                        {
                            year: '2008-2013',
                            text: 'Mittelspannung - Netzimpedanzmessei nrichtung',
                            modal: 'Entwicklung von zukünftigen Netzszenarien mit hohem EE-Anteil Strategievorschläge für den Netzausbau bzw. Netzoptimierung zur Netzintegration von EE-Anlagen Modellierung und Netzsimulation'
                        },
                        {
                            year: '05/2013-\n' +
                                '09/2013',
                            text: 'EEG-<br>' +
                                'Monitoring',
                            modal: 'Vorbereitung und Begleitung der Erstellung des Erfahrungsberichts 2014 gemäß § 65 EEG'
                        }

                    ]
                }
            }
        })
    ]
})
