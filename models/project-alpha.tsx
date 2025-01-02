import { Schema, model, models } from 'mongoose'

const AlphaSchema = new Schema({
  projectName: { type: String, required: true },
  description: { type: String },
})
