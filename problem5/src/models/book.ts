import { Schema, model, Document } from 'mongoose';

interface IBook extends Document {
  title: string;
  author: string;
  publishedDate: Date;
  genre: string;
  summary: string;
}

const bookSchema = new Schema<IBook>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedDate: { type: Date, required: true },
  genre: { type: String, required: true },
  summary: { type: String, required: true },
});

export default model<IBook>('Book', bookSchema);
