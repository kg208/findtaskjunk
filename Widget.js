define(['dojo/_base/declare', 'jimu/BaseWidget'],
  function(declare, BaseWidget) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {
      // Custom widget code goes here

      baseClass: 'jimu-widget-FindTask'

      // my copy/paste crap starts here

      // dojo.require("esri.tasks.find"); // not sure if this is needed

      require([
        "esri/tasks/FindTask", "esri/tasks/FindParameters", "dojo/dom"
      ])

      var find, params;
      function init() {
        find = new esri.tasks.FindTask("http://maps.co.blaine.id.us/bcgis/rest/services/ParcelInfo/MapServer/");
        params = new esri.tasks.FindParameters();
        params.layerIds = [5];
        params.searchFields = ["Parcel_Num", "Owner1", "Owner2", "Prop_Adrs1", "Lgl_Desc1", "Lgl_Desc2", "Lgl_Desc3"];
      }

      function doFind() {
        params.searchText = dojo.byId("ownerName").value;
        find.execute(params, showResults);
      }

      function showResults(results) {
        var result, attribs;
        var s = ["<table border=\1"]
        <thead>
      				<tr>
      				<th field="Parcel_Num" width="6%">Parcel ID</th>
      				<th field="Owner1" width="15%">Owner 1</th>
      				<th field="Owner2" width="15%">Owner 2</th>
      				<th field="Prop_Adrs1" width="8%">Property Address</th>
      				<th field="Prop_Adrs2" width="8%">City</th>
      				<th field="Lgl_Desc1" width="8%">Legal 1</th>
      				<th field="Lgl_Desc2" width="8%">Legal 2</th>
      				<th field="Lgl_Desc3" width="8%">Legal 3</th>
      				<th field="Lgl_Desc4" width="8%">Legal 4</th>
      				<th field="Lgl_Desc5" width="8%">Legal 5</th>
      				</tr>
      			</thead>
      			</table>

        // var s = ["<table border=\"1\"><thead><tr style=\"background-color:#ccc;\"><td>Parcel_Num</td><td>Owner1</td><td>Owner1</td><td>Prop_Adrs1</td><td>Prop_Adrs2</td><td>Lgl_Desc1</td><td>Lgl_Desc2</td><td>Lgl_Desc4</td><td>Lgl_Desc5</td></tr></thead><tbody id=\"states\">"];
        dojo.forEach(results,function(result){
          attribs = result.feature.attributes;
            s.push("<tr><td>" + attribs.Parcel_Num + "</td><td>" + attribs.Owner1 + "</td><td>" + attribs.Owner2 + "</td><td>" + attribs.Prop_Adrs1 + "</td></tr>");
      });
        s.push("</tbody></table>");
        dojo.byId("tbl").innerHTML = s.join("");
      }

        dojo.ready(init);


      //this property is set by the framework when widget is loaded.
      //name: 'CustomWidget',


      //methods to communication with app container:

      // postCreate: function() {
      //   this.inherited(arguments);
      //   console.log('postCreate');
      // },

      // startup: function() {
      //  this.inherited(arguments);
      //  this.mapIdNode.innerHTML = 'map id:' + this.map.id;
      //  console.log('startup');
      // },

      // onOpen: function(){
      //   console.log('onOpen');
      // },

      // onClose: function(){
      //   console.log('onClose');
      // },

      // onMinimize: function(){
      //   console.log('onMinimize');
      // },

      // onMaximize: function(){
      //   console.log('onMaximize');
      // },

      // onSignIn: function(credential){
      //   /* jshint unused:false*/
      //   console.log('onSignIn');
      // },

      // onSignOut: function(){
      //   console.log('onSignOut');
      // }

      // onPositionChange: function(){
      //   console.log('onPositionChange');
      // },

      // resize: function(){
      //   console.log('resize');
      // }

      //methods to communication between widgets:

    });
  });
