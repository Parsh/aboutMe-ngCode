export class DataService {

  private homeData = [
    {
      mainHeading: {
        title: "Materializing Artificial Intelligence",
        class: 'h1-responsive wow fadeInLeft',
          id : 'main-title',
          delay: '1.1s'
      },
      subHeading: {
        title: "#MachinesMeetCognition",
        class: 'h4-responsive wow fadeInRight',
        delay: '1.3s'
      },
      class: 'ml view hm-black-strong',
      button: {
        isAvailable : true ,
        url : 'MLandAI',
        class : 'btn btn-primary btn-lg z-depth-5 waves-effect waves-light wow bounceInUp'
      }
    },

    {
      mainHeading: {
        title: "The Next Gen Web Apps",
        class: 'h1-responsive wow fadeInUp',
        id : 'main-title',
        delay: '0.7s'
      },
      subHeading: {
        title: "#DeSignTHeFuture",
        class: 'h4-responsive wow fadeInDown',
        delay: '1.2s'
      },
      class: 'web view hm-black-strong',
      button: {
        isAvailable : true ,
        url : 'webDev',
        class : 'btn btn-primary btn-lg z-depth-5 wow rotateInUpLeft'
      }
    },

    {
      mainHeading: {
        title: "Thatz My Y?",
        class: 'display-4 wow rotateIn',
        id : 'main-title',
        delay: '0.7s'
      },
      subHeading: {
        title: "#UnderstandingTheCosmos",
        class: 'h3-responsive wow flipInY',
        delay: '1s'
      },
      class: 'space view hm-black-strong',
      button: {
        isAvailable : false
      }
    }
  ];

   getHomeData(){
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
      subHeading2 : {
        title: "#MachineLearningEngineer[ Core AI ]",
        class: 'h4-responsive wow rotateInUpRight',
        delay: '1.1s'
      },
      class: 'mLAndAI view overlay hm-black-strong',
      button: {
        isAvailable : false
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
        id : 'main-title',
        delay: '2s'
      },
      subHeading2 : {
        title: "#ThePythonDeveloper",
        class: 'h4-responsive wow rotateInUpRight text-muted',
        delay: '3s'
      },
      class: 'mLAndAI view overlay hm-black-strong',
      button: {
        isAvailable : false
      }
    }
  ]

  getMLData(){
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
     subHeading2 : {
       title: "#FullStackWebDeveloper",
       class: 'h4-responsive wow fadeInRight',
       delay: '0.6s'
     },
     class: 'webdev view hm-black-strong',
     button: {
       isAvailable : false
     }
   }

 ]

  getWebData(){
    return this.webData;
  }

}
