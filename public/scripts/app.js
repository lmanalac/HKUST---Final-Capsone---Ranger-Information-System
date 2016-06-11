var app = angular.module('risApp',[]);
app.controller('browseController', function() {

    this.tab = 1;
    this.filtText = '';

    this.select = function(setTab) {

          this.tab = setTab;

          if (setTab === 2)
              this.filtText = "Vehicle";
          else if (setTab === 3)
              this.filtText = "Facility";
          else
              this.filtText = "";
      }

    this.isSelected = function (checkTab) {
            return (this.tab === checkTab);
        }


    projects=[
    {
      name:'Project 1',
      image: 'images/truck01.jpg',
      category: 'Vehicle',
      status:'Urgent',
      grantamount:'50000.00',
      description:'Description of Project 1',
      comment: ''
   },
   {
     name:'Project 2',
     image: 'images/truck02.png',
     category: 'Vehicle',
     status:'',
     grantamount:'55000.00',
     description:'Description of Project 2',
     comment: ''
  },
  {
    name:'Project 3',
    image: 'images/truck03.jpg',
    category: 'Vehicle',
    status:'',
    grantamount:'60000.00',
    description:'Description of Project 3',
    comment: ''
 },
 {
   name:'Project 4',
   image: 'images/truck04.png',
   category: 'Vehicle',
   status:'Urgent',
   grantamount:'75000.00',
   description:'Description of Project 4',
   comment: ''
 },
 {
   name:'Project 5',
   image: 'images/facility01.jpg',
   category: 'Facility',
   status:'Urgent',
   grantamount:'300000.00',
   description:'Description of Project 5',
   comment: ''
 },
 {
   name:'Project 6',
   image: 'images/facility02.jpg',
   category: 'Facility',
   status:'Urgent',
   grantamount:'250000.00',
   description:'Description of Project 6',
   comment: ''
 },


];

this.projects = projects;

});
