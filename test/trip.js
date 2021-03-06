//requires
var express = require('express');
var app = require('../app.js');
var request = require('supertest');
var Trip = require('../models/Trip');

describe('Trip Model', function(){

  //TRIP NAME
  it('should have a name', function(){
    n1 = 'MEXICO!!!'
    n2 = 'CUBA!!!!!'
    var t = new Trip({name: n2})
    t.should.have.property('name', n2)
    t.name = n2
    t.should.have.property('name', n2)
  })

  it('should save changes to the name flag', function(){
    var t = new Trip({name: "test"})
    t.should.have.property('name', "test");
    t.name = "changed";
    t.should.have.property('name', "changed")
  })

  it('should accept null', function(){
    var t = new Trip({name: null})
    t.should.have.property('name', null)
  })

  it('should have a default `name` of "My Trip"', function(){
   var  t = new Trip()
    t.should.have.property('name', 'My Trip')
  })

  //USER
  it('should save the user ID flag', function(){
    var t = new Trip({userID: '0'})
    t.should.have.property('userID', '0');
  })

  it('should save changes to the user flag', function(){
    var t = new Trip({userID: '0'})
    t.should.have.property('userID', '0');
    t.userID = '1';
    t.should.have.property('userID', '1')
  })

  it('should accept null', function(){
    var t = new Trip({userID: null})
    t.should.have.property('userID', null)
  })

  it('should have a default `userID` flag of `0`', function(){
    var t = new Trip()
    t.should.have.property('userID', '0')
  })

  //LOCATION FLAG
  it('should save the location flag', function(){
    var t = new Trip({location: "test"})
    t.should.have.property('location', "test");
  })

  it('should save changes to the location flag', function(){
    var t = new Trip({location: "test"})
    t.should.have.property('location', "test");
    t.location = "changed";
    t.should.have.property('location', "changed")
  })

  it('should accept null', function(){
    var t = new Trip({location: null})
    t.should.have.property('location', null)
  })
  it('should have a default `location` flag of `None`', function(){
   var  t = new Trip()
    t.should.have.property('location', "None")
  })

  //DATE FLAG
  it('should save the date flag', function(){
    var t = new Trip({date: "test"})
    t.should.have.property('date', "test");
  })

  it('should save changes to the date flag', function(){
    var t = new Trip({date: "test"})
    t.should.have.property('date', "test");
    t.date = "changed";
    t.should.have.property('date', "changed")
  })

  it('should accept null', function(){
    var t = new Trip({date: null})
    t.should.have.property('date', null)
  })
  it('should have a default `date` flag of `None`', function(){
   var  t = new Trip()
    t.should.have.property('date', "None")
  })

   //ARCHIVED FLAG
  it('should save the archived flag', function(){
    var t = new Trip({archived: true})
    t.should.have.property('archived', true);
  })

  it('should save changes to the archived flag', function(){
    var t = new Trip({archived: true})
    t.should.have.property('archived', true);
    t.archived = false;
    t.should.have.property('archived', false)
  })

  it('should accept null', function(){
    var t = new Trip({archived: null})
    t.should.have.property('archived', null)
  })

  it('should have a default `archived` flag of false', function(){
   var  t = new Trip()
    t.should.have.property('archived', false)
  })

})