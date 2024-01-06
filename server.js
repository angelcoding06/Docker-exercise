import express from 'express';
import mongoose from 'mongoose';

const animal = mongoose.model('Animal',  new mongoose.Schema({
	tipo:	String,
	estado:	String,
}));


const app = express();

const mongodbconections = await mongoose.connect('mongodb://angel:password@mongoinstance:27017/animalesdb?authSource=admin')


app.get('/', async (req, res) => {
	console.log("listando animalesw");
	const animales = await animal.find();
	return res.send(animales);
});

app.get('/crear', async (req, res) => {
	await animal.create({tipo: 'gato', estado: 'feliz'});
	return res.send("ok");
});
app.listen(3000, () => {
		console.log('Server is listening on port 3000');
}
);

