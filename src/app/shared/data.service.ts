export class DataService {

  private homeData = [
    {
      mainHeading: {
        title: "Materializing Artificial Intelligence",
        class: 'h1-responsive wow fadeInLeft',
        id: 'main-title',
        delay: '1.1s'
      },
      subHeading: {
        title: "#MachinesMeetCognition",
        class: 'h4-responsive wow fadeInRight',
        delay: '1.3s'
      },
      class: 'ml view hm-black-strong',
      button: {
        isAvailable: true,
        url: 'MLandAI',
        class: 'btn btn-primary btn-lg z-depth-5 waves-effect waves-light wow bounceInUp'
      }
    },

    {
      mainHeading: {
        title: "The Next Gen Web Apps",
        class: 'h1-responsive wow fadeInUp',
        id: 'main-title',
        delay: '0.7s'
      },
      subHeading: {
        title: "#DeSignTHeFuture",
        class: 'h4-responsive wow fadeInDown',
        delay: '1.2s'
      },
      class: 'web view hm-black-strong',
      button: {
        isAvailable: true,
        url: 'webDev',
        class: 'btn btn-primary btn-lg z-depth-5 wow rotateInUpLeft'
      }
    },

    {
      mainHeading: {
        title: "Thatz My Y?",
        class: 'display-4 wow rotateIn',
        id: 'main-title',
        delay: '0.7s'
      },
      subHeading: {
        title: "#UnderstandingTheCosmos",
        class: 'h3-responsive wow flipInY',
        delay: '1s'
      },
      class: 'space view hm-black-strong',
      button: {
        isAvailable: false
      }
    }
  ];

  getHomeData() {
    return this.homeData;
  }

  private mlData = [
    {
      mainHeading: {
        title: "Enabling Machines to Learn without being Explicitly Programmed",
        class: 'h1-responsive wow rotateInDownLeft',
        delay: '1.1s'
      },
      subHeading: {
        title: "Deriving Intelligence From Data",
        class: 'h3-responsive wow flipInY text-muted',
        delay: '1.6s'
      },
      subHeading2: {
        title: "#MachineLearningEngineer[ Core AI ]",
        class: 'h4-responsive wow rotateInUpRight',
        delay: '1.1s'
      },
      class: 'mLAndAI view overlay hm-black-strong',
      button: {
        isAvailable: false
      }
    },
    {
      mainHeading: {
        title: "Y to Even Code at the First Place ..??",
        class: 'h2-responsive wow rollIn text-muted',
        delay: '0.6s'
      },
      subHeading: {
        title: "",
        class: 'h1-responsive wow zoomInDown',
        id: 'main-title',
        delay: '2s'
      },
      subHeading2: {
        title: "#ThePythonDeveloper",
        class: 'h4-responsive wow rotateInUpRight text-muted',
        delay: '3s'
      },
      class: 'mLAndAI view overlay hm-black-strong',
      button: {
        isAvailable: false
      }
    }
  ]

  getMLData() {
    return this.mlData;
  }

  private webData = [
    {
      mainHeading: {
        title: "Developing Scalable Web Apps from The Very Scratch",
        class: 'h1-responsive wow flipInX',
        delay: '0.5s'
      },
      subHeading: {
        title: "Node , Angular , MongoDB , UI/UX #FramingEverything",
        class: 'h3-responsive wow flipInY text-muted',
        delay: '1s'
      },
      subHeading2: {
        title: "#FullStackWebDeveloper",
        class: 'h4-responsive wow fadeInRight',
        delay: '0.6s'
      },
      class: 'webdev view hm-black-strong',
      button: {
        isAvailable: false
      }
    }

  ]

  getWebData() {
    return this.webData;
  }

  private mlAndAiInformation = {


    page1: [
      { divider: 'My MachineLearning Skill Set' },

      {
        rows: [
          {
            type: "row",
            cards: [
              {
                content: true,
                column: "col-md-6 col-sm-12",
                title: "ML Foundation",
                text: "Machine learning is the science of getting computers to act without being explicitly programmed. In the past decade, machine learning has given us self-driving cars, practical speech recognition, effective web search, and a vastly improved understanding of the human genome. Machine learning is so pervasive today that you probably use it dozens of times a day without knowing it.",
                university: "University of Washington",
                class: 'card z-depth-5 waves-effect wow fadeInUp'
              },
              {
                content: true,
                column: "col-md-6 col-sm-12",
                title: "Regression",
                text: "It is one of the most important and broadly used machine learning and statistics tools out there. It allows you to make predictions from data by learning the relationship between features of your data and some observed, continuous-valued response.",
                university: "University of Washington",
                class: 'card z-depth-5 waves-effect wow fadeInLeft'
              }
            ]
          },

          {
            type: "row",
            cards: [
              {
                content: true,
                column: "col-md-6 col-sm-12",
                title: "Classification",
                text: "Classification is one of the most widely used techniques in machine learning, with a broad array of applications, including sentiment analysis, ad targeting, spam detection, risk assessment, medical diagnosis and image classification.The core goal of classification is to predict a category or class y from some inputs x.",
                university: "University of Washington",
                class: 'card z-depth-5 waves-effect wow fadeInRight'
              },
              {
                content: true,
                column: "col-md-6 col-sm-12",
                title: "Clustering and Retrieval",
                text: "Clustering and retrieval are some of the most high-impact machine learning tools out there. Retrieval is used in almost every applications and device we interact with, like in providing a set of products related to one a shopper is currently considering, or a list of people you might want to connect with on a social media platform",
                university: "University of Washington",
                class: 'card z-depth-5 waves-effect wow fadeInDown'
              }
            ]
          }
        ]
      }
    ],

    page2: [
      { divider: 'The Big Dog #Python' },

      {
        rows: [
          {
            type: "row",

            cards: [
              {
                content: true,
                column: "offset-md-1 col-md-6 col-sm-12",
                passable: true,
                title: "Y Python ?",
                text: "",
                class: 'card z-depth-5 waves-effect wow fadeInUpcard z-depth-5 waves-effect wow rubberBand'
              },
              {
                image: true,
                column: "col-md-5 col-sm-12",
                src: '../../assets/img/mLAndAI/python.jpg ',
                class: 'card z-depth-5 waves-effect'
              }
            ]
          }
        ]
      }
    ],

    page3: [
      { divider: 'My Python Specialization' },

      {
        rows: [
          {
            type: "row",
            column: "col-md-4 col-sm-6",
            cards: [
              {
                content: true,
                title: "Fundamentals",
                text: "",
                university: "University of Michigan",
                class: 'card z-depth-5 waves-effect wow fadeInUp'
              },
              {
                content: true,
                title: "Python Data Structures",
                text: "",
                university: "University of Michigan",
                class: 'card z-depth-5 waves-effect wow fadeInUp'
              },
              {
                content: true,
                title: "Web with Python",
                text: "",
                university: "University of Michigan",
                class: 'card z-depth-5 waves-effect wow fadeInUp'
              }
            ]
          },
          {
            type: "row",
            column: "col-md-4 col-sm-6",
            cards: [
              {
                content: true,
                title: "Databases with Python",
                text: "",
                university: "University of Michigan",
                class: 'card z-depth-5 waves-effect wow fadeInDown'
              },
              {
                content: true,
                title: "The Capstone Project",
                text: "",
                university: "University of Michigan",
                class: 'card z-depth-5 waves-effect wow fadeInDown'
              },
              {
                content: true,
                title: "Specilaization",
                text: "",
                university: "University of Michigan",
                class: 'card z-depth-5 waves-effect wow fadeInDown'
              }
            ]
          }
        ]

      }
    ]
  }


  getMLInformation() {
    return this.mlAndAiInformation
  }

  private webDevInformation = {

    page1: [
      { divider: "Stuff I'm Specialized In" },
      {
        rows: [
          {
            type: "row",
            column: "col-md-6 col-sm-12",
            cards: [
              {
                image: true,
                content: true,
                src: '../../assets/img/webDev/node.jpg',
                title: "Node JS",
                text: "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. ",
                university: "The Hong Kong University",
                class: "card hoverable waves-effect"
              },
              {
                image: true,
                content: true,
                src: '../../assets/img/webDev/angular.jpg',
                title: "Angular JS",
                text: "AngularJS is a structural framework for dynamic web apps. It lets you express your application's components clearly and succinctly. Angular's data binding and dependency injection makes it a Champ ",
                university: "Johns Hopkins University",
                class: "card hoverable waves-effect"
              }
            ]
          },
          {
            type: "row",
            column: "col-md-6 col-sm-12",
            cards: [
              {
                image: true,
                content: true,
                src: '../../assets/img/webDev/mongodb.jpg',
                title: "MongoDB",
                text: "Do What You Could Never Do Before!! MongoDB is the next-generation database that lets you create applications never possible before.Its NoSQL and uses a JSON data model that maps to your applications, and uses Dynamic schemas.",
                class: "card hoverable waves-effect"
              },
              {
                image: true,
                content: true,
                src: '../../assets/img/webDev/bootstrap.png',
                title: "BootStrap & Material Design ",
                text: "Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.Material Design!! Thatz the Google's Quantum Paper. ",
                university: "Johns Hopkins University",
                class: "card hoverable waves-effect"
              }
            ]
          }
        ]
      }
    ],
    page2: [
        { divider: "Developing Android Too" },
        {
          rows:[
            {
              type : 'row',

              cards:[
                {
                  content:true,
                  column:"col-md-4 col-sm-12",
                  title:"Currently Framing Android 7.0",
                  text:"Get your apps ready for the latest version of Android, with new system behaviors to save battery and memory. Extend your apps with multi-window UI, direct reply notifications , enhanced Doze and more.",
                  university:"The Hong Kong University",
                  class: 'card-block z-depth-3 waves-effect wow rubberBand'
                },
                {
                  image:true,
                  column:"col-md-8 col-sm-12",
                  src:'../../assets/img/webDev/android.jpg',
                  class: 'card z-depth-5 waves-effect view hm-zoom'
                }
              ]
            }
          ]
        }
    ],
    page3: [
      { divider: "The Little Pieces" },
      {
        rows: [
          {
            type: "row",
            column: "col-md-4 col-sm-12",
            cards: [
              {
                image: true,
                content: true,
                src: '../../assets/img/webDev/holytrinity.jpg',
                title: "The Holy Trinity",
                text: "HTML CSS and JavaScript",
                university: "The Hong Kong University",
                class: "card hoverable waves-effect wow fadeInUp"
              },
              {
                image: true,
                content: true,
                src: '../../assets/img/webDev/java.jpg',
                title: "Java",
                text: "Core Java And Advance",
                university: "Duke University",
                class: "card hoverable waves-effect wow fadeInUp"
              },
              {
                image: true,
                content: true,
                src: '../../assets/img/webDev/oop.jpg',
                title: "Object Oriented Programming",
                text: "Understanding Programs from an Object's perspective",
                university: "UC SanDiego",
                class: "card hoverable waves-effect wow fadeInUp"
              }
            ]
          }
        ]
      }
    ]

  }

  getWebDevInformation() {
    return this.webDevInformation;
  }

 private aboutInformation = {

   page1:[

     { divider: "Skill Stack" },
     {
       rows:[
         {
           type:'row',

           cards:[
                {
                  about : true ,
                  column : 'offset-sm-1 col-sm-10',
                  title: 'Machine Learning Developer',
                  status: '[Core AI]',
                  university:'specialization from University of Washington',
                  class : "card hoverable waves-effect z-depth-5  wow fadeInUp"
                },
                {
                  about : true ,
                  column : 'offset-sm-1 col-sm-10 ',
                  title: 'Full Stack Web Developer',
                  status : '[MEAN Stack 2.0]',
                  university:'specialization from The Hong Kong University',
                  class : "card hoverable waves-effect z-depth-5  wow fadeInDown"
                },
                {
                  about : true ,
                  column : 'offset-sm-1 col-sm-10 ',
                  title: 'Angular 2 Developer',
                  university:'specialization @Udemy',
                  class : "card hoverable waves-effect z-depth-5  wow fadeInUp"
                },
                {
                  about : true ,
                  column : 'offset-sm-1 col-sm-10 ',
                  title: 'Node JS',
                  status : '[Express]',
                  university:'specialization @Udemy',
                  class : "card hoverable waves-effect z-depth-5  wow fadeInDown"
                },
                {
                  about : true ,
                  column : 'offset-sm-1 col-sm-10 ',
                  title: 'Python Programmer',
                  university:'specialization from University of Michigan',
                  class : "card hoverable waves-effect z-depth-5  wow fadeInUp"
                },
                {
                  about : true ,
                  column : 'offset-sm-1 col-sm-10 ',
                  title: 'Android Developer',
                  university:'certification from The Hong Kong University',
                  class : "card hoverable waves-effect z-depth-5  wow fadeInDown"
                }
           ]
         }
       ]
     }

   ]

 };

  getAboutInformation(){
    return this.aboutInformation;
  }

}
