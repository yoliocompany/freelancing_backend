const express = require('express');
const { createProposal, getProposalsByServiceId ,acceptProposal, getProposalsByUserId , deleteProposal } = require('../controllers/proposal.controller');
const router = express.Router();

router.post('/create', createProposal);
router.get('/service/:idService', getProposalsByServiceId);
router.get('/my/:idUser', getProposalsByUserId);
router.delete('/:id', deleteProposal);
router.put('/:id', acceptProposal);

module.exports = router;
