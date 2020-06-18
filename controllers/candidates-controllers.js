
const { validationResult } = require('express-validator');
const mongoose = require('mongoose');
const HttpError = require('../models/http-error');
const Candidate = require('../models/candidate');
const User = require('../models/user');


const getCandidateById = async (req, res, next) => { 
  const candidateId = req.params.cid;

  let candidate;
  try {
    candidate = await Candidate.findById(candidateId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not find a candidate.',
      500
    );
    return next(error);
  }

  if (!candidate) {
    const error = new HttpError(
      'Could not find a candidate for the provided id.',
      404
    );
    return next(error);
  }

  res.json({ candidate: candidate.toObject({ getters: true }) });
};

const getCandidatesByUserId = async (req, res, next) => { 
  const userId = req.params.uid;


  let userWithCandidates;
  try {
    userWithCandidates = await User.findById(userId).populate('candidates');
  } catch (err) {
    const error = new HttpError(
      'Fetching candidates failed, please try again later',
      500
    );
    return next(error);
  }

  if (!userWithCandidates || userWithCandidates.candidates.length === 0) {
    return next(
      new HttpError('Could not find candidates for the provided user id.', 404)
    );
  }

  res.json({
    candidates: userWithCandidates.candidates.map(place =>
      candidate.toObject({ getters: true })
    )
  });
};

const createdCandidate = async (req, res, next) => { 
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }

  const { firstName, lastName, candidateId, poll } = req.body;



  const createdCandidate = new Candidate({
    firstName,
    lastName,
    candidateId,
    poll
  });

  let user;
  try {
    user = await User.findById(poll);
    console.log("User found: " + user)
  } catch (err) {
    console.log(err)
    const error = new HttpError('Creating candidate failed, please try again...', 500);
    return next(error);
  }

  if (!user) {
    const error = new HttpError('Could not find user for provided id', 404);
    return next(error);
  }

  console.log(user);
  console.log(createdCandidate);

  try {
    const sess = await mongoose.startSession();
    console.log(sess)
    sess.startTransaction();
    await createdCandidate.save({ session: sess });
    user.poll.push(createdCandidate);
    await user.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      'Creating candidate failed, please try again. \n' + err,
      500
    );
    return next(error);
  }

  res.status(201).json({ candidate: createdCandidate });
};

exports.getCandidateById = getCandidateById;
exports.getCandidatesByUserId = getCandidatesByUserId;
exports.createdCandidate = createdCandidate;
