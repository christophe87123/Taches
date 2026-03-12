const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    titre: { type: String, required: true },
    description: String,
    categorie: { type: mongoose.Schema.Types.ObjectId, ref: 'Categorie' },
    priorite: { type: String, enum: ['basse', 'moyenne', 'haute'], default: 'moyenne' },
    statut: { type: String, enum: ['à faire', 'en cours', 'terminée'], default: 'à faire' },
    dateEcheance: Date,
    dateCreation: { type: Date, default: Date.now },
    dateModification: { type: Date, default: Date.now }
});

taskSchema.pre('save', function(next) {
    this.dateModification = Date.now();
    next();
});

module.exports = mongoose.model('Task', taskSchema);