//requires
var assert = require("assert");
var should = require('should');
var express = require('express');
var ItineraryItem = require('../models/ItineraryItem').model;
var Trip = require('../models/Trip');
var app = require('../app.js');
var request = require('supertest');

var testTrip = new Trip({name: "Test Trip"});

before(function() {
  testTrip.save(function(err) {
    if (err && err.code != 11000) { //Create a test trip. If trip exists (err.code 11000 returned), do nothing.
      assert.fail(err, null, 'Test trip creation error.')
    }
  })
})

describe('Itinerary Items', function() {

  itineraryItem1Title = "Test Item 1";
  itineraryItem1 = new ItineraryItem({title: itineraryItem1Title});

  itineraryItem2Title = "Test Item 2";
  itineraryItem2 = new ItineraryItem({title: itineraryItem2Title});

  it('should have a name', function(done) {
    item_name = "trip item name"
    itineraryItem = new ItineraryItem();
    itineraryItem.name = item_name;
    assert.equal(itineraryItem.name, item_name)
    done()
  })

  it('should have a scheduled_at Date, defaulting to null', function(done) {
    now = new Date()
    itineraryItem = new ItineraryItem()
    v = (itineraryItem.scheduled_at == '')
    v.should.be.true
    itineraryItem.scheduled_at = '12/12/12'
    itineraryItem.scheduled_at.should.equal('12/12/12')
    done()
  })

  it('should have a location with a name, lat, and long', function(done) {
    item = {
      location_name: "Takeoff from YWG",
      latitude: 49.89,
      longitude: -97.1,
    }
    itineraryItem = new ItineraryItem(item)
    itineraryItem.should.have.properties(['location_name', 'latitude', 'longitude'])
    done()
  })

});

after(function() {
  testTrip.remove()
})
