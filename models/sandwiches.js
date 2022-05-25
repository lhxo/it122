import mongoose from 'mongoose'

const sandwichSchema = mongoose.Schema({
    name: String,
    vessel: String,
    protein: Array,
    veggie: Array,
    dairy: Array,
    sauce: Array
});

export const SandwichModel = mongoose.model('SandwichModel', sandwichSchema);