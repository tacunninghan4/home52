let duck = {
    name: "Aflac",
    numLegs: 2


let duck = {
        name: "Aflac",
        numLegs: 2
      };
      console.log(duck.name);



    

      let duck = {
        name: "Aflac",
        numLegs: 2,
        sayName: function() {return "The name of this duck is " + duck.name + ".";}
      };
      duck.sayName()



      let duck = {
        name: "Aflac",
        numLegs: 2,
        sayName: function() {return "The name of this duck is " + this.name + ".";}
      };


      function Bird() {
        this.name = "Albert";
        this.color = "blue";
        this.numLegs = 2;
      }



      function Bird() {
        this.name = "Albert";
        this.color  = "blue";
        this.numLegs = 2;
      }
      
      let blueBird = new Bird();



      function Bird(name, color) {
        this.name = name;
        this.color = color;
        this.numLegs = 2;


        let canary = {
            name: "Mildred",
            color: "Yellow",
            numLegs: 2
          };
          
          canary instanceof Bird;



          let ownProps = [];

          for (let property in duck) {
            if(duck.hasOwnProperty(property)) {
              ownProps.push(property);
            }
          }
          
          console.log(ownProps);


          Bird.prototype.numLegs = 2;

          console.log(duck.numLegs);
          console.log(canary.numLegs);




