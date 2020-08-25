/**
  * @module VINDecoderLib
  *
  * Decode car VIN returning Year, make and model of car.
  */

'use strict';

const Configuration = require('./configuration');
const Environments = require('./Environments');
const MiscController = require('./Controllers/MiscController');
const ValidVIN = require('./Models/ValidVIN');
const InvalidVINEnteredException = require('./Exceptions/InvalidVINEnteredException');
const NOVINEnteredException = require('./Exceptions/NOVINEnteredException');
const VINNotFoundException = require('./Exceptions/VINNotFoundException');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of VINDecoderLib
    Configuration,
    Environments,
    // controllers of VINDecoderLib
    MiscController,
    // models of VINDecoderLib
    ValidVIN,
    // exceptions of VINDecoderLib
    InvalidVINEnteredException,
    NOVINEnteredException,
    VINNotFoundException,
    APIException,
};

module.exports = initializer;
