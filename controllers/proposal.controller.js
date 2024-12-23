const Proposal = require('../models/proposal.model');

// Create Proposal
exports.createProposal = async (req, res) => {
    const { idUser, price, days, cover, idService } = req.body;

    try {
        const newProposal = new Proposal({ idUser, price, days, cover, idService });
        await newProposal.save();
        res.status(201).json({ message: 'Proposal created successfully', proposal: newProposal });
    } catch (err) {
        res.status(500).json({ message: 'Error creating proposal', error: err.message });
    }
};

// Get Proposals by Service ID
exports.getProposalsByServiceId = async (req, res) => {
    const { idService } = req.params;

    try {
        const proposals = await Proposal.find({ idService }).populate('idUser', 'firstname lastname image');
        res.status(200).json(proposals);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching proposals', error: err.message });
    }
};
exports.getProposalsByUserId = async (req, res) => {
    const { idUser } = req.params;

    try {
        const proposals = await Proposal.find({ idUser }).populate('idService', 'name');
        res.status(200).json(proposals);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching proposals', error: err.message });
    }
};

// Delete Proposal
exports.deleteProposal = async (req, res) => {
    const { id } = req.params;

    try {
        const proposal = await Proposal.findById(id);
        if (!proposal) return res.status(404).json({ message: 'Proposal not found' });

        await Proposal.findByIdAndDelete(id);
        res.status(200).json({ message: 'Proposal deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting proposal', error: err.message });
    }
};


// Delete Proposal
exports.acceptProposal = async (req, res) => {
    const { id } = req.params;

    try {
        const proposal = await Proposal.findById(id);
        if (!proposal) return res.status(404).json({ message: 'Proposal not found' });

        await Proposal.findByIdAndUpdate({_id:id}, { status: true });
        res.status(200).json({ message: 'Proposal deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting proposal', error: err.message });
    }
};