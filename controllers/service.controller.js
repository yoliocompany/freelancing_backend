const Service = require('../models/service.model');
const User = require('../models/user.model');

// Create Service
exports.createService = async (req, res) => {
    const { name, categorie, location, salary, description, image, idUser } = req.body;

    try {
        const newService = new Service({ name, categorie, location, salary, description, image, idUser });
        await newService.save();
        res.status(201).json({ message: 'Service created successfully', service: newService });
    } catch (err) {
        res.status(500).json({ message: 'Error creating service', error: err.message });
    }
};

// Get All Services with User Info
exports.getServices = async (req, res) => {
    try {
        const services = await Service.find().populate('idUser', 'firstname lastname image');
        res.status(200).json(services);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching services', error: err.message });
    }
};
exports.getMyServices = async (req, res) => {
    try {
        const services = await Service.find({ idUser: req.params.id }).populate('idUser', 'firstname lastname image');
        res.status(200).json(services);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching services', error: err.message });
    }
};

// Get Service by ID
exports.getServiceById = async (req, res) => {
    const { id } = req.params;

    try {
        const service = await Service.findById(id).populate('idUser', 'firstname lastname image');
        if (!service) return res.status(404).json({ message: 'Service not found' });

        res.status(200).json(service);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching service', error: err.message });
    }
};

// Edit Service
exports.editService = async (req, res) => {
    
    try {
        const { id } = req.params;
        const service = await Service.findById(id);
        if (!service) return res.status(404).json({ message: 'Service not found' });

        await Service.findByIdAndUpdate({ _id: id }, req.body);
        res.status(200).json({ message: 'Service updated successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error updating service', error: err.message });
    }
};

// Delete Service
exports.deleteService = async (req, res) => {
    const { id } = req.params;

    try {
        const service = await Service.findById(id);
        if (!service) return res.status(404).json({ message: 'Service not found' });

        await Service.findByIdAndDelete(id);
        res.status(200).json({ message: 'Service deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting service', error: err.message });
    }
};
