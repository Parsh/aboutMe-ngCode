export class DataService {

  private homeData = [
    {
      mainHeading: {
        title: "Materializing Artificial Intelligence",
        class: 'h1-responsive wow fadeInLeft',
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

}
