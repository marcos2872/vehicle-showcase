import 'dotenv/config';
import app from './app';

const PORT = process.env.PORT || 5180;
app.listen(PORT, () => console.log(`Running server on port: ${PORT}`));
