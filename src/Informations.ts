export interface Informations {
  avatar: {
    avatarOne: string;
    avatarTwo: string;
  };
  educationInformations: {
    nameOfOrganization: string;
    startYear: string;
    endYear: string;
    details: string;
  }[];
  experienceInformations: {
    nameOfOrganization: string;
    startYear: string;
    endYear: string;
    details: string;
  }[];
  photos: {
    url: string;
  }[];
  skillsInformation: {
    name: string;
    progress: number;
    backgroundColor: any;
  }[];
}

const informations: Informations = {
  avatar: {
    avatarOne:
      'https://lh3.googleusercontent.com/pw/ACtC-3epfH7nv1M0gjlxBPvjEuzVhub4UxRHhjAQXJoj32Q9-N6q6b0m8GX49RkVZCaDcXk4CjofoCgH-AabzYJ_cs8oSET1qfdHKtj98MKtx1v4dpndoBmvskb6Mlb6-fravD4EDkvQggGuFv8-_ccNRtcgFA=w912-h861-no',
    avatarTwo:
      'https://lh3.googleusercontent.com/pw/ACtC-3fkT2wC_oB8Y4Fo48qOW6acvyLmAhr7NoFlLzb1Vnh-5qY_FDc_1ktlCP42JrwK5_TpT6PyAJZ18v63iAk-hIGQ6xnQEDw1agvzeGw_U8j-RN6ipnl6Z-1bHyfdL8jbLAXmXPJRNaGN1Qi6oq0k-6ntEQ=w800-h741-no',
  },
  educationInformations: [
    {
      nameOfOrganization: 'DecodeMtl(Concordia Bootcamp)',
      startYear: 'April, 2019',
      endYear: 'May, 2019',
      details:
        'I attend DecodeMtl coding bootcamp. Intensive full stack web development bootcamp where I gathered knowledge about React, Redux, Node, Express. For project, I worked in a team of four member including me. Together we build a meal delivery website, for more information kindly look in to may github or linkedIn',
    },
    {
      nameOfOrganization: 'Concordia University',
      startYear: '2016',
      endYear: '2018',
      details:
        "I have completed my Master's of Engineering from Concordia University in Electrical and Computer Engineering. Where I gathered information about how computer hardware work in cpu level, model driven architecture, signal processing, digital communication and so on.",
    },
    {
      nameOfOrganization: 'Narula Institute of Technology(India)',
      startYear: '2011',
      endYear: '2015',
      details:
        "I have completed my Bachelor's of Technology in Electronics and Communication Engineering, learned about analogue signal,digital signal, basics of solid states, wireless communication, digital communication and so on.",
    },
  ],
  experienceInformations: [
    {
      nameOfOrganization: 'Guiker Inc, Montreal  — Junior Software Developer',
      startYear: 'July, 2019',
      endYear: 'Present',
      details:
        'My job is to provide assistance to my team where we work on Mobile applications for iOS and android. Also rebuilding the existing product(www.guiker.com) and its functionality The tools we are using Expo, Typescript, Jest, React Native, React, Material UI, JSS, Axios Etc.',
    },
    {
      nameOfOrganization: 'React Portfolio — Personal',
      startYear: '2020',
      endYear: '2020',
      details:
        'I create a portfolio by using React, React Hooks, Typescript, Yup for validation,React-MapGl, axios for api call. Jest for testing and some animation tools. I use JSS with fully controlled style. Also use React-bootstrap for some animation and elements. For Back end I use NodeJS, with express, typescript, cors, yup for validation, nodemailer with mailgun.',
    },
    {
      nameOfOrganization: 'Vue Portfolio — Personal',
      startYear: '2020',
      endYear: '2020',
      details:
        'I create a  portfolio by using Vue, Vuex state management, Javascript, Yup for validation, axios for api call. I use CSS for styling for most of the part. Also use Vue-bootstrap for some animation and little styling. For Back end I use NodeJS, with express, typescript, cors, yup for validation, nodemailer with mailgun.',
    },
    {
      nameOfOrganization: 'CoronaVirus-tracker — Personal',
      startYear: '2020',
      endYear: '2020',
      details:
        'An application where we can track the activity of Covid-19 based on country, continent, province with several factors and graphs. Built on React native,Typescript,React-native Element, Axios, Redux-toolkit. For source code kindly check my github. Here is demo link for it : youtu.be/e_fFipPN9Ic .',
    },
    {
      nameOfOrganization: 'Meal Delivery App, Montreal — Co-member(DecodeMtl)',
      startYear: 'April, 2019',
      endYear: 'May, 2019',
      details:
        'Marketplace where customers can order food and sellers can manage their items. Built in 10 days with a team of 4, this is a full stack application built with React, Redux, Express & MongoDB, where I tackled most of the front-end, including all the major views, animations, and state management. For source code kindly check my github. Here is demo link for it : youtu.be/CKuMCXpg-3Q . ',
    },
    {
      nameOfOrganization: 'Fusion BPO Services, Montreal  — Technical support representative',
      startYear: 'June, 2018',
      endYear: 'June, 2019',
      details:
        'My job was providing technical support for general computer or gadget troubleshooting. I help people remove malware, install new programs, or learn how to use Windows and Macintosh operating systems or any electronic gadget which requires internet.',
    },
    {
      nameOfOrganization: 'IEEE Publication, India — Main Author',
      startYear: 'Jan, 2016',
      endYear: 'Jan, 2016',
      details:
        'Authored a paper on an embedded hardware project, "Controlling an Embedded Robot through Image Processing based Object Tracking using MATLAB”. The publication is about a robot where users can instruct it to do commands by specific color object. The robot automatically tracks the specific object.',
    },
    {
      nameOfOrganization: 'ESL, Kolkata, India  — Trainee',
      startYear: 'May, 2015',
      endYear: 'July, 2015',
      details:
        'Led a team of 5 to create a Matlab-controlled Arduino robot. By uploading an image, users could instruct the robot to do commands, such as it follows the specific color. A paper on this project was published through IEEE, a major science publisher.',
    },
    {
      nameOfOrganization: 'STQC Directorate run by Government of India, Kolkata, India — Trainee',
      startYear: 'June, 2014',
      endYear: 'July, 2014',
      details:
        'STQC provides quality assurance services in the area of Electronics and IT through a country wide network of laboratories and centres.Completed two projects based on PLC(Programmable Logic Controller). Sequential Control of three motors Automatic Traffic Control.',
    },
    {
      nameOfOrganization: 'For Other Projects — Personal',
      startYear: 'April, 2019',
      endYear: 'Present',
      details: 'For other projects kindly checkout my github link. http://github.com/sk-izsk ',
    },
  ],
  photos: [
    {
      url:
        'https://lh3.googleusercontent.com/pw/ACtC-3fn3fohPamP-S-zK3KcM922JgG3qK-MpoGUQyKxGMa4fiSHBWE7GocRT4TEQTQ2RJ-os9-5PBZ9HsOUH9WA82DwhAFK4pJvtZax-03UaLVDZFmQKZNlfr2WzP__mfdzhzikyJp0vokt82o62rCQ05mfKA=w1391-h927-no',
    },
    {
      url:
        'https://lh3.googleusercontent.com/pw/ACtC-3eQQqwZSCuzi8WmWIpCtNxxeWPKgRFY3W8xxDHKTfR2dvxO_xACqMWjkbZdGMrw8AFIpPrniAefxLdvQuljOeKV0U5tmssgwkr8Z27rjNuH7UJ8x0P7yfGRIluskInKtwwQoxx6YPsMyqRQuZdiVdAGog=w1391-h927-no',
    },
    {
      url:
        'https://lh3.googleusercontent.com/pw/ACtC-3fvoWyn4aTnVPqsc4nyVyiSxV4peiPbQGlNPvTXNkdBgYJ7KTqCUhtmrUtzQw60geTDJC-hiyPqX_uh8uAuhhXAtIrigS48BXBvr_LSo1S16qqtF1CX4_g_CqjopQdlwKQGhMpFqZ5YNFAMRxJJI0Ueag=w1391-h927-no',
    },
    {
      url:
        'https://lh3.googleusercontent.com/pw/ACtC-3cX6nKa7XhUbbYnwTeWvZa6VovsMIVzF8GltehNe91O07bnKb9AnuxCpAJ3lHSvfR8T7mPde5WOu3UKbftvBOuSayjAhMd2ZwDKl_f5dAyVl0O8jgQgmHPA-AswABMQEF8V4eaBIaj3Oc5vOpU-13Adbw=w1391-h927-no',
    },
    {
      url:
        'https://lh3.googleusercontent.com/pw/ACtC-3fK0Axi7ncyuRm63A8nrehtXoSIXabywMfhUnyWuErfzZF8r7ZcJhx6Gjc5FcDPlH89xBPtosNEdHBZhkn8M2Jj3_E3rTyJaK8x1KRP539tExiAm2fMLF23OIJkzLqLdu8Me_gPNohLXlW_cnebUVco4A=w1391-h927-no',
    },
    {
      url:
        'https://lh3.googleusercontent.com/pw/ACtC-3dRZQoh-SlCSZGzl-1g2tsTZOK7HCjsNQ97x12lT4eeOTkg0Xt49hoPAwYq9SSx56Fq2YqlFlume637PIwxDHyC9hMrrk7bHwe5VBlw6rQoeMV_BeQGbCxns4u7YdfC2ZFjIY9un3CjElVQLwl_WvSGJQ=w836-h927-no',
    },
    {
      url:
        'https://lh3.googleusercontent.com/pw/ACtC-3ebjvTFu1RTieS3Ao7LJkJLkVraeXYdjhfpHmQAlP9BEt_oEef64Dn7Aj7jq8qt5HkGhvdmjcFn68Hj1MFCCKShbEGIyH-K3AnZh6MuKX9sz0C1UKJBuvXlgfR0tci2LKa2fnjD95vLBB1EFjKT0rwQ1Q=w1391-h927-no',
    },
    {
      url:
        'https://lh3.googleusercontent.com/pw/ACtC-3ci7pPtJtX1mJ471oCJBKOxDIW7K4VzJQmoZbmXoztG5n9RY7AP51m1aCPn-nXY9tOYPr_wL52BBu3HwQ20DuvItkkU_yPgGAqEv7X0fzZJjO5qiD5ZilYU2kCAnf1JJrUT8CCj3N7u2PEC1kOLuvMU7Q=w1391-h927-no',
    },
  ],
  skillsInformation: [
    { name: 'React', progress: 80, backgroundColor: '#FFD15C' },
    { name: 'Typescript', progress: 75, backgroundColor: 'rgb(108, 108, 229)' },
    { name: 'Redux', progress: 75, backgroundColor: '#FF4C60' },
    { name: 'Vue', progress: 70, backgroundColor: '#41B883' },
    { name: 'Photography', progress: 70, backgroundColor: '#8B88B1' },
  ],
};

export { informations };
