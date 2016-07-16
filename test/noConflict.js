//-----------------------------------------------------------------------------
// Provide the option for compatability with older versions of this module.
//-----------------------------------------------------------------------------
(function() {

  "use strict";

  //---------------------------------------------------------------------------
  // native node libraries
  //---------------------------------------------------------------------------
  var assert = require('assert');

  //---------------------------------------------------------------------------
  // npm libraries
  //---------------------------------------------------------------------------

  //---------------------------------------------------------------------------
  // lib
  //---------------------------------------------------------------------------
  var dryify = require('../dryify.min.js');

  describe("dryify.noConflict()", function() {

    it("should return an instance of Dryify", function() {
      assert.equal(dryify.noConflict() instanceof dryify.Dryify, true);
    });

  });

}.call(this));