var mongoose = require('mongoose');
var PackingItem = require('../models/PackingItem').model;
var Trip = require('../models/Trip');
var extend = require('util')._extend;

/**
* POST /items
* Create a new packing item
*/

exports.createPackingItem = function(req, res) {

  tripid = req.body.packing_item.trip_id

  if (!tripid) {
	console.log('!tripid: ' + tripid);
    res.status(500).json(null)
    return
  };
  Trip.findById(tripid).exec(function(err, trip) {
    if (err) {
	  console.log('err: ' + err);
      res.status(500).json(null);
    } else {
      item = new PackingItem(req.body.packing_item)
      item.save(function(){
        trip.packinglist.push(item)
        trip.save(function (err) {
          if (err) {
            res.status(500).json(null);
          };
          console.log("trip: " + JSON.stringify(trip));
          res.json({packing_item:item});
        })
      })
    }
  })

}

