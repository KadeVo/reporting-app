import { Schema, model, models } from 'mongoose'

const ReportTestCaseSchema = new Schema({
  testName: { type: String, required: true },
  isChecked: { type: Boolean, default: false },
  comment: { type: String, default: '' },
})

const ReportSchema = new Schema({
  projectId: { type: Schema.Types.ObjectId, ref: 'Project' },
  testCases: [ReportTestCaseSchema],
  createdAt: { type: Date, default: Date.now },
})

export const Report = models.Report || model('Report', ReportSchema)
